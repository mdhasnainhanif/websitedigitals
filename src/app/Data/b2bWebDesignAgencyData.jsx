import { BagIcon } from "@/icons";

// Metadata for B2B Web Design Agency
export const b2bWebDesignAgencyMetadata = {
  title: "Drive Leads and ROI with Professional B2B Web Design Agency",
  description:
    "Get B2B web design services from Website Digitals and transform your website into a lead-generation engine with proven strategies. Start Now!",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-design/b2b-web-design-agency/",
  openGraph: {
    title: "Drive Leads and ROI with Professional B2B Web Design Agency",
    description:
      "Get B2B web design services from Website Digitals and transform your website into a lead-generation engine with proven strategies. Start Now!",
    url: "https://www.websitedigitals.com/web-design/b2b-web-design-agency/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/b2b-web-design-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "B2B Web Design Agency by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Drive Leads and ROI with Professional B2B Web Design Agency",
    description:
      "Get B2B web design services from Website Digitals and transform your website into a lead-generation engine with proven strategies. Start Now!",
    images: [
      "https://websitedigitals.com/assets/images/b2b-web-design-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-design/b2b-web-design-agency/",
  },
};

export const b2bWebDesignAgencyBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "B2B Web Design Agency",
      href: "/web-design/b2b-web-design-agency",
    },
  },
  heading: "Transform, Engage, and Succeed with a [[B2B Web Design Agency]]",
  description: [
    "Most business websites fail to connect with decision-makers and generate consistent leads.\n Website Digitals specializes in building websites that help B2B companies grow. Our enterprise web design services deliver professional B2B website solutions that balance strategy, brand, and performance.\n\nWith a focus on conversion-focused design and fully responsive builds, we create digital platforms that work as true lead generation websites.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Build My Website",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-b2b-design", label: "Custom B2B Web Design" },
      { value: "enterprise-web-design", label: "Enterprise Web Design" },
      { value: "saas-website-design", label: "SaaS Website Design" },
      { value: "b2b-redesign", label: "B2B Website Redesign" },
      { value: "lead-generation-website", label: "Lead Generation Website" },
      { value: "corporate-website", label: "Corporate Website" },
    ],
    initialValues: {
      help: "custom-b2b-design",
    },
  },
};

export const b2bWebDesignAgencyData = [
  {
    id: 1,
    title: "Custom B2B Web Design for Enterprises",
    description:
      "As a custom B2B web design agency, we build sites tailored to business goals. From content management systems (CMS) to scalable frameworks, every project supports usability and brand alignment.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "SaaS & Technology B2B Website Solutions",
    description:
      "We create enterprise SaaS websites designed to integrate with sales funnels and digital marketing integration, supporting growth and customer engagement.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Regional & Industry-Specific Web Development",
    description:
      "Through regional B2B web solutions, we adapt websites to local markets and industries, ensuring relevance while maintaining consistent design standards.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Responsive Corporate Websites",
    description:
      "Our responsive corporate websites perform across devices, delivering speed, clear navigation, and user-friendly experiences.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Professional Website Redesign",
    description:
      "We provide professional website redesign services focused on structure, branding, and usability. Each conversion-focused redesign improves function while reinforcing corporate branding.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const b2bWebDesignAgencyScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Firms Trust Our B2B Web Design Agency",
  description: [
    "Choosing the right agency means working with a partner that delivers measurable results while meeting the highest standards. Our process is guided by proven frameworks, certifications, and a commitment to professional B2B website solutions that drive growth.",
  ],
  items: [
    {
      id: "b2b-firstScroller",
      step: 1,
      title: "Enterprise-Level Quality Assurance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With ISO 9001 certification, every project is handled with precision and consistency. This ensures reliable outcomes and enterprise-focused design strategies that align with corporate requirements.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Enterprise-Level Quality Assurance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "b2b-secondScroller",
      step: 2,
      title: "Certified Design & Marketing Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Holding Google Partner Certification and HubSpot Partner Certification, we create integration-ready websites that connect seamlessly with broader digital ecosystems while reinforcing authority and trust.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Certified Design & Marketing Expertise",
        width: 669,
        height: 376,
      },
    },
    {
      id: "b2b-thirdScroller",
      step: 3,
      title: "Conversion-Driven Design Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Websites are built with conversion-driven design to support lead generation optimization. The focus is on structure and function that turn engagement into measurable opportunities.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Conversion-Driven Design Approach",
        width: 669,
        height: 376,
      },
    },
    {
      id: "b2b-fourthScroller",
      step: 4,
      title: "Designed for Complex B2B Journeys",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "As a B2B responsive web design firm, we provide solutions built for scalability and corporate-level support. Each project establishes a future-proof digital presence that adapts to evolving needs.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Designed for Complex B2B Journeys",
        width: 669,
        height: 376,
      },
    },
    {
      id: "b2b-fifthScroller",
      step: 5,
      title: "Growth-Focused Website Development",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our growth-focused website design methodology ensures each build supports long-term business objectives. Websites are crafted to strengthen trust, generate leads, and expand digital reach.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Growth-Focused Website Development",
        width: 669,
        height: 376,
      },
    },
  ],

  cta: null,
};

