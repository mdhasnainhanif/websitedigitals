import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { landingPageBannerData } from '@/app/Data/landingPageData'



const page = () => {
  return (
    <div>
      <WebBanner islandingPage={true} data={landingPageBannerData} className="withoutImg landingPageBanner" col="col-md-11" />
    </div>
  )
}

export default page