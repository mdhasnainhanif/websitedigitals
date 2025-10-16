import { BagIcon } from "@/icons";

// Metadata for Responsive Web Design Service
export const responsiveWebDesignMetadata = {
  title: "Affordable Responsive Web Design Services | Website Digitals",
  description:
    "Hire a responsive web design company that builds sites for SEO, speed, and conversions. Grow your business with Website Digitals today.",
  keywords:
    "responsive web design services, responsive web design company, mobile-friendly web design, custom responsive design, professional responsive design agency",
  canonical:
    "https://www.websitedigitals.com/web-design/responsive-web-design-services/",
  openGraph: {
    title: "Affordable Responsive Web Design Services | Website Digitals",
    description:
      "Hire a responsive web design company that builds sites for SEO, speed, and conversions. Grow your business with Website Digitals today.",
    url: "https://www.websitedigitals.com/web-design/responsive-web-design-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/responsive-web-design-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Responsive Web Design Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Affordable Responsive Web Design Services | Website Digitals",
    description:
      "Hire a responsive web design company that builds sites for SEO, speed, and conversions. Grow your business with Website Digitals today.",
    images: [
      "https://websitedigitals.com/assets/images/responsive-web-design-twitter-image.jpg",
    ],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical:
      "https://www.websitedigitals.com/web-design/responsive-web-design-services/",
  },
};

export const responsiveWebDesignBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Responsive Web Design Services",
      href: "/web-design/responsive-web-design-services",
    },
  },
  heading: "[[Responsive Web Design Services]] That [[Drive Results]]",
  description: [
    "Websites that are not responsive lose traffic, rankings, and customers.\n\nAt Website Digitals, we provide responsive web design services tailored to your business needs.\n\nOur mobile-friendly web design, custom responsive design, and expertise as a professional responsive design agency ensure your site is ready for mobile-first indexing, SEO optimization, and long-term user growth.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Get A Responsive Site Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "ecommerce-design", label: "E-commerce Design" },
      { value: "b2c-website-design", label: "B2C Website Design" },
      { value: "b2b-website-design", label: "B2B Website Design" },
      { value: "corporate-website-design", label: "Corporate Website Design" },
      { value: "portfolio-website-design", label: "Portfolio Website Design" },
      {
        value: "educational-website-design",
        label: "Educational Website Design",
      },
    ],
    initialValues: {
      help: "ecommerce-design",
    },
  },
};

