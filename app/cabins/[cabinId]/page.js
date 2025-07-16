import Reservation from "@/app/_components/Reservation";
import Spinner from "@/app/_components/Spinner";
import Cabin from "@/app/_components/Cabin";

import { getCabin, getCabins } from "@/app/_lib/data-service";
import { Suspense } from "react";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const { cabinId } = resolvedParams;
  const { name } = await getCabin(cabinId);
  return {
    title: `Cabin ${name}`,
    description: `Discover the stunning Cabin ${name} in the Dolomites. Perfect for a relaxing getaway with friends or family.`,
  };
}

export async function generateStaticParams() {
  const cabins = await getCabins();
  const cabinIds = cabins.map((cabin) => {
    return { cabinId: cabin.id.toString() };
  });
  return cabinIds;
}

export default async function Page({ params }) {
  const resolvedParams = await params;
  const { cabinId } = resolvedParams;
  const cabin = await getCabin(cabinId);

  return (
    <div className="mx-auto mt-8 max-w-6xl">
      <Cabin cabin={cabin} />
      <div>
        <h2 className="text-accent-400 mb-10 text-center font-semibold sm:text-lg md:text-4xl lg:text-5xl">
          Reserve {cabin.name} today. Pay on arrival.
        </h2>
        <Suspense fallback={<Spinner />}>
          <Reservation cabin={cabin} />
        </Suspense>
      </div>
    </div>
  );
}
