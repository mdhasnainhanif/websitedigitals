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
  webDesignBannerData,
  webDesignStatsData,
  webDesignWhyChooseData,
  webDesignServicesData,
  webDesignUSPData,
  webDesignProcessData,
  webDesignTechnologiesData,
  webDesignFinalCTAData,
  WebDesignPageFAQs,
  webDesignMetadata,
  industryTabsWebDesignData
} from "../../Data/webDesignPageData";

export const metadata = webDesignMetadata;

const WebDesignPage = () => {
  return (
    <div>
      <WebBanner
        islandingPage={true}
        data={webDesignBannerData}
        className="withoutImg landingPageBanner"
        col="col-md-6"
      />
      <LandingPageCounter statsData={webDesignStatsData} />
      <DevelopmentCards
        sectionData={{
          heading: webDesignWhyChooseData.heading,
          description: "Choose the right web design company for your business success"
        }}
        cardsData={webDesignWhyChooseData.items}
      />
      <OurWorkSection />
      <DevelopmentCardSlider
        sectionData={{
          heading: "Website Design Services That Fit Your Business Needs",
          description: "Professional web design services tailored to your industry and business goals"
        }}
        servicesData={webDesignServicesData}
      />
      <ReviewsSlider />
      <ScrollSection 
        data={{
          heading: webDesignUSPData.heading,
          items: webDesignUSPData.items
        }} 
        className="landingPageScrollSection"
        isIconShow={true}
      />
      <StepSection sectionData={webDesignProcessData} />
      <PlatformsSpecialize
        sectionData={{
          heading: webDesignTechnologiesData.heading,
          description: "We use cutting-edge technologies to build modern, responsive websites"
        }}
        data={webDesignTechnologiesData.categories}
      />
      <TestimonialSlider />
      <WebBanner
        data={webDesignFinalCTAData}
        className="notHero order2 landingPageBanner2"
      />
      <Faqs 
        title="Frequently Asked Questions"
        faqs={WebDesignPageFAQs} 
        isTwoCol={true}
      />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default WebDesignPage;
