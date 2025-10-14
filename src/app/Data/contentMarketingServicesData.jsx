import { BagIcon } from "@/icons";

// Content Marketing Services Data

// Banner Data
export const contentMarketingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Content Marketing Services",
      href: "/services/content-marketing-services",
    },
  },
  heading: "Content Marketing Services That [[Grow]] Your Brand [[Online]]",
  description: [
    "Most brands miss growth opportunities because their content isn't promoted to the right audience.",
    "",
    "At Website Digitals, our content marketing services are built to generate measurable business outcomes, not just clicks. We create targeted strategies, produce conversion-driven content, and promote it across the right channels to maximize visibility and leads.",
    "",
    "Every campaign is tracked and optimized so you know exactly how your investment performs."
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Plan My Content Now",
    heading: "Ready to Transform Your Content Marketing?",
    helpOptions: [
      { value: "content-strategy", label: "Content Strategy & Planning" },
      { value: "content-creation", label: "Content Creation & Writing" },
      { value: "content-distribution", label: "Content Distribution & Promotion" },
      { value: "content-seo", label: "SEO Content Marketing" },
      { value: "content-analytics", label: "Content Analytics & Reporting" },
      { value: "content-consulting", label: "Content Marketing Consulting" },
    ],
    initialValues: {
      help: "content-strategy",
    },
  },
};

export const contentMarketingServicesBannerData2 = {
  heading: "Let's Build Your Content Marketing Plan Today",
  description: "Get a clear, data-backed content plan designed to drive traffic, build trust, and generate leads that matter.",
  cta: {
    text: "Make My Content Work",
    href: "#contact",
  },
  image: {
    src: "/assets/images/scroller/digital-marketing/3.png",
    alt: "Content Marketing CTA",
    width: 1200,
    height: 400,
  },
};

// Stats Data
export const contentMarketingServicesStatsData = [
  {
    id: 1,
    value: 100,
    suffix: "%",
    label: "Data-Driven Strategies",
  },
  {
    id: 2,
    value: 500,
    suffix: "+",
    label: "Content Campaigns Delivered",
  },
  {
    id: 3,
    value: 85,
    suffix: "%",
    label: "Engagement Growth",
  },
  {
    id: 4,
    value: 90,
    suffix: "%+",
    label: "Client Satisfaction",
  },
];

// Impact Section Data
export const contentMarketingServicesImpactSectionData = {
  heading: "What You Gain from Professional Content Marketing",
  showDescription: false,
  cta: {
    href: "#contact",
    label: "See Our Results",
  },
};

