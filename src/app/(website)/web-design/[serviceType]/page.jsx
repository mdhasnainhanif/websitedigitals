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

// Import Landing Page Design Services data
import {
  landingPageDesignServicesBannerData,
  landingPageDesignServicesBannerData2,
  landingPageDesignServicesScrollSectionData,
  landingPageDesignServicesData,
  landingPageDesignServicesStatsData,
  landingPageDesignServicesWorkflowData,
  landingPageDesignServicesWhyChooseUsData,
  landingPageDesignServicesFAQsData,
  landingPageDesignServicesServicesSectionData,
  landingPageDesignServicesWhyChooseUsSectionData,
  landingPageDesignServicesFinalCTAData,
  landingPageDesignServicesImpactCardsData,
  landingPageDesignServicesImpactSectionData,
  landingPageDesignServicesIndustriesSectionData,
  landingPageDesignServicesIndustriesCardsData,
  landingPageDesignServicesTechnologiesSectionData,
  landingPageDesignServicesTechnologiesData,
  landingPageDesignServicesMetadata,
} from "../../../Data/landingPageDesignServicesData";

// Import Responsive Web Design Services data
import {
  responsiveWebDesignBannerData,
  responsiveWebDesignBannerData2,
  responsiveWebDesignScrollSectionData,
  responsiveWebDesignServicesData,
  responsiveWebDesignStatsData,
  responsiveWebDesignWorkflowData,
  responsiveWebDesignWhyChooseUsData,
  responsiveWebDesignFAQsData,
  responsiveWebDesignServicesSectionData,
  responsiveWebDesignWhyChooseUsSectionData,
  responsiveWebDesignFinalCTAData,
  responsiveWebDesignImpactCardsData,
  responsiveWebDesignImpactSectionData,
  responsiveWebDesignIndustriesSectionData,
  responsiveWebDesignIndustriesCardsData,
  responsiveWebDesignTechnologiesSectionData,
  responsiveWebDesignTechnologiesData,
  responsiveWebDesignMetadata,
} from "../../../Data/responsiveWebDesignServicesData";

// Import Website Redesign Services data
import {
  websiteRedesignServicesBannerData,
  websiteRedesignServicesBannerData2,
  websiteRedesignServicesScrollSectionData,
  websiteRedesignServicesData,
  websiteRedesignServicesStatsData,
  websiteRedesignServicesWorkflowData,
  websiteRedesignServicesWhyChooseUsData,
  websiteRedesignServicesFAQsData,
  websiteRedesignServicesServicesSectionData,
  websiteRedesignServicesWhyChooseUsSectionData,
  websiteRedesignServicesFinalCTAData,
  websiteRedesignServicesImpactCardsData,
  websiteRedesignServicesImpactSectionData,
  websiteRedesignServicesIndustriesSectionData,
  websiteRedesignServicesIndustriesCardsData,
  websiteRedesignServicesTechnologiesSectionData,
  websiteRedesignServicesTechnologiesData,
  websiteRedesignServicesMetadata,
} from "../../../Data/websiteRedesignServicesData";

// Import B2B Web Design Agency data
import {
  b2bWebDesignAgencyBannerData,
  b2bWebDesignAgencyBannerData2,
  b2bWebDesignAgencyScrollSectionData,
  b2bWebDesignAgencyData,
  b2bWebDesignAgencyStatsData,
  b2bWebDesignAgencyWorkflowData,
  b2bWebDesignAgencyWhyChooseUsData,
  b2bWebDesignAgencyFAQsData,
  b2bWebDesignAgencyServicesSectionData,
  b2bWebDesignAgencyWhyChooseUsSectionData,
  b2bWebDesignAgencyFinalCTAData,
  b2bWebDesignAgencyImpactCardsData,
  b2bWebDesignAgencyImpactSectionData,
  b2bWebDesignAgencyIndustriesSectionData,
  b2bWebDesignAgencyIndustriesCardsData,
  b2bWebDesignAgencyTechnologiesSectionData,
  b2bWebDesignAgencyTechnologiesData,
  b2bWebDesignAgencyMetadata,
} from "../../../Data/b2bWebDesignAgencyData";

// Import Custom Web Design Agency data
import {
  customWebDesignAgencyBannerData,
  customWebDesignAgencyBannerData2,
  customWebDesignAgencyScrollSectionData,
  customWebDesignAgencyData,
  customWebDesignAgencyStatsData,
  customWebDesignAgencyWorkflowData,
  customWebDesignAgencyWhyChooseUsData,
  customWebDesignAgencyFAQsData,
  customWebDesignAgencyServicesSectionData,
  customWebDesignAgencyWhyChooseUsSectionData,
  customWebDesignAgencyFinalCTAData,
  customWebDesignAgencyImpactCardsData,
  customWebDesignAgencyImpactSectionData,
  customWebDesignAgencyIndustriesSectionData,
  customWebDesignAgencyIndustriesCardsData,
  customWebDesignAgencyTechnologiesSectionData,
  customWebDesignAgencyTechnologiesData,
  customWebDesignAgencyMetadata,
} from "../../../Data/customWebDesignAgencyData";

