import { BagIcon } from "@/icons";

// Metadata for Dedicated Hosting Services
export const dedicatedHostingServicesMetadata = {
  title: "Secure Dedicated Hosting Services with Full Control | Website Digitals",
  description:
    "Keep your site online and revenue flowing. Website Digitals offers dedicated hosting services with enterprise-grade uptime and 24/7 monitoring.",
  keywords: "dedicated hosting, dedicated server, managed dedicated hosting, unmanaged dedicated hosting, enterprise hosting, root access hosting, DDoS protection",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/dedicated-hosting-service/",
  openGraph: {
    title: "Secure Dedicated Hosting Services with Full Control | Website Digitals",
    description:
      "Keep your site online and revenue flowing. Website Digitals offers dedicated hosting services with enterprise-grade uptime and 24/7 monitoring.",
    url: "https://www.websitedigitals.com/website-hosting-services/dedicated-hosting-service/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/dedicated-hosting-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dedicated Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Dedicated Hosting Services with Full Control | Website Digitals",
    description:
      "Keep your site online and revenue flowing. Website Digitals offers dedicated hosting services with enterprise-grade uptime and 24/7 monitoring.",
    images: [
      "https://websitedigitals.com/assets/images/dedicated-hosting-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/dedicated-hosting-service/",
  },
};

export const dedicatedHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Dedicated Hosting Service",
      href: "/website-hosting-services/dedicated-hosting-service",
    },
  },
  heading: "Launch, Manage, and [[Scale]] with Dedicated Hosting Service",
  description: [
    "Managing a high-traffic website shouldn't leave you worrying about downtime or slow performance.\n\nAt Website Digitals, our dedicated hosting service provides a fully isolated server environment built for speed, security, and 99.99% uptime.\n\nWith 24/7 expert management and flexible plans, we deliver control, scalability, and quick deployment to keep your business online and performing at its best.",
  ],
  isCta: true,
  image: null,
  formConfig: {
    buttonText: "Deploy Hosting Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "managed-dedicated", label: "Managed Dedicated Hosting" },
      { value: "unmanaged-dedicated", label: "Unmanaged Dedicated Servers" },
      { value: "custom-dedicated", label: "Custom-Built Server Configurations" },
    ],
    initialValues: {
      help: "managed-dedicated",
    },
  },
};