export const responsiveWebDesignServicesData = [
  {
    id: 1,
    title: "E-commerce Design",
    description:
      "We craft responsive online stores with Shopify responsive themes and WooCommerce design solutions that make shopping simple. Optimized multi-device checkout ensures customers can browse and purchase easily across desktops, tablets, and smartphones.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "B2C Website Design",
    description:
      "For consumer-focused brands, we design mobile-first websites with tailored layouts that highlight products and services. By using adaptive elements, we deliver sites that attract, engage, and convert customers on any device. Our experience in local web design services and small business website design also helps regional businesses compete effectively online.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "B2B Website Design",
    description:
      "Business-to-business websites demand clarity and scalability. Our custom responsive design solutions focus on usability, accessibility, and performance so that your platform can build trust, showcase expertise, and drive qualified leads.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Corporate Website Design",
    description:
      "We build professional, enterprise-responsive design solutions that support high-traffic environments and complex integrations. Combining modern frameworks with future-ready platforms, your corporate site stays secure, reliable, and scalable.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Portfolio Website Design",
    description:
      "Creative professionals need websites that look great on every device. Our responsive web design for portfolios emphasizes fluid grid layouts and performance optimization to showcase work with clarity and style.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Educational Website Design",
    description:
      "Educational institutions require accessibility and scalability. We specialize in building responsive e-learning platforms, student portals, and websites aligned with WCAG standards, ensuring that schools and training centers can deliver inclusive digital experiences.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const responsiveWebDesignScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Rely on Our Responsive Web Design Company",
  description: [
    "Choosing the right partner for web design means more than building a website. It means creating a digital platform that drives visibility, engagement, and long-term growth. Here are the distinct advantages we bring to every responsive project.",
  ],
  items: [
    {
      id: "responsive-firstScroller",
      step: 1,
      title: "Mobile-First Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our focus begins with mobile-friendly web design to ensure that your site works flawlessly on every screen. With attention to device compatibility, we make sure your content remains accessible and user-friendly whether visitors arrive on phones, tablets, or desktops.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Mobile-First Approach",
        width: 669,
        height: 376,
      },
    },
    {
      id: "responsive-secondScroller",
      step: 2,
      title: "SEO-Integrated Design",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We build search-optimized websites that improve visibility in search engines and strengthen organic reach. By implementing strategies for a faster page load, your visitors stay engaged, while our structure supports an organic rankings boost that benefits your long-term digital performance.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "SEO-Integrated Design",
        width: 669,
        height: 376,
      },
    },
    {
      id: "responsive-thirdScroller",
      step: 3,
      title: "Accessibility & Compliance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every site we create is guided by standards that make it usable for everyone. Through WCAG 2.1 compliance, we ensure web accessibility is not an afterthought but a core feature. With a focus on inclusive design, your business can confidently reach all audiences while meeting global best practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Accessibility & Compliance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "responsive-fourthScroller",
      step: 4,
      title: "Performance & Speed Focused",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Visitors expect websites that respond quickly. That is why we prioritize fast-loading websites designed to keep bounce rates low. By aligning every project with Core Web Vitals optimization, we strengthen site performance and provide a measurable boost to user experience and search visibility.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Performance & Speed Focused",
        width: 669,
        height: 376,
      },
    },
    {
      id: "responsive-fifthScroller",
      step: 5,
      title: "Scalable for Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Businesses that plan need websites that can grow with them. Our approach to enterprise responsive design delivers solutions that adapt to complex needs. By creating future-ready platforms, we give your brand the flexibility to expand features and scale operations without limitations.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Scalable for Growth",
        width: 669,
        height: 376,
      },
    },
  ],

  cta: null,
};

