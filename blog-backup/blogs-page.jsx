import React from 'react'
import BlogTab from '@/components/BlogTab/BlogTab'
import { blogTabs } from '@/app/Data/blogTabSectionData'
import { postsByTab } from '@/app/Data/blogTabSectionData'
import { blogBannerData } from '@/app/Data/blogTabSectionData'
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner'

const page = () => {
  return (
    <div>
      <WebBanner data={blogBannerData} className="withoutImg blogBanner" col="col-md-8" />
      <BlogTab tabs={blogTabs} postsByTab={postsByTab} className="blogTab" />
    </div>
  )
}

export default page
