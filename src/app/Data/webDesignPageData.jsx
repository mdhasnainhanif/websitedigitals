// /data/webBannerData.js

import { BagIcon } from "../../icons";

export const webDesignBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Web Design", href: "/web-design" },
  },
  heading: "Web Design Company Offering Custom Design Solutions",
  description: [
    "Most business websites struggle to convert visitors into clients due to weak design and poor user experience",
    "At Website Digitals, we build performance-driven websites that integrate responsive design, intuitive UX, and modern branding to enhance your online presence.",
    "As a trusted web design company, we deliver custom web design services that are mobile-friendly, SEO-ready, and tailored to the needs of both small businesses and large enterprises.",
    "• Convert more leads with engaging & action-driven designs.",
    "• SEO & mobile-ready for visibility on search and all devices.",
    "• Built for growth with scalable & custom web solutions."
  ],
  
  formConfig: {
    buttonText: "Let’s Build Your Website",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-web-design", label: "Custom Web Design" },
      { value: "responsive-design", label: "Responsive Design" },
      { value: "ecommerce-design", label: "E-commerce Design" },
      { value: "landing-page-design", label: "Landing Page Design" },
      { value: "ui-ux-design", label: "UI/UX Design" },
      { value: "redesign", label: "Website Redesign" }
    ],
    initialValues: {
      help: "custom-web-design"
    }
  },
};

export { webDesignBannerData };

// Stats Counter Data
export const webDesignStatsData = [
  {
    id: "websites-launched",
    value: 250,
    label: "Websites Launched",
    icon: "/assets/images/icons/websites-icon.svg",
    suffix: "+",
  },
  {
    id: "client-retention",
    value: 98,
    label: "Client Retention",
    icon: "/assets/images/icons/retention-icon.svg",
    suffix: "%",
  },
  {
    id: "traffic-growth",
    value: 400,
    label: "Organic Traffic Growth",
    icon: "/assets/images/icons/traffic-icon.svg",
    suffix: "%",
  },
  {
    id: "ecommerce-sites",
    value: 300,
    label: "Ecommerce & WordPress Sites",
    icon: "/assets/images/icons/ecommerce-icon.svg",
    suffix: "+",
  }
];

// Why Choose Section Data
export const webDesignWhyChooseData = {
  heading: "Why Choosing the Right Web Design Company Matters",
  items: [
    {
      title: "Responsive Design That Engages",
      description: "A website design company ensures your site adapts to smartphones, tablets, and desktops. This means faster load times for stronger SEO, consistent branding across every screen, and a user experience that keeps visitors engaged longer.",
      icon: "/assets/images/icons/responsive-icon.svg",
      col: "col-12 col-md-6 col-lg-6",
    },
    {
      title: "UX That Drives Conversions",
      description: "With smart UX design, businesses benefit from clear navigation that reduces bounce rates, optimized landing page design that turns visitors into leads, and intuitive layouts that guide customers naturally toward action.",
      icon: "/assets/images/icons/ux-icon.svg",
      col: "col-12 col-md-6 col-lg-6",
    },
    {
      title: "Branding That Builds Trust",
      description: "Your website is often the first impression of your brand. A professional web design agency creates a visual identity that resonates with your audience, blending cohesive design elements, professional aesthetics that inspire credibility, and consistency across all digital platforms.",
      icon: "/assets/images/icons/branding-icon.svg",
      col: "col-12 col-md-6 col-lg-6",
    },
    {
      title: "Scalable Design for Growth",
      description: "A top web design company builds websites that grow with your business. Flexible architecture and easy updates ensure your site stays effective as you add new products, services, or features.",
      icon: "/assets/images/icons/scalable-icon.svg",
      col: "col-12 col-md-6 col-lg-6",
    }
  ]
};

