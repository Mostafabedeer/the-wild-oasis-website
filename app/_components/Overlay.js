"use client";

function Overlay({ isMenuOpen, setIsMenuOpen }) {
  return (
    <div
      className={`bg-opacity-50 fixed inset-0 z-30 bg-black transition-opacity duration-300 ease-in md:hidden ${isMenuOpen ? "opacity-40" : "pointer-events-none opacity-0"}`}
      onClick={() => setIsMenuOpen(false)}
    ></div>
  );
}

export default Overlay;
