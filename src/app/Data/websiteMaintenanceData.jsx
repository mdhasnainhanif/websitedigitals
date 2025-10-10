import { BagIcon } from "@/icons";

// Metadata for Website Maintenance Service
export const websiteMaintenanceMetadata = {
  title: "Hire Expert Website Maintenance Services for Business Growth",
  description:
    "Website Digitals is the best website maintenance company that ensures security, updates, and support to keep your business growing.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-development/website-maintenance-services/",
  openGraph: {
    title: "Hire Expert Website Maintenance Services for Business Growth",
    description:
      "Website Digitals is the best website maintenance company that ensures security, updates, and support to keep your business growing.",
    url: "https://www.websitedigitals.com/web-development/website-maintenance-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/website-maintenance-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Maintenance Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Expert Website Maintenance Services for Business Growth",
    description:
      "Website Digitals is the best website maintenance company that ensures security, updates, and support to keep your business growing.",
    images: [
      "https://websitedigitals.com/assets/images/website-maintenance-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-development/website-maintenance-services/",
  },
};

// Banner Data (Section 1)
export const websiteMaintenanceBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Website Maintenance Services",
      href: "/services/website-maintenance-services",
    },
  },
  heading: "Protect, Monitor, and Grow with [[Website Maintenance Services]]",
  description: [
    "Many websites face hidden risks that can slow growth and expose businesses to downtime.",
    "",
    "At Website Digitals, our website maintenance services provide continuous updates, proactive protection, and dependable support to keep your site performing without interruptions.",
    "",
    "Whether you need professional website maintenance, ongoing website support, or managed website services, our team ensures your website remains optimized for uptime, performance, security, and regular backups.",
    "",
    "• Prevent errors with regular updates",
    "• Safeguard data through proactive monitoring",
    "• Get tailored ongoing support",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Start Maintenance Today",
    heading: "Ready to Protect Your Website?",
    helpOptions: [
      { value: "monthly-maintenance", label: "Monthly Maintenance" },
      { value: "security-updates", label: "Security Updates" },
      { value: "performance-monitoring", label: "Performance Monitoring" },
      { value: "backup-services", label: "Backup Services" },
      { value: "plugin-updates", label: "Plugin Updates" },
      { value: "emergency-support", label: "Emergency Support" },
    ],
    initialValues: {
      help: "monthly-maintenance",
    },
  },
};

// Stats Counter Data (Section 2)
export const websiteMaintenanceStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Websites Secured",
  },
  {
    id: 2,
    value: 99.9,
    suffix: "%",
    label: "Uptime Delivered",
  },
  {
    id: 3,
    value: 7000,
    suffix: "+",
    label: "Issues Fixed",
  },
  {
    id: 4,
    value: 10,
    suffix: "+",
    label: "Years of Expertise",
  },
];

// Impact Section Data (Section 3) - for DevelopmentCards
export const websiteMaintenanceImpactSectionData = {
  heading: "Why Your Business Needs Website Maintenance Services",
  description: "",
  showDescription: false,
};

