// Clean single module: exports for the digital-marketing-company page

import { BagIcon } from "../../icons";

export const digitalMarketingMetadata = {
  title: "Trusted Digital Marketing Company for Results | Website Digitals",
  description:
    "Work with a trusted digital marketing company driving qualified leads, higher ROI, and long-term growth through proven strategies.",
  keywords:
    "digital marketing company, digital marketing agency US, online marketing company, internet marketing agency, digital advertising company, marketing firm USA, SEO & digital marketing services, full-service digital marketing agency, SEO company US, PPC advertising agency, social media marketing company, content marketing agency, email marketing services, influencer marketing agency, web design & digital marketing firm, digital marketing company near me, best digital marketing agency USA, top-rated digital marketing company US, affordable online marketing services US, hire digital marketing company in US, affordable SEO & digital marketing packages, digital marketing services pricing USA, best ROI-focused marketing agency, digital marketing company reviews, best agencies for small business marketing, compare SEO agencies vs full-service firms, digital marketing, SEO services, social media management, pay-per-click PPC, online advertising, content strategy, branding services, web development, analytics & reporting, marketing automation, online presence, lead generation, customer acquisition, inbound marketing, conversion optimization, keyword research, performance marketing, growth hacking, digital transformation, omnichannel marketing",
  canonical: "https://websitedigitals.com/services/digital-marketing-company",
  openGraph: {
    title: "Trusted Digital Marketing Company for Results | Website Digitals",
    description:
      "Work with a trusted digital marketing company driving qualified leads, higher ROI, and long-term growth through proven strategies.",
    url: "https://websitedigitals.com/services/digital-marketing-company",
    siteName: "Website Digitals",
    images: [
      {
        url: "/assets/images/digital-marketing-og.jpg",
        width: 1200,
        height: 630,
        alt: "Digital Marketing Company",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export const digitalMarketingBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Digital Marketing Company",
      href: "/services/digital-marketing-company",
    },
  },
  heading: "Digital Marketing Company Delivering Leads Not Just Clicks",
  description: [
    "Most businesses struggle online because their websites get clicks but fail to turn visitors into customers.",
    "",
    "At Website Digitals, we are a trusted digital marketing company that helps brands reach the right audience and generate real results. Unlike agencies chasing vanity metrics, we focus on qualified leads and measurable growth.",
    "",
    "With deep SEO expertise and proven content strategies, our team makes your business stand out. From SEO-optimized property websites to paid campaigns that deliver instant impact, we create a clear path to long-term success.",
  ],
  isCta: false,
  formConfig: {
    buttonText: "Talk to an Expert Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "seo", label: "SEO Services" },
      { value: "ppc", label: "Pay-Per-Click Advertising" },
      { value: "social-media", label: "Social Media Marketing" },
      { value: "content-marketing", label: "Content Marketing" },
      { value: "email-marketing", label: "Email Marketing" },
      { value: "marketing-strategy", label: "Marketing Strategy" },
    ],
    initialValues: {
      help: "seo",
    },
  },
};

export const digitalMarketingBannerData2 = {
  heading: "Your Trusted Digital Marketing Company Starts Here",
  description: [
    "Stop losing leads to strategies that don't work. A trusted digital marketing company can help you attract the right audience, convert them into customers, and grow with confidence.",
  ],
  isCta: true,
  cta: {
    text: "Work With Us Now",
    href: "#contact",
    className: "offer-btn primary",
  },
  image: "/assets/images/digital-marketing-og.jpg",
};

