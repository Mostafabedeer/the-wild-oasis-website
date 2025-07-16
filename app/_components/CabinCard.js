import { UsersIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

function CabinCard({ cabin }) {
  const { id, name, maxCapacity, regularPrice, discount, image } = cabin;

  return (
    <div className="border-primary-800 flex flex-col border sm:flex-row">
      <div className="relative h-48 sm:h-auto sm:w-1/3">
        <Image
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
          src={image}
          alt={`Cabin ${name}`}
          className="border-primary-800 border-b object-cover sm:border-r sm:border-b-0"
        />
      </div>

      <div className="flex-grow sm:w-2/3">
        <div className="bg-primary-950 px-4 pt-4 pb-3 sm:px-7 sm:pt-5 sm:pb-4">
          <h3 className="text-accent-500 mb-2 text-xl font-semibold sm:mb-3 sm:text-2xl">
            Cabin {name}
          </h3>

          <div className="mb-2 flex items-center gap-2 sm:gap-3">
            <UsersIcon className="text-primary-600 h-4 w-4 sm:h-5 sm:w-5" />
            <p className="text-primary-200 text-base sm:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </p>
          </div>

          <p className="flex items-baseline justify-end gap-2 sm:gap-3">
            {discount > 0 ? (
              <>
                <span className="text-2xl font-[350] sm:text-3xl">
                  ${regularPrice - discount}
                </span>
                <span className="text-primary-600 font-semibold line-through">
                  ${regularPrice}
                </span>
              </>
            ) : (
              <span className="text-2xl font-[350] sm:text-3xl">
                ${regularPrice}
              </span>
            )}
            <span className="text-primary-200">/ night</span>
          </p>
        </div>

        <div className="bg-primary-950 border-t-primary-800 border-t text-right">
          <Link
            href={`/cabins/${id}`}
            className="border-primary-800 hover:bg-accent-600 hover:text-primary-900 inline-block border-l px-4 py-3 text-sm transition-all sm:px-6 sm:py-4 sm:text-base"
          >
            Details & reservation &rarr;
          </Link>
        </div>
      </div>
    </div>
  );
}

export default CabinCard;
