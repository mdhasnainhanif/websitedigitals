// ✅ Clean Single Module: Digital Marketing Company Page Data
// ------------------------------------------------------------

// Metadata
export const digitalMarketingMetadata = {
  title: 'Trusted Digital Marketing Company for Results | Website Digitals',
  description:
    'Work with a trusted digital marketing company driving qualified leads, higher ROI, and long-term growth through proven strategies.',
  keywords:
    'digital marketing company, SEO services, PPC agency, social media marketing, content marketing, online marketing company, local SEO, reputation management',
  canonical: 'https://websitedigitals.com/services/digital-marketing-company',
  openGraph: {
    title:
      'Trusted Digital Marketing Company for Results | Website Digitals',
    description:
      'Work with a trusted digital marketing company driving qualified leads, higher ROI, and long-term growth through proven strategies.',
    url: 'https://websitedigitals.com/services/digital-marketing-company',
    siteName: 'Website Digitals',
    images: [
      {
        url: '/assets/images/digital-marketing-og.jpg',
        width: 1200,
        height: 630,
        alt: 'Digital Marketing Company',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
};

// Banner Data 2 (for second banner section)
export const digitalMarketingBannerData2 = {
  heading: "Your Trusted Digital Marketing Company Starts Here",
  description: [
    "Stop losing leads to strategies that don't work. A trusted digital marketing company can help you attract the right audience, convert them into customers, and grow with confidence."
  ],
  isCta: true,
  cta: {
    text: "Work With Us Now",
    href: "#contact",
    className: "offer-btn primary",
  },
  image: null,
};

// Scroll Section Data (Case Study)
export const digitalMarketingScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Case Study: How We Transformed Digital Marketing Results",
  description: [
    "See how our digital marketing services have helped businesses across various industries achieve remarkable growth.",
    "",
    "From startups to established enterprises, our strategic approach to digital marketing has helped brands build recognition, increase engagement, and drive business growth. Here are some of our success stories:"
  ],
  showDescription: true,
  items: [
    {
      id: "digital-case-study-1",
      step: 1,
      title: "E-commerce SEO Success",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "An e-commerce startup needed to increase organic traffic and sales. We implemented a comprehensive SEO strategy with keyword optimization, technical improvements, and content marketing. The result: 400% increase in organic traffic and 250% growth in online sales within 6 months."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "E-commerce SEO Success",
        width: 669,
        height: 376
      }
    },
    {
      id: "digital-case-study-2",
      step: 2,
      title: "Local Business PPC Transformation",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A local service business struggled with expensive PPC campaigns that weren't converting. We redesigned their ad strategy with better targeting and landing pages. Cost per lead decreased by 60% while lead volume increased by 180%."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Local Business PPC Transformation",
        width: 669,
        height: 376
      }
    },
    {
      id: "digital-case-study-3",
      step: 3,
      title: "B2B Content Marketing Breakthrough",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A B2B software company needed to establish thought leadership and generate qualified leads. We created a content marketing strategy with whitepapers, case studies, and blog content. Lead generation increased by 300% and brand authority improved significantly."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "B2B Content Marketing Breakthrough",
        width: 669,
        height: 376
      }
    },
    {
      id: "digital-case-study-4",
      step: 4,
      title: "Social Media ROI Success",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A retail brand wanted to improve their social media presence and drive sales. We developed a comprehensive social media strategy with engaging content and targeted advertising. Social media revenue increased by 200% and follower engagement rose by 150%."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Social Media ROI Success",
        width: 669,
        height: 376
      }
    }
  ],
  cta: {
    text: "See More Case Studies",
    href: "#",
    className: "offer-btn primary",
    show: true
  }
};

// Banner Section
export const digitalMarketingBannerData = {
  breadcrumb: {
    home: { label: 'Home', href: '/' },
    current: {
      label: 'Digital Marketing Company',
      href: '/services/digital-marketing-company',
    },
  },
  heading: 'Digital Marketing Company Delivering Leads Not Just Clicks',
  description: [
    'Most businesses struggle online because their websites get clicks but fail to turn visitors into customers.',
    '',
    'At Website Digitals, we are a trusted digital marketing company that helps brands reach the right audience and generate real results. Unlike agencies chasing vanity metrics, we focus on qualified leads and measurable growth.',
    '',
    'With deep SEO expertise and proven content strategies, our team makes your business stand out. From SEO-optimized property websites to paid campaigns that deliver instant impact, we create a clear path to long-term success.',
  ],
  isCta: true,
  cta: {
    text: 'Talk to an Expert Now',
    href: '#contact',
    className: 'offer-btn primary',
  },
};

