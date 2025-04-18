
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface GalleryItem {
  id: number;
  title: string;
  category: string;
  imageUrl: string;
}

interface ShutterGalleryProps {
  items: GalleryItem[];
}

const ShutterGallery = ({ items }: ShutterGalleryProps) => {
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {items.map((item) => (
        <div 
          key={item.id} 
          className="h-64 relative overflow-hidden rounded-lg cursor-pointer group"
          onMouseEnter={() => setHoveredItem(item.id)}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Background Image */}
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-110"
            style={{ backgroundImage: `url(${item.imageUrl})` }}
          />
          
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-mep-blue-dark/90 to-transparent opacity-90" />
          
          {/* Shutter Effect */}
          <div
            className={cn(
              "absolute inset-0 transition-all duration-500 ease-in-out",
              hoveredItem === item.id ? "opacity-100" : "opacity-0"
            )}
          >
            {/* Horizontal Shutters */}
            <div className="absolute inset-0 flex flex-col">
              <div 
                className={cn(
                  "bg-mep-blue/90 transition-all duration-500 ease-in-out", 
                  hoveredItem === item.id ? "h-1/3" : "h-0"
                )} 
              />
              <div className="flex-grow" />
              <div 
                className={cn(
                  "bg-mep-orange/90 transition-all duration-500 ease-in-out", 
                  hoveredItem === item.id ? "h-1/3" : "h-0"
                )} 
              />
            </div>
            
            {/* Content - appears when shutters open */}
            <div 
              className={cn(
                "absolute inset-0 flex items-center justify-center transition-opacity duration-300",
                hoveredItem === item.id ? "opacity-100 delay-300" : "opacity-0"
              )}
            >
              <div className="text-center text-white p-6">
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-white/80 text-sm">{item.category}</p>
                <div className="mt-4 border-2 border-white w-10 h-10 rounded-full flex items-center justify-center mx-auto">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </div>
              </div>
            </div>
          </div>
          
          {/* Default Title - visible when not hovered */}
          <div 
            className={cn(
              "absolute bottom-0 left-0 right-0 p-6 transition-all duration-500",
              hoveredItem === item.id ? "translate-y-full" : "translate-y-0"
            )}
          >
            <h3 className="text-xl font-bold text-white">{item.title}</h3>
            <p className="text-white/80 text-sm">{item.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShutterGallery;