export const digitalMarketingServicesData = [
  {
    id: 1,
    title: "Search Engine Optimization (SEO)",
    description:
      "Our strategies include in-depth keyword research, on-page optimization, and link-building campaigns that improve rankings and drive consistent results.",
    icon: <BagIcon />,
  },
  {
    id: 2,
    title: "Pay Per Click (PPC)",
    description:
      "We craft campaigns that focus on conversion optimization, helping you maximize every dollar spent while reducing wasted ad spend.",
    icon: <BagIcon />,
  },
  {
    id: 3,
    title: "Social Media Marketing",
    description:
      "Our team creates engaging campaigns that expand reach, build trust, and turn followers into loyal customers.",
    icon: <BagIcon />,
  },
  {
    id: 4,
    title: "Digital PR",
    description:
      "Amplify your brand authority with strategic online advertising and digital PR. Our campaigns secure placements that boost your credibility and enhance your reputation in your niche.",
    icon: <BagIcon />,
  },
  {
    id: 5,
    title: "Content Writing",
    description:
      "Our content writing services focus on creating clear, compelling, and search-optimized copy, from blogs and web pages to ad copy and product descriptions.",
    icon: <BagIcon />,
  },
  {
    id: 6,
    title: "Content Marketing",
    description:
      "Our content marketing strategies go beyond writing; we plan, publish, and promote assets that generate lead generation, nurture prospects, and support conversion optimization.",
    icon: <BagIcon />,
  },
  {
    id: 7,
    title: "Guest Post/Outreach",
    description:
      "We secure high-quality backlinks from trusted sites to improve your search visibility and drive organic traffic that boosts rankings over time.",
    icon: <BagIcon />,
  },
  {
    id: 8,
    title: "Link Building",
    description:
      "Our team connects your brand with relevant publishers, placing your content in front of new audiences while strengthening credibility and earning referral traffic.",
    icon: <BagIcon />,
  },
  {
    id: 9,
    title: "Local SEO",
    description:
      "Dominate local search results with targeted inbound marketing strategies designed to put your business in front of nearby customers searching for your services.",
    icon: <BagIcon />,
  },
  {
    id: 10,
    title: "Online Reputation Management",
    description:
      "Protect and enhance your brand with proactive customer acquisition strategies, review monitoring, and reputation repair services.",
    icon: <BagIcon />,
  },
  {
    id: 11,
    title: "App Store Optimization",
    description:
      "Increase your app's visibility and downloads with performance marketing techniques tailored for Google Play and App Store rankings.",
    icon: <BagIcon />,
  },
];

export const digitalMarketingFinalCTAData = {
  heading: "Your Trusted Digital Marketing Company Starts Here",
  description: [
    "Stop losing leads to strategies that don't work. A trusted digital marketing company can help you attract the right audience, convert them into customers, and grow with confidence.",
  ],
  isCta: true,
  cta: {
    text: "Work With Us Now",
    href: "#contact",
    className: "offer-btn primary",
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Custom Logo Design Services",
    width: 500,
    height: 400,
  },
};

export const digitalMarketingFAQsData = [
  {
    id: 1,
    question: "Does Website Digitals work with businesses of all sizes?",
    answer:
      "Yes. Website Digitals partners with startups, local businesses, and national brands across multiple industries. Whether you need local SEO, e-commerce PPC campaigns, or a full-service digital marketing plan, our solutions scale with your goals and budget.",
  },
  {
    id: 2,
    question: "How quickly can I expect results with Website Digitals?",
    answer:
      "The timeline depends on the services you choose. SEO typically builds momentum within a few months, while paid campaigns can generate immediate visibility and leads. Website Digitals combines short-term wins with long-term strategies to maximize ROI and ensure lasting growth.",
  },
  {
    id: 3,
    question: "What does a digital marketing company do?",
    answer:
      "A digital marketing company helps businesses build visibility, attract qualified traffic, and convert visitors into customers. At Website Digitals, this includes services such as SEO, PPC, content marketing, social media management, and analytics-driven optimization—all designed to deliver measurable growth.",
  },
  {
    id: 4,
    question: "How does digital marketing help small businesses?",
    answer:
      "Digital marketing gives small businesses access to tools once reserved for larger brands. With Website Digitals, small businesses can compete by reaching local audiences through SEO & digital marketing services, targeted ads, and conversion-focused strategies that generate steady leads and sales.",
  },
  {
    id: 5,
    question: "What are the benefits of hiring a digital marketing agency?",
    answer:
      "The main benefits of hiring a digital marketing agency include saving time, gaining access to specialized expertise, and implementing proven strategies faster. Website Digitals provides a full-service approach, from keyword research to campaign management, ensuring every marketing dollar is spent efficiently for maximum ROI.",
  },
  {
    id: 6,
    question: "What are the latest digital marketing trends?",
    answer:
      "Some of the latest digital marketing trends include AI-powered personalization, voice search optimization, video-first campaigns, and data-driven automation. Website Digitals stays ahead of these trends, aligning strategies with what works now and ensuring your brand doesn't fall behind.",
  },
  {
    id: 7,
    question: "How can I hire a digital marketing company?",
    answer:
      "Hiring a digital marketing company starts with choosing a partner that understands your industry and goals. Website Digitals makes the process simple with free audits, clear proposals, and tailored strategies so you can start building results without delays.",
  },
  {
    id: 8,
    question:
      "Does Website Digitals offer affordable SEO & digital marketing packages?",
    answer:
      "Yes. Website Digitals provides affordable SEO & digital marketing packages designed to fit businesses of all sizes. Whether you're a startup or an established brand, our plans are scalable, transparent, and focused on delivering results without hidden costs.",
  },
  {
    id: 9,
    question: "What should I know about digital marketing services pricing?",
    answer:
      "Digital marketing services pricing varies depending on the scope of work and goals. Website Digitals offers flexible pricing models, ensuring businesses only pay for the services they need, whether that's SEO, PPC, content, or a complete digital strategy.",
  },
  {
    id: 10,
    question: "Is Website Digitals the best ROI-focused marketing agency?",
    answer:
      "Yes. Website Digitals is committed to being the best ROI-focused marketing agency by prioritizing conversions over vanity metrics. Every campaign is tracked with performance reports so you can see exactly how your investment is generating returns.",
  },
  {
    id: 11,
    question:
      "Is Website Digitals one of the best agencies for small business marketing?",
    answer:
      "Yes. Many clients consider Website Digitals among the best agencies for small business marketing because we focus on practical, scalable strategies. From local SEO to cost-effective ad campaigns, we help small businesses compete with larger competitors.",
  },
  {
    id: 12,
    question:
      "How does Website Digitals compare SEO agencies vs. full-service firms?",
    answer:
      "When comparing SEO agencies vs. full-service firms, the difference lies in scope. Website Digitals offers both expert SEO solutions and full-service digital marketing. This means businesses can access standalone services or complete campaigns under one roof, saving time and ensuring consistent results.",
  },
];

