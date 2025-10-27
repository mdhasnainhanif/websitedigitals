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

import {
  websiteSpeedOptimizationBannerData,
  websiteSpeedOptimizationBannerData2,
  websiteSpeedOptimizationScrollSectionData,
  websiteSpeedOptimizationServicesData,
  websiteSpeedOptimizationStatsData,
  websiteSpeedOptimizationImpactSectionData,
  websiteSpeedOptimizationImpactCardsData,
  websiteSpeedOptimizationServicesSectionData,
  websiteSpeedOptimizationIndustriesSectionData,
  websiteSpeedOptimizationIndustriesCardsData,
  websiteSpeedOptimizationWorkflowData,
  websiteSpeedOptimizationTechnologiesSectionData,
  websiteSpeedOptimizationTechnologiesData,
  websiteSpeedOptimizationFinalCTAData,
  websiteSpeedOptimizationFAQsData,
  websiteSpeedOptimizationMetadata,
} from "../../../Data/websiteSpeedOptimizationData";
import {
  websiteMaintenanceBannerData,
  websiteMaintenanceBannerData2,
  websiteMaintenanceScrollSectionData,
  websiteMaintenanceServicesData,
  websiteMaintenanceStatsData,
  websiteMaintenanceImpactSectionData,
  websiteMaintenanceImpactCardsData,
  websiteMaintenanceServicesSectionData,
  websiteMaintenanceIndustriesSectionData,
  websiteMaintenanceIndustriesCardsData,
  websiteMaintenanceWorkflowData,
  websiteMaintenanceTechnologiesSectionData,
  websiteMaintenanceTechnologiesData,
  websiteMaintenanceFinalCTAData,
  websiteMaintenanceFAQsData,
  websiteMaintenanceMetadata,
} from "../../../Data/websiteMaintenanceData";
import {
  webApplicationDevelopmentBannerData,
  webApplicationDevelopmentBannerData2,
  webApplicationDevelopmentScrollSectionData,
  webApplicationDevelopmentServicesData,
  webApplicationDevelopmentStatsData,
  webApplicationDevelopmentImpactSectionData,
  webApplicationDevelopmentImpactCardsData,
  webApplicationDevelopmentServicesSectionData,
  webApplicationDevelopmentIndustriesSectionData,
  webApplicationDevelopmentIndustriesCardsData,
  webApplicationDevelopmentWorkflowData,
  webApplicationDevelopmentTechnologiesSectionData,
  webApplicationDevelopmentTechnologiesData,
  webApplicationDevelopmentFinalCTAData,
  webApplicationDevelopmentFAQsData,
  webApplicationDevelopmentMetadata,
} from "../../../Data/webApplicationDevelopmentData";
import {
  webPortalDevelopmentBannerData,
  webPortalDevelopmentBannerData2,
  webPortalDevelopmentScrollSectionData,
  webPortalDevelopmentServicesData,
  webPortalDevelopmentStatsData,
  webPortalDevelopmentImpactSectionData,
  webPortalDevelopmentImpactCardsData,
  webPortalDevelopmentServicesSectionData,
  webPortalDevelopmentIndustriesSectionData,
  webPortalDevelopmentIndustriesCardsData,
  webPortalDevelopmentWorkflowData,
  webPortalDevelopmentTechnologiesSectionData,
  webPortalDevelopmentTechnologiesData,
  webPortalDevelopmentFinalCTAData,
  webPortalDevelopmentFAQsData,
  webPortalDevelopmentMetadata,
} from "../../../Data/webPortalDevelopmentData";
import {
  cmsDevelopmentBannerData,
  cmsDevelopmentBannerData2,
  cmsDevelopmentScrollSectionData,
  cmsDevelopmentServicesData,
  cmsDevelopmentStatsData,
  cmsDevelopmentIndustriesData,
  cmsDevelopmentTechnologiesData,
  cmsDevelopmentWorkflowData,
  cmsDevelopmentWhyChooseUsData,
  cmsDevelopmentFAQsData,
  cmsDevelopmentServicesSectionData,
  cmsDevelopmentIndustriesSectionData,
  cmsDevelopmentWhyChooseUsSectionData,
  cmsDevelopmentWorkflowSectionData,
  cmsDevelopmentTechnologiesSectionData,
  cmsDevelopmentFinalCTAData,
  cmsDevelopmentImpactCardsData,
  cmsDevelopmentImpactSectionData,
  cmsDevelopmentIndustriesCardsData,
  cmsDevelopmentMetadata,
} from "../../../Data/cmsDevelopmentData";
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
import {
  wixDevelopmentBannerData,
  wixDevelopmentBannerData2,
  wixDevelopmentScrollSectionData,
  wixDevelopmentServicesData,
  wixDevelopmentStatsData,
  wixDevelopmentWorkflowData,
  wixDevelopmentWhyChooseUsData,
  wixDevelopmentFAQsData,
  wixDevelopmentServicesSectionData,
  wixDevelopmentWhyChooseUsSectionData,
  wixDevelopmentFinalCTAData,
  wixDevelopmentImpactCardsData,
  wixDevelopmentImpactSectionData,
  wixDevelopmentIndustriesSectionData,
  wixDevelopmentIndustriesCardsData,
  wixDevelopmentTechnologiesSectionData,
  wixDevelopmentTechnologiesData,
  wixDevelopmentMetadata,
} from "../../../Data/wixDevelopmentData";
import {
  squarespaceDevelopmentBannerData,
  squarespaceDevelopmentBannerData2,
  squarespaceDevelopmentScrollSectionData,
  squarespaceDevelopmentServicesData,
  squarespaceDevelopmentStatsData,
  squarespaceDevelopmentWorkflowData,
  squarespaceDevelopmentWhyChooseUsData,
  squarespaceDevelopmentFAQsData,
  squarespaceDevelopmentServicesSectionData,
  squarespaceDevelopmentWhyChooseUsSectionData,
  squarespaceDevelopmentFinalCTAData,
  squarespaceDevelopmentImpactCardsData,
  squarespaceDevelopmentImpactSectionData,
  squarespaceDevelopmentIndustriesSectionData,
  squarespaceDevelopmentIndustriesCardsData,
  squarespaceDevelopmentTechnologiesSectionData,
  squarespaceDevelopmentTechnologiesData,
  squarespaceDevelopmentMetadata,
} from "../../../Data/squarespaceDevelopmentData";
const serviceDataMap = {
  "website-speed-optimization-services": {
    bannerData: websiteSpeedOptimizationBannerData,
    bannerData2: websiteSpeedOptimizationBannerData2,
    scrollSectionData: websiteSpeedOptimizationScrollSectionData,
    servicesData: websiteSpeedOptimizationServicesData,
    statsData: websiteSpeedOptimizationStatsData,
    impactSectionData: websiteSpeedOptimizationImpactSectionData,
    impactCardsData: websiteSpeedOptimizationImpactCardsData,
    servicesSectionData: websiteSpeedOptimizationServicesSectionData,
    industriesSectionData: websiteSpeedOptimizationIndustriesSectionData,
    industriesCardsData: websiteSpeedOptimizationIndustriesCardsData,
    workflowData: websiteSpeedOptimizationWorkflowData,
    technologiesSectionData: websiteSpeedOptimizationTechnologiesSectionData,
    technologiesData: websiteSpeedOptimizationTechnologiesData,
    finalCTAData: websiteSpeedOptimizationFinalCTAData,
    faqsData: websiteSpeedOptimizationFAQsData,
    metadata: websiteSpeedOptimizationMetadata,
  },
  "website-maintenance-services": {
    bannerData: websiteMaintenanceBannerData,
    bannerData2: websiteMaintenanceBannerData2,
    scrollSectionData: websiteMaintenanceScrollSectionData,
    servicesData: websiteMaintenanceServicesData,
    statsData: websiteMaintenanceStatsData,
    impactSectionData: websiteMaintenanceImpactSectionData,
    impactCardsData: websiteMaintenanceImpactCardsData,
    servicesSectionData: websiteMaintenanceServicesSectionData,
    industriesSectionData: websiteMaintenanceIndustriesSectionData,
    industriesCardsData: websiteMaintenanceIndustriesCardsData,
    workflowData: websiteMaintenanceWorkflowData,
    technologiesSectionData: websiteMaintenanceTechnologiesSectionData,
    technologiesData: websiteMaintenanceTechnologiesData,
    finalCTAData: websiteMaintenanceFinalCTAData,
    faqsData: websiteMaintenanceFAQsData,
    metadata: websiteMaintenanceMetadata,
  },
  "web-application-development-services": {
    bannerData: webApplicationDevelopmentBannerData,
    bannerData2: webApplicationDevelopmentBannerData2,
    scrollSectionData: webApplicationDevelopmentScrollSectionData,
    servicesData: webApplicationDevelopmentServicesData,
    statsData: webApplicationDevelopmentStatsData,
    impactSectionData: webApplicationDevelopmentImpactSectionData,
    impactCardsData: webApplicationDevelopmentImpactCardsData,
    servicesSectionData: webApplicationDevelopmentServicesSectionData,
    industriesSectionData: webApplicationDevelopmentIndustriesSectionData,
    industriesCardsData: webApplicationDevelopmentIndustriesCardsData,
    workflowData: webApplicationDevelopmentWorkflowData,
    technologiesSectionData: webApplicationDevelopmentTechnologiesSectionData,
    technologiesData: webApplicationDevelopmentTechnologiesData,
    finalCTAData: webApplicationDevelopmentFinalCTAData,
    faqsData: webApplicationDevelopmentFAQsData,
    metadata: webApplicationDevelopmentMetadata,
  },
  "web-portal-development-company": {
    bannerData: webPortalDevelopmentBannerData,
    bannerData2: webPortalDevelopmentBannerData2,
    scrollSectionData: webPortalDevelopmentScrollSectionData,
    servicesData: webPortalDevelopmentServicesData,
    statsData: webPortalDevelopmentStatsData,
    impactSectionData: webPortalDevelopmentImpactSectionData,
    impactCardsData: webPortalDevelopmentImpactCardsData,
    servicesSectionData: webPortalDevelopmentServicesSectionData,
    industriesSectionData: webPortalDevelopmentIndustriesSectionData,
    industriesCardsData: webPortalDevelopmentIndustriesCardsData,
    workflowData: webPortalDevelopmentWorkflowData,
    technologiesSectionData: webPortalDevelopmentTechnologiesSectionData,
    technologiesData: webPortalDevelopmentTechnologiesData,
    finalCTAData: webPortalDevelopmentFinalCTAData,
    faqsData: webPortalDevelopmentFAQsData,
    metadata: webPortalDevelopmentMetadata,
  },
  "cms-development-company": {
    bannerData: cmsDevelopmentBannerData,
    bannerData2: cmsDevelopmentBannerData2,
    scrollSectionData: cmsDevelopmentScrollSectionData,
    servicesData: cmsDevelopmentServicesData,
    statsData: cmsDevelopmentStatsData,
    industriesData: cmsDevelopmentIndustriesData,
    technologiesData: cmsDevelopmentTechnologiesData,
    workflowData: cmsDevelopmentWorkflowData,
    whyChooseUsData: cmsDevelopmentWhyChooseUsData,
    faqsData: cmsDevelopmentFAQsData,
    servicesSectionData: cmsDevelopmentServicesSectionData,
    industriesSectionData: cmsDevelopmentIndustriesSectionData,
    whyChooseUsSectionData: cmsDevelopmentWhyChooseUsSectionData,
    workflowSectionData: cmsDevelopmentWorkflowSectionData,
    technologiesSectionData: cmsDevelopmentTechnologiesSectionData,
    finalCTAData: cmsDevelopmentFinalCTAData,
    impactCardsData: cmsDevelopmentImpactCardsData,
    impactSectionData: cmsDevelopmentImpactSectionData,
    industriesCardsData: cmsDevelopmentIndustriesCardsData,
    metadata: cmsDevelopmentMetadata,
  },
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
  "wix-development-services": {
    bannerData: wixDevelopmentBannerData,
    bannerData2: wixDevelopmentBannerData2,
    scrollSectionData: wixDevelopmentScrollSectionData,
    servicesData: wixDevelopmentServicesData,
    statsData: wixDevelopmentStatsData,
    impactSectionData: wixDevelopmentImpactSectionData,
    impactCardsData: wixDevelopmentImpactCardsData,
    servicesSectionData: wixDevelopmentServicesSectionData,
    industriesSectionData: wixDevelopmentIndustriesSectionData,
    industriesCardsData: wixDevelopmentIndustriesCardsData,
    technologiesSectionData: wixDevelopmentTechnologiesSectionData,
    technologiesData: wixDevelopmentTechnologiesData,
    workflowData: wixDevelopmentWorkflowData,
    whyChooseUsData: wixDevelopmentWhyChooseUsData,
    whyChooseUsSectionData: wixDevelopmentWhyChooseUsSectionData,
    finalCTAData: wixDevelopmentFinalCTAData,
    faqsData: wixDevelopmentFAQsData,
    metadata: wixDevelopmentMetadata,
  },
  "squarespace-development-services": {
    bannerData: squarespaceDevelopmentBannerData,
    bannerData2: squarespaceDevelopmentBannerData2,
    scrollSectionData: squarespaceDevelopmentScrollSectionData,
    servicesData: squarespaceDevelopmentServicesData,
    statsData: squarespaceDevelopmentStatsData,
    impactSectionData: squarespaceDevelopmentImpactSectionData,
    impactCardsData: squarespaceDevelopmentImpactCardsData,
    servicesSectionData: squarespaceDevelopmentServicesSectionData,
    industriesSectionData: squarespaceDevelopmentIndustriesSectionData,
    industriesCardsData: squarespaceDevelopmentIndustriesCardsData,
    technologiesSectionData: squarespaceDevelopmentTechnologiesSectionData,
    technologiesData: squarespaceDevelopmentTechnologiesData,
    workflowData: squarespaceDevelopmentWorkflowData,
    whyChooseUsData: squarespaceDevelopmentWhyChooseUsData,
    whyChooseUsSectionData: squarespaceDevelopmentWhyChooseUsSectionData,
    finalCTAData: squarespaceDevelopmentFinalCTAData,
    faqsData: squarespaceDevelopmentFAQsData,
    metadata: squarespaceDevelopmentMetadata,
  },
};
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
  const serviceData = serviceDataMap[serviceType];
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
      {serviceData.whyChooseUsData && serviceData.whyChooseUsSectionData &&
        serviceType !== "cms-development-company" && (
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
        )}
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
