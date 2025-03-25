
import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
        scrolled ? "bg-white/80 backdrop-blur-lg shadow-sm" : "bg-transparent"
      )}
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex items-center justify-between py-4">
          <div className="flex items-center">
            <h1 className={cn(
              "text-xl font-display font-semibold transition-colors",
              scrolled ? "text-event-dark" : "text-white"
            )}>
              Understanding
            </h1>
          </div>
          <nav>
            <ul className="flex space-x-8">
              <li>
                <a 
                  href="#details" 
                  className={cn(
                    "font-medium transition-colors hover:text-event-purple",
                    scrolled ? "text-event-dark" : "text-white"
                  )}
                >
                  Details
                </a>
              </li>
              <li>
                <a 
                  href="#payment" 
                  className={cn(
                    "font-medium transition-colors hover:text-event-purple",
                    scrolled ? "text-event-dark" : "text-white"
                  )}
                >
                  Payment
                </a>
              </li>
              <li>
                <a 
                  href="#contact" 
                  className={cn(
                    "font-medium transition-colors hover:text-event-purple",
                    scrolled ? "text-event-dark" : "text-white"
                  )}
                >
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
