import React from "react";

const Reservation = () => {
  return (
    <section
      id="reservations"
      className="relative bg-cover bg-center py-20"
      style={{ backgroundImage: "url('/images/burger2.jpg')" }} // Changed hero image for burger theme
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      <div className="relative z-10 max-w-4xl mx-auto text-center px-4">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-bold text-amber-400 mb-4 drop-shadow-lg">
          Reserve Your Table
        </h2>
        <p className="text-gray-200 mb-8 text-lg max-w-2xl mx-auto">
          Secure your spot and enjoy our mouth-watering burgers, loaded fries,
          and more — fresh off the grill.
        </p>

        {/* Reservation Form */}
        <form className="bg-black/50 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-amber-400/20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="number"
              placeholder="Party Size"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="date"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
            <input
              type="time"
              className="p-3 rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
            />
          </div>

          {/* Special Requests */}
          <textarea
            placeholder="Special Requests"
            rows="4"
            className="mt-6 p-3 w-full rounded-lg bg-white/10 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-amber-400"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-gradient-to-r from-amber-500 to-orange-500 text-black font-semibold py-3 rounded-lg hover:scale-105 hover:shadow-xl transition duration-300"
          >
            Reserve Now
          </button>
        </form>
      </div>
    </section>
  );
};

export default Reservation;
