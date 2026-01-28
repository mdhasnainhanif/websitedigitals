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
import { homePageFAQs } from "../../../../components/FAQs/data";
import BlogSection from "../../../../components/LandingPage/BlogSection/BlogSection";
import ContactSection from "../../../../components/LandingPage/ContactSection/ContactSection";
import LandingPageCounter from "../../../../components/LandingPage/LandingPageCounter/LandingPageCounter";
import WebBuilderCardSection from "../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
  webBuilderSectionClass,
} from "../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData";
import PlatformsSpecialize from "../../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize";
import { platformsData } from "../../../Data/landingPageData";
import LandingBannerForm from "../../../../components/LandingPage/LandingBannerForm/LandingBannerForm";
import {
  seoAgencyBannerData,
  seoAgencyBannerData2,
  seoAgencyScrollSectionData,
  seoAgencyServicesData,
  seoAgencyStatsData,
  seoAgencyImpactSectionData,
  seoAgencyImpactCardsData,
  seoAgencyServicesSectionData,
  seoAgencyIndustriesSectionData,
  seoAgencyIndustriesCardsData,
  seoAgencyWorkflowData,
  seoAgencyTechnologiesSectionData,
  seoAgencyTechnologiesData,
  seoAgencyFinalCTAData,
  seoAgencyFAQsData,
  seoAgencyWhyChooseUsSectionData,
  seoAgencyWhyChooseUsData,
  seoAgencyMetadata,
} from "../../../Data/seoAgencyData";
import {
  payPerClickAgencyBannerData,
  payPerClickAgencyBannerData2,
  payPerClickAgencyScrollSectionData,
  payPerClickAgencyServicesData,
  payPerClickAgencyStatsData,
  payPerClickAgencyImpactSectionData,
  payPerClickAgencyImpactCardsData,
  payPerClickAgencyServicesSectionData,
  payPerClickAgencyIndustriesSectionData,
  payPerClickAgencyIndustriesCardsData,
  payPerClickAgencyWorkflowData,
  payPerClickAgencyTechnologiesSectionData,
  payPerClickAgencyTechnologiesData,
  payPerClickAgencyFinalCTAData,
  payPerClickAgencyFAQsData,
  payPerClickAgencyWhyChooseUsSectionData,
  payPerClickAgencyWhyChooseUsData,
  payPerClickAgencyMetadata,
} from "../../../Data/payPerClickAgencyData";
import {
  socialMediaMarketingAgencyBannerData,
  socialMediaMarketingAgencyBannerData2,
  socialMediaMarketingAgencyScrollSectionData,
  socialMediaMarketingAgencyServicesData,
  socialMediaMarketingAgencyStatsData,
  socialMediaMarketingAgencyImpactSectionData,
  socialMediaMarketingAgencyImpactCardsData,
  socialMediaMarketingAgencyServicesSectionData,
  socialMediaMarketingAgencyIndustriesSectionData,
  socialMediaMarketingAgencyIndustriesCardsData,
  socialMediaMarketingAgencyWorkflowData,
  socialMediaMarketingAgencyWorkflowSectionData,
  socialMediaMarketingAgencyWhyChooseUsData,
  socialMediaMarketingAgencyWhyChooseUsSectionData,
  socialMediaMarketingAgencyFinalCTAData,
  socialMediaMarketingAgencyFAQsData,
  socialMediaMarketingAgencyMetadata,
} from "../../../Data/socialMediaMarketingAgencyData";
import {
  digitalPRServicesBannerData,
  digitalPRServicesBannerData2,
  digitalPRServicesScrollSectionData,
  digitalPRServicesServicesData,
  digitalPRServicesStatsData,
  digitalPRServicesImpactSectionData,
  digitalPRServicesImpactCardsData,
  digitalPRServicesServicesSectionData,
  digitalPRServicesIndustriesSectionData,
  digitalPRServicesIndustriesCardsData,
  digitalPRServicesWorkflowData,
  digitalPRServicesWorkflowSectionData,
  digitalPRServicesWhyChooseUsData,
  digitalPRServicesWhyChooseUsSectionData,
  digitalPRServicesFinalCTAData,
  digitalPRServicesFAQsData,
  digitalPRServicesMetadata,
} from "../../../Data/digitalPRServicesData";
import {
  contentWritingServicesBannerData,
  contentWritingServicesBannerData2,
  contentWritingServicesScrollSectionData,
  contentWritingServicesServicesData,
  contentWritingServicesStatsData,
  contentWritingServicesImpactSectionData,
  contentWritingServicesImpactCardsData,
  contentWritingServicesServicesSectionData,
  contentWritingServicesIndustriesSectionData,
  contentWritingServicesIndustriesCardsData,
  contentWritingServicesWorkflowData,
  contentWritingServicesWorkflowSectionData,
  contentWritingServicesWhyChooseUsData,
  contentWritingServicesWhyChooseUsSectionData,
  contentWritingServicesFinalCTAData,
  contentWritingServicesFAQsData,
  contentWritingServicesMetadata,
} from "../../../Data/contentWritingServicesData";
import {
  onlineReputationManagementBannerData,
  onlineReputationManagementBannerData2,
  onlineReputationManagementScrollSectionData,
  onlineReputationManagementServicesData,
  onlineReputationManagementStatsData,
  onlineReputationManagementImpactSectionData,
  onlineReputationManagementImpactCardsData,
  onlineReputationManagementServicesSectionData,
  onlineReputationManagementIndustriesSectionData,
  onlineReputationManagementIndustriesCardsData,
  onlineReputationManagementWorkflowData,
  onlineReputationManagementWhyChooseUsSectionData,
  onlineReputationManagementWhyChooseUsData,
  onlineReputationManagementFinalCTAData,
  onlineReputationManagementFAQsData,
  onlineReputationManagementMetadata,
} from "../../../Data/onlineReputationManagementData";
import {
  appStoreOptimizationBannerData,
  appStoreOptimizationBannerData2,
  appStoreOptimizationScrollSectionData,
  appStoreOptimizationServicesData,
  appStoreOptimizationStatsData,
  appStoreOptimizationImpactSectionData,
  appStoreOptimizationImpactCardsData,
  appStoreOptimizationServicesSectionData,
  appStoreOptimizationIndustriesSectionData,
  appStoreOptimizationIndustriesCardsData,
  appStoreOptimizationWorkflowData,
  appStoreOptimizationWhyChooseUsSectionData,
  appStoreOptimizationWhyChooseUsData,
  appStoreOptimizationTechnologiesSectionData,
  appStoreOptimizationTechnologiesData,
  appStoreOptimizationFinalCTAData,
  appStoreOptimizationFAQsData,
  appStoreOptimizationMetadata,
} from "../../../Data/appStoreOptimizationData";
import {
  contentMarketingServicesBannerData,
  contentMarketingServicesBannerData2,
  contentMarketingServicesScrollSectionData,
  contentMarketingServicesServicesData,
  contentMarketingServicesStatsData,
  contentMarketingServicesImpactSectionData,
  contentMarketingServicesImpactCardsData,
  contentMarketingServicesServicesSectionData,
  contentMarketingServicesIndustriesSectionData,
  contentMarketingServicesIndustriesCardsData,
  contentMarketingServicesWorkflowData,
  contentMarketingServicesTechnologiesSectionData,
  contentMarketingServicesTechnologiesData,
  contentMarketingServicesWhyChooseUsData,
  contentMarketingServicesWhyChooseUsSectionData,
  contentMarketingServicesFinalCTAData,
  contentMarketingServicesFAQsData,
  contentMarketingServicesMetadata,
} from "../../../Data/contentMarketingServicesData";
import {
  guestPostingServicesBannerData,
  guestPostingServicesBannerData2,
  guestPostingServicesScrollSectionData,
  guestPostingServicesServicesData,
  guestPostingServicesStatsData,
  guestPostingServicesImpactSectionData,
  guestPostingServicesImpactCardsData,
  guestPostingServicesServicesSectionData,
  guestPostingServicesIndustriesSectionData,
  guestPostingServicesIndustriesCardsData,
  guestPostingServicesWorkflowData,
  guestPostingServicesWhyChooseUsData,
  guestPostingServicesWhyChooseUsSectionData,
  guestPostingServicesFinalCTAData,
  guestPostingServicesFAQsData,
  guestPostingServicesMetadata,
} from "../../../Data/guestPostingServicesData";
import {
  linkBuildingServicesBannerData,
  linkBuildingServicesBannerData2,
  linkBuildingServicesScrollSectionData,
  linkBuildingServicesServicesData,
  linkBuildingServicesStatsData,
  linkBuildingServicesImpactSectionData,
  linkBuildingServicesImpactCardsData,
  linkBuildingServicesServicesSectionData,
  linkBuildingServicesIndustriesSectionData,
  linkBuildingServicesIndustriesCardsData,
  linkBuildingServicesWorkflowData,
  linkBuildingServicesFinalCTAData,
  linkBuildingServicesFAQsData,
  linkBuildingServicesMetadata,
} from "../../../Data/linkBuildingServicesData";
import {
  localSEOServicesBannerData,
  localSEOServicesBannerData2,
  localSEOServicesScrollSectionData,
  localSEOServicesData,
  localSEOServicesStatsData,
  localSEOServicesImpactSectionData,
  localSEOServicesImpactCardsData,
  localSEOServicesServicesSectionData,
  localSEOServicesIndustriesSectionData,
  localSEOServicesIndustriesCardsData,
  localSEOServicesWorkflowData,
  localSEOServicesWhyChooseUsData,
  localSEOServicesWhyChooseUsSectionData,
  localSEOServicesFinalCTAData,
  localSEOServicesFAQsData,
  localSEOServicesMetadata,
} from "../../../Data/localSEOServicesData";
const digitalMarketingServiceDataMap = {
  "content-marketing-services": {
    bannerData: contentMarketingServicesBannerData,
    bannerData2: contentMarketingServicesBannerData2,
    scrollSectionData: contentMarketingServicesScrollSectionData,
    servicesData: contentMarketingServicesServicesData,
    statsData: contentMarketingServicesStatsData,
    impactSectionData: contentMarketingServicesImpactSectionData,
    impactCardsData: contentMarketingServicesImpactCardsData,
    servicesSectionData: contentMarketingServicesServicesSectionData,
    industriesSectionData: contentMarketingServicesIndustriesSectionData,
    industriesCardsData: contentMarketingServicesIndustriesCardsData,
    workflowData: contentMarketingServicesWorkflowData,
    technologiesSectionData: contentMarketingServicesTechnologiesSectionData,
    technologiesData: contentMarketingServicesTechnologiesData,
    whyChooseUsSectionData: contentMarketingServicesWhyChooseUsSectionData,
    whyChooseUsData: contentMarketingServicesWhyChooseUsData,
    finalCTAData: contentMarketingServicesFinalCTAData,
    faqsData: contentMarketingServicesFAQsData,
    metadata: contentMarketingServicesMetadata,
  },
  "guest-posting-services": {
    bannerData: guestPostingServicesBannerData,
    bannerData2: guestPostingServicesBannerData2,
    scrollSectionData: guestPostingServicesScrollSectionData,
    servicesData: guestPostingServicesServicesData,
    statsData: guestPostingServicesStatsData,
    impactSectionData: guestPostingServicesImpactSectionData,
    impactCardsData: guestPostingServicesImpactCardsData,
    servicesSectionData: guestPostingServicesServicesSectionData,
    industriesSectionData: guestPostingServicesIndustriesSectionData,
    industriesCardsData: guestPostingServicesIndustriesCardsData,
    workflowData: guestPostingServicesWorkflowData,
    whyChooseUsSectionData: guestPostingServicesWhyChooseUsSectionData,
    whyChooseUsData: guestPostingServicesWhyChooseUsData,
    finalCTAData: guestPostingServicesFinalCTAData,
    faqsData: guestPostingServicesFAQsData,
    metadata: guestPostingServicesMetadata,
  },
  "link-building-services": {
    bannerData: linkBuildingServicesBannerData,
    bannerData2: linkBuildingServicesBannerData2,
    scrollSectionData: linkBuildingServicesScrollSectionData,
    servicesData: linkBuildingServicesServicesData,
    statsData: linkBuildingServicesStatsData,
    impactSectionData: linkBuildingServicesImpactSectionData,
    impactCardsData: linkBuildingServicesImpactCardsData,
    servicesSectionData: linkBuildingServicesServicesSectionData,
    industriesSectionData: linkBuildingServicesIndustriesSectionData,
    industriesCardsData: linkBuildingServicesIndustriesCardsData,
    workflowData: linkBuildingServicesWorkflowData,
    finalCTAData: linkBuildingServicesFinalCTAData,
    faqsData: linkBuildingServicesFAQsData,
    metadata: linkBuildingServicesMetadata,
  },
  "local-seo-services": {
    bannerData: localSEOServicesBannerData,
    bannerData2: localSEOServicesBannerData2,
    scrollSectionData: localSEOServicesScrollSectionData,
    servicesData: localSEOServicesData,
    statsData: localSEOServicesStatsData,
    impactSectionData: localSEOServicesImpactSectionData,
    impactCardsData: localSEOServicesImpactCardsData,
    servicesSectionData: localSEOServicesServicesSectionData,
    industriesSectionData: localSEOServicesIndustriesSectionData,
    industriesCardsData: localSEOServicesIndustriesCardsData,
    workflowData: localSEOServicesWorkflowData,
    whyChooseUsData: localSEOServicesWhyChooseUsData,
    whyChooseUsSectionData: localSEOServicesWhyChooseUsSectionData,
    finalCTAData: localSEOServicesFinalCTAData,
    faqsData: localSEOServicesFAQsData,
    metadata: localSEOServicesMetadata,
  },
  "search-engine-optimization-agency": {
    bannerData: seoAgencyBannerData,
    bannerData2: seoAgencyBannerData2,
    scrollSectionData: seoAgencyScrollSectionData,
    servicesData: seoAgencyServicesData,
    statsData: seoAgencyStatsData,
    impactSectionData: seoAgencyImpactSectionData,
    impactCardsData: seoAgencyImpactCardsData,
    servicesSectionData: seoAgencyServicesSectionData,
    industriesSectionData: seoAgencyIndustriesSectionData,
    industriesCardsData: seoAgencyIndustriesCardsData,
    workflowData: seoAgencyWorkflowData,
    technologiesSectionData: seoAgencyTechnologiesSectionData,
    technologiesData: seoAgencyTechnologiesData,
    finalCTAData: seoAgencyFinalCTAData,
    faqsData: seoAgencyFAQsData,
    whyChooseUsSectionData: seoAgencyWhyChooseUsSectionData,
    whyChooseUsData: seoAgencyWhyChooseUsData,
    metadata: seoAgencyMetadata,
  },
  "pay-per-click-agency": {
    bannerData: payPerClickAgencyBannerData,
    bannerData2: payPerClickAgencyBannerData2,
    scrollSectionData: payPerClickAgencyScrollSectionData,
    servicesData: payPerClickAgencyServicesData,
    statsData: payPerClickAgencyStatsData,
    impactSectionData: payPerClickAgencyImpactSectionData,
    impactCardsData: payPerClickAgencyImpactCardsData,
    servicesSectionData: payPerClickAgencyServicesSectionData,
    industriesSectionData: payPerClickAgencyIndustriesSectionData,
    industriesCardsData: payPerClickAgencyIndustriesCardsData,
    workflowData: payPerClickAgencyWorkflowData,
    technologiesSectionData: payPerClickAgencyTechnologiesSectionData,
    technologiesData: payPerClickAgencyTechnologiesData,
    finalCTAData: payPerClickAgencyFinalCTAData,
    faqsData: payPerClickAgencyFAQsData,
    whyChooseUsSectionData: payPerClickAgencyWhyChooseUsSectionData,
    whyChooseUsData: payPerClickAgencyWhyChooseUsData,
    metadata: payPerClickAgencyMetadata,
  },
  "social-media-marketing-agency": {
    bannerData: socialMediaMarketingAgencyBannerData,
    bannerData2: socialMediaMarketingAgencyBannerData2,
    scrollSectionData: socialMediaMarketingAgencyScrollSectionData,
    servicesData: socialMediaMarketingAgencyServicesData,
    statsData: socialMediaMarketingAgencyStatsData,
    impactSectionData: socialMediaMarketingAgencyImpactSectionData,
    impactCardsData: socialMediaMarketingAgencyImpactCardsData,
    servicesSectionData: socialMediaMarketingAgencyServicesSectionData,
    industriesSectionData: socialMediaMarketingAgencyIndustriesSectionData,
    industriesCardsData: socialMediaMarketingAgencyIndustriesCardsData,
    workflowData: socialMediaMarketingAgencyWorkflowData,
    workflowSectionData: socialMediaMarketingAgencyWorkflowSectionData,
    whyChooseUsSectionData: socialMediaMarketingAgencyWhyChooseUsSectionData,
    whyChooseUsData: socialMediaMarketingAgencyWhyChooseUsData,
    finalCTAData: socialMediaMarketingAgencyFinalCTAData,
    faqsData: socialMediaMarketingAgencyFAQsData,
    metadata: socialMediaMarketingAgencyMetadata,
  },
  "digital-pr-services": {
    bannerData: digitalPRServicesBannerData,
    bannerData2: digitalPRServicesBannerData2,
    scrollSectionData: digitalPRServicesScrollSectionData,
    servicesData: digitalPRServicesServicesData,
    statsData: digitalPRServicesStatsData,
    impactSectionData: digitalPRServicesImpactSectionData,
    impactCardsData: digitalPRServicesImpactCardsData,
    servicesSectionData: digitalPRServicesServicesSectionData,
    industriesSectionData: digitalPRServicesIndustriesSectionData,
    industriesCardsData: digitalPRServicesIndustriesCardsData,
    workflowData: digitalPRServicesWorkflowData,
    workflowSectionData: digitalPRServicesWorkflowSectionData,
    whyChooseUsSectionData: digitalPRServicesWhyChooseUsSectionData,
    whyChooseUsData: digitalPRServicesWhyChooseUsData,
    finalCTAData: digitalPRServicesFinalCTAData,
    faqsData: digitalPRServicesFAQsData,
    metadata: digitalPRServicesMetadata,
  },
  "content-writing-services": {
    bannerData: contentWritingServicesBannerData,
    bannerData2: contentWritingServicesBannerData2,
    scrollSectionData: contentWritingServicesScrollSectionData,
    servicesData: contentWritingServicesServicesData,
    statsData: contentWritingServicesStatsData,
    impactSectionData: contentWritingServicesImpactSectionData,
    impactCardsData: contentWritingServicesImpactCardsData,
    servicesSectionData: contentWritingServicesServicesSectionData,
    industriesSectionData: contentWritingServicesIndustriesSectionData,
    industriesCardsData: contentWritingServicesIndustriesCardsData,
    workflowData: contentWritingServicesWorkflowData,
    workflowSectionData: contentWritingServicesWorkflowSectionData,
    whyChooseUsSectionData: contentWritingServicesWhyChooseUsSectionData,
    whyChooseUsData: contentWritingServicesWhyChooseUsData,
    finalCTAData: contentWritingServicesFinalCTAData,
    faqsData: contentWritingServicesFAQsData,
    metadata: contentWritingServicesMetadata,
  },
  "online-reputation-management-services": {
    bannerData: onlineReputationManagementBannerData,
    bannerData2: onlineReputationManagementBannerData2,
    scrollSectionData: onlineReputationManagementScrollSectionData,
    servicesData: onlineReputationManagementServicesData,
    statsData: onlineReputationManagementStatsData,
    impactSectionData: onlineReputationManagementImpactSectionData,
    impactCardsData: onlineReputationManagementImpactCardsData,
    servicesSectionData: onlineReputationManagementServicesSectionData,
    industriesSectionData: onlineReputationManagementIndustriesSectionData,
    industriesCardsData: onlineReputationManagementIndustriesCardsData,
    workflowData: onlineReputationManagementWorkflowData,
    whyChooseUsData: onlineReputationManagementWhyChooseUsData,
    whyChooseUsSectionData: onlineReputationManagementWhyChooseUsSectionData,
    finalCTAData: onlineReputationManagementFinalCTAData,
    faqsData: onlineReputationManagementFAQsData,
    metadata: onlineReputationManagementMetadata,
  },
  "app-store-optimization-services": {
    bannerData: appStoreOptimizationBannerData,
    bannerData2: appStoreOptimizationBannerData2,
    scrollSectionData: appStoreOptimizationScrollSectionData,
    servicesData: appStoreOptimizationServicesData,
    statsData: appStoreOptimizationStatsData,
    impactSectionData: appStoreOptimizationImpactSectionData,
    impactCardsData: appStoreOptimizationImpactCardsData,
    servicesSectionData: appStoreOptimizationServicesSectionData,
    industriesSectionData: appStoreOptimizationIndustriesSectionData,
    industriesCardsData: appStoreOptimizationIndustriesCardsData,
    workflowData: appStoreOptimizationWorkflowData,
    whyChooseUsData: appStoreOptimizationWhyChooseUsData,
    whyChooseUsSectionData: appStoreOptimizationWhyChooseUsSectionData,
    technologiesSectionData: appStoreOptimizationTechnologiesSectionData,
    technologiesData: appStoreOptimizationTechnologiesData,
    finalCTAData: appStoreOptimizationFinalCTAData,
    faqsData: appStoreOptimizationFAQsData,
    metadata: appStoreOptimizationMetadata,
  },
};
export async function generateMetadata({ params }) {
  const { serviceType } = params;
  const serviceData = digitalMarketingServiceDataMap[serviceType];
  if (!serviceData || !serviceData.metadata) {
    return {
      title: "Digital Marketing Services | Website Digitals",
      description: "Comprehensive digital marketing solutions to grow your business online.",
    };
  }
  return serviceData.metadata;
}
const DigitalMarketingServicePage = ({ params }) => {
  const { serviceType } = params;
  const serviceData = digitalMarketingServiceDataMap[serviceType];
  if (serviceType === "digital-marketing-company") {
    return (
      <div>
        <WebBanner data={digitalMarketingBannerData} />
        <WebBanner data={digitalMarketingAfterBannerData} className="notHero" colImgClass="boxes-bgArea leftBottom" />
        <RoiSection data={digitalMarketingRoiSectionData} className="pt-0" />
        <WebBanner data={digitalMarketingThirdBannerData} className="notHero order2 bg-blue" colImgClass="boxes-bgArea leftBottom" />
        <WebBanner data={digitalMarketingFourthBannerData} className="notHero" colImgClass="boxes-bgArea leftBottom" />
        <WebBanner data={digitalMarketingFifthBannerData} className="notHero order2 bg-blue" colImgClass="boxes-bgArea leftBottom" />
        <WebBanner data={digitalMarketingSixthBannerData} className="notHero" colImgClass="boxes-bgArea leftBottom" />
        <ScrollSection data={digitalMarketingScrollSectionData} />
        <WhyChooseSection {...whyChooseDigitalMarketingData} colCount1={6} colCount2={6} bothImgClass="digitalMarketing-splitArea" />
        <DigitalMarketingServices data={digitalMarketingPageData} />
        <WebBannerParallaxEffect data={webBannerParallaxData} className="notHero" colImgClass="boxes-bgArea leftBottom" />
        <MomentumSection data={momentumDataDigitalMarketing} />
        <Cta />
        <TestimonialsSection className="bg-light" data={testimonialsData} />
        <FAQs faqs={homePageFAQs} />
        <ContactSection />
      </div>
    );
  }
  if (!serviceData) {
    return (
      <div className="container text-center py-5">
        <h1>Service Not Found</h1>
        <p>The requested digital marketing service page could not be found.</p>
        <a href="/services" className="btn btn-primary">View All Services</a>
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
      {serviceType !== "digital-marketing-company" && serviceType !== "content-marketing-services" && serviceType !== "guest-posting-services" && serviceType !== "link-building-services" && serviceType !== "local-seo-services" && serviceType !== "online-reputation-management-services" && serviceType !== "app-store-optimization-services" && (
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
      {(serviceType === "content-marketing-services" || serviceType === "guest-posting-services" || serviceType === "link-building-services" || serviceType === "local-seo-services" || serviceType === "online-reputation-management-services" || serviceType === "app-store-optimization-services") && (
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
        serviceType !== "content-writing-services" &&
        serviceType !== "app-store-optimization-services" && (
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
      {serviceType !== "search-engine-optimization-agency" &&
        serviceType !== "digital-marketing-company" &&
        serviceType !== "digital-pr-services" &&
        serviceType !== "social-media-marketing-agency" &&
        serviceType !== "content-marketing-services" &&
        serviceType !== "guest-posting-services" &&
        serviceType !== "link-building-services" &&
        serviceType !== "local-seo-services" &&
        serviceType !== "online-reputation-management-services" &&
        serviceType !== "content-writing-services" && (
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
  return (
    <div className="container text-center py-5">
      <h1>Digital Marketing Service</h1>
      <p>This service is being developed.</p>
      <a href="/digital-marketing/digital-marketing-company" className="btn btn-primary">View Digital Marketing Services</a>
    </div>
  );
};
export default DigitalMarketingServicePage;