export const websiteMaintenanceImpactCardsData = [
  {
    id: 1,
    title: "Security and Trust",
    description:
      "Ongoing cybersecurity updates, timely vulnerability patching, and effective malware removal protect websites against threats. A valid SSL certificate combined with continuous security monitoring safeguards data and builds user confidence, supported by standards such as OWASP and ISO 27001.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Cost Efficiency",
    description:
      "Investing in affordable website maintenance prevents costly emergencies. Routine plugin updates, scheduled backups, and timely bug fixes keep expenses predictable, validated by guidance from Google Search Central and case studies on downtime cost.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Brand Image and Customer Trust",
    description:
      "Maintaining strong site performance and fast load speed ensures a smooth user experience. Consistent mobile responsiveness and ongoing technical SEO further enhance visibility and trust, validated by W3C web standards and Google PageSpeed Insights benchmarks.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Business Continuity",
    description:
      "Consistent website uptime, proactive server monitoring, and reliable downtime prevention protect against service interruptions. With ongoing website support, businesses maintain availability and safeguard revenue, reinforced by authoritative infrastructure guidelines and recognized cybersecurity frameworks.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const websiteMaintenanceServicesSectionData = {
  heading: "Our End-to-End Website Maintenance Services for Your Business",
  description: "",
  showDescription: false,
};

export const websiteMaintenanceServicesData = [
  {
    id: 1,
    title: "Website Security & Monitoring",
    description:
      "We prioritize safety with continuous malware scans, regular patch management, and proactive firewall protection. Through real-time uptime monitoring, potential risks are addressed early, keeping your website safe and accessible. Supported by ISO 27001 standards, our processes are built on trust and security.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Regular Updates & Backups",
    description:
      "A reliable website depends on consistent updates and recovery planning. We manage routine CMS updates for platforms like WordPress, Joomla, and Drupal, along with essential plugin updates. Automated data backup and fast recovery solutions protect your content against unexpected issues, following Google Search Central guidance on maintaining site health.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Performance Optimization",
    description:
      "A fast site improves both user experience and search ranking. We enhance page speed with advanced caching, resolve technical issues through error resolution, and strengthen stability with load balancing. Every improvement is validated against Google PageSpeed Insights benchmarks.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Content & Design Support",
    description:
      "Accurate, engaging content and consistent design build trust with users. We deliver timely content updates, repair broken links, and apply focused design tweaks guided by usability standards, ensuring your site always reflects your business correctly.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Technical SEO Maintenance",
    description:
      "Behind the scenes, our team makes sure search engines can effectively crawl and index your site. We manage crawl error fixes, implement schema markup, and improve indexing for stronger visibility. By adhering to W3C web standards, we keep your website technically compliant and search-ready.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const websiteMaintenanceIndustriesSectionData = {
  heading: "Industries We Support",
  description:
    "We provide website maintenance that ensures security, speed, and reliability, helping businesses in every sector grow.",
  cta: {
    text: "Get My Industry Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const websiteMaintenanceIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our website maintenance services for ecommerce ensure smooth inventory updates, secure transactions, and lightning-fast checkout performance to reduce cart abandonment and boost conversions.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Ecommerce Website Maintenance",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "We provide website maintenance services for healthcare with HIPAA-compliant security, reliable patient portal access, and optimized scheduling tools, keeping sensitive data safe and sites available 24/7.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Website Maintenance",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Our website maintenance service for real estate supports seamless IDX integration, up-to-date property listings, and optimized lead capture forms to improve buyer engagement and agent productivity.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Website Maintenance",
    width: 71,
    height: 71,
  },
  {
    title: "Manufacturing",
    description:
      "Website maintenance services for manufacturing keep distributor portals, product catalogs, and ERP-integrated systems running without downtime, protecting sensitive data and enabling smooth operations.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Manufacturing Website Maintenance",
    width: 71,
    height: 71,
  },
  {
    title: "Construction",
    description:
      "We deliver website maintenance services for construction firms to keep project portfolios updated, support bid request forms, and maintain reliable, mobile-friendly sites for on-the-go contractors.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Construction Website Maintenance",
    width: 71,
    height: 71,
  },
  {
    title: "Automotive",
    description:
      "Our website maintenance services for automotive businesses ensure dealership inventory sync, secure service booking forms, and fast, reliable platforms that convert visitors into buyers.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Automotive Website Maintenance",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 8) - for ScrollSection
export const websiteMaintenanceScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Reasons to Choose Our Website Maintenance Company",
  description: [""],
  showDescription: false,
  items: [
    {
      id: "maintenance-firstScroller",
      step: 1,
      title: "Proactive Website Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We protect your site with timely vulnerability patching, managed SSL certificates, and comprehensive malware defense. This proactive approach minimizes risks and strengthens trust in your website's stability, supported by security frameworks such as ISO 27001.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Proactive Website Security",
        width: 669,
        height: 376,
      },
    },
    {
      id: "maintenance-secondScroller",
      step: 2,
      title: "Tailored Maintenance Plans",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide flexible solutions that match specific business needs. From affordable website maintenance packages for small businesses to enterprise website support solutions for larger organizations, each plan is structured to deliver consistent care at the right scale.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Tailored Maintenance Plans",
        width: 669,
        height: 376,
      },
    },
    {
      id: "maintenance-thirdScroller",
      step: 3,
      title: "Transparent Reporting & Analytics",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We deliver clarity with detailed uptime reports, regular performance tracking, and integrated Google Analytics insights. These practices ensure you have measurable data, validated by recognized reporting standards, to stay fully informed.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Transparent Reporting & Analytics",
        width: 669,
        height: 376,
      },
    },
    {
      id: "maintenance-forthScroller",
      step: 4,
      title: "Expert Technical Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide fast troubleshooting, accurate bug fixes, and dependable web support to keep your site running without interruptions. Every issue is addressed with a focus on minimizing downtime and maintaining efficiency.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Expert Technical Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "maintenance-fifthScroller",
      step: 5,
      title: "SEO-Driven Maintenance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We improve visibility through technical SEO updates, ongoing site optimization, and consistent search performance improvement. Guided by industry benchmarks, we ensure your website remains competitive and search-ready.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "SEO-Driven Maintenance",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

// Workflow Data (Section 9) - for StepSection
export const websiteMaintenanceWorkflowData = {
  title: "Our Process for Reliable Website Maintenance",
  description: "",
  showDescription: false,
  steps: [
    {
      id: 1,
      number: "01",
      title: "Assessment & Planning",
      description:
        "We begin with a complete site audit to evaluate current performance, followed by a detailed risk analysis to uncover vulnerabilities. Establishing a clear baseline performance allows us to develop a structured plan that meets both immediate needs and long-term goals.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Implementation of Security & Updates",
      description:
        "Once the plan is set, we apply essential patching, manage timely plugin updates, and handle SSL renewal with precision. These actions reinforce your website's defenses and keep it compliant with industry standards such as ISO 27001.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Continuous Monitoring",
      description:
        "Reliability is maintained through round-the-clock server monitoring, proactive uptime checks, and ongoing performance optimization. By addressing issues early, your website continues to operate smoothly for both users and search engines.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Reporting & Long-Term Improvements",
      description:
        "Progress is made transparent with scheduled analytics review and alignment with SEO best practices from trusted sources like Google Search Central. Each report highlights measurable outcomes and ensures long-term scalability, preparing your site for sustained growth.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Technologies Section Data (Section 10) - for PlatformsSpecialize
export const websiteMaintenanceTechnologiesSectionData = {
  heading: "Technologies Behind Our Maintenance",
  description:
    "Whether it's a CMS, custom app, or ecommerce store, we work with leading platforms to deliver secure, scalable, and high-performing websites tailored to each technology.",
  showDescription: true,
  cta: {
    text: "Start My Maintenance Plan",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

export const websiteMaintenanceTechnologiesData = [
  {
    id: 1,
    title: "Joomla",
    description:
      "Our Joomla website maintenance services cover core updates, extension management, and template optimization, keeping your site secure, stable, and fully compatible with the latest Joomla ecosystem.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Laravel",
    description:
      "We provide Laravel website maintenance services, including version upgrades, API integration support, and artisan command management to ensure smooth performance, security, and long-term scalability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Wix",
    description:
      "Our Wix website maintenance services include regular content refreshes, app market integrations, and mobile responsiveness checks, ensuring your site stays visually consistent and optimized for users.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Squarespace",
    description:
      "We deliver Squarespace website maintenance services focusing on style editor customization, SEO alignment, and feature updates like scheduling tools to keep your site polished and functional.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Shopify Plus",
    description:
      "Our Shopify Plus website maintenance services include checkout customization, bulk product updates, and integration with third-party apps or ERP/CRM systems, driving seamless ecommerce operations.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "WooCommerce",
    description:
      "We offer WooCommerce website maintenance services covering plugin updates, payment gateway checks, and cart recovery setup, ensuring a smooth shopping experience and secure transactions.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Final CTA Section Data (Section 12)
export const websiteMaintenanceFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Website Maintenance Services",
      href: "/services/website-maintenance-services",
    },
  },
  heading: "Keep Your Website Secure, Fast & Reliable",
  description: [
    "Don't let downtime, slow performance, and hidden threats put your business at risk. Backed by trusted practices and standards, our website support services and dedicated ongoing website care give your site the protection and reliability it needs to perform every day.",
  ],
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Website Maintenance Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Protect Your Website Now",
    href: "#",
    className: "offer-btn primary",
  },
};

// FAQs Data (Section 13)
export const websiteMaintenanceFAQsData = [
  {
    question:
      "Why should I choose Website Digitals for website maintenance services?",
    answer:
      "We keep websites secure, fast, and reliable with proactive monitoring, updates, and technical SEO support for uninterrupted performance.",
  },
  {
    question: "Does Website Digitals offer monthly website support packages?",
    answer:
      "Yes. Our monthly website support packages include updates, monitoring, security, and performance tracking tailored to different business needs.",
  },
  {
    question: "What makes Website Digitals different from other companies?",
    answer:
      "We combine security, performance optimization, and SEO-driven maintenance into one service focused on stability and measurable growth.",
  },
  {
    question: "What is included in website maintenance services?",
    answer:
      "Services include security monitoring, vulnerability patching, malware defense, plugin updates, backups, performance optimization, and SEO upkeep.",
  },
  {
    question: "Why is website maintenance important for SEO?",
    answer:
      "It ensures faster load times, fewer errors, mobile responsiveness, and regular technical SEO updates, all essential for search visibility.",
  },
  {
    question: "How often should a website be maintained?",
    answer:
      "Most sites need monthly updates and monitoring. High-traffic or eCommerce sites may require weekly or daily maintenance.",
  },
  {
    question: "What are the best practices for website upkeep?",
    answer:
      "Proactive patching, SSL renewal, monitoring, backups, and ongoing SEO maintenance aligned with Google Search Central and W3C guidelines.",
  },
  {
    question: "How much time does website maintenance take?",
    answer:
      "Routine tasks take a few hours monthly. Complex fixes or SEO improvements may require more time.",
  },
  {
    question: "Why should I hire a website maintenance company in the US?",
    answer:
      "Experts provide proactive care in security, monitoring, and SEO, preventing downtime, data loss, and costly issues.",
  },
  {
    question: "What are monthly website support packages?",
    answer:
      "They are subscription-based plans covering updates, monitoring, backups, and support for consistent reliability at predictable costs.",
  },
  {
    question:
      "How can I find the best website maintenance services near me now?",
    answer:
      "Choose providers with proven expertise in security, SEO, and performance, supported by transparent reporting and recognized standards.",
  },
  {
    question: "Can I buy a WordPress maintenance plan?",
    answer:
      "Yes. WordPress plans include plugin updates, theme adjustments, backups, malware scans, and performance optimization.",
  },
  {
    question: "How do I compare website maintenance costs?",
    answer:
      "Compare based on services included, such as security, updates, SEO, and reporting, not just price. Comprehensive care saves more in the long term.",
  },
  {
    question:
      "What are the best website support services for small businesses?",
    answer:
      "Affordable plans with updates, backups, and troubleshooting that scale with growth are ideal for small businesses.",
  },
  {
    question: "What are managed website maintenance services?",
    answer:
      "Managed website maintenance services provide fully outsourced care, including monitoring, patching, backups, and performance tuning. This ensures your website runs smoothly while you focus on business growth, with expert support just a click away.",
  },
  {
    question: "Why choose website maintenance outsourcing services?",
    answer:
      "Website maintenance outsourcing services give you access to skilled professionals who handle updates, security, and troubleshooting, saving time and reducing risk. This approach keeps your site optimized without adding in-house workload.",
  },
  {
    question:
      "How do I select the best website maintenance and support services?",
    answer:
      "The best website maintenance and support services combine proven security practices, fast issue resolution, and transparent reporting. Look for providers with industry experience and measurable results to keep your website reliable and competitive.",
  },
];

// Legacy exports for backward compatibility
export const websiteMaintenanceBannerData2 = websiteMaintenanceFinalCTAData;