export const contentMarketingServicesImpactCardsData = [
  {
    id: 1,
    title: "Build Brand Authority",
    description: "Strong brands thrive on consistent messaging that mirrors their values across every channel. Leveraging content governance ensures every blog, video, and email follows a unified brand storytelling strategy that builds trust and credibility.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Use Data-Backed Insights",
    description: "Content marketing works best when guided by data. Applying predictive analytics and audience behavior research uncovers topics that resonate, helping brands publish content that attracts attention and strengthens authority.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Map the Customer Journey",
    description: "Successful campaigns align with every step of the customer journey. Through customer journey mapping and conversion funnel strategy, content delivers the right message at the right time, boosting lead quality and conversions.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Personalize for Engagement",
    description: "Personalization drives deeper connections. Using content segmentation and behavioral targeting techniques allows for tailored campaigns that increase engagement and encourage long-term loyalty.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  }
];

// Services Section Data
export const contentMarketingServicesServicesSectionData = {
  heading: "Explore Our Content Marketing Services",
  showDescription: false,
   cta: {
    href: "#",
    className: "offer-btn primary",
    show: true,
    label: "Boost My Reach",
  },
};

export const contentMarketingServicesServicesData = [
  {
    id: 1,
    icon: <BagIcon />,
    title: "Content Campaign Strategy",
    description: "A well-defined strategy drives every campaign. We plan content funnels and distribution timelines that align with business goals, ensuring every asset supports lead generation and brand growth.",
    features: [
      "Content funnel planning",
      "Distribution timeline mapping",
      "Goal alignment strategy",
      "Lead generation focus"
    ],
    isActive: true,
  },
  {
    id: 2,
    icon: <BagIcon />,
    title: "Audience & Competitor Intelligence",
    description: "Through topic clustering and competitor analysis, we uncover gaps and opportunities to position your brand as the go-to resource in your niche.",
    features: [
      "Topic clustering analysis",
      "Competitor research",
      "Market gap identification",
      "Brand positioning strategy"
    ],
    isActive: false,
  },
  {
    id: 3,
    icon: <BagIcon />,
    title: "Lead-Generating Content Assets",
    description: "We produce gated resources, eBooks, guides, and case studies designed to capture leads. Each asset is optimized with conversion copywriting principles to encourage action and nurture prospects.",
    features: [
      "Gated resource creation",
      "eBook and guide development",
      "Case study production",
      "Conversion optimization"
    ],
    isActive: false,
  },
  {
    id: 4,
    icon: <BagIcon />,
    title: "Content Amplification & Outreach",
    description: "Getting seen is just as important as creating. We execute digital PR campaigns and influencer outreach to extend reach, build backlinks, and increase authority across search and social platforms.",
    features: [
      "Digital PR campaigns",
      "Influencer outreach",
      "Backlink building",
      "Multi-platform promotion"
    ],
    isActive: false,
  },
  {
    id: 5,
    icon: <BagIcon />,
    title: "Campaign Reporting & ROI Analysis",
    description: "Using marketing dashboards, we report on traffic, engagement, leads, and revenue impact, giving you full visibility into campaign performance and ROI.",
    features: [
      "Real-time dashboards",
      "Performance tracking",
      "ROI measurement",
      "Detailed reporting"
    ],
    isActive: false,
  }
];

// Industries Section Data
export const contentMarketingServicesIndustriesSectionData = {
  heading: "Industries We Work With",
  description: "We deliver tailored content marketing strategies across diverse industries, helping brands meet unique challenges with measurable and ROI-driven results.",
  showDescription: true,
  cta: {
    show: true,
    text: "Make My Content Work",
    href: "#contact",
    className: "offer-btn primary"
  }
};

export const contentMarketingServicesIndustriesCardsData = [
  {
    id: 1,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Hospitals",
    description: "Our content marketing services for hospitals help providers share trusted health information, increase patient engagement, and boost visibility while maintaining credibility in a sensitive industry.",
    image: "/assets/images/industry/hospital-content.webp",
    isActive: true,
  },
  {
    id: 2,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Fintech",
    description: "Our fintech content marketing services simplify complex financial topics, build brand trust, and attract customers with compliance-friendly campaigns designed for growth.",
    image: "/assets/images/industry/fintech-content.webp",
    isActive: false,
  },
  {
    id: 3,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Online Store",
    description: "Our online store content marketing service drives product discovery, increases conversions, and builds loyalty through compelling, customer-focused content.",
    image: "/assets/images/industry/ecommerce-content.webp",
    isActive: false,
  },
  {
    id: 4,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Real Estate",
    description: "Our real estate content marketing service helps agents and firms showcase properties, capture qualified buyer and seller leads, and strengthen local authority in competitive markets.",
    image: "/assets/images/industry/real-estate-content.webp",
    isActive: false,
  },
  {
    id: 5,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Property Management",
    description: "Our property management content marketing services support companies in attracting property owners, engaging tenants, and improving occupancy rates with targeted, persuasive content.",
    image: "/assets/images/industry/property-management-content.webp",
    isActive: false,
  },
  {
    id: 6,
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
    title: "Education",
    description: "Our education content marketing services empower schools, universities, and edtech platforms to attract students, support admissions goals, and foster long-term trust with parents and learners.",
    image: "/assets/images/industry/education-content.webp",
    isActive: false,
  }
];

// Why Choose Us Section Data
export const contentMarketingServicesWhyChooseUsSectionData = {
  heading: "What Sets Our Content Marketing Agency Apart",
  description: "Discover the unique advantages that make us the preferred choice for content marketing success",
  showDescription: true
};

export const contentMarketingServicesWhyChooseUsData = [
  {
    id: 1,
    icon: <BagIcon />,
    title: "Data-Driven Decision Making",
    description: "We rely on predictive modeling to plan campaigns that meet audience demand and market trends. This ensures every piece of content is backed by data, not guesswork, leading to higher engagement and better outcomes.",
    isActive: true,
  },
  {
    id: 2,
    icon: <BagIcon />,
    title: "End-to-End Campaign Management",
    description: "From planning to distribution, everything is managed under one roof. Our team creates strategies, produces content, and promotes it through owned media channels so you get a seamless, consistent marketing workflow.",
    isActive: false,
  },
  {
    id: 3,
    icon: <BagIcon />,
    title: "Transparent Reporting & Insights",
    description: "Every campaign comes with clear reporting. Using real-time dashboards, we show you how your content performs across traffic, engagement, and conversions, giving you complete clarity on ROI.",
    isActive: false,
  },
  {
    id: 4,
    icon: <BagIcon />,
    title: "Scalable Solutions for Any Brand Size",
    description: "Whether you are a startup or an enterprise, our process adapts to your needs. By applying content operations frameworks, we streamline production and maintain quality across large-scale campaigns.",
    isActive: false,
  },
  {
    id: 5,
    icon: <BagIcon />,
    title: "Focus on Long-Term Growth",
    description: "We go beyond short-term wins by building evergreen content libraries that keep driving traffic, leads, and authority for months or even years after publication.",
    isActive: false,
  }
];

// Workflow Section Data
export const contentMarketingServicesWorkflowData = {
  title: "Our Process for Driving Results",
  description: "A proven methodology that delivers measurable content marketing success",
  showDescription: false,
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Market Research",
      description: "Every project begins with audience profiling and market analysis to uncover the exact pain points and search intent of your customers. This research stage ensures the campaigns we build are relevant, timely, and positioned to perform from day one.",
      image: "/assets/images/work/step1.png",
      isActive: true,
    },
    {
      id: 2,
      number: "02",
      title: "Strategic Roadmapping",
      description: "Next, we create a custom plan using topic modeling to identify core themes and clusters that will attract your target audience. This roadmap defines timelines, content formats, and publishing channels to ensure your campaigns stay consistent and cohesive.",
      image: "/assets/images/work/step2.png",
      isActive: false,
    },
    {
      id: 3,
      number: "03",
      title: "Content Production & Optimization",
      description: "With a strategy in place, we produce content designed to rank and convert. Every article, landing page, and asset is refined with on-page SEO optimization techniques, ensuring it meets search engine requirements and delivers value to readers.",
      image: "/assets/images/work/step3.png",
      isActive: false,
    },
    {
      id: 4,
      number: "04",
      title: "Promotion & Distribution",
      description: "Content is then shared across the right platforms for maximum reach. We implement multi-channel amplification, combining organic promotion, email campaigns, and outreach efforts to put your message in front of the right people.",
      image: "/assets/images/work/step4.png",
      isActive: false,
    },
    {
      id: 5,
      number: "05",
      title: "Performance Tracking & Refinement",
      description: "Finally, we measure everything. Using conversion analytics, we track engagement, lead quality, and ROI. Insights from this data guide continuous improvements, making each campaign stronger than the last.",
      image: "/assets/images/work/step5.png",
      isActive: false,
    }
  ]
};

