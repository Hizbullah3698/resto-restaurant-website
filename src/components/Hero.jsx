import { useState, useEffect } from "react";

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "/images/carbonara.jpg",
      title: "Authentic Italian",
      subtitle: "Pasta",
      description: "Handmade fresh pasta with traditional Italian recipes",
    },
    {
      image: "/images/margherita.jpg",
      title: "Wood-Fired",
      subtitle: "Pizza",
      description:
        "Crispy thin crust pizzas baked in our traditional wood oven",
    },
    {
      image: "/images/wine.jpg",
      title: "Fine Italian",
      subtitle: "Wines",
      description: "Carefully selected wines from the finest Italian vineyards",
    },
    {
      image: "/images/tiramisu.jpg",
      title: "Homemade",
      subtitle: "Desserts",
      description: "Sweet endings crafted with love and traditional recipes",
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-20 flex items-center justify-center text-center text-white overflow-hidden"
    >
      {/* Background Images */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out ${
            index === currentSlide
              ? "opacity-100 scale-105"
              : "opacity-0 scale-100"
          }`}
          style={{
            backgroundImage: `url('${slide.image}')`,
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80"></div>
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 max-w-4xl px-6 animate-fade-in py-16">
        <div className="mb-6">
          <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-widest mb-4 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
            Since 1985
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight drop-shadow-2xl">
            {slides[currentSlide].title}
            <span className="block text-amber-400 drop-shadow-2xl">
              {slides[currentSlide].subtitle}
            </span>
          </h1>
        </div>

        <p className="text-xl md:text-2xl mb-10 text-white font-light leading-relaxed max-w-2xl mx-auto drop-shadow-lg bg-black/20 px-6 py-4 rounded-lg backdrop-blur-sm">
          {slides[currentSlide].description}
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 mb-16">
          {/* Primary CTA */}
          <a
            href="#menu"
            className="group bg-gradient-to-r from-amber-500 to-amber-600 text-black px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 uppercase tracking-wide min-w-48 touch-manipulation
                       md:hover:from-amber-600 md:hover:to-amber-700 md:hover:shadow-2xl md:hover:shadow-amber-500/25 md:hover:scale-105
                       md:active:from-amber-600 md:active:to-amber-700 md:active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              View Menu
              <svg
                className="w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </a>

          {/* Secondary CTA */}
          <a
            href="#reservations"
            className="group bg-transparent border-2 border-amber-500 text-amber-400 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300 uppercase tracking-wide min-w-48 backdrop-blur-sm touch-manipulation
                       md:hover:bg-amber-500 md:hover:text-black md:hover:border-amber-500 
                       md:active:bg-amber-500 md:active:text-black md:hover:shadow-2xl md:hover:shadow-amber-500/25 md:hover:scale-105 md:active:scale-95"
          >
            <span className="flex items-center justify-center gap-2">
              Make Reservation
              <svg
                className="w-5 h-5 transform md:group-hover:scale-110 transition-transform duration-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2-2z"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center space-x-3 mb-8">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 touch-manipulation ${
                index === currentSlide
                  ? "bg-amber-400 scale-125 shadow-lg shadow-amber-400/50"
                  : "bg-white/40 md:hover:bg-white/60 md:hover:scale-110 active:bg-white/60 active:scale-110"
              }`}
            />
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="flex flex-col items-center text-white/70 md:hover:text-amber-400 transition-colors duration-300 cursor-pointer">
            <span className="text-xs uppercase tracking-widest mb-2 font-semibold">
              Scroll
            </span>
            <svg
              className="w-5 h-5 drop-shadow-md"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={() =>
          setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
        }
        className="absolute left-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 touch-manipulation
                   md:hover:bg-black/70 md:hover:scale-110 md:active:bg-black/70 md:active:scale-95 md:hover:border-amber-400/50"
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
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
        className="absolute right-6 top-1/2 transform -translate-y-1/2 z-20 bg-black/50 text-white p-3 rounded-full transition-all duration-300 backdrop-blur-sm border border-white/20 touch-manipulation
                   md:hover:bg-black/70 md:hover:scale-110 md:active:bg-black/70 md:active:scale-95 md:hover:border-amber-400/50"
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
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fade-in 1s ease-out;
        }
      `}</style>
    </section>
  );
}
