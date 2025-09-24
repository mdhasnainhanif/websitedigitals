import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { landingPageBannerData } from '@/app/Data/landingPageData'
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards'



const page = () => {
  return (
    <div>
      <WebBanner islandingPage={true} data={landingPageBannerData} className="withoutImg landingPageBanner" col="col-md-11" />
      <DevelopmentCards />
    </div>
  )
}

export default page