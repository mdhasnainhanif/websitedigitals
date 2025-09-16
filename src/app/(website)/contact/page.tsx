// app/about/page.jsx
import ContactBanner from '@/components/Contact/ContactForm';
import PartnerSection from '@/components/Contact/PartnerSection';
import GlobalDeliverySection from '@/components/Contact/GlobalDelivery';
import Faqs from '@/components/FAQs/Faqs';
import { ContactPageFAQs } from '@/components/FAQs/data';


export const metadata = {
  title: 'Contact Us | Website Digitals',
  description:
    'Learn about Website Digitals — your dedicated team for responsive web design, secure code, and standout branding.',
};

export default function ContactPage() {
  return (
    <>
      <ContactBanner />
      <PartnerSection />
      <GlobalDeliverySection />
        <Faqs faqs={ContactPageFAQs as any} />
      {/* Add more sections below if needed */}
    </>
  );
}
