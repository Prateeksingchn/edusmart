import React from 'react';

const HeroSection = () => {
  return (
    <section className="w-full bg-gradient-to-r from-gray-900 to-blue-900 text-white min-h-screen flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
        <div className="text-center lg:text-left">
          <p className="text-sm mb-2 sm:mb-4 text-blue-300">Let us be your personal IT expert</p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
            Edusmart IT Solutions <br className="hidden sm:block" /> <span className="text-blue-400">Pvt. Ltd.</span>
          </h1>
          <p className="mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 text-base sm:text-lg text-gray-300">
            We are your one-stop solution for all your hardware & software problems. 
            Just give us a call and we'll be at your service instantly.
          </p>
          <button className="bg-blue-600 text-white px-6 sm:px-8 py-2 sm:py-3 rounded-md hover:bg-blue-700 transition-colors duration-200 text-base sm:text-lg font-semibold">
            CALL NOW
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