export const dedicatedHostingServicesData = [
  {
    id: 1,
    title: "Managed Dedicated Hosting",
    description:
      "Our managed dedicated server hosting includes updates, patch management, and proactive monitoring. A fully managed hosting plan means 24/7 technical support for configuration and performance tuning, allowing you to focus on your business and not server maintenance.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Unmanaged Dedicated Servers",
    description:
      "With unmanaged dedicated hosting, experienced teams get complete autonomy. This bare metal hosting option offers full root-level access for custom server setup, ideal for developers who want total control over software stacks and security policies.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Custom-Built Server Configurations",
    description:
      "Our custom dedicated hosting delivers scalable server solutions with tailored CPU, RAM, SSD storage, and bandwidth allocation. Get a resource plan designed around your workload to maximize performance and reduce unnecessary costs.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const dedicatedHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our Dedicated Hosting Stand Out",
  description: [
    "Our infrastructure is built for businesses that demand consistent speed, reliability, and full administrative control. Backed by proven technology and responsive support, we deliver a hosting foundation you can trust.",
  ],
  items: [
    {
      id: "dedicated-firstScroller",
      step: 1,
      title: "99.99% Uptime SLA",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We back our platform with a guaranteed uptime SLA to keep your business online when it matters most. Our reliable dedicated server hosting uses enterprise-grade redundancy, intelligent failover systems, and continuous monitoring to maintain network stability.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "99.99% Uptime SLA",
        width: 669,
        height: 376,
      },
    },
    {
      id: "dedicated-secondScroller",
      step: 2,
      title: "Enterprise-Grade Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Your data stays protected with secure dedicated servers featuring firewalls, malware prevention, and intrusion detection. With DDoS-protected hosting and regularly scheduled encrypted backups, your critical information is safe and recoverable.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Enterprise-Grade Security",
        width: 669,
        height: 376,
      },
    },
    {
      id: "dedicated-thirdScroller",
      step: 3,
      title: "24/7 Expert Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Get real-time help from specialists who know dedicated infrastructure inside out. Our dedicated hosting support team provides expert server assistance, troubleshooting, and guidance via live chat or support tickets, backed by experienced network engineers.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "24/7 Expert Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "dedicated-forthScroller",
      step: 4,
      title: "Scalability on Demand",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our scalable dedicated hosting grows with your business. Upgrade server resources on-demand using elastic infrastructure and vertical scaling to handle surges and deliver extra bandwidth when needed.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Scalability on Demand",
        width: 669,
        height: 376,
      },
    },
    {
      id: "dedicated-fifthScroller",
      step: 5,
      title: "Complete Root Access",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Gain full administrative control with root access hosting, enabling SSH access and advanced server customization. Manage OS-level permissions and configure a hosting environment tailored to your exact needs.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Complete Root Access",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const dedicatedHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Dedicated Hosting Service",
      href: "/website-hosting-services/dedicated-hosting-service",
    },
  },
  heading: "Make Your Website Faster, Safer, and Always Available",
  description: [
    "Every second of slow load time or downtime impacts revenue. Our dedicated hosting service provides guaranteed uptime, expert management, and enterprise-grade security to keep your website fast, stable, and protected.\n\nStart your dedicated hosting plan today and give your business the performance it deserves.",
  ],
  bullets: [],
  cta: {
    text: "Launch Your Server Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Dedicated Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const dedicatedHostingServicesStatsData = [
  {
    id: 1,
    value: 99.99,
    suffix: "%",
    label: "Uptime",
  },
  {
    id: 2,
    value: 250,
    suffix: "+",
    label: "Servers",
  },
  {
    id: 3,
    value: 500,
    suffix: "+",
    label: "Sites",
  },
  {
    id: 4,
    value: 8,
    suffix: "+",
    label: "Regions",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const dedicatedHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Superior Performance & Reliability",
    description:
      "Enjoy quick load times and steady operation with high-performance hosting. Dedicated server speed removes resource contention, and a reliable uptime guarantee ensures predictable availability. Optimized servers and reduced latency improve performance for global visitors.",
    icon: "performance",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Advanced Security & Compliance",
    description:
      "Secure dedicated hosting protects sensitive data with firewall protection, SSL encryption, and malware defense. It supports compliance-ready hosting for PCI DSS and ISO/IEC 27001 standards, making it ideal for regulated industries.",
    icon: "security",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Full Control & Customization",
    description:
      "Gain complete control with root access hosting, fast provisioning, and customizable dedicated servers. Choose your OS (Linux/Windows), install software, and integrate control panels like cPanel or Plesk for simple management.",
    icon: "control",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Scalability When You Need It",
    description:
      "Easily scale CPU, memory, or storage as your traffic grows. Maintain consistent performance while avoiding complex migrations.",
    icon: "scalable",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const dedicatedHostingServicesImpactSectionData = {
  heading: "Why Dedicated Hosting Is the Right Choice",
  showDescription: true,
  description:
    "Dedicated hosting is ideal for businesses that need consistent speed, advanced security, and full control. Unlike shared hosting, it gives you isolated resources to keep your website stable during peak traffic. Here's why it matters:",
  cta: null,
};

// Industries Data
export const dedicatedHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Our ecommerce dedicated hosting service ensures fast checkout, PCI compliance, and dependable uptime. It keeps online stores running smoothly during peak shopping periods and supports seamless customer experiences.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "Gaming",
    description:
      "Our gaming server dedicated hosting delivers high-speed connectivity and low latency. It supports stable multiplayer performance and reliable uptime for competitive online gaming environments.",
    icon: "/assets/images/industry/gaming.svg",
  },
  {
    id: 3,
    title: "Streaming",
    description:
      "Our media streaming dedicated hosting and video streaming dedicated hosting services handle large bandwidth demands and HD or 4K delivery. It keeps your platform responsive and scalable for global audiences.",
    icon: "/assets/images/industry/streaming.svg",
  },
  {
    id: 4,
    title: "Fintech",
    description:
      "Our fintech dedicated hosting service safeguards financial data with encryption, secure backups, and compliance-ready infrastructure. It is built for regulated industries that demand reliability and trust.",
    icon: "/assets/images/industry/fintech.svg",
  },
  {
    id: 5,
    title: "Digital Marketing",
    description:
      "Our digital marketing dedicated hosting enhances campaign speed and analytics performance. It provides scalable resources and consistent uptime for marketing agencies and enterprise platforms.",
    icon: "/assets/images/industry/digital-marketing.svg",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
export const dedicatedHostingServicesIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our ecommerce dedicated hosting service ensures fast checkout, PCI compliance, and dependable uptime. It keeps online stores running smoothly during peak shopping periods and supports seamless customer experiences.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Ecommerce Dedicated Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Gaming",
    description:
      "Our gaming server dedicated hosting delivers high-speed connectivity and low latency. It supports stable multiplayer performance and reliable uptime for competitive online gaming environments.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Gaming Dedicated Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Streaming",
    description:
      "Our media streaming dedicated hosting and video streaming dedicated hosting services handle large bandwidth demands and HD or 4K delivery. It keeps your platform responsive and scalable for global audiences.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Streaming Dedicated Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Fintech",
    description:
      "Our fintech dedicated hosting service safeguards financial data with encryption, secure backups, and compliance-ready infrastructure. It is built for regulated industries that demand reliability and trust.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Fintech Dedicated Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Digital Marketing",
    description:
      "Our digital marketing dedicated hosting enhances campaign speed and analytics performance. It provides scalable resources and consistent uptime for marketing agencies and enterprise platforms.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Digital Marketing Dedicated Hosting",
    width: 71,
    height: 71,
  },
];

