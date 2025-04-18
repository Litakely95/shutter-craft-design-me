
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Calculator, DollarSign } from "lucide-react";

type Service = {
  name: string;
  basePrice: number;
};

const QuotationCalculator = () => {
  const [squareMeters, setSquareMeters] = useState<string>("");
  const [selectedServices, setSelectedServices] = useState<string[]>([]);
  const [total, setTotal] = useState<number>(0);

  const services: Service[] = [
    { name: "HVAC System", basePrice: 150 },
    { name: "Electrical Installation", basePrice: 120 },
    { name: "Plumbing System", basePrice: 100 },
  ];

  const calculateQuote = () => {
    const area = parseFloat(squareMeters) || 0;
    const servicesTotal = selectedServices.reduce((acc, service) => {
      const serviceInfo = services.find(s => s.name === service);
      return acc + (serviceInfo ? serviceInfo.basePrice * area : 0);
    }, 0);
    setTotal(servicesTotal);
  };

  const toggleService = (serviceName: string) => {
    setSelectedServices(prev =>
      prev.includes(serviceName)
        ? prev.filter(s => s !== serviceName)
        : [...prev, serviceName]
    );
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Calculator className="h-6 w-6" />
          MEP Service Quotation Calculator
        </CardTitle>
        <CardDescription>
          Calculate an estimate for your MEP project based on area and required services
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        <div>
          <label className="text-sm font-medium mb-2 block">Project Area (Square Meters)</label>
          <Input
            type="number"
            placeholder="Enter area in square meters"
            value={squareMeters}
            onChange={(e) => setSquareMeters(e.target.value)}
            className="w-full"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium mb-2 block">Select Services</label>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {services.map((service) => (
              <Button
                key={service.name}
                variant={selectedServices.includes(service.name) ? "default" : "outline"}
                onClick={() => toggleService(service.name)}
                className="w-full"
              >
                {service.name}
              </Button>
            ))}
          </div>
        </div>
      </CardContent>
      
      <CardFooter className="flex flex-col space-y-4">
        <Button 
          onClick={calculateQuote}
          className="w-full bg-mep-blue hover:bg-mep-blue-dark"
        >
          Calculate Quote
        </Button>
        
        {total > 0 && (
          <div className="flex items-center justify-center gap-2 text-xl font-bold text-mep-blue">
            <DollarSign className="h-6 w-6" />
            Estimated Cost: ${total.toLocaleString()}
          </div>
        )}
      </CardFooter>
    </Card>
  );
};

export default QuotationCalculator;
