import Spinner from "@/app/_components/Spinner";
import SubmitButton from "@/app/_components/SubmitButton";
import { updateReservationAction } from "@/app/_lib/actions";
import { getBooking, getCabin } from "@/app/_lib/data-service";
import { Suspense } from "react";

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { reservationId } = resolvedParams;
  const { cabinId, numGuests, observations } = await getBooking(reservationId);
  const { maxCapacity } = await getCabin(cabinId);

  // CHANGE
  // const reservationId = 23;
  // const maxCapacity = 23;

  return (
    <div>
      <h2 className="text-accent-400 mb-7 text-2xl font-semibold">
        Edit Reservation #{reservationId}
      </h2>

      <Suspense fallback={<Spinner />}>
        <form
          action={updateReservationAction}
          className="bg-primary-900 flex flex-col gap-6 px-12 py-8 text-lg"
        >
          <div className="space-y-2">
            <label htmlFor="numGuests">How many guests?</label>
            <select
              name="numGuests"
              id="numGuests"
              defaultValue={numGuests}
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

          <div className="space-y-2">
            <label htmlFor="observations">
              Anything we should know about your stay?
            </label>
            <textarea
              defaultValue={observations}
              name="observations"
              className="bg-primary-200 text-primary-800 w-full rounded-sm px-5 py-3 shadow-sm"
            />
          </div>

          <div className="flex items-center justify-end gap-6">
            <SubmitButton>Update reservation</SubmitButton>
          </div>
          <input type="hidden" name="reservationId" value={reservationId} />
        </form>
      </Suspense>
    </div>
  );
}