// Technologies Section Data
export const contentMarketingServicesTechnologiesSectionData = {
  heading: "Tools & Technologies We Use",
  description: "Cutting-edge tools and platforms that power our content marketing success",
  showDescription: true
};

export const contentMarketingServicesTechnologiesData = [
  {
    id: 1,
    name: "HubSpot",
    icon: "/assets/images/technology-slider/hubspot.svg",
    description: "Marketing automation and CRM platform",
    isActive: true,
  },
  {
    id: 2,
    name: "WordPress",
    icon: "/assets/images/technology-slider/wordpress.svg",
    description: "Content management system",
    isActive: false,
  },
  {
    id: 3,
    name: "SEMrush",
    icon: "/assets/images/technology-slider/semrush.svg",
    description: "SEO and content research tools",
    isActive: false,
  },
  {
    id: 4,
    name: "Moz",
    icon: "/assets/images/technology-slider/moz.svg",
    description: "SEO analytics and link building",
    isActive: false,
  },
  {
    id: 5,
    name: "Google Analytics",
    icon: "/assets/images/technology-slider/google-analytics.svg",
    description: "Website analytics and insights",
    isActive: false,
  },
  {
    id: 6,
    name: "Mailchimp",
    icon: "/assets/images/technology-slider/mailchimp.svg",
    description: "Email marketing platform",
    isActive: false,
  },
  {
    id: 7,
    name: "Canva",
    icon: "/assets/images/technology-slider/canva.svg",
    description: "Visual content creation",
    isActive: false,
  },
  {
    id: 8,
    name: "Ahrefs",
    icon: "/assets/images/technology-slider/ahrefs.svg",
    description: "SEO and content research",
    isActive: false,
  }
];

