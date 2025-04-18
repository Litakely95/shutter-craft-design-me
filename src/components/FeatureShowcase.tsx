
import React, { useState, useEffect } from 'react';
import { cn } from '@/lib/utils';

const features = [
  {
    id: 1,
    title: "Innovative Design",
    description: "Cutting-edge MEP solutions that blend functionality with innovation",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
      </svg>
    )
  },
  {
    id: 2,
    title: "Sustainability",
    description: "Energy-efficient designs that reduce environmental impact and lower operational costs",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 3v19"></path>
        <path d="M5 20c2 2.5 5 2.5 7 0 2 2.5 5 2.5 7 0"></path>
        <path d="M5 16c2 2.5 5 2.5 7 0 2 2.5 5 2.5 7 0"></path>
        <path d="M5 12c2 2.5 5 2.5 7 0 2 2.5 5 2.5 7 0"></path>
      </svg>
    )
  },
  {
    id: 3,
    title: "Precision Engineering",
    description: "Meticulously calculated systems designed for optimal performance and reliability",
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"></circle>
        <line x1="22" y1="12" x2="18" y2="12"></line>
        <line x1="6" y1="12" x2="2" y2="12"></line>
        <line x1="12" y1="6" x2="12" y2="2"></line>
        <line x1="12" y1="22" x2="12" y2="18"></line>
      </svg>
    )
  }
];

const FeatureShowcase = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  
  useEffect(() => {
    // Auto-rotate features
    const interval = setInterval(() => {
      setActiveFeature(prev => (prev + 1) % features.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, []);
  
  return (
    <div className="py-10">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        {features.map((feature, index) => (
          <div 
            key={feature.id}
            className={cn(
              "flex flex-col items-center text-center transition-all duration-500",
              activeFeature === index ? "opacity-100 scale-105" : "opacity-50 scale-95"
            )}
            onClick={() => setActiveFeature(index)}
          >
            <div className="relative mb-6">
              {/* Outer circle shutter */}
              <div 
                className={cn(
                  "w-24 h-24 rounded-full transition-all duration-1000 relative",
                  activeFeature === index 
                    ? "bg-gradient-to-r from-mep-blue to-mep-blue-light" 
                    : "bg-mep-gray-light"
                )}
              >
                {/* Inner circle with rotating shutter effect */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div
                    className={cn(
                      "w-20 h-20 bg-white rounded-full flex items-center justify-center transition-transform duration-1000",
                      activeFeature === index ? "scale-100" : "scale-0"
                    )}
                  >
                    {/* Icon */}
                    <div 
                      className={cn(
                        "text-mep-blue transition-opacity duration-500",
                        activeFeature === index ? "opacity-100" : "opacity-0"
                      )}
                    >
                      {feature.icon}
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated ring */}
              <div
                className={cn(
                  "absolute -inset-2 rounded-full border-2 transition-all duration-1000",
                  activeFeature === index 
                    ? "border-mep-orange animate-pulse" 
                    : "border-transparent"
                )}
              ></div>
            </div>
            
            <h3 className={cn(
              "text-xl font-bold mb-2 transition-colors duration-500",
              activeFeature === index ? "text-mep-blue-dark" : "text-mep-gray-dark"
            )}>
              {feature.title}
            </h3>
            
            <p className={cn(
              "transition-all duration-500 max-w-xs",
              activeFeature === index ? "opacity-100" : "opacity-70"
            )}>
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureShowcase;
