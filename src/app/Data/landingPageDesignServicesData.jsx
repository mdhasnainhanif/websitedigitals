import { BagIcon } from "@/icons";

// Metadata for Landing Page Design Services
export const landingPageDesignServicesMetadata = {
  title: "Hire #1 Landing Page Design Services That Drive Conversions",
  description:
    "Scale your business with a landing page design company that delivers proven CRO strategies. Website Digitals turns clicks into loyal customers.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-design/landing-page-design-services/",
  openGraph: {
    title: "Hire #1 Landing Page Design Services That Drive Conversions",
    description:
      "Scale your business with a landing page design company that delivers proven CRO strategies. Website Digitals turns clicks into loyal customers.",
    url: "https://www.websitedigitals.com/web-design/landing-page-design-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/landing-page-design-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Landing Page Design Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire #1 Landing Page Design Services That Drive Conversions",
    description:
      "Scale your business with a landing page design company that delivers proven CRO strategies. Website Digitals turns clicks into loyal customers.",
    images: [
      "https://websitedigitals.com/assets/images/landing-page-design-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-design/landing-page-design-services/",
  },
};

export const landingPageDesignServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Landing Page Design Services",
      href: "/web-design/landing-page-design-services",
    },
  },
  heading: "Turn Clicks into Clients with [[Landing Page Design Services]]",
  description: [
    "Many businesses struggle to turn clicks into leads when pages don't guide visitors clearly.\n At Website Digitals, we provide professional and high-converting landing page design services built for results.\n\nOur responsive layouts, persuasive call-to-action buttons, and proven conversion rate optimization methods help businesses grow across industries.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Boost Conversions Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-landing", label: "Custom Landing Page Design" },
      { value: "landing-optimization", label: "Landing Page Optimization" },
      {
        value: "conversion-optimization",
        label: "Conversion Rate Optimization",
      },
      { value: "mobile-landing", label: "Mobile Landing Page Design" },
      { value: "ppc-landing", label: "PPC Landing Page Design" },
      { value: "seo-landing", label: "SEO Landing Page Design" },
    ],
    initialValues: {
      help: "custom-landing",
    },
  },
};

export const landingPageDesignServicesData = [
  {
    id: 1,
    title: "Custom Landing Page Design",
    description:
      "Our custom landing page design focuses on creating a tailored user experience that aligns with your audience and objectives. Guided by CRO best practices, every page is designed to be visually engaging while driving measurable conversions.",
    icon: <BagIcon />,
    isActive: true,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/custom-landing-page-design.svg",
  },
  {
    id: 2,
    title: "Landing Page Optimization",
    description:
      "Our landing page optimization services enhance performance through A/B testing, content refinements, and usability improvements. By reducing bounce rates and improving click-through rate (CTR), we ensure each visit is more likely to convert.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/landing-page-optimization.svg",
  },
  {
    id: 3,
    title: "Landing Pages for Every Industry",
    description:
      "We provide e-commerce landing page design services that highlight products, SaaS landing pages that simplify complex offers, and lead generation pages that convert interest into action. Whether built on WordPress, Shopify, or another CMS, every design prioritizes functionality and results.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/landing-pages-for-every-industry.svg",
  },
  {
    id: 4,
    title: "Regional & Campaign-Specific Design",
    description:
      "Our regional and campaign-focused designs adapt to local markets with attention to behavior, language, and culture. Whether you're promoting locally or expanding globally, each page is built to deliver relevance and stronger engagement.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/regional-campaign-specific-design.svg",
  },
  {
    id: 5,
    title: "Mobile-First Landing Pages",
    description:
      "We create mobile-friendly landing pages that provide seamless experiences across all devices. Our responsive designs ensure fast loading times and intuitive navigation, maximizing conversions from mobile traffic.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/mobile-first-landing-pages.svg",
  },
  {
    id: 6,
    title: "Conversion Rate Optimization",
    description:
      "Our CRO services focus on data-driven improvements to increase conversion rates. Through user behavior analysis, A/B testing, and strategic design changes, we help you turn more visitors into customers.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/landing-page-design-services/our-comprehensive-landing-page-design-services/conversion-rate-optimization.svg",
  },
];

