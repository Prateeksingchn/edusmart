import React from 'react';
import { motion } from 'framer-motion';
import { Settings, Network, Server, Laptop, Monitor, BarChart } from 'lucide-react';

const ServicesSection = () => {
  const services = [
    {
      icon: Settings,
      title: "Computer AMC Services",
      description: "We provide AMC Services for Computers/Desktops and Laptops in Schools, Institutes, Corporate and MNC's."
    },
    {
      icon: Network,
      title: "Networking",
      description: "Networking is an integral and one of the most important aspects of any organization. We provide distinct Networking services for our clients."
    },
    {
      icon: Server,
      title: "Server Maintenance",
      description: "Servers are the mind of your database and we ensure keeping them safe from malfunctioning and broke down in order to keep you up with your work."
    },
    {
      icon: Laptop,
      title: "Laptop Repairing Service",
      description: "Laptop repairing services is the primary service offered by Edusmart IT Solutions Pvt. Ltd. for all brands of laptop and desktops at Bhopal."
    },
    {
      icon: Monitor,
      title: "Software Support",
      description: "Not just hardware, our engineers are all equipped with tools and skills in providing software support as well and when required are necessary."
    },
    {
      icon: BarChart,
      title: "Digital Marketing",
      description: "Through our online channels and platforms, we specialize in providing a boost to your business through online marketing."
    }
  ];

  const ServiceCard = ({ icon: Icon, title, description }) => (
    <motion.div 
      className="bg-white p-4 sm:p-6 rounded-lg shadow-md"
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <motion.div
        whileHover={{ scale: 1.1 }}
        transition={{ duration: 0.3 }}
      >
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-blue-500 mb-3 sm:mb-4" />
      </motion.div>
      <motion.h3 
        className="text-lg sm:text-xl font-semibold mb-2"
        whileHover={{ color: "#2563EB" }}
        transition={{ duration: 0.3 }}
      >
        {title}
      </motion.h3>
      <motion.p 
        className="text-sm sm:text-base text-gray-600"
        whileHover={{ color: "#1F2937" }}
        transition={{ duration: 0.3 }}
      >
        {description}
      </motion.p>
    </motion.div>
  );

  return (
    <section className="w-full py-12 sm:py-16 bg-gray-100">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 
          className="text-2xl sm:text-3xl font-bold text-center mb-3 sm:mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          How can we help you?
        </motion.h2>
        <motion.p 
          className="text-center text-gray-600 mb-8 sm:mb-12 text-sm sm:text-base"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          We can help you by providing integrated Hardware & Software solutions
          ranging from networking, servers and even Desktops and Laptops.
        </motion.p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;