// Import Amazon Store Design Services data
import {
  amazonStoreDesignServicesBannerData,
  amazonStoreDesignServicesBannerData2,
  amazonStoreDesignServicesScrollSectionData,
  amazonStoreDesignServicesData,
  amazonStoreDesignServicesStatsData,
  amazonStoreDesignServicesWorkflowData,
  amazonStoreDesignServicesWhyChooseUsData,
  amazonStoreDesignServicesFAQsData,
  amazonStoreDesignServicesServicesSectionData,
  amazonStoreDesignServicesWhyChooseUsSectionData,
  amazonStoreDesignServicesFinalCTAData,
  amazonStoreDesignServicesImpactCardsData,
  amazonStoreDesignServicesImpactSectionData,
  amazonStoreDesignServicesIndustriesSectionData,
  amazonStoreDesignServicesIndustriesCardsData,
  amazonStoreDesignServicesTechnologiesSectionData,
  amazonStoreDesignServicesTechnologiesData,
  amazonStoreDesignServicesMetadata,
} from "../../../Data/amazonStoreDesignServicesData";

// Service data mapping
const serviceDataMap = {
  "landing-page-design-services": {
    bannerData: landingPageDesignServicesBannerData,
    bannerData2: landingPageDesignServicesBannerData2,
    scrollSectionData: landingPageDesignServicesScrollSectionData,
    servicesData: landingPageDesignServicesData,
    statsData: landingPageDesignServicesStatsData,
    impactSectionData: landingPageDesignServicesImpactSectionData,
    impactCardsData: landingPageDesignServicesImpactCardsData,
    servicesSectionData: landingPageDesignServicesServicesSectionData,
    industriesSectionData: landingPageDesignServicesIndustriesSectionData,
    industriesCardsData: landingPageDesignServicesIndustriesCardsData,
    technologiesSectionData: landingPageDesignServicesTechnologiesSectionData,
    technologiesData: landingPageDesignServicesTechnologiesData,
    workflowData: landingPageDesignServicesWorkflowData,
    whyChooseUsData: landingPageDesignServicesWhyChooseUsData,
    whyChooseUsSectionData: landingPageDesignServicesWhyChooseUsSectionData,
    finalCTAData: landingPageDesignServicesFinalCTAData,
    faqsData: landingPageDesignServicesFAQsData,
    metadata: landingPageDesignServicesMetadata,
  },
  "responsive-web-design-services": {
    bannerData: responsiveWebDesignBannerData,
    bannerData2: responsiveWebDesignBannerData2,
    scrollSectionData: responsiveWebDesignScrollSectionData,
    servicesData: responsiveWebDesignServicesData,
    statsData: responsiveWebDesignStatsData,
    impactSectionData: responsiveWebDesignImpactSectionData,
    impactCardsData: responsiveWebDesignImpactCardsData,
    servicesSectionData: responsiveWebDesignServicesSectionData,
    industriesSectionData: responsiveWebDesignIndustriesSectionData,
    industriesCardsData: responsiveWebDesignIndustriesCardsData,
    technologiesSectionData: responsiveWebDesignTechnologiesSectionData,
    technologiesData: responsiveWebDesignTechnologiesData,
    workflowData: responsiveWebDesignWorkflowData,
    whyChooseUsData: responsiveWebDesignWhyChooseUsData,
    whyChooseUsSectionData: responsiveWebDesignWhyChooseUsSectionData,
    finalCTAData: responsiveWebDesignFinalCTAData,
    faqsData: responsiveWebDesignFAQsData,
    metadata: responsiveWebDesignMetadata,
  },
  "website-redesign-services": {
    bannerData: websiteRedesignServicesBannerData,
    bannerData2: websiteRedesignServicesBannerData2,
    scrollSectionData: websiteRedesignServicesScrollSectionData,
    servicesData: websiteRedesignServicesData,
    statsData: websiteRedesignServicesStatsData,
    impactSectionData: websiteRedesignServicesImpactSectionData,
    impactCardsData: websiteRedesignServicesImpactCardsData,
    servicesSectionData: websiteRedesignServicesServicesSectionData,
    industriesSectionData: websiteRedesignServicesIndustriesSectionData,
    industriesCardsData: websiteRedesignServicesIndustriesCardsData,
    technologiesSectionData: websiteRedesignServicesTechnologiesSectionData,
    technologiesData: websiteRedesignServicesTechnologiesData,
    workflowData: websiteRedesignServicesWorkflowData,
    whyChooseUsData: websiteRedesignServicesWhyChooseUsData,
    whyChooseUsSectionData: websiteRedesignServicesWhyChooseUsSectionData,
    finalCTAData: websiteRedesignServicesFinalCTAData,
    faqsData: websiteRedesignServicesFAQsData,
    metadata: websiteRedesignServicesMetadata,
  },
  "b2b-web-design-agency": {
    bannerData: b2bWebDesignAgencyBannerData,
    bannerData2: b2bWebDesignAgencyBannerData2,
    scrollSectionData: b2bWebDesignAgencyScrollSectionData,
    servicesData: b2bWebDesignAgencyData,
    statsData: b2bWebDesignAgencyStatsData,
    impactSectionData: b2bWebDesignAgencyImpactSectionData,
    impactCardsData: b2bWebDesignAgencyImpactCardsData,
    servicesSectionData: b2bWebDesignAgencyServicesSectionData,
    industriesSectionData: b2bWebDesignAgencyIndustriesSectionData,
    industriesCardsData: b2bWebDesignAgencyIndustriesCardsData,
    technologiesSectionData: b2bWebDesignAgencyTechnologiesSectionData,
    technologiesData: b2bWebDesignAgencyTechnologiesData,
    workflowData: b2bWebDesignAgencyWorkflowData,
    whyChooseUsData: b2bWebDesignAgencyWhyChooseUsData,
    whyChooseUsSectionData: b2bWebDesignAgencyWhyChooseUsSectionData,
    finalCTAData: b2bWebDesignAgencyFinalCTAData,
    faqsData: b2bWebDesignAgencyFAQsData,
    metadata: b2bWebDesignAgencyMetadata,
  },
  "custom-web-design-agency": {
    bannerData: customWebDesignAgencyBannerData,
    bannerData2: customWebDesignAgencyBannerData2,
    scrollSectionData: customWebDesignAgencyScrollSectionData,
    servicesData: customWebDesignAgencyData,
    statsData: customWebDesignAgencyStatsData,
    impactSectionData: customWebDesignAgencyImpactSectionData,
    impactCardsData: customWebDesignAgencyImpactCardsData,
    servicesSectionData: customWebDesignAgencyServicesSectionData,
    industriesSectionData: customWebDesignAgencyIndustriesSectionData,
    industriesCardsData: customWebDesignAgencyIndustriesCardsData,
    technologiesSectionData: customWebDesignAgencyTechnologiesSectionData,
    technologiesData: customWebDesignAgencyTechnologiesData,
    workflowData: customWebDesignAgencyWorkflowData,
    whyChooseUsData: customWebDesignAgencyWhyChooseUsData,
    whyChooseUsSectionData: customWebDesignAgencyWhyChooseUsSectionData,
    finalCTAData: customWebDesignAgencyFinalCTAData,
    faqsData: customWebDesignAgencyFAQsData,
    metadata: customWebDesignAgencyMetadata,
  },
  "amazon-store-design-services": {
    bannerData: amazonStoreDesignServicesBannerData,
    bannerData2: amazonStoreDesignServicesBannerData2,
    scrollSectionData: amazonStoreDesignServicesScrollSectionData,
    servicesData: amazonStoreDesignServicesData,
    statsData: amazonStoreDesignServicesStatsData,
    impactSectionData: amazonStoreDesignServicesImpactSectionData,
    impactCardsData: amazonStoreDesignServicesImpactCardsData,
    servicesSectionData: amazonStoreDesignServicesServicesSectionData,
    industriesSectionData: amazonStoreDesignServicesIndustriesSectionData,
    industriesCardsData: amazonStoreDesignServicesIndustriesCardsData,
    technologiesSectionData: amazonStoreDesignServicesTechnologiesSectionData,
    technologiesData: amazonStoreDesignServicesTechnologiesData,
    workflowData: amazonStoreDesignServicesWorkflowData,
    whyChooseUsData: amazonStoreDesignServicesWhyChooseUsData,
    whyChooseUsSectionData: amazonStoreDesignServicesWhyChooseUsSectionData,
    finalCTAData: amazonStoreDesignServicesFinalCTAData,
    faqsData: amazonStoreDesignServicesFAQsData,
    metadata: amazonStoreDesignServicesMetadata,
  },
};

// Generate metadata for each service page
export async function generateMetadata({ params }) {
  const { serviceType } = await params;
  const serviceData = serviceDataMap[serviceType];

  if (!serviceData || !serviceData.metadata) {
    return {
      title: "Service Not Found | Website Digitals",
      description: "The requested service page could not be found.",
    };
  }

  return serviceData.metadata;
}

const WebDesignServicePage = async ({ params }) => {
  const { serviceType } = await params;

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
        buttonText={serviceData.industriesSectionData?.cta?.text || "Get a Custom Website Now"}
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

export default WebDesignServicePage;
