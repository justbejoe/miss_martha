
import React, { useRef, useEffect } from 'react';
import { Copy, CheckCircle } from 'lucide-react';
import { toast } from "sonner";

const PaymentDetails = () => {
  const accountNumberRef = useRef<HTMLDivElement>(null);
  const observer = useRef<IntersectionObserver | null>(null);
  
  // Animation on scroll
  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('opacity-100', 'translate-y-0');
          entry.target.classList.remove('opacity-0', 'translate-y-8');
          
          // Stop observing once animation is triggered
          if (observer.current) {
            observer.current.unobserve(entry.target);
          }
        }
      });
    }, { threshold: 0.1 });
    
    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => {
      if (observer.current) {
        observer.current.observe(el);
      }
    });
    
    return () => {
      if (observer.current) {
        observer.current.disconnect();
      }
    };
  }, []);
  
  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text).then(() => {
      toast.success(`${label} copied to clipboard`);
    }).catch(() => {
      toast.error('Failed to copy to clipboard');
    });
  };

  return (
    <section id="payment" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-gray-100 to-transparent"></div>
      
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <span className="inline-block py-1 px-3 rounded-full bg-event-purple/10 text-event-purple text-sm font-medium mb-4 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700">
              Secure Your Spot
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-100">
              Payment Instructions
            </h2>
            <p className="text-gray-600 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-200">
              To join this exclusive event, please make a payment using the account details below.
            </p>
          </div>
          
          <div className="glass rounded-3xl p-8 md:p-12 shadow-xl mb-12 animate-on-scroll opacity-0 translate-y-8 transition-all duration-700 delay-300">
            <h3 className="text-xl md:text-2xl font-display font-semibold mb-6 text-center">
              Domiciliary Account Details
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Account Number</p>
                  <p className="font-medium" ref={accountNumberRef}>0718265314</p>
                </div>
                <button 
                  onClick={() => copyToClipboard('0718265314', 'Account number')}
                  className="p-2 text-gray-500 hover:text-event-purple rounded-full transition-colors"
                  aria-label="Copy account number"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Account Name</p>
                  <p className="font-medium">Onsachi Martha</p>
                </div>
                <button 
                  onClick={() => copyToClipboard('Onsachi Martha', 'Account name')}
                  className="p-2 text-gray-500 hover:text-event-purple rounded-full transition-colors"
                  aria-label="Copy account name"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center justify-between bg-gray-50 p-4 rounded-xl">
                <div>
                  <p className="text-sm text-gray-500 mb-1">Bank Name</p>
                  <p className="font-medium">Gtbank</p>
                </div>
                <button 
                  onClick={() => copyToClipboard('Gtbank', 'Bank name')}
                  className="p-2 text-gray-500 hover:text-event-purple rounded-full transition-colors"
                  aria-label="Copy bank name"
                >
                  <Copy className="w-5 h-5" />
                </button>
              </div>
            </div>
            
            <div className="mt-8 pt-8 border-t border-gray-200">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                <p className="text-gray-600 text-sm">
                  After making the payment, please send proof of payment to our WhatsApp number to be added to the event group.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PaymentDetails;
