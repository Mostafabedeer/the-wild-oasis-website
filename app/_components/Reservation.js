import { auth } from "../_lib/auth";
import { getBookedDatesByCabinId, getSettings } from "../_lib/data-service";
import DateSelector from "./DateSelector";
import LoginMessage from "./LoginMessage";
import ReservationForm from "./ReservationForm";

async function Reservation({ cabin }) {
  const [settings, bookingDates] = await Promise.all([
    getSettings(),
    getBookedDatesByCabinId(cabin.id),
  ]);

  const seesion = await auth();
  return (
    <div className="border-primary-800 grid grid-cols-1 border md:grid-cols-2">
      <DateSelector
        settings={settings}
        cabin={cabin}
        bookedDates={bookingDates}
      />
      {seesion?.user ? (
        <ReservationForm cabin={cabin} user={seesion.user} />
      ) : (
        <LoginMessage />
      )}
    </div>
  );
}

export default Reservation;
