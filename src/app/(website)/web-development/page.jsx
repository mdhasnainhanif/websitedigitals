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

import {
  webDevelopmentServicesBannerData,
  webDevelopmentServicesBannerData2,
  webDevelopmentServicesScrollSectionData,
  webDevelopmentServicesData,
  webDevelopmentServicesStatsData,
  webDevelopmentServicesWorkflowData,
  webDevelopmentServicesWhyChooseUsData,
  webDevelopmentServicesFAQsData,
  webDevelopmentServicesSectionData,
  webDevelopmentServicesWhyChooseUsSectionData,
  webDevelopmentServicesWorkflowSectionData,
  webDevelopmentServicesTechnologiesSectionData,
  webDevelopmentServicesTechnologiesData,
  webDevelopmentServicesFinalCTAData,
  webDevelopmentServicesImpactCardsData,
  webDevelopmentServicesImpactSectionData,
  webDevelopmentServicesIndustriesSectionData,
  webDevelopmentServicesIndustriesCardsData,
  webDevelopmentServicesMetadata,
} from "../../Data/webDevelopmentServicesData"; 

export const metadata = webDevelopmentServicesMetadata;

const page = () => {
  return (
    <div>
      <WebBanner
        islandingPage={true}
        data={webDevelopmentServicesBannerData}
        className="withoutImg landingPageBanner"
        col="col-md-6"
      />
      <LandingPageCounter statsData={webDevelopmentServicesStatsData} />
      <DevelopmentCards
        sectionData={webDevelopmentServicesImpactSectionData}
        cardsData={webDevelopmentServicesImpactCardsData}
      />
      <OurWorkSection />
      <DevelopmentCardSlider
        sectionData={webDevelopmentServicesSectionData}
        servicesData={webDevelopmentServicesData}
      />
      <WebBuilderCardSection
        heading={webDevelopmentServicesIndustriesSectionData?.heading}
        description={webDevelopmentServicesIndustriesSectionData?.description}
        showDescription={webDevelopmentServicesIndustriesSectionData?.showDescription}
        items={webDevelopmentServicesIndustriesCardsData || []}
        columnCount={3}
        button={webDevelopmentServicesIndustriesSectionData?.cta?.show}
        buttonText={webDevelopmentServicesIndustriesSectionData?.cta?.text || "Start Building Your Website Today"}
        buttonHref={webDevelopmentServicesIndustriesSectionData?.cta?.href || "#"}
        buttonClassName={webDevelopmentServicesIndustriesSectionData?.cta?.className || "offer-btn primary"}
      />
      <ReviewsSlider />
      <ScrollSection 
        data={webDevelopmentServicesScrollSectionData} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection sectionData={webDevelopmentServicesWorkflowData} />
      <PlatformsSpecialize
        sectionData={webDevelopmentServicesTechnologiesSectionData}
        data={webDevelopmentServicesTechnologiesData}
      />
      <TestimonialSlider />
      <WebBanner
        data={webDevelopmentServicesFinalCTAData || webDevelopmentServicesBannerData2}
        className="notHero order2 landingPageBanner2"
      />
      <Faqs 
        title="Frequently Asked Questions"
        faqs={webDevelopmentServicesFAQsData} 
        isTwoCol={true}
      />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default page;
