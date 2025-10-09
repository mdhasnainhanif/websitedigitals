import { BagIcon } from "@/icons";

// Metadata for CMS Development Service
export const cmsDevelopmentMetadata = {
  title: "Hire #1 CMS Development Company in USA | Website Digitals",
  description: "Get CMS development services tailored for your business. Build secure, fast, and scalable systems with our expert US-based developers.",
  keywords: "",
  canonical: "https://www.websitedigitals.com/web-development/cms-development-company/",
  openGraph: {
    title: "Hire #1 CMS Development Company in USA | Website Digitals",
    description: "Get CMS development services tailored for your business. Build secure, fast, and scalable systems with our expert US-based developers.",
    url: "https://www.websitedigitals.com/web-development/cms-development-company/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/cms-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CMS Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire #1 CMS Development Company in USA | Website Digitals",
    description: "Get CMS development services tailored for your business. Build secure, fast, and scalable systems with our expert US-based developers.",
    images: ["https://websitedigitals.com/assets/images/cms-development-twitter-image.jpg"],
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
    canonical: "https://www.websitedigitals.com/web-development/cms-development-company/",
  },
};

export const cmsDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "CMS Development Company", href: "/services/cms-development-company" },
  },
  heading: "Build, [[Manage]], and [[Scale]] with a CMS Development Company",
  description: ["Most content management systems fail to deliver because they are hard to customize, slow to adapt, and cause bottlenecks in publishing and updates. Website Digitals solves this with custom CMS solutions, enterprise CMS development, and headless CMS development, all designed for speed, security, and scalability.\n\nOur CMS platforms are intuitive, quick to update, and optimized for every device. Built on trusted systems like the WordPress Foundation, Drupal Association, and Adobe Experience Manager, each project is handled from strategy to launch by our experienced CMS developers.\n\nHere's what sets our CMS development company apart:\n• Built for your workflows and audience\n• Scales without costly rebuilds\n• Experts in top CMS platforms",],
  isCta: true,
  cta: {
    text: "Start Your CMS Project Today",
    href: "/brief"
  },
  image: null,
};

export const cmsDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom CMS Development",
    description: "We design and build CMS platforms from the ground up to match your business processes and long-term goals. Our CMS design and development approach covers planning, architecture, and deployment, with CMS integration services for third-party tools and smooth content migration that keeps your operations uninterrupted.",
    icon: <BagIcon />,
    isActive: true
  },
  {
    id: 2,
    title: "Enterprise CMS Development",
    description: "For high-traffic websites and complex operations, we deliver enterprise CMS development solutions built to handle advanced permissions, large-scale content structures, and demanding performance needs. Our team implements a microservices CMS architecture for flexibility and scalability as your requirements evolve.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 3,
    title: "Custom Plugin Development",
    description: "Extend your CMS capabilities with plugins built specifically for your needs. We specialize in custom plugin development for trusted CMS hosting and platform providers like WP Engine, Pantheon, and Sitecore, ensuring reliable performance and hassle-free integration.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 4,
    title: "UX/UI Design for CMS Platforms",
    description: "We create intuitive, user-friendly CMS interfaces through thoughtful UX/UI design. This ensures administrators can work efficiently while end users enjoy a smooth, consistent digital experience. The result is reduced training time and increased productivity.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 5,
    title: "SEO-Ready CMS Development",
    description: "Our SEO-ready CMS builds are designed to help your site rank well from the start. We integrate speed optimization, clean code structures, and easy-to-use metadata controls, providing tools that make managing titles, descriptions, and on-page SEO simple for your team.",
    icon: <BagIcon />,
    isActive: false
  }
];

