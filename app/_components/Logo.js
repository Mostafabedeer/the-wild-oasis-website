import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo.png";

function Logo() {
  return (
    <Link href="/" className="z-10 flex items-center gap-2 sm:gap-4">
      <Image
        src={logo}
        quality={100}
        height={40}
        width={40}
        className="h-[40px] w-[40px] sm:h-[60px] sm:w-[60px]"
        alt="The Wild Oasis logo"
      />
      <span className="text-primary-100 text-lg font-semibold sm:text-xl">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