// Services Data
export const webDesignServicesData = [
  {
    id: "landing-page-design",
    title: "Landing Page Design",
    description: "Turn ad clicks into paying customers with high-converting landing pages. We focus on clear UX design, fast load times, and persuasive layouts that improve ROI for your campaigns.",
    button: {
      text: "Get Landing Page Design",
      href: "/landing-page-design",
      className: "offer-btn primary",
      show: true
    },
    icon: <BagIcon/>
  },
  {
    id: "responsive-web-design",
    title: "Responsive Web Design",
    description: "As a leading responsive website design company, we create websites that adapt flawlessly to smartphones, tablets, and desktops. Expect faster load speeds, better SEO performance, and consistent branding across every device.",
    button: {
      text: "Get Responsive Web Design",
      href: "/responsive-web-design",
      className: "offer-btn primary",
      show: true
    },
    icon: <BagIcon/>
  },
  {
    id: "website-redesign",
    title: "Website Redesign",
    description: "If your current site feels outdated, our website redesign services transform it into a modern, scalable platform. With a fresh visual identity and improved user flow, you'll re-engage your audience and generate more leads.",
    button: {
      text: "Get Website Redesign",
      href: "/website-redesign",
      className: "offer-btn primary",
      show: true
    },
    icon: <BagIcon/>
  },
  {
    id: "b2b-web-design",
    title: "B2B Web Design",
    description: "Our B2B website design firm specializes in creating professional, trust-building websites for corporate clients. From thought-leadership landing pages to lead capture forms, we help you attract and nurture high-value business clients.",
    button: {
      text: "Get B2B Web Design",
      href: "/b2b-web-design",
      className: "offer-btn primary",
      show: true
    },
    icon: <BagIcon/>
  },
  {
    id: "custom-web-design",
    title: "Custom Web Design",
    description: "For businesses with unique needs, we offer fully custom web design and development services. Our team builds scalable architectures, integrates advanced features, and ensures your website grows alongside your business.",
    button: {
      text: "Get Custom Web Design",
      href: "/custom-web-design",
      className: "offer-btn primary",
      show: true
    },
    icon: <BagIcon/>
  }
];

// USP Section Data (ScrollSection)
export const webDesignUSPData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Partner With Our Web Design Company",
  description: [
    "Our customers choose us for professional design, user experience, and growth-ready websites. Here's why:",
  ],
  items: [
    {
      id: "webdesign-firstScroller",
      step: 1,
      title: "Smart UI Design",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Designing a website is not just about aesthetics; it's about usability. With a strong focus on UI design, every page is crafted for clarity, efficiency, and engagement, ensuring visitors can interact with your site without confusion.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Smart UI Design",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdesign-secondScroller",
      step: 2,
      title: "Creative Web Solutions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every business faces different challenges online. Through creative web solutions, websites are built to meet those needs, whether it's lead generation, eCommerce conversions, or strengthening brand visibility.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Creative Web Solutions",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdesign-thirdScroller",
      step: 3,
      title: "Digital Marketing Integration",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Web design does not exist in isolation. By integrating digital marketing strategies from the start, your website is positioned to attract the right audience, convert leads, and support wider growth objectives.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Digital Marketing Integration",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdesign-fourthScroller",
      step: 4,
      title: "Mobile-First Design",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Modern users spend more time on mobile devices than on desktops. That's why every site is built with a mobile-friendly design in mind, ensuring consistent performance and accessibility across all screen sizes.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Mobile-First Design",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdesign-fifthScroller",
      step: 5,
      title: "Front-End Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A seamless user experience depends on the strength of the build. With advanced front-end development, websites load faster, function smoothly, and support the technical requirements needed to scale with your business.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Front-End Expertise",
        width: 669,
        height: 376,
      },
    }
  ]
};

// Process Data
export const webDesignProcessData = {
  title: "Our Step-by-Step Web Design Process",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description: "At this stage, we gather requirements, define the target audience, and create a roadmap that ensures the approach stays aligned with overall business objectives.",
      image: "/assets/images/work/step1.png",
      alignment: "right"
    },
    {
      id: 2,
      number: "02",
      title: "Wireframing & User Experience",
      description: "Wireframes establish structure and flow. By focusing on UX design, the layout is shaped to simplify navigation, reduce friction, and guide users toward conversion.",
      image: "/assets/images/work/step2.png",
      alignment: "left"
    },
    {
      id: 3,
      number: "03",
      title: "Creative Design & Visual Identity",
      description: "Concepts take shape in this phase. Using the brand's visual identity, designs are crafted to be visually compelling, user-friendly, and consistent with modern standards.",
      image: "/assets/images/work/step3.png",
      alignment: "right"
    },
    {
      id: 4,
      number: "04",
      title: "Development & Front-End Build",
      description: "With designs approved, coding begins. Through expert web development services, the site becomes fully responsive, optimized for speed, and compatible across devices.",
      image: "/assets/images/work/step4.png",
      alignment: "left"
    },
    {
      id: 5,
      number: "05",
      title: "Testing & Launch",
      description: "Before launch, every function is tested for responsiveness, SEO readiness, and performance. Once approved, the site goes live, delivering a reliable platform to strengthen online presence.",
      image: "/assets/images/work/step5.png",
      alignment: "right"
    }
  ]
};