export const cmsDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Partner With Us for Your CMS Development Needs",
  description: [
    "When it comes to selecting the best CMS development companies, choosing a partner with a proven track record and the right technical capabilities can make all the difference.",
    "",
    "Our approach combines innovation, compliance, and performance to deliver CMS platforms that not only meet your current needs but also scale with your future growth. Here's what sets us apart:"
  ],
  items: [
    {
      id: "cms-firstScroller",
      step: 1,
      title: "Security-First Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every CMS we develop follows industry-recognized frameworks, including the OWASP guidelines, a globally recognized set of best practices for web application security, to protect against vulnerabilities. From data encryption to role-based access, our process ensures compliance with US security standards while safeguarding sensitive information."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Security-First Approach",
        width: 669,
        height: 376
      }
    },
    {
      id: "cms-secondScroller",
      step: 2,
      title: "API-First CMS Architecture",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "By adopting an API-first CMS approach, we enable smooth integration with third-party tools, custom applications, and future technologies. This architecture ensures your CMS remains flexible, compatible, and scalable as your digital needs expand."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "API-First CMS Architecture",
        width: 669,
        height: 376
      }
    },
    {
      id: "cms-thirdScroller",
      step: 3,
      title: "Optimized for Performance and Scalability",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our builds focus on performance optimization from day one. This includes fast load speeds, efficient database queries for quicker data access, and resource caching to reduce server strain. Combined with infrastructure designed for scalability, your CMS can handle growth without costly rebuilds."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Optimized for Performance and Scalability",
        width: 669,
        height: 376
      }
    },
    {
      id: "cms-forthScroller",
      step: 4,
      title: "Expertise and Certification",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team holds advanced credentials, including TOGAF certification for enterprise architecture, a standard for designing and implementing efficient business systems, and Adobe Certified Expert status, which validates our deep technical knowledge and adherence to industry best practices."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Expertise and Certification",
        width: 669,
        height: 376
      }
    },
    {
      id: "cms-fifthScroller",
      step: 5,
      title: "Smooth Content Migration",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We manage content migration with precision, ensuring data integrity and minimizing downtime. Your existing content is transferred accurately, optimized for the new system, and ready for immediate use without disrupting your workflows."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Smooth Content Migration",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const cmsDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "CMS Development", href: "/services/cms-development-company" },
  },
  heading: "Start Your CMS Project with Our US-Based Experts",
  description: [
    "Hire a CMS development company in the USA that delivers custom and headless CMS solutions built for speed, security, and growth. We create systems with enterprise-level CMS scalability, smooth integrations, and compliance-backed security using trusted platforms like WordPress VIP and Acquia Drupal.\n\nWhether you need clarity on CMS development services pricing in America or a tailored build ready to launch, we make sure your CMS is built right the first time and prepared to support your growth for years."
  ],
  bullets: [],
  cta: {
    text: "Get My Tailored CMS Proposal",
    href: "#",
    className: "offer-btn primary",
    show: true
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "CMS Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const cmsDevelopmentStatsData = [
  {
    id: 1,
    value: 150,
    suffix: "+",
    label: "CMS Projects Delivered"
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate"
  },
  {
    id: 3,
    value: 12,
    suffix: "+",
    label: "Years Expertise"
  },
  {
    id: 4,
    value: 30,
    suffix: "%",
    label: "Faster Page Load Speeds"
  }
];

// Impact Cards Data (for DevelopmentCards component)
export const cmsDevelopmentImpactCardsData = [
  {
    id: 1,
    title: "Scale Without Limits",
    description: "Enterprise-level CMS scalability lets your platform grow with rising traffic, integrations, and content libraries. Recognized solutions in the Gartner Magic Quadrant for Web CMS and Forrester Wave for DXPs support long-term growth.",
    icon: "scale",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Manage Content Anywhere",
    description: "Cloud-hosted CMS solutions let teams publish, edit, and manage content from any location. Multisite management becomes simple, allowing you to control brands and regions from one dashboard.",
    icon: "manage",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Reduce Maintenance Time",
    description: "A robust backend content platform with plugin development and content migration cuts update time from hours to minutes. Your team can stay focused on content that drives results.",
    icon: "maintenance",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 4,
    title: "Improve Search Rankings",
    description: "Built-in SEO optimization tools make it easy to add metadata, boost load speed, and follow ranking best practices without developer support.",
    icon: "seo",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 5,
    title: "Keep Your CMS Secure",
    description: "Following OWASP security guidelines protects against vulnerabilities and ensures compliance with industry standards, keeping your data and users safe.",
    icon: "security",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  }
];

