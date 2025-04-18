
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { CheckCircle, Plus } from 'lucide-react';
import { cn } from '@/lib/utils';

type ServiceDetail = {
  id: number;
  title: string;
  description: string;
  features: string[];
  icon: React.ReactNode;
};

const serviceDetails: ServiceDetail[] = [
  {
    id: 1,
    title: "HVAC Design & Installation",
    description: "Comprehensive heating, ventilation, and air conditioning systems optimized for energy efficiency and occupant comfort.",
    features: [
      "Load calculations and system sizing",
      "Ductwork design and layout",
      "Equipment selection and specification",
      "Energy efficiency optimization"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M22 10v3a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h7" />
        <circle cx="18" cy="5" r="3" />
        <path d="M22 5h-4" />
        <path d="M4 10h14" />
        <path d="M14 14v4" />
        <path d="M10 14v4" />
        <path d="M6 14v4" />
        <path d="M10 22H6" />
        <path d="M18 22h-4" />
      </svg>
    )
  },
  {
    id: 2,
    title: "Power Distribution Systems",
    description: "Reliable electrical power distribution solutions designed for safety, efficiency, and seamless operation.",
    features: [
      "Load analysis and capacity planning",
      "Switchgear and panel design",
      "Emergency power systems",
      "Power quality analysis"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M18 16.16c-1.9 1.87-4.2 2.84-7.34 2.84-5.18 0-9.58-4.3-9.66-9.55C.93 4.2 5.26 0 10.5 0c2.4 0 4.97.92 6.75 2.67" />
        <path d="M11 14v-3.75" />
        <path d="M11 6v-.75" />
        <path d="M9 7.75c0 3.5 3 3.5 3 0" />
        <path d="M20 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4z" />
        <path d="M20 12V4.5" />
        <path d="M20 19.5V16" />
      </svg>
    )
  },
  {
    id: 3,
    title: "Water Supply & Drainage",
    description: "Expertly designed plumbing systems that ensure reliable water supply, efficient drainage, and regulatory compliance.",
    features: [
      "Water supply system design",
      "Drainage system engineering",
      "Fixture selection and specification",
      "Water conservation strategies"
    ],
    icon: (
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-10 h-10">
        <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
        <path d="M12 14a3 3 0 0 0-3 3" />
      </svg>
    )
  }
];

const ServiceShowcase = () => {
  const [activeService, setActiveService] = useState<number | null>(null);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleServiceClick = (id: number) => {
    if (isAnimating) return;
    
    setIsAnimating(true);
    
    if (activeService === id) {
      // Close the current service
      setActiveService(null);
      setTimeout(() => setIsAnimating(false), 600);
    } else {
      // If another service is open, close it first then open the new one
      if (activeService !== null) {
        setActiveService(null);
        setTimeout(() => {
          setActiveService(id);
          setTimeout(() => setIsAnimating(false), 600);
        }, 600);
      } else {
        // If no service is open, open the selected one
        setActiveService(id);
        setTimeout(() => setIsAnimating(false), 600);
      }
    }
  };

  const getActiveService = () => {
    if (activeService === null) return null;
    return serviceDetails.find(service => service.id === activeService);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {serviceDetails.map((service) => (
          <Button
            key={service.id}
            variant="outline"
            onClick={() => handleServiceClick(service.id)}
            className={cn(
              "h-auto p-6 text-left flex flex-col items-start transition-all duration-300",
              activeService === service.id 
                ? "bg-mep-blue text-white border-mep-blue shadow-lg"
                : "hover:border-mep-blue"
            )}
          >
            <div className={cn(
              "w-16 h-16 rounded-full flex items-center justify-center mb-4 transition-colors",
              activeService === service.id 
                ? "bg-white text-mep-blue" 
                : "bg-mep-gray-light text-mep-blue"
            )}>
              {service.icon}
            </div>
            <h3 className="text-xl font-bold mb-2">{service.title}</h3>
            <div className="flex items-center mt-2">
              <span className="text-sm mr-2">
                {activeService === service.id ? "View Less" : "View Details"}
              </span>
              <Plus 
                className={cn(
                  "h-4 w-4 transition-transform duration-300", 
                  activeService === service.id ? "rotate-45" : "rotate-0"
                )} 
              />
            </div>
          </Button>
        ))}
      </div>
      
      <div className="relative h-[400px] overflow-hidden rounded-lg border border-mep-gray bg-white">
        <div className="absolute inset-0 flex">
          {/* Left shutter */}
          <div 
            className={cn(
              "h-full bg-mep-blue transition-all duration-600 ease-in-out overflow-hidden relative",
              activeService !== null ? "w-1/2" : "w-0"
            )}
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-full flex items-center">
                <div 
                  className={cn(
                    "p-8 transition-opacity duration-300",
                    activeService !== null ? "opacity-100 delay-300" : "opacity-0"
                  )}
                >
                  {activeService !== null && (
                    <div className="max-w-md">
                      <div className="text-white mb-6">
                        {getActiveService()?.icon}
                      </div>
                      <h3 className="text-2xl font-bold text-white mb-2">
                        {getActiveService()?.title}
                      </h3>
                      <p className="text-white/80 mb-6">
                        {getActiveService()?.description}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-white/5"></div>
          </div>
          
          {/* Right shutter */}
          <div 
            className={cn(
              "h-full bg-mep-gray-light transition-all duration-600 ease-in-out overflow-hidden relative",
              activeService !== null ? "w-1/2" : "w-full"
            )}
          >
            <div className="absolute inset-0 flex items-center">
              <div 
                className={cn(
                  "p-8 transition-opacity duration-300", 
                  activeService !== null ? "opacity-100 delay-300" : "opacity-0"
                )}
              >
                {activeService !== null && (
                  <div className="max-w-md">
                    <h4 className="text-xl font-semibold mb-4 text-mep-blue">Key Features</h4>
                    <ul className="space-y-4">
                      {getActiveService()?.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-mep-orange mr-3 mt-0.5" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <Button className="bg-mep-blue hover:bg-mep-blue-dark">
                        Learn More
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            {/* Background pattern for empty state */}
            {activeService === null && (
              <div className="absolute inset-0 flex items-center justify-center bg-[linear-gradient(135deg,rgba(74,137,220,0.1)_10px,transparent_10px,transparent_20px,rgba(74,137,220,0.1)_20px)] bg-[length:20px_20px] p-8">
                <div className="text-center">
                  <h3 className="text-2xl font-bold mb-4 text-mep-gray-dark">
                    Select a Service Above
                  </h3>
                  <p className="text-mep-gray-dark">
                    Click on any service to view detailed information and key features
                  </p>
                </div>
              </div>
            )}
            
            <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-l from-transparent to-mep-blue/5"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceShowcase;
