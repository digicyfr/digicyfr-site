'use client';

import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';
import ServiceHighlight from '@/components/services/ServiceHighlight';

export default function ERPBusinessToolsPage() {
  const features = [
    {
      title: "Sales Management",
      description: "Track orders, manage customers, monitor sales performance, and streamline sales processes"
    },
    {
      title: "Inventory Control",
      description: "Real-time stock tracking, automatic reordering, supplier management, and warehouse optimization"
    },
    {
      title: "POS Systems",
      description: "Modern point-of-sale solutions for retail and restaurant environments with integrated payments"
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business metrics, comprehensive reporting, and data-driven insights"
    },
    {
      title: "Employee Management",
      description: "Staff scheduling, time tracking, performance monitoring, and payroll integration"
    },
    {
      title: "Multi-location Support",
      description: "Manage multiple locations, warehouses, or stores from a single centralized dashboard"
    }
  ];

  const odooBenefits = [
    {
      title: "Modular Architecture",
      description: "Start with what you need and add modules as your business grows"
    },
    {
      title: "Custom Development",
      description: "Tailor-made solutions for your specific industry and business processes"
    },
    {
      title: "Integration Ready",
      description: "Seamless integration with existing systems and third-party applications"
    },
    {
      title: "Scalable Solutions",
      description: "Grow from a small business to enterprise without changing platforms"
    },
    {
      title: "Cost Effective",
      description: "Open-source core with affordable enterprise features and support"
    },
    {
      title: "Global Support",
      description: "Worldwide community and professional support network"
    }
  ];

  const benefits = [
    "24/7 real-time monitoring and alerts",
    "Integrated payment processing systems",
    "Multi-location business support",
    "Mobile app for on-the-go management",
    "Automated inventory tracking",
    "Comprehensive reporting tools"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Business Analysis",
      description: "Comprehensive analysis of your business processes, pain points, and requirements"
    },
    {
      step: 2,
      title: "Solution Design",
      description: "Custom ERP architecture and module selection tailored to your business"
    },
    {
      step: 3,
      title: "Implementation",
      description: "System configuration, data migration, and integration with existing tools"
    },
    {
      step: 4,
      title: "Training & Support",
      description: "Comprehensive staff training, documentation, and ongoing technical support"
    }
  ];

  return (
    <ServiceLayout
      title="ERP & Business Tools"
      description="Complete business management systems for sales, inventory, and operations."
    >
      <ServiceHero
        title="ERP & Business Tools"
        description="Streamline Operations & Improve Efficiency"
        serviceDescription="Comprehensive business management systems that streamline operations, improve efficiency, and provide real-time insights into your business performance. Our ERP solutions are customized to your specific industry and business needs using Odoo - a flexible and scalable platform."
      />

      <ServiceFeatures
        title="ERP Features & Capabilities"
        features={features}
      />

      <ServiceHighlight
        title="Powered by Odoo ERP"
        description="We specialize in Odoo ERP implementation and customization, providing flexible and scalable solutions"
        items={odooBenefits}
      />

      <ServiceBenefits
        title="Why Choose Our Management Solutions?"
        benefits={benefits}
      />

      <ServiceProcess
        title="ERP Implementation Process"
        steps={processSteps}
      />

      <ServiceCTA
        title="Streamline Your Business Operations"
        description="Transform your business with modern ERP solutions tailored to your needs"
        primaryButtonText="Schedule Demo"
        secondaryButtonText="Get Custom Quote"
      />
    </ServiceLayout>
  );
}