
import React from 'react';
import ShutterService from './ShutterService';
import ServiceShowcase from './ServiceShowcase';

const ServicesSection = () => {
  return (
    <section id="services" className="py-20 bg-mep-gray-light">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our MEP Engineering Services</h2>
          <div className="w-20 h-1 bg-mep-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-mep-gray-dark">
            We provide comprehensive mechanical, electrical, and plumbing solutions 
            tailored to meet the specific needs of your construction project.
          </p>
        </div>
        
        {/* Interactive Services Showcase */}
        <div className="mb-32">
          <ServiceShowcase />
        </div>
        
        <div className="space-y-24">
          {/* Mechanical Engineering Service */}
          <div className="h-[500px]">
            <ShutterService 
              title="Mechanical Engineering"
              description="Our mechanical engineering services ensure optimal HVAC systems, energy efficiency, and comfortable indoor environments."
              features={[
                "HVAC system design and installation",
                "Energy modeling and analysis",
                "Building automation systems",
                "Ventilation and air quality solutions"
              ]}
              imageUrl="https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              shutterStyle="horizontal"
              patternClass="mechanical-pattern"
              color="#4A89DC"
              direction="left"
            />
          </div>
          
          {/* Electrical Engineering Service */}
          <div className="h-[500px]">
            <ShutterService 
              title="Electrical Engineering"
              description="From power distribution to lighting design, our electrical engineering team delivers safe, efficient, and code-compliant solutions."
              features={[
                "Power distribution systems",
                "Lighting design and controls",
                "Emergency power systems",
                "Low voltage and communication systems"
              ]}
              imageUrl="https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              shutterStyle="diagonal"
              patternClass="electrical-pattern"
              color="#F6BB42"
              direction="right"
            />
          </div>
          
          {/* Plumbing Engineering Service */}
          <div className="h-[500px]">
            <ShutterService 
              title="Plumbing Engineering"
              description="Our plumbing engineering services provide reliable water supply, drainage, and fire protection systems for all building types."
              features={[
                "Water supply and distribution",
                "Drainage and waste systems",
                "Fire protection systems",
                "Sustainable water technologies"
              ]}
              imageUrl="https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              shutterStyle="vertical"
              patternClass="plumbing-pattern"
              color="#3A6BC5"
              direction="bottom"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
