'use client';

import ServiceLayout from '@/components/services/ServiceLayout';
import ServiceHero from '@/components/services/ServiceHero';
import ServiceFeatures from '@/components/services/ServiceFeatures';
import ServiceBenefits from '@/components/services/ServiceBenefits';
import ServiceProcess from '@/components/services/ServiceProcess';
import ServiceCTA from '@/components/services/ServiceCTA';

export default function SEOOptimizationPage() {
  const features = [
    {
      title: "Keyword Research",
      description: "In-depth analysis to identify high-value keywords for your business and target audience"
    },
    {
      title: "On-Page SEO",
      description: "Optimization of content, meta tags, headers, and internal linking structure"
    },
    {
      title: "Technical SEO",
      description: "Website speed optimization, mobile responsiveness, structured data, and crawlability improvements"
    },
    {
      title: "Local SEO",
      description: "Optimization for local search results, perfect for restaurants, shops, and service businesses"
    },
    {
      title: "Content Strategy",
      description: "Development of SEO-optimized content that engages users and ranks well"
    },
    {
      title: "Analytics & Reporting",
      description: "Monthly performance reports with actionable insights and recommendations"
    }
  ];

  const benefits = [
    "Increased organic website traffic",
    "Higher search engine rankings",
    "Better visibility to potential customers",
    "Long-term, sustainable growth",
    "Cost-effective compared to paid advertising",
    "Improved user experience on your website",
    "Higher conversion rates from targeted traffic",
    "Builds authority and trust in your industry"
  ];

  const processSteps = [
    {
      step: 1,
      title: "Website Audit & Analysis",
      description: "Comprehensive analysis of your current website, identifying technical issues and opportunities for improvement."
    },
    {
      step: 2,
      title: "Keyword Strategy Development",
      description: "Research and selection of target keywords that align with your business goals and audience search intent."
    },
    {
      step: 3,
      title: "On-Page Optimization",
      description: "Implementation of SEO best practices across all pages including meta tags, headers, content, and internal linking."
    },
    {
      step: 4,
      title: "Technical SEO Implementation",
      description: "Addressing technical aspects like site speed, mobile optimization, and structured data markup."
    },
    {
      step: 5,
      title: "Content Development",
      description: "Creating and optimizing high-quality content that targets your selected keywords and engages your audience."
    },
    {
      step: 6,
      title: "Ongoing Monitoring & Optimization",
      description: "Regular performance tracking, reporting, and continuous optimization based on data and algorithm updates."
    }
  ];

  return (
    <ServiceLayout
      title="SEO Optimization"
      description="Professional search engine optimization services designed to improve your website's visibility in search results and drive organic traffic to your business."
    >
      <ServiceHero
        title="SEO Optimization"
        description="Drive Organic Growth with Professional SEO Services"
        serviceDescription="Professional search engine optimization services designed to improve your website's visibility in search results and drive organic traffic to your business. Our comprehensive approach covers all aspects of SEO to ensure sustainable, long-term results."
      />

      <ServiceFeatures
        title="Our SEO Services Include"
        features={features}
      />

      <ServiceBenefits
        title="Benefits of Professional SEO"
        benefits={benefits}
      />

      <ServiceProcess
        title="Our SEO Process"
        steps={processSteps}
      />

      <ServiceCTA
        title="Ready to Dominate Search Results?"
        description="Let our SEO experts help you climb to the top of search rankings and attract more qualified traffic to your website."
        primaryButtonText="Start SEO Audit"
        secondaryButtonText="View SEO Case Studies"
      />
    </ServiceLayout>
  );
}