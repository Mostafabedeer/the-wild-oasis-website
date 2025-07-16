"use client";

import Link from "next/link";
import Overlay from "./Overlay";
import { XMarkIcon } from "@heroicons/react/24/solid";
import SignOutButton from "./SignOutButton";

function MobileSideNav({ session, isMenuOpen, setIsMenuOpen }) {
  return (
    <>
      <aside
        className={` ${isMenuOpen ? "translate-x-0" : "translate-x-full"} fixed top-0 right-0 z-40 h-full w-64 bg-gray-800 text-white shadow-lg transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* close Button */}
        <button
          className="hover:text-accent-500 absolute top-6 right-6 cursor-pointer text-white"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <XMarkIcon className="h-10 w-10" />
        </button>
        {/* add aside nave links  */}
        <ul className="mt-12 flex flex-col items-start space-y-6 p-8">
          <li className="w-full">
            <Link
              href="/cabins"
              className="hover:text-accent-400 block w-full rounded-lg p-2 text-lg transition-colors duration-200 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              Cabins
            </Link>
          </li>

          {session?.user && (
            <>
              <li className="w-full">
                <Link
                  href="/account/reservations"
                  className="hover:text-accent-400 block w-full rounded-lg p-2 text-lg transition-colors duration-200 hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Reservations
                </Link>
              </li>
              <li className="w-full">
                <Link
                  href="/account/profile"
                  className="hover:text-accent-400 block w-full rounded-lg p-2 text-lg transition-colors duration-200 hover:bg-gray-700"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Profile
                </Link>
              </li>
            </>
          )}
          <li className="w-full">
            <Link
              href="/about"
              className="hover:text-accent-400 block w-full rounded-lg p-2 text-lg transition-colors duration-200 hover:bg-gray-700"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
          </li>
          {session?.user ? (
            <li className="mt-auto">
              <SignOutButton />
            </li>
          ) : (
            <li className="w-full">
              <Link
                href="/account"
                className="hover:text-accent-400 block w-full rounded-lg p-2 text-lg transition-colors duration-200 hover:bg-gray-700"
              >
                Guest area
              </Link>
            </li>
          )}
        </ul>
      </aside>
      <Overlay isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
    </>
  );
}

export default MobileSideNav;
