import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { landingPageBannerData } from '@/app/Data/landingPageData'
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards'
import DevelopmentCardSlider from '../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider'
import { landingPageBannerData2, landingPageScrollSectionData, webDevelopmentServicesData } from '../../Data/landingPageData'
import OurWorkSection from '../../../components/LandingPage/OurWorkSection/OurWorkSection'
import ScrollSection from '../../../components/ScrollSection/ScrollSection'
import ReviewsSlider from '../../../components/LandingPage/ReviewsSlider/ReviewsSlider'
import StepSection from '../../../components/LandingPage/StepSection/StepSection'
import TechnologiesSlider from '../../../components/LandingPage/TechnologySlider/TechnologySlider'
import TestimonialSlider from '../../../components/LandingPage/TestimonialSlider/TestimonialSlider'
import Faqs from '../../../components/FAQs/Faqs'
import { homePageFAQs } from '../../../components/FAQs/data'
import BlogSection from '../../../components/LandingPage/BlogSection/BlogSection'
import ContactSection from '../../../components/LandingPage/ContactSection/ContactSection'
import LandingPageCounter from '../../../components/LandingPage/LandingPageCounter/LandingPageCounter'
import WebBuilderCardSection from '../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection'
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
  webBuilderSectionClass,
} from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData";
import PlatformsSpecialize from '../../../components/LandingPage/PlatformsSpecialize/PlatformsSpecialize'
import { platformsData } from '../../Data/landingPageData';
import LandingBannerForm from '../../../components/LandingPage/LandingBannerForm/LandingBannerForm'




const page = () => {
  return (
    <div>
      <WebBanner islandingPage={true} data={landingPageBannerData} className="withoutImg landingPageBanner" col="col-md-6" />
      <LandingPageCounter />
      <DevelopmentCards />
      <OurWorkSection />
      <DevelopmentCardSlider webDevelopmentServicesData={webDevelopmentServicesData} />
      <WebBuilderCardSection
        heading={webBuilderHeading}
        items={webBuilderCards}
        columnCount={webBuilderColumnCount}
        sectionClass={webBuilderSectionClass}
      />
      <ReviewsSlider />
      <ScrollSection data={landingPageScrollSectionData} className="landingPageScrollSection" isIconShow={true} />
      <StepSection />
      <PlatformsSpecialize data={platformsData} />
      {/* <TechnologiesSlider /> */}
      <TestimonialSlider />
      <WebBanner data={landingPageBannerData2} className="notHero order2 landingPageBanner2" />
      <Faqs faqs={homePageFAQs} isTwoCol={true} className="landingPageFaqs" />
      <BlogSection />
      <ContactSection />
    </div>
  )
}

export default page