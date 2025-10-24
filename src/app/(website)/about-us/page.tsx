import TeamSection from '@/components/About/TeamSection';
import Cta from '@/components/CTA/cta';
import Faqs from '@/components/FAQs/Faqs';
import ContactSection from "../../../components/LandingPage/ContactSection/ContactSection";
import { aboutPageData, aboutPageStatsData, aboutPageWhoWeAreData, aboutPageWhoWeAreData2, aboutPageWhoWeAreData3, aboutUSFAQsData, aboutIndustriesSectionData, aboutIndustriesCardsData, aboutDevelopmentServicesSectionData, aboutDevelopmentServicesData, aboutPageCtaData, aboutImpactSectionData, aboutImpactCardsData } from '@/app/Data/aboutPageData';
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner';
import LandingPageCounter from '@/components/LandingPage/LandingPageCounter/LandingPageCounter';
import OurWorkSection from '@/components/LandingPage/OurWorkSection/OurWorkSection';
import WebBuilderCardSection from '@/components/WebBuilder/WebBuilderCardSection/WebBuilderCardSection';
import DevelopmentCardSlider from '@/components/LandingPage/DevelopmentCardSlider/DevelopmentCardSlider';
import ReviewsSlider from '@/components/LandingPage/ReviewsSlider/ReviewsSlider';
import TestimonialSlider from '@/components/LandingPage/TestimonialSlider/TestimonialSlider';
import DevelopmentCards from '@/components/LandingPage/DevelopmentCards/DevelopmentCards';


export const metadata = {
  title: 'About Us | Website Digitals',
  description:
    'Learn about Website Digitals — your dedicated team for responsive web design, secure code, and standout branding.',
};

export default function AboutPage() {
  return (
    <>
      <WebBanner data={aboutPageData} islandingPage={true} className="withoutImg landingPageBanner"
        col="col-md-6" />
      <LandingPageCounter statsData={aboutPageStatsData as any} isHeading={true} heading="Our Achievements" />
      <WebBanner data={aboutPageWhoWeAreData} islandingPage={false} className="notHero order2 landingPageBanner2 noClipPath" />
      {/* <WebBanner data={aboutPageWhoWeAreData2} islandingPage={false} className="notHero order1 landingPageBanner2 bg-transparent text-dark noClipPath" /> */}
      <DevelopmentCards
        sectionData={aboutImpactSectionData as any}
        cardsData={aboutImpactCardsData as any}
        displayClass={aboutImpactSectionData.displayClass}
      />
      {/* <WebBanner data={aboutPageWhoWeAreData3} islandingPage={false} className="notHero order2 landingPageBanner2 noClipPath" /> */}
      <OurWorkSection className="noClipPath" />
      <WebBuilderCardSection
        heading={aboutIndustriesSectionData.heading}
        description={aboutIndustriesSectionData.description}
        showDescription={aboutIndustriesSectionData.showDescription}
        items={aboutIndustriesCardsData as any}
        columnCount={2}
        className="industry-card"
        sectionClass="bg-light noClipPath"
        button={aboutIndustriesSectionData.cta.show}
        buttonText={aboutIndustriesSectionData.cta.text}
        buttonHref={aboutIndustriesSectionData.cta.href}
        buttonClassName={aboutIndustriesSectionData.cta.className}
      />
      <ReviewsSlider className="noRotate" />
      <DevelopmentCardSlider
        sectionData={aboutDevelopmentServicesSectionData as any}
        servicesData={aboutDevelopmentServicesData as any}
        className='noClipPath mt-0 max-w-100'
      />
      <TeamSection />
      <TestimonialSlider />
      <Cta
        title={aboutPageCtaData.heading}
        description={aboutPageCtaData.description}
        buttonText={aboutPageCtaData.cta.text}
        buttonHref={aboutPageCtaData.cta.href}
        className="pt-0 pb-0"
      />
      <div className='section-padding pb-0'>
        <Faqs
          title="Frequently Asked Questions"
          faqs={aboutUSFAQsData as any}
          isTwoCol={true}
        />
      </div>
      <ContactSection />
    </>
  );
}