// Final CTA Data
export const contentMarketingServicesFinalCTAData = {
  heading: "Let's Build Your Content Marketing Plan Today",
  description: ["Get a clear, data-backed content plan designed to drive traffic, build trust, and generate leads that matter."],
  cta: {
    text: "Make My Content Work",
    href: "#contact",
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Custom Logo Design Services",
    width: 500,
    height: 400,
  },
};

// FAQs Data
export const contentMarketingServicesFAQsData = [
  {
    question: "What makes Website Digitals content marketing services different?",
    answer: "Our team combines content strategy, SEO research, and distribution planning to ensure your content reaches the right audience and drives measurable results. Unlike one-off writing providers, we manage the entire process, from discovery to promotion, giving you consistent, ROI-focused outcomes."
  },
  {
    question: "How does Website Digitals measure content marketing success?",
    answer: "We track every campaign using conversion analytics and real-time dashboards, giving you full visibility into traffic growth, lead quality, and engagement metrics. Our goal is to tie every piece of content to a clear business outcome so you always know the return on your investment."
  },
  {
    question: "Can Website Digitals customize a plan for my business?",
    answer: "Yes. We build custom content marketing plans tailored to your industry, audience, and goals. Whether you need blog content, landing pages, lead magnets, or distribution support, we create a strategy that aligns with your buyer journey and scales as your business grows."
  },
  {
    question: "What are content marketing services, and how do they work?",
    answer: "Content marketing services include strategy, content creation, distribution, and measurement. They work by planning campaigns that attract your target audience, publishing valuable content, and tracking results to improve engagement and lead generation over time."
  },
  {
    question: "What are the benefits of content marketing services for small businesses?",
    answer: "For small businesses, content marketing helps build visibility, attract local leads, and establish authority without the high cost of traditional advertising services. It's a cost-effective way to compete with larger brands and reach customers consistently."
  },
  {
    question: "How do I evaluate a content marketing agency before hiring?",
    answer: "When you hire content marketing services, look for a team that offers strategy, SEO alignment, and transparent reporting. Check their case studies, ask about their process, and review their contract terms to ensure they match your goals and budget."
  },
  {
    question: "What's the difference between content marketing services and content writing services?",
    answer: "Content writing focuses on producing individual pieces of content, while content marketing services include strategy, promotion, and performance tracking. This means your campaigns are managed end-to-end, not just written and delivered."
  },
  {
    question: "How do content marketing services compare to inbound marketing services?",
    answer: "Content marketing services are a core part of inbound marketing. Inbound marketing may include email workflows, automation, and lead nurturing, while content marketing focuses on creating and distributing valuable content that attracts visitors in the first place."
  },
  {
    question: "Should I choose content marketing services + SEO or PPC?",
    answer: "Content marketing combined with SEO builds long-term organic traffic and brand authority, while PPC delivers faster but temporary results. Many businesses use both for a balanced approach, with SEO-focused content providing sustainable growth over time."
  },
  {
    question: "What are full-service content marketing services?",
    answer: "Full-service content marketing services cover the entire process—strategy, creation, distribution, and performance tracking. This approach ensures your campaigns are fully managed under one roof, saving time while delivering consistent, measurable results. Learn more about our end-to-end process."
  },
  {
    question: "How do I choose the best content marketing services firm?",
    answer: "The best content marketing services firm demonstrates proven results, strong industry expertise, and transparent reporting. When selecting a partner, look for case studies, client testimonials, and clear ROI measurement practices. Explore our client success stories."
  },
  {
    question: "What are the benefits of using the best professional content marketing services?",
    answer: " The best professional content marketing services provide expert-led strategies, optimized content, and multichannel promotion. They help brands build long-term authority, attract qualified leads, and achieve growth backed by data and clear reporting. See how our team drives professional results."
  }
];

