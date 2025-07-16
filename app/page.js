import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

function page() {
  return (
    <section className="mt-12 sm:mt-16 md:mt-20 lg:mt-24">
      <Image
        src={bg}
        fill
        placeholder="blur"
        quality={80}
        className="object-cover object-top"
        alt="Mountains and forests with two cabins"
      />

      <div className="relative px-4 text-center">
        <h1 className="text-primary-50 mb-6 text-4xl font-normal tracking-tight sm:mb-8 sm:text-6xl md:text-7xl lg:mb-10 lg:text-8xl">
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="bg-accent-500 text-primary-800 hover:bg-accent-600 inline-block px-4 py-3 text-base font-semibold transition-all sm:px-6 sm:py-4 sm:text-lg lg:px-8 lg:py-6"
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  );
}

export default page;
