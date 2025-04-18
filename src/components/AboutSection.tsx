
import React from 'react';
import { Building2, Award, Users, Clock } from "lucide-react";
import FeatureShowcase from "./FeatureShowcase";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">About MEP Engineering</h2>
            <div className="w-20 h-1 bg-mep-orange mb-6"></div>
            <p className="text-mep-gray-dark mb-6">
              With over 15 years of experience, MEP Engineering has established itself as a leader in providing comprehensive mechanical, electrical, and plumbing solutions for construction projects of all sizes. 
            </p>
            <p className="text-mep-gray-dark mb-6">
              Our team of highly qualified engineers and technicians leverages cutting-edge technology and industry best practices to deliver sustainable, efficient, and cost-effective MEP systems that exceed our clients' expectations.
            </p>
            <p className="text-mep-gray-dark mb-6">
              We pride ourselves on our commitment to quality, innovation, and client satisfaction, working collaboratively with architects, contractors, and owners to ensure successful project delivery from concept to completion.
            </p>
            
            <div className="mb-8">
              <FeatureShowcase />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="bg-mep-gray-light p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                <Building2 className="h-10 w-10 text-mep-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">500+</h3>
                <p className="text-mep-gray-dark">Projects Completed</p>
              </div>
              <div className="bg-mep-gray-light p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                <Award className="h-10 w-10 text-mep-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">25+</h3>
                <p className="text-mep-gray-dark">Industry Awards</p>
              </div>
              <div className="bg-mep-gray-light p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                <Users className="h-10 w-10 text-mep-blue mb-4" />
                <h3 className="text-xl font-bold mb-2">75+</h3>
                <p className="text-mep-gray-dark">Expert Engineers</p>
              </div>
              <div className="bg-mep-gray-light p-6 rounded-lg flex flex-col items-center text-center transition-transform hover:scale-105">
                <Clock className="h-10 w-10 text-mep-orange mb-4" />
                <h3 className="text-xl font-bold mb-2">15+</h3>
                <p className="text-mep-gray-dark">Years Experience</p>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 -translate-x-8 -translate-y-8 bg-mep-blue/20 rounded-lg"></div>
            <div className="absolute inset-0 translate-x-8 translate-y-8 bg-mep-orange/20 rounded-lg"></div>
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1431576901776-e539bd916ba2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
                alt="MEP Engineering team" 
                className="rounded-lg shadow-xl w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
