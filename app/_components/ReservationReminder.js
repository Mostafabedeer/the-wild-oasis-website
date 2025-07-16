"use client";

import { XMarkIcon } from "@heroicons/react/24/solid";
import { format } from "date-fns";
import { useReservation } from "./ReservationContext";

function ReservationReminder() {
  const { range, resetRange } = useReservation();

  if (!range.from || !range.to) return null;

  return (
    <div className="bg-accent-500 text-primary-800 fixed bottom-6 left-1/2 mx-4 flex w-9/12 -translate-x-1/2 flex-col items-center gap-2 rounded-full px-4 py-3 text-center font-semibold shadow-xl shadow-slate-900 sm:mx-0 sm:flex-row sm:gap-8 sm:px-8 sm:py-5 sm:text-left md:w-auto">
      <p className="text-xs md:text-base">
        <span>👋</span> Don&apos;t forget to reserve your dates <br /> from{" "}
        {format(new Date(range.from), "MMM dd yyyy")} to{" "}
        {format(new Date(range.to), "MMM dd yyyy")}
      </p>
      <button
        className="hover:bg-accent-600 cursor-pointer rounded-full p-1 transition-all"
        onClick={resetRange}
      >
        <XMarkIcon className="h-4 w-4 sm:h-5 sm:w-5" />
      </button>
    </div>
  );
}

export default ReservationReminder;
