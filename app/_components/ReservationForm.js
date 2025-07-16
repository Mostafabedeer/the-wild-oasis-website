"use client";

import { differenceInDays } from "date-fns";
import { useReservation } from "./ReservationContext";
import { createReservationAction } from "../_lib/actions";
import SubmitButton from "./SubmitButton";

function ReservationForm({ cabin, user }) {
  const { range, resetRange } = useReservation();
  const startDate = range.from;
  const endDate = range.to;
  const {
    maxCapacity,
    regularPrice: cabinPrice,
    discount,
    id: cabinId,
  } = cabin;
  const numNights = differenceInDays(endDate, startDate);
  const totalPrice = numNights * (cabinPrice - discount);

  const bookingData = {
    startDate,
    endDate,
    numNights,
    totalPrice,
    cabinPrice,
    cabinId,
  };

  const createReservationwithData = createReservationAction.bind(
    null,
    bookingData,
  );

  return (
    <div className="scale-[1.01]">
      <div className="bg-primary-800 text-primary-300 flex items-center justify-between px-6 py-2 md:px-16">
        <p className="text-sm md:text-base">Logged in as</p>

        <div className="flex items-center gap-4">
          <img
            // Important to display google profile images
            referrerPolicy="no-referrer"
            className="h-8 rounded-full"
            src={user.image}
            alt={user.name}
          />
          <p className="text-sm md:text-base"> {user.name}</p>
        </div>
      </div>

      <form
        action={async (formData) => {
          await createReservationwithData(formData);
          resetRange();
        }}
        className="bg-primary-900 flex flex-col gap-5 px-8 py-10 text-lg md:px-16"
      >
        <div className="space-y-2">
          <label htmlFor="numGuests">How many guests?</label>
          <select
            name="numGuests"
            id="numGuests"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            required
          >
            <option value="" key="">
              Select number of guests...
            </option>
            {Array.from({ length: maxCapacity }, (_, i) => i + 1).map((x) => (
              <option value={x} key={x}>
                {x} {x === 1 ? "guest" : "guests"}
              </option>
            ))}
          </select>
        </div>

        {range.from && range.to && (
          <p className="text-primary-500 text-sm md:text-base">
            from {String(range.from)} to {String(range.to)}
          </p>
        )}

        <div className="space-y-2">
          <label htmlFor="observations">
            Anything we should know about your stay?
          </label>
          <textarea
            name="observations"
            id="observations"
            className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            placeholder="Any pets, allergies, special requirements, etc.?"
          />
        </div>

        <div className="flex items-center justify-end gap-6">
          {!(startDate && endDate) ? (
            <p className="text-primary-300 text-base">
              Start by selecting dates
            </p>
          ) : (
            <SubmitButton>Reserve now</SubmitButton>
          )}
        </div>
      </form>
    </div>
  );
}

export default ReservationForm;
