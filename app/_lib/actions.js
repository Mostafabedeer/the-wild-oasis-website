"use server";

import { revalidatePath } from "next/cache";
import { auth, signIn, signOut } from "./auth";
import { supabase } from "./supabase";
import { getBookings } from "./data-service";
import { redirect } from "next/navigation";
import { is } from "date-fns/locale";

export async function createReservationAction(bookingData, formData) {
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to update a reservation");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    cabinId: bookingData.cabinId,
    numGuests: Number(formData.get("numGuests")),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    isPaid: false,
    hasBreakfast: false,
    status: "unconfirmed",
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be created");
  }

  revalidatePath(`cabins/${bookingData.cabinId}`);
  redirect("/cabins/thank-you");
}

export async function updateReservationAction(formData) {
  // 1- Authenticate the user
  const session = await auth();
  if (!session)
    throw new Error("You must be logged in to update a reservation");

  const reservationId = Number(formData.get("reservationId"));
  const numGuests = formData.get("numGuests");
  const observations = formData.get("observations").slice(0, 1000);

  // 2- authorize the user
  // Ensure the booking belongs to the logged-in user
  const guestBookings = await getBookings(session?.user?.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(Number(reservationId))) {
    throw new Error("You do not have permission to update this booking");
  }

  // 3- Update the booking
  const { error } = await supabase
    .from("bookings")
    .update({ numGuests: Number(numGuests), observations })
    .eq("id", reservationId);

  // 4- Handle errors
  if (error) {
    console.error(error);
    throw new Error("Booking could not be updated");
  }

  // 5- Revalidate the path and redirect
  revalidatePath(`/account/reservations/edit/${reservationId}`);
  revalidatePath("/account/reservations");
  redirect("/account/reservations");
}

export async function deleteReservationAction(bookingId) {
  const session = await auth();

  if (!session)
    throw new Error("You must be logged in to delete a reservation");

  // Ensure the booking belongs to the logged-in user
  const guestBookings = await getBookings(session?.user?.guestId);
  const guestBookingIds = guestBookings.map((booking) => booking.id);
  if (!guestBookingIds.includes(bookingId)) {
    throw new Error("You do not have permission to delete this booking");
  }

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) {
    console.error(error);
    throw new Error("Booking could not be deleted");
  }

  revalidatePath("/account/reservations");
}

export async function updateProfileAction(formData) {
  const session = await auth();
  if (!session) throw new Error("You must be logged in to update your profile");

  const nationalID = formData.get("nationalID");
  // Regex to match the national id format /^[a-zA-Z0-9]{6,12}$/
  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error(
      "Invalid national ID format. It should be 6 to 12 alphanumeric characters.",
    );

  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const updatedFields = {
    nationalID,
    nationality,
    countryFlag,
  };

  const { error } = await supabase
    .from("guests")
    .update(updatedFields)
    .eq("id", session?.user.guestId);

  if (error) {
    console.error(error);
    throw new Error("Guest could not be updated");
  }

  revalidatePath("/account/profile");
}

export async function signInAction() {
  await signIn("google", {
    redirectTo: "/account",
  });
}

export async function signOutAction() {
  await signOut({
    redirectTo: "/",
  });
}
