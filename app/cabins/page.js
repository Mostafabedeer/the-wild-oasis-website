import { Suspense } from "react";
import CabinList from "../_components/CabinList";
import Spinner from "../_components/Spinner";
import Filter from "../_components/Filter";
import ReservationReminder from "../_components/ReservationReminder";

export const revalidate = 3600; // 1 hour

export const metadata = {
  title: "Cabins",
};

async function page({ searchParams }) {
  const resolvedSearchParams = await searchParams;
  const filter = resolvedSearchParams?.capacity ?? "all";
  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-accent-400 mb-3 text-2xl font-medium sm:mb-5 sm:text-3xl lg:text-4xl">
        Our Luxury Cabins
      </h1>
      <p className="text-primary-200 mb-6 max-w-3xl text-sm sm:mb-8 sm:text-lg lg:mb-10">
        Cozy yet luxurious cabins, located right in the heart of the Italian
        Dolomites. Imagine waking up to beautiful mountain views, spending your
        days exploring the dark forests around, or just relaxing in your private
        hot tub under the stars. Enjoy nature&apos;s beauty in your own little
        home away from home. The perfect spot for a peaceful, calm vacation.
        Welcome to paradise.
      </p>
      <div className="mb-4 flex justify-end">
        <Filter />
      </div>
      <Suspense fallback={<Spinner />} key={filter}>
        <CabinList filter={filter} />
        <ReservationReminder />
      </Suspense>
    </div>
  );
}

export default page;
