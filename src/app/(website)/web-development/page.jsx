import React from "react";
import WebBanner from "@/components/WebBuilder/WebBanner/WebBanner";
import { webBannerData } from "@/components/WebBuilder/WebBanner/WebBannerData";
import blueCounterData from "@/app/Data";
import BlueCounterSection from "@/components/WebBuilder/BlueCounterSection";
import AwardSliderSection from "@/components/AwardSliderSection";
import { awardBadgesData } from "@/app/Data";
import ScrollSection from "@/components/ScrollSection/ScrollSection";
import { BlueCtaSectionData, caseStudies, webDevCards, webDevClassName, webDevColumnCount, webDevelopmentCards, webDevelopmentColumnCount, webDevelopmentScrollSectionData, WebDevStepHeading, WebDevStepItems, WebDevStepCTA, WebDevFAQs } from "../../Data/web-development";
import { industryTabsData, testimonialsData } from "../../Data";
import IndustryTabs from "../../../components/WebBuilder/IndustryTabs/IndustryTabs";
import CaseStudySection from "../../../components/WebBuilder/CaseStudySection/CaseStudySection";
import TestimonialsSection from "../../../components/TestimonialSection/TestimonialSection";
import TrustpilotSection from "@/components/TrustpilotSection/TrustpilotSection";
import WebBuilderCardSection from "@/components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import TechnologiesSlider from "@/components/TechnologiesSlider/TechnologiesSlider";
import BlueCtaSection from "@/components/BlueCtaSection/BlueCtaSection";
import StepSection from "@/components/WebBuilder/StepSection/StepSection";
import AssistanceSection from "@/components/WebBuilder/AssistanceSection/AssistanceSection";
import { assistanceBackground, assistanceHeading, assistanceItems } from "@/components/WebBuilder/AssistanceSection/AssistanceSectionData";
import FAQ from "@/components/FAQs/Faqs";
import Blog from "@/components/Blog/Blog"; 

const page = () => {
  return (
    <div>
      <WebBanner data={webBannerData} />
      <BlueCounterSection data={blueCounterData} />
      <AwardSliderSection items={awardBadgesData} />
      <ScrollSection data={webDevelopmentScrollSectionData} />
      <IndustryTabs
        data={industryTabsData}
        heading="Professional Web Development Services That Fit All Industries"
        subheading="We create websites that reflect your industry's uniqueness, regardless of your niche."
      />
      <CaseStudySection
        className="bgLight"
        heading="Read What Our Client Has To Say About Working With Us!"
        items={caseStudies}
      />
      <TestimonialsSection data={testimonialsData} className="bg-light" />
      <TrustpilotSection />
      <WebBuilderCardSection 
        heading="Custom Website Development Company That Delivers What You Want"
        items={webDevelopmentCards}
        columnCount={webDevelopmentColumnCount}
        className="border-0"
      />
      <TechnologiesSlider />
      <WebBuilderCardSection
        heading="Design, Customize, and Publish While Everyone Else Is Planning"
        items={webDevCards}
        className={webDevClassName}
        columnCount={webDevColumnCount}
        button="Get Started - It's Free"
      />
      <BlueCtaSection data={BlueCtaSectionData} />
      <StepSection
        heading={WebDevStepHeading}
        items={WebDevStepItems}
        cta={WebDevStepCTA}
      />
      <AssistanceSection
        heading={assistanceHeading}
        background={assistanceBackground}
        items={assistanceItems}
      />
      <FAQ faqs={WebDevFAQs} />
      <Blog/>
    </div>
  );
};

export default page;