// Stats Section
export const digitalMarketingStatsData = [
  { id: 1, label: 'Client Retention Rate', value: '98%' },
  { id: 2, label: 'Projects Completed', value: '500+' },
  { id: 3, label: 'Average Client Rating', value: '4.9/5' },
  { id: 4, label: 'Industries Served', value: '100+' },
];

// Services Section
export const digitalMarketingServicesSectionData = {
  heading: 'Our Digital Marketing Services Designed to Grow Your Business',
  description: '',
  showDescription: false,
};

export const digitalMarketingServicesData = [
  {
    id: 1,
    title: 'Search Engine Optimization (SEO)',
    description:
      'In-depth keyword research, on-page optimization, technical SEO and link-building campaigns that improve rankings and drive consistent organic traffic.',
  },
  {
    id: 2,
    title: 'Pay Per Click (PPC)',
    description:
      'Conversion-focused paid campaigns across Google, Microsoft and social channels to maximize ROI and reduce wasted ad spend.',
  },
  {
    id: 3,
    title: 'Social Media Marketing',
    description:
      'Strategic social campaigns that expand reach, build trust and turn followers into customers.',
  },
  {
    id: 4,
    title: 'Digital PR',
    description:
      'Amplify brand authority with earned placements and targeted outreach that boost reputation and referral traffic.',
  },
  {
    id: 5,
    title: 'Content Writing',
    description:
      'Clear, compelling and search-optimized copy for blogs, pages, ads and product descriptions.',
  },
  {
    id: 6,
    title: 'Content Marketing',
    description:
      'Plan, publish and promote assets that generate leads, nurture prospects and support conversion optimization.',
  },
  {
    id: 7,
    title: 'Guest Post / Outreach',
    description:
      'Secure high-quality backlinks and placements that grow authority and organic visibility over time.',
  },
  {
    id: 8,
    title: 'Link Building',
    description:
      'Relevant publisher relationships and content partnerships to earn referral traffic and ranking gains.',
  },
  {
    id: 9,
    title: 'Local SEO',
    description:
      'Targeted inbound marketing strategies to dominate local search and capture nearby customers.',
  },
  {
    id: 10,
    title: 'Online Reputation Management',
    description:
      'Review monitoring, reputation repair and proactive customer-acquisition tactics to protect and enhance your brand.',
  },
  {
    id: 11,
    title: 'App Store Optimization (ASO)',
    description:
      'Increase app visibility and downloads with performance-driven ASO for Google Play and the App Store.',
  },
];

// Impact / USPs Section
export const digitalMarketingImpactSectionData = {
  heading: 'Why a Professional Digital Marketing Company Delivers ROI',
  intro:
    'We focus on strategies that generate measurable growth — from brand building and conversion-focused websites to campaigns that reach the right customers.',
};

export const digitalMarketingImpactCardsData = [
  {
    id: 1,
    title: 'Branding That Builds Trust',
    body:
      'A strong online branding strategy shapes perception and creates confidence. With proven methods to boost brand credibility, businesses move from being overlooked to being the first choice.',
  },
  {
    id: 2,
    title: 'Websites That Convert',
    body:
      'Purpose-built conversion-focused websites combined with lead generation marketing turn clicks into qualified customers.',
  },
  {
    id: 3,
    title: 'Campaigns That Reach More',
    body:
      'Expert ad management and audience targeting expand reach and deliver measurable ROI without wasting budget.',
  },
  {
    id: 4,
    title: 'Insights That Fuel Growth',
    body:
      'Advanced tracking and data-driven insights reveal opportunities and ensure continuous improvement.',
  },
];

// Industries Section
export const digitalMarketingIndustriesSectionData = {
  heading: 'Industries We Serve',
  intro:
    'We build industry-focused marketing solutions for the challenges and opportunities of your sector.',
};

export const digitalMarketingIndustriesCardsData = [
  {
    title: 'E-commerce',
    description:
      'High-converting funnels and performance campaigns for online stores.',
  },
  {
    title: 'Healthcare',
    description: 'Compliance-focused local SEO and reputation growth.',
  },
  {
    title: 'Real Estate',
    description: 'Lead generation and property marketing that converts.',
  },
  {
    title: 'SaaS',
    description:
      'Product-led growth and lifecycle marketing for software companies.',
  },
  {
    title: 'Finance',
    description:
      'Trust-driven content and performance marketing for financial services.',
  },
  {
    title: 'Local Businesses',
    description:
      'Affordable, high-impact strategies for local visibility and footfall.',
  },
];

// Why Choose Us Section
export const digitalMarketingWhyChooseUsSectionData = {
  heading: 'What Makes Our Digital Marketing Company Different',
};

