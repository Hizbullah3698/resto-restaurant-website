export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left Image */}
          <div className="lg:w-1/2">
            <div className="relative group">
              <img
                src="/images/About2.jpg"
                alt="About Meat Cheese Grill"
                className="rounded-2xl shadow-2xl transition-all duration-500 group-hover:scale-105"
              />
              {/* Image Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl"></div>
              {/* Decorative Border */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-500/20 to-orange-500/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
            </div>
          </div>

          {/* Right Content */}
          <div className="lg:w-1/2 space-y-8">
            {/* Section Badge */}
            <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20">
              <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
              Our Story
            </div>

            {/* Heading */}
            <h2 className="text-4xl lg:text-5xl font-bold leading-tight">
              About <span className="text-amber-400">Meat Cheese Grill</span>
            </h2>

            {/* Content */}
            <div className="space-y-6 text-lg leading-relaxed text-gray-200">
              <p className="text-xl leading-relaxed">
                At{" "}
                <span className="font-bold text-amber-400">
                  Meat Cheese Grill
                </span>
                , we serve up bold flavors, juicy burgers, sizzling grills, and
                cheesy indulgence — all made fresh and served with passion.
              </p>

              <p>
                Every bite is crafted from premium meats, freshly baked buns,
                and gourmet toppings. Whether you’re here for a quick lunch, a
                weekend hangout, or a late-night craving, we make sure your meal
                is unforgettable.
              </p>

              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Fresh, Juicy Burgers</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Signature Grilled Flavor</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Loaded Cheese & Toppings</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <div className="w-2 h-2 bg-amber-400 rounded-full"></div>
                  <span>Perfect for Every Craving</span>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <div className="pt-4">
              <a
                href="#menu"
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 uppercase tracking-wide border border-amber-400/20"
              >
                Explore Our Menu
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
              </a>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 pt-16 border-t border-gray-800">
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">25+</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">
              Years Grilling
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">10k+</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">
              Happy Customers
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">50+</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">
              Signature Items
            </div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-amber-400 mb-2">5★</div>
            <div className="text-gray-400 uppercase tracking-wide text-sm">
              Rave Reviews
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
