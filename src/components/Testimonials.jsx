import React from "react";

const Testimonials = () => {
  const reviews = [
    {
      text: "Best burger I've ever had! Juicy, perfectly grilled, and packed with flavor.",
      name: "Sarah Johnson",
      role: "Food Blogger",
      img: "https://randomuser.me/api/portraits/women/44.jpg",
      rating: 5,
    },
    {
      text: "Their BBQ Bacon Burger is out of this world. I’m officially addicted!",
      name: "Michael Smith",
      role: "Local Guide",
      img: "https://randomuser.me/api/portraits/men/45.jpg",
      rating: 5,
    },
    {
      text: "Crispy fries, smoky burgers, and great vibes — what more could you want?",
      name: "Emily Davis",
      role: "Chef",
      img: "https://randomuser.me/api/portraits/women/65.jpg",
      rating: 5,
    },
  ];

  return (
    <section
      className="bg-gradient-to-b from-gray-900 to-black py-20 relative overflow-hidden"
      id="testimonials"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-gradient-to-br from-amber-500/10 to-transparent"></div>
      </div>

      <div className="max-w-6xl mx-auto px-6 md:px-12 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 text-amber-400 font-semibold text-sm uppercase tracking-widest bg-amber-500/10 px-4 py-2 rounded-full border border-amber-500/20 mb-6">
            <span className="w-2 h-2 bg-amber-400 rounded-full animate-pulse"></span>
            Testimonials
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 text-white">
            What Our <span className="text-amber-400">Customers Say</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            Real feedback from burger lovers who can’t get enough of our
            flame-grilled goodness.
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="grid gap-8 md:grid-cols-3">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="group bg-gray-800/50 backdrop-blur-sm p-8 rounded-2xl shadow-2xl hover:shadow-amber-500/10 transition-all duration-500 transform hover:-translate-y-2 hover:scale-[1.02] border border-gray-700/50 hover:border-amber-500/30 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 text-amber-400/20 group-hover:text-amber-400/40 transition-colors duration-300">
                <svg
                  className="w-8 h-8"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z" />
                </svg>
              </div>

              {/* Star Rating */}
              <div className="flex mb-6 text-amber-400">
                {Array(review.rating)
                  .fill(0)
                  .map((_, i) => (
                    <svg
                      key={i}
                      className="w-5 h-5 mr-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847 1.417 8.264L12 19.896l-7.417 3.963L6 15.595 0 9.748l8.332-1.73z" />
                    </svg>
                  ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-200 mb-6 text-lg leading-relaxed italic font-light">
                "{review.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center">
                <div className="relative">
                  <img
                    src={review.img}
                    alt={review.name}
                    className="w-14 h-14 rounded-full mr-4 border-2 border-amber-400/50 group-hover:border-amber-400 transition-colors duration-300"
                  />
                  {/* Verified Badge */}
                  <div className="absolute -bottom-1 -right-1 bg-amber-500 text-black rounded-full p-1">
                    <svg
                      className="w-3 h-3"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold text-white text-lg group-hover:text-amber-400 transition-colors duration-300">
                    {review.name}
                  </h4>
                  <span className="text-sm text-gray-400 font-medium">
                    {review.role}
                  </span>
                </div>
              </div>

              {/* Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-amber-500/5 to-orange-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16 p-8 bg-gray-800/30 backdrop-blur-sm rounded-2xl border border-gray-700/50">
          <h3 className="text-2xl font-bold text-white mb-4">
            Hungry for Your Own{" "}
            <span className="text-amber-400">Burger Experience</span>?
          </h3>
          <p className="text-gray-300 mb-6 max-w-xl mx-auto">
            Join thousands of satisfied customers who know there’s no better
            place for a perfectly grilled burger and crispy fries.
          </p>
          <a
            href="#order"
            className="group inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 hover:from-amber-600 hover:to-orange-600 text-white font-bold px-8 py-4 rounded-lg text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-amber-500/25 hover:scale-105 uppercase tracking-wide border border-amber-400/20"
          >
            Order Now
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
        <div className="absolute top-20 left-10 w-16 h-16 bg-amber-500/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-orange-500/10 rounded-full blur-2xl"></div>
      </div>
    </section>
  );
};

export default Testimonials;
