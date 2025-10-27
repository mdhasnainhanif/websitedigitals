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
import { homePageFAQs } from "../../../components/FAQs/data";
import BlogSection from "../../../components/LandingPage/BlogSection/BlogSection";
import ContactSection from "../../../components/LandingPage/ContactSection/ContactSection";
import LandingPageCounter from "../../../components/LandingPage/LandingPageCounter/LandingPageCounter";
import WebBuilderCardSection from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
  webBuilderSectionClass,
} from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData";
import PlatformsSpecialize from "../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize";
import { platformsData } from "../../Data/landingPageData";
import LandingBannerForm from "../../../components/LandingPage/LandingBannerForm/LandingBannerForm";

import {
  digitalMarketingBannerData,
  digitalMarketingBannerData2,
  digitalMarketingScrollSectionData,
  digitalMarketingServicesData,
  digitalMarketingStatsData,
  digitalMarketingImpactSectionData,
  digitalMarketingImpactCardsData,
  digitalMarketingServicesSectionData,
  digitalMarketingIndustriesSectionData,
  digitalMarketingIndustriesCardsData,
  digitalMarketingWorkflowData,
  digitalMarketingTechnologiesSectionData,
  digitalMarketingTechnologiesData,
  digitalMarketingFinalCTAData,
  digitalMarketingFAQsData,
  digitalMarketingMetadata,
} from "../../Data/digitalMarketingCompanyData";

const DigitalMarketingServicePage = {
  "digital-marketing-company": {
    bannerData: digitalMarketingBannerData,
    bannerData2: digitalMarketingBannerData2,
    scrollSectionData: digitalMarketingScrollSectionData,
    servicesData: digitalMarketingServicesData,
    statsData: digitalMarketingStatsData,
    impactSectionData: digitalMarketingImpactSectionData,
    impactCardsData: digitalMarketingImpactCardsData,
    servicesSectionData: digitalMarketingServicesSectionData,
    industriesSectionData: digitalMarketingIndustriesSectionData,
    industriesCardsData: digitalMarketingIndustriesCardsData,
    workflowData: digitalMarketingWorkflowData,
    technologiesSectionData: digitalMarketingTechnologiesSectionData,
    technologiesData: digitalMarketingTechnologiesData,
    finalCTAData: digitalMarketingFinalCTAData,
    faqsData: digitalMarketingFAQsData,
    metadata: digitalMarketingMetadata,
  },
};
export async function generateMetadata({ params } = {}) {
  const serviceType = params?.serviceType || "digital-marketing-company";
  const serviceData = DigitalMarketingServicePage[serviceType];
  if (!serviceData || !serviceData.metadata) {
    return {
      title: "Service Not Found | Website Digitals",
      description: "The requested service page could not be found.",
    };
  }
  return serviceData.metadata;
}
const ServicePage = ({ params } = {}) => {
  const serviceType = params?.serviceType || "digital-marketing-company";
  const serviceData = DigitalMarketingServicePage[serviceType];
  console.log("Service Type:", serviceType);
  console.log("Service Data:", serviceData);
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
      {serviceType !== "digital-marketing-company" && (
        <WebBuilderCardSection
          heading={
            serviceData.industriesSectionData?.heading || webBuilderHeading
          }
          description={serviceData.industriesSectionData?.description}
          showDescription={serviceData.industriesSectionData?.showDescription}
          items={serviceData.industriesCardsData || webBuilderCards}
          columnCount={3}
          sectionClass={webBuilderSectionClass}
          button={serviceData.industriesSectionData?.cta?.show || true}
          buttonText={serviceData.industriesSectionData?.cta?.text || "Build My Custom Portal"}
          buttonHref={serviceData.industriesSectionData?.cta?.href || "#"}
          buttonClassName={serviceData.industriesSectionData?.cta?.className || "offer-btn primary"}
        />
      )}
      {(serviceType === "content-marketing-services" || serviceType === "guest-posting-services" || serviceType === "link-building-services" || serviceType === "local-seo-services" || serviceType === "online-reputation-management-services") && (
        <WebBuilderCardSection
          heading={serviceData.industriesSectionData?.heading}
          description={serviceData.industriesSectionData?.description}
          showDescription={serviceData.industriesSectionData?.showDescription}
          items={serviceData.industriesCardsData || []}
          columnCount={3}
          sectionClass={webBuilderSectionClass}
          button={serviceData.industriesSectionData?.cta?.show || true}
          buttonText={serviceData.industriesSectionData?.cta?.text || (serviceType === "content-marketing-services" ? "Make My Content Work" : serviceType === "guest-posting-services" ? "Build Links Now" : serviceType === "link-building-services" ? "Grow Website Authority Now" : serviceType === "online-reputation-management-services" ? "Secure My Reputation Today" : "Claim My SEO Strategy")}
          buttonHref={serviceData.industriesSectionData?.cta?.href || "#contact"}
          buttonClassName={serviceData.industriesSectionData?.cta?.className || "offer-btn primary"}
        />
      )}
      <ReviewsSlider />
      {serviceData.scrollSectionData && (
        <ScrollSection
          data={serviceData.scrollSectionData}
          className="landingPageScrollSection"
          isIconShow={true}
        />
      )}
      {console.log("Scroll Section Data:", serviceData.scrollSectionData)}
      {serviceData.whyChooseUsData && serviceData.whyChooseUsSectionData &&
        serviceType !== "pay-per-click-agency" &&
        serviceType !== "social-media-marketing-agency" &&
        serviceType !== "digital-pr-services" &&
        serviceType !== "search-engine-optimization-agency" &&
        serviceType !== "content-marketing-services" &&
        serviceType !== "guest-posting-services" &&
        serviceType !== "link-building-services" &&
        serviceType !== "local-seo-services" &&
        serviceType !== "online-reputation-management-services" &&
        serviceType !== "content-writing-services" && (
          <WebBuilderCardSection
            heading={serviceData.whyChooseUsSectionData?.heading}
            description={serviceData.whyChooseUsSectionData?.description}
            showDescription={serviceData.whyChooseUsSectionData?.showDescription}
            items={serviceData.whyChooseUsData || []}
            columnCount={2}
            sectionClass="bg-light"
          />
        )}
      <StepSection sectionData={serviceData.workflowData} />
      {serviceType !== "digital-marketing-company" && (
        <PlatformsSpecialize
          data={serviceData.technologiesData || platformsData}
          sectionData={serviceData.technologiesSectionData}
        />
      )}
      <TestimonialSlider />
      <WebBanner
        data={serviceData.finalCTAData || serviceData.bannerData2}
        className="notHero order2 landingPageBanner2"
      />
      <Faqs
        faqs={serviceData.faqsData || homePageFAQs}
        isTwoCol={true}
        className="landingPageFaqs"
      />
      <BlogSection />
      <ContactSection />
    </div>
  );
};

export default ServicePage;
