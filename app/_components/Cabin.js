import { EyeSlashIcon, MapPinIcon, UsersIcon } from "@heroicons/react/24/solid";
import TextExpander from "./TextExpander";
import Image from "next/image";

function Cabin({ cabin }) {
  const { name, maxCapacity, image, description } = cabin;
  return (
    <div className="border-primary-800 mb-24 grid grid-cols-1 gap-6 border px-4 py-3 md:grid-cols-[3fr_4fr] md:gap-20 md:px-10">
      <div className="relative h-[300px] md:h-auto md:-translate-x-3 md:scale-[1.15]">
        <Image
          src={image}
          alt={`Cabin ${name}`}
          fill
          className="object-cover"
        />
      </div>

      <div>
        <h3 className="text-accent-100 bg-primary-950 mb-5 w-full p-4 pb-1 text-4xl font-black md:w-[150%] md:translate-x-[-254px] md:p-6 md:text-7xl">
          Cabin {name}
        </h3>

        <p className="text-primary-300 mb-6 text-base md:mb-10 md:text-lg">
          <TextExpander>{description}</TextExpander>
        </p>

        <ul className="mb-5 flex flex-col gap-3 md:mb-7 md:gap-4">
          <li className="flex items-center gap-2 md:gap-3">
            <UsersIcon className="text-primary-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-base md:text-lg">
              For up to <span className="font-bold">{maxCapacity}</span> guests
            </span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <MapPinIcon className="text-primary-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-base md:text-lg">
              Located in the heart of the
              <span className="font-bold">Dolomites</span> (Italy)
            </span>
          </li>
          <li className="flex items-center gap-2 md:gap-3">
            <EyeSlashIcon className="text-primary-600 h-4 w-4 md:h-5 md:w-5" />
            <span className="text-base md:text-lg">
              Privacy <span className="font-bold">100%</span> guaranteed
            </span>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Cabin;
