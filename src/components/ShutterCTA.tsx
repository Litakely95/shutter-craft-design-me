
import React, { useState, useEffect, useRef } from 'react';
import { Button } from "@/components/ui/button";
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';

const ShutterCTA = () => {
  const [leftShutterOpen, setLeftShutterOpen] = useState(false);
  const [rightShutterOpen, setRightShutterOpen] = useState(false);
  const [contentVisible, setContentVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setLeftShutterOpen(true), 200);
          setTimeout(() => setRightShutterOpen(true), 500);
          setTimeout(() => setContentVisible(true), 1000);
        }
      },
      { threshold: 0.2 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="relative h-[300px] overflow-hidden rounded-lg">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-mep-gray-dark opacity-10 pattern-grid-lg"></div>
      
      {/* Left shutter */}
      <div 
        className={cn(
          "absolute h-full bg-mep-blue left-0 transition-all duration-700 ease-out",
          leftShutterOpen ? "w-1/2" : "w-0"
        )}
      >
        <div className="absolute top-0 right-0 h-full w-8 bg-gradient-to-r from-transparent to-white/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
      </div>
      
      {/* Right shutter */}
      <div 
        className={cn(
          "absolute h-full bg-mep-orange right-0 transition-all duration-700 ease-out",
          rightShutterOpen ? "w-1/2" : "w-0"
        )}
      >
        <div className="absolute top-0 left-0 h-full w-8 bg-gradient-to-l from-transparent to-white/10"></div>
        <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.1)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.1)_50%,rgba(255,255,255,0.1)_75%,transparent_75%,transparent)] bg-[length:4px_4px]"></div>
      </div>
      
      {/* Content */}
      <div 
        className={cn(
          "absolute inset-0 flex items-center justify-center transition-opacity duration-700",
          contentVisible ? "opacity-100" : "opacity-0"
        )}
      >
        <div className="text-center text-white p-6 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Discuss Your Project?</h2>
          <p className="text-xl mb-8">
            Let our team of expert MEP engineers help bring your construction project to life.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-white text-mep-blue hover:bg-white/90 text-lg px-6 py-6">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white/10 text-lg px-6 py-6">
              View Our Projects
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShutterCTA;
