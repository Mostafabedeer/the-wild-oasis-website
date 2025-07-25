import Image from "next/image";
import image1 from "@/public/about-1.jpg";
import Link from "next/link";
import { getCabins } from "../_lib/data-service";

// Cache for 1 day
export const revalidate = 15;

export const metadata = {
  title: "About",
};

async function page() {
  const cabins = await getCabins();
  const cabinCount = cabins.length;
  return (
    <div className="grid grid-cols-1 items-center gap-y-8 px-4 text-base md:grid-cols-2 md:gap-x-12 md:px-8 lg:grid-cols-5 lg:gap-x-24 lg:gap-y-32 lg:text-lg">
      <div className="order-2 col-span-1 md:order-1 lg:col-span-3">
        <h1 className="text-accent-400 mb-6 text-3xl font-medium lg:mb-10 lg:text-4xl">
          Welcome to The Wild Oasis
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Where nature&apos;s beauty and comfortable living blend seamlessly.
            Hidden away in the heart of the Italian Dolomites, this is your
            paradise away from home. But it&apos;s not just about the luxury
            cabins. It&apos;s about the experience of reconnecting with nature
            and enjoying simple pleasures with family.
          </p>
          <p>
            Our {cabinCount} luxury cabins provide a cozy base, but the real
            freedom and peace you&apos;ll find in the surrounding mountains.
            Wander through lush forests, breathe in the fresh air, and watch the
            stars twinkle above from the warmth of a campfire or your hot tub.
          </p>
          <p>
            This is where memorable moments are made, surrounded by
            nature&apos;s splendor. It&apos;s a place to slow down, relax, and
            feel the joy of being together in a beautiful setting.
          </p>
        </div>
      </div>

      <div className="order-1 col-span-1 mt-8 md:order-2 md:mt-0 lg:col-span-2">
        <Image
          src={image1}
          placeholder="blur"
          quality={80}
          alt="Family sitting around a fire pit in front of cabin"
        />
      </div>

      <div className="relative col-span-1 mt-8 aspect-square md:mt-0 lg:col-span-2">
        <Image
          src="/about-2.jpg"
          fill
          className="object-cover"
          alt="Family that manages The Wild Oasis"
        />
      </div>

      <div className="col-span-1 mt-8 lg:col-span-3 lg:mt-0">
        <h1 className="text-accent-400 mb-6 text-3xl font-medium lg:mb-10 lg:text-4xl">
          Managed by our family since 1962
        </h1>

        <div className="space-y-6 lg:space-y-8">
          <p>
            Since 1962, The Wild Oasis has been a cherished family-run retreat.
            Started by our grandparents, this haven has been nurtured with love
            and care, passing down through our family as a testament to our
            dedication to creating a warm, welcoming environment.
          </p>
          <p>
            Over the years, we&apos;ve maintained the essence of The Wild Oasis,
            blending the timeless beauty of the mountains with the personal
            touch only a family business can offer. Here, you&apos;re not just a
            guest; you&apos;re part of our extended family. So join us at The
            Wild Oasis soon, where tradition meets tranquility, and every visit
            is like coming home.
          </p>

          <div>
            <Link
              href="/cabins"
              className="bg-accent-500 text-primary-800 hover:bg-accent-600 mt-4 inline-block px-6 py-4 text-base font-semibold transition-all md:px-8 md:py-5 lg:text-lg"
            >
              Explore our luxury cabins
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
