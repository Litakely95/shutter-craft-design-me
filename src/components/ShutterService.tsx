
import React, { useState, useEffect, useRef } from 'react';
import { CheckCircle } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ShutterServiceProps {
  title: string;
  description: string;
  features: string[];
  imageUrl: string;
  shutterStyle: 'horizontal' | 'vertical' | 'diagonal';
  patternClass?: string;
  color: string;
  direction?: 'left' | 'right' | 'top' | 'bottom';
}

const ShutterService = ({
  title,
  description,
  features,
  imageUrl,
  shutterStyle,
  patternClass,
  color,
  direction = 'left'
}: ShutterServiceProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // When the component is in view, open the shutter
        if (entry.isIntersecting) {
          setTimeout(() => {
            setIsOpen(true);
          }, 300);
          
          setTimeout(() => {
            setIsVisible(true);
          }, 900);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const getShutterClass = () => {
    let baseClass = "";
    
    switch (shutterStyle) {
      case 'horizontal':
        baseClass = "shutter-horizontal";
        break;
      case 'vertical':
        baseClass = "shutter-vertical";
        break;
      case 'diagonal':
        baseClass = "shutter-diagonal";
        break;
    }
    
    return cn(baseClass, patternClass, isOpen ? 'open' : '');
  };

  return (
    <div ref={ref} className="shutter-container w-full h-full">
      <div 
        className={getShutterClass()} 
        style={{ backgroundColor: color }}
      >
        <div className={cn("shutter-content h-full", isVisible ? "visible" : "")}>
          <div className="grid md:grid-cols-2 gap-8 h-full">
            <div className="p-8 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-4 text-white">{title}</h3>
              <p className="text-white/90 mb-6">{description}</p>
              <ul className="space-y-3">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-center text-white/90">
                    <CheckCircle className="h-5 w-5 mr-2 text-white" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
            <div 
              className="bg-cover bg-center h-full min-h-[300px]" 
              style={{ backgroundImage: `url(${imageUrl})` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShutterService;
