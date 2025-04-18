
import React from 'react';
import { Button } from "@/components/ui/button";
import { Menu, Phone, Mail } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md w-full fixed top-0 z-50">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          <div className="text-2xl font-bold text-mep-blue">
            <span>MEP</span>
            <span className="text-mep-orange ml-1">Engineering</span>
          </div>
        </div>
        
        <div className="hidden md:flex items-center space-x-8">
          <a href="#home" className="text-mep-gray-dark hover:text-mep-blue transition-colors">Home</a>
          <a href="#services" className="text-mep-gray-dark hover:text-mep-blue transition-colors">Services</a>
          <a href="#about" className="text-mep-gray-dark hover:text-mep-blue transition-colors">About</a>
          <a href="#projects" className="text-mep-gray-dark hover:text-mep-blue transition-colors">Projects</a>
          <a href="#contact" className="text-mep-gray-dark hover:text-mep-blue transition-colors">Contact</a>
        </div>
        
        <div className="hidden md:flex items-center space-x-4">
          <div className="flex items-center space-x-1">
            <Phone size={16} className="text-mep-blue" />
            <span className="text-sm text-mep-gray-dark">+1 (555) 123-4567</span>
          </div>
          <div className="flex items-center space-x-1">
            <Mail size={16} className="text-mep-blue" />
            <span className="text-sm text-mep-gray-dark">info@mepengineering.com</span>
          </div>
        </div>
        
        <div className="md:hidden flex items-center">
          <Button variant="ghost" size="icon">
            <Menu className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
