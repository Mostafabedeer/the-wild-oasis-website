"use client";

import Link from "next/link";
import Overlay from "./Overlay";

function MobileSideNav({ isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <aside
        className={` ${isMenuOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-40 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* add aside nave links  */}
        <div className="flex flex-col items-start p-4">
          <Link
            href="/cabins"
            className="hover:text-accent-400 mb-4 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Cabins
          </Link>
          <Link
            href="/about"
            className="hover:text-accent-400 mb-4 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            About
          </Link>
          <Link
            href="/account"
            className="hover:text-accent-400 text-lg"
            onClick={() => setIsMenuOpen(false)}
          >
            Account
          </Link>
        </div>
      </aside>
      <Overlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default MobileSideNav;
