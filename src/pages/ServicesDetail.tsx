
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { motion } from 'framer-motion';
import { ChevronRight, CheckCircle } from 'lucide-react';

const ServicesDetail = () => {
  const services = [
    {
      title: "Mechanical Engineering",
      icon: "🔧",
      description: "Comprehensive HVAC and mechanical system solutions",
      features: [
        "Energy-efficient HVAC design",
        "Building automation systems",
        "Ventilation optimization",
        "Thermal comfort analysis"
      ]
    },
    {
      title: "Electrical Engineering",
      icon: "⚡",
      description: "Advanced electrical systems and power distribution",
      features: [
        "Power distribution systems",
        "Lighting design",
        "Emergency power systems",
        "Smart building integration"
      ]
    },
    {
      title: "Plumbing Engineering",
      icon: "🚰",
      description: "Complete plumbing and fire protection solutions",
      features: [
        "Water supply systems",
        "Drainage solutions",
        "Fire suppression systems",
        "Sustainable water management"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow pt-20">
        <div className="container mx-auto px-4 py-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-mep-blue to-mep-blue-dark">
              Our Engineering Services
            </h1>
            <div className="w-32 h-2 bg-gradient-to-r from-mep-orange to-mep-orange-dark mx-auto mb-8"></div>
            <p className="text-xl text-mep-gray-dark max-w-3xl mx-auto">
              Discover our comprehensive range of MEP engineering services tailored to your needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <Card className="p-6 h-full hover:shadow-xl transition-shadow duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 opacity-5 transform translate-x-16 -translate-y-16">
                    <span className="text-8xl">{service.icon}</span>
                  </div>
                  <h3 className="text-2xl font-bold mb-4 text-mep-blue-dark">
                    {service.title}
                  </h3>
                  <p className="text-mep-gray-dark mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={featureIndex}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: (index * 0.2) + (featureIndex * 0.1) }}
                        className="flex items-center text-mep-gray-dark"
                      >
                        <CheckCircle className="h-5 w-5 mr-2 text-mep-orange" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                  <Button className="w-full bg-mep-blue hover:bg-mep-blue-dark text-white">
                    Learn More
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ServicesDetail;
