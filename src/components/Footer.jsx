import React from 'react';
import { Facebook, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-indigo-900 to-purple-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">We're Your Tech Solution</h3>
            <p className="text-gray-300">For all your hardware & software needs. One call, and we're there.</p>
            <div className="flex space-x-4">
              {[Facebook, Instagram, Linkedin, Mail].map((Icon, index) => (
                <a key={index} href="#" className="hover:text-indigo-400 transition-colors">
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="space-y-2">
              {['Home', 'About', 'Services', 'Contact', 'Employee Login', 'Laptop Repair', 'Second Hand Deals'].map((item, index) => (
                <li key={index}>
                  <a href="#" className="hover:text-indigo-400 transition-colors">{item}</a>
                </li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-2xl font-bold">Get In Touch</h3>
            <div className="flex items-start space-x-2">
              <MapPin size={24} className="flex-shrink-0 mt-1" />
              <p className="text-gray-300">R-52, 1st Floor, behind Manohar Dairy, Near Hotel Sangat Plaza, Zone-I, Maharana Pratap Nagar, Bhopal, MP 462011</p>
            </div>
            <div className="flex items-center space-x-2">
              <Phone size={24} />
              <span className="text-gray-300">+91 97555-99036</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-12 mx-2 md:mx-20 lg:mx-32 pt-8 border-t border-indigo-500 text-center">
          <p className="text-gray-300">&copy; {new Date().getFullYear()} Your Company Name. All rights reserved.</p>
          <p className="mt-2 text-sm">
            <a href="#" className="hover:text-indigo-400 transition-colors">Legal Disclaimer</a> | 
            <a href="#" className="hover:text-indigo-400 transition-colors ml-2">Terms</a> | 
            <span className="ml-2">Powered by Digirank 360</span>
          </p>
        </div>
    </footer>
  );
};

export default Footer;