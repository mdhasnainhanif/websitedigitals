import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { webDesignBannerData, whyChooseWebDesignData } from '@/app/Data/webDesignPageData'
import WhyChooseSection from '@/components/WebBuilder/WhyChooseSection/WhyChooseSection'

const page = () => {
  return (
    <div>
      <WebBanner data={webDesignBannerData} />
      <WhyChooseSection {...whyChooseWebDesignData} />
    </div>
  )
}

export default page
