import { Metadata } from 'next';
import WebBuilderInnerBanner from '@/components/WebBuilderInner/WebBuilderBanner';
import FeaturesSection from '@/components/WebBuilderInner/FeaturesSection';
import ComprehensiveFeaturesSection from '@/components/WebBuilderInner/ComprehensiveFeaturesSection';
import BenefitsSection from '@/components/WebBuilderInner/BenefitsSection';
import AdvantagesSection from '@/components/WebBuilderInner/AdvantageSection';
import CTASection from '@/components/WebBuilderInner/CTASection';
import FinalCTASection from '@/components/WebBuilderInner/FinalCTASection';
import { dropshippingPageData } from '@/app/Data/webBuilderData';
import Faqs from '@/components/FAQs/Faqs';
import { WebDropshippingPageFAQs } from '@/components/FAQs/data';

export const metadata: Metadata = {
  title: 'Best Ecommerce Website Builder for All Business Sizes',
  description: 'Looking for the best ecommerce website builder? Website Digitals offers solutions tailored for every US business. Get started now.',
};

export default function DropshippingPage() {
  return (
    <>
      <WebBuilderInnerBanner
        title={dropshippingPageData.banner.title}
        description={dropshippingPageData.banner.description}
        image={dropshippingPageData.banner.image}
        breadcrumbs={dropshippingPageData.breadcrumbs}
        cta={dropshippingPageData.banner.cta}
      />
      
      <FeaturesSection
        title={dropshippingPageData.features.title}
        description={dropshippingPageData.features.description}
        tabs={dropshippingPageData.features.tabs}
      />
      
      <ComprehensiveFeaturesSection
        title={dropshippingPageData.comprehensiveFeatures.title}
        description={dropshippingPageData.comprehensiveFeatures.description}
        tabs={dropshippingPageData.comprehensiveFeatures.tabs}
      />
      
      <BenefitsSection
        title={dropshippingPageData.benefits.title}
        description={dropshippingPageData.benefits.description}
        image={dropshippingPageData.benefits.image}
        features={dropshippingPageData.benefits.features}
        cta={dropshippingPageData.benefits.cta}
      />
      
      <AdvantagesSection
        title={dropshippingPageData.advantages.title}
        description={dropshippingPageData.advantages.description}
        items={dropshippingPageData.advantages.items}
      />
      
      <CTASection
        title={dropshippingPageData.cta.title}
        description={dropshippingPageData.cta.description}
        image={dropshippingPageData.cta.image}
        cta={dropshippingPageData.cta.cta}
      />
      
      <FinalCTASection
        title={dropshippingPageData.finalCta.title}
        description={dropshippingPageData.finalCta.description}
        image={dropshippingPageData.finalCta.image}
        cta={dropshippingPageData.finalCta.cta}
      />
      
      <Faqs faqs={WebDropshippingPageFAQs as any} sectionClassName='pt-0'/>
      

    </>
  );
}

