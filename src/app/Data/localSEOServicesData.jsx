import { BagIcon } from "@/icons";

// Metadata for Local SEO Services
export const localSEOServicesMetadata = {
  title: "Hire Local SEO Services That Drive Growth | Website Digitals",
  description:
    "Get found by nearby buyers with our local SEO agency. Website Digitals delivers strategies that boost calls, visibility, and sales. Start Now!",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/digital-marketing/local-seo-services/",
  openGraph: {
    title: "Hire Local SEO Services That Drive Growth | Website Digitals",
    description:
      "Get found by nearby buyers with our local SEO agency. Website Digitals delivers strategies that boost calls, visibility, and sales. Start Now!",
    url: "https://www.websitedigitals.com/digital-marketing/local-seo-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/local-seo-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Local SEO Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Local SEO Services That Drive Growth | Website Digitals",
    description:
      "Get found by nearby buyers with our local SEO agency. Website Digitals delivers strategies that boost calls, visibility, and sales. Start Now!",
    images: [
      "https://websitedigitals.com/assets/images/local-seo-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/digital-marketing/local-seo-services/",
  },
};

export const localSEOServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Local SEO Services",
      href: "/services/local-seo-services",
    },
  },
  heading: "Local SEO Services That Help [[Customers]] Find Your [[Business]]",
  description: [
    "Many local businesses struggle to show up where customers are searching because their local listing isn't optimized.\n\nWith Website Digitals, you get affordable local SEO services built for results. Our local business SEO services optimize your Google My Business profile, boost your Google Maps ranking, and help you attract more calls and nearby customers.\n\nClear calls to action, then turn that local traffic into new customers.",
  ],
  isCta: false,
  image: null,
  formConfig: {
    buttonText: "Get Found Locally",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "google-business-optimization", label: "Google Business Profile Optimization" },
      { value: "citation-management", label: "Citation & Directory Management" },
      { value: "local-content", label: "Local Content & Keyword Targeting" },
      { value: "regional-campaigns", label: "Regional & Industry-Specific Campaigns" },
      { value: "local-seo-audit", label: "Local SEO Audit & Strategy" },
      { value: "reputation-management", label: "Online Reviews & Reputation Management" },
    ],
    initialValues: {
      help: "google-business-optimization",
    },
  },
};

export const localSEOServicesData = [
  {
    id: 1,
    title: "Google Business Profile Optimization",
    description:
      "We make your Google Business Profile complete, accurate, and engaging. Alongside managing local listings, we apply schema markup so search engines clearly understand your business.",
    icon: <BagIcon />,
    isActive: true,
    image: "/assets/images/local-seo-services/explore-our-proven-local-seo-solutions/google-business-profile-optimization.svg",
  },
  {
    id: 2,
    title: "Citation & Directory Management",
    description:
      "Our local citation-building services keep your business details consistent across trusted directories. With business directory SEO and a focus on online reviews, we strengthen both credibility and trust.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/local-seo-services/explore-our-proven-local-seo-solutions/citation-directory-management.svg",
  },
  {
    id: 3,
    title: "Local Content & Keyword Targeting",
    description:
      "We use tailored local SEO marketing strategies and research local keywords to attract nearby buyers. Each local content strategy improves visibility and drives qualified traffic.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/local-seo-services/explore-our-proven-local-seo-solutions/local-content-keyword-targeting.svg",
  },
  {
    id: 4,
    title: "Regional & Industry-Specific Campaigns",
    description:
      "Every industry and region requires unique targeting. Whether in retail, services, or professional sectors, we adapt strategies and track results to deliver measurable growth.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/local-seo-services/explore-our-proven-local-seo-solutions/regional-industry-specific-campaigns.svg",
  },
  {
    id: 5,
    title: "Online Reviews & Reputation Management",
    description:
      "We help you build and maintain a strong online reputation through strategic review management, encouraging positive feedback, and addressing customer concerns to boost local credibility.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/local-seo-services/explore-our-proven-local-seo-solutions/online-reviews-reputation-management.svg",
  },
];

