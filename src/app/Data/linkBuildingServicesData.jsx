import { BagIcon } from "../../icons";

// Link Building Services Data
export const linkBuildingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Link Building Services",
      href: "/services/link-building-services",
    },
  },
  heading: "Get [[Ranking]], [[Traffic]] & [[Leads]] with Link Building Services",
  description: [
    "Many businesses struggle to rank higher because their websites lack strong backlinks and authority.",
    "",
    "At Website Digitals, we provide professional link building services that strengthen domain authority, deliver conversion-focused backlinks, and make SEO growth accessible through affordable link building services and white-hat strategies."
  ],
  isCta: false,
  image: null,
  formConfig: {
    buttonText: "Grow Authority Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "blogger-outreach", label: "Blogger Outreach & Guest Posts" },
      { value: "white-hat", label: "White Hat Backlink Services" },
      { value: "custom-packages", label: "Tailored SEO Link Building Packages" },
      { value: "niche-regional", label: "Niche & Regional Link Building" },
      { value: "ecommerce-saas", label: "E-Commerce & SaaS Link Building" },
      { value: "consulting", label: "Link Building Strategy Consulting" },
    ],
    initialValues: {
      help: "blogger-outreach",
    },
  },
};

export const linkBuildingServicesBannerData2 = {
  heading: "Start Your Link Building Campaign Today",
  description: "Don't let competitors outrank you with stronger backlink profiles. Partner with an experienced SEO link building company backed by trusted link building consultants who follow white-hat practices and deliver measurable results. It's time to start your link building project and secure the rankings your business deserves.",
  cta: {
    text: "Boost Rankings Now",
    href: "#contact",
  },
  image: null,
};

export const linkBuildingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Our Link Building Agency Delivers Long-Term SEO Value",
  description: [
    "The right link building partner makes a lasting impact on SEO. Our safe, transparent, and results-driven approach ensures every backlink strengthens rankings, traffic, and growth.",
  ],
  showDescription: true,
  items: [
    {
      id: "link-building-firstScroller",
      step: 1,
      title: "Safe White Hat Link Building",
      icon: "/assets/images/icons/icon_Services.svg",
      paragraphs: [
        "We follow Google's Webmaster Guidelines and use only white hat link building practices. By avoiding risky tactics, we deliver sustainable results that protect your brand reputation."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Safe White Hat Link Building",
        width: 669,
        height: 376,
      },
    },
    {
      id: "link-building-secondScroller",
      step: 2,
      title: "Authority-Driven Results",
      icon: "/assets/images/icons/icon_technology.svg",
      paragraphs: [
        "Our strategies focus on strengthening domain authority (DA), building credibility with search engines, and improving overall visibility."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Authority-Driven Results",
        width: 669,
        height: 376,
      },
    },
    {
      id: "link-building-thirdScroller",
      step: 3,
      title: "Transparent Reporting",
      icon: "/assets/images/icons/icon_Solutions.svg",
      paragraphs: [
        "We provide detailed link profile audits, giving you clear insights into backlink quality and measurable SEO impact."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Transparent Reporting",
        width: 669,
        height: 376,
      },
    },
    {
      id: "link-building-fourthScroller",
      step: 4,
      title: "Long-Term SEO Value",
      icon: "/assets/images/icons/icon_Industries.svg",
      paragraphs: [
        "Our backlinks are built on trusted sources and designed to last, supporting organic rankings and protecting your SEO investment against algorithm updates."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Long-Term SEO Value",
        width: 669,
        height: 376,
      },
    },
    {
      id: "link-building-fifthScroller",
      step: 5,
      title: "Industry Expertise",
      icon: "/assets/images/icons/icon_Services.svg",
      paragraphs: [
        "With years of proven experience in SEO strategy and digital PR, our team applies industry-recognized best practices to deliver link building solutions that meet both search engine requirements and business growth objectives."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Industry Expertise",
        width: 669,
        height: 376,
      },
    }
  ]
};

