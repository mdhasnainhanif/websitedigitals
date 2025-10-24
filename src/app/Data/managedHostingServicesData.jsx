import { BagIcon } from "@/icons";

export const managedHostingServicesMetadata = {
  title: "Website Digitals | Premium Managed Hosting Services",
  description:
    "Explore our managed hosting services designed for small businesses to large enterprises. Enjoy 24/7 support, robust security, and high-performance solutions.",
  keywords: "managed hosting services, managed web hosting, managed server hosting, fully managed hosting, VPS managed hosting, cloud managed hosting",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/managed-hosting-services/",
  openGraph: {
    title: "Website Digitals | Premium Managed Hosting Services",
    description:
      "Explore our managed hosting services designed for small businesses to large enterprises. Enjoy 24/7 support, robust security, and high-performance solutions.",
    url: "https://www.websitedigitals.com/website-hosting-services/managed-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/managed-hosting-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Managed Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Website Digitals | Premium Managed Hosting Services",
    description:
      "Explore our managed hosting services designed for small businesses to large enterprises. Enjoy 24/7 support, robust security, and high-performance solutions.",
    images: [
      "https://websitedigitals.com/assets/images/managed-hosting-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/managed-hosting-services/",
  },
};

export const managedHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Managed Hosting Services",
      href: "/website-hosting-services/managed-hosting-services",
    },
  },
  heading: "Simplify Your Hosting with Expert [[Managed Hosting Services]]",
  description: [
    "Slow websites, frequent downtime, and security breaches can cost you customers and damage your reputation.",
    "At Website Digitals, we provide managed hosting services that keep your website or application running smoothly with maximum uptime, security, and speed. Whether you need cloud-managed hosting, VPS-managed hosting, or dedicated hosting, our solutions are tailored to meet the unique needs of your business.",
    "We take care of the technical complexities so that you can enjoy reliable, high-performance hosting without the hassle.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Secure Your Hosting Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "cloud-managed", label: "Cloud Managed Hosting" },
      { value: "vps-managed", label: "VPS Managed Hosting" },
      { value: "dedicated-managed", label: "Dedicated Managed Hosting" },
      { value: "wordpress-managed", label: "WordPress Managed Hosting" },
      { value: "ecommerce-managed", label: "Ecommerce Managed Hosting" },
      { value: "enterprise-managed", label: "Enterprise Managed Hosting" },
    ],
    initialValues: {
      help: "cloud-managed",
    },
  },
};

