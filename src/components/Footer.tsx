
import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-mep-blue-dark text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <div className="text-2xl font-bold mb-6">
              <span>MEP</span>
              <span className="text-mep-orange ml-1">Engineering</span>
            </div>
            <p className="text-white/70 mb-6">
              Your trusted partner for comprehensive mechanical, electrical, and plumbing engineering solutions 
              that drive construction success.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="bg-white/10 hover:bg-mep-orange transition-colors p-2 rounded-full">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mep-orange transition-colors p-2 rounded-full">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mep-orange transition-colors p-2 rounded-full">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="bg-white/10 hover:bg-mep-orange transition-colors p-2 rounded-full">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Mechanical Engineering</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Electrical Engineering</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Plumbing Engineering</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Fire Protection</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Energy Analysis</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Commissioning</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Useful Links</h3>
            <ul className="space-y-3">
              <li><a href="#home" className="text-white/70 hover:text-mep-orange transition-colors">Home</a></li>
              <li><a href="#about" className="text-white/70 hover:text-mep-orange transition-colors">About Us</a></li>
              <li><a href="#services" className="text-white/70 hover:text-mep-orange transition-colors">Services</a></li>
              <li><a href="#projects" className="text-white/70 hover:text-mep-orange transition-colors">Projects</a></li>
              <li><a href="#contact" className="text-white/70 hover:text-mep-orange transition-colors">Contact</a></li>
              <li><a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Careers</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-6">Newsletter</h3>
            <p className="text-white/70 mb-4">
              Subscribe to our newsletter to receive the latest news and updates about MEP innovations.
            </p>
            <form className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-4 py-2 rounded-l-md flex-1 bg-white/10 border border-white/20 focus:outline-none focus:ring-1 focus:ring-mep-orange"
              />
              <button 
                type="submit"
                className="bg-mep-orange hover:bg-mep-orange-dark px-4 rounded-r-md"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/70">© 2025 MEP Engineering. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Terms of Service</a>
              <a href="#" className="text-white/70 hover:text-mep-orange transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
