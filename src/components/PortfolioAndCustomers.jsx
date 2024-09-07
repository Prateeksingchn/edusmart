import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

const PortfolioItem = ({ src, alt }) => (
  <motion.div 
    className="w-full sm:w-1/2 lg:w-1/4 p-2 overflow-hidden rounded-lg"
    whileHover={{ scale: 1.02 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <motion.img 
      src={src} 
      alt={alt} 
      className="w-full h-auto"
      initial={{ opacity: 0, scale: 1.05 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{ scale: 1.05 }}
    />
  </motion.div>
);

const CustomerLogo = ({ src, alt }) => (
  <motion.div 
    className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 p-2 flex-shrink-0"
    whileHover={{ scale: 1.05 }}
    transition={{ duration: 0.3, ease: "easeInOut" }}
  >
    <img src={src} alt={alt} className="w-full h-auto rounded-2xl" />
  </motion.div>
);

const Button = ({ children, onClick }) => (
  <motion.button
    className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 ease-in-out hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
    onClick={onClick}
    whileHover={{ y: -2 }}
    whileTap={{ y: 0 }}
    transition={{ duration: 0.2 }}
  >
    {children}
  </motion.button>
);

const Marquee = ({ children }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    let animationId;
    let position = 0;

    const animate = () => {
      position -= 0.5;  // Slowed down the animation
      if (position <= -marquee.scrollWidth / 2) {
        position = 0;
      }
      marquee.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <div className="overflow-hidden whitespace-nowrap">
      <div ref={marqueeRef} className="inline-flex">
        {children}
        {children}
      </div>
    </div>
  );
};

const PortfolioAndCustomers = () => {
  return (
    <>
      {/* Portfolio Section */}
      <section className="w-full py-16 sm:py-24 bg-gray-50">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Portfolio
          </motion.h2>
          <motion.p 
            className="text-center mb-12 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            We are committed to becoming the leading high-tech service provider, delivering innovative solutions across industries.
          </motion.p>
          <div className="flex flex-wrap -mx-2 mb-12">
            <PortfolioItem
              src="https://images.unsplash.com/photo-1542626991-cbc4e32524cc?w=400&h=300&fit=crop"
              alt="Project planning"
            />
            <PortfolioItem
              src="https://images.unsplash.com/photo-1551650975-87deedd944c3?w=400&h=300&fit=crop"
              alt="Mobile development"
            />
            <PortfolioItem
              src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=400&h=300&fit=crop"
              alt="Web development"
            />
            <PortfolioItem
              src="https://images.unsplash.com/photo-1547586696-ea22b4d4235d?w=400&h=300&fit=crop"
              alt="Desktop setup"
            />
          </div>
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <Button onClick={() => console.log("Explore more clicked")}>
              EXPLORE MORE
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Customers Section */}
      <section className="w-full py-16 sm:py-24 bg-white">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.h2 
            className="text-3xl sm:text-4xl font-bold text-center mb-6 text-gray-800"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            Our Proud Customers
          </motion.h2>
          <motion.p 
            className="text-center mb-12 text-gray-600 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            We're honored to work with industry leaders who trust our expertise.
          </motion.p>
          <Marquee>
            <CustomerLogo src="https://images.unsplash.com/photo-1558979634-599249d06627?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDd8fGxvZ298ZW58MHwwfDB8fHww" alt="Customer 1" />
            <CustomerLogo src="https://images.unsplash.com/photo-1521058001910-55b77aba2203?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzV8fGxvZ298ZW58MHwwfDB8fHww" alt="Customer 2" />
            <CustomerLogo src="https://images.unsplash.com/photo-1532617754634-819393ff5106?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGNvbXBhbnklMjBsb2dvfGVufDB8MHwwfHx8MA%3D%3D" alt="Customer 3" />
            <CustomerLogo src="https://images.unsplash.com/photo-1622465911368-72162f8da3e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29tcGFueSUyMGxvZ298ZW58MHwwfDB8fHww" alt="Customer 4" />
            <CustomerLogo src="https://plus.unsplash.com/premium_photo-1676243407463-468804b9ecaf?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8bG9nb3xlbnwwfDB8MHx8fDA%3D" alt="Customer 5" />
            <CustomerLogo src="https://images.unsplash.com/photo-1621986191859-a88d73c6ed0b?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mjd8fGxvZ298ZW58MHwwfDB8fHww" alt="Customer 6" />
          </Marquee>
        </div>
      </section>
    </>
  );
};

export default PortfolioAndCustomers;