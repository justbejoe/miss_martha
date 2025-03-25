
import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 bg-event-dark text-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-display font-semibold">Understanding</h2>
              <p className="text-gray-400 mt-2">The ultimate clubbing experience</p>
            </div>
            
            <div className="flex gap-6">
              <a href="#payment" className="text-gray-400 hover:text-white transition-colors">
                Payment
              </a>
              <a href="#contact" className="text-gray-400 hover:text-white transition-colors">
                Contact
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Privacy
              </a>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-500 text-sm">
            <p>© {currentYear} Understanding. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
