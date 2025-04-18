
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import ShutterGallery from './ShutterGallery';

const projectCategories = ["All", "Commercial", "Residential", "Industrial", "Healthcare"];

const projectsData = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["HVAC", "Electrical", "Plumbing"]
  },
  {
    id: 2,
    title: "Luxury Apartment Building",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["Electrical", "Plumbing"]
  },
  {
    id: 3,
    title: "Manufacturing Plant",
    category: "Industrial",
    image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["HVAC", "Electrical"]
  },
  {
    id: 4,
    title: "Medical Center",
    category: "Healthcare",
    image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["HVAC", "Electrical", "Plumbing", "Fire Protection"]
  },
  {
    id: 5,
    title: "Shopping Center",
    category: "Commercial",
    image: "https://images.unsplash.com/photo-1460574283810-2aab119d8511?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["HVAC", "Electrical"]
  },
  {
    id: 6,
    title: "High-Rise Apartments",
    category: "Residential",
    image: "https://images.unsplash.com/photo-1459767129954-1b1c1f9b9ace?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    services: ["HVAC", "Electrical", "Plumbing"]
  }
];

const ProjectsSection = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [isShutterOpen, setIsShutterOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  
  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory);
  
  const openProjectDetails = (id: number) => {
    setSelectedProject(id);
    setIsShutterOpen(true);
  };
  
  const closeProjectDetails = () => {
    setIsShutterOpen(false);
    setTimeout(() => setSelectedProject(null), 600); // Wait for animation to complete
  };
  
  const selectedProjectData = selectedProject !== null 
    ? projectsData.find(p => p.id === selectedProject) 
    : null;
  
  return (
    <section id="projects" className="py-20 bg-mep-blue-dark text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Featured Projects</h2>
          <div className="w-20 h-1 bg-mep-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-white/80">
            Explore our portfolio of successful MEP engineering projects across various sectors.
            From commercial buildings to industrial facilities, we deliver excellence at every scale.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {projectCategories.map(category => (
            <Button
              key={category}
              variant={activeCategory === category ? "default" : "outline"}
              className={activeCategory === category 
                ? "bg-mep-orange hover:bg-mep-orange-dark" 
                : "border-white/30 text-white hover:bg-white/10"}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </Button>
          ))}
        </div>
        
        <ShutterGallery 
          items={filteredProjects.map(project => ({
            id: project.id,
            title: project.title,
            category: project.category,
            imageUrl: project.image
          }))}
        />
      </div>
      
      {/* Project details shutter */}
      {selectedProject !== null && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div 
            className="absolute inset-0 bg-black/70"
            onClick={closeProjectDetails}
          ></div>
          <div className={`shutter-diagonal ${isShutterOpen ? 'open' : ''} bg-white max-w-3xl w-full rounded-lg relative z-10`}>
            <div className={`shutter-content ${isShutterOpen ? 'visible' : ''} p-8`}>
              {selectedProjectData && (
                <div className="text-mep-blue-dark">
                  <Button 
                    variant="ghost" 
                    className="absolute top-4 right-4 text-mep-gray-dark"
                    onClick={closeProjectDetails}
                  >
                    ✕
                  </Button>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <img 
                        src={selectedProjectData.image} 
                        alt={selectedProjectData.title}
                        className="w-full h-auto rounded-lg" 
                      />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold mb-2">{selectedProjectData.title}</h3>
                      <p className="text-mep-orange font-medium mb-4">{selectedProjectData.category}</p>
                      <h4 className="font-semibold mb-2">Services Provided:</h4>
                      <ul className="list-disc list-inside mb-6">
                        {selectedProjectData.services.map((service, idx) => (
                          <li key={idx} className="text-mep-gray-dark">{service}</li>
                        ))}
                      </ul>
                      <p className="text-mep-gray-dark mb-4">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vehicula 
                        magna sit amet pellentesque vulputate. Vestibulum et odio at leo tristique 
                        feugiat ac ac nunc.
                      </p>
                      <Button className="bg-mep-blue hover:bg-mep-blue-dark">View Full Case Study</Button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProjectsSection;
