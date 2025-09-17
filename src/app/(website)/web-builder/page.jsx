// app/about/page.jsx
import blueCounterData from "@/app/Data/index";
import BlueCounterSection from "@/components/WebBuilder/BlueCounterSection";
import AwardSliderSection from "../../../components/AwardSliderSection";
import { awardBadgesData, industryTabsData } from "@/app/Data/index";
import IndustryTabs from "../../../components/WebBuilder/IndustryTabs/IndustryTabs";
import CaseStudySection from "../../../components/WebBuilder/CaseStudySection/CaseStudySection";
import { caseStudies } from "../../../components/WebBuilder/CaseStudySection/CaseStudySectionData";
import TestimonialsSection from "../../../components/TestimonialSection/TestimonialSection";
import {
  testimonialsData,
  webBuilderIndustriesCards,
  webBuilderIndustriesClassName,
  webBuilderIndustriesColumnCount,
  webBuilderIndustriesHeading,
} from "../../Data";
import TrustpilotSection from "../../../components/TrustpilotSection/TrustpilotSection";
import WebBuilderCardSection from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection";
import {
  webBuilderCards,
  webBuilderHeading,
  webBuilderColumnCount,
} from "../../../components/WebBuilder/WebBuilderCardSection/WebBuilderCardSectionData";
import CtaForm from "../../../components/WebBuilder/CtaForm/CtaForm";
import WhyChooseSection from "../../../components/WebBuilder/WhyChooseSection/WhyChooseSection";
import { whyChooseData } from "../../../components/WebBuilder/WhyChooseSection/WhyChooseSectionData";
import ScrollSection from "../../../components/ScrollSection/ScrollSection";
import { scrollSectionData } from "../../../components/ScrollSection/ScrollSectionData";
import DesignCustomizeCardSection from "../../../components/WebBuilder/DesignCustomizeCardSection/DesignCustomizeCardSection";
import { designCustomizeHeading, designCustomizeItems } from "../../../components/WebBuilder/DesignCustomizeCardSection/DesignCustomizeCardSectionData";
import StepSection from "../../../components/WebBuilder/StepSection/StepSection";
import { stepCTA, stepHeading, stepItems } from "../../../components/WebBuilder/StepSection/StepSectionData";
import AssistanceSection from "../../../components/WebBuilder/AssistanceSection/AssistanceSection";
import { assistanceBackground, assistanceHeading, assistanceItems } from "../../../components/WebBuilder/AssistanceSection/AssistanceSectionData";
import FAQ from "../../../components/FAQs/Faqs";
import { WebBuilderPageFAQs } from "../../../components/FAQs/data";
import BlogCard from "../../../components/Blog/BlogCard";
import { webBannerData } from "../../../components/WebBuilder/WebBanner/WebBannerData";
import WebBanner from "../../../components/WebBuilder/WebBanner/WebBanner";

export const metadata = {
  title: "Website Digitals | Web Builder to Build Your Dream Website Today",
  description:
    "Build faster using a smart web builder designed for real businesses. Simply pick a template, make changes to it, and then publish right away, for free.",
};

export default function WebBuilderPage() {
  return (
    <>
      {/* <WebBuilderBanner /> */}
      <WebBanner data={webBannerData} />
      <BlueCounterSection data={blueCounterData} />
      <AwardSliderSection items={awardBadgesData} />
      <IndustryTabs data={industryTabsData} />
      <CaseStudySection
        heading="Read What Our Client Has To Say About Working With Us!"
        items={caseStudies}
      />
      <TestimonialsSection data={testimonialsData} />
      <TrustpilotSection />
      <WebBuilderCardSection
        heading={webBuilderHeading}
        items={webBuilderCards}
        columnCount={webBuilderColumnCount}
      />
      <CtaForm />
      <WebBuilderCardSection
        heading={webBuilderIndustriesHeading}
        items={webBuilderIndustriesCards}
        columnCount={webBuilderIndustriesColumnCount}
        className={webBuilderIndustriesClassName} 
      />
      <WhyChooseSection {...whyChooseData} />
      <ScrollSection data={scrollSectionData} />
      <DesignCustomizeCardSection
        heading={designCustomizeHeading}
        items={designCustomizeItems}
      />
      <StepSection
        heading={stepHeading}
        items={stepItems}
        cta={stepCTA}
      />
      <AssistanceSection
        heading={assistanceHeading}
        background={assistanceBackground}
        items={assistanceItems}
      />
      <FAQ faqs={WebBuilderPageFAQs} />
      <BlogCard/>
    </>
  );
}