// Services
export const digitalMarketingServicesSectionData = {
  heading: "Our Digital Marketing Services Designed to Grow Your Business",
  description: "",
  showDescription: false,
};

// Stats
export const digitalMarketingStatsData = [
  { id: 1, value: 98, suffix: "%", label: "Client Retention Rate" },
  { id: 2, value: 500, suffix: "+", label: "Projects Completed Successfully" },
  { id: 3, value: 4.9, suffix: "/5", label: "Average Client Satisfaction Rating" },
  { id: 4, value: 100, suffix: "+", label: "Industries Served Nationwide" },
];

// Impact / USPs
export const digitalMarketingImpactSectionData = {
  heading: "Why a Professional Digital Marketing Company Delivers ROI",
  showDescription: false,
};

export const digitalMarketingImpactCardsData = [
  {
    id: 1,
    title: "Branding That Builds Trust",
    description:
      "A strong online branding strategy shapes perception and creates confidence. With proven methods to boost brand credibility, businesses move from being overlooked to being the first choice.",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Websites That Convert",
    description:
      "Generic sites may look nice, but fail to drive growth. Purpose-built conversion-focused websites combined with lead generation marketing turn clicks into qualified customers.",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Campaigns That Reach More",
    description:
      "Unfocused ads waste the budget. Expert digital ad management services powered by a smart paid media strategy expand reach and deliver measurable ROI.",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Insights That Fuel Growth",
    description:
      "Online success depends on constant improvement. With advanced performance tracking tools, businesses gain data-driven insights that reveal opportunities and sustain growth.",
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Industries
export const digitalMarketingIndustriesSectionData = {
  heading: "Industries We Serve",
  description:
    "We build industry-focused marketing solutions for the challenges and opportunities of your sector.",
  showDescription: true,
};

export const digitalMarketingIndustriesCardsData = [
  {
    title: "E-commerce",
    description:
      "High-converting funnels and performance campaigns for online stores.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "E-commerce Digital Marketing",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description: "Compliance-focused local SEO and reputation growth.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Digital Marketing",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description: "Lead generation and property marketing that converts.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Digital Marketing",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "Product-led growth and lifecycle marketing for software companies.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "SaaS Digital Marketing",
    width: 71,
    height: 71,
  },
  {
    title: "Finance",
    description:
      "Trust-driven content and performance marketing for financial services.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Finance Digital Marketing",
    width: 71,
    height: 71,
  },
  {
    title: "Local Businesses",
    description:
      "Affordable, high-impact strategies for local visibility and footfall.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Local Business Digital Marketing",
    width: 71,
    height: 71,
  },
];

// Why Choose Us
export const digitalMarketingWhyChooseUsSectionData = {
  heading: "What Makes Our Digital Marketing Company Different",
};

export const digitalMarketingWhyChooseUsData = [
  {
    id: 1,
    title: "Measurable Results",
    description:
      "Every campaign includes clear marketing performance reports, so you always know what's working. No hidden data, no vague numbers, just measurable progress you can track.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    alt: "Measurable Results",
    width: 71,
    height: 71,
  },
  {
    id: 2,
    title: "Industry-Focused Strategies",
    description:
      "We build industry-specific marketing solutions designed for the challenges and opportunities of your sector, ensuring campaigns are always relevant and effective.",
    imgOriginal: "/assets/images/services/thirty-50.webp",
    imgWhite: "/assets/images/services/thirty-49.webp",
    alt: "Industry-Focused Strategies",
    width: 71,
    height: 71,
  },
  {
    id: 3,
    title: "Conversion First",
    description:
      "Our conversion optimization services focus on turning traffic into customers, refining every touchpoint to generate consistent leads and sales.",
    imgOriginal: "/assets/images/services/thirty-56.webp",
    imgWhite: "/assets/images/services/thirty-55.webp",
    alt: "Conversion First",
    width: 71,
    height: 71,
  },
  {
    id: 4,
    title: "Dedicated Support",
    description:
      "With proactive digital account management, you get a team that understands your goals and keeps campaigns moving forward without delays.",
    imgOriginal: "/assets/images/services/thirty-54.webp",
    imgWhite: "/assets/images/services/thirty-53.webp",
    alt: "Dedicated Support",
    width: 71,
    height: 71,
  },
  {
    id: 5,
    title: "Scalable Growth",
    description:
      "Through customized digital strategies, we adapt to your growth, whether it’s building local visibility, expanding nationally, or reaching global markets.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    alt: "Scalable Growth",
    width: 71,
    height: 71,
  },
];

// Workflow / Process
export const digitalMarketingWorkflowData = {
  title: "How We Build Your Success",
  showDescription: false,
  steps: [
    {
      id: 1,
      number: "01",
      title: "In-Depth Market Research",
      description:
        "Every project begins with a thorough digital market analysis to understand your industry, competitors, and audience. This research shapes a clear foundation for campaigns that align with real opportunities.",
      image: "/assets/images/work/step1.png",
      alignment: "left",
    },
    {
      id: 2,
      number: "02",
      title: "Strategy Development",
      description:
        "We then create a tailored online marketing strategy designed around your goals. This step outlines the channels, messaging, and timelines that guide every campaign toward measurable outcomes.",
      image: "/assets/images/work/step2.png",
      alignment: "right",
    },
    {
      id: 3,
      number: "03",
      title: "Campaign Execution",
      description:
        "With a plan in place, we launch integrated digital campaigns that connect across platforms. From search to social, each element works together to maximize reach and consistency.",
      image: "/assets/images/work/step3.png",
      alignment: "left",
    },
    {
      id: 4,
      number: "04",
      title: "Continuous Optimization",
      description:
        "Results are tracked and refined through ongoing campaign performance optimization. This ensures strategies stay responsive to trends, delivering stronger outcomes over time.",
      image: "/assets/images/work/step4.png",
      alignment: "right",
    },
  ],
};

// Technologies we use
export const digitalMarketingTechnologiesSectionData = {
  heading: "Technologies We Use",
  description:
    "Best-in-class tools to measure, optimize and grow your campaigns.",
  showDescription: true,
};

export const digitalMarketingTechnologiesData = [
  { id: 1, name: "Google Analytics" },
  { id: 2, name: "Google Ads" },
  { id: 3, name: "Meta / Facebook Ads" },
  { id: 4, name: "HubSpot" },
  { id: 5, name: "SEMrush" },
  { id: 6, name: "Ahrefs" },
  { id: 7, name: "Moz" },
  { id: 8, name: "Hotjar" },
  { id: 9, name: "Mailchimp" },
];

// Scroll Section Data (Case Study)
export const digitalMarketingScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our Digital Marketing Company Different",
  showDescription: false,
  items: [
    {
      id: "digital-case-study-1",
      step: 1,
      title: "Measurable Results",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every campaign includes clear marketing performance reports, so you always know what’s working. No hidden data, no vague numbers, just measurable progress you can track.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Measurable Results",
        width: 669,
        height: 376,
      },
    },
    {
      id: "digital-case-study-2",
      step: 2,
      title: "Industry-Focused Strategies",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We build industry-specific marketing solutions designed for the challenges and opportunities of your sector, ensuring campaigns are always relevant and effective.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Industry-Focused Strategies",
        width: 669,
        height: 376,
      },
    },
    {
      id: "digital-case-study-3",
      step: 3,
      title: "Conversion First",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our conversion optimization services focus on turning traffic into customers, refining every touchpoint to generate consistent leads and sales.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Conversion First",
        width: 669,
        height: 376,
      },
    },
    {
      id: "digital-case-study-4",
      step: 4,
      title: "Dedicated Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With proactive digital account management, you get a team that understands your goals and keeps campaigns moving forward without delays.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Dedicated Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "digital-case-study-5",
      step: 5,
      title: "Scalable Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Through customized digital strategies, we adapt to your growth, whether it’s building local visibility, expanding nationally, or reaching global markets.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Scalable Growth",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: {
    text: "See More Case Studies",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};
