'use client';

import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';

export default function GoogleBusinessManagementPage() {
  const features = [
    {
      title: "Profile Setup & Optimization",
      description: "Complete optimization of your Google Business Profile with accurate information and engaging content"
    },
    {
      title: "Review Management",
      description: "Active monitoring and professional response to customer reviews to build trust and credibility"
    },
    {
      title: "Local Listings Management",
      description: "Consistent business information across major directories and platforms"
    },
    {
      title: "Map Optimization",
      description: "Enhanced visibility in Google Maps searches with accurate location data and business categories"
    },
    {
      title: "Posts & Updates",
      description: "Regular content updates to keep your profile active and engaging for customers"
    },
    {
      title: "Photo Management",
      description: "Professional photos and regular updates to showcase your business and attract customers"
    }
  ];

  const benefits = [
    "Appear in local search results and Google Maps",
    "Build trust through customer reviews",
    "Provide essential business information to customers",
    "Drive foot traffic to physical locations",
    "Gain insights into customer behavior",
    "Increase local search visibility",
    "Attract more customer reviews",
    "Improve customer engagement"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Profile Audit & Setup",
      description: "Comprehensive analysis of your current Google Business Profile and complete setup if needed."
    },
    {
      step: 2,
      title: "Information Optimization",
      description: "Optimization of business details including hours, services, contact information, and categories."
    },
    {
      step: 3,
      title: "Visual Content Strategy",
      description: "Professional photography and regular photo updates to showcase your business."
    },
    {
      step: 4,
      title: "Review Management Setup",
      description: "Implementation of review monitoring and professional response strategies."
    },
    {
      step: 5,
      title: "Content Calendar Creation",
      description: "Development of regular posting schedule for updates, offers, and announcements."
    },
    {
      step: 6,
      title: "Performance Monitoring",
      description: "Regular tracking of profile performance, insights analysis, and continuous optimization."
    }
  ];

  return (
    <ServiceLayout
      title="Google Business Management"
      description="Complete setup and ongoing management of your Google Business Profile to maximize local visibility and customer engagement."
    >
      <ServiceHero
        title="Google Business Management"
        description="Maximize Local Visibility & Customer Engagement"
        serviceDescription="Complete setup and ongoing management of your Google Business Profile to maximize local visibility and customer engagement. Essential for any business with a physical location or serving a local area."
      />

      <ServiceFeatures
        title="Our Google Business Services"
        features={features}
      />

      <ServiceBenefits
        title="Why Google Business Management Matters"
        benefits={benefits}
      />

      <ServiceProcess
        title="Our Management Process"
        steps={processSteps}
      />

      <ServiceCTA
        title="Ready to Boost Your Local Presence?"
        description="Let us help you optimize your Google Business Profile to attract more local customers and grow your business."
        primaryButtonText="Optimize My Profile"
        secondaryButtonText="See Local Success Stories"
      />
    </ServiceLayout>
  );
}