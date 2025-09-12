import HeroBanner from "../../components/Home/HeroBanner/HeroBanner";
import PortfolioSection from "../../components/Home/PortfolioSection/PortfolioSection";
import TestimonialsSection from "../../components/TestimonialSection/TestimonialSection";
import ImageSlideSection from "../../components/ui/ImageSlideSection";
import { imageSlideSectionData, itemsByTab, tabs, testimonialsData } from "../Data";


export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ImageSlideSection imageSlideSectionData={imageSlideSectionData} />
      <PortfolioSection tabs={tabs} itemsByTab={itemsByTab} />
      <ImageSlideSection imageSlideSectionData={imageSlideSectionData} className="blue-section1" />
      <TestimonialsSection data={testimonialsData} />
    </div>
  )
}