export const linkBuildingServicesServicesData = [
  {
    icon: <BagIcon />,
    title: "Blogger Outreach & Guest Posts",
    description: "We secure placements on high-authority websites through targeted guest post link building and blogger outreach services. Each placement is carefully selected to provide contextual backlinks that enhance visibility, credibility, and keyword relevance.",
    features: [
      "High-authority website placements",
      "Targeted guest post link building",
      "Contextual backlinks",
      "Enhanced visibility and credibility"
    ]
  },
  {
    icon: <BagIcon />,
    title: "White Hat Backlink Services",
    description: "Our white hat link building practices follow Google's Webmaster Guidelines and recognized SEO best practices. By prioritizing ethical methods, we ensure sustainable growth that avoids penalties while strengthening rankings over time.",
    features: [
      "Google-compliant practices",
      "Ethical link building methods",
      "Penalty-free growth",
      "Sustainable ranking improvements"
    ]
  },
  {
    icon: <BagIcon />,
    title: "Tailored SEO Link Building Packages",
    description: "No two businesses are the same. From affordable link building services for small businesses to enterprise SEO link building solutions for large-scale campaigns, our packages are customized to meet specific industry requirements and long-term growth objectives.",
    features: [
      "Customized packages",
      "Small business solutions",
      "Enterprise-level campaigns",
      "Industry-specific requirements"
    ]
  },
  {
    icon: <BagIcon />,
    title: "Niche & Regional Link Building",
    description: "We design strategies for businesses targeting specific industries or geographic markets. Whether it's niche directories, regional publications, or sector-focused blogs, our campaigns deliver relevant backlinks that directly connect with your audience.",
    features: [
      "Industry-specific strategies",
      "Geographic market targeting",
      "Niche directory placements",
      "Audience-focused backlinks"
    ]
  },
  {
    icon: <BagIcon />,
    title: "E-Commerce & SaaS Link Building",
    description: "For e-commerce brands and SaaS companies, we craft specialized campaigns aimed at product-driven keywords, software directories, and respected industry reviewers. These backlinks improve visibility in competitive markets where rankings strongly influence conversions.",
    features: [
      "Product-driven keyword focus",
      "Software directory placements",
      "Industry reviewer connections",
      "Conversion-focused visibility"
    ]
  }
];

export const linkBuildingServicesStatsData = [
  {
    id: 1,
    value: 5000,
    label: "Backlinks Built",
    suffix: "+",
    icon: "/assets/images/icons/icon_Services.svg"
  },
  {
    id: 2,
    value: 200,
    label: "Clients Served",
    suffix: "+",
    icon: "/assets/images/icons/icon_technology.svg"
  },
  {
    id: 3,
    value: 85,
    label: "Avg. DA Growth",
    suffix: "%",
    icon: "/assets/images/icons/icon_Solutions.svg"
  },
  {
    id: 4,
    value: 100,
    label: "White Hat",
    suffix: "%",
    icon: "/assets/images/icons/icon_Industries.svg"
  }
];

export const linkBuildingServicesImpactSectionData = {
  heading: "Why Backlinks Remain the Backbone of Strong SEO Results",
  description: "Search engines evaluate websites not just by content quality but also by the authority of the links pointing to them. Authoritative backlinks act as signals of trust, helping businesses achieve stronger visibility and long-term rankings.",
  showDescription: true,
  cta: {
    href: "#contact",
    label: "Start Your Campaign",
  },
};

