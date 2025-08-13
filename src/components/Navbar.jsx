import { useState, useEffect } from "react";

// Premium Google Fonts
const fontLinks = `
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;600;700&family=Inter:wght@300;400;500;600&family=Montserrat:wght@500;600;700&display=swap" rel="stylesheet">
`;

// Inject fonts into document head
if (
  typeof document !== "undefined" &&
  !document.querySelector("#premium-fonts")
) {
  const styleElement = document.createElement("div");
  styleElement.id = "premium-fonts";
  styleElement.innerHTML = fontLinks;
  document.head.appendChild(styleElement);
}

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
        "specials",
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

  const menuItems = ["Home", "About", "Menu", "Specials", "Gallery", "Contact"];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "backdrop-blur-md shadow-2xl border-b border-amber-400/20"
          : "backdrop-blur-md shadow-xl"
      }`}
      style={{
        background: scrolled
          ? "linear-gradient(to bottom, rgba(26, 26, 26, 0.95), rgba(0, 0, 0, 0.98))"
          : "linear-gradient(to bottom, rgba(26, 26, 26, 0.90), rgba(45, 45, 45, 0.95))",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 py-3 sm:py-4">
        {/* Logo */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-2">
          <h1
            className="text-lg sm:text-2xl font-bold tracking-wide leading-tight"
            style={{
              fontFamily: "'Playfair Display', serif",
              color: "#d4af37",
              textShadow: "0 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Meat Cheese
          </h1>
          <span
            className="text-sm sm:text-lg font-semibold tracking-wider"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              color: "#b87333",
            }}
          >
            GRILL
          </span>
        </div>

        {/* Desktop Menu */}
        <nav className="hidden lg:flex items-center space-x-6 xl:space-x-8">
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`relative font-medium text-sm xl:text-base uppercase tracking-wider transition-all duration-300 group ${
                  active === id ? "" : ""
                }`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: active === id ? "#d4af37" : "#faf7f2",
                }}
                onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                onMouseLeave={(e) =>
                  (e.target.style.color = active === id ? "#d4af37" : "#faf7f2")
                }
              >
                {item}
                <span
                  className={`absolute left-0 -bottom-2 h-0.5 transition-all duration-300 group-hover:w-full ${
                    active === id ? "w-full" : "w-0"
                  }`}
                  style={{ backgroundColor: "#d4af37" }}
                ></span>
              </a>
            );
          })}
        </nav>

        {/* CTA Button - Desktop only */}
        <button
          className="hidden lg:block font-bold px-4 xl:px-6 py-2 xl:py-3 rounded-lg transition-all duration-300 hover:scale-105 uppercase tracking-wide text-xs xl:text-sm border border-amber-400/20 hover:shadow-xl"
          style={{
            fontFamily: "'Montserrat', sans-serif",
            background:
              "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
            color: "#1a1a1a",
            boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
          }}
          onMouseEnter={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #b87333 0%, #d4af37 50%, #b87333 100%)";
            e.target.style.boxShadow = "0 6px 20px rgba(212, 175, 55, 0.4)";
          }}
          onMouseLeave={(e) => {
            e.target.style.background =
              "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)";
            e.target.style.boxShadow = "0 4px 15px rgba(212, 175, 55, 0.3)";
          }}
        >
          Order Juicy Burgers
        </button>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden transition-colors duration-300 focus:outline-none p-1"
          style={{ color: "#faf7f2" }}
          onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
          onMouseLeave={(e) => (e.target.style.color = "#faf7f2")}
        >
          <svg
            className="w-6 h-6 sm:w-7 sm:h-7"
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
        className={`lg:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div
          className="backdrop-blur-md px-4 sm:px-6 py-4 sm:py-6 space-y-3 sm:space-y-4 border-t border-amber-400/20"
          style={{
            backgroundColor: "rgba(26, 26, 26, 0.95)",
            color: "#faf7f2",
          }}
        >
          {menuItems.map((item) => {
            const id = item.toLowerCase();
            return (
              <a
                key={item}
                href={`#${id}`}
                className={`block font-medium text-sm sm:text-base uppercase tracking-wider transition-all duration-300 hover:pl-2 py-2 ${
                  active === id ? "border-l-2 pl-3" : ""
                }`}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  color: active === id ? "#d4af37" : "#faf7f2",
                  borderColor: active === id ? "#d4af37" : "transparent",
                }}
                onClick={() => setIsOpen(false)}
                onMouseEnter={(e) => (e.target.style.color = "#d4af37")}
                onMouseLeave={(e) =>
                  (e.target.style.color = active === id ? "#d4af37" : "#faf7f2")
                }
              >
                {item}
              </a>
            );
          })}
          {/* Mobile CTA Button */}
          <button
            className="w-full font-bold px-4 sm:px-6 py-3 sm:py-4 rounded-lg transition-all duration-200 uppercase tracking-wide text-sm sm:text-base border border-amber-400/20 touch-manipulation mt-4"
            style={{
              fontFamily: "'Montserrat', sans-serif",
              background:
                "linear-gradient(135deg, #d4af37 0%, #f4d03f 50%, #d4af37 100%)",
              color: "#1a1a1a",
              boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
            }}
            onClick={() => setIsOpen(false)}
          >
            🍽️ Order Premium Grills
          </button>
        </div>
      </div>
    </header>
  );
}