export const landingPageDesignServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Businesses Trust Our Landing Page Design Company",
  description: [
    "Choosing the right team for your landing page is about more than visuals. It’s about strategy, performance, and building a design that earns results. Our unique approach ensures every project is backed by expertise, credibility, and proven practices.",
  ],
  items: [
    {
      id: "landing-firstScroller",
      step: 1,
      title: "Data-Driven Design Decisions",
      icon: "/assets/images/landing-page-design-services/why-businesses-trust-our-landing-page-design-company/data-driven-design-decisions.svg",
      paragraphs: [
        "Measurable results guide every choice we make. Through A/B testing, ongoing refinements, and conversion rate optimization, we ensure your landing experience performs better with each change. Backed by usability studies, our process is built on real user behavior, not assumptions.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data-Driven Design Decisions",
        width: 669,
        height: 376,
      },
    },
    {
      id: "landing-secondScroller",
      step: 2,
      title: "Optimized for Every Device",
      icon: "/assets/images/landing-page-design-services/why-businesses-trust-our-landing-page-design-company/optimized-for-every-device.svg",
      paragraphs: [
        "A design should perform flawlessly on any screen. Our work includes responsive landing page design structures and mobile-friendly landing pages so your visitors enjoy consistent performance whether they’re on desktop, tablet, or mobile.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Optimized for Every Device",
        width: 669,
        height: 376,
      },
    },
    {
      id: "landing-thirdScroller",
      step: 3,
      title: "SEO & PPC Friendly",
      icon: "/assets/images/landing-page-design-services/why-businesses-trust-our-landing-page-design-company/seo-ppx-friendly.svg",
      paragraphs: [
        "Traffic should never go to waste. With SEO-friendly landing pages, you gain visibility in organic search, while a PPC-ready design ensures paid campaigns convert at the highest possible rate. Each landing experience is built with search intent and ad alignment in mind.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "SEO & PPC Friendly",
        width: 669,
        height: 376,
      },
    },
    {
      id: "landing-fourthScroller",
      step: 4,
      title: "Built to Generate Trust",
      icon: "/assets/images/landing-page-design-services/why-businesses-trust-our-landing-page-design-company/built-to-generate-trust.svg",
      paragraphs: [
        "Trust drives conversions. We use clear CTAs, transparent layouts, and a focus on user experience to guide actions without confusion. By incorporating proven trust signals and building strategic lead generation pathways, we help visitors feel confident taking the next step.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Built to Generate Trust",
        width: 669,
        height: 376,
      },
    },
    {
      id: "landing-fifthScroller",
      step: 5,
      title: "Industry Expertise",
      icon: "/assets/images/landing-page-design-services/why-businesses-trust-our-landing-page-design-company/industry-expertise.svg",
      paragraphs: [
        "Our experience extends across sectors and strategies. As a full-service provider of digital marketing services, we combine the insights of a web design agency with UX design expertise to deliver solutions that support both immediate campaigns and long-term growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Industry Expertise",
        width: 669,
        height: 376,
      },
    },
  ],

  cta: null,
};

