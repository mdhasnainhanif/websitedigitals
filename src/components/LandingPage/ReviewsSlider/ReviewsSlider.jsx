import React from "react";

const imgSlider = [
  {
    src: "/assets/images/work/r1.png",
    alt: "slideImg",
  },

  {
    src: "/assets/images/work/r2.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r3.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r4.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r1.png",
    alt: "slideImg",
  },

  {
    src: "/assets/images/work/r2.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r3.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r4.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r1.png",
    alt: "slideImg",
  },

  {
    src: "/assets/images/work/r2.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r3.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r4.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r1.png",
    alt: "slideImg",
  },

  {
    src: "/assets/images/work/r2.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r3.png",
    alt: "slideImg",
  },
  {
    src: "/assets/images/work/r4.png",
    alt: "slideImg",
  },
];

const ReviewsSlider = ({ className = "" }) => {
  return (
    <section className={`reviewsSliderMain ${className}`}>
      <div className="imgSlideRow reviewsSlider">
        <div className="imgLeftSlider">
          {imgSlider.map((item, index) => (
            <div className="slideImg" key={index}>
              <img src={item.src} alt={item.alt} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSlider;
