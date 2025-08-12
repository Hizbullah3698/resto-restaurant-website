import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Detect active section
      const sections = [
        "home",
        "about",
        "menu",
        "reservations",
        "gallery",
        "contact",
      ];
      let current = "home";

      for (let i = 0; i < sections.length; i++) {
        const el = document.getElementById(sections[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 80 && rect.bottom >= 80) {
            current = sections[i];
          }
        }
      }

      setActive(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    "Home",
    "About",
    "Menu",
    "Reservations",
    "Gallery",
    "Contact",
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-b from-gray-900 to-black backdrop-blur-md shadow-2xl border-b border-amber-500/20"
          : "bg-gradient-to-b from-gray-900 to-black backdrop-blur-md shadow-xl"
      }`}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🍽️</span>
          <h1 className="text-2xl font-bold text-amber-400 tracking-wide">
            Resto
          </h1>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex items-center space-x-8">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:text-amber-400 ${
                  active === id ? "text-amber-400" : "text-white"
                } group`}
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 bg-amber-400 transition-all duration-300 group-hover:w-full ${
                    active === id ? "w-full" : "w-0"
                  }`}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button - Desktop only with proper hover handling */}
        <button className="hidden md:block bg-gradient-to-r from-amber-500 to-orange-500 md:hover:from-amber-600 md:hover:to-orange-600 text-white font-bold px-6 py-3 rounded-lg transition-all duration-300 md:hover:shadow-xl md:hover:shadow-amber-500/30 md:hover:scale-105 uppercase tracking-wide text-sm border border-amber-400/20 active:from-amber-500 active:to-orange-500 active:scale-100 active:shadow-none">
          Order Online
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white hover:text-amber-400 transition-colors duration-300 focus:outline-none"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="bg-black/95 backdrop-blur-md text-white px-6 py-4 space-y-4 border-t border-amber-500/20">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`block font-medium text-sm uppercase tracking-wider transition-all duration-300 hover:text-amber-400 hover:pl-2 ${
                  active === id ? "text-amber-400" : "text-white"
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item}
              </a>
            );
          })}
          {/* Mobile CTA Button - Fixed to prevent color change */}
          <button
            className="w-full bg-gradient-to-r from-amber-500 to-orange-500 text-white font-bold px-6 py-3 rounded-lg transition-all duration-200 uppercase tracking-wide text-sm border border-amber-400/20 touch-manipulation"
            onClick={() => setIsOpen(false)}
          >
            Order Online
          </button>
        </div>
      </div>
    </header>
  );
}