// Impact Section Data (for DevelopmentCards component)
export const cmsDevelopmentImpactSectionData = {
  heading: "What Impact Does CMS Development Create?",
  description: "Choosing the right website content management system helps you publish faster, serve customers better, and scale smoothly. A modern CMS keeps updates quick, secure, and simple for your team. Here's why it matters:"
};

// Industries Data
export const cmsDevelopmentIndustriesData = [
  {
    id: 1,
    title: "Healthcare",
    description: "Our CMS development for healthcare supports HIPAA compliance, secure patient portals, and seamless EHR/EMR integration. This ensures safe data handling while improving patient engagement and operational efficiency.",
    icon: "/assets/images/industry/healthcare.svg"
  },
  {
    id: 2,
    title: "Ecommerce",
    description: "We deliver CMS development for ecommerce businesses that power fast storefronts, smooth checkout flows, and PCI-compliant transactions. Our solutions scale easily with your inventory and seasonal demand.",
    icon: "/assets/images/industry/ecommerce.svg"
  },
  {
    id: 3,
    title: "Finance",
    description: "Our CMS development for finance focuses on security, SOC 2 compliance, and efficient content workflows. We help financial brands build user trust with secure portals and real-time updates.",
    icon: "/assets/images/industry/finance.svg"
  },
  {
    id: 4,
    title: "Local Businesses",
    description: "We offer CMS development for local businesses that highlight services, integrate Google Business profiles, and boost local SEO visibility—helping you attract and convert nearby customers.",
    icon: "/assets/images/industry/local-business.svg"
  },
  {
    id: 5,
    title: "Restaurants",
    description: "Our CMS development for restaurants simplifies menu management, online ordering, and reservation integrations. This allows restaurant owners to update offerings quickly and enhance guest experience.",
    icon: "/assets/images/industry/restaurant.svg"
  },
  {
    id: 6,
    title: "Education",
    description: "We specialize in CMS development for education with features for course catalogs, LMS integrations, and secure student access. This enables seamless digital learning and improved student engagement.",
    icon: "/assets/images/industry/education.svg"
  }
];

// Technologies Data
export const cmsDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "Drupal",
    description: "As a trusted Drupal CMS development company, we build enterprise-grade platforms with custom modules, multilingual support, and seamless third-party integrations. Our Acquia-certified experts ensure long-term scalability and security for complex digital ecosystems.",
    icon: "/assets/images/technologyIcons.png"
  },
  {
    id: 2,
    title: "Joomla",
    description: "Our Joomla CMS development company creates flexible, user-friendly websites with powerful content control and responsive design. We deliver tailored solutions that support multilingual publishing and optimized workflows for diverse industries.",
    icon: "/assets/images/technologyIcons.png"
  },
  {
    id: 3,
    title: "Magento",
    description: "As a leading Magento CMS development company, we design high-performance ecommerce stores with secure checkout, advanced inventory management, and SEO-ready architecture. Our certified Magento developers help boost conversions and scale with demand.",
    icon: "/assets/images/technologyIcons.png"
  },
  {
    id: 4,
    title: "Strapi",
    description: "We provide expert Strapi CMS development services for businesses seeking a headless, API-first solution. Our builds enable rapid content delivery, flexible integrations, and seamless omnichannel publishing to engage users across every device.",
    icon: "/assets/images/technologyIcons.png"
  },
  {
    id: 5,
    title: "Next.js",
    description: "Our Next.js headless CMS development combines static site generation with dynamic content for lightning-fast performance and SEO-friendly experiences. Ideal for businesses needing scalable, high-converting websites with modern front-end architecture.",
    icon: "/assets/images/technologyIcons.png"
  },
  {
    id: 6,
    title: "Laravel",
    description: "As a top Laravel CMS development company, we craft secure, modular platforms with robust API integrations and intuitive admin interfaces. Our Laravel solutions enable rapid deployment and long-term maintainability to support your digital growth.",
    icon: "/assets/images/technologyIcons.png"
  }
];