export const b2bWebDesignAgencyBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "B2B Web Design Agency",
      href: "/web-design/b2b-web-design-agency",
    },
  },
  heading: "Launch a Lead-Driving Website Now",
  description: [
    "Start your B2B website project with a trusted B2B web design agency that delivers scalable solutions and lead-driving design. Let's build a platform built for growth and ready to perform.",
  ],
  bullets: [],
  cta: {
    text: "Build My Website",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "B2B Web Design Agency Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const b2bWebDesignAgencyStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Projects",
  },
  {
    id: 2,
    value: 12,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Retention",
  },
  {
    id: 4,
    value: 3,
    suffix: "x",
    label: "Faster Leads",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const b2bWebDesignAgencyImpactCardsData = [
  {
    id: 1,
    title: "Generate More Qualified Leads",
    description:
      "With a focus on conversion optimization, design choices are made to drive measurable results. Clear calls-to-action and purposeful layouts support lead-nurturing websites, turning visitors into consistent opportunities.",
    icon: "conversion",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "User-Friendly Enterprise Design",
    description:
      "Insights from the Nielsen Norman Group highlight how intuitive design directly improves outcomes. As a B2B UX/UI design agency, the priority is user journey optimization, ensuring enterprise websites deliver clarity and build trust at every step.",
    icon: "engagement",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Build Mobile-First & Scalable Websites",
    description:
      "Accessibility on every device is now expected. Through mobile-first design and scalable frameworks, websites adapt seamlessly to growth while meeting W3C standards for performance, security, and accessibility.",
    icon: "roi",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 4,
    title: "Align Design With Business Goals",
    description:
      "An enterprise website strategy should reinforce corporate objectives. By combining business website strategy with professional branding, companies establish platforms that serve current needs and adapt to the demands of B2B SaaS websites.",
    icon: "trust",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 5,
    title: "Stronger Corporate Presence",
    description:
      "A strong corporate digital presence enhances authority and competitive edge. Consistent branding, reliable infrastructure, and strategic positioning ensure the website functions as the foundation of digital growth.",
    icon: "security",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const b2bWebDesignAgencyImpactSectionData = {
  heading: "How Professional B2B Web Design Makes an Impact",
  showDescription: true,
  description:
    "A website is more than a digital presence. It is a driver of credibility, leads, and growth. Effective B2B website design services ensure that businesses connect with decision-makers, communicate clearly, and guide visitors toward becoming long-term clients.",
};

// Industries Data
export const b2bWebDesignAgencyIndustriesData = [
  {
    id: 1,
    title: "SaaS",
    description:
      "We provide b2b web design for SaaS companies that accelerate demo bookings, subscription signups, and product adoption. From pricing pages to integration marketplaces, our designs drive conversions and scale with rapid growth.",
    icon: "/assets/images/industry/saas.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "As a leading b2b web design agency for healthcare, we build HIPAA-compliant, WCAG-accessible websites that inspire trust. Features like patient portals, physician profiles, and locator tools help organizations engage patients and stakeholders seamlessly.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Manufacturing",
    description:
      "Our b2b web design for manufacturing highlights products with interactive catalogs, downloadable spec sheets, and RFQ forms. We create enterprise-ready platforms that simplify complex sales cycles and strengthen credibility with distributors and procurement teams.",
    icon: "/assets/images/industry/manufacturing.svg",
  },
  {
    id: 4,
    title: "Telecom",
    description:
      "We deliver b2b web design for telecom companies focused on scalability and engagement. From plan comparison tools to coverage maps and SLA showcases, our websites help providers present services clearly and win enterprise clients.",
    icon: "/assets/images/industry/telecom.svg",
  },
  {
    id: 5,
    title: "Education",
    description:
      "We specialize in b2b web design for educational institutions, supporting enrollment, engagement, and credibility. With program finders, application tracking, and LMS/CRM integrations, our websites enhance user journeys for students, faculty, and administrators.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 6,
    title: "Construction",
    description:
      "As a trusted b2b web agency for construction, we design lead-generating platforms that showcase projects, intake RFPs, and build authority. Our solutions help firms present evidence of expertise, comply with industry standards, and win bids confidently.",
    icon: "/assets/images/industry/construction.svg",
  },
];

// Technologies Data (Platforms)
export const b2bWebDesignAgencyTechnologiesData = [
  {
    id: 1,
    title: "WordPress",
    description:
      "Our WordPress b2b web design solutions focus on usability and SEO. We create responsive, content-driven websites with flexible CMS features, empowering businesses to manage pages easily while driving organic visibility and consistent lead generation.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Drupal",
    description:
      "We deliver drupal b2b web design for enterprises needing robust security and advanced content management. From custom permissions to multi-language support, Drupal provides scalability and reliability for organizations managing complex digital ecosystems.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Magento",
    description:
      "We specialize in magento b2b web design, building enterprise eCommerce platforms with multi-store management, advanced catalog features, and custom integrations. Magento supports complex workflows and high-volume transactions, helping manufacturers and distributors scale effectively.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Shopify",
    description:
      "Through shopify b2b web design, we create high-performing online stores optimized for conversion. With Shopify Plus capabilities, our builds support fast deployment, seamless app integrations, and user-friendly dashboards that make enterprise commerce simple and scalable.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "React",
    description:
      "Our react b2b web design services deliver fast, app-like experiences for modern enterprises. React enables dynamic interfaces, rapid rendering, and future-ready builds that adapt to evolving customer journeys and complex digital ecosystems.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Node.js",
    description:
      "We provide node.js b2b web design that powers secure, high-speed backends and real-time applications. Node.js supports API-driven integrations and scalable architectures, ensuring enterprise websites run reliably under heavy traffic and complex data requirements.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const b2bWebDesignAgencyWorkflowData = {
  title: "Our Process",
  description:
    "A structured B2B web design process provides clarity from the first conversation to final delivery. Every step is designed to align business goals with user expectations, ensuring the website functions as a growth asset rather than just a digital placeholder.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "The process begins with UX research and design thinking to define goals, audiences, and challenges. Insights are translated into an enterprise website development workflow that sets priorities for structure, functionality, and design direction.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Wireframing & Prototyping",
      description:
        "Ideas are shaped into wireframing & prototyping, where layouts and user journeys are mapped. This stage ensures the site supports a content-first strategy, balancing usability with enterprise requirements before development begins.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Design & Development",
      description:
        "With a clear framework in place, our team focuses on visual design, responsive builds, and CMS integration. The responsive development cycle ensures flexibility across devices while keeping scalability in mind for future growth.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Testing & Optimization",
      description:
        "Every build undergoes rigorous checks, including conversion testing, performance reviews, and usability audits. This step validates lead pathways, navigation, and page speed, making sure the site performs to the standards of a B2B website redesign strategy or new build.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Launch & Continuous Improvement",
      description:
        "The final phase is not just delivery, but ensuring readiness for market impact. Post-launch, websites are monitored, refined, and adjusted to support ongoing optimization and long-term results.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const b2bWebDesignAgencyWhyChooseUsData = [
  {
    id: 1,
    title: "Enterprise-Level Quality Assurance",
    description:
      "With ISO 9001 certification, every project is handled with precision and consistency. This ensures reliable outcomes and enterprise-focused design strategies that align with corporate requirements.",
    icon: "data",
  },
  {
    id: 2,
    title: "Certified Design & Marketing Expertise",
    description:
      "Holding Google Partner Certification and HubSpot Partner Certification, we create integration-ready websites that connect seamlessly with broader digital ecosystems while reinforcing authority and trust.",
    icon: "responsive",
  },
  {
    id: 3,
    title: "Conversion-Driven Design Approach",
    description:
      "Websites are built with conversion-driven design to support lead generation optimization. The focus is on structure and function that turn engagement into measurable opportunities.",
    icon: "seo",
  },
  {
    id: 4,
    title: "Designed for Complex B2B Journeys",
    description:
      "As a B2B responsive web design firm, we provide solutions built for scalability and corporate-level support. Each project establishes a future-proof digital presence that adapts to evolving needs.",
    icon: "trust",
  },
  {
    id: 5,
    title: "Growth-Focused Website Development",
    description:
      "Our growth-focused website design methodology ensures each build supports long-term business objectives. Websites are crafted to strengthen trust, generate leads, and expand digital reach.",
    icon: "goals",
  },
];

// FAQ Data
export const b2bWebDesignAgencyFAQsData = [
  {
    id: 1,
    question:
      "Why should I choose Website Digitals for my B2B website project?",
    answer:
      "Website Digitals specializes in professional B2B website solutions that are built for lead generation, scalability, and long-term growth. Our process combines strategy, design, and technology to deliver measurable results for firms.",
  },
  {
    id: 2,
    question: "Does Website Digitals work with enterprises and growing firms?",
    answer:
      "Yes. Website Digitals is a custom B2B web design agency for enterprises and growing firms. We tailor each project to business goals, industry standards, and user expectations.",
  },
  {
    id: 3,
    question: "How can I request a quote from Website Digitals?",
    answer:
      "You can easily request a quote from Website Digitals by filling out our website form or scheduling a discovery call. Our team reviews your requirements and prepares a proposal tailored to your business goals, ensuring clarity on scope, pricing, and timelines.",
  },
  {
    id: 4,
    question: "What is a B2B web design agency?",
    answer:
      "A B2B web design agency builds websites for businesses selling to other businesses, focusing on long buying cycles and decision-maker needs.",
  },
  {
    id: 5,
    question: "What are the benefits of hiring a B2B website design company?",
    answer:
      "A B2B website design company helps generate leads, improve credibility, and align websites with business goals for better ROI.",
  },
  {
    id: 6,
    question: "What are the best practices for B2B website design?",
    answer:
      "Best practices for B2B website design include clear navigation, responsive layouts, strong branding, and conversion-focused content.",
  },
  {
    id: 7,
    question: "How do B2B websites differ from B2C websites?",
    answer:
      "B2B websites focus on detailed content and lead nurturing for professional buyers, while B2C websites are built for faster consumer purchases.",
  },
  {
    id: 8,
    question: "Can I hire a B2B web design agency near me now?",
    answer:
      "Yes. You can hire a B2B web design agency near you or work with an experienced remote team. Website Digitals partners with firms locally and internationally, making it easy to start your project right away.",
  },
  {
    id: 9,
    question: "Do you offer affordable B2B website design packages?",
    answer:
      "Yes. Website Digitals provides affordable B2B website design packages tailored to company size and needs, without compromising on quality.",
  },
  {
    id: 10,
    question: "Who are the best B2B web design firms in the USA?",
    answer:
      "The best B2B web design firms in the USA are those with enterprise-level experience, certifications, and strong client portfolios. Website Digitals stands out by combining strategy, design, and long-term support.",
  },
  {
    id: 11,
    question: "What is the ROI of hiring a B2B website agency?",
    answer:
      "The ROI of hiring a B2B website agency comes from higher-quality leads, stronger brand trust, and scalable growth. A well-built website reduces friction in the buyer's journey, making it easier to convert prospects into clients.",
  },
  {
    id: 12,
    question: "How do I hire a B2B web design agency?",
    answer:
      "To hire B2B web design agency services, you can schedule a consultation or submit your project details through our website. Website Digitals reviews your goals and prepares a tailored proposal, ensuring clarity on scope, pricing, and timelines.",
  },
  {
    id: 13,
    question:
      "Why choose a custom B2B web design agency like Website Digitals?",
    answer:
      "A custom B2B web design agency builds websites tailored to unique workflows, branding, and conversion goals. Website Digitals delivers flexible, CMS-driven solutions designed to scale with your business while improving lead quality and usability.",
  },
  {
    id: 14,
    question:
      "What are the benefits of working with a specialized B2B web design agency?",
    answer:
      "A specialized B2B web design agency focuses on complex buyer journeys and industry-specific needs. Website Digitals combines certifications, proven frameworks, and sector expertise to create websites that engage decision-makers and convert them into long-term clients.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const b2bWebDesignAgencyServicesSectionData = {
  heading: "Our Comprehensive B2B Web Design Services for Growing Firms",
  description:
    "Our B2B web development services adapt to industry needs, helping businesses strengthen their digital presence and achieve measurable results.",
  showDescription: true,
  cta: {
    label: "Start Your Project",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const b2bWebDesignAgencyIndustriesSectionData = {
  heading: "B2B Industries We Specialize In",
  description:
    "We deliver industry-specific B2B web design that blends compliance, usability, and growth strategies to connect with decision-makers and drive measurable results.",
  cta: {
    text: "Scale My Business Online",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const b2bWebDesignAgencyIndustriesCardsData = [
  {
    title: "SaaS",
    description:
      "We provide b2b web design for SaaS companies that accelerate demo bookings, subscription signups, and product adoption. From pricing pages to integration marketplaces, our designs drive conversions and scale with rapid growth.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "SaaS B2B Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "As a leading b2b web design agency for healthcare, we build HIPAA-compliant, WCAG-accessible websites that inspire trust. Features like patient portals, physician profiles, and locator tools help organizations engage patients and stakeholders seamlessly.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare B2B Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Manufacturing",
    description:
      "Our b2b web design for manufacturing highlights products with interactive catalogs, downloadable spec sheets, and RFQ forms. We create enterprise-ready platforms that simplify complex sales cycles and strengthen credibility with distributors and procurement teams.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Manufacturing B2B Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Telecom",
    description:
      "We deliver b2b web design for telecom companies focused on scalability and engagement. From plan comparison tools to coverage maps and SLA showcases, our websites help providers present services clearly and win enterprise clients.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Telecom B2B Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "We specialize in b2b web design for educational institutions, supporting enrollment, engagement, and credibility. With program finders, application tracking, and LMS/CRM integrations, our websites enhance user journeys for students, faculty, and administrators.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Education B2B Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Construction",
    description:
      "As a trusted b2b web agency for construction, we design lead-generating platforms that showcase projects, intake RFPs, and build authority. Our solutions help firms present evidence of expertise, comply with industry standards, and win bids confidently.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Construction B2B Web Design",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const b2bWebDesignAgencyWhyChooseUsSectionData = {
  heading: "Why Firms Trust Our B2B Web Design Agency",
  description:
    "Choosing the right agency means working with a partner that delivers measurable results while meeting the highest standards. Our process is guided by proven frameworks, certifications, and a commitment to professional B2B website solutions that drive growth.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const b2bWebDesignAgencyTechnologiesSectionData = {
  heading: "Trusted Platforms We Build On",
  description:
    "We build B2B websites on trusted platforms that combine performance, security, and flexibility. Our expertise spans CMS, eCommerce, and frameworks, allowing us to match the right technology to your business goals and deliver measurable growth.",
  showDescription: true,
  cta: {
    text: "Start Your Project",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const b2bWebDesignAgencyFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "B2B Web Design Agency",
      href: "/web-design/b2b-web-design-agency",
    },
  },
  heading: "Launch a Lead-Driving Website Now",
  description: [
    "Start your B2B website project with a trusted B2B web design agency that delivers scalable solutions and lead-driving design. Let's build a platform built for growth and ready to perform.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "B2B Web Design Agency",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Build My Website",
    href: "#",
    className: "offer-btn primary",
  },
};