export const managedHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Managed Hosting Services",
      href: "/website-hosting-services/managed-hosting-services",
    },
  },
  heading: "Your Site Deserves Lightning-Fast Hosting",
  description: [
    "No more slow load times or outages, switch to our fully managed solution today.",
  ],
  bullets: [],
  cta: {
    text: "End Downtime Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Managed Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

export const managedHostingServicesStatsData = [
  {
    id: 1,
    value: 24,
    suffix: "/7",
    label: "Expert Monitoring",
  },
  {
    id: 2,
    value: 99.9,
    suffix: "%",
    label: "Data Backup Success",
  },
  {
    id: 3,
    value: 1000,
    suffix: "+",
    label: "Domains Managed",
  },
  {
    id: 4,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
];

export const managedHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Optimized Speed & Performance",
    description:
      "Our cloud-managed hosting solutions are optimized for speed with advanced caching and CDN integration. These features ensure quick load times, even during traffic spikes, and enhance your site's SEO ranking by reducing latency and improving overall performance.",
    icon: "performance",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Proactive Monitoring & Support",
    description:
      "We provide 24/7 monitoring with our managed hosting solutions, offering real-time alerts and immediate issue resolution. Our team proactively manages server health and applies regular security patches and software updates to keep your website secure and operating smoothly.",
    icon: "monitoring",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Maximized Website Speed",
    description:
      "With cloud-managed hosting and VPS-managed hosting, we enhance your website's speed by utilizing advanced caching, CDN technology, and optimized server configurations. These elements reduce load times and improve user experience.",
    icon: "speed",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Seamless Migration & Integration",
    description:
      "Our VPS managed hosting and dedicated hosting solutions make migration hassle-free. We ensure smooth data transfer and integration with existing CMS platforms, third-party tools, and databases, ensuring minimal downtime during the transition.",
    icon: "migration",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
];

export const managedHostingServicesImpactSectionData = {
  heading: "Key Advantages of Managed Hosting Solutions",
  showDescription: false,
};

export const managedHostingServicesData = [
  {
    id: 1,
    title: "Server Setup & Configuration",
    description:
      "Your infrastructure is monitored 24/7 for performance, uptime, and security events. Any irregularities are detected early, allowing for quick resolution before they impact users.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Continuous Monitoring & Maintenance",
    description:
      "Your infrastructure is monitored 24/7 for performance, uptime, and security events. Any irregularities are detected early, allowing for quick resolution before they impact users.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Security Management & Compliance",
    description:
      "Our team applies firewalls, malware scanning, SSL certificates, and routine security patches. We also ensure compliance with standards like PCI DSS and GDPR to protect sensitive data.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Backup & Disaster Recovery",
    description:
      "We optimize your servers with advanced caching, load balancing, and CDN integration to minimize latency and improve response times, even during traffic spikes.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Performance Optimization",
    description:
      "Through caching, database optimization, CDN integration, and scalable architecture, we eliminate bottlenecks and ensure fast, reliable performance, even during high traffic.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const managedHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Our managed hosting for ecommerce stores delivers secure payment handling, fast checkout performance, and reliable uptime to keep customers shopping without disruption.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "SaaS",
    description:
      "We provide managed hosting for SaaS companies that demand scalability, seamless integrations, and consistent uptime to support rapid user growth and product reliability.",
    icon: "/assets/images/industry/technology.svg",
  },
  {
    id: 3,
    title: "Healthcare",
    description:
      "Our managed hosting for healthcare providers ensures HIPAA and GDPR compliance, safeguarding sensitive patient data while maintaining high system availability.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 4,
    title: "Real Estate",
    description:
      "With managed hosting for real estate businesses, we power fast property database performance, lead capture tools, and seamless listing updates to keep agents and clients connected.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 5,
    title: "Blockchain",
    description:
      "We specialize in managed hosting for blockchain platforms, offering high availability, advanced security, and optimized environments for decentralized applications and digital assets.",
    icon: "/assets/images/industry/blockchain.svg",
  },
];

export const managedHostingServicesTechnologiesData = [
  {
    id: 1,
    title: "AWS",
    description:
      "Amazon Web Services provides scalable cloud infrastructure with services like EC2, S3, and CloudFront. Our AWS-certified experts help you leverage the full power of the cloud for maximum performance and reliability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Google Cloud",
    description:
      "Google Cloud Platform offers advanced machine learning capabilities and global infrastructure. We help you build and deploy applications that scale automatically with Google's robust cloud services.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Microsoft Azure",
    description:
      "Microsoft Azure provides enterprise-grade cloud solutions with seamless integration to Microsoft products. Our Azure specialists ensure your applications run smoothly with hybrid cloud capabilities.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Docker",
    description:
      "Containerization with Docker enables consistent deployment across environments. We help you containerize applications for better scalability, portability, and resource efficiency in the cloud.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Kubernetes",
    description:
      "Kubernetes orchestration manages containerized applications at scale. Our experts help you implement K8s for automated scaling, load balancing, and high availability in cloud environments.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "CDN",
    description:
      "Content Delivery Networks accelerate content delivery worldwide. We implement CDN solutions to reduce latency, improve load times, and enhance user experience across global audiences.",
    icon: "/assets/images/technologyIcons.png",
  },
];

export const managedHostingServicesWorkflowData = {
  title: "Our End-to-End Hosting Approach",
  showDescription: false,
  steps: [
    {
      id: 1,
      number: "01",
      title: "Initial Consultation and Planning",
      description:
        "We start by analyzing your business goals and technical requirements. Our experts design a managed hosting solution tailored to your specific needs, ensuring the right balance of performance, security, and scalability.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Implementation and Migration",
      description:
        "Once your plan is finalized, we migrate your website or application to our managed hosting platform with zero downtime. The transition is seamless, ensuring business continuity and minimal disruption.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Ongoing Support and Optimization",
      description:
        "After migration, we provide continuous monitoring and performance tuning. Our team proactively optimizes server resources and resolves potential issues to keep your hosting environment running at peak efficiency.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Routine Maintenance and Updates",
      description:
        "We regularly perform updates, apply security patches, and optimize servers to ensure your system stays secure, fast, and fully up to date.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

export const managedHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Enterprise-Grade Infrastructure",
    description:
      "Redundant networks and enterprise-class data centers with failover capabilities power our platform. This ensures high availability, minimal downtime, and consistent reliability even during traffic surges or unexpected events.",
    icon: "infrastructure",
  },
  {
    id: 2,
    title: "Full Root Access & Customization",
    description:
      "We provide complete root access and SSH control, giving advanced users the flexibility to configure applications, adjust server settings, and deploy custom software, all while we handle continuous monitoring and security updates in the background.",
    icon: "customization",
  },
  {
    id: 3,
    title: "Compliance-Ready Architecture",
    description:
      "Our hosting environment is built to meet PCI DSS, HIPAA, and GDPR standards. With secure data handling, encryption protocols, and audit-ready logs, we simplify compliance and reduce risk while ensuring customer data remains protected.",
    icon: "compliance",
  },
  {
    id: 4,
    title: "Performance Analytics & Insights",
    description:
      "Gain access to real-time performance monitoring, traffic reports, and resource usage insights. This data helps you make smarter scaling decisions, optimize server configurations, and maintain top-tier website performance over time.",
    icon: "analytics",
  },
  {
    id: 5,
    title: "Data Localization Options",
    description:
      "Select from multiple regional hosting locations to store your data closer to your audience or meet data residency regulations such as GDPR or state-specific privacy laws. This gives you control over compliance and latency reduction simultaneously.",
    icon: "localization",
  },
];

export const managedHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why should I choose Website Digitals for managed hosting services?",
    answer:
      "Website Digitals combines enterprise-grade infrastructure, proactive monitoring, and 24/7 expert support to deliver reliable, high-performance hosting. Our tailored solutions, from cloud-managed hosting to VPS-managed hosting, are designed to fit businesses of all sizes, ensuring security, scalability, and peace of mind.",
  },
  {
    id: 2,
    question: "What makes Website Digitals different from other hosting providers?",
    answer:
      "Website Digitals offers fully managed, end-to-end solutions. We handle everything, server setup, performance optimization, data backups, and compliance with industry standards like PCI DSS and GDPR. This means you don't have to worry about technical issues, downtime, or security breaches; we do it all while keeping you informed with transparent reports and analytics.",
  },
  {
    id: 3,
    question: "Can Website Digitals support my business as it grows?",
    answer:
      "Yes. Website Digitals specializes in scalable managed hosting solutions. Whether you're a startup expecting your first surge in traffic or an enterprise with global infrastructure needs, we can scale resources, optimize performance, and adapt to your growth without downtime or disruption.",
  },
  {
    id: 4,
    question: "What are managed hosting services?",
    answer:
      "Managed hosting services are a hosting solution where the provider handles server setup, maintenance, monitoring, and security for you. This ensures your infrastructure stays optimized, secure, and updated, allowing you to focus on running your business instead of managing servers.",
  },
  {
    id: 5,
    question: "What are the benefits of managed hosting services?",
    answer:
      "The benefits of managed hosting services include improved website performance, proactive security, automated backups, and 24/7 expert support. This reduces downtime, strengthens protection against cyber threats, and keeps your site fast and reliable.",
  },
  {
    id: 6,
    question: "How does managed hosting differ from shared hosting?",
    answer:
      "Managed hosting provides dedicated resources, expert management, and better performance, whereas shared hosting means multiple websites share the same server, which can slow down your site and limit customization options. Managed hosting offers more reliability and scalability.",
  },
  {
    id: 7,
    question: "What is the best managed hosting for small businesses?",
    answer:
      "The best managed hosting for small businesses is a solution that combines affordability, scalability, and reliable support. This allows growing businesses to have a secure and high-performing website without needing in-house IT expertise.",
  },
  {
    id: 8,
    question: "What is the difference between managed hosting and cloud hosting?",
    answer:
      "Managed hosting refers to the level of support and management you receive, while cloud hosting refers to the infrastructure used to host your website. You can choose cloud-managed hosting to combine both, giving you the scalability of the cloud and the convenience of fully managed services.",
  },
  {
    id: 9,
    question: "What are the features of managed hosting solutions?",
    answer:
      "Managed hosting solutions include real-time monitoring, SSL management, malware protection, regular updates, and performance optimization. These features help maintain stability, security, and peak website performance.",
  },
  {
    id: 10,
    question: "What types of managed hosting services are available?",
    answer:
      "There are multiple types of managed hosting services, including VPS managed hosting, dedicated managed hosting, cloud managed hosting, and WordPress managed hosting. Each is designed to serve different traffic levels, compliance needs, and performance goals.",
  },
  {
    id: 11,
    question: "Why choose managed hosting over unmanaged hosting?",
    answer:
      "Choosing managed hosting over unmanaged hosting saves time and prevents technical headaches. With experts handling server monitoring, updates, and security patches, you can run your business without worrying about technical disruptions.",
  },
  {
    id: 12,
    question: "How much does managed hosting cost?",
    answer:
      "Managed hosting pricing depends on the resources, support level, and performance needs of your website. While it may cost more than shared or unmanaged hosting, it offers higher uptime, stronger security, and better ROI by preventing costly downtime.",
  },
  {
    id: 13,
    question: "What are the pros and cons of managed hosting services?",
    answer:
      "The pros of managed hosting services include enhanced uptime, enterprise-level security, expert management, and scalability. The main con is the higher price compared to unmanaged hosting, but most businesses find the benefits far outweigh the cost.",
  },
  {
    id: 14,
    question: "Who is the best-managed hosting service provider?",
    answer:
      "The best managed hosting service provider delivers reliability, compliance, and scalability with transparent support. Website Digitals is trusted by businesses across industries for enterprise-grade infrastructure and expert management.",
  },
  {
    id: 15,
    question: "What are custom managed hosting services?",
    answer:
      "Custom managed hosting services allow businesses to design hosting environments tailored to compliance, application, or performance needs. Website Digitals provides flexible, fully customized solutions that adapt as your business grows.",
  },
  {
    id: 16,
    question: "What are the best managed hosting solutions?",
    answer:
      "The best managed hosting solutions combine speed, security, and scalability with continuous expert management. Website Digitals delivers optimized hosting tailored to business goals, ensuring infrastructure remains secure and high-performing.",
  },
];