// Workflow Data (for StepSection component)
export const cmsDevelopmentWorkflowData = {
  title: "Our Workflow for CMS Development",
  description: "Delivering a secure, scalable, and user-friendly CMS requires a clear, proven process. We combine structured planning with technical precision to ensure every build meets your business needs today and adapts for tomorrow. Our process includes:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Planning and Architecture",
      description: "We start by mapping your CMS structure and features, using TOGAF-certified architecture design to align with workflows and long-term goals. This stage also covers CMS integration services and a strategy for smooth content migration.",
      image: "/assets/images/work/step1.png",
      alignment: "right"
    },
    {
      id: 2,
      number: "02",
      title: "Development and Testing",
      description: "Our frontend CMS engineers and backend developers follow the Agile/Scrum methodology for flexibility and transparency. Using OWASP security best practices, we implement plugin development, API integration, and core functions, with rigorous sprint testing for reliability.",
      image: "/assets/images/work/step2.png",
      alignment: "left"
    },
    {
      id: 3,
      number: "03",
      title: "Content Migration and Optimization",
      description: "We transfer content quickly and accurately, optimizing every asset for the new system. The result is a fully manageable platform with no disruption to your operations.",
      image: "/assets/images/work/step3.png",
      alignment: "right"
    },
    {
      id: 4,
      number: "04",
      title: "Launch and Support",
      description: "We ensure a seamless go-live without downtime, followed by ongoing monitoring and updates. Support includes plugin enhancements, scalability improvements, and user training as needed.",
      image: "/assets/images/work/step4.png",
      alignment: "left"
    }
  ]
};

// Why Choose Us Data
export const cmsDevelopmentWhyChooseUsData = [
  {
    id: 1,
    title: "Security-First Approach",
    description: "Every CMS we develop follows industry-recognized frameworks, including the OWASP guidelines, a globally recognized set of best practices for web application security, to protect against vulnerabilities. From data encryption to role-based access, our process ensures compliance with US security standards while safeguarding sensitive information.",
    icon: "security"
  },
  {
    id: 2,
    title: "API-First CMS Architecture",
    description: "By adopting an API-first CMS approach, we enable smooth integration with third-party tools, custom applications, and future technologies. This architecture ensures your CMS remains flexible, compatible, and scalable as your digital needs expand.",
    icon: "api"
  },
  {
    id: 3,
    title: "Optimized for Performance and Scalability",
    description: "Our builds focus on performance optimization from day one. This includes fast load speeds, efficient database queries for quicker data access, and resource caching to reduce server strain. Combined with infrastructure designed for scalability, your CMS can handle growth without costly rebuilds.",
    icon: "performance"
  },
  {
    id: 4,
    title: "Expertise and Certification",
    description: "Our team holds advanced credentials, including TOGAF certification for enterprise architecture, a standard for designing and implementing efficient business systems, and Adobe Certified Expert status, which validates our deep technical knowledge and adherence to industry best practices.",
    icon: "certification"
  },
  {
    id: 5,
    title: "Smooth Content Migration",
    description: "We manage content migration with precision, ensuring data integrity and minimizing downtime. Your existing content is transferred accurately, optimized for the new system, and ready for immediate use without disrupting your workflows.",
    icon: "migration"
  }
];

