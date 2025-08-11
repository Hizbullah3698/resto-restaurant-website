export default function Menu() {
  const menuItems = [
    {
      id: 1,
      name: "Margherita Pizza",
      price: "$12",
      description: "Fresh mozzarella, tomato sauce, basil",
      image: "/images/margherita.jpg",
      category: "Pizza",
    },
    {
      id: 2,
      name: "Pasta Carbonara",
      price: "$15",
      description: "Egg, pecorino cheese, pancetta, black pepper",
      image: "/images/carbonara.jpg",
      category: "Pasta",
    },
    {
      id: 3,
      name: "Tiramisu",
      price: "$8",
      description: "Coffee-soaked ladyfingers, mascarpone, cocoa",
      image: "/images/tiramisu.jpg",
      category: "Dessert",
    },
    {
      id: 4,
      name: "Bruschetta",
      price: "$7",
      description: "Toasted bread, tomatoes, garlic, basil",
      image: "/images/bruschetta.jpg",
      category: "Appetizer",
    },
  ];

  return (
    <section
      id="menu"
      className="py-20 bg-gradient-to-b from-gray-900 to-black text-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Our Specialties
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Our <span className="text-amber-400">Menu</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Discover our carefully crafted selection of authentic Italian
            dishes, made with the finest ingredients and traditional recipes.
          </p>
        </div>

        {/* Menu Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {menuItems.map((item) => (
            <div
              key={item.id}
              className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl shadow-2xl overflow-hidden hover:scale-105 transform transition-all duration-500 border border-gray-700/50 hover:border-amber-500/30"
            >
              {/* Image Container */}
              <div className="relative overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {/* Image Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* Category Badge */}
                <div className="absolute top-4 left-4 bg-amber-500/90 text-black px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide">
                  {item.category}
                </div>
                {/* Price Badge */}
                <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-sm text-amber-400 px-3 py-1 rounded-full text-lg font-bold border border-amber-500/30">
                  {item.price}
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 text-white group-hover:text-amber-400 transition-colors duration-300">
                  {item.name}
                </h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Order Button */}
                <button className="w-full bg-gradient-to-r from-amber-500/20 to-orange-500/20 hover:from-amber-500 hover:to-orange-500 text-amber-400 hover:text-white border border-amber-500/30 hover:border-amber-500 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 uppercase tracking-wide hover:shadow-lg hover:shadow-amber-500/25">
                  Add to Order
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* View Full Menu Button */}
        <div className="text-center mt-16">
          <a
            href="#"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 uppercase tracking-wide border border-amber-400/20"
          >
            View Full Menu
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

        {/* Decorative Elements */}
        <div className="absolute top-10 left-10 w-20 h-20 bg-amber-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-orange-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
}
