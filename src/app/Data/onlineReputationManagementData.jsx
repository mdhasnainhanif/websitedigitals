import { BagIcon } from "@/icons";

// Metadata for Online Reputation Management Service
export const onlineReputationManagementMetadata = {
  title: "#1 Online Reputation Management Services | Website Digitals",
  description:
    "Protect your brand image with proven & affordable ORM services. Remove harmful content, monitor reviews, and restore search visibility today.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/digital-marketing/online-reputation-management-services/",
  openGraph: {
    title: "#1 Online Reputation Management Services | Website Digitals",
    description:
      "Protect your brand image with proven & affordable ORM services. Remove harmful content, monitor reviews, and restore search visibility today.",
    url: "https://www.websitedigitals.com/digital-marketing/online-reputation-management-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/online-reputation-management-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Online Reputation Management Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Online Reputation Management Services | Website Digitals",
    description:
      "Protect your brand image with proven & affordable ORM services. Remove harmful content, monitor reviews, and restore search visibility today.",
    images: [
      "https://websitedigitals.com/assets/images/online-reputation-management-twitter-image.jpg",
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
      "https://www.websitedigitals.com/digital-marketing/online-reputation-management-services/",
  },
};

export const onlineReputationManagementBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Online Reputation Management Services",
      href: "/digital-marketing/online-reputation-management-services",
    },
  },
  heading: "Win More Clients with [[Online Reputation Management]] Services",
  description: [
    "Negative search results and bad reviews damage credibility and cost you valuable leads.\n\nWebsite Digitals delivers digital reputation management solutions that restore confidence and strengthen your brand image across every channel.\n\nOur approach ensures the online story about your business highlights the quality of your services and builds customer trust.\n\nOur core benefits include:\n• Brand reputation protection that secures your image\n• Reputation repair services fixing negatives fast\n• Reputation monitoring services keep you alert",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Protect My Reputation",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "content-removal", label: "Content Removal / Takedown" },
      { value: "crisis-management", label: "Crisis Reputation Management" },
      { value: "personal-branding", label: "Personal Branding ORM" },
      { value: "risk-protection", label: "Online Risk & Threat Protection" },
      { value: "competitor-monitoring", label: "Competitor Reputation Monitoring" },
      { value: "ongoing-maintenance", label: "Ongoing ORM Maintenance & Protection" },
    ],
    initialValues: {
      help: "content-removal",
    },
  },
};