// FAQ Data
export const cmsDevelopmentFAQsData = [
  {
    id: 1,
    question: "How do I hire Website Digitals for my project?",
    answer: "Hiring Website Digitals is simple. You can reach out through our contact form, request a free consultation, or call our team directly. We'll review your project needs, suggest the best approach, and provide a detailed proposal with timelines and costs."
  },
  {
    id: 2,
    question: "How does Website Digitals deliver fast and robust websites?",
    answer: "We combine optimized coding practices, clean architecture, and speed-focused design to deliver websites that load quickly and perform reliably under heavy traffic. Our process includes server optimization, responsive design, and rigorous testing to ensure a robust user experience on all devices."
  },
  {
    id: 3,
    question: "Can Website Digitals create a website tailored to my business needs?",
    answer: "Yes. We specialize in building fully custom websites that match your brand identity, industry requirements, and growth goals. From UI/UX design to backend functionality, every element is planned and developed to fit your specific objectives."
  },
  {
    id: 4,
    question: "Why should I choose Website Digitals over other development agencies?",
    answer: "Website Digitals offers a blend of technical expertise, transparent communication, and proven results. We focus on long-term scalability, security, and user engagement, ensuring your website continues to perform as your business grows."
  },
  {
    id: 5,
    question: "What is a CMS development company?",
    answer: "A CMS development company in the US specializes in designing, building, and maintaining content management systems for businesses. These companies create platforms that allow you to easily publish, edit, and organize website content without needing extensive coding skills."
  },
  {
    id: 6,
    question: "How does CMS development benefit US businesses?",
    answer: "CMS development benefits US businesses by streamlining content updates, improving site performance, and enabling scalability. It allows companies to manage websites efficiently, integrate marketing tools, and enhance customer experience while meeting US compliance and security standards."
  },
  {
    id: 7,
    question: "What are the types of CMS development platforms?",
    answer: "In the US, businesses can choose from a range of CMS development platforms, including open-source systems like WordPress, Drupal, and Joomla, enterprise options such as Acquia CMS development services or WordPress VIP agency offerings, and fully custom-built CMS solutions tailored to unique needs."
  },
  {
    id: 8,
    question: "Can I go to Acquia CMS development services for enterprise projects?",
    answer: "Yes. Acquia CMS development services are ideal for enterprise-level projects, offering advanced scalability, security, and integration capabilities, particularly for organizations using the Drupal framework."
  },
  {
    id: 9,
    question: "How can I contact a Joomla development firm?",
    answer: "If you're looking for a Joomla development firm contact, start by checking professional directories, verified freelancer networks, or industry-specific listings. Many firms also have contact forms or live chat options on their websites for direct inquiries."
  },
  {
    id: 10,
    question: "Why should I hire a CMS development company?",
    answer: "When you hire a CMS development company, you get access to local expertise, industry-standard compliance, and faster communication. This is especially beneficial for businesses that need a secure, scalable CMS with custom features."
  },
  {
    id: 11,
    question: "How can I find the best CMS developers near me now?",
    answer: "Searching for the best CMS developers near me on Google will yield local agencies and freelancers. Look for verified reviews, case studies, and certifications to ensure quality and reliability."
  },
  {
    id: 12,
    question: "How do I choose between WordPress, Drupal, and a custom CMS for my business?",
    answer: "Choosing between WordPress, Drupal, and custom CMS dev depends on your goals. WordPress is user-friendly and widely supported, Drupal offers advanced security and scalability, while a custom CMS is ideal for businesses with very specific requirements."
  },
  {
    id: 13,
    question: "Should I outsource CMS development or keep it in-house?",
    answer: "Outsourcing CMS development can lower costs, provide access to specialized talent, and expedite delivery. In-house teams offer more control and immediate communication but often come with higher long-term costs, additional hiring needs, and ongoing resource management."
  },
  {
    id: 14,
    question: "How much does CMS development cost?",
    answer: "The cost of CMS development depends on project complexity, platform choice, and required features. A consultation can help determine a detailed estimate tailored to your goals and budget."
  },
  {
    id: 15,
    question: "Does Website Digitals offer post-launch CMS support?",
    answer: "Yes. We provide ongoing CMS maintenance, updates, plugin enhancements, and scalability improvements to ensure your platform stays secure, optimized, and future-ready."
  }
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const cmsDevelopmentServicesSectionData = {
  heading: "Our Tailored CMS Development Services to Fit Your Business Needs",
  description: "Every business has unique requirements for managing and delivering content. That's why we offer a complete range of CMS solutions tailored to meet specific technical needs, industry demands, and growth objectives. Discover our core services:"
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const cmsDevelopmentIndustriesSectionData = {
  heading: "Sectors We Support",
  description: "We build industry-focused CMS solutions that deliver secure, scalable, and high-performing platforms tailored to your needs.",
  cta: {
    text: "Build My CMS Today",
    href: "#",
    className: "offer-btn primary",
    show: true
  }
};

// Industries Cards Data (for WebBuilderCardSection)
export const cmsDevelopmentIndustriesCardsData = [
  {
    title: "Healthcare",
    description: "Our CMS development for healthcare supports HIPAA compliance, secure patient portals, and seamless EHR/EMR integration. This ensures safe data handling while improving patient engagement and operational efficiency.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Healthcare CMS Development",
    width: 71,
    height: 71,
  },
  {
    title: "Ecommerce",
    description: "We deliver CMS development for ecommerce businesses that power fast storefronts, smooth checkout flows, and PCI-compliant transactions. Our solutions scale easily with your inventory and seasonal demand.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Ecommerce CMS Development",
    width: 71,
    height: 71,
  },
  {
    title: "Finance",
    description: "Our CMS development for finance focuses on security, SOC 2 compliance, and efficient content workflows. We help financial brands build user trust with secure portals and real-time updates.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Finance CMS Development",
    width: 71,
    height: 71,
  },
  {
    title: "Local Businesses",
    description: "We offer CMS development for local businesses that highlight services, integrate Google Business profiles, and boost local SEO visibility—helping you attract and convert nearby customers.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Local Business CMS Development",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurants",
    description: "Our CMS development for restaurants simplifies menu management, online ordering, and reservation integrations. This allows restaurant owners to update offerings quickly and enhance guest experience.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant CMS Development",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description: "We specialize in CMS development for education with features for course catalogs, LMS integrations, and secure student access. This enables seamless digital learning and improved student engagement.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Education CMS Development",
    width: 71,
    height: 71,
  }
];

// Why Choose Us Section Data (Section 7)
export const cmsDevelopmentWhyChooseUsSectionData = {
  heading: "Why Partner With Us for Your CMS Development Needs",
  description: "When it comes to selecting the best CMS development companies, choosing a partner with a proven track record and the right technical capabilities can make all the difference.\n\nOur approach combines innovation, compliance, and performance to deliver CMS platforms that not only meet your current needs but also scale with your future growth. Here's what sets us apart:"
};

// Workflow Section Data (Section 8)
export const cmsDevelopmentWorkflowSectionData = {
  heading: "Our Workflow for CMS Development",
  description: "Delivering a secure, scalable, and user-friendly CMS requires a clear, proven process. We combine structured planning with technical precision to ensure every build meets your business needs today and adapts for tomorrow. Our process includes:"
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const cmsDevelopmentTechnologiesSectionData = {
  heading: "Innovative Technologies We Apply",
  description: "Our team leverages industry-leading platforms and frameworks to deliver secure, scalable, and future-ready digital experiences. We choose the right technology stack for your business, ensuring reliable performance, smooth integrations, and a solution that grows with you.",
  cta: {
    text: "See Tech in Action",
    href: "#",
    className: "primary book-your-call",
    show: true
  }
};

// Final CTA Section Data (Section 11)
export const cmsDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "CMS Development Company", href: "/services/cms-development-company" }
  },
  heading: "Start Your CMS Project with Our US-Based Experts...",
  description: [
    "Hire a CMS development company in the USA that delivers custom and headless CMS solutions built for speed, security, and growth. We create systems with enterprise-level CMS scalability, smooth integrations, and compliance-backed security using trusted platforms like WordPress VIP and Acquia Drupal.",
    "",
    "Whether you need clarity on CMS development services pricing in America or a tailored build ready to launch, we make sure your CMS is built right the first time and prepared to support your growth for years."
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "CMS Development Services",
    width: 500,
    height: 400
  },
  isCta: true,
  cta: {
    text: "Get My Tailored CMS Proposal",
    href: "#",
    className: "offer-btn primary"
  }
};
