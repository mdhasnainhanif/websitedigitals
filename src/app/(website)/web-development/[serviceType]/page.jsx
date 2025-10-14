import React from "react";
import WebBanner from "@/components/WebBuilder/WebBanner/WebBanner";
import DevelopmentCards from "@/components/LandingPage/DevelopmentCards/DevelopmentCards";
import DevelopmentCardSlider from "../../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider";
import OurWorkSection from "../../../../components/LandingPage/OurWorkSection/OurWorkSection";
import ScrollSection from "../../../../components/ScrollSection/ScrollSection";
import ReviewsSlider from "../../../../components/LandingPage/ReviewsSlider/ReviewsSlider";
import StepSection from "../../../../components/LandingPage/StepSection/StepSection";
import TechnologiesSlider from "../../../../components/LandingPage/TechnologySlider/TechnologySlider";
import TestimonialSlider from "../../../../components/LandingPage/TestimonialSlider/TestimonialSlider";
import Faqs from "../../../../components/FAQs/Faqs";
import BlogSection from "../../../../components/LandingPage/BlogSection/BlogSection";
import ContactSection from "../../../../components/LandingPage/ContactSection/ContactSection";
import LandingPageCounter from "../../../../components/LandingPage/LandingPageCounter/LandingPageCounter";
import WebBuilderCardSection from "../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import PlatformsSpecialize from "../../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize";

// Import ecommerce development services data
import {
  ecommerceDevelopmentBannerData,
  ecommerceDevelopmentBannerData2,
  ecommerceDevelopmentScrollSectionData,
  ecommerceDevelopmentServicesData,
  ecommerceDevelopmentStatsData,
  ecommerceDevelopmentWorkflowData,
  ecommerceDevelopmentWhyChooseUsData,
  ecommerceDevelopmentFAQsData,
  ecommerceDevelopmentServicesSectionData,
  ecommerceDevelopmentWhyChooseUsSectionData,
  ecommerceDevelopmentFinalCTAData,
  ecommerceDevelopmentImpactCardsData,
  ecommerceDevelopmentImpactSectionData,
  ecommerceDevelopmentIndustriesSectionData,
  ecommerceDevelopmentIndustriesCardsData,
  ecommerceDevelopmentTechnologiesSectionData,
  ecommerceDevelopmentTechnologiesData,
  ecommerceDevelopmentMetadata,
} from "../../../Data/ecommerceDevelopmentServicesData";

// Import WordPress development services data
import {
  wordpressDevelopmentBannerData,
  wordpressDevelopmentBannerData2,
  wordpressDevelopmentScrollSectionData,
  wordpressDevelopmentServicesData,
  wordpressDevelopmentStatsData,
  wordpressDevelopmentWorkflowData,
  wordpressDevelopmentWhyChooseUsData,
  wordpressDevelopmentFAQsData,
  wordpressDevelopmentServicesSectionData,
  wordpressDevelopmentWhyChooseUsSectionData,
  wordpressDevelopmentFinalCTAData,
  wordpressDevelopmentImpactCardsData,
  wordpressDevelopmentImpactSectionData,
  wordpressDevelopmentIndustriesSectionData,
  wordpressDevelopmentIndustriesCardsData,
  wordpressDevelopmentTechnologiesSectionData,
  wordpressDevelopmentTechnologiesData,
  wordpressDevelopmentMetadata,
} from "../../../Data/wordpressDevelopmentServicesData";

// Import Shopify development services data
import {
  shopifyDevelopmentBannerData,
  shopifyDevelopmentBannerData2,
  shopifyDevelopmentScrollSectionData,
  shopifyDevelopmentServicesData,
  shopifyDevelopmentStatsData,
  shopifyDevelopmentWorkflowData,
  shopifyDevelopmentWhyChooseUsData,
  shopifyDevelopmentFAQsData,
  shopifyDevelopmentServicesSectionData,
  shopifyDevelopmentWhyChooseUsSectionData,
  shopifyDevelopmentFinalCTAData,
  shopifyDevelopmentImpactCardsData,
  shopifyDevelopmentImpactSectionData,
  shopifyDevelopmentIndustriesSectionData,
  shopifyDevelopmentIndustriesCardsData,
  shopifyDevelopmentTechnologiesSectionData,
  shopifyDevelopmentTechnologiesData,
  shopifyDevelopmentMetadata,
} from "../../../Data/shopifyDevelopmentServicesData";

