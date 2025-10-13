import { BagIcon } from "@/icons";

// Metadata for SEO Agency Service
export const seoAgencyMetadata = {
  title: "Search Engine Optimization Agency | Website Digitals",
  description:
    "Grow your business with a search engine optimization agency that focuses on targeted traffic, measurable results, and sustainable growth strategies.",
  keywords:
    "search engine optimization agency, SEO agency USA, best SEO agency in the US, search engine optimization company, SEO marketing agency, digital marketing agency SEO, SEO consultants USA, professional SEO services, enterprise SEO agency, local SEO agency US, SEO firm, SEO company, affordable SEO agency USA, top SEO agencies in America, SEO for small businesses US, white-label SEO agency, B2B SEO agency",
  canonical:
    "https://www.websitedigitals.com/services/search-engine-optimization-agency/",
  openGraph: {
    title: "Search Engine Optimization Agency | Website Digitals",
    description:
      "Grow your business with a search engine optimization agency that focuses on targeted traffic, measurable results, and sustainable growth strategies.",
    url: "https://www.websitedigitals.com/services/search-engine-optimization-agency/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/seo-agency-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Search Engine Optimization Agency Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Search Engine Optimization Agency | Website Digitals",
    description:
      "Grow your business with a search engine optimization agency that focuses on targeted traffic, measurable results, and sustainable growth strategies.",
    images: [
      "https://websitedigitals.com/assets/images/seo-agency-twitter-image.jpg",
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
      "https://www.websitedigitals.com/services/search-engine-optimization-agency/",
  },
};

export const seoAgencyBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Search Engine Optimization Agency",
      href: "/services/search-engine-optimization-agency",
    },
  },
  heading: "Search Engine Optimization Agency for [[Business Success]]",
  description: [
    "Most websites rank but rarely convert.\n\nAt Website Digitals, our search engine optimization agency strategies are designed to do both: attract the right audience and turn them into customers.\n\nNo matter your market, we deliver results with responsive websites, optimized landing pages, and data-driven SEO campaigns that capture targeted traffic.",
  ],
  isCta: false,
  image: null,
  formConfig: {
    buttonText: "Let's Grow With SEO",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "local-seo", label: "Local SEO" },
      { value: "technical-seo", label: "Technical SEO" },
      { value: "content-seo", label: "Content SEO" },
      { value: "ecommerce-seo", label: "E-commerce SEO" },
      { value: "seo-audit", label: "SEO Audit" },
      { value: "link-building", label: "Link Building" }
    ],
    initialValues: {
      help: "local-seo"
    }
  },
};

export const seoAgencyServicesData = [
  {
    id: 1,
    title: "Local SEO for Businesses",
    description:
      "Local SEO helps nearby customers find and trust your business. By optimizing your Google Business Profile and managing local citations, your brand appears in maps and local searches, driving foot traffic and credibility.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "On-Page SEO for Maximum Relevance",
    description:
      "We optimize titles, headings, metadata, images, and internal links to improve search visibility and engagement, making every page work harder to attract and convert traffic.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Technical SEO for Higher Rankings",
    description:
      "Technical SEO focuses on optimizing site architecture, improving crawlability, and enhancing page speed to make your website search engine-friendly. This ensures that your content is indexed efficiently, provides a seamless user experience, and supports sustainable ranking growth.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Off-Page SEO for Authority Building",
    description:
      "Off-page SEO boosts your website's credibility through high-quality backlinks, digital PR, and mentions from trusted sources. This builds domain authority and strengthens your brand's reputation in search results.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Enterprise and National SEO Strategies",
    description:
      "Enterprises need scalable solutions. Through multi-site optimization and competitive intelligence, national strategies strengthen visibility across regions, ensure consistent messaging, and dominate competitive markets.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Startup and Growth SEO Services",
    description:
      "Startups need quick results without wasted spend. Using agile campaigns and tactics that drive early traction, SEO builds visibility fast while creating a foundation for long-term growth.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const seoAgencyScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Businesses Trust Our SEO Services",
  showDescription: false,
  items: [
    {
      id: "seo-firstScroller",
      step: 1,
      title: "Transparent SEO Reporting",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We believe clients should always know where their investment is going. With clear dashboards and ongoing performance tracking, progress is measured against real goals, not vanity metrics.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Transparent SEO Reporting",
        width: 669,
        height: 376,
      },
    },
    {
      id: "seo-secondScroller",
      step: 2,
      title: "Customized SEO Strategies",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "No two businesses are the same, and neither are our SEO solutions. Through tailored campaigns designed around your industry and audience, we ensure strategies align with your unique growth objectives.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Customized SEO Strategies",
        width: 669,
        height: 376,
      },
    },
    {
      id: "seo-thirdScroller",
      step: 3,
      title: "Dedicated Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every client has access to a client success manager who ensures your SEO campaigns run smoothly. This personalized approach guarantees questions are answered and progress is always on track.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Dedicated Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "seo-forthScroller",
      step: 4,
      title: "SEO Built for Conversions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Rankings mean little without results. Our work goes beyond visibility with conversion optimization built into every strategy, turning search visitors into customers.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "SEO Built for Conversions",
        width: 669,
        height: 376,
      },
    },
    {
      id: "seo-fifthScroller",
      step: 5,
      title: "Sustainable Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We don’t rely on shortcuts that fade fast. Our approach is centered on sustainable growth, ensuring your rankings, authority, and traffic continue to deliver long after campaigns launch.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Sustainable Growth",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};