export const managedHostingServicesSectionData = {
  heading: "What's Included in Our Managed Hosting Solutions",
  showDescription: false,
};

export const managedHostingServicesIndustriesSectionData = {
  heading: "Who We Serve Across Different Industries",
  description:
    "With extensive experience across industries, we deliver managed hosting solutions that ensure secure, scalable, and high-performing operations.",
  cta: {
    text: "Power Your Industry with Managed Hosting",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const managedHostingServicesIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our managed hosting for ecommerce stores delivers secure payment handling, fast checkout performance, and reliable uptime to keep customers shopping without disruption.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Ecommerce Managed Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "We provide managed hosting for SaaS companies that demand scalability, seamless integrations, and consistent uptime to support rapid user growth and product reliability.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "SaaS Managed Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "Our managed hosting for healthcare providers ensures HIPAA and GDPR compliance, safeguarding sensitive patient data while maintaining high system availability.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Healthcare Managed Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "With managed hosting for real estate businesses, we power fast property database performance, lead capture tools, and seamless listing updates to keep agents and clients connected.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Real Estate Managed Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Blockchain",
    description:
      "We specialize in managed hosting for blockchain platforms, offering high availability, advanced security, and optimized environments for decentralized applications and digital assets.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Blockchain Managed Hosting",
    width: 71,
    height: 71,
  },
];

