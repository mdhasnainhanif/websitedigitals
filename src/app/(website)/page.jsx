import HeroBanner from "../../components/Home/HeroBanner/HeroBanner";
import ImageSlideSection from "../../components/ui/ImageSlideSection";
import { imageSlideSectionData } from "../Data";

export default function Home() {
  return (
    <div>
      <HeroBanner />
      <ImageSlideSection imageSlideSectionData={imageSlideSectionData} />
    </div>
  )
}