export const seoAgencyBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Search Engine Optimization Agency",
      href: "/services/search-engine-optimization-agency",
    },
  },
  heading: "Ready to Turn Search Traffic Into Real Revenue?",
  description: [
    "Without targeted visibility, even the best site won't deliver results. Our search engine optimization agency ensures you rank for the terms that drive leads and sales.",
  ],
  bullets: [],
  cta: {
    text: "Request a Strategy Call",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "SEO Agency Services",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const seoAgencyStatsData = [
  {
    id: 1,
    value: 200,
    suffix: "+",
    label: "SEO Campaigns Delivered",
  },
  {
    id: 2,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction Rate",
  },
  {
    id: 3,
    value: 400,
    suffix: "%",
    label: "Average Organic Traffic Growth",
  },
  {
    id: 4,
    value: 100,
    suffix: "+",
    label: "Businesses Ranked on Page One",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const seoAgencyImpactCardsData = [
  {
    id: 1,
    title: "Higher Visibility & Credibility",
    description:
      "With keyword mapping and search intent analysis, we make sure your website appears for the terms your customers actively search. This builds strong visibility and positions your brand as a trusted solution in your industry.",
    icon: "reporting",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Qualified Leads & More Sales",
    description:
      "Through topical relevance and semantic optimization, your content is aligned with customer needs, attracting visitors who are ready to engage. This increases qualified leads and creates more opportunities to convert clicks into paying customers.",
    icon: "strategy",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Cost-Effective Growth",
    description:
      "By optimizing site architecture and improving crawlability, we make it easier for search engines to find and index your pages. These improvements compound over time and deliver consistent traffic growth without heavy reliance on paid ads.",
    icon: "support",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 4,
    title: "Expertise & Time Savings",
    description:
      "Our team secures authority backlinks and executes strategic digital PR campaigns that strengthen your online reputation. While we manage the technical and strategic work, you save time and focus on running your business.",
    icon: "conversion",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const seoAgencyImpactSectionData = {
  heading: "Why Partnering With a Trusted SEO Agency Matters",
  showDescription: false,
};

// Industries Data
export const seoAgencyIndustriesData = [
  {
    id: 1,
    title: "eCommerce",
    description:
      "As an SEO agency for eCommerce businesses, we optimize product pages, categories, and schema to boost visibility in search results, improve shopper experience, and drive consistent online sales growth.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "Medical Practices",
    description:
      "Our SEO agency for medical practices creates compliance-focused strategies, leveraging medical schema and local optimization to help healthcare providers increase patient inquiries and build trust online.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Restaurants",
    description:
      "Known as a trusted partner, we deliver results as the best SEO agency for restaurants by optimizing menus, local listings, and reviews to increase reservations, online visibility, and customer loyalty.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 4,
    title: "Financial Services",
    description:
      "Our tailored campaigns position us as the best SEO agency for financial services, with strategies that highlight expertise, meet regulatory standards, and attract clients actively searching for trusted advisors.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 5,
    title: "Retail Chains",
    description:
      "We specialize in SEO services for retail chains, ensuring multi-location visibility, consistent local pages, and optimized business listings that drive both store visits and online conversions.",
    icon: "/assets/images/industry/local-business.svg",
  },
  {
    id: 6,
    title: "Home Improvement",
    description:
      "As an experienced SEO agency for home improvement, we help contractors and service providers rank for local searches, showcase projects effectively, and generate qualified leads for sustained growth.",
    icon: "/assets/images/industry/education.svg",
  },
];

// Technologies Data
export const seoAgencyTechnologiesData = [
  {
    id: 1,
    title: "Keyword Research & Analysis",
    description:
      "We use advanced keyword research tools and semantic analysis to identify high-value opportunities that align with your business goals and customer search behavior.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Technical SEO Audits",
    description:
      "Our comprehensive technical SEO audits identify crawlability issues, site speed problems, and structural improvements that impact search engine visibility and user experience.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Content Strategy & Optimization",
    description:
      "We develop content strategies that align with search intent, optimize existing content for target keywords, and create new content that drives organic traffic and conversions.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Link Building & Digital PR",
    description:
      "Our link building strategies focus on earning high-quality backlinks from authoritative sources through digital PR campaigns and relationship building.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Local SEO Optimization",
    description:
      "We optimize your Google Business Profile, manage local citations, and implement local schema markup to improve visibility in local search results and Google Maps.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Analytics & Performance Tracking",
    description:
      "We provide detailed reporting and analytics to track SEO performance, measure ROI, and make data-driven decisions to continuously improve your search visibility.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const seoAgencyWorkflowData = {
  title: "How Our SEO Process Works",
  description:
    "",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Research and Website Audit",
      description:
        "The process begins with a detailed SEO audit that identifies technical issues, keyword opportunities, and gaps in current performance. This research sets the foundation for building a strategy tailored to your goals.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Strategy and Keyword Planning",
      description:
        "Next, a data-driven strategy is developed with emphasis on semantic search and user intent. By mapping the right keywords to your business, we create a roadmap that aligns content and optimization with how your audience actually searches.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "On-Page Optimization",
      description:
        "With the strategy in place, on-page improvements are applied. From metadata optimization to internal linking and structured content updates, each page is fine-tuned to send the right signals to search engines while improving user experience.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Off-Page and Link Building",
      description:
        "To strengthen visibility, off-page efforts focus on trusted mentions and quality backlinks. These strategies build domain authority and ensure your business is recognized as a credible source across search engines.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Tracking and Continuous Improvement",
      description:
        "The process doesn't end with implementation. Campaigns are monitored through SEO performance metrics, and adjustments are made regularly to keep results improving over time.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const seoAgencyWhyChooseUsData = [
  {
    id: 1,
    title: "Transparent SEO Reporting",
    description:
      "We believe clients should always know where their investment is going. With clear dashboards and ongoing performance tracking, progress is measured against real goals, not vanity metrics.",
    icon: "reporting",
  },
  {
    id: 2,
    title: "Customized SEO Strategies",
    description:
      "No two businesses are the same, and neither are our SEO solutions. Through tailored campaigns designed around your industry and audience, we ensure strategies align with your unique growth objectives.",
    icon: "strategy",
  },
  {
    id: 3,
    title: "Dedicated Support",
    description:
      "Every client has access to a client success manager who ensures your SEO campaigns run smoothly. This personalized approach guarantees questions are answered and progress is always on track.",
    icon: "support",
  },
  {
    id: 4,
    title: "SEO Built for Conversions",
    description:
      "Rankings mean little without results. Our work goes beyond visibility with conversion optimization built into every strategy, turning search visitors into customers.",
    icon: "conversion",
  },
  {
    id: 5,
    title: "Sustainable Growth",
    description:
      "We don't rely on shortcuts that fade fast. Our approach is centered on sustainable growth, ensuring your rankings, authority, and traffic continue to deliver long after campaigns launch.",
    icon: "growth",
  },
];

// FAQ Data
export const seoAgencyFAQsData = [
  {
    id: 1,
    question: "What makes Website Digitals different from other SEO agencies?",
    answer:
      "Website Digitals combines in-depth research, tailored strategies, and transparent reporting to ensure clients see measurable growth. Unlike generic approaches, campaigns are designed around your business goals to drive qualified traffic and conversions.",
  },
  {
    id: 2,
    question: "How does Website Digitals measure SEO success?",
    answer:
      "Success is tracked using clear SEO performance metrics such as organic traffic growth, keyword visibility, and conversion rates. Website Digitals provides regular reporting dashboards so you can see exactly how campaigns are impacting your business.",
  },
  {
    id: 3,
    question: "Does Website Digitals work with businesses of all sizes?",
    answer:
      "Yes. Website Digitals partners with startups, local businesses, e-commerce brands, professionals, and national enterprises. Each campaign is customized, whether you need local visibility, national reach, or scalable enterprise SEO solutions.",
  },
  {
    id: 4,
    question: "What does an SEO agency do?",
    answer:
      "An SEO agency helps businesses improve online visibility by optimizing websites for search engines and users. Services often include keyword research, content creation, technical SEO, link building, and analytics reporting to increase traffic and conversions.",
  },
  {
    id: 5,
    question:
      "What is the difference between an SEO agency and a freelance SEO consultant?",
    answer:
      "An SEO agency provides a full team with expertise in technical SEO, content, and strategy, while a freelance SEO consultant may only cover limited areas. Agencies are generally better for businesses seeking scalable solutions and long-term growth.",
  },
  {
    id: 6,
    question: "What are the benefits of hiring an SEO agency?",
    answer:
      "Hiring an SEO agency gives you access to specialists in keyword research, technical improvements, and content optimization. Benefits include better rankings, higher-quality traffic, stronger brand credibility, and improved ROI compared to handling SEO in-house.",
  },
  {
    id: 7,
    question: "Are there affordable SEO agency packages for small businesses?",
    answer:
      "Yes, many agencies offer affordable SEO agency packages tailored to small businesses. These focus on essentials like local SEO, Google Business Profile optimization, and targeted keyword strategies to maximize visibility on a smaller budget.",
  },
  {
    id: 8,
    question: "What is the best SEO agency for eCommerce sites?",
    answer:
      "The best SEO agency for eCommerce sites specializes in product schema, category optimization, and strategies that improve shopping visibility. When evaluating options, look for agencies with proven results in boosting online sales and product rankings.",
  },
  {
    id: 9,
    question: "Do SEO agencies work for law firms and healthcare providers?",
    answer:
      "Yes, many agencies offer SEO services for law firms and healthcare providers. These industries require compliance-friendly strategies, optimized service pages, and local visibility to attract clients who are actively searching for professional services.",
  },
  {
    id: 10,
    question: "How do SEO agency reviews and ratings help?",
    answer:
      "SEO agency reviews and ratings give insight into client experiences, results, and reliability. Checking platforms like Clutch.co or Google Reviews helps businesses compare agencies and avoid those with poor performance records.",
  },
  {
    id: 11,
    question: "What are the best SEO companies for startups?",
    answer:
      "The best SEO companies for startups provide flexible, scalable strategies designed for fast growth. They prioritize early traction, agile campaigns, and affordable packages to build visibility without overextending resources.",
  },
  {
    id: 12,
    question: "Is there an SEO agency comparison chart to evaluate options?",
    answer:
      "Yes, many online resources offer SEO agency comparison charts that break down pricing, services, and client reviews. These charts make it easier to compare agencies side by side and choose one that aligns with your budget and objectives.",
  },
  {
    id: 13,
    question:
      "How do I know when to hire a search engine optimization agency for support?",
    answer:
      "You should consider working with a hire search engine optimization agency partner when in-house efforts can't deliver measurable results. Agencies bring technical expertise, advanced tools, and proven strategies that help businesses grow faster and more efficiently.",
  },
  {
    id: 14,
    question: "What is an outsourced search engine optimization agency?",
    answer:
      "An outsourced search engine optimization agency handles your SEO strategy externally, acting as a cost-effective extension of your team. This model gives you access to specialized skills, scalable resources, and ongoing campaign management without hiring a full-time department.",
  },
  {
    id: 15,
    question:
      "Why should I choose a top-rated search engine optimization agency?",
    answer:
      "Partnering with a top-rated search engine optimization agency means working with experts recognized for verified client results and industry credibility. Their reputation ensures you receive strategies backed by proven outcomes, consistent reporting, and long-term growth potential.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const seoAgencyServicesSectionData = {
  heading: "Our Proven SEO Services for Every Business Type",
  description:
    "We offer comprehensive SEO services designed to meet the unique needs of businesses across all industries. Our data-driven approach ensures measurable results and sustainable growth.",
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const seoAgencyIndustriesSectionData = {
  heading: "Industries We Help Grow",
  description:
    "We help businesses across industries with tailored SEO strategies that address unique challenges and drive measurable, conversion-focused growth.",
  cta: {
    text: "Request a Strategy Call",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const seoAgencyIndustriesCardsData = [
  {
    title: "eCommerce",
    description:
      "As an SEO agency for eCommerce businesses, we optimize product pages, categories, and schema to boost visibility in search results, improve shopper experience, and drive consistent online sales growth.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "eCommerce SEO Services",
    width: 71,
    height: 71,
  },
  {
    title: "Medical Practices",
    description:
      "Our SEO agency for medical practices creates compliance-focused strategies, leveraging medical schema and local optimization to help healthcare providers increase patient inquiries and build trust online.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Medical Practice SEO Services",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurants",
    description:
      "Known as a trusted partner, we deliver results as the best SEO agency for restaurants by optimizing menus, local listings, and reviews to increase reservations, online visibility, and customer loyalty.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Restaurant SEO Services",
    width: 71,
    height: 71,
  },
  {
    title: "Financial Services",
    description:
      "Our tailored campaigns position us as the best SEO agency for financial services, with strategies that highlight expertise, meet regulatory standards, and attract clients actively searching for trusted advisors.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Financial Services SEO",
    width: 71,
    height: 71,
  },
  {
    title: "Retail Chains",
    description:
      "We specialize in SEO services for retail chains, ensuring multi-location visibility, consistent local pages, and optimized business listings that drive both store visits and online conversions.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Retail Chain SEO Services",
    width: 71,
    height: 71,
  },
  {
    title: "Home Improvement",
    description:
      "As an experienced SEO agency for home improvement, we help contractors and service providers rank for local searches, showcase projects effectively, and generate qualified leads for sustained growth.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Home Improvement SEO Services",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const seoAgencyWhyChooseUsSectionData = {
  heading: "Why Businesses Trust Our SEO Services",
  showDescription: false,
};

// Workflow Section Data (Section 8)
export const seoAgencyWorkflowSectionData = {
  heading: "How Our SEO Process Works",
  description:
    "",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const seoAgencyTechnologiesSectionData = {
  heading: "SEO Technologies & Tools We Use",
  description:
    "We leverage industry-leading SEO tools and technologies to deliver comprehensive optimization strategies that drive measurable results. Our tech stack ensures accurate analysis, efficient implementation, and continuous monitoring of your SEO performance.",
  cta: {
    text: "See Our SEO Tools in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const seoAgencyFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Search Engine Optimization Agency",
      href: "/services/search-engine-optimization-agency",
    },
  },
  heading: "Ready to Turn Search Traffic Into Real Revenue?",
  description: [
    "Without targeted visibility, even the best site won't deliver results. Our search engine optimization agency ensures you rank for the terms that drive leads and sales.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "SEO Agency Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Request a Strategy Call",
    href: "#",
    className: "offer-btn primary",
  },
};
