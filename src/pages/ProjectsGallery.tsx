
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Modern Office Complex",
    category: "Commercial",
    description: "Complete MEP solutions for a 20-story office building including state-of-the-art HVAC systems.",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tags: ["HVAC", "Electrical", "Plumbing"]
  },
  {
    title: "Healthcare Facility",
    category: "Healthcare",
    description: "Advanced medical gas systems and specialized electrical installations for a new hospital wing.",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    tags: ["Medical Gas", "Emergency Power", "HVAC"]
  },
  {
    title: "Residential Complex",
    category: "Residential",
    description: "Smart home integration and energy-efficient systems for a luxury apartment complex.",
    image: "https://images.unsplash.com/photo-1493397212122-2b85dda8106b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80",
    tags: ["Smart Systems", "Energy Efficiency", "Plumbing"]
  }
];

const ProjectsGallery = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-mep-blue-dark">
              Our Featured Projects
            </h1>
            <div className="w-32 h-2 bg-mep-orange mx-auto mb-8"></div>
            <p className="text-xl text-mep-gray-dark max-w-3xl mx-auto">
              Discover our portfolio of successful MEP engineering projects across various sectors
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="overflow-hidden group hover:shadow-xl transition-shadow duration-300">
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent">
                      <div className="absolute bottom-4 left-4 right-4">
                        <Badge className="mb-2 bg-mep-orange text-white">
                          {project.category}
                        </Badge>
                        <h3 className="text-xl font-bold text-white mb-1">
                          {project.title}
                        </h3>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-mep-gray-dark mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <Badge
                          key={tagIndex}
                          variant="outline"
                          className="bg-mep-gray-light text-mep-blue-dark"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
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

export default ProjectsGallery;
