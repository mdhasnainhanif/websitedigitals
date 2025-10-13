import React from 'react'
import { digitalMarketingBannerData } from '@/app/Data/digitalMarketingPageData'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import {
  digitalMarketingAfterBannerData, digitalMarketingRoiSectionData,
  digitalMarketingThirdBannerData, digitalMarketingFourthBannerData, digitalMarketingFifthBannerData,
  digitalMarketingSixthBannerData, digitalMarketingScrollSectionData, whyChooseDigitalMarketingData,
  digitalMarketingPageData,
  webBannerParallaxDigitalMarketingLastData,
  webBannerParallaxData,
  momentumDataDigitalMarketing
} from '../../../Data/digitalMarketingPageData'
import RoiSection from '@/components/About/RoiSection'
import ScrollSection from '@/components/ScrollSection/ScrollSection'
import WhyChooseSection from '@/components/WebBuilder/WhyChooseSection/WhyChooseSection'
import DigitalMarketingServices from '../../../../components/DigitalMarketing/DigitalMarketingServices/DigitalMarketingServices'
import WebBannerParallaxEffect from '../../../../components/WebBannerParallaxEffect/WebBannerParallaxEffect'
import MomentumSection from '../../../../components/MomentumSection/MomentumSection'
import Cta from '../../../../components/CTA/cta'
import TestimonialsSection from '../../../../components/TestimonialSection/TestimonialSection'
import { testimonialsData } from '../../../Data'
import FAQs from '../../../../components/FAQs/Faqs'
import { homePageFAQs } from '../../../../components/FAQs/data'
import ContactSection from '../../../../components/InnerPageContact/Contact'

// Import all digital marketing service data
import {
  digitalMarketingBannerData as digitalMarketingCompanyBannerData,
  digitalMarketingBannerData2,
  digitalMarketingScrollSectionData as digitalMarketingCompanyScrollSectionData,
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

// Import ORM services data
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

// Import components for ORM services
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards'
import DevelopmentCardSlider from '../../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider'
import OurWorkSection from '../../../../components/LandingPage/OurWorkSection/OurWorkSection'
import ReviewsSlider from '../../../../components/LandingPage/ReviewsSlider/ReviewsSlider'
import StepSection from '../../../../components/LandingPage/StepSection/StepSection'
import TestimonialSlider from '../../../../components/LandingPage/TestimonialSlider/TestimonialSlider'
import LandingPageCounter from '../../../../components/LandingPage/LandingPageCounter/LandingPageCounter'
import WebBuilderCardSection from '../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection'
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
  webBuilderSectionClass,
} from '../../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData'

// Service data mapping for digital marketing services
const digitalMarketingServiceDataMap = {
  "digital-marketing-company": {
    bannerData: digitalMarketingCompanyBannerData,
    bannerData2: digitalMarketingBannerData2,
    scrollSectionData: digitalMarketingCompanyScrollSectionData,
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
};

// Generate metadata for each digital marketing service page
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

  // Get service data based on the serviceType parameter
  const serviceData = digitalMarketingServiceDataMap[serviceType];

  // If service type is digital-marketing-company, show the main digital marketing page
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

  // For other services, redirect to main services page
  if (!serviceData) {
    return (
      <div className="container text-center py-5">
        <h1>Service Not Found</h1>
        <p>The requested digital marketing service page could not be found.</p>
        <a href="/services" className="btn btn-primary">View All Services</a>
      </div>
    );
  }

  // Handle ORM services
  if (serviceType === "online-reputation-management-services") {
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
          heading={serviceData.industriesSectionData?.heading}
          description={serviceData.industriesSectionData?.description}
          showDescription={serviceData.industriesSectionData?.showDescription}
          items={serviceData.industriesCardsData || webBuilderCards}
          columnCount={3}
          sectionClass={webBuilderSectionClass}
          button={serviceData.industriesSectionData?.cta?.show || true}
          buttonText={serviceData.industriesSectionData?.cta?.text || "Secure My Reputation Today"}
          buttonHref={serviceData.industriesSectionData?.cta?.href || "#"}
          buttonClassName={serviceData.industriesSectionData?.cta?.className || "offer-btn primary"}
        />
        <ReviewsSlider />
        <ScrollSection
          data={serviceData.scrollSectionData}
          className="landingPageScrollSection"
          isIconShow={true}
        />
        {serviceType !== "online-reputation-management-services" && (
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
        <TestimonialSlider />
        <WebBanner
          data={serviceData.finalCTAData || serviceData.bannerData2}
          className="notHero order2 landingPageBanner2"
        />
        <FAQs
          faqs={serviceData.faqsData}
          isTwoCol={true}
          className="landingPageFaqs"
        />
        <ContactSection />
      </div>
    );
  }

  // This will handle other digital marketing services if needed
  return (
    <div className="container text-center py-5">
      <h1>Digital Marketing Service</h1>
      <p>This service is being developed.</p>
      <a href="/digital-marketing/digital-marketing-company" className="btn btn-primary">View Digital Marketing Services</a>
    </div>
  );
};

export default DigitalMarketingServicePage;
