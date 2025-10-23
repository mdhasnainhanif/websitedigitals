// app/about/page.jsx
import AboutHero from '@/components/About/AboutHero';
import RoiSection from '@/components/About/RoiSection';
import DesignerSection from '@/components/About/DesignerSection';
import TeamSection from '@/components/About/TeamSection';
import SupportSection from '@/components/About/SupportSection';
import Cta from '@/components/CTA/cta';
import TestimonialsSection from '@/components/TestimonialSection/TestimonialSection';
import { testimonialsData } from '@/app/Data';
import Faqs from '@/components/FAQs/Faqs';
import { AboutPageFAQs } from '@/components/FAQs/data';
import ContactSection from '@/components/InnerPageContact/Contact';
import { aboutPageData, aboutPageStatsData, aboutPageWhoWeAreData } from '@/app/Data/aboutPageData';
import WebBanner from '@/components/WebBuilder/WebBanner/WebBanner';
import LandingPageCounter from '@/components/LandingPage/LandingPageCounter/LandingPageCounter';


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
      <WebBanner data={aboutPageWhoWeAreData} islandingPage={false} className="notHero order2 landingPageBanner2"/>
      <DesignerSection />
      <TeamSection />
      <SupportSection />
      <Cta/>
      <TestimonialsSection className="bg-dark" data={testimonialsData} />
      <div className='section-padding pb-0'>
      <Faqs faqs={AboutPageFAQs as any} />
      </div>
      <ContactSection />
    </>
  );
}