// Workflow Data (for StepSection component)
export const dedicatedHostingServicesWorkflowData = {
  title: "Our Dedicated Hosting Process",
  description:
    "Getting started with dedicated hosting is straightforward. Here's how we guide you from plan selection to launch:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Choose Your Plan",
      description:
        "Begin by using our dedicated hosting plan selection tools to compare server options. Whether you need a single machine or multiple servers, you can review specifications and order dedicated server resources that fit your performance and budget.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Configure and Deploy",
      description:
        "After selecting your plan, we handle server configuration to prepare your environment. Our team manages provisioning, OS installation, and control panel setup so your server is ready quickly. You can then deploy dedicated hosting and start running your applications without unnecessary delays.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Monitor and Scale",
      description:
        "Once live, your server is under continuous server monitoring with proactive alerts to catch issues early. Our scalable hosting infrastructure supports effortless resource scaling and ongoing performance tuning, allowing your hosting to grow with your business requirements.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const dedicatedHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "99.99% Uptime SLA",
    description:
      "We back our platform with a guaranteed uptime SLA to keep your business online when it matters most. Our reliable dedicated server hosting uses enterprise-grade redundancy, intelligent failover systems, and continuous monitoring to maintain network stability.",
    icon: "performance",
  },
  {
    id: 2,
    title: "Enterprise-Grade Security",
    description:
      "Your data stays protected with secure dedicated servers featuring firewalls, malware prevention, and intrusion detection. With DDoS-protected hosting and regularly scheduled encrypted backups, your critical information is safe and recoverable.",
    icon: "security",
  },
  {
    id: 3,
    title: "24/7 Expert Support",
    description:
      "Get real-time help from specialists who know dedicated infrastructure inside out. Our dedicated hosting support team provides expert server assistance, troubleshooting, and guidance via live chat or support tickets, backed by experienced network engineers.",
    icon: "support",
  },
  {
    id: 4,
    title: "Scalability on Demand",
    description:
      "Our scalable dedicated hosting grows with your business. Upgrade server resources on-demand using elastic infrastructure and vertical scaling to handle surges and deliver extra bandwidth when needed.",
    icon: "scalable",
  },
  {
    id: 5,
    title: "Complete Root Access",
    description:
      "Gain full administrative control with root access hosting, enabling SSH access and advanced server customization. Manage OS-level permissions and configure a hosting environment tailored to your exact needs.",
    icon: "control",
  },
];

