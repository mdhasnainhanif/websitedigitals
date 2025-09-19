import React from 'react'
import { digitalMarketingBannerData } from '@/app/Data/digitalMarketingPageData'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { digitalMarketingAfterBannerData, digitalMarketingRoiSectionData, digitalMarketingThirdBannerData, digitalMarketingFourthBannerData, digitalMarketingFifthBannerData, digitalMarketingSixthBannerData, digitalMarketingScrollSectionData } from '../../Data/digitalMarketingPageData'
import RoiSection from '@/components/About/RoiSection'
import ScrollSection from '@/components/ScrollSection/ScrollSection'

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
    </div>
  )
}

export default page
