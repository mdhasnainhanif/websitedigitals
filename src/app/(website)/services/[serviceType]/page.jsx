import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards'
import DevelopmentCardSlider from '../../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider'
import OurWorkSection from '../../../../components/LandingPage/OurWorkSection/OurWorkSection'
import ScrollSection from '../../../../components/ScrollSection/ScrollSection'
import ReviewsSlider from '../../../../components/LandingPage/ReviewsSlider/ReviewsSlider'
import StepSection from '../../../../components/LandingPage/StepSection/StepSection'
import TechnologiesSlider from '../../../../components/LandingPage/TechnologySlider/TechnologySlider'
import TestimonialSlider from '../../../../components/LandingPage/TestimonialSlider/TestimonialSlider'
import Faqs from '../../../../components/FAQs/Faqs'
import { homePageFAQs } from '../../../../components/FAQs/data'
import BlogSection from '../../../../components/LandingPage/BlogSection/BlogSection'
import ContactSection from '../../../../components/LandingPage/ContactSection/ContactSection'
import LandingPageCounter from '../../../../components/LandingPage/LandingPageCounter/LandingPageCounter'
import WebBuilderCardSection from '../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection'
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
  webBuilderSectionClass,
} from "../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData";
import PlatformsSpecialize from '../../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize'
import { platformsData } from '../../../Data/landingPageData';
import LandingBannerForm from '../../../../components/LandingPage/LandingBannerForm/LandingBannerForm'

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
  cmsDevelopmentIndustriesCardsData
} from '../../../Data/cmsDevelopmentData'
import { webPortalDevelopmentBannerData, webPortalDevelopmentBannerData2, webPortalDevelopmentScrollSectionData, webPortalDevelopmentServicesData } from '../../../Data/webPortalDevelopmentData'
import { webApplicationDevelopmentBannerData, webApplicationDevelopmentBannerData2, webApplicationDevelopmentScrollSectionData, webApplicationDevelopmentServicesData } from '../../../Data/webApplicationDevelopmentData'
import { websiteMaintenanceBannerData, websiteMaintenanceBannerData2, websiteMaintenanceScrollSectionData, websiteMaintenanceServicesData } from '../../../Data/websiteMaintenanceData'
import { websiteSpeedOptimizationBannerData, websiteSpeedOptimizationBannerData2, websiteSpeedOptimizationScrollSectionData, websiteSpeedOptimizationServicesData } from '../../../Data/websiteSpeedOptimizationData'

// Service data mapping
const serviceDataMap = {
  'cms-development-company': {
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
    industriesCardsData: cmsDevelopmentIndustriesCardsData
  },
  'web-portal-development-company': {
    bannerData: webPortalDevelopmentBannerData,
    bannerData2: webPortalDevelopmentBannerData2,
    scrollSectionData: webPortalDevelopmentScrollSectionData,
    servicesData: webPortalDevelopmentServicesData,
    statsData: null,
    industriesData: null,
    technologiesData: null,
    workflowData: null,
    whyChooseUsData: null,
    faqsData: null
  },
  'web-application-development-services': {
    bannerData: webApplicationDevelopmentBannerData,
    bannerData2: webApplicationDevelopmentBannerData2,
    scrollSectionData: webApplicationDevelopmentScrollSectionData,
    servicesData: webApplicationDevelopmentServicesData,
    statsData: null,
    industriesData: null,
    technologiesData: null,
    workflowData: null,
    whyChooseUsData: null,
    faqsData: null
  },
  'website-maintenance-services': {
    bannerData: websiteMaintenanceBannerData,
    bannerData2: websiteMaintenanceBannerData2,
    scrollSectionData: websiteMaintenanceScrollSectionData,
    servicesData: websiteMaintenanceServicesData,
    statsData: null,
    industriesData: null,
    technologiesData: null,
    workflowData: null,
    whyChooseUsData: null,
    faqsData: null
  },
  'website-speed-optimization-services': {
    bannerData: websiteSpeedOptimizationBannerData,
    bannerData2: websiteSpeedOptimizationBannerData2,
    scrollSectionData: websiteSpeedOptimizationScrollSectionData,
    servicesData: websiteSpeedOptimizationServicesData,
    statsData: null,
    industriesData: null,
    technologiesData: null,
    workflowData: null,
    whyChooseUsData: null,
    faqsData: null
  }
}

const ServicePage = ({ params }) => {
  const { serviceType } = params
  
  // Get service data based on the serviceType parameter
  const serviceData = serviceDataMap[serviceType]
  
  // If service type not found, return 404 or redirect
  if (!serviceData) {
    return (
      <div className="container text-center py-5">
        <h1>Service Not Found</h1>
        <p>The requested service page could not be found.</p>
      </div>
    )
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
        heading={serviceData.industriesSectionData?.heading || webBuilderHeading}
        items={serviceData.industriesCardsData || webBuilderCards}
        columnCount={3}
        sectionClass={webBuilderSectionClass}
        button={serviceData.industriesSectionData?.cta?.show || false}
      />
      <ReviewsSlider />
      <ScrollSection 
        data={serviceData.scrollSectionData} 
        className="landingPageScrollSection" 
        isIconShow={true} 
      />
      <StepSection sectionData={serviceData.workflowData} />
      <PlatformsSpecialize 
        data={serviceData.technologiesData || platformsData} 
        sectionData={serviceData.technologiesSectionData}
      />
      <TestimonialSlider />
      <WebBanner 
        data={serviceData.finalCTAData || serviceData.bannerData2} 
        className="notHero order2 landingPageBanner2" 
      />
      <Faqs faqs={serviceData.faqsData || homePageFAQs} isTwoCol={true} className="landingPageFaqs" />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default ServicePage
