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

export const metadata = landingPageDesignServicesMetadata;

const LandingPageDesignServicesPage = () => {
  return (
    <div>
      <WebBanner
        islandingPage={true}
        data={landingPageDesignServicesBannerData}
        className="withoutImg landingPageBanner"
        col="col-md-6"
      />
      <LandingPageCounter statsData={landingPageDesignServicesStatsData} />
      <DevelopmentCards
        sectionData={landingPageDesignServicesImpactSectionData}
        cardsData={landingPageDesignServicesImpactCardsData}
      />
      <OurWorkSection />
      <DevelopmentCardSlider
        sectionData={landingPageDesignServicesServicesSectionData}
        servicesData={landingPageDesignServicesData}
      />
      <WebBuilderCardSection
        heading={landingPageDesignServicesIndustriesSectionData?.heading}
        description={landingPageDesignServicesIndustriesSectionData?.description}
        showDescription={landingPageDesignServicesIndustriesSectionData?.showDescription}
        items={landingPageDesignServicesIndustriesCardsData || []}
        columnCount={3}
        button={landingPageDesignServicesIndustriesSectionData?.cta?.show || true}
        buttonText={landingPageDesignServicesIndustriesSectionData?.cta?.text || "Grow Conversions Now"}
        buttonHref={landingPageDesignServicesIndustriesSectionData?.cta?.href || "#"}
        buttonClassName={landingPageDesignServicesIndustriesSectionData?.cta?.className || "offer-btn primary"}
      />
      <ReviewsSlider />
      <ScrollSection 
        data={landingPageDesignServicesScrollSectionData} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection sectionData={landingPageDesignServicesWorkflowData} />
      <PlatformsSpecialize
        sectionData={landingPageDesignServicesTechnologiesSectionData}
        data={landingPageDesignServicesTechnologiesData}
      />
      <TestimonialSlider />
      <WebBanner
        data={landingPageDesignServicesFinalCTAData || landingPageDesignServicesBannerData2}
        className="notHero order2 landingPageBanner2"
      />
      <Faqs 
        title="Frequently Asked Questions"
        faqs={landingPageDesignServicesFAQsData} 
        isTwoCol={true}
      />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default LandingPageDesignServicesPage;
