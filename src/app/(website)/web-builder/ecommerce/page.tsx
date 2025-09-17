import { Metadata } from 'next';
import WebBuilderInnerBanner from '@/components/WebBuilderInner/WebBuilderBanner';
import FeaturesSection from '@/components/WebBuilderInner/FeaturesSection';
import ComprehensiveFeaturesSection from '@/components/WebBuilderInner/ComprehensiveFeaturesSection';
import BenefitsSection from '@/components/WebBuilderInner/BenefitsSection';
import AdvantagesSection from '@/components/WebBuilderInner/AdvantageSection';
import CTASection from '@/components/WebBuilderInner/CTASection';
import FinalCTASection from '@/components/WebBuilderInner/FinalCTASection';
import { ecommercePageData } from '@/app/Data/webBuilderData';
import Faqs from '@/components/FAQs/Faqs';
import { WebEcommercePageFAQs } from '@/components/FAQs/data';

export const metadata: Metadata = {
  title: 'Best Ecommerce Website Builder for All Business Sizes',
  description: 'Looking for the best ecommerce website builder? Website Digitals offers solutions tailored for every US business. Get started now.',
};

export default function EcommercePage() {
  return (
    <>
      <WebBuilderInnerBanner
        title={ecommercePageData.banner.title}
        description={ecommercePageData.banner.description}
        image={ecommercePageData.banner.image}
        breadcrumbs={ecommercePageData.breadcrumbs}
        cta={ecommercePageData.banner.cta}
      />
      
      <FeaturesSection
        title={ecommercePageData.features.title}
        description={ecommercePageData.features.description}
        tabs={ecommercePageData.features.tabs}
      />
      
      <ComprehensiveFeaturesSection
        title={ecommercePageData.comprehensiveFeatures.title}
        description={ecommercePageData.comprehensiveFeatures.description}
        tabs={ecommercePageData.comprehensiveFeatures.tabs}
      />
      
      <BenefitsSection
        title={ecommercePageData.benefits.title}
        description={ecommercePageData.benefits.description}
        image={ecommercePageData.benefits.image}
        features={ecommercePageData.benefits.features}
        cta={ecommercePageData.benefits.cta}
      />
      
      <AdvantagesSection
        title={ecommercePageData.advantages.title}
        description={ecommercePageData.advantages.description}
        items={ecommercePageData.advantages.items}
      />
      
      <CTASection
        title={ecommercePageData.cta.title}
        description={ecommercePageData.cta.description}
        image={ecommercePageData.cta.image}
        cta={ecommercePageData.cta.cta}
      />
      
      <FinalCTASection
        title={ecommercePageData.finalCta.title}
        description={ecommercePageData.finalCta.description}
        image={ecommercePageData.finalCta.image}
        cta={ecommercePageData.finalCta.cta}
      />
      
      <Faqs faqs={WebEcommercePageFAQs as any} sectionClassName='pt-0'/>
      

    </>
  );
}