export const managedHostingServicesWhyChooseUsSectionData = {
  heading: "Exclusive Features of Our Managed Hosting..",
  description:
    "",
  isDescription: false,
};

export const managedHostingServicesWorkflowSectionData = {
  heading: "Our End-to-End Hosting Approach",
  description:
    "Our comprehensive managed hosting process ensures your website or application receives the highest level of care, from initial consultation to ongoing optimization and support.",
};

export const managedHostingServicesTechnologiesSectionData = {
  heading: "Tools We Use",
  description:
    "Our team leverages industry-leading cloud platforms and technologies to deliver secure, scalable, and future-ready hosting solutions. We choose the right technology stack for your business, ensuring reliable performance, smooth integrations, and a solution that grows with you.",
  showDescription: true,
  cta: {
    text: "See Tech in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

export const managedHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Managed Hosting Services",
      href: "/website-hosting-services/managed-hosting-services",
    },
  },
  heading: "Your Site Deserves Lightning-Fast Hosting",
  description: [
    "No more slow load times or outages, switch to our fully managed solution today.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Managed Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "End Downtime Now",
    href: "#",
    className: "offer-btn primary",
  },
};

export const managedHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Exclusive Features of Our Managed Hosting",
  showDescription: false,
  items: [
    {
      id: "managed-firstScroller",
      step: 1,
      title: "Enterprise-Grade Infrastructure",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Redundant networks and enterprise-class data centers with failover capabilities power our platform. This ensures high availability, minimal downtime, and consistent reliability even during traffic surges or unexpected events.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Enterprise-Grade Infrastructure",
        width: 669,
        height: 376,
      },
    },
    {
      id: "managed-secondScroller",
      step: 2,
      title: "Full Root Access & Customization",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide complete root access and SSH control, giving advanced users the flexibility to configure applications, adjust server settings, and deploy custom software, all while we handle continuous monitoring and security updates in the background.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Full Root Access & Customization",
        width: 669,
        height: 376,
      },
    },
    {
      id: "managed-thirdScroller",
      step: 3,
      title: "Compliance-Ready Architecture",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our hosting environment is built to meet PCI DSS, HIPAA, and GDPR standards. With secure data handling, encryption protocols, and audit-ready logs, we simplify compliance and reduce risk while ensuring customer data remains protected.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Compliance-Ready Architecture",
        width: 669,
        height: 376,
      },
    },
    {
      id: "managed-forthScroller",
      step: 4,
      title: "Performance Analytics & Insights",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Gain access to real-time performance monitoring, traffic reports, and resource usage insights. This data helps you make smarter scaling decisions, optimize server configurations, and maintain top-tier website performance over time.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Performance Analytics & Insights",
        width: 669,
        height: 376,
      },
    },
    {
      id: "managed-fifthScroller",
      step: 5,
      title: "Data Localization Options",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Select from multiple regional hosting locations to store your data closer to your audience or meet data residency regulations such as GDPR or state-specific privacy laws. This gives you control over compliance and latency reduction simultaneously.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data Localization Options",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};
