import React from "react";
import styles from "./TechnologyNameSlider.module.css";

const technologySliderData = [
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
  "Wordpress",
  "Shopify",
  "Mobile Friendly",
];

const TechnologyNameSlider = () => {
  return (
    <div className={styles.technologyNameSlider}>
      <div className={styles.technologyNameSliderContainer}>
        {technologySliderData.map((item, index) => (
          <div className={styles.slideItem} key={index}>
            <p>{item}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechnologyNameSlider;