// Technologies Data
export const webDesignTechnologiesData = {
  heading: "Technologies We Use",
  categories: [
    {
      title: "Design & Prototyping Tools",
      description: "Figma, Adobe XD, Sketch, InVision",
      icon: "/assets/images/technologyIcons.png"
    },
    {
      title: "Front-End Design & Development",
      description: "HTML5, CSS3, JavaScript (ES6+), React, Tailwind CSS",
      icon: "/assets/images/technologyIcons.png"
    },
    {
      title: "Responsive & UI Frameworks",
      description: "Bootstrap, Material UI, Flexbox & CSS Grid",
      icon: "/assets/images/technologyIcons.png"
    },
    {
      title: "Content Management & Web Builders",
      description: "WordPress, Elementor, Webflow, Shopify",
      icon: "/assets/images/technologyIcons.png"
    },
    {
      title: "E-Commerce & Custom Solutions",
      description: "WooCommerce, Shopify Plus, Headless Commerce (React/Next.js)",
      icon: "/assets/images/technologyIcons.png"
    },
    {
      title: "Performance & Accessibility",
      description: "Core Web Vitals Optimization, Google Lighthouse, ARIA Accessibility Standards",
      icon: "/assets/images/technologyIcons.png"
    }
  ]
};

// Final CTA Data
export const webDesignFinalCTAData = {
  heading: "Transform Your Website Into a Sales Engine",
  description: ["Don't let weak design hold your business back. With a trusted web design company, you get a site that's responsive, search-friendly, and built to convert visitors into clients."],
  cta: {
    text: "Let's Start Building",
    href: "/contact",
    className: "offer-btn primary",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Web Design Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  // cta: {
  //   text: "Launch My Ecommerce Site",
  //   href: "#",
  //   className: "offer-btn primary",
  // },
};

// /data/whyChooseData.js

export const whyChooseWebDesignData = {
  heading: "Designed to Sell. Coded to Scale. Branded to Win.",
  image: {
    src: "/assets/images-webp/web-design/web-design/designed-to-sell-coded-to-scale.-branded-to-win.webp",
    alt: "Designed to Sell Coded to Scale",
    width: 667,
    height: 315,
  },

  // Optional intro copy (render above the list)
  paragraphs: [
    "Most agencies stop at aesthetics. As a professional web design firm, Website Digitals goes deeper by merging branding, usability, SEO, and mobile performance to deliver websites that not only look impressive but also drive real business results.",
    "We’re a cost-effective web design company delivering agency-level quality without the overhead.",
    "At Website Digitals, you get more than a website. You get a digital foundation built for long-term growth. We help you turn traffic into trust, clicks into clients, and browsers into buyers.",
  ],

  // Bullet list exactly as in the markup
  bullets: [
    "UX-first design aligned with your brand and customer journey",
    "Custom visuals that build trust and reflect your identity",
    "Responsive layouts for flawless performance on all devices",
    "SEO-ready structure built to rank and scale",
    "Conversion-driven elements like CTAs, forms, and booking tools",
  ],

  cta: {
    label: "Design My Sales-Driven Website",
    href: "/brief",
    className: "primary",
  },
};

export { whyChooseWebDesignData };

export const industryTabsWebDesignData = [
  {
    id: "construction",
    title: "Construction & Real Estate",
    items: [
      {
        title: "Real Estate",
        href: "/real-estate-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_real-estate.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_real-estate.svg",
        alt: "Real Estate",
        desc: "Present dynamic real estate websites that highlight property listings with ease and elegance.",
      },
      {
        title: "Construction",
        href: "/construction-company-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_construction.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_construction.svg",
        alt: "Construction",
        desc: "Showcase projects, generate leads, and build authority with structured, SEO-friendly construction websites.",
      },
      {
        title: "Interior Designers",
        href: "/interior-designers-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_interior-designers.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_interior-designers.svg",
        alt: "Interior Designers",
        desc: "Portfolio-ready layouts built to attract clients and spotlight creativity.",
      },
    ],
  },

  {
    id: "legal",
    title: "Legal Services",
    items: [
      {
        title: "Law",
        href: "/law-firm-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_law.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_law.svg",
        alt: "Law",
        desc: "Present a professional digital identity that builds trust and credibility with potential clients.",
      },
      {
        title: "Attorney",
        href: "/attorney-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_attorney.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_attorney.svg",
        alt: "Attorney",
        desc: "Streamlined design and intuitive navigation for client-first legal websites.",
      },
      {
        title: "Lawyer",
        href: "/lawyer-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_lawyer.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_lawyer.svg",
        alt: "Lawyer",
        desc: "Ensure your services stand out with a clean, modern, and information-driven legal website.",
      },
    ],
  },

  {
    id: "business",
    title: "Small Business",
    items: [
      {
        title: "Electrician",
        href: "/electrician-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_electrician.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_electrician.svg",
        alt: "Electrician",
        desc: "Mobile-optimized pages that let local customers contact you quickly and easily.",
      },
      {
        title: "Plumber",
        href: "/plumber-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_plumber.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_plumber.svg",
        alt: "Plumber",
        desc: "Informative and action-oriented websites that build trust and drive local bookings.",
      },
      {
        title: "Restaurant",
        href: "/restaurant-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_restaurant.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_restaurant.svg",
        alt: "Restaurant",
        desc: "Beautiful menus, reservation systems, and location integrations made simple.",
      },
      {
        title: "Pet Industry",
        href: "/pet-industry-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_pet-industry.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_pet-industry.svg",
        alt: "Pet Industry",
        desc: "Adorable and functional pet care websites built for bookings, services, and community engagement.",
      },
    ],
  },

  {
    id: "technology",
    title: "Technology",
    items: [
      {
        title: "WordPress",
        href: "/wordpress-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_wordpress.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_wordpress.svg",
        alt: "WordPress",
        desc: "Functional and scalable WordPress designs customized to your brand and business flow.",
      },
      {
        title: "Shopify",
        href: "/shopify-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_shopify.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_shopify.svg",
        alt: "Shopify",
        desc: "Custom Shopify web design tailored to streamline your ecommerce sales flow.",
      },
      {
        title: "Mobile Friendly",
        href: "/mobile-friendly-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_mobile-friendly.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_mobile-friendly.svg",
        alt: "Mobile Friendly",
        desc: "All websites are built mobile-first to ensure flawless UX across devices.",
      },
    ],
  },

  {
    id: "medical",
    title: "Medical & Healthcare",
    items: [
      {
        title: "Medical",
        href: "/medical-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical.svg",
        alt: "Medical",
        desc: "Professional layouts for clinics and private practices, optimized for credibility and care.",
      },
      {
        title: "Dentist",
        href: "/dentist-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_dentist.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_dentist.svg",
        alt: "Dentist",
        desc: "Clean, approachable designs that ease patient conversion and trust.",
      },
      {
        title: "Healthcare",
        href: "/healthcare-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_healthcare.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_healthcare.svg",
        alt: "Healthcare",
        desc: "Informative and HIPAA-conscious websites for healthcare providers.",
      },
      {
        title: "Medical Spa",
        href: "/medical-spa-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical-spa.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical-spa.svg",
        alt: "Medical Spa",
        desc: "Elegant and calming designs tailored to high-end service branding.",
      },
      {
        title: "Hospital",
        href: "/hospital-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_hospital.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_hospital.svg",
        alt: "Hospital",
        desc: "Comprehensive web systems to manage information, departments, and appointments.",
      },
      {
        title: "Veterinary",
        href: "/veterinary-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_veterinary.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_veterinary.svg",
        alt: "Veterinary",
        desc: "Pet-friendly site designs optimized for mobile and appointment booking.",
      },
    ],
  },

  {
    id: "leisure",
    title: "Leisure & Entertainment",
    items: [
      {
        title: "Photographer",
        href: "/photography-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_photographer.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_photographer.svg",
        alt: "Photographer",
        desc: "Portfolio-based design that frames your work in the best light.",
      },
      {
        title: "Travel",
        href: "/travel-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_travel.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_travel.svg",
        alt: "Travel",
        desc: "Inspire journeys with immersive visuals, itineraries, and booking integrations.",
      },
    ],
  },

  {
    id: "services",
    title: "Services",
    items: [
      {
        title: "Responsive",
        href: "/responsive-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_responsive.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_responsive.svg",
        alt: "Responsive",
        desc: "Websites that respond smoothly to all screen sizes and user interactions.",
      },
      {
        title: "B2B",
        href: "/b2b-website-design",
        normalImg: "/assets/images-webp/web-design/icons/services/icon_b2b.svg",
        whiteImg: "/assets/images-webp/web-design/icons/services/icon_b2b.svg",
        alt: "B2B",
        desc: "Data-driven B2B web design that aligns with your sales funnel and client lifecycle.",
      },
      {
        title: "Corporate",
        href: "/corporate-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_corporate.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_corporate.svg",
        alt: "Corporate",
        desc: "Enterprise-grade digital experiences with modern aesthetics and robust backend systems.",
      },
      {
        title: "Ecommerce",
        href: "/ecommerce-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_ecommerce.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_ecommerce.svg",
        alt: "Ecommerce",
        desc: "Revenue-generating ecommerce sites that merge usability with powerful functionality.",
      },
    ],
  },

  {
    id: "finance",
    title: "Business & Finance",
    items: [
      {
        title: "Financial Services",
        href: "/financial-services-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon-financial-services.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon-financial-services.svg",
        alt: "Financial Services",
        desc: "Build trust with modern, compliant web design for financial firms.",
      },
      {
        title: "Accounting Firm",
        href: "/accounting-firm-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon_accounting-firm.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon_accounting-firm.svg",
        alt: "Accounting Firm",
        desc: "Clear, concise, and conversion-ready websites designed for service clarity and lead capture.",
      },
    ],
  },
];

export const WebDesignPageFAQs = [
  {
    id: "faq-1",
    question: "Why should I hire Website Digitals as my web design company?",
    answer: "Website Digitals builds responsive, SEO-ready websites that combine UX, UI, and branding to drive conversions. From small business sites to corporate and ecommerce platforms, we deliver professional web design services across the U.S. So if you're searching for a web design company near me, our team is ready to help nationwide."
  },
  {
    id: "faq-2",
    question: "How much do Website Digitals web design services cost?",
    answer: "Pricing varies by project scope, but Website Digitals offers affordable website design packages for startups and advanced eCommerce development solutions for enterprises. If you're evaluating eCommerce web design services pricing, we provide clear and transparent options and offer a custom website design consultation to align with your goals and budget."
  },
  {
    id: "faq-3",
    question: "What does a web design company do?",
    answer: "A web design company creates websites that are visually appealing, user-friendly, and optimized for conversions. Services often include responsive design, user experience (UX) improvements, branding, content structuring, and SEO-ready development. Many also provide ongoing support to keep your site performing at its best."
  },
  {
    id: "faq-4",
    question: "How much does it cost to hire a web design company?",
    answer: "The cost of hiring a web design company varies depending on project size, complexity, and required features. Small business websites may start at a few thousand dollars, while custom enterprise projects or ecommerce sites with advanced integrations can range much higher. Most agencies provide tailored quotes based on your specific goals."
  },
  {
    id: "faq-5",
    question: "What is the best CMS for web design?",
    answer: "The best CMS for web design depends on your business needs. WordPress is flexible for blogs and service-based sites, Shopify is ideal for eCommerce businesses, and a custom CMS is often chosen by enterprises requiring highly specific functionality. A professional agency can help you decide which platform aligns with your goals."
  },
  {
    id: "faq-6",
    question: "Can I hire a web design company near me now?",
    answer: "Yes, you can hire a web design company near you for local collaboration and support. Many US-based agencies also work remotely, offering the same quality of service regardless of location. The key is choosing a company with proven results, transparent pricing, and industry expertise."
  },
  {
    id: "faq-7",
    question: "Where can I buy affordable website design packages in the USA?",
    answer: "Many agencies offer affordable website design packages tailored for startups and small businesses. These packages often include responsive layouts, SEO-ready builds, and essential features at a budget-friendly price. Always review what's included to ensure the package meets your long-term growth needs."
  },
  {
    id: "faq-8",
    question: "How much do eCommerce web design services cost?",
    answer: "eCommerce web design services pricing depends on the platform, number of products, and level of customization required. A basic Shopify or WooCommerce store may cost less, while large-scale ecommerce projects with custom integrations, advanced filters, and secure payment systems typically require a higher investment."
  },
  {
    id: "faq-9",
    question: "Can I request a custom website design consultation?",
    answer: "Yes, most agencies offer a custom website design consultation to discuss your goals, audience, and technical requirements. This session helps outline the right approach, estimate costs, and ensure your project starts with a clear strategy."
  }
];

// Metadata for SEO
export const webDesignMetadata = {
  title: "Web Design Company | Affordable & Custom Solutions",
  description: "Partner with a trusted web design company delivering responsive, SEO-ready websites for small businesses and enterprises across the US.",
  keywords: "web design company, web design agency US, professional web design services, custom web design firm, corporate website design company, small business web design services, web development and design company, top web design companies in the US, responsive website design company, ecommerce web design services, WordPress web design company, affordable web design services USA, B2B website design firm"
};