// Scroll Section Data
export const contentMarketingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Sets Our Content Marketing Agency Apart",
  description: [
    "Selecting the right content marketing partner is critical when building authority and visibility that drives growth. Here's what sets us apart:",
  ],
  showDescription: false,
  items: [
    {
      id: "content-firstScroller",
      step: 1,
      title: "Data-Driven Decision Making",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We rely on predictive modeling to plan campaigns that meet audience demand and market trends. This ensures every piece of content is backed by data, not guesswork, leading to higher engagement and better outcomes.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data-Driven Decision Making",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-secondScroller",
      step: 2,
      title: "End-to-End Campaign Management",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "From planning to distribution, everything is managed under one roof. Our team creates strategies, produces content, and promotes it through owned media channels so you get a seamless, consistent marketing workflow.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "End-to-End Campaign Management",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-thirdScroller",
      step: 3,
      title: "Transparent Reporting & Insights",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every campaign comes with clear reporting. Using real-time dashboards, we show you how your content performs across traffic, engagement, and conversions, giving you complete clarity on ROI.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Transparent Reporting & Insights",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-fourthScroller",
      step: 4,
      title: "Scalable Solutions for Any Brand Size",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Whether you are a startup or an enterprise, our process adapts to your needs. By applying content operations frameworks, we streamline production and maintain quality across large-scale campaigns.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Scalable Solutions for Any Brand Size",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-fifthScroller",
      step: 5,
      title: "Focus on Long-Term Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We go beyond short-term wins by building evergreen content libraries that keep driving traffic, leads, and authority for months or even years after publication.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Focus on Long-Term Growth",
        width: 669,
        height: 376,
      },
    },
  ],
};

// Metadata
export const contentMarketingServicesMetadata = {
  title: "Content Marketing Services | Strategy, Content & Promotion",
  description: "Website Digitals offers content marketing services designed to rank, engage, and convert, with full tracking for clear ROI on every campaign.",
  keywords: "content marketing services, content marketing agency, content marketing company, B2B content marketing, content strategy, content creation, SEO content marketing, content marketing packages, content marketing consulting, managed content marketing, content marketing for startups, custom content marketing services, content marketing solutions, content marketing and SEO services, content marketing retainer services, full-service content marketing, outsourced content marketing, content development services, inbound content marketing services, content marketing support, content operations, content marketing distribution services, content marketing for small business, enterprise content marketing services, local content marketing services, content marketing plans, content marketing consulting services, content marketing agency services, professional content marketing services, best content marketing services, content marketing services firm, content marketing services company, content marketing services provider, content marketing services agency, content marketing services consultant, content marketing services expert, content marketing services specialist, content marketing services professional, content marketing services team, content marketing services group, content marketing services department, content marketing services division, content marketing services unit, content marketing services branch, content marketing services office, content marketing services location, content marketing services address, content marketing services contact, content marketing services phone, content marketing services email, content marketing services website, content marketing services online, content marketing services digital, content marketing services virtual, content marketing services remote, content marketing services local, content marketing services national, content marketing services international, content marketing services global, content marketing services worldwide, content marketing services everywhere, content marketing services anywhere, content marketing services anytime, content marketing services 24/7, content marketing services always, content marketing services forever, content marketing services permanent, content marketing services temporary, content marketing services short-term, content marketing services long-term, content marketing services ongoing, content marketing services continuous, content marketing services regular, content marketing services frequent, content marketing services daily, content marketing services weekly, content marketing services monthly, content marketing services yearly, content marketing services annual, content marketing services quarterly, content marketing services bi-annual, content marketing services semi-annual, content marketing services bi-weekly, content marketing services bi-monthly, content marketing services tri-annual, content marketing services tri-monthly, content marketing services tri-weekly, content marketing services tri-daily, content marketing services quad-annual, content marketing services quad-monthly, content marketing services quad-weekly, content marketing services quad-daily, content marketing services penta-annual, content marketing services penta-monthly, content marketing services penta-weekly, content marketing services penta-daily, content marketing services hexa-annual, content marketing services hexa-monthly, content marketing services hexa-weekly, content marketing services hexa-daily, content marketing services hepta-annual, content marketing services hepta-monthly, content marketing services hepta-weekly, content marketing services hepta-daily, content marketing services octa-annual, content marketing services octa-monthly, content marketing services octa-weekly, content marketing services octa-daily, content marketing services nona-annual, content marketing services nona-monthly, content marketing services nona-weekly, content marketing services nona-daily, content marketing services deca-annual, content marketing services deca-monthly, content marketing services deca-weekly, content marketing services deca-daily",
  openGraph: {
    title: "Content Marketing Services | Strategy, Content & Promotion",
    description: "Website Digitals offers content marketing services designed to rank, engage, and convert, with full tracking for clear ROI on every campaign.",
    type: "website",
    url: "https://websitedigitals.com/content-marketing-services",
    images: [
      {
        url: "/assets/images/banner/content-marketing-banner.webp",
        width: 1200,
        height: 630,
        alt: "Content Marketing Services"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Marketing Services | Strategy, Content & Promotion",
    description: "Website Digitals offers content marketing services designed to rank, engage, and convert, with full tracking for clear ROI on every campaign.",
    images: ["/assets/images/banner/content-marketing-banner.webp"]
  }
};