export const landingPageDesignServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Landing Page Design Services",
      href: "/web-design/landing-page-design-services",
    },
  },
  heading: "Launch a High-Converting Landing Page Today",
  description: [
    "Turn more clicks into customers with our landing page creation services and professional landing page design built for results.",
  ],
  bullets: [],
  cta: {
    text: "Get My Page Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Landing Page Design Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const landingPageDesignServicesStatsData = [
  {
    id: 1,
    value: 250,
    suffix: "+",
    label: "Pages Built",
  },
  {
    id: 2,
    value: 40,
    suffix: "%",
    label: "Conversion Lift",
  },
  {
    id: 3,
    value: 15,
    suffix: "+",
    label: "Industries",
  },
  {
    id: 4,
    value: 95,
    suffix: "%",
    label: "Retention Rate",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const landingPageDesignServicesImpactCardsData = [
  {
    id: 1,
    title: "Boost Your Conversions",
    description:
      "With conversion rate optimization and high-converting landing page design, businesses turn clicks into sign-ups, inquiries, or sales. Well-structured lead generation pages increase the chance of every visit becoming a customer.",
    icon: "conversion",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/landing-page-design-services/why-landing-page-design-matters-for-business-growth/boost-your-conversions.svg",
  },
  {
    id: 2,
    title: "Engage Users Effectively",
    description:
      "User experience (UX) comes first. Clear layouts, mobile-friendly design, and a responsive landing page keep visitors engaged and reduce bounce rates.",
    icon: "engagement",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/landing-page-design-services/why-landing-page-design-matters-for-business-growth/engage-users-effectively.svg",
  },
  {
    id: 3,
    title: "Maximize Marketing ROI",
    description:
      "SEO-friendly landing pages drive organic traffic, while PPC landing pages ensure paid campaigns deliver results. With digital marketing integration, every click brings stronger returns.",
    icon: "roi",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/landing-page-design-services/why-landing-page-design-matters-for-business-growth/maximize-marketing-roi.svg",
  },
  {
    id: 4,
    title: "Build Trust and Confidence",
    description:
      "Trust grows through transparent messaging, strong calls-to-action, and proven layouts. When credibility is clear, conversions happen naturally.",
    icon: "trust",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/landing-page-design-services/why-landing-page-design-matters-for-business-growth/build-trust-and-confidence.svg",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const landingPageDesignServicesImpactSectionData = {
  heading: "Why Landing Page Design Matters for Business Growth",
  showDescription: true,
  description:
    "A well-designed landing page is more than just a digital storefront. It is the point where visitors decide whether to take action or leave. The right design approach ensures focus, guides attention, and improves overall campaign performance.",
};

// Industries Data
export const landingPageDesignServicesIndustriesData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Our landing page design services for ecommerce stores focus on reducing cart abandonment and improving checkout flow. Product showcases, reviews, and seamless navigation drive higher conversions.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "We deliver landing page design services for healthcare providers that emphasize patient trust, accessibility, and security. Features like HIPAA-ready forms and appointment scheduling boost engagement.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Our landing page design services for real estate agents showcase properties with IDX/MLS integration, maps, and tour embeds. Designed for credibility, they capture and route quality leads.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 4,
    title: "Fintech",
    description:
      "We provide landing page design services for fintech startups that communicate value while ensuring compliance. Security signals, trust badges, and simple onboarding flows increase sign-ups.",
    icon: "/assets/images/industry/fintech.svg",
  },
  {
    id: 5,
    title: "B2B",
    description:
      "Our landing page design services for B2B manufacturing highlight technical details with RFQ forms, product specs, and distributor pathways. Pages are built to support long-cycle lead nurturing.",
    icon: "/assets/images/industry/b2b.svg",
  },
  {
    id: 6,
    title: "Dental",
    description:
      "We create landing page design services for dental practices that build patient confidence. Online booking, before/after galleries, and insurance info make it easy to schedule appointments.",
    icon: "/assets/images/industry/healthcare.svg",
  },
];

// Technologies Data (Platforms)
export const landingPageDesignServicesTechnologiesData = [
  {
    id: 1,
    title: "WordPress",
    description:
      "Our landing page design services for WordPress focus on custom themes, SEO-friendly layouts, and flexible integrations that help brands scale with ease.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/wordpress.svg",
  },
  {
    id: 2,
    title: "Shopify",
    description:
      "We offer landing page design service for Shopify that optimizes product showcases, checkout experiences, and app integrations to maximize e-commerce conversions.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/shopify.svg",
  },
  {
    id: 3,
    title: "Wix",
    description:
      "Our landing page design services for Wix deliver user-friendly, drag-and-drop pages crafted to engage visitors and help small businesses grow online.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/wix.svg",
  },
  {
    id: 4,
    title: "Squarespace",
    description:
      "We provide landing page design service for Squarespace tailored to creative professionals, ensuring elegant and brand-focused layouts that convert.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/squarespace.svg",
  },
  {
    id: 5,
    title: "Drupal",
    description:
      "Our landing page design services for Drupal emphasize enterprise-level security, advanced integrations, and scalable performance for high-traffic businesses.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/drupal.svg",
  },
  {
    id: 6,
    title: "Elementor",
    description:
      "With our landing page design service for Elementor, businesses gain CRO-focused, drag-and-drop flexibility to create visually dynamic pages that convert.",
    icon: "/assets/images/landing-page-design-services/platforms-we-specialize-in/elementor.svg",
  },
];

// Workflow Data (for StepSection component)
export const landingPageDesignServicesWorkflowData = {
  title: "Our Process",
  description:
    "Every effective landing page is the result of a structured approach. Our process ensures each stage is focused on delivering clarity, results, and measurable growth.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Research & Strategy",
      description:
        "We begin by understanding your audience and campaign objectives. Through analysis of conversion rate trends, user experience insights, and defined lead generation goals, we create a roadmap that aligns design choices with measurable business outcomes.",
      image: "/assets/images/landing-page-design-services/our-process/research-strategy.svg",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Wireframing & Design",
      description:
        "The next step is mapping out the structure. Our team focuses on custom landing page design that reflects your brand, combined with a call-to-action strategy that directs attention where it matters most. With layouts crafted for responsive design, visitors receive a consistent experience across all devices.",
      image: "/assets/images/landing-page-design-services/our-process/wireframing-design.svg",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Development & Optimization",
      description:
        "Once the wireframe is approved, we move into build and refine. Using modern tools for landing page development, we implement designs with results in mind. Through A/B testing and careful iteration, we ensure the layout drives action effectively. To strengthen visibility, each page is structured as an SEO-friendly landing page ready for organic traffic growth.",
      image: "/assets/images/landing-page-design-services/our-process/development-optimization.svg",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Continuous Improvement",
      description:
        "After launch, we continue refining effectiveness. With analytics-driven optimization, we identify opportunities for bounce rate reduction and increased engagement. By applying CRO principles, your landing page adapts to audience behavior and maintains consistent results over time.",
      image: "/assets/images/landing-page-design-services/our-process/continuous-improvement.svg",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const landingPageDesignServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Design Decisions",
    description:
      "Measurable results guide every choice we make. Through A/B testing, ongoing refinements, and conversion rate optimization, we ensure your landing experience performs better with each change. Backed by usability studies, our process is built on real user behavior, not assumptions.",
    icon: "data",
  },
  {
    id: 2,
    title: "Optimized for Every Device",
    description:
      "A design should perform flawlessly on any screen. Our work includes responsive landing page design structures and mobile-friendly landing pages so your visitors enjoy consistent performance whether they're on desktop, tablet, or mobile.",
    icon: "responsive",
  },
  {
    id: 3,
    title: "SEO & PPC Friendly",
    description:
      "Traffic should never go to waste. With SEO-friendly landing pages, you gain visibility in organic search, while a PPC-ready design ensures paid campaigns convert at the highest possible rate. Each landing experience is built with search intent and ad alignment in mind.",
    icon: "seo",
  },
  {
    id: 4,
    title: "Built to Generate Trust",
    description:
      "Trust drives conversions. We use clear CTAs, transparent layouts, and a focus on user experience to guide actions without confusion. By incorporating proven trust signals and building strategic lead generation pathways, we help visitors feel confident taking the next step.",
    icon: "trust",
  },
  {
    id: 5,
    title: "Industry Expertise",
    description:
      "Our experience extends across sectors and strategies. As a full-service provider of digital marketing services, we combine the insights of a web design agency with UX design expertise to deliver solutions that support both immediate campaigns and long-term growth.",
    icon: "expertise",
  },
];

