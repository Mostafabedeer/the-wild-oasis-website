"use client";

import Link from "next/link";
import { useState } from "react";
import MobileSideNav from "./MobileSideNav";
import { Bars3Icon } from "@heroicons/react/24/solid";

export default function Navigation({ session }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="relative z-10">
      {/* Hamburger Menu Button - visible only on mobile */}
      <Bars3Icon
        className="text-primary-800 hover:text-accent-500 h-15 w-15 cursor-pointer p-2 transition-colors md:hidden"
        onClick={() => setIsMenuOpen(true)}
        aria-label="Toggle menu"
      />

      {/* Navigation Links */}
      <ul
        className={`relative top-full left-0 hidden w-full items-center gap-16 p-4 md:flex`}
      >
        <li>
          <Link
            href="/cabins"
            className="hover:text-accent-400 block w-full transition-colors"
          >
            Cabins
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className="hover:text-accent-400 block w-full transition-colors"
          >
            About
          </Link>
        </li>
        <li className="w-full">
          {session?.user ? (
            <Link
              href="/account"
              className="hover:text-accent-400 flex items-center gap-4 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              <img
                src={session.user.image}
                alt={
                  session.user.name
                    ? `${session.user.name}'s profile picture`
                    : "User profile picture"
                }
                className="h-8 rounded-full"
                referrerPolicy="no-referrer"
              />
              <span>{session.user.name}</span>
            </Link>
          ) : (
            <Link
              href="/account"
              className="hover:text-accent-400 block w-full transition-colors"
            >
              Guest area
            </Link>
          )}
        </li>
      </ul>
      {/* side nav */}
      <MobileSideNav
        session={session}
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
      />
    </nav>
  );
}
