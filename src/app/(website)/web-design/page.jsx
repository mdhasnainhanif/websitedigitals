import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { webDesignBannerData, whyChooseWebDesignData } from '@/app/Data/webDesignPageData'
import WhyChooseSection from '@/components/WebBuilder/WhyChooseSection/WhyChooseSection'
import IndustryTabs from '@/components/WebBuilder/IndustryTabs/IndustryTabs'
import { industryTabsWebDesignData, WebDesignPageFAQs } from '../../Data/webDesignPageData'
import FAQ from '@/components/FAQs/Faqs'

const page = () => {
  return (
    <div>
      <WebBanner data={webDesignBannerData} />
      <WhyChooseSection {...whyChooseWebDesignData} />
      <IndustryTabs
        data={industryTabsWebDesignData}
        heading="Professional Web Development Services That Fit All Industries"
        subheading="We create websites that reflect your industry's uniqueness, regardless of your niche."
      />
      <FAQ faqs={WebDesignPageFAQs} />
    </div>  
  )
}

export default page
