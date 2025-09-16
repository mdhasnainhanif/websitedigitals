// app/about/page.jsx
import blueCounterData from '@/app/Data/index';
import WebBuilderBanner from '@/components/WebBuilder/WebBuilderBanner';
import BlueCounterSection from '@/components/WebBuilder/BlueCounterSection';
import AwardSliderSection from '../../../components/AwardSliderSection';
import { awardBadgesData } from '@/app/Data/index';

export const metadata = {
  title: 'Website Digitals | Web Builder to Build Your Dream Website Today',
  description: 'Build faster using a smart web builder designed for real businesses. Simply pick a template, make changes to it, and then publish right away, for free.',
};

export default function WebBuilderPage() {
  return (
    <>
     
      <WebBuilderBanner />
      <BlueCounterSection data={blueCounterData} />
      <AwardSliderSection items={awardBadgesData} />
    </>
  );
}
