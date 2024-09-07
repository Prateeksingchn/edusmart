import React from 'react';
import { motion } from 'framer-motion';

const teamImages = [
  'https://images.unsplash.com/photo-1521737852567-6949f3f9f2b5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8dGVhbXxlbnwwfDB8MHx8fDA%3D',
  'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fHRlYW18ZW58MHwwfDB8fHww',
  'https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fHRlYW18ZW58MHwwfDB8fHww',
];

const TeamMember = ({ image, index }) => (
  <motion.div 
    className="bg-white rounded-lg shadow-lg overflow-hidden"
    initial={{ opacity: 0, y: 50 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    whileHover={{ y: -5 }}
  >
    <motion.img 
      src={image} 
      alt={`Team group ${index + 1}`} 
      className="w-full h-64 object-cover"
      whileHover={{ scale: 1.05 }}
      transition={{ duration: 0.3 }}
    />
  </motion.div>
);

const Team = () => {
  return (
    <section className="bg-gray-50 py-24">
      <div className="container mx-auto px-4">
        <motion.h2 
          className="text-4xl font-bold text-center mb-4 text-gray-800"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Our Team
        </motion.h2>
        <motion.p 
          className="text-xl text-center text-gray-600 mb-16 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Our highly skilled and dynamic team makes us stand out in the market.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {teamImages.map((image, index) => (
            <TeamMember key={index} image={image} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;