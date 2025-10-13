import React from "react";
import WebBanner from "@/components/WebBuilder/WebBanner/WebBanner";
import DevelopmentCards from "@/components/LandingPage/DevelopmentCards/DevelopmentCards";
import DevelopmentCardSlider from "../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider";
import OurWorkSection from "../../../components/LandingPage/OurWorkSection/OurWorkSection";
import ScrollSection from "../../../components/ScrollSection/ScrollSection";
import ReviewsSlider from "../../../components/LandingPage/ReviewsSlider/ReviewsSlider";
import StepSection from "../../../components/LandingPage/StepSection/StepSection";
import TechnologiesSlider from "../../../components/LandingPage/TechnologySlider/TechnologySlider";
import TestimonialSlider from "../../../components/LandingPage/TestimonialSlider/TestimonialSlider";
import Faqs from "../../../components/FAQs/Faqs";
import BlogSection from "../../../components/LandingPage/BlogSection/BlogSection";
import ContactSection from "../../../components/LandingPage/ContactSection/ContactSection";
import LandingPageCounter from "../../../components/LandingPage/LandingPageCounter/LandingPageCounter";
import WebBuilderCardSection from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import PlatformsSpecialize from "../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize";
import LandingBannerForm from "../../../components/LandingPage/LandingBannerForm/LandingBannerForm";

// Import website hosting services data
import {
  websiteHostingServicesBannerData,
  websiteHostingServicesBannerData2,
  websiteHostingServicesScrollSectionData,
  websiteHostingServicesData,
  websiteHostingServicesStatsData,
  websiteHostingServicesWorkflowData,
  websiteHostingServicesWhyChooseUsData,
  websiteHostingServicesFAQsData,
  websiteHostingServicesSectionData,
  websiteHostingServicesWhyChooseUsSectionData,
  websiteHostingServicesWorkflowSectionData,
  websiteHostingServicesTechnologiesSectionData,
  websiteHostingServicesTechnologiesData,
  websiteHostingServicesFinalCTAData,
  websiteHostingServicesImpactCardsData,
  websiteHostingServicesImpactSectionData,
  websiteHostingServicesIndustriesSectionData,
  websiteHostingServicesIndustriesCardsData,
  websiteHostingServicesMetadata,
} from "../../Data/websiteHostingServicesData";

export const metadata = websiteHostingServicesMetadata;

const WebsiteHostingServicesPage = () => {
  return (
    <div>
      <WebBanner
        islandingPage={true}
        data={websiteHostingServicesBannerData}
        className="withoutImg landingPageBanner"
        col="col-md-6"
      />
      <LandingPageCounter statsData={websiteHostingServicesStatsData} />
      <DevelopmentCards
        sectionData={websiteHostingServicesImpactSectionData}
        cardsData={websiteHostingServicesImpactCardsData}
      />
      <OurWorkSection />
      <DevelopmentCardSlider
        sectionData={websiteHostingServicesSectionData}
        servicesData={websiteHostingServicesData}
      />
      <WebBuilderCardSection
        sectionData={websiteHostingServicesIndustriesSectionData}
        cardsData={websiteHostingServicesIndustriesCardsData}
      />
      <ScrollSection 
        data={websiteHostingServicesScrollSectionData} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection workflowData={websiteHostingServicesWorkflowData} />
      <PlatformsSpecialize
        sectionData={websiteHostingServicesTechnologiesSectionData}
        data={websiteHostingServicesTechnologiesData}
      />
      <TestimonialSlider />
      <LandingBannerForm bannerData={websiteHostingServicesFinalCTAData} />
      <Faqs faqsData={websiteHostingServicesFAQsData} />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default WebsiteHostingServicesPage;