export const digitalMarketingWhyChooseUsData = [
  {
    id: 1,
    title: 'Measurable Results',
    description:
      'Every campaign includes clear marketing performance reports, so you always know what’s working.',
  },
  {
    id: 2,
    title: 'Industry-Focused Strategies',
    description:
      'We build industry-specific solutions that are always relevant and effective.',
  },
  {
    id: 3,
    title: 'Conversion First',
    description:
      'Our conversion optimization services refine every touchpoint to generate consistent leads and sales.',
  },
  {
    id: 4,
    title: 'Dedicated Support',
    description:
      'Proactive account management and a team that understands your goals.',
  },
  {
    id: 5,
    title: 'Scalable Growth',
    description:
      'Customized strategies that adapt as your business grows.',
  },
];

// Workflow Section
export const digitalMarketingWorkflowData = {
  heading: 'How We Build Your Success',
  steps: [
    {
      id: 1,
      title: 'In-Depth Market Research',
      body:
        'Thorough analysis of your industry, competitors and audience to identify real opportunities.',
    },
    {
      id: 2,
      title: 'Strategy Development',
      body:
        'A tailored plan that outlines channels, messaging and timelines to hit your goals.',
    },
    {
      id: 3,
      title: 'Campaign Execution',
      body:
        'Launch integrated campaigns across search, social and display to maximize reach.',
    },
    {
      id: 4,
      title: 'Continuous Optimization',
      body:
        'Ongoing refinement using performance data to improve outcomes and ROI.',
    },
  ],
};

// Technologies Section
export const digitalMarketingTechnologiesSectionData = {
  heading: 'Technologies We Use',
  intro: 'Best-in-class tools to measure, optimize and grow your campaigns.',
};

export const digitalMarketingTechnologiesData = [
  { id: 1, name: 'Google Analytics' },
  { id: 2, name: 'Google Ads' },
  { id: 3, name: 'Meta / Facebook Ads' },
  { id: 4, name: 'HubSpot' },
  { id: 5, name: 'SEMrush' },
  { id: 6, name: 'Ahrefs' },
  { id: 7, name: 'Moz' },
  { id: 8, name: 'Hotjar' },
  { id: 9, name: 'Mailchimp' },
];

// Final CTA Section
export const digitalMarketingFinalCTAData = {
  heading: 'Your Trusted Digital Marketing Company Starts Here',
  description:
    'Stop losing leads to strategies that don’t work. A trusted digital marketing company can help you attract the right audience, convert them into customers, and grow with confidence.',
  isCta: true,
  cta: {
    text: 'Work With Us Now',
    href: '#contact',
    className: 'offer-btn primary',
  },
};

// FAQs Section
export const digitalMarketingFAQsData = [
  {
    id: 1,
    question: 'Does Website Digitals work with businesses of all sizes?',
    answer:
      'Yes. Website Digitals partners with startups, local businesses, and national brands across multiple industries. Our solutions scale with your goals and budget.',
  },
  {
    id: 2,
    question: 'How quickly can I expect results with Website Digitals?',
    answer:
      'The timeline depends on the services you choose. SEO typically builds momentum within a few months, while paid campaigns can generate immediate visibility and leads.',
  },
  {
    id: 3,
    question: 'What does a digital marketing company do?',
    answer:
      'A digital marketing company helps businesses build visibility, attract qualified traffic, and convert visitors into customers using SEO, PPC, content, social and analytics-driven optimization.',
  },
  {
    id: 4,
    question: 'How does digital marketing help small businesses?',
    answer:
      'Digital marketing gives small businesses access to tools once reserved for larger brands, enabling targeted local SEO, cost-effective paid campaigns and conversion-focused strategies.',
  },
  {
    id: 5,
    question: 'What are the benefits of hiring a digital marketing agency?',
    answer:
      'Benefits include saving time, accessing specialized expertise, faster implementation of proven strategies, and measurable ROI tracking.',
  },
  {
    id: 6,
    question: 'What are the latest digital marketing trends?',
    answer:
      'AI-powered personalization, voice search optimization, video-first campaigns, and data-driven automation are among the latest trends.',
  },
  {
    id: 7,
    question: 'How can I hire a digital marketing company?',
    answer:
      'Start with a partner that understands your industry. Website Digitals offers free audits, clear proposals, and tailored strategies to get started quickly.',
  },
  {
    id: 8,
    question:
      'Does Website Digitals offer affordable SEO & digital marketing packages?',
    answer:
      'Yes. Our packages are scalable, transparent, and focused on delivering results without hidden costs.',
  },
  {
    id: 9,
    question: 'Is Website Digitals the best ROI-focused marketing agency?',
    answer:
      'We prioritize conversions over vanity metrics and track every campaign with clear performance reports so you can see how your investment generates returns.',
  },
];
