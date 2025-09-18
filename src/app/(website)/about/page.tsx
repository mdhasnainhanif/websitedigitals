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


export const metadata = {
  title: 'About Us | Website Digitals',
  description:
    'Learn about Website Digitals — your dedicated team for responsive web design, secure code, and standout branding.',
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <RoiSection />
      <DesignerSection />
      <TeamSection />
      <SupportSection />
      <Cta/>
      <TestimonialsSection className="bg-dark" data={testimonialsData} />
      <div className='section-padding pb-0'>
      <Faqs faqs={AboutPageFAQs as any} />
      </div>
      <ContactSection />
      {/* Add more sections below if needed */}
    </>
  );
}