// FAQ Data
export const landingPageDesignServicesFAQsData = [
  {
    id: 1,
    question:
      "Why should I choose Website Digitals for landing page design services?",
    answer:
      "We create landing pages tailored to your goals, using a proven process focused on conversion-driven design and measurable results. Our expertise ensures your campaigns achieve lasting growth.",
  },
  {
    id: 2,
    question:
      "What makes Website Digitals different from other web design agencies?",
    answer:
      "We specialize in high-converting landing pages backed by research, testing, and strategy. By blending design expertise with marketing insights, we deliver solutions that outperform templates.",
  },
  {
    id: 3,
    question:
      "Does Website Digitals offer ongoing support after launching a landing page?",
    answer:
      "Yes. We provide post-launch support, including monitoring, optimization, and updates. Our goal is to ensure your page keeps performing as user behavior evolves.",
  },
  {
    id: 4,
    question: "What is a landing page design service?",
    answer:
      "It is the creation of a focused web page built to achieve one goal, such as sign-ups, leads, or sales. Clear messaging, strong CTAs, and user-centered layouts make every visit count.",
  },
  {
    id: 5,
    question: "What are the benefits of professional landing page design?",
    answer:
      "You gain responsive layouts, persuasive content, and optimized CTAs that boost engagement and conversions. Professional design also improves trust and overall marketing ROI.",
  },
  {
    id: 6,
    question: "How does landing page design impact conversions?",
    answer:
      "Strong design reduces distractions, guides user focus, and uses value-driven content with clear CTAs. When every element supports the goal, conversions increase naturally.",
  },
  {
    id: 7,
    question: "What are conversion landing page design services?",
    answer:
      "Conversion landing page design services focus on reducing friction and maximizing results. They use data-driven layouts, trust signals, and clear user journeys to turn clicks into measurable actions.",
  },
  {
    id: 8,
    question: "Can you share examples of successful landing page designs?",
    answer:
      "Yes. Our projects feature clean layouts, concise messaging, and strong visuals. We combine these with proven strategies like A/B testing to deliver results for diverse industries.",
  },
  {
    id: 9,
    question: "Where can I hire landing page design services near me now?",
    answer:
      "You can hire landing page design services from agencies with both local and global expertise. Website Digitals provides tailored solutions that adapt to your market and audience.",
  },
  {
    id: 10,
    question: "How can I buy an affordable landing page design package?",
    answer:
      "Many providers offer budget-friendly options, but affordability should include essentials like responsive design, CTA placement, and optimization. We outline all inclusions upfront.",
  },
  {
    id: 11,
    question:
      "What should I know about landing page design pricing and packages?",
    answer:
      "Pricing depends on customization, integrations, and testing. Transparent agencies clearly define deliverables so you understand the value before investing.",
  },
  {
    id: 12,
    question: "Do you provide Unbounce landing page design services?",
    answer:
      "Yes. We design on Unbounce with custom layouts, testing, and optimization tailored to its framework. This ensures campaigns run efficiently on the platform.",
  },
  {
    id: 13,
    question: "Are custom landing page design services better than templates?",
    answer:
      "Templates are quick and affordable, but the best custom landing page design services build around your brand, goals, and audience. Customization ensures stronger long-term ROI.",
  },
  {
    id: 14,
    question: "Who provides the best custom landing page design services?",
    answer:
      "The best custom landing page design services come from agencies that combine creative design with CRO expertise. Website Digitals delivers personalized solutions proven to increase conversions.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const landingPageDesignServicesServicesSectionData = {
  heading: "Our Comprehensive Landing Page Design Services",
  description:
    "Every business has unique goals, and your landing page should reflect them. Our services cover every dimension of design, from tailored experiences to optimization and industry-specific solutions.",
  showDescription: true,
  cta: {
    label: "Get My Page Designed",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const landingPageDesignServicesIndustriesSectionData = {
  heading: "Industries We Design For",
  description:
    "We tailor landing pages to each market, combining compliance, creativity, and trust to deliver measurable growth.",
  cta: {
    text: "Grow Conversions Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const landingPageDesignServicesIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our landing page design services for ecommerce stores focus on reducing cart abandonment and improving checkout flow. Product showcases, reviews, and seamless navigation drive higher conversions.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/ecommerce.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/ecommerce.svg`,
    alt: "Ecommerce Landing Page Design",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "We deliver landing page design services for healthcare providers that emphasize patient trust, accessibility, and security. Features like HIPAA-ready forms and appointment scheduling boost engagement.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/healthcare.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/healthcare.svg`,
    alt: "Healthcare Landing Page Design",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Our landing page design services for real estate agents showcase properties with IDX/MLS integration, maps, and tour embeds. Designed for credibility, they capture and route quality leads.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/real-estate.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/real-estate.svg`,
    alt: "Real Estate Landing Page Design",
    width: 71,
    height: 71,
  },
  {
    title: "Fintech",
    description:
      "We provide landing page design services for fintech startups that communicate value while ensuring compliance. Security signals, trust badges, and simple onboarding flows increase sign-ups.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/fintech.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/fintech.svg`,
    alt: "Fintech Landing Page Design",
    width: 71,
    height: 71,
  },
  {
    title: "B2B",
    description:
      "Our landing page design services for B2B manufacturing highlight technical details with RFQ forms, product specs, and distributor pathways. Pages are built to support long-cycle lead nurturing.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/b2b.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/b2b.svg`,
    alt: "B2B Landing Page Design",
    width: 71,
    height: 71,
  },
  {
    title: "Dental",
    description:
      "We create landing page design services for dental practices that build patient confidence. Online booking, before/after galleries, and insurance info make it easy to schedule appointments.",
    imgOriginal: `/assets/images/landing-page-design-services/industries-we-design-for/original/dental.svg`,
    imgWhite: `/assets/images/landing-page-design-services/industries-we-design-for/hover/dental.svg`,
    alt: "Dental Landing Page Design",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const landingPageDesignServicesWhyChooseUsSectionData = {
  heading: "Why Businesses Trust Our Landing Page Design Company",
  description:
    "Choosing the right team for your landing page is about more than visuals. It's about strategy, performance, and building a design that earns results. Our unique approach ensures every project is backed by expertise, credibility, and proven practices.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const landingPageDesignServicesTechnologiesSectionData = {
  heading: "Platforms We Specialize In",
  description:
    "We design high-converting landing pages across today's most trusted platforms. Our expertise ensures every business, whether e-commerce, service-based, or enterprise, gets a tailored solution built for performance, scalability, and growth.",
  showDescription: true,
  cta: {
    text: "Launch My Page",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const landingPageDesignServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Landing Page Design Services",
      href: "/web-design/landing-page-design-services",
    },
  },
  heading: "Launch a High-Converting Landing Page Today",
  description: [
    "Turn more clicks into customers with our landing page creation services and professional landing page design built for results.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Landing Page Design Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Get My Page Today",
    href: "#",
    className: "offer-btn primary",
  },
};
