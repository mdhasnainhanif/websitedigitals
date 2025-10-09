import { BagIcon } from "@/icons";

// Metadata for Pay Per Click Agency Service
export const payPerClickAgencyMetadata = {
  title: "Increase Sales with Pay Per Click Agency | Website Digitals",
  description:
    "Website Digitals offers pay-per-click services to boost conversions, improve ROAS, and deliver data-backed results every month. Start Today!",
  keywords:
    "pay per click agency, PPC agency, pay per click services, PPC management, Google Ads management, paid search agency, PPC advertising, SEM agency, pay per click marketing, PPC specialists, PPC consultants, PPC company, PPC services, pay per click management, PPC experts, paid advertising agency, search engine marketing, PPC campaign management, pay per click advertising agency, PPC agency services",
  canonical: "https://www.websitedigitals.com/services/pay-per-click-agency/",
  openGraph: {
    title: "Increase Sales with Pay Per Click Agency | Website Digitals",
    description:
      "Website Digitals offers pay-per-click services to boost conversions, improve ROAS, and deliver data-backed results every month. Start Today!",
    url: "https://www.websitedigitals.com/services/pay-per-click-agency/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/ppc-agency-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Pay Per Click Agency Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Increase Sales with Pay Per Click Agency | Website Digitals",
    description:
      "Website Digitals offers pay-per-click services to boost conversions, improve ROAS, and deliver data-backed results every month. Start Today!",
    images: [
      "https://websitedigitals.com/assets/images/ppc-agency-twitter-image.jpg",
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
    canonical: "https://www.websitedigitals.com/services/pay-per-click-agency/",
  },
};

export const payPerClickAgencyBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Pay Per Click Agency",
      href: "/services/pay-per-click-agency",
    },
  },
  heading: "Grow Your Business Fast with [[Pay-Per-Click Agency]]",
  description: [
    "Many businesses face ad campaigns that drain budgets without delivering real results.\n\nAt Website Digitals, we run high-performing campaigns that turn clicks into customers. Our team manages smart keyword bidding, precise ad copywriting, and data-driven campaign optimization to keep every dollar working to maximize ROI.\n\nAs a trusted PPC agency, we turn your paid search advertising into a reliable growth engine that drives measurable sales and leads.",
  ],
  isCta: true,
  cta: {
    text: "Generate Revenue Now",
    href: "/brief",
  },
  image: null,
};