// Service data mapping
const serviceDataMap = {
  "ecommerce-development-company": {
    bannerData: ecommerceDevelopmentBannerData,
    bannerData2: ecommerceDevelopmentBannerData2,
    scrollSectionData: ecommerceDevelopmentScrollSectionData,
    servicesData: ecommerceDevelopmentServicesData,
    statsData: ecommerceDevelopmentStatsData,
    impactSectionData: ecommerceDevelopmentImpactSectionData,
    impactCardsData: ecommerceDevelopmentImpactCardsData,
    servicesSectionData: ecommerceDevelopmentServicesSectionData,
    industriesSectionData: ecommerceDevelopmentIndustriesSectionData,
    industriesCardsData: ecommerceDevelopmentIndustriesCardsData,
    technologiesSectionData: ecommerceDevelopmentTechnologiesSectionData,
    technologiesData: ecommerceDevelopmentTechnologiesData,
    workflowData: ecommerceDevelopmentWorkflowData,
    whyChooseUsData: ecommerceDevelopmentWhyChooseUsData,
    whyChooseUsSectionData: ecommerceDevelopmentWhyChooseUsSectionData,
    finalCTAData: ecommerceDevelopmentFinalCTAData,
    faqsData: ecommerceDevelopmentFAQsData,
    metadata: ecommerceDevelopmentMetadata,
  },
  "wordpress-development-company": {
    bannerData: wordpressDevelopmentBannerData,
    bannerData2: wordpressDevelopmentBannerData2,
    scrollSectionData: wordpressDevelopmentScrollSectionData,
    servicesData: wordpressDevelopmentServicesData,
    statsData: wordpressDevelopmentStatsData,
    impactSectionData: wordpressDevelopmentImpactSectionData,
    impactCardsData: wordpressDevelopmentImpactCardsData,
    servicesSectionData: wordpressDevelopmentServicesSectionData,
    industriesSectionData: wordpressDevelopmentIndustriesSectionData,
    industriesCardsData: wordpressDevelopmentIndustriesCardsData,
    technologiesSectionData: wordpressDevelopmentTechnologiesSectionData,
    technologiesData: wordpressDevelopmentTechnologiesData,
    workflowData: wordpressDevelopmentWorkflowData,
    whyChooseUsData: wordpressDevelopmentWhyChooseUsData,
    whyChooseUsSectionData: wordpressDevelopmentWhyChooseUsSectionData,
    finalCTAData: wordpressDevelopmentFinalCTAData,
    faqsData: wordpressDevelopmentFAQsData,
    metadata: wordpressDevelopmentMetadata,
  },
  "shopify-development-services": {
    bannerData: shopifyDevelopmentBannerData,
    bannerData2: shopifyDevelopmentBannerData2,
    scrollSectionData: shopifyDevelopmentScrollSectionData,
    servicesData: shopifyDevelopmentServicesData,
    statsData: shopifyDevelopmentStatsData,
    impactSectionData: shopifyDevelopmentImpactSectionData,
    impactCardsData: shopifyDevelopmentImpactCardsData,
    servicesSectionData: shopifyDevelopmentServicesSectionData,
    industriesSectionData: shopifyDevelopmentIndustriesSectionData,
    industriesCardsData: shopifyDevelopmentIndustriesCardsData,
    technologiesSectionData: shopifyDevelopmentTechnologiesSectionData,
    technologiesData: shopifyDevelopmentTechnologiesData,
    workflowData: shopifyDevelopmentWorkflowData,
    whyChooseUsData: shopifyDevelopmentWhyChooseUsData,
    whyChooseUsSectionData: shopifyDevelopmentWhyChooseUsSectionData,
    finalCTAData: shopifyDevelopmentFinalCTAData,
    faqsData: shopifyDevelopmentFAQsData,
    metadata: shopifyDevelopmentMetadata,
  },
};

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const { serviceType } = params;
  const serviceData = serviceDataMap[serviceType];

  if (!serviceData || !serviceData.metadata) {
    return {
      title: "Service Not Found | Website Digitals",
      description: "The requested service page could not be found.",
    };
  }

  return serviceData.metadata;
}

const WebDevelopmentServicePage = ({ params }) => {
  const { serviceType } = params;

  // Get service data based on the serviceType parameter
  const serviceData = serviceDataMap[serviceType];
  
  // Debug logging
  console.log("Service Type:", serviceType);
  console.log("Service Data:", serviceData);

  // If service type not found, return 404 or redirect
  if (!serviceData) {
    return (
      <div className="container text-center py-5">
        <h1>Service Not Found</h1>
        <p>The requested service page could not be found.</p>
      </div>
    );
  }

  return (
    <div>
      <WebBanner
        islandingPage={true}
        data={serviceData.bannerData}
        className="withoutImg landingPageBanner"
        col="col-md-6"
      />
      <LandingPageCounter statsData={serviceData.statsData} />
      <DevelopmentCards
        sectionData={serviceData.impactSectionData}
        cardsData={serviceData.impactCardsData}
      />
      <OurWorkSection />
      <DevelopmentCardSlider
        sectionData={serviceData.servicesSectionData}
        servicesData={serviceData.servicesData}
      />
      <WebBuilderCardSection
        heading={serviceData.industriesSectionData?.heading}
        description={serviceData.industriesSectionData?.description}
        showDescription={serviceData.industriesSectionData?.showDescription}
        items={serviceData.industriesCardsData || []}
        columnCount={3}
        button={serviceData.industriesSectionData?.cta?.show || true}
        buttonText={serviceData.industriesSectionData?.cta?.text || "Grow My Store Today"}
        buttonHref={serviceData.industriesSectionData?.cta?.href || "#"}
        buttonClassName={serviceData.industriesSectionData?.cta?.className || "offer-btn primary"}
      />
      <ReviewsSlider />
      <ScrollSection 
        data={serviceData.scrollSectionData} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection sectionData={serviceData.workflowData} />
      <PlatformsSpecialize
        sectionData={serviceData.technologiesSectionData}
        data={serviceData.technologiesData}
      />
      <TestimonialSlider />
      <WebBanner
        data={serviceData.finalCTAData || serviceData.bannerData2}
        className="notHero order2 landingPageBanner2"
      />
      <Faqs 
        title="Frequently Asked Questions"
        faqs={serviceData.faqsData} 
        isTwoCol={true}
      />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default WebDevelopmentServicePage;
