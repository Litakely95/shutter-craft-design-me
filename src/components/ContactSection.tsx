
import React from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Contact Us</h2>
          <div className="w-20 h-1 bg-mep-orange mx-auto mb-6"></div>
          <p className="max-w-2xl mx-auto text-mep-gray-dark">
            Get in touch with our team to discuss your MEP engineering needs.
            We're here to help bring your construction project to life.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12">
          <div className="bg-mep-gray-light p-8 rounded-lg">
            <h3 className="text-2xl font-bold mb-6 text-mep-blue">Send Us a Message</h3>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-mep-gray-dark">Full Name</label>
                  <Input 
                    id="name" 
                    placeholder="Your name" 
                    className="bg-white border-mep-gray focus:border-mep-blue" 
                    required 
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-mep-gray-dark">Email Address</label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="Your email" 
                    className="bg-white border-mep-gray focus:border-mep-blue" 
                    required 
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label htmlFor="subject" className="text-mep-gray-dark">Subject</label>
                <Input 
                  id="subject" 
                  placeholder="How can we help you?" 
                  className="bg-white border-mep-gray focus:border-mep-blue" 
                  required 
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="message" className="text-mep-gray-dark">Message</label>
                <Textarea 
                  id="message" 
                  placeholder="Your message" 
                  className="bg-white border-mep-gray focus:border-mep-blue h-32" 
                  required 
                />
              </div>
              <Button className="bg-mep-blue hover:bg-mep-blue-dark w-full py-6">
                Send Message
              </Button>
            </form>
          </div>
          
          <div>
            <h3 className="text-2xl font-bold mb-6 text-mep-blue">Contact Information</h3>
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-mep-blue rounded-full p-3 mr-4">
                  <Phone className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Phone</h4>
                  <p className="text-mep-gray-dark">+1 (555) 123-4567</p>
                  <p className="text-mep-gray-dark">+1 (555) 987-6543</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mep-orange rounded-full p-3 mr-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Email</h4>
                  <p className="text-mep-gray-dark">info@mepengineering.com</p>
                  <p className="text-mep-gray-dark">support@mepengineering.com</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mep-blue rounded-full p-3 mr-4">
                  <MapPin className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Office Location</h4>
                  <p className="text-mep-gray-dark">
                    1234 Construction Avenue, <br />
                    Building 5, Suite 300, <br />
                    New York, NY 10001
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-mep-orange rounded-full p-3 mr-4">
                  <Clock className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-1">Working Hours</h4>
                  <p className="text-mep-gray-dark">
                    Monday - Friday: 8:00 AM - 6:00 PM <br />
                    Saturday: 9:00 AM - 1:00 PM <br />
                    Sunday: Closed
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
