import React from 'react'
import { digitalMarketingBannerData } from '@/app/Data/digitalMarketingPageData'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { digitalMarketingAfterBannerData, digitalMarketingRoiSectionData, 
  digitalMarketingThirdBannerData, digitalMarketingFourthBannerData, digitalMarketingFifthBannerData, 
  digitalMarketingSixthBannerData, digitalMarketingScrollSectionData, whyChooseDigitalMarketingData, 
  digitalMarketingPageData, 
  webBannerParallaxDigitalMarketingLastData,
  webBannerParallaxData,
  momentumDataDigitalMarketing} from '../../Data/digitalMarketingPageData'
import RoiSection from '@/components/About/RoiSection'
import ScrollSection from '@/components/ScrollSection/ScrollSection'
import WhyChooseSection from '@/components/WebBuilder/WhyChooseSection/WhyChooseSection'
import DigitalMarketingServices from '../../../components/DigitalMarketing/DigitalMarketingServices/DigitalMarketingServices'
import WebBannerParallaxEffect from '../../../components/WebBannerParallaxEffect/WebBannerParallaxEffect'
import MomentumSection from '../../../components/MomentumSection/MomentumSection'
import Cta from '../../../components/CTA/cta'
import TestimonialsSection from '../../../components/TestimonialSection/TestimonialSection'
import { testimonialsData } from '../../Data'
import FAQs from '../../../components/FAQs/Faqs'
import { homePageFAQs } from '../../../components/FAQs/data'
import ContactSection from '../../../components/InnerPageContact/Contact'


const page = () => {
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
      <FAQs faqs={homePageFAQs}/>
      <ContactSection />
    </div>
  )
}

export default page