export const onlineReputationManagementServicesData = [
  {
    id: 1,
    title: "Content Removal / Takedown",
    description:
      "We specialize in reputation cleanup to remove negative content from search results whenever possible. When full removal is not available, our reputation restoration methods push harmful results down and highlight accurate, trustworthy content that reflects your brand.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Crisis Reputation Management",
    description:
      "When damaging publicity appears, speed matters. Our crisis reputation management strategies focus on message control, rapid content publishing, and digital image security to stabilize your public presence and restore audience confidence.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Personal Branding ORM",
    description:
      "Executives and professionals benefit from customized reputation restoration and profile optimization that showcase their expertise and credibility. This includes efforts to remove harmful or misleading content and create positive digital assets that strengthen personal authority and influence.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Online Risk & Threat Protection",
    description:
      "Proactive defense keeps your brand safe. Through brand monitoring and early detection, we identify threats before they spread. Our team coordinates legal action and prevention strategies to stop potential damage and maintain a reliable presence.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Competitor Reputation Monitoring",
    description:
      "We track competitor activity to uncover reputation risks or malicious tactics that may affect your brand. Using review monitoring, sentiment analysis, and targeted review response strategies, we help you respond strategically and use insights to strengthen your market position.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Ongoing ORM Maintenance & Protection",
    description:
      "Reputation requires continuous attention. Our ongoing program combines review suppression services, active monitoring, and timely updates to keep harmful content suppressed and your brand narrative positive. Regular reporting keeps you informed and ready to act when new issues arise.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const onlineReputationManagementScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our ORM Company the Right Choice",
  description: [
    "Choosing the right partner is crucial when your brand’s reputation is at stake. Our approach combines data, transparency, and proven strategies to deliver measurable results and long-term protection.",
  ],
  showDescription: true,
  items: [
    {
      id: "orm-firstScroller",
      step: 1,
      title: "Data-Driven Reputation Audits",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every project begins with a detailed reputation audit to evaluate your online presence. Using advanced sentiment analysis and a clear reputation score, we uncover risks and opportunities, then create a targeted roadmap for improvement.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data-Driven Reputation Audits",
        width: 669,
        height: 376,
      },
    },
    {
      id: "orm-secondScroller",
      step: 2,
      title: "Transparent & Ethical Strategies",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We strengthen brand trust with strategies that are transparent and compliant with Google guidelines. Our focus on ethical ORM ensures sustainable improvements that align with industry best practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Transparent & Ethical Strategies",
        width: 669,
        height: 376,
      },
    },
    {
      id: "orm-thirdScroller",
      step: 3,
      title: "Proactive Crisis Management",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team acts quickly with tailored crisis communication plans that stop issues from escalating. Through effective damage control and clear messaging, we protect relationships and maintain stakeholder trust during critical moments.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Proactive Crisis Management",
        width: 669,
        height: 376,
      },
    },
    {
      id: "orm-forthScroller",
      step: 4,
      title: "Personalized Solutions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "No two reputations are alike. We offer personal reputation management and a custom ORM plan designed around your goals, audience, and industry, ensuring strategies are precise and relevant.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Personalized Solutions",
        width: 669,
        height: 376,
      },
    },
    {
      id: "orm-fifthScroller",
      step: 5,
      title: "Expert-Led Methodology",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our work is guided by recognized best practices and supported by expert analysis. Each campaign is continually refined through performance reviews and data insights, delivering consistent, measurable outcomes you can rely on.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Expert-Led Methodology",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const onlineReputationManagementBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Online Reputation Management",
      href: "/digital-marketing/online-reputation-management-services",
    },
  },
  heading: "Take Control of Your Online Reputation",
  description: [
    "Negative reviews and harmful search results damage trust and cost you leads. Act now to restore credibility and protect your brand image with a tailored reputation strategy that delivers measurable results.",
  ],
  bullets: [],
  cta: {
    text: "Protect Your Business Image Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Online Reputation Management Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const onlineReputationManagementStatsData = [
  {
    id: 1,
    value: 1200,
    suffix: "+",
    label: "Brands Protected",
  },
  {
    id: 2,
    value: 30,
    suffix: "%",
    label: "Average Increase in Leads",
  },
  {
    id: 3,
    value: 24,
    suffix: "/7",
    label: "Monitoring Coverage",
  },
  {
    id: 4,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const onlineReputationManagementImpactCardsData = [
  {
    id: 1,
    title: "Protect Your Brand Image",
    description:
      "Strong brand reputation management ensures your audience sees the best version of your business. Through online reputation defense and regular digital footprint cleanup, harmful content is kept out of view, and your business maintains a professional and reliable image across search results.",
    icon: "protection",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 2,
    title: "Increase Customer Trust & Conversions",
    description:
      "Building consumer trust requires consistent engagement and credibility signals such as verified profiles and review responses. Managing public perception with positive content improves online reviews' impact on buyer decisions and encourages customers to choose your business with confidence.",
    icon: "trust",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Monitor & Respond in Real Time",
    description:
      "Effective reputation management depends on staying aware of conversations about your brand. Using reputation monitoring tools, social listening, and policy-based review management allows you to detect issues early and respond quickly to protect credibility.",
    icon: "monitoring",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Safeguard Long-Term Growth",
    description:
      "A healthy online reputation supports lasting business growth. Positive search presence and strong reviews attract customers and partners while keeping your business competitive and trusted. Maintaining this presence builds growth momentum and consistent confidence from your audience.",
    icon: "growth",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
];

export const onlineReputationManagementImpactSectionData = {
  heading: "Why Your Online Reputation Matters More Than Ever",
  showDescription: true,
  description: "Your online presence shapes how customers and search engines view your business. Negative reviews and outdated or harmful content can hurt authority and lower conversions. A clear reputation strategy keeps you visible for positive reasons and builds trust with your audience. Here’s why it matters:",
};

export const onlineReputationManagementIndustriesData = [
  {
    id: 1,
    title: "Doctors",
    description:
      "Our online reputation management service for doctors manages patient reviews, removes harmful feedback, and highlights expertise to build trust and credibility.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 2,
    title: "Law Firms",
    description:
      "The online reputation management service for law firms protects client confidence, handles negative publicity, and maintains a strong digital presence.",
    icon: "/assets/images/industry/legal.svg",
  },
  {
    id: 3,
    title: "Hotels",
    description:
      "Our online reputation management service for hotels boosts guest satisfaction, manages reviews, and improves visibility on travel platforms.",
    icon: "/assets/images/industry/hospitality.svg",
  },
  {
    id: 4,
    title: "Real Estate Agents",
    description:
      "The online reputation management service for real estate agents manages local reviews, promotes success stories, and enhances listing visibility to attract buyers.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 5,
    title: "Ecommerce",
    description:
      "Our online reputation management service for ecommerce strengthens product credibility, manages reviews, and increases customer trust for better conversions.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 6,
    title: "Contractors",
    description:
      "The online reputation management service for contractors promotes quality work, manages client feedback, and protects local reputation to win more projects.",
    icon: "/assets/images/industry/construction.svg",
  },
];

// Workflow Data (for StepSection component)
export const onlineReputationManagementWorkflowData = {
  title: "Our Process",
  description:
    "Our structured process keeps your campaign clear, measurable, and focused on results at every stage.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Reputation Audit & Analysis",
      description:
        "We begin with a detailed audit to establish your baseline reputation score. Using in-depth brand mentions analysis, we identify what shapes public perception and highlight priority issues that need immediate attention.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Strategic Plan & Content Creation",
      description:
        "We create a tailored digital reputation strategy that defines suppression tactics, removal opportunities, and positive content promotion. This plan sets a clear roadmap to improve search visibility, enhance trust signals, and restore brand credibility.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Implementation & Outreach",
      description:
        "With the plan in place, our team rolls out each tactic systematically, from publishing optimized assets to coordinating outreach campaigns. These actions amplify positive stories and reduce the visibility of harmful content, strengthening your overall brand narrative.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Ongoing Monitoring & Reporting",
      description:
        "We provide continuous oversight through social listening, review tracking, and active brand monitoring. Regular reporting keeps you informed with clear performance metrics and early alerts for emerging risks.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Refinement & Long-Term Protection",
      description:
        "Insights from monitoring guide regular strategy refinements and new initiatives. This ongoing process keeps harmful content suppressed, maintains your competitive position, and supports lasting reputation health.",
      image: "/assets/images/work/step5.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const onlineReputationManagementWhyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Reputation Audits",
    description:
      "Every project begins with a detailed reputation audit to evaluate your online presence. Using advanced sentiment analysis and a clear reputation score, we uncover risks and opportunities, then create a targeted roadmap for improvement.",
    icon: "data",
  },
  {
    id: 2,
    title: "Transparent & Ethical Strategies",
    description:
      "We strengthen brand trust with strategies that are transparent and compliant with Google guidelines. Our focus on ethical ORM ensures sustainable improvements that align with industry best practices.",
    icon: "ethics",
  },
  {
    id: 3,
    title: "Proactive Crisis Management",
    description:
      "Our team acts quickly with tailored crisis communication plans that stop issues from escalating. Through effective damage control and clear messaging, we protect relationships and maintain stakeholder trust during critical moments.",
    icon: "crisis",
  },
  {
    id: 4,
    title: "Personalized Solutions",
    description:
      "No two reputations are alike. We offer personal reputation management and a custom ORM plan designed around your goals, audience, and industry, ensuring strategies are precise and relevant.",
    icon: "personalized",
  },
  {
    id: 5,
    title: "Expert-Led Methodology",
    description:
      "Our work is guided by recognized best practices and supported by expert analysis. Each campaign is continually refined through performance reviews and data insights, delivering consistent, measurable outcomes you can rely on.",
    icon: "expertise",
  },
];

// FAQ Data
export const onlineReputationManagementFAQsData = [
  {
    id: 1,
    question: "Can I get a free reputation audit?",
    answer:
      "Yes. Website Digitals offers a free reputation audit to assess your current online presence and recommend a customized action plan.",
  },
  {
    id: 2,
    question: "Can I request an ORM service proposal?",
    answer:
      "Yes. Website Digitals can prepare a proposal with a clear step-by-step strategy, deliverables, and expected results to help you make an informed decision.",
  },
  {
    id: 3,
    question: "What are online reputation management services?",
    answer:
      "Online reputation management services (ORM) improve how your business or personal brand appears online. They focus on suppressing negative search results, boosting positive content, and managing reviews to build a trustworthy presence.",
  },
  {
    id: 4,
    question: "What are the benefits of reputation management services?",
    answer:
      "A strong online reputation builds trust, increases conversions, and attracts leads. Research from Harvard Business Review shows that improving star ratings by even one point can significantly increase revenue, reinforcing the value of proactive reputation management.",
  },
  {
    id: 5,
    question: "How do online reputation management services work?",
    answer:
      "ORM begins with a reputation audit to review search results, reviews, and brand mentions. Based on the findings, a tailored plan is created to repair harmful content, publish positive assets, and monitor your presence over time.",
  },
  {
    id: 6,
    question: "How do I monitor my online reputation?",
    answer:
      "You can use Google Alerts, track reviews manually, or rely on monitoring tools that provide live updates. Professional ORM services include detailed reporting and alerts for faster detection and resolution.",
  },
  {
    id: 7,
    question: "Can I subscribe to a reputation monitoring tool?",
    answer:
      "Yes. Subscription-based monitoring tools notify you about reviews, brand mentions, and search result changes in real time, helping you stay ahead of risks.",
  },
  {
    id: 8,
    question: "What is the difference between ORM and a PR agency?",
    answer:
      "ORM manages search results, reviews, and brand mentions using monitoring, suppression, and content strategies. PR agencies focus on media relations and publicity campaigns. ORM offers direct control over search visibility, while PR focuses on broader brand storytelling.",
  },
  {
    id: 9,
    question: "How do I choose a reputation management company?",
    answer:
      "Look for a company with proven case studies, transparent reporting, and ethical practices. A free reputation audit can help you understand where your brand stands before committing to a plan.",
  },
  {
    id: 10,
    question: "Do you offer reputation management for small businesses?",
    answer:
      "Yes. We offer flexible ORM packages for small businesses that include review management, content cleanup, and ongoing monitoring to keep your brand secure.",
  },
  {
    id: 11,
    question: "What do reputation management services cost?",
    answer:
      "Pricing varies depending on the number of issues, the complexity of suppression efforts, and the level of ongoing monitoring required. Each campaign is customized to your situation.",
  },
  {
    id: 12,
    question: "Do you offer reputation repair pricing?",
    answer:
      "Yes. Website Digitals provides clear pricing specifically for reputation repair projects focused on removing or suppressing harmful content and restoring a positive online image.",
  },
  {
    id: 13,
    question: "What are custom online reputation management services?",
    answer:
      "Custom online reputation management services are tailored strategies designed to fit your specific industry, goals, and audience. They provide personalized solutions that address unique challenges and ensure your brand builds credibility with measurable results.",
  },
  {
    id: 14,
    question: "What are outsourced online reputation management services?",
    answer:
      "Outsourced online reputation management services give businesses access to expert teams who handle monitoring, review management, and reputation repair. This cost-effective approach ensures consistent protection without adding extra workload to internal staff.",
  },
  {
    id: 15,
    question: "What are online reputation management consulting services?",
    answer:
      "Online reputation management consulting services provide expert analysis, actionable strategies, and ongoing guidance to improve your digital image. Consulting helps businesses identify risks, prioritize solutions, and implement best practices for long-term reputation success.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const onlineReputationManagementServicesSectionData = {
  heading: "What Our Reputation Management Services Include",
  description:
    "Our approach addresses the most critical aspects of online reputation management so you can stay in control, protect your image, and resolve issues before they harm your business.",
  showDescription: true,
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const onlineReputationManagementIndustriesSectionData = {
  heading: "Business Sectors We Serve",
  description:
    "We offer tailored online reputation management strategies that help professionals and businesses improve visibility, build trust, and protect credibility across industries.",
  cta: {
    text: "Secure My Reputation Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const onlineReputationManagementIndustriesCardsData = [
  {
    title: "Doctors",
    description:
      "Our online reputation management service for doctors manages patient reviews, removes harmful feedback, and highlights expertise to build trust and credibility.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Doctors Reputation Management",
    width: 71,
    height: 71,
  },
  {
    title: "Law Firms",
    description:
      "The online reputation management service for law firms protects client confidence, handles negative publicity, and maintains a strong digital presence.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Law Firms Reputation Management",
    width: 71,
    height: 71,
  },
  {
    title: "Hotels",
    description:
      "Our online reputation management service for hotels boosts guest satisfaction, manages reviews, and improves visibility on travel platforms.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Hotels Reputation Management",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate Agents",
    description:
      "The online reputation management service for real estate agents manages local reviews, promotes success stories, and enhances listing visibility to attract buyers.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Real Estate Agents Reputation Management",
    width: 71,
    height: 71,
  },
  {
    title: "Ecommerce",
    description:
      "Our online reputation management service for ecommerce strengthens product credibility, manages reviews, and increases customer trust for better conversions.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Ecommerce Reputation Management",
    width: 71,
    height: 71,
  },
  {
    title: "Contractors",
    description:
      "The online reputation management service for contractors promotes quality work, manages client feedback, and protects local reputation to win more projects.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Contractors Reputation Management",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const onlineReputationManagementWhyChooseUsSectionData = {
  heading: "What Makes Our ORM Company the Right Choice",
  description:
    "Choosing the right partner is crucial when your brand's reputation is at stake. Our approach combines data, transparency, and proven strategies to deliver measurable results and long-term protection.",
};

// Workflow Section Data (Section 8)
export const onlineReputationManagementWorkflowSectionData = {
  heading: "Our Process",
  description:
    "Our structured process keeps your campaign clear, measurable, and focused on results at every stage.",
};

// Final CTA Section Data (Section 11)
export const onlineReputationManagementFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Online Reputation Management Services",
      href: "/digital-marketing/online-reputation-management-services",
    },
  },
  heading: "Take Control of Your Online Reputation",
  description: [
    "Negative reviews and harmful search results damage trust and cost you leads. Act now to restore credibility and protect your brand image with a tailored reputation strategy that delivers measurable results.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Online Reputation Management Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Protect Your Business Image Now",
    href: "#",
    className: "offer-btn primary",
  },
};