export const linkBuildingServicesImpactCardsData = [
  {
    icon: "/assets/images/icons/icon_Services.svg",
    title: "Improve Search Rankings",
    description: "With relevant backlinks, your website builds stronger domain authority. As that authority grows, your site gains a higher chance of appearing in organic search results for competitive keywords.",
    col: "col-12 col-md-4 col-lg-4",
    isHighlighted: false,
  },
  {
    icon: "/assets/images/icons/icon_technology.svg",
    title: "Build Trust & Authority",
    description: "Through white hat link building strategies, your site is connected with reputable authority sites. These connections not only strengthen rankings but also improve brand credibility in the eyes of search engines and users alike.",
    col: "col-12 col-md-4 col-lg-4",
    isHighlighted: true,
  },
  {
    icon: "/assets/images/icons/icon_Solutions.svg",
    title: "Sustainable SEO Growth",
    description: "Unlike risky short-term link schemes, sustainable SEO growth comes from consistent practices such as content outreach, guest posting on industry-relevant sites, and earning links from high-quality referring domains. These methods ensure your backlinks remain valuable and penalty-free over time.",
    col: "col-12 col-md-4 col-lg-4",
    isHighlighted: false,
  },
  {
    icon: "/assets/images/icons/icon_Industries.svg",
    title: "Support Your Conversion Goals",
    description: "Links should not only improve rankings but also contribute to conversions. By securing placements that direct qualified traffic, you gain conversion-focused backlinks that support lead generation and sales objectives.",
    col: "col-12 col-md-4 col-lg-4",
    isHighlighted: false,
  },
  {
    icon: "/assets/images/icons/icon_Services.svg",
    title: "Balanced SEO Strategy",
    description: "Effective link building works hand-in-hand with on-page SEO, strengthens content marketing campaigns, and supports ROI from both paid and organic channels. When balanced with a broader digital strategy, it delivers measurable impact across your marketing funnel.",
    col: "col-12 col-md-4 col-lg-4",
    isHighlighted: false,
  }
];

export const linkBuildingServicesServicesSectionData = {
  heading: "Our Link Building Services Tailored to Your Business Needs",
  description: "Every business has different goals, which is why our link building solutions are designed to address multiple industries, strategies, and budgets. From outreach to custom packages, each service is focused on building long-term authority and measurable SEO results.",
  showDescription: true,
  cta: {
    href: "#contact",
    label: "Start Your Campaign",
  },
};

export const linkBuildingServicesIndustriesSectionData = {
  heading: "Businesses We Serve",
  description: "We provide tailored link building services across key industries. Our campaigns align with business goals, compliance needs, and audience intent to deliver measurable authority, visibility, and conversions.",
  showDescription: true,
  cta: {
    show: true,
    text: "Grow Website Authority Now",
    href: "#contact",
    className: "offer-btn primary"
  }
};

