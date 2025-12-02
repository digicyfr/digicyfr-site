'use client';

import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function WebsiteDevelopmentPage() {
  const websiteTypes = [
    {
      title: "Corporate Websites",
      description: "Professional business websites and landing pages that establish your online presence"
    },
    {
      title: "E-commerce Stores",
      description: "Full-featured online stores with payment processing and inventory management"
    },
    {
      title: "Restaurant Websites",
      description: "Food service websites with online ordering, menu display, and delivery integration"
    },
    {
      title: "Service Business Sites",
      description: "Websites for service businesses with booking functionality and client portals"
    },
    {
      title: "Portfolio Websites",
      description: "Showcase websites for creative professionals and businesses"
    },
    {
      title: "Custom Applications",
      description: "Tailored web applications with specific business functionality"
    }
  ];

  const features = [
    {
      title: "Responsive Design",
      description: "Beautiful, mobile-first designs that work perfectly on all devices"
    },
    {
      title: "E-commerce Solutions",
      description: "Full-featured online stores with payment processing, inventory management, and order tracking"
    },
    {
      title: "CMS Integration",
      description: "Easy-to-use content management systems that put you in control"
    },
    {
      title: "Mobile Optimization",
      description: "Fast-loading, touch-friendly interfaces optimized for mobile users"
    },
    {
      title: "Custom Features",
      description: "Booking systems, customer portals, calculators, and specialized functionality"
    },
    {
      title: "Security & Performance",
      description: "SSL certificates, CDN integration, and performance optimization"
    }
  ];

  const benefits = [
    "Professional online presence that builds credibility",
    "Mobile-optimized design for all devices",
    "Fast loading speeds for better user experience",
    "SEO-friendly structure for better visibility",
    "Easy content management for your team",
    "Secure hosting and regular backups",
    "Scalable solutions that grow with your business",
    "Technical support and maintenance"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Discovery & Planning",
      description: "Understanding your business goals, target audience, and project requirements."
    },
    {
      step: 2,
      title: "Design & Wireframing",
      description: "Creating visual designs and wireframes for approval before development begins."
    },
    {
      step: 3,
      title: "Development & Coding",
      description: "Building your website using modern technologies and best practices."
    },
    {
      step: 4,
      title: "Content Integration",
      description: "Adding your content, images, and functionality to the website."
    },
    {
      step: 5,
      title: "Testing & Quality Assurance",
      description: "Comprehensive testing across devices, browsers, and user scenarios."
    },
    {
      step: 6,
      title: "Launch & Training",
      description: "Going live and providing training for content management and maintenance."
    }
  ];

  return (
    <ServiceLayout
      title="Website Development"
      description="Professional website design and development services that create stunning, high-performing websites optimized for conversions."
    >
      <ServiceHero
        title="Website Development"
        description="Create Stunning, High-Performing Websites"
        serviceDescription="Professional website design and development services that create stunning, high-performing websites optimized for conversions. From simple business websites to full-featured e-commerce stores, we build digital experiences that drive results."
      />

      <div className="mb-12">
        <div className="text-center mb-10">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Website Types We Build
          </h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {websiteTypes.map((type, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow h-full">
              <CardHeader className="pb-3">
                <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold mb-4">
                  {index + 1}
                </div>
                <CardTitle className="text-xl">{type.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground leading-relaxed">
                  {type.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <ServiceFeatures
        title="Our Development Features"
        features={features}
      />

      <ServiceBenefits
        title="Benefits of Professional Web Development"
        benefits={benefits}
      />

      <ServiceProcess
        title="Our Development Process"
        steps={processSteps}
      />

      <ServiceCTA
        title="Ready to Build Your Dream Website?"
        description="Let our expert developers create a website that showcases your business and drives results."
        primaryButtonText="Start Your Project"
        secondaryButtonText="View Website Portfolio"
      />
    </ServiceLayout>
  );
}