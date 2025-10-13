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

// Import all service data
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
  customLogoDesignBannerData,
  customLogoDesignBannerData2,
  customLogoDesignScrollSectionData,
  customLogoDesignServicesData,
  customLogoDesignStatsData,
  customLogoDesignImpactSectionData,
  customLogoDesignImpactCardsData,
  customLogoDesignServicesSectionData,
  customLogoDesignIndustriesSectionData,
  customLogoDesignIndustriesCardsData,
  customLogoDesignWorkflowData,
  customLogoDesignTechnologiesSectionData,
  customLogoDesignTechnologiesData,
  customLogoDesignFinalCTAData,
  customLogoDesignFAQsData,
  customLogoDesignWhyChooseUsSectionData,
  customLogoDesignWhyChooseUsData,
  customLogoDesignMetadata,
} from "../../../Data/customLogoDesignData";
import {
  customGraphicDesignBannerData,
  customGraphicDesignBannerData2,
  customGraphicDesignScrollSectionData,
  customGraphicDesignServicesData,
  customGraphicDesignStatsData,
  customGraphicDesignImpactSectionData,
  customGraphicDesignImpactCardsData,
  customGraphicDesignServicesSectionData,
  customGraphicDesignIndustriesSectionData,
  customGraphicDesignIndustriesCardsData,
  customGraphicDesignWorkflowData,
  customGraphicDesignTechnologiesSectionData,
  customGraphicDesignTechnologiesData,
  customGraphicDesignFinalCTAData,
  customGraphicDesignFAQsData,
  customGraphicDesignMetadata,
} from "../../../Data/customGraphicDesignData";

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
} from "../../../Data/digitalMarketingCompanyData";
import {
  videoAnimationBannerData,
  videoAnimationBannerData2,
  videoAnimationScrollSectionData,
  videoAnimationServicesData,
  videoAnimationStatsData,
  videoAnimationImpactSectionData,
  videoAnimationImpactCardsData,
  videoAnimationServicesSectionData,
  videoAnimationIndustriesSectionData,
  videoAnimationIndustriesCardsData,
  videoAnimationWorkflowData,
  videoAnimationTechnologiesSectionData,
  videoAnimationTechnologiesData,
  videoAnimationFinalCTAData,
  videoAnimationFAQsData,
  videoAnimationMetadata,
} from "../../../Data/videoAnimationData";
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

// Service data mapping
const serviceDataMap = {
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
  "custom-logo-design-services": {
    bannerData: customLogoDesignBannerData,
    bannerData2: customLogoDesignBannerData2,
    scrollSectionData: null,
    servicesData: customLogoDesignServicesData,
    statsData: customLogoDesignStatsData,
    impactSectionData: customLogoDesignImpactSectionData,
    impactCardsData: customLogoDesignImpactCardsData,
    servicesSectionData: customLogoDesignServicesSectionData,
    industriesSectionData: customLogoDesignIndustriesSectionData,
    industriesCardsData: customLogoDesignIndustriesCardsData,
    workflowData: customLogoDesignWorkflowData,
    technologiesSectionData: customLogoDesignTechnologiesSectionData,
    technologiesData: customLogoDesignTechnologiesData,
    finalCTAData: customLogoDesignFinalCTAData,
    faqsData: customLogoDesignFAQsData,
    whyChooseUsSectionData: customLogoDesignWhyChooseUsSectionData,
    whyChooseUsData: customLogoDesignWhyChooseUsData,
    metadata: customLogoDesignMetadata,
  },
  "custom-graphic-design-services": {
    bannerData: customGraphicDesignBannerData,
    bannerData2: customGraphicDesignBannerData2,
    scrollSectionData: customGraphicDesignScrollSectionData,
    servicesData: customGraphicDesignServicesData,
    statsData: customGraphicDesignStatsData,
    impactSectionData: customGraphicDesignImpactSectionData,
    impactCardsData: customGraphicDesignImpactCardsData,
    servicesSectionData: customGraphicDesignServicesSectionData,
    industriesSectionData: customGraphicDesignIndustriesSectionData,
    industriesCardsData: customGraphicDesignIndustriesCardsData,
    workflowData: customGraphicDesignWorkflowData,
    technologiesSectionData: customGraphicDesignTechnologiesSectionData,
    technologiesData: customGraphicDesignTechnologiesData,
    finalCTAData: customGraphicDesignFinalCTAData,
    faqsData: customGraphicDesignFAQsData,
    metadata: customGraphicDesignMetadata,
  },
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
  "video-animation-services": {
    bannerData: videoAnimationBannerData,
    bannerData2: videoAnimationBannerData2,
    scrollSectionData: videoAnimationScrollSectionData,
    servicesData: videoAnimationServicesData,
    statsData: videoAnimationStatsData,
    impactSectionData: videoAnimationImpactSectionData,
    impactCardsData: videoAnimationImpactCardsData,
    servicesSectionData: videoAnimationServicesSectionData,
    industriesSectionData: videoAnimationIndustriesSectionData,
    industriesCardsData: videoAnimationIndustriesCardsData,
    workflowData: videoAnimationWorkflowData,
    technologiesSectionData: videoAnimationTechnologiesSectionData,
    technologiesData: videoAnimationTechnologiesData,
    finalCTAData: videoAnimationFinalCTAData,
    faqsData: videoAnimationFAQsData,
    metadata: videoAnimationMetadata,
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

const ServicePage = ({ params }) => {
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
      {serviceType !== "digital-marketing-company" && serviceType !== "content-marketing-services" && serviceType !== "guest-posting-services" && (
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
      {(serviceType === "content-marketing-services" || serviceType === "guest-posting-services") && (
        <WebBuilderCardSection
          heading={serviceData.industriesSectionData?.heading}
          description={serviceData.industriesSectionData?.description}
          showDescription={serviceData.industriesSectionData?.showDescription}
          items={serviceData.industriesCardsData || []}
          columnCount={3}
          sectionClass={webBuilderSectionClass}
          button={serviceData.industriesSectionData?.cta?.show || true}
          buttonText={serviceData.industriesSectionData?.cta?.text || (serviceType === "content-marketing-services" ? "Make My Content Work" : "Build Links Now")}
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
      {/* Debug: Check if scroll section data exists */}
      {console.log("Scroll Section Data:", serviceData.scrollSectionData)}
      {serviceData.whyChooseUsData && serviceData.whyChooseUsSectionData && 
       serviceType !== "cms-development-company" && 
       serviceType !== "pay-per-click-agency" && 
       serviceType !== "social-media-marketing-agency" && 
       serviceType !== "digital-pr-services" && 
       serviceType !== "search-engine-optimization-agency" && 
       serviceType !== "content-marketing-services" && 
       serviceType !== "guest-posting-services" && (
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
        serviceType !== "custom-graphic-design-services" && 
        serviceType !== "content-marketing-services" && 
        serviceType !== "guest-posting-services" && (
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