export const linkBuildingServicesIndustriesCardsData = [
  {
    icon: "/assets/images/industry/law.png",
    title: "Law Firms",
    description: "Our link building service for law firms increases visibility in competitive legal markets. We secure backlinks from trusted legal directories and publications that help attorneys rank higher and attract qualified clients.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  },
  {
    icon: "/assets/images/industry/ecommerce.png",
    title: "E-commerce",
    description: "Our link building service for ecommerce improves product and category page rankings. We earn placements on retail blogs, review platforms, and authority publishers that drive more traffic and sales.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  },
  {
    icon: "/assets/images/industry/healthcare.png",
    title: "Healthcare",
    description: "Our link building service for healthcare connects providers with reputable medical and wellness websites. Each backlink builds trust, supports patient outreach, and strengthens visibility for health-related keywords.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  },
  {
    icon: "/assets/images/industry/fintech.png",
    title: "Fintech",
    description: "Our link building service for fintech builds credibility with high-quality links from financial blogs, news outlets, and compliance-focused publishers. This approach improves authority and helps reach valuable investors and users.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  },
  {
    icon: "/assets/images/industry/automotive.png",
    title: "Automotive",
    description: "Our link building service for the automotive industry enhances online visibility for dealerships, repair shops, and auto tech companies. We earn backlinks from review sites, associations, and local publishers that boost search rankings and traffic.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  },
  {
    icon: "/assets/images/industry/travel.png",
    title: "Travel",
    description: "Our link building service for travel increases exposure for agencies, tour operators, and booking platforms. We secure backlinks from travel blogs, destination sites, and global content publishers that attract engaged travelers.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Logo Design",
    width: 71,
    height: 71,
  }
];

export const linkBuildingServicesWorkflowData = {
  title: "Our Link Building Process",
  description: "An effective link building process goes beyond backlinks. It drives measurable improvements in rankings, traffic, and authority through strategy, execution, and evaluation.",
  steps: [
    {
      number: "01",
      title: "Research & Strategy",
      description: "We begin with a backlink profile audit, reviewing your site's existing links and analyzing competitors. This allows us to identify opportunities for growth and shape a strategy focused on authority and relevance.",
      image: "/assets/images/work/step1.png",
    },
    {
      number: "02",
      title: "Outreach & Relationship Building",
      description: "Our team engages in targeted content outreach and guest posting, building genuine relationships with authority sites. Each partnership is selected carefully to provide backlinks that align with your industry and SEO goals.",
      image: "/assets/images/work/step2.png",
    },
    {
      number: "03",
      title: "Content Creation & Placement",
      description: "We create optimized content with natural anchor text, ensuring backlinks are embedded within articles that match topic relevance. This strengthens trust signals while supporting both rankings and qualified traffic.",
      image: "/assets/images/work/step3.png",
    },
    {
      number: "04",
      title: "Monitoring & Reporting",
      description: "Every referring domain is tracked to assess performance. From domain authority to organic rankings, we provide transparent reporting so you can measure exactly how backlinks are impacting growth.",
      image: "/assets/images/work/step4.png",
    }
  ]
};

export const linkBuildingServicesWhyChooseUsSectionData = {
  title: "Why Our Link Building Agency Delivers Long-Term SEO Value",
  description: "The right link building partner makes a lasting impact on SEO. Our safe, transparent, and results-driven approach ensures every backlink strengthens rankings, traffic, and growth.",
  showDescription: true
};

export const linkBuildingServicesWhyChooseUsData = [
  {
    icon: "/assets/images/icons/icon_Services.svg",
    title: "Safe White Hat Link Building",
    description: "We follow Google's Webmaster Guidelines and use only white hat link building practices. By avoiding risky tactics, we deliver sustainable results that protect your brand reputation.",
    features: [
      "Google Webmaster Guidelines compliance",
      "White hat practices only",
      "Sustainable results",
      "Brand reputation protection"
    ]
  },
  {
    icon: "/assets/images/icons/icon_technology.svg",
    title: "Authority-Driven Results",
    description: "Our strategies focus on strengthening domain authority (DA), building credibility with search engines, and improving overall visibility.",
    features: [
      "Domain authority strengthening",
      "Search engine credibility",
      "Overall visibility improvement",
      "Authority-focused strategies"
    ]
  },
  {
    icon: "/assets/images/icons/icon_Solutions.svg",
    title: "Transparent Reporting",
    description: "We provide detailed link profile audits, giving you clear insights into backlink quality and measurable SEO impact.",
    features: [
      "Detailed link profile audits",
      "Clear quality insights",
      "Measurable SEO impact",
      "Transparent reporting"
    ]
  },
  {
    icon: "/assets/images/icons/icon_Industries.svg",
    title: "Long-Term SEO Value",
    description: "Our backlinks are built on trusted sources and designed to last, supporting organic rankings and protecting your SEO investment against algorithm updates.",
    features: [
      "Trusted source backlinks",
      "Long-lasting results",
      "Algorithm update protection",
      "SEO investment security"
    ]
  },
  {
    icon: "/assets/images/icons/icon_Services.svg",
    title: "Industry Expertise",
    description: "With years of proven experience in SEO strategy and digital PR, our team applies industry-recognized best practices to deliver link building solutions that meet both search engine requirements and business growth objectives.",
    features: [
      "Proven SEO experience",
      "Digital PR expertise",
      "Industry best practices",
      "Business growth focus"
    ]
  }
];

export const linkBuildingServicesFinalCTAData = {
  heading: "Start Your Link Building Campaign Today",
  description: ["Don't let competitors outrank you with stronger backlink profiles. Partner with an experienced SEO link building company backed by trusted link building consultants who follow white-hat practices and deliver measurable results. It's time to start your link building project and secure the rankings your business deserves."],
  cta: {
    text: "Boost Rankings Now",
    href: "#contact",
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Custom Logo Design Services",
    width: 500,
    height: 400,
  },
};

export const linkBuildingServicesFAQsData = [
  {
    question: "Why should I choose Website Digitals for link building services?",
    answer: "Website Digitals delivers white-hat link building strategies tailored to your goals. We secure high-authority backlinks, strengthen site authority, and drive long-term SEO growth with transparent reporting. Get started with a strategy designed for your business today."
  },
  {
    question: "Does Website Digitals offer affordable link building packages?",
    answer: "Yes. We provide affordable link building packages for small businesses, enterprises, and agencies. Each package balances cost-effectiveness with measurable SEO results. Request one that fits your budget and growth goals."
  },
  {
    question: "How does Website Digitals ensure safe link building?",
    answer: "Our strategies follow Google's Webmaster Guidelines and focus only on vetted, relevant placements. This guarantees sustainable, penalty-free growth for your backlink profile. All campaigns are built for compliance and long-term results."
  },
  {
    question: "What are link building services?",
    answer: "Link building services are professional strategies to earn high-quality backlinks from trusted websites. These links act as signals of credibility, helping search engines rank your site higher and improve visibility. It's an essential part of any long-term SEO plan."
  },
  {
    question: "How do link building services improve SEO?",
    answer: "Backlinks remain a key Google ranking factor. By gaining links from authority sites, your site authority improves, helping your pages rank for competitive keywords and attract qualified traffic."
  },
  {
    question: "Can I buy link building services online?",
    answer: "Yes, but it's important to choose ethical providers. Ordering from a reputable SEO link building company like Website Digitals ensures the links you buy are safe, relevant, and built to support lasting rankings."
  },
  {
    question: "Why should I hire a link building expert?",
    answer: "A link building expert brings experience in outreach, anchor text strategy, and authority site partnerships. With the right expertise, you gain faster, safer results compared to DIY approaches. Our team of consultants is ready to guide your campaign."
  },
  {
    question: "How can I order backlinks for SEO?",
    answer: "To order backlinks for SEO, the process typically begins with a backlink audit and a tailored plan. From there, links are built through guest posting, outreach, and niche placements. Contact Website Digitals to order a package built for your goals."
  },
  {
    question: "Who is the best link building services provider?",
    answer: "The best link building services provider is one that focuses on safe, ethical practices while delivering measurable results. Hundreds of clients trust Website Digitals for securing quality backlinks that boost visibility, traffic, and authority without risking penalties."
  },
  {
    question: "Where can I find local white hat link building services?",
    answer: "Local white hat link building services are essential for businesses targeting specific regions. Website Digitals specializes in securing placements on trusted local websites and directories, helping improve visibility in community searches while maintaining 100% compliance with search engine standards."
  },
  {
    question: "Does Website Digitals offer affordable monthly link building services?",
    answer: "Yes, we offer affordable monthly link building services designed for ongoing growth. These subscription-based plans provide consistent backlinks, helping businesses maintain steady rankings, traffic, and conversions while keeping SEO costs predictable."
  }
];

export const linkBuildingServicesMetadata = {
  title: "Hire Trusted Link Building Services for Rankings & Authority",
  description: "Website Digitals offers affordable link building services. Get high-authority backlinks that grow domain authority, traffic, and sales. Get a Quote!",
  keywords: "link building services, hire link building services, affordable link building services, white hat link building, SEO link building, backlink services, link building packages, link building agency, link building consultant, buy backlinks, order backlinks, link building for small business, enterprise link building, local link building, monthly link building services, link building for law firms, link building for ecommerce, link building for healthcare, link building for fintech, link building for automotive, link building for travel, blogger outreach services, guest post link building, niche link building, regional link building, SaaS link building, ecommerce link building, link building process, link building strategy, high authority backlinks, domain authority growth, link building best practices, Google compliant link building, penalty-free link building, sustainable link building, conversion-focused backlinks, link building ROI, link building results, link building reporting, link building audit, backlink profile analysis, competitor link analysis, link building outreach, content outreach, relationship building, anchor text strategy, natural link building, ethical link building, link building guidelines, link building compliance, link building safety, link building transparency, link building expertise, link building experience, professional link building, quality backlinks, trusted backlinks, relevant backlinks, contextual backlinks, authority backlinks, high DA backlinks, link building for rankings, link building for traffic, link building for leads, link building for conversions, link building for visibility, link building for credibility, link building for trust, link building for authority, link building for growth, link building for success"
};
