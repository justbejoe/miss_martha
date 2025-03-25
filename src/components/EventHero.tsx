
import React, { useEffect, useState } from 'react';
import { Calendar, Clock, MapPin } from "lucide-react";

const EventHero = () => {
  const [loaded, setLoaded] = useState(false);
  
  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-event-dark">
        <div className="absolute inset-0 bg-gradient-to-b from-event-dark/60 to-event-dark/90 z-10"></div>
        <img 
          src="/lovable-uploads/87841ed3-5f90-45ad-a1db-c3e3011118b5.png" 
          alt="Understanding Land Titles in Nigeria Event" 
          className="w-full h-full object-cover object-center opacity-90"
        />
      </div>
      
      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 h-full flex flex-col justify-center items-center text-white">
        <div className="max-w-3xl text-center">
          <div className={`transition-all duration-700 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <span className="inline-block py-1 px-3 rounded-full bg-event-purple/20 text-event-purple backdrop-blur-sm text-sm font-medium mb-6">
              Educational Event
            </span>
          </div>
          
          <h1 className={`font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6 transition-all duration-700 delay-100 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Understanding <span className="text-event-purple">Land Titles</span> in Nigeria
          </h1>
          
          <p className={`text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto transition-all duration-700 delay-200 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            Join this informative session to learn about land title documentation and processes in Nigeria.
          </p>
          
          <div className={`flex flex-col md:flex-row justify-center gap-6 mb-12 transition-all duration-700 delay-300 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-2">
              <Calendar className="w-5 h-5 text-event-purple" />
              <span>March 29, 2025</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-event-purple" />
              <span>5:00 PM (WAT)</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-5 h-5 text-event-purple" />
              <span>Virtual Event</span>
            </div>
          </div>
          
          <div className={`transition-all duration-700 delay-400 ${loaded ? 'opacity-100' : 'opacity-0 translate-y-8'}`}>
            <a 
              href="#payment" 
              className="inline-block py-3 px-8 bg-event-purple hover:bg-event-purple/90 text-white rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
            >
              Reserve Your Spot
            </a>
          </div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 animate-bounce">
        <div className="w-8 h-12 rounded-full border-2 border-white/30 flex items-start justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse-slow"></div>
        </div>
      </div>
    </section>
  );
};

export default EventHero;
