
import React, { useState, useEffect, useRef } from 'react';
import { Quote } from "lucide-react";
import { cn } from '@/lib/utils';

interface Testimonial {
  name: string;
  position: string;
  company: string;
  quote: string;
  image: string;
}

interface ShutterTestimonialProps {
  testimonials: Testimonial[];
}

const ShutterTestimonial = ({ testimonials }: ShutterTestimonialProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isShutterOpen, setIsShutterOpen] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            // Initial open
            setTimeout(() => setIsShutterOpen(true), 300);
            setTimeout(() => setIsContentVisible(true), 900);
          }
        },
        { threshold: 0.3 }
      );
      
      observer.observe(containerRef.current);
      
      return () => {
        if (containerRef.current) {
          observer.unobserve(containerRef.current);
        }
      };
    }
  }, []);

  useEffect(() => {
    // When changing testimonial
    if (activeIndex > 0) {
      setIsContentVisible(false);
      setIsShutterOpen(false);
      
      setTimeout(() => {
        setIsShutterOpen(true);
        setTimeout(() => setIsContentVisible(true), 600);
      }, 600);
    }
    
    // Auto rotate testimonials
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(interval);
  }, [activeIndex, testimonials.length]);

  const currentTestimonial = testimonials[activeIndex];

  return (
    <div ref={containerRef} className="shutter-container w-full h-[400px] relative mx-auto max-w-4xl">
      <div className="absolute inset-0 bg-mep-blue-dark/20 rounded-lg"></div>
      
      <div 
        className={cn(
          "absolute inset-0 bg-gradient-to-r from-mep-blue to-mep-blue-dark rounded-lg overflow-hidden",
          isShutterOpen ? "animate-shutter-open-h" : "w-0"
        )}
      >
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(255,255,255,0.15),_transparent_70%)]"></div>
        
        <div className={cn(
          "h-full w-full flex items-center transition-opacity duration-500",
          isContentVisible ? "opacity-100" : "opacity-0"
        )}>
          <div className="container p-8 grid md:grid-cols-3 gap-8 items-center">
            <div className="md:col-span-1">
              <div className="relative w-40 h-40 mx-auto md:mx-0">
                {/* Decorative elements */}
                <div className="absolute -top-3 -left-3 w-full h-full border-2 border-white/30 rounded-full"></div>
                <div className="absolute -bottom-3 -right-3 w-full h-full border-2 border-mep-orange/50 rounded-full"></div>
                
                {/* Image */}
                <div className="absolute inset-0 rounded-full overflow-hidden border-4 border-white">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover" 
                  />
                </div>
              </div>
            </div>
            
            <div className="md:col-span-2 text-white">
              <Quote className="h-10 w-10 text-mep-orange opacity-50 mb-4" />
              <blockquote className="text-xl italic mb-6">
                "{currentTestimonial.quote}"
              </blockquote>
              <div>
                <h4 className="font-bold text-lg">{currentTestimonial.name}</h4>
                <p className="text-white/80">
                  {currentTestimonial.position}, {currentTestimonial.company}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-all duration-300",
              index === activeIndex ? "bg-mep-orange w-6" : "bg-white/30"
            )}
            onClick={() => setActiveIndex(index)}
            aria-label={`View testimonial ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default ShutterTestimonial;