// FAQ Data
export const dedicatedHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for dedicated hosting?",
    answer:
      "Website Digitals provides fully managed dedicated hosting backed by 24/7 expert support, enterprise-grade security, and a 99.99% uptime SLA. Our infrastructure is built to handle high-traffic websites, mission-critical applications, and businesses that need maximum control and reliability.",
  },
  {
    id: 2,
    question: "Does Website Digitals help with website migration?",
    answer:
      "Yes. We offer free website migration assistance for new clients. Our technical team securely transfers your data, configures your server, and minimizes downtime so your site stays online during the transition.",
  },
  {
    id: 3,
    question: "Can Website Digitals customize a dedicated server to my needs?",
    answer:
      "Absolutely. You can configure CPU, RAM, storage type (including SSD storage), and operating system. Whether you prefer a fully managed solution or root access for custom setup, we tailor the environment to meet your exact requirements.",
  },
  {
    id: 4,
    question: "What is a dedicated hosting service?",
    answer:
      "A dedicated hosting service gives you an entire physical server dedicated exclusively to your website or applications. Unlike shared hosting, you don't share resources with other users, which means consistent performance, full server control, and custom configuration options.",
  },
  {
    id: 5,
    question: "Is dedicated hosting worth it for small businesses?",
    answer:
      "Yes. If your website handles high traffic, processes sensitive data, or requires consistent uptime, dedicated hosting can be a smart investment. It delivers stronger security, faster load times, and scalability for future growth. Smaller sites with minimal traffic might start with VPS hosting, but dedicated servers are ideal for mission-critical operations.",
  },
  {
    id: 6,
    question: "What are the benefits of dedicated hosting for eCommerce?",
    answer:
      "Dedicated hosting supports eCommerce sites by providing PCI DSS compliance, faster page loads, and enhanced security. This helps prevent downtime during peak sales periods and allows you to scale easily to handle seasonal traffic spikes without slowing your store.",
  },
  {
    id: 7,
    question: "What are dedicated server security best practices?",
    answer:
      "Security best practices include enabling firewalls, using strong SSH keys, applying OS and software updates, scheduling backups, monitoring logs, and using intrusion detection. Website Digitals also offers managed security and monitoring for clients who prefer expert oversight.",
  },
  {
    id: 8,
    question: "Can I get dedicated hosting with DDoS protection?",
    answer:
      "Yes. Our plans include dedicated hosting with DDoS protection, which shields your website from traffic floods and minimizes downtime risk. This feature helps maintain site availability even during attacks.",
  },
  {
    id: 9,
    question: "How do I order dedicated hosting with SSD storage?",
    answer:
      "Select a plan that includes SSD storage in the specifications. During checkout, you can choose SSD capacity and finalize your dedicated hosting order for faster performance and database access.",
  },
  {
    id: 10,
    question: "Where can I buy a dedicated hosting server?",
    answer:
      "You can buy a dedicated hosting server directly from our website. Browse available plans, select the right configuration, and complete your order online. Most servers are provisioned quickly so that you can get started within hours.",
  },
  {
    id: 11,
    question: "What is a high-performance dedicated hosting service?",
    answer:
      "A high-performance dedicated hosting service is designed for speed, stability, and low-latency performance. It uses optimized hardware, enterprise-grade networking, and proactive monitoring to keep websites and applications responsive even during heavy traffic.",
  },
  {
    id: 12,
    question: "What is an affordable dedicated hosting service?",
    answer:
      "An affordable dedicated hosting service delivers enterprise-grade reliability and dedicated resources at competitive pricing. It allows growing businesses to access secure, scalable infrastructure without overspending, making high-quality hosting more accessible.",
  },
  {
    id: 13,
    question: "What is a secure dedicated hosting service?",
    answer:
      "A secure dedicated hosting service safeguards your data with firewalls, SSL encryption, DDoS protection, and automated backups. It is compliance-ready and ideal for businesses handling sensitive transactions, ensuring uninterrupted security and reliability.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const dedicatedHostingServicesSectionData = {
  heading: "Our Dedicated Hosting Services for Every Business Need",
  description:
    "Choose from dedicated hosting solutions built for high traffic, critical workloads, and growing businesses. Whether you need fully managed hosting, total control with root access, or a custom-built server, Website Digitals has a plan designed to fit your needs.",
  showDescription: true,
  cta: {
    label: "Get My Hosting",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const dedicatedHostingServicesIndustriesSectionData = {
  heading: "Industries We Serve",
  description:
    "We empower businesses with secure, reliable, and scalable dedicated hosting tailored to each industry for sustained growth and performance.",
  cta: {
    text: "Explore Hosting for Your Industry",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Why Choose Us Section Data (Section 7)
export const dedicatedHostingServicesWhyChooseUsSectionData = {
  heading: "What Makes Our Dedicated Hosting Stand Out",
  description:
    "Our infrastructure is built for businesses that demand consistent speed, reliability, and full administrative control. Backed by proven technology and responsive support, we deliver a hosting foundation you can trust.",
};

// Workflow Section Data (Section 8)
export const dedicatedHostingServicesWorkflowSectionData = {
  heading: "Our Dedicated Hosting Process",
  description:
    "Getting started with dedicated hosting is straightforward. Here's how we guide you from plan selection to launch:",
};

// Final CTA Section Data (Section 11)
export const dedicatedHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Dedicated Hosting Service",
      href: "/website-hosting-services/dedicated-hosting-service",
    },
  },
  heading: "Make Your Website Faster, Safer, and Always Available",
  description: [
    "Every second of slow load time or downtime impacts revenue. Our dedicated hosting service provides guaranteed uptime, expert management, and enterprise-grade security to keep your website fast, stable, and protected.\n\nStart your dedicated hosting plan today and give your business the performance it deserves.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Dedicated Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Launch Your Server Now",
    href: "#",
    className: "offer-btn primary",
  },
};
