
import React, { useEffect } from 'react';
import { PhoneCall, MessageSquare, Send } from 'lucide-react';

const ContactSection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-24 bg-gradient-to-b from-white to-gray-50 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-event-purple/10 text-event-purple text-sm font-medium mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              Get in Touch
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              Contact Us
            </h2>
            <p className="text-gray-600 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              Send your proof of payment via WhatsApp to be added to the exclusive event group.
            </p>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <div className="flex flex-col md:flex-row gap-8 items-center justify-between">
              <div className="flex-1">
                <div className="space-y-6">
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-event-purple/10 flex items-center justify-center mr-4">
                      <PhoneCall className="w-5 h-5 text-event-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">WhatsApp Contact</h3>
                      <p className="text-gray-600">Send your proof of payment here</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-12 h-12 rounded-full bg-event-purple/10 flex items-center justify-center mr-4">
                      <MessageSquare className="w-5 h-5 text-event-purple" />
                    </div>
                    <div>
                      <h3 className="font-medium text-lg mb-1">Event Group</h3>
                      <p className="text-gray-600">You'll be added after verification</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="flex-1 text-center md:text-right">
                <a 
                  href="https://wa.me/message/X56JMP4PP622P1"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-4 px-8 bg-event-purple hover:bg-event-purple/90 text-white rounded-full font-medium transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg w-full md:w-auto"
                >
                  <span>Open WhatsApp</span>
                  <Send className="w-4 h-4" />
                </a>
                
                <p className="mt-4 text-sm text-gray-500">
                  We'll respond within 24 hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
