import React from 'react'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'
import { portfolioBannerData } from '../../Data/portfolioPageData'
import PortfolioSection from '@/components/Home/PortfolioSection/PortfolioSection'
import { tabs, itemsByTab } from '../../Data'

const page = () => {
  return (
    <div>
      <WebBanner data={portfolioBannerData} className="withoutImg" col="col-md-8" />
      <PortfolioSection tabs={tabs} itemsByTab={itemsByTab} className="portfolioSection" />
    </div>
  )
}

export default page
