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
import LandingBannerForm from "../../../../components/LandingPage/LandingBannerForm/LandingBannerForm";

// Import shared web hosting services data
import {
  sharedWebHostingServicesBannerData,
  sharedWebHostingServicesBannerData2,
  sharedWebHostingServicesScrollSectionData,
  sharedWebHostingServicesData,
  sharedWebHostingServicesStatsData,
  sharedWebHostingServicesWorkflowData,
  sharedWebHostingServicesWhyChooseUsData,
  sharedWebHostingServicesFAQsData,
  sharedWebHostingServicesSectionData,
  sharedWebHostingServicesWhyChooseUsSectionData,
  sharedWebHostingServicesWorkflowSectionData,
  sharedWebHostingServicesFinalCTAData,
  sharedWebHostingServicesImpactCardsData,
  sharedWebHostingServicesImpactSectionData,
  sharedWebHostingServicesIndustriesSectionData,
  sharedWebHostingServicesIndustriesCardsData,
  sharedWebHostingServicesIndustriesData,
  sharedWebHostingServicesMetadata,
} from "../../../Data/sharedWebHostingServicesData";

// Service data mapping
const serviceDataMap = {
  "shared-web-hosting-services": {
    bannerData: sharedWebHostingServicesBannerData,
    bannerData2: sharedWebHostingServicesBannerData2,
    scrollSectionData: sharedWebHostingServicesScrollSectionData,
    servicesData: sharedWebHostingServicesData,
    statsData: sharedWebHostingServicesStatsData,
    impactSectionData: sharedWebHostingServicesImpactSectionData,
    impactCardsData: sharedWebHostingServicesImpactCardsData,
    servicesSectionData: sharedWebHostingServicesSectionData,
    industriesSectionData: sharedWebHostingServicesIndustriesSectionData,
    industriesCardsData: sharedWebHostingServicesIndustriesCardsData,
    industriesData: sharedWebHostingServicesIndustriesData,
    workflowData: sharedWebHostingServicesWorkflowData,
    whyChooseUsData: sharedWebHostingServicesWhyChooseUsData,
    whyChooseUsSectionData: sharedWebHostingServicesWhyChooseUsSectionData,
    finalCTAData: sharedWebHostingServicesFinalCTAData,
    faqsData: sharedWebHostingServicesFAQsData,
    metadata: sharedWebHostingServicesMetadata,
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

const HostingServicePage = ({ params }) => {
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
      <ReviewsSlider />
      <WebBuilderCardSection
        heading={serviceData.industriesSectionData?.heading}
        description={serviceData.industriesSectionData?.description}
        showDescription={serviceData.industriesSectionData?.showDescription}
        items={serviceData.industriesCardsData || []}
        columnCount={3}
        button={serviceData.industriesSectionData?.cta?.show || true}
        buttonText={serviceData.industriesSectionData?.cta?.text || "Explore Your Hosting Plan"}
        buttonHref={serviceData.industriesSectionData?.cta?.href || "#"}
        buttonClassName={serviceData.industriesSectionData?.cta?.className || "offer-btn primary"}
      />
      <ScrollSection 
        data={serviceData.scrollSectionData} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection sectionData={serviceData.workflowData} />
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

export default HostingServicePage;
