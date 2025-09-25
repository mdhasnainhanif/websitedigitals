import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { landingPageBannerData } from '@/app/Data/landingPageData'
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards'
import DevelopmentCardSlider from '../../../components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider'
import { landingPageScrollSectionData, webDevelopmentServicesData } from '../../Data/landingPageData'
import OurWorkSection from '../../../components/LandingPage/OurWorkSection/OurWorkSection'
import ScrollSection from '../../../components/ScrollSection/ScrollSection'
import { scrollSectionData } from '../../../components/ScrollSection/ScrollSectionData'
import ReviewsSlider from '../../../components/LandingPage/ReviewsSlider/ReviewsSlider'
import StepSection from '../../../components/LandingPage/StepSection/StepSection'
import TechnologiesSlider from '../../../components/LandingPage/TechnologySlider/TechnologySlider'



const page = () => {
  return (
    <div>
      <WebBanner islandingPage={true} data={landingPageBannerData} className="withoutImg landingPageBanner" col="col-md-11" />
      <DevelopmentCards />
      <DevelopmentCardSlider webDevelopmentServicesData={webDevelopmentServicesData} />
      <OurWorkSection />
      <ScrollSection data={landingPageScrollSectionData} className="landingPageScrollSection" isIconShow={true} />
      <ReviewsSlider />
      <StepSection />
      <TechnologiesSlider />
    </div>
  )
}

export default page