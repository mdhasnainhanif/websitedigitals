import { Metadata } from 'next';
import WebBuilderInnerBanner from '@/components/WebBuilderInner/WebBuilderBanner';
import FeaturesSection from '@/components/WebBuilderInner/FeaturesSection';
import ComprehensiveFeaturesSection from '@/components/WebBuilderInner/ComprehensiveFeaturesSection';
import BenefitsSection from '@/components/WebBuilderInner/BenefitsSection';
import AdvantagesSection from '@/components/WebBuilderInner/AdvantageSection';
import CTASection from '@/components/WebBuilderInner/CTASection';
import FinalCTASection from '@/components/WebBuilderInner/FinalCTASection';
import { auctionPageData } from '@/app/Data/webBuilderData';
import Faqs from '@/components/FAQs/Faqs';
import { WebAuctionPageFAQs } from '@/components/FAQs/data';

export const metadata: Metadata = {
  title: 'Online Auction Website Builder - Website Digitals',
  description: 'Create an online auction website with Website Digitals. Use our auction website builder to design, build, and grow your auction site now. Start building now!',
};

export default function OnlineAuctionWebsiteBuilderPage() {
  return (
    <>
      <WebBuilderInnerBanner
        title={auctionPageData.banner.title}
        description={auctionPageData.banner.description}
        image={auctionPageData.banner.image}
        breadcrumbs={auctionPageData.breadcrumbs}
        cta={auctionPageData.banner.cta}
      />
      
      <FeaturesSection
        title={auctionPageData.features.title}
        description={auctionPageData.features.description}
        tabs={auctionPageData.features.tabs}
      />
      
      <ComprehensiveFeaturesSection
        title={auctionPageData.comprehensiveFeatures.title}
        description={auctionPageData.comprehensiveFeatures.description}
        tabs={auctionPageData.comprehensiveFeatures.tabs}
      />
      
      <BenefitsSection
        title={auctionPageData.benefits.title}
        description={auctionPageData.benefits.description}
        image={auctionPageData.benefits.image}
        features={auctionPageData.benefits.features}
        cta={auctionPageData.benefits.cta}
      />
      
      <AdvantagesSection
        title={auctionPageData.advantages.title}
        description={auctionPageData.advantages.description}
        items={auctionPageData.advantages.items}
      />
      
      <CTASection
        title={auctionPageData.cta.title}
        description={auctionPageData.cta.description}
        image={auctionPageData.cta.image}
        cta={auctionPageData.cta.cta}
      />
      
      <FinalCTASection
        title={auctionPageData.finalCta.title}
        description={auctionPageData.finalCta.description}
        image={auctionPageData.finalCta.image}
        cta={auctionPageData.finalCta.cta}
      />
      
      <Faqs faqs={WebAuctionPageFAQs as any} sectionClassName='pt-0'/>

    </>
  );
}

