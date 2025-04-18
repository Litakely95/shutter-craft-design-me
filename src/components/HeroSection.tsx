
import React from 'react';
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-20 relative">
      {/* Background with darker gradient overlay for better text visibility */}
      <div className="absolute inset-0 z-0 bg-gradient-to-r from-mep-blue/95 to-mep-blue-dark/90">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] mix-blend-overlay opacity-40 bg-cover bg-center"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col items-center md:items-start md:w-2/3 text-white">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center md:text-left drop-shadow-lg">
              Building The Future With <span className="text-mep-orange-light">Engineering Excellence</span>
            </h1>
            <p className="text-xl md:text-2xl mb-10 max-w-2xl text-center md:text-left font-medium drop-shadow-md">
              Leading MEP construction and engineering solutions for commercial, industrial, and residential projects. We deliver excellence in every project.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <Button className="bg-mep-orange hover:bg-mep-orange-dark text-white px-8 py-7 rounded-md text-lg shadow-lg">
                Our Services
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="border-2 border-white text-white hover:bg-white/20 px-8 py-7 rounded-md text-lg backdrop-blur-sm">
                Contact Us
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
