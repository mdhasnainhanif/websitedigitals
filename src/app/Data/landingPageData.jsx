export const landingPageBannerData = {
    breadcrumb: {
      home: { label: "Home", href: "/" },
      current: { label: "Landing Page", href: "/landing-page" },
    },
    heading: "Plan, [[Create]], And [[Succeed]] With A Web Development Company",
    description: ["An expensive or outdated website can drain your budget, cost you leads, and weaken customer trust. To solve this,\n Website Digitals provides custom web development built for speed, security, scalability, and affordability.\nWe create websites that look exceptional, load fast, and work flawlessly on every device, handled \n start to finish by our experienced full-stack team.\nFrom business websites to ecommerce platforms, we deliver digital experiences that keep \n visitors engaged and ready to act.",
      {
        text: "",
        link: { text: "", href: "/", target: "_blank" },
        afterText:
          "",
      },
    ],
    isCta: false,
    cta: {
      text: "Get Started Now",
      href: "/brief"
    },
    image: null, // no image in this section
  };

export const developmentCardsData = [
  {
    id: 1,
    title: "Supports Your Goals",
    description: "An effective website is built to align with your business objectives from day one. Scalable and secure development ensures your platform can expand with your growth while safeguarding sensitive data. By applying responsive design and mobile-first principles, your site stays accessible to users on any device, enabling business expansion without costly rebuilds.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 2,
    title: "Builds Trust",
    description: "Visitors are more likely to engage with brands that offer a fast, secure, and visually consistent online experience. Certified developers who follow quality assurance standards such as ISO 9001 for process reliability and WCAG accessibility guidelines for inclusivity create platforms that inspire confidence. Beyond technical compliance, being featured in respected directories like Clutch and GoodFirms further reinforces credibility and professionalism",
    icon: "target",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Drives Results",
    description: "Modern web development focuses on more than visual appeal. SEO-driven practices that emphasize web accessibility, performance optimization, and adherence to search engine best practices make your site easier to discover and faster to navigate. These enhancements are commonly associated with higher engagement and improved conversion rates, turning more visitors into customers.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 4,
    title: "Leverages Advanced Technologies",
    description: "Staying competitive means choosing the right tools for your needs. Modern frameworks such as React, Angular, and Node.js are the latest technologies that support fast, interactive, and maintainable websites, helping ensure your platform delivers strong performance today while remaining flexible for future advancements.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 5,
    title: "Creates a Better User Experience",
    description: "Professional web development companies carefully consider how every design element, feature, and functionality impacts the end user. This attention to detail results in intuitive navigation, consistent branding, and seamless interaction that encourage visitors to stay longer, explore more, and take meaningful action.",
    icon: "target",
    isHighlighted: false
  }
];

export { landingPageBannerData, developmentCardsData };