export const payPerClickAgencyServicesData = [
  {
    id: 1,
    title: "Google Ads Management",
    description:
      "We manage search ads, display ads, and shopping ads to maximize visibility. Our approach includes match types, negative keywords, and ad extensions to boost relevance and click-through rate. With precise device targeting and dayparting, your ads reach the right people at the right time.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Bing and Social Ads",
    description:
      "Expand beyond Google with Microsoft Advertising, LinkedIn Ads, and Meta Ads. We create targeted campaigns and build custom remarketing lists to re-engage visitors and convert them into qualified leads, turning each channel into a new revenue source.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Landing Page Optimization",
    description:
      "High-performing campaigns depend on optimized landing pages. We improve landing page experience, run structured A/B testing, and refine conversion funnels. A better relevance score lowers cost per click (CPC) and drives more conversions.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Campaign Performance and Reporting",
    description:
      "Our pay-per-click marketing agency provides clear reporting and actionable insights. We monitor data in real time, refine bids, and continuously optimize campaigns so ad spend delivers measurable growth.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const payPerClickAgencyScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our PPC Agency the Right Choice",
  description: [
    "Choosing the right partner can make the difference between wasted ad spend and predictable growth. Our approach combines certified expertise and ongoing campaign refinement to deliver measurable results.",
  ],
  items: [
    {
      id: "ppc-firstScroller",
      step: 1,
      title: "Certified PPC Specialists",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team includes Google Ads certified professionals, Microsoft Ads certified experts, and specialists with Meta Blueprint credentials. We also hold DMI certifications, align with the Google Partner program, and follow IAB standards with SEMPO recognition, ensuring your campaigns meet industry best practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Certified PPC Specialists",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ppc-secondScroller",
      step: 2,
      title: "Transparent Reporting",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "You get full visibility through an easy-to-read reporting dashboard. Each ad performance report shares clicks, spend, and conversion data so you can clearly track campaign performance and make informed decisions.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Transparent Reporting",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ppc-thirdScroller",
      step: 3,
      title: "Proven ROI Focus",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We work to improve return on ad spend (ROAS), reduce cost per acquisition (CPA), and grow customer lifetime value (LTV). Our account audits uncover opportunities to boost ad relevance and optimize quality metrics, helping budgets produce consistent results.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Proven ROI Focus",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ppc-forthScroller",
      step: 4,
      title: "Fraud Protection",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We safeguard your investment with invalid click prevention and real-time click fraud monitoring, keeping spend focused on valid traffic and reliable performance data.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Fraud Protection",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ppc-fifthScroller",
      step: 5,
      title: "Continuous Optimization",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Optimization continues after launch. We refine campaigns with smart bidding, automated bid strategy testing, and quality score improvement so results get better every month.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Continuous Optimization",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const payPerClickAgencyBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Pay Per Click Agency",
      href: "/services/pay-per-click-agency",
    },
  },
  heading: "Turn Every Click Into Revenue With Our PPC Services",
  description: [
    "Stop wasting ad spend on clicks that don't convert. Work with a pay-per-click agency that delivers measurable conversion growth through expert campaign optimization and full-funnel PPC services designed to turn traffic into sales.",
  ],
  bullets: [],
  cta: {
    text: "Start PPC Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "PPC Agency Services",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const payPerClickAgencyStatsData = [
  {
    id: 1,
    value: 5000,
    suffix: "+",
    label: "Campaigns Managed",
  },
  {
    id: 2,
    value: 35,
    suffix: "%",
    label: "Avg. ROAS Lift",
  },
  {
    id: 3,
    value: 20000,
    suffix: "+",
    label: "Leads Generated",
  },
  {
    id: 4,
    value: 99,
    suffix: "%",
    label: "Tracking Accuracy",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const payPerClickAgencyImpactCardsData = [
  {
    id: 1,
    title: "Immediate Visibility and Traffic",
    description:
      "Get in front of potential customers right away. Campaigns can appear prominently as soon as they launch, driving qualified traffic from day one. Factors such as quality score, ad rank, and impression share help determine where ads show and how much you pay, so relevance directly impacts cost efficiency.",
    icon: "visibility",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Targeted Reach Without Waste",
    description:
      "Show ads only to the people most likely to take action. Geo-targeting, demographic targeting, and ad scheduling ensure spend is focused on the right locations, audiences, and times. Strategic audience targeting and audience segmentation concentrate the budget where it delivers the best return.",
    icon: "targeting",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Cost Control and Measurable ROI",
    description:
      "Stay in full control of ad spend with budgets and cost per click (CPC) settings. Detailed conversion tracking ties clicks to sales and leads, while metrics like click-through rate (CTR) and return on ad spend (ROAS) measure efficiency. A clear attribution model shows which campaigns drive results, helping you scale what works.",
    icon: "roi",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 4,
    title: "Flexibility and Scalability",
    description:
      "Adapt campaigns quickly as market conditions change. Continuous campaign optimization, structured A/B testing, and refined bid strategy allow quick performance improvements. Proper budget pacing and smart bidding help maximize impression share while keeping campaigns profitable.",
    icon: "scalability",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 5,
    title: "Improved On-Site Results",
    description:
      "Clicks are valuable only when they convert. Focusing on landing page relevance and conversion rate optimization (CRO) ensures ad traffic turns into leads or sales, improving overall return across campaigns.",
    icon: "conversion",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const payPerClickAgencyImpactSectionData = {
  heading: "Why Paid Search is a Growth Engine for Businesses",
  description:
    "Paid search and SEM give brands immediate control over visibility, spend, and measurable outcomes. A well-structured ad campaign provides the precision, transparency, and scalability needed to turn advertising into predictable growth.",
  showDescription: true,
};

// Industries Data
export const payPerClickAgencyIndustriesData = [
  {
    id: 1,
    title: "Healthcare Practices",
    description:
      "Our PPC agency for healthcare practices helps clinics attract more patients through HIPAA-compliant campaigns, local targeting, and appointment-focused ads.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 2,
    title: "Attorneys",
    description:
      "As a PPC agency for attorneys, we run high-intent campaigns that connect law firms from personal injury to corporate law with clients actively seeking legal support.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 3,
    title: "Realtors",
    description:
      "Our PPC agency for realtors drives qualified leads using hyper-local targeting, MLS-compliant ads, and optimized lead funnels that turn clicks into property showings and sales.",
    icon: "/assets/images/industry/local-business.svg",
  },
  {
    id: 4,
    title: "Retail Brands",
    description:
      "We help retail brands boost online and in-store sales with optimized shopping feeds, Performance Max campaigns, and dynamic remarketing to increase repeat purchases.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 5,
    title: "Car Dealers",
    description:
      "Our PPC agency for car dealers accelerates sales with VIN-level targeting, local inventory ads, and test-drive funnels that reach buyers ready to purchase.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 6,
    title: "Hotels",
    description:
      "We help hotels increase direct bookings with seasonal bid strategies, branded term protection, and optimized landing pages that compete with OTAs and lift ROI.",
    icon: "/assets/images/industry/education.svg",
  },
];

// Technologies Data
export const payPerClickAgencyTechnologiesData = [
  {
    id: 1,
    title: "Google Ads Platform",
    description:
      "We leverage Google Ads for search, display, shopping, and video campaigns with advanced targeting, automated bidding, and conversion tracking to maximize ROI.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Microsoft Advertising",
    description:
      "Our Microsoft Advertising campaigns reach Bing users with targeted search and shopping ads, expanding your reach beyond Google's network.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Meta Ads Manager",
    description:
      "We create and optimize Facebook and Instagram campaigns with advanced audience targeting, creative testing, and conversion tracking for social media advertising success.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "LinkedIn Campaign Manager",
    description:
      "Our LinkedIn advertising strategies target B2B audiences with sponsored content, message ads, and lead generation forms for professional networking success.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Google Analytics 4",
    description:
      "We use GA4 for comprehensive conversion tracking, audience insights, and attribution modeling to measure and optimize PPC campaign performance.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Conversion Tracking Tools",
    description:
      "We implement advanced conversion tracking with Google Tag Manager, Facebook Pixel, and custom event tracking to measure every interaction and optimize for results.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const payPerClickAgencyWorkflowData = {
  title: "Our Process",
  description:
    "A successful campaign starts with a clear plan and continues with precise execution. Our process is designed to keep every step aligned with business objectives and deliver measurable growth.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Audit & Strategy",
      description:
        "We conduct a full ad account audit, perform keyword gap analysis, and carry out competitive research. This creates a strategy built to compete effectively in the ad auction and position your campaigns for success.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Campaign Build",
      description:
        "We handle the full campaign buildout, including ad group structuring, compelling ad copywriting, and bid strategy setup. Targeting and ad scheduling are tuned to show ads when they have the highest impact.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Optimization & Scaling",
      description:
        "We refine performance with structured A/B testing, budget adjustments, and remarketing list creation to bring back engaged visitors. This approach helps scale conversions efficiently over time.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Landing Page Optimization",
      description:
        "We focus on landing page optimization to improve relevance, streamline user flow, and apply conversion tracking insights that lift conversion rates and ROI.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Reporting & Insights",
      description:
        "Transparency is key. We deliver real-time dashboards powered by Google Analytics and use attribution modeling to see which ads drive performance. Clear, concise reports make campaign performance easy to review and act on.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const payPerClickAgencyWhyChooseUsData = [
  {
    id: 1,
    title: "Certified PPC Specialists",
    description:
      "Our team includes Google Ads certified professionals, Microsoft Ads certified experts, and specialists with Meta Blueprint credentials. We also hold DMI certifications, align with the Google Partner program, and follow IAB standards with SEMPO recognition, ensuring your campaigns meet industry best practices.",
    icon: "certification",
  },
  {
    id: 2,
    title: "Transparent Reporting",
    description:
      "You get full visibility through an easy-to-read reporting dashboard. Each ad performance report shares clicks, spend, and conversion data so you can clearly track campaign performance and make informed decisions.",
    icon: "reporting",
  },
  {
    id: 3,
    title: "Proven ROI Focus",
    description:
      "We work to improve return on ad spend (ROAS), reduce cost per acquisition (CPA), and grow customer lifetime value (LTV). Our account audits uncover opportunities to boost ad relevance and optimize quality metrics, helping budgets produce consistent results.",
    icon: "roi",
  },
  {
    id: 4,
    title: "Fraud Protection",
    description:
      "We safeguard your investment with invalid click prevention and real-time click fraud monitoring, keeping spend focused on valid traffic and reliable performance data.",
    icon: "security",
  },
  {
    id: 5,
    title: "Continuous Optimization",
    description:
      "Optimization continues after launch. We refine campaigns with smart bidding, automated bid strategy testing, and quality score improvement so results get better every month.",
    icon: "optimization",
  },
];

// FAQ Data
export const payPerClickAgencyFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for PPC management?",
    answer:
      "We are a certified PPC management company combining keyword research, campaign optimization, and transparent reporting to deliver predictable growth and measurable ROI.",
  },
  {
    id: 2,
    question: "Does Website Digitals provide full management of PPC services?",
    answer:
      "Yes. We handle campaign buildout, ad copy, landing page optimization, remarketing, conversion tracking, and ongoing performance improvements so you can focus on running your business.",
  },
  {
    id: 3,
    question: "How does Website Digitals report PPC performance?",
    answer:
      "Our reporting dashboard shows clicks, conversions, and spend in real time. We share actionable insights so you can make confident, data-driven decisions.",
  },
  {
    id: 4,
    question: "What does a pay-per-click agency do?",
    answer:
      "A pay-per-click agency like Website Digitals manages campaigns from keyword research and ad creation to bidding, targeting, and tracking to ensure every click drives results.",
  },
  {
    id: 5,
    question: "How does a PPC agency work?",
    answer:
      "Website Digitals begins with an account audit, builds ad groups and bid strategies, then continuously optimizes with A/B testing, budget adjustments, and audience targeting.",
  },
  {
    id: 6,
    question: "What are the benefits of hiring a PPC agency?",
    answer:
      "Hiring Website Digitals saves time, reduces wasted spend, and improves results through better quality scores, higher click-through rates, and clear performance reporting.",
  },
  {
    id: 7,
    question: "How to choose a PPC agency?",
    answer:
      "Look for a certified PPC agency with proven results, a clear audit process, and transparent reporting. Website Digitals meets all these standards and focuses on ROI.",
  },
  {
    id: 8,
    question: "Do you offer pay-per-click agency services for eCommerce?",
    answer:
      "Yes. Website Digitals specializes in eCommerce PPC with shopping ads, product feed optimization, and dynamic remarketing to grow online revenue.",
  },
  {
    id: 9,
    question: "Do you provide PPC services for small businesses?",
    answer:
      "Yes. Website Digitals offers small-business PPC plans with local targeting and high-intent keywords designed to deliver measurable leads on a controlled budget.",
  },
  {
    id: 10,
    question: "When should I hire pay-per-click agency experts?",
    answer:
      "You should hire pay-per-click agency experts when you need scalable growth, advanced campaign optimization, or better ROI on ad spend. Website Digitals helps businesses reduce wasted spend while generating qualified leads.",
  },
  {
    id: 11,
    question: "What is a full-service pay-per-click agency?",
    answer:
      "A full-service pay-per-click agency provides end-to-end PPC management, including keyword research, campaign setup, landing page optimization, and multi-channel tracking. Website Digitals ensures consistency across platforms to maximize ROI.",
  },
  {
    id: 12,
    question: "Why choose a specialist pay-per-click agency?",
    answer:
      "A specialist pay-per-click agency focuses on tailored strategies for specific industries and goals. Website Digitals applies certified expertise and vertical-focused tactics to deliver campaigns that perform consistently and competitively.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const payPerClickAgencyServicesSectionData = {
  heading: "Explore Our Full Range of PPC Services",
  description:
    "Our goal is to make every click count. As a full-service PPC management company, we handle keyword research, ad group setup, ongoing bid adjustments, ad copywriting, and performance tracking to keep campaigns focused and profitable.",
  showDescription: true,
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const payPerClickAgencyIndustriesSectionData = {
  heading: "Industries We Drive Results For",
  description:
    "We deliver measurable PPC results across industries with data-driven strategies tailored to each sector, ensuring every click drives real growth.",
  cta: {
    text: "Start PPC Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const payPerClickAgencyIndustriesCardsData = [
  {
    title: "Healthcare Practices",
    description:
      "Our PPC agency for healthcare practices helps clinics attract more patients through HIPAA-compliant campaigns, local targeting, and appointment-focused ads.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Healthcare PPC Services",
    width: 71,
    height: 71,
  },
  {
    title: "Attorneys",
    description:
      "As a PPC agency for attorneys, we run high-intent campaigns that connect law firms from personal injury to corporate law with clients actively seeking legal support.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Attorney PPC Services",
    width: 71,
    height: 71,
  },
  {
    title: "Realtors",
    description:
      "Our PPC agency for realtors drives qualified leads using hyper-local targeting, MLS-compliant ads, and optimized lead funnels that turn clicks into property showings and sales.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Realtor PPC Services",
    width: 71,
    height: 71,
  },
  {
    title: "Retail Brands",
    description:
      "We help retail brands boost online and in-store sales with optimized shopping feeds, Performance Max campaigns, and dynamic remarketing to increase repeat purchases.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Retail PPC Services",
    width: 71,
    height: 71,
  },
  {
    title: "Car Dealers",
    description:
      "Our PPC agency for car dealers accelerates sales with VIN-level targeting, local inventory ads, and test-drive funnels that reach buyers ready to purchase.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Car Dealer PPC Services",
    width: 71,
    height: 71,
  },
  {
    title: "Hotels",
    description:
      "We help hotels increase direct bookings with seasonal bid strategies, branded term protection, and optimized landing pages that compete with OTAs and lift ROI.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Hotel PPC Services",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const payPerClickAgencyWhyChooseUsSectionData = {
  heading: "What Makes Our PPC Agency the Right Choice",
  description:
    "Choosing the right partner can make the difference between wasted ad spend and predictable growth. Our approach combines certified expertise and ongoing campaign refinement to deliver measurable results.",
};

// Workflow Section Data (Section 8)
export const payPerClickAgencyWorkflowSectionData = {
  heading: "Our Process",
  description:
    "A successful campaign starts with a clear plan and continues with precise execution. Our process is designed to keep every step aligned with business objectives and deliver measurable growth.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const payPerClickAgencyTechnologiesSectionData = {
  heading: "Tools We Use",
  description:
    "We leverage industry-leading PPC tools and platforms to deliver comprehensive advertising strategies that drive measurable results. Our tech stack ensures accurate targeting, efficient campaign management, and continuous optimization of your PPC performance.",
  cta: {
    text: "See Our PPC Tools in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const payPerClickAgencyFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Pay Per Click Agency",
      href: "/services/pay-per-click-agency",
    },
  },
  heading: "Turn Every Click Into Revenue With Our PPC Services",
  description: [
    "Stop wasting ad spend on clicks that don't convert. Work with a pay-per-click agency that delivers measurable conversion growth through expert campaign optimization and full-funnel PPC services designed to turn traffic into sales.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "PPC Agency Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start PPC Today",
    href: "#",
    className: "offer-btn primary",
  },
};
