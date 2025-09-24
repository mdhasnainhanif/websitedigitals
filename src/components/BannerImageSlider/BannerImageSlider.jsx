import React from "react";

const imgSlider = [
  {
    src: "/assets/images/landingpage/imgslide1.webp",
    alt: "slideImg",
  },
  
  {
    src: "/assets/images/landingpage/imgslide2.webp",
    alt: "slideImg",
  },
  {
    src: "/assets/images/landingpage/imgslide3.webp",
    alt: "slideImg",
  },
  {
    src: "/assets/images/landingpage/imgslide4.webp",
    alt: "slideImg",
  },
  {
    src: "/assets/images/landingpage/imgslide1.webp",
    alt: "slideImg",
  },
  
  {
    src: "/assets/images/landingpage/imgslide2.webp",
    alt: "slideImg",
  },
  {
    src: "/assets/images/landingpage/imgslide3.webp",
    alt: "slideImg",
  },
  {
    src: "/assets/images/landingpage/imgslide4.webp",
    alt: "slideImg",
  },
];

const BannerImageSlider = () => {
  return (
    <div className="imgSlideRow tech-track">
      <div className="imgLeftSlider">
        {imgSlider.map((item, index) => (
          <div className="slideImg" key={index}>
            <img src={item.src} alt={item.alt} />
          </div>
        ))}
        {/* <div className="slideImg">
          <img src="/assets/images/landingpage/imgslide1.webp" alt="slideImg" />
        </div> */}
      </div>
    </div>
  );
};

export default BannerImageSlider;
