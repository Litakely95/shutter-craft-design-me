
import React from 'react';
import ShutterTestimonial from './ShutterTestimonial';

const testimonials = [
  {
    name: "John Smith",
    position: "Project Manager",
    company: "Skyline Construction",
    quote: "MEP Engineering delivered outstanding HVAC and electrical systems for our office tower project. Their designs were innovative, efficient, and perfectly integrated with our architectural vision.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "Sarah Johnson",
    position: "Director of Operations",
    company: "Healthcare Solutions",
    quote: "The MEP systems designed for our medical facility were exceptional. They understood the critical requirements of our facility and delivered solutions that exceeded expectations.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    name: "David Chen",
    position: "Chief Engineer",
    company: "Pinnacle Properties",
    quote: "We've worked with MEP Engineering on multiple large-scale projects. Their expertise in sustainable design has helped us achieve LEED certification while optimizing operational costs.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-mep-gray-light to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our Clients Say</h2>
          <div className="w-20 h-1 bg-mep-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-mep-gray-dark">
            We take pride in our work and the relationships we build with our clients.
            Here's what some of them have to say about our MEP engineering services.
          </p>
        </div>
        
        <ShutterTestimonial testimonials={testimonials} />
      </div>
    </section>
  );
};

export default TestimonialsSection;
