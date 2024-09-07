import React from 'react';
import { User, Users } from 'lucide-react';

const Moto = () => {
  return (
    <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl md:text-5xl text-center font-extrabold mb-8 text-indigo-900 leading-tight">
          Our Commitment to <span className="text-indigo-600">Honesty</span>
        </h2>
        <div className="flex flex-col lg:flex-row items-center lg:items-start gap-8 lg:gap-12">
          <div className="w-full lg:w-2/3">
            <p className="text-lg sm:text-xl text-gray-700 mb-8 leading-relaxed">
              We distinguish ourselves from our competitors with our unwavering commitment to honesty. Our clients and customers can always count on transparent, truthful interactions. We go the extra mile to ensure complete satisfaction, building trust that lasts.
            </p>
            <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md flex items-center space-x-4">
              <div className="hidden sm:block">
                <User size={64} className="text-indigo-600" />
              </div>
              <div>
                <p className="font-bold text-xl sm:text-2xl text-gray-800">Deenu Kewat</p>
                <p className="text-indigo-600 font-medium">Manager</p>
              </div>
            </div>
          </div>
          <div className="w-full lg:w-1/3 mt-8 lg:mt-6">
            <div className="relative">
              <div className="absolute inset-0 bg-indigo-200 rounded-lg transform rotate-3"></div>
              <div className="relative bg-indigo-100 p-6 rounded-lg shadow-lg">
                <Users size={48} className="text-indigo-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Team Collaboration</h3>
                <p className="text-gray-600">
                  Our team works together seamlessly to deliver the best results for our clients.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Moto;