export const responsiveWebDesignBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Responsive Web Design Services",
      href: "/web-design/responsive-web-design-services",
    },
  },
  heading: "Win Customers With Professional Responsive Web Design",
  description: [
    "We build custom responsive websites that perform across every device. Our approach ensures future-proof web design that drives traffic, improves SEO, and keeps your brand competitive.\nWhether you're launching a new online presence, upgrading your existing site, or aiming to boost your mobile performance, we're ready to turn your vision into results.",
  ],
  bullets: [],
  cta: {
    text: "Get My Site Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Responsive Web Design Services",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const responsiveWebDesignStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Websites",
  },
  {
    id: 2,
    value: 99,
    suffix: "%",
    label: "Compatible",
  },
  {
    id: 3,
    value: 3,
    suffix: "x",
    label: "Faster Loads",
  },
  {
    id: 4,
    value: 70,
    suffix: "%",
    label: "SEO Lift",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const responsiveWebDesignImpactCardsData = [
  {
    id: 1,
    title: "Deliver Better User Experience",
    description:
      "A responsive site guarantees cross-device usability with fluid grid layouts and compliance with WCAG standards guided by UX/UI design principles. Visitors enjoy a consistent, accessible, and trustworthy experience across all devices.",
    icon: "experience",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 2,
    title: "Drive Conversions and Engagement",
    description:
      "Responsive websites keep users engaged by reducing bounce rates and maintaining clear conversion funnels. Partnering with a professional responsive design agency ensures your site is built to guide visitors toward meaningful actions.",
    icon: "conversions",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 3,
    title: "Future-Proof Your Website",
    description:
      "With a scalable responsive design, your site grows alongside your business. Using custom responsive design, custom web development, and modern standards like HTML5 & CSS3, your website remains ready for future devices and browsers.",
    icon: "future-proof",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 4,
    title: "Boost Search Visibility",
    description:
      "Search engines prioritize responsive websites. With SEO-friendly design, mobile optimization, and Google mobile-first indexing, your site ranks higher and performs better. Tools like PageSpeed Insights further strengthen visibility and retention.",
    icon: "seo",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const responsiveWebDesignImpactSectionData = {
  heading: "Why Responsive Web Design Matters for Your Business",
  showDescription: true,
  description:
    "Responsive web design strengthens four key areas of your digital presence: user experience, conversions, scalability, and visibility. These goals ensure your website performs today and adapts for tomorrow.",
};

// Industries Data
export const responsiveWebDesignIndustriesData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Our responsive web design services for ecommerce focus on secure checkouts, product filters, and mobile-optimized stores. We help online retailers increase conversions and deliver seamless shopping experiences across all devices.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "We provide responsive web design services for healthcare that prioritize accessibility, HIPAA-friendly features, and patient-focused usability. From appointment scheduling to telemedicine-ready layouts, we help medical providers connect with patients effectively.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "As a responsive web design agency for real estate, we create lead-generating platforms with advanced property search filters, map integrations, and virtual tour features. Our solutions showcase listings clearly while engaging buyers and renters on every screen.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 4,
    title: "Law Firms",
    description:
      "Our responsive web design services for law firms highlight professionalism and credibility with attorney bios, practice area pages, and client intake forms. We design user-friendly platforms that help firms build trust and attract new clients.",
    icon: "/assets/images/industry/law.svg",
  },
  {
    id: 5,
    title: "Restaurant",
    description:
      "We deliver responsive web design for restaurants that support mobile menus, reservations, and online ordering integrations. By creating location-friendly, engaging layouts, we help restaurants attract more diners and simplify customer decision-making.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 6,
    title: "Education",
    description:
      "Our responsive web design services for education empower institutions with scalable e-learning platforms, student dashboards, and exam portals. We ensure accessibility and usability across devices so schools and training centers can deliver inclusive learning experiences.",
    icon: "/assets/images/industry/education.svg",
  },
];

// Technologies Data
export const responsiveWebDesignTechnologiesData = [
  {
    id: 1,
    title: "WordPress",
    description:
      "Our responsive web design services for WordPress combine SEO-friendly architecture with Gutenberg blocks and WooCommerce compatibility. We create mobile-first, easily managed sites that empower businesses to grow content and commerce with confidence.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Shopify",
    description:
      "We provide responsive web design services for Shopify that optimize checkout performance, support app integrations, and enhance store scalability. Our solutions help brands deliver seamless shopping experiences across devices while leveraging Shopify Plus and Checkout Extensibility.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "WooCommerce",
    description:
      "Our responsive web design services for WooCommerce enable flexible, mobile-optimized online shops built on WordPress. We integrate secure payment gateways and essential extensions, giving businesses complete control to scale their ecommerce operations smoothly.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Magento",
    description:
      "We deliver responsive web design services for Magento tailored to enterprise-level needs. From multi-store management to complex catalog rules and ERP integrations, our Magento 2 expertise ensures secure, scalable, and high-performing ecommerce platforms.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Squarespace",
    description:
      "Our responsive web design services for Squarespace highlight sleek, template-driven sites with built-in ecommerce and scheduling features. Ideal for design-led businesses, we craft mobile-first websites that balance style with functionality and performance.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Wix",
    description:
      "We offer responsive web design services for Wix that empower small businesses with rapid, mobile-ready websites. Using Wix Studio, Editor X, and Velo, we deliver flexible, scalable solutions that grow with your brand's digital needs.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const responsiveWebDesignWorkflowData = {
  title: "Our Process",
  description:
    "A successful website begins with a structured process. We follow a clear step-by-step approach to ensure your project moves smoothly from planning to launch while meeting performance, design, and SEO requirements. Our process follows these stages:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "Every project starts with a detailed website analysis to identify strengths, gaps, and opportunities. From there, we shape a clear UX strategy that aligns with your audience's needs and business goals, ensuring the foundation is set for measurable results.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our design phase focuses on creativity and usability. Using tools like Adobe XD, Figma, and Sketch, we craft prototypes that capture layout, navigation flow, and brand consistency. This step ensures clarity and collaboration before moving into development.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Development & Testing",
      description:
        "With the design approved, our developers bring the site to life using HTML5 and CSS3 along with modern frameworks. Rigorous cross-browser testing is conducted to confirm that the site looks and functions correctly on every device and platform.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Launch & Optimization",
      description:
        "Once tested and approved, the site is deployed with best practices in place. We handle SEO integration to support search visibility, conduct PageSpeed testing to maximize performance, and ensure mobile-first indexing compliance so your website stays aligned with search engine requirements.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const responsiveWebDesignWhyChooseUsData = [
  {
    id: 1,
    title: "Mobile-First Approach",
    description:
      "Our focus begins with mobile-friendly web design to ensure that your site works flawlessly on every screen. With attention to device compatibility, we make sure your content remains accessible and user-friendly whether visitors arrive on phones, tablets, or desktops.",
    icon: "mobile-first",
  },
  {
    id: 2,
    title: "SEO-Integrated Design",
    description:
      "We build search-optimized websites that improve visibility in search engines and strengthen organic reach. By implementing strategies for a faster page load, your visitors stay engaged, while our structure supports an organic rankings boost that benefits your long-term digital performance.",
    icon: "seo",
  },
  {
    id: 3,
    title: "Accessibility & Compliance",
    description:
      "Every site we create is guided by standards that make it usable for everyone. Through WCAG 2.1 compliance, we ensure web accessibility is not an afterthought but a core feature. With a focus on inclusive design, your business can confidently reach all audiences while meeting global best practices.",
    icon: "accessibility",
  },
  {
    id: 4,
    title: "Performance & Speed Focused",
    description:
      "Visitors expect websites that respond quickly. That is why we prioritize fast-loading websites designed to keep bounce rates low. By aligning every project with Core Web Vitals optimization, we strengthen site performance and provide a measurable boost to user experience and search visibility.",
    icon: "performance",
  },
  {
    id: 5,
    title: "Scalable for Growth",
    description:
      "Businesses that plan need websites that can grow with them. Our approach to enterprise responsive design delivers solutions that adapt to complex needs. By creating future-ready platforms, we give your brand the flexibility to expand features and scale operations without limitations.",
    icon: "scalable",
  },
];

// FAQ Data
export const responsiveWebDesignFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for responsive web design?",
    answer:
      "Website Digitals builds custom responsive websites with mobile-first performance, SEO optimization, and future-proof web design to support business growth.",
  },
  {
    id: 2,
    question: "Does Website Digitals offer affordable and premium packages?",
    answer:
      "Yes. We provide affordable packages for startups and premium solutions for enterprises, tailored to fit different goals and budgets.",
  },
  {
    id: 3,
    question: "How do I start a project with Website Digitals?",
    answer:
      "Contact us to discuss your goals. We handle analysis, strategy, design, development, and optimization to deliver a responsive site ready to perform.",
  },
  {
    id: 4,
    question: "What is responsive web design?",
    answer:
      "It's a method where layouts and elements adjust to screen size, ensuring usability across desktops, tablets, and smartphones.",
  },
  {
    id: 5,
    question: "What are the SEO benefits of responsive websites?",
    answer:
      "They meet Google's mobile-first indexing, improve rankings, speed, indexing, and reduce bounce rates for stronger visibility.",
  },
  {
    id: 6,
    question: "What's the difference between responsive and adaptive design?",
    answer:
      "Responsive design adjusts fluidly to any screen, while adaptive uses fixed layouts. Responsiveness is more scalable and future-ready.",
  },
  {
    id: 7,
    question: "How does mobile responsiveness improve user experience?",
    answer:
      "It ensures smooth navigation, readability, and accessibility on all devices, leading to higher engagement and conversions.",
  },
  {
    id: 8,
    question: "What are the best practices for responsive design?",
    answer:
      "Follow a mobile-first approach, optimize images, use fluid grids, test across browsers, and ensure WCAG compliance.",
  },
  {
    id: 9,
    question: "How do I find a responsive website design company near me now?",
    answer:
      "Searching for a responsive website design company near me now connects you with local experts. Website Digitals also provides tailored local strategies.",
  },
  {
    id: 10,
    question: "How do I order professional responsive web design?",
    answer:
      "Reach out to Website Digitals for professional responsive design with options that balance affordability and scalability.",
  },
  {
    id: 11,
    question: "Why should I hire responsive web design services?",
    answer:
      "When you hire responsive web design services, you ensure your website is optimized for mobile, SEO, and performance. This helps your business improve customer experience, boost online visibility, and drive higher conversions.",
  },
  {
    id: 12,
    question:
      "How do I choose the top responsive web design service providers?",
    answer:
      "The top responsive web design service providers combine technical expertise with industry experience. Look for agencies like Website Digitals that deliver scalable, SEO-driven, and user-focused websites aligned with your business goals.",
  },
  {
    id: 13,
    question: "What are enterprise responsive web design services?",
    answer:
      "Enterprise responsive web design services involve creating secure, high-traffic platforms with advanced integrations, scalability, and performance optimization. Website Digitals specializes in enterprise-level solutions that adapt to complex business needs.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const responsiveWebDesignServicesSectionData = {
  heading: "Our Comprehensive Responsive Web Design Services",
  description:
    "We provide complete responsive web design solutions that cover every aspect of modern web development. Each service is designed to improve performance, enhance user experience, and help you reach your business goals. Our core responsive web design offerings:",
  showDescription: true,
  cta: {
    label: "Explore Design Options",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const responsiveWebDesignIndustriesSectionData = {
  heading: "Industries We Specialize In",
  description:
    "We deliver responsive web design tailored to industry needs, aligning with business goals and customer expectations to boost usability, performance, and results.",
  cta: {
    text: "Get a Custom Website Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const responsiveWebDesignIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our responsive web design services for ecommerce focus on secure checkouts, product filters, and mobile-optimized stores. We help online retailers increase conversions and deliver seamless shopping experiences across all devices.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Ecommerce Responsive Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "We provide responsive web design services for healthcare that prioritize accessibility, HIPAA-friendly features, and patient-focused usability. From appointment scheduling to telemedicine-ready layouts, we help medical providers connect with patients effectively.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Responsive Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "As a responsive web design agency for real estate, we create lead-generating platforms with advanced property search filters, map integrations, and virtual tour features. Our solutions showcase listings clearly while engaging buyers and renters on every screen.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Responsive Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Law Firms",
    description:
      "Our responsive web design services for law firms highlight professionalism and credibility with attorney bios, practice area pages, and client intake forms. We design user-friendly platforms that help firms build trust and attract new clients.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Law Firms Responsive Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurant",
    description:
      "We deliver responsive web design for restaurants that support mobile menus, reservations, and online ordering integrations. By creating location-friendly, engaging layouts, we help restaurants attract more diners and simplify customer decision-making.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Responsive Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "Our responsive web design services for education empower institutions with scalable e-learning platforms, student dashboards, and exam portals. We ensure accessibility and usability across devices so schools and training centers can deliver inclusive learning experiences.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Education Responsive Web Design",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const responsiveWebDesignWhyChooseUsSectionData = {
  heading: "Why Rely on Our Responsive Web Design Company",
  description:
    "Choosing the right partner for web design means more than building a website. It means creating a digital platform that drives visibility, engagement, and long-term growth. Here are the distinct advantages we bring to every responsive project.",
};

// Workflow Section Data (Section 8)
export const responsiveWebDesignWorkflowSectionData = {
  heading: "Our Process",
  description:
    "A successful website begins with a structured process. We follow a clear step-by-step approach to ensure your project moves smoothly from planning to launch while meeting performance, design, and SEO requirements.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const responsiveWebDesignTechnologiesSectionData = {
  heading: "Platforms We Use",
  description:
    "We build responsive websites on leading platforms, optimizing for performance, scalability, and usability to drive long-term growth.",
  showDescription: true,
  cta: {
    text: "Start Building Today",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const responsiveWebDesignFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Responsive Web Design Services",
      href: "/web-design/responsive-web-design-services",
    },
  },
  heading: "Win Customers With Professional Responsive Web Design",
  description: [
    "We build custom responsive websites that perform across every device. Our approach ensures future-proof web design that drives traffic, improves SEO, and keeps your brand competitive.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Responsive Web Design Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Get My Site Today",
    href: "#",
    className: "offer-btn primary",
  },
};