export const localSEOServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our Local SEO Agency the Right Choice",
  description: [
    "Local SEO requires a structured approach that blends strategy with industry knowledge. We focus on building trust, ensuring transparency, and driving growth through proven methods.",
  ],
  items: [
    {
      id: "local-seo-firstScroller",
      step: 1,
      title: "Data-Driven Local Strategies",
      icon: "/assets/images/local-seo-services/what-makes-our-local-seo-agency-the-right-choice/data-driven-local-strategies.svg",
      paragraphs: [
        "We apply local SEO ranking factors that directly impact visibility. From accurate citation management to structured data and consistent reputation management, our strategies address what matters most for search performance.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data-Driven Local Strategies",
        width: 669,
        height: 376,
      },
    },
    {
      id: "local-seo-secondScroller",
      step: 2,
      title: "Optimized for Every Device",
      icon: "/assets/images/local-seo-services/what-makes-our-local-seo-agency-the-right-choice/optimized-for-every-device.svg",
      paragraphs: [
        "With most searches happening on mobile, our campaigns prioritize mobile SEO for local businesses. Through responsive optimization, we make sure your business is easy to find and interact with on every device.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Optimized for Every Device",
        width: 669,
        height: 376,
      },
    },
    {
      id: "local-seo-thirdScroller",
      step: 3,
      title: "Built to Earn Trust",
      icon: "/assets/images/local-seo-services/what-makes-our-local-seo-agency-the-right-choice/built-to-earn-trust.svg",
      paragraphs: [
        "Trust drives conversions. By maintaining NAP consistency, encouraging positive online reviews, and reinforcing credibility with strong trust signals, we help your business stand out locally.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Built to Earn Trust",
        width: 669,
        height: 376,
      },
    },
    {
      id: "local-seo-forthScroller",
      step: 4,
      title: "Transparent Reporting",
      icon: "/assets/images/local-seo-services/what-makes-our-local-seo-agency-the-right-choice/transparent-reporting.svg",
      paragraphs: [
        "You'll always know how your investment performs. Our analytics-driven optimization and search visibility tracking deliver insights that highlight results and reveal opportunities for growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Transparent Reporting",
        width: 669,
        height: 376,
      },
    },
    {
      id: "local-seo-fifthScroller",
      step: 5,
      title: "Expertise Across Industries",
      icon: "/assets/images/local-seo-services/what-makes-our-local-seo-agency-the-right-choice/expertise-across-industries.svg",
      paragraphs: [
        "Local SEO isn't one-size-fits-all. Whether it's SEO for small businesses, strategies tailored to professional services, or service area business SEO, we align campaigns with a tailored local content strategy built for your industry.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Expertise Across Industries",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: {
    text: "Grow Your Brand Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const localSEOServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Local SEO Services",
      href: "/services/local-seo-services",
    },
  },
  heading: "Get Seen First in Local Searches Now",
  description: [
    "Struggling to rank on Maps or local results?\n\nOur local SEO packages put your business in front of nearby customers fast. Work with local SEO experts and see the difference.",
  ],
  bullets: [],
  cta: {
    text: "Get My Local SEO Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Local SEO Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const localSEOServicesStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Businesses Optimized",
  },
  {
    id: 2,
    value: 85,
    suffix: "%",
    label: "Local Visibility Boost",
  },
  {
    id: 3,
    value: 10000,
    suffix: "+",
    label: "Listings Managed",
  },
  {
    id: 4,
    value: 3,
    suffix: "x",
    label: "More Leads",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const localSEOServicesImpactCardsData = [
  {
    id: 1,
    title: "Appear Where Customers Search",
    description:
      "A strong presence ensures your business connects with buyers at the right moment. Optimizing improves your Google Maps ranking, applies geo-targeted SEO, and secures placement in map pack optimization results that capture the majority of local clicks.",
    icon: "search",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/local-seo-services/how-local-seo-shapes-customer-decisions/appear-where-customers-search.svg",
  },
  {
    id: 2,
    title: "Build Trust With Local Customers",
    description:
      "Trust is a deciding factor in local search. Maintaining NAP consistency, generating authentic online reviews, and strengthening reputation signals show credibility, helping your business stand out and attract more customers.",
    icon: "trust",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/local-seo-services/how-local-seo-shapes-customer-decisions/build-trust-with-local-customers.svg",
  },
  {
    id: 3,
    title: "Drive More Sales From Nearby Traffic",
    description:
      "Local SEO helps nearby customers find you and convert them into leads and sales. By using SEO for local businesses and aligning with key local ranking factors, your business stays visible in the right places. Adding service area business optimization further increases calls and measurable growth.",
    icon: "sales",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/local-seo-services/how-local-seo-shapes-customer-decisions/drive-more-sales-from-nearby-traffic.svg",
  },
  {
    id: 4,
    title: "Support Long-Term Growth",
    description:
      "The impact of Local SEO extends well beyond immediate clicks. Strong local signals provide stability, while data-driven monitoring refines strategies to keep your business growing even as search algorithms advance.",
    icon: "growth",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/local-seo-services/how-local-seo-shapes-customer-decisions/support-long-term-growth.svg",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const localSEOServicesImpactSectionData = {
  heading: "How Local SEO Shapes Customer Decisions",
  showDescription: true,
  description:
    "Local SEO goes beyond visibility. It determines how customers find your business, compare options, and take action. By optimizing for location-based searches, your brand appears exactly when nearby buyers are ready to engage, turning search intent into real results.",
};

// Industries Data
export const localSEOServicesIndustriesData = [
  {
    id: 1,
    title: "Law Firms",
    description:
      "Boost client trust and visibility with local SEO for law firms. We help your practice appear in Google Maps and local searches so potential clients can find and choose you quickly when they need legal help.",
    icon: "/assets/images/industry/law-firm.svg",
  },
  {
    id: 2,
    title: "Restaurants",
    description:
      "Drive more dine-in visits and online orders with local SEO for restaurants. Your business will appear when nearby customers search for places to eat, helping you grow reservations and takeout sales.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 3,
    title: "Plumbers",
    description:
      "Get found first during urgent home repair searches through local SEO for plumbers. We make sure your business ranks high in local results, bringing in more calls and qualified leads.",
    icon: "/assets/images/industry/plumber.svg",
  },
  {
    id: 4,
    title: "HVAC Companies",
    description:
      "Reach local customers during high-demand seasons with local SEO for HVAC companies. Our strategies improve visibility for repair, installation, and maintenance services, driving more inquiries and bookings.",
    icon: "/assets/images/industry/hvac.svg",
  },
  {
    id: 5,
    title: "Chiropractors",
    description:
      "Expand your clinic's reach using local SEO for chiropractors. By improving local search visibility, we help more patients find your practice and schedule appointments with confidence.",
    icon: "/assets/images/industry/chiropractor.svg",
  },
  {
    id: 6,
    title: "Contractors",
    description:
      "Increase project opportunities with local SEO for contractors. We enhance your presence in service areas so you attract homeowners and businesses searching for trusted local experts.",
    icon: "/assets/images/industry/contractor.svg",
  },
];

// Technologies Data
export const localSEOServicesTechnologiesData = [
  {
    id: 1,
    title: "Google My Business",
    description:
      "As a trusted Google My Business optimization company, we build enterprise-grade local presence with custom profiles, review management, and seamless third-party integrations. Our Google-certified experts ensure long-term visibility and security for complex local ecosystems.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Local Citations",
    description:
      "Our local citation management creates flexible, user-friendly listings with powerful directory control and responsive optimization. We deliver tailored solutions that support multilingual publishing and optimized workflows for diverse industries.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Schema Markup",
    description:
      "As a leading schema markup implementation company, we design high-performance local SEO with secure structured data, advanced local business markup, and SEO-ready architecture. Our certified developers help boost local visibility and scale with demand.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Local Content Marketing",
    description:
      "We provide expert local content marketing services for businesses seeking a location-focused, SEO-first solution. Our builds enable rapid content delivery, flexible local targeting, and seamless omnichannel publishing to engage users across every device.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Review Management",
    description:
      "Our review management combines reputation building with customer feedback for lightning-fast trust building and conversion-friendly experiences. Ideal for businesses needing scalable, high-converting local presence with modern reputation architecture.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Local Analytics",
    description:
      "As a top local analytics company, we craft secure, modular tracking with robust reporting integrations and intuitive dashboard interfaces. Our analytics solutions enable rapid insights and long-term optimization to support your digital growth.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const localSEOServicesWorkflowData = {
  title: "Our Roadmap",
  description:
    "A structured process ensures every step of local SEO contributes to stronger visibility, higher rankings, and long-term growth. Each stage is built to strengthen credibility and deliver measurable results.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Local SEO Audit & Strategy",
      description:
        "We begin with a detailed audit of your online presence, checking NAP consistency and analyzing key local ranking factors like proximity, relevance, and prominence. From this, we create a tailored roadmap aligned with your objectives and lead generation goals.",
      image: "/assets/images/local-seo-services/our-roadmap/local-seo-audit-strategy.svg",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "On-Page Optimization",
      description:
        "With the strategy in place, we improve your site from within. This includes on-page SEO for local visibility, implementation of schema markup, and targeting geo-targeted keywords that connect with nearby customers.",
      image: "/assets/images/local-seo-services/our-roadmap/on-page-optimization.svg",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Citations & Reviews",
      description:
        "Trust and authority are built on consistency. Through citation building, we ensure accurate listings across directories. At the same time, we encourage online reviews and oversee reputation management practices that enhance credibility in local markets.",
      image: "/assets/images/local-seo-services/our-roadmap/citations-reviews.svg",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Ongoing Optimization & Reporting",
      description:
        "Local SEO requires continuous effort to sustain results. Using analytics-driven optimization and search visibility tracking, we monitor performance and refine strategies to keep your rankings moving upward through continuous improvement.",
      image: "/assets/images/local-seo-services/our-roadmap/ongoing-optimization-reporting.svg",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const localSEOServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Local Strategies",
    description:
      "We apply local SEO ranking factors that directly impact visibility. From accurate citation management to structured data and consistent reputation management, our strategies address what matters most for search performance.",
    icon: "data",
  },
  {
    id: 2,
    title: "Optimized for Every Device",
    description:
      "With most searches happening on mobile, our campaigns prioritize mobile SEO for local businesses. Through responsive optimization, we make sure your business is easy to find and interact with on every device.",
    icon: "mobile",
  },
  {
    id: 3,
    title: "Built to Earn Trust",
    description:
      "Trust drives conversions. By maintaining NAP consistency, encouraging positive online reviews, and reinforcing credibility with strong trust signals, we help your business stand out locally.",
    icon: "trust",
  },
  {
    id: 4,
    title: "Transparent Reporting",
    description:
      "You'll always know how your investment performs. Our analytics-driven optimization and search visibility tracking deliver insights that highlight results and reveal opportunities for growth.",
    icon: "reporting",
  },
  {
    id: 5,
    title: "Expertise Across Industries",
    description:
      "Local SEO isn't one-size-fits-all. Whether it's SEO for small businesses, strategies tailored to professional services, or service area business SEO, we align campaigns with a tailored local content strategy built for your industry.",
    icon: "expertise",
  },
];

// FAQ Data
export const localSEOServicesFAQsData = [
  {
    id: 1,
    question: "Why should I choose Website Digitals for local SEO services?",
    answer:
      "Website Digitals delivers measurable results through Google Maps optimization, citation management, and content strategies that help your business rank higher and attract local customers.",
  },
  {
    id: 2,
    question: "What makes Website Digitals different from other providers?",
    answer:
      "We combine data-driven insights with hands-on expertise, focusing on NAP consistency, online reviews, structured data, and ranking factors. Our approach builds trust and drives conversions for small businesses, startups, and service area companies.",
  },
  {
    id: 3,
    question: "Does Website Digitals offer custom local SEO packages?",
    answer:
      "Yes, we provide tailored local SEO packages based on your goals and competition, from affordable solutions for small businesses to advanced strategies for established brands.",
  },
  {
    id: 4,
    question: "What is local SEO, and how does it work?",
    answer:
      "Local SEO optimizes your online presence so your business appears in nearby searches. It involves NAP consistency, local keywords, Google Business Profile optimization, and customer reviews.",
  },
  {
    id: 5,
    question: "What are the benefits of local SEO services for small businesses?",
    answer:
      "Local SEO helps small businesses increase calls, visits, and online leads. It builds credibility with reviews and directory listings while improving visibility against larger competitors.",
  },
  {
    id: 6,
    question: "How can I rank higher on Google Maps?",
    answer:
      "Optimize your Google Business Profile with accurate details, categories, and photos. Consistent NAP data, positive reviews, citation building, and schema markup further improve your Google Maps ranking.",
  },
  {
    id: 7,
    question: "What are effective local SEO strategies for startups?",
    answer:
      "Startups benefit from optimized Google Business Profiles, local keyword targeting, citations, reviews, and performance tracking through analytics-driven reporting.",
  },
  {
    id: 8,
    question: "Why should I hire a local SEO expert near me now?",
    answer:
      "A local SEO expert understands your market and competitors. Acting quickly helps secure rankings, attract customers, and stay ahead of rivals already investing in SEO.",
  },
  {
    id: 9,
    question: "What is the best local SEO services pricing model?",
    answer:
      "Pricing varies by goals and competition. Common options include monthly packages, project-based pricing, or customized plans that cover essentials like citations, content, and on-page optimization.",
  },
  {
    id: 10,
    question: "Are there affordable SEO services for local businesses?",
    answer:
      "Yes, there are affordable SEO services for local business owners focusing on essentials like Maps optimization, citations, keyword targeting, and reviews to increase visibility on a budget.",
  },
  {
    id: 11,
    question: "Why should I hire a local SEO service provider instead of managing it myself?",
    answer:
      "When you hire a local SEO service provider, you gain access to professional expertise, tools, and insights that deliver faster, more reliable results than DIY efforts, saving time while driving measurable growth.",
  },
  {
    id: 12,
    question: "How do I choose the best local SEO services experts for my business?",
    answer:
      "Working with the best local SEO services experts means choosing specialists who provide tailored strategies, transparent reporting, and proven results. Look for experience, client reviews, and industry knowledge before deciding.",
  },
  {
    id: 13,
    question: "What can I expect from the best local SEO consulting services?",
    answer:
      "The best local SEO consulting services provide in-depth audits, strategic guidance, and customized roadmaps. These services help refine campaigns, uncover growth opportunities, and ensure consistent visibility in local search.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const localSEOServicesServicesSectionData = {
  heading: "Explore Our Proven Local SEO Solutions",
  description:
    "Local SEO includes many factors, each shaping how your business shows up in local searches. Our services cover every area that drives visibility, trust, and conversions.",
  showDescription: true,
  cta: {
    label: "Get Your SEO Plan Now",
    href: "#contact",
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const localSEOServicesIndustriesSectionData = {
  heading: "Businesses We Help Shine Locally",
  description:
    "Our local SEO strategies help businesses attract customers, boost visibility, and achieve steady growth with tailored solutions that deliver measurable results.",
  cta: {
    text: "Claim My SEO Strategy",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const localSEOServicesIndustriesCardsData = [
  {
    title: "Law Firms",
    description:
      "Boost client trust and visibility with local SEO for law firms. We help your practice appear in Google Maps and local searches so potential clients can find and choose you quickly when they need legal help.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/law-firms.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/law-firms.svg`,
    alt: "Law Firms Local SEO",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurants",
    description:
      "Drive more dine-in visits and online orders with local SEO for restaurants. Your business will appear when nearby customers search for places to eat, helping you grow reservations and takeout sales.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/restaurants.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/restaurants.svg`,
    alt: "Restaurants Local SEO",
    width: 71,
    height: 71,
  },
  {
    title: "Plumbers",
    description:
      "Get found first during urgent home repair searches through local SEO for plumbers. We make sure your business ranks high in local results, bringing in more calls and qualified leads.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/plumbers.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/plumbers.svg`,
    alt: "Plumbers Local SEO",
    width: 71,
    height: 71,
  },
  {
    title: "HVAC Companies",
    description:
      "Reach local customers during high-demand seasons with local SEO for HVAC companies. Our strategies improve visibility for repair, installation, and maintenance services, driving more inquiries and bookings.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/hvac-companies.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/hvac-companies.svg`,
    alt: "HVAC Companies Local SEO",
    width: 71,
    height: 71,
  },
  {
    title: "Chiropractors",
    description:
      "Expand your clinic's reach using local SEO for chiropractors. By improving local search visibility, we help more patients find your practice and schedule appointments with confidence.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/chiropractors.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/chiropractors.svg`,
    alt: "Chiropractors Local SEO",
    width: 71,
    height: 71,
  },
  {
    title: "Contractors",
    description:
      "Increase project opportunities with local SEO for contractors. We enhance your presence in service areas so you attract homeowners and businesses searching for trusted local experts.",
    imgOriginal: `/assets/images/local-seo-services/businesses-we-help-shine-locally/original/contractors.svg`,
    imgWhite: `/assets/images/local-seo-services/businesses-we-help-shine-locally/hover/contractors.svg`,
    alt: "Contractors Local SEO",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const localSEOServicesWhyChooseUsSectionData = {
  heading: "What Makes Our Local SEO Agency the Right Choice",
  description:
    "Local SEO requires a structured approach that blends strategy with industry knowledge. We focus on building trust, ensuring transparency, and driving growth through proven methods.",
};

// Workflow Section Data (Section 8)
export const localSEOServicesWorkflowSectionData = {
  heading: "Our Roadmap",
  description:
    "A structured process ensures every step of local SEO contributes to stronger visibility, higher rankings, and long-term growth. Each stage is built to strengthen credibility and deliver measurable results.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const localSEOServicesTechnologiesSectionData = {
  heading: "Innovative Technologies We Apply",
  description:
    "Our team leverages industry-leading platforms and frameworks to deliver secure, scalable, and future-ready local SEO experiences. We choose the right technology stack for your business, ensuring reliable performance, smooth integrations, and a solution that grows with you.",
  showDescription: true,
  cta: {
    text: "See Tech in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const localSEOServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Local SEO Services",
      href: "/services/local-seo-services",
    },
  },
  heading: "Get Seen First in Local Searches Now",
  description: [
    "Struggling to rank on Maps or local results?\n\nOur local SEO packages put your business in front of nearby customers fast. Work with local SEO experts and see the difference.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Local SEO Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Get My Local SEO Plan",
    href: "#",
    className: "offer-btn primary",
  },
};
