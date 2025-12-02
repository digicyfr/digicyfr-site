'use client';

import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function SystemIntegrationPage() {
  const features = [
    {
      title: "POS System Integration",
      description: "Connect your point-of-sale with other business systems for unified data management"
    },
    {
      title: "Delivery Platform Connectivity",
      description: "Integrate with leading delivery platforms including Glovo, Pyszne, UberEats, Bolt Food, and Wolt"
    },
    {
      title: "Custom Odoo Modules",
      description: "Tailor-made modules to extend Odoo functionality for your specific business needs"
    },
    {
      title: "API Solutions",
      description: "Custom API development for connecting any systems and automating workflows"
    },
    {
      title: "Automated Workflows",
      description: "Reduce manual work with intelligent automation between your business systems"
    },
    {
      title: "Data Synchronization",
      description: "Real-time data sync between platforms to ensure consistency across all systems"
    }
  ];

  const supportedPlatforms = [
    {
      name: "Glovo",
      description: "Leading European delivery platform"
    },
    {
      name: "Pyszne.pl",
      description: "Poland's premier food delivery service"
    },
    {
      name: "UberEats",
      description: "Global food delivery leader"
    },
    {
      name: "Bolt Food",
      description: "Fast-growing delivery platform"
    },
    {
      name: "Wolt",
      description: "Nordic delivery service expanding across Europe"
    }
  ];

  const benefits = [
    "Eliminate manual data entry and reduce errors",
    "Real-time synchronization between all platforms",
    "Automated order management from multiple sources",
    "Unified inventory management across channels",
    "Consistent customer data across all systems",
    "Reduced operational costs and increased efficiency",
    "Better data visibility for business decisions",
    "Scalable infrastructure that grows with your business"
  ];

  const processSteps = [
    {
      step: 1,
      title: "System Analysis",
      description: "Understanding your current systems, workflows, and integration requirements."
    },
    {
      step: 2,
      title: "Integration Planning",
      description: "Designing the integration architecture and data flow between systems."
    },
    {
      step: 3,
      title: "API Development",
      description: "Building custom APIs and connectors for seamless system communication."
    },
    {
      step: 4,
      title: "Testing & Validation",
      description: "Thorough testing of data flows, error handling, and system reliability."
    },
    {
      step: 5,
      title: "Deployment",
      description: "Implementing the integration and connecting all your business systems."
    },
    {
      step: 6,
      title: "Monitoring & Support",
      description: "Ongoing monitoring, maintenance, and optimization of your integrated systems."
    }
  ];

  return (
    <ServiceLayout
      title="System Integration"
      description="Seamless integration of your business systems with popular delivery platforms and third-party services."
    >
      <ServiceHero
        title="System Integration"
        description="Connect All Your Business Systems Seamlessly"
        serviceDescription="Seamless integration of your business systems with popular delivery platforms and third-party services. Eliminate manual data entry and create a unified ecosystem where all your tools work together perfectly."
      />

      <ServiceFeatures
        title="Our Integration Services"
        features={features}
      />

      <div className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Supported Platforms
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            We integrate with all major delivery and business platforms to create a unified system for your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
          {supportedPlatforms.map((platform, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow text-center">
              <CardHeader>
                <CardTitle className="text-lg text-primary">{platform.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {platform.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ServiceBenefits
        title="Benefits of System Integration"
        benefits={benefits}
      />

      <ServiceProcess
        title="Our Integration Process"
        steps={processSteps}
      />

      <ServiceCTA
        title="Ready to Connect Your Business Systems?"
        description="Let our integration specialists create a seamless ecosystem where all your tools work together perfectly."
        primaryButtonText="Start Integration Assessment"
        secondaryButtonText="View Integration Case Studies"
      />
    </ServiceLayout>
  );
}