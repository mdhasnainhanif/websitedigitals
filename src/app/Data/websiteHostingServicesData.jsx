import { BagIcon } from "@/icons";

// Metadata for Website Hosting Services
export const websiteHostingServicesMetadata = {
  title: "Get Fast, Affordable & Secure Website Hosting Services",
  description:
    "Get reliable hosting from Website Digitals, a trusted website hosting company. Fast servers, 99.9% uptime, and 24/7 support. Start today.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/",
  openGraph: {
    title: "Get Fast, Affordable & Secure Website Hosting Services",
    description:
      "Get reliable hosting from Website Digitals, a trusted website hosting company. Fast servers, 99.9% uptime, and 24/7 support. Start today.",
    url: "https://www.websitedigitals.com/website-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/website-hosting-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Website Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Fast, Affordable & Secure Website Hosting Services",
    description:
      "Get reliable hosting from Website Digitals, a trusted website hosting company. Fast servers, 99.9% uptime, and 24/7 support. Start today.",
    images: [
      "https://websitedigitals.com/assets/images/website-hosting-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/",
  },
};

export const websiteHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Website Hosting Services",
      href: "/website-hosting-services",
    },
  },
  heading: "Host, [[Optimize]], and [[Succeed]] with Website Hosting Services",
  description: [
    "Slow websites frustrate visitors and cost you sales.\n\nAt Website Digitals, our website hosting services give you fast load times, strong protection, and dedicated help around the clock so your site stays online and supports your business growth. When you choose us, you'll benefit from:\n• Lightning-fast hosting on high-speed servers\n• Protection with an uptime guarantee and free SSL\n• 24/7 expert assistance",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Start Hosting Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "shared-hosting", label: "Shared Hosting" },
      { value: "vps-hosting", label: "VPS Hosting" },
      { value: "dedicated-hosting", label: "Dedicated Hosting" },
      { value: "cloud-hosting", label: "Cloud Hosting" },
      { value: "managed-hosting", label: "Managed Hosting" },
      { value: "reseller-hosting", label: "Reseller Hosting" },
      { value: "domain-registration", label: "Domain Registration" },
    ],
    initialValues: {
      help: "shared-hosting",
    },
  },
};

export const websiteHostingServicesData = [
  {
    id: 1,
    title: "Shared Hosting",
    description:
      "Get started with affordable website hosting on shared servers. Our starter hosting plan delivers reliable performance at a cost-effective price, making it a smart choice for blogs, personal projects, and small business websites.",
    icon: <BagIcon />,
    isActive: true,
    button: {
      text: "Get Shared Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 2,
    title: "VPS Hosting",
    description:
      "Scale with confidence using our VPS hosting services. A virtual private server with root access grants you dedicated resources and custom configurations, offering better performance and security as your business grows.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get VPS Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 3,
    title: "Dedicated Hosting",
    description:
      "Choose dedicated hosting solutions for unmatched reliability. With full control over dedicated servers, you get enterprise-grade, high-performance hosting designed for e-commerce platforms and high-traffic applications.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get Dedicated Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 4,
    title: "Cloud Hosting",
    description:
      "Experience the flexibility of our cloud web hosting, powered by a distributed server network. Scalable hosting allows you to instantly add resources and maintain uptime during traffic spikes, ensuring consistent speed.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get Cloud Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 5,
    title: "Managed Hosting",
    description:
      "Focus on your business while we handle updates, backups, and security. Our managed website hosting keeps your site monitored and optimized 24/7, giving you peace of mind and uninterrupted performance.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get Managed Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 6,
    title: "Reseller Hosting",
    description:
      "Start your own hosting business with our reseller hosting solutions. Get white-label branding and simple management tools to offer hosting packages to your own clients.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get Reseller Hosting",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
  {
    id: 7,
    title: "Domain Registration",
    description:
      "Secure your online identity with easy domain registration. Find and register the perfect name and keep your brand consistent across your website and email.",
    icon: <BagIcon />,
    isActive: false,
    button: {
      text: "Get Domain Registration",
      href: "#",
      className: "offer-btn primary",
      show: true,
    },
  },
];

export const websiteHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why the Right Website Hosting Matters for Your Business",
  description: [
    "Choosing the right hosting affects your site's speed, security, and ability to grow. A reliable platform keeps visitors engaged and data protected while ensuring your business stays online. Here's what strong hosting delivers:",
  ],
  items: [
    {
      id: "hosting-firstScroller",
      step: 1,
      title: "Speed & Performance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Fast website hosting reduces bounce rates and enhances user engagement. Quality web hosting ensures robust server performance and low latency, resulting in faster page load times and improved search rankings. Continuous performance optimization ensures your site operates efficiently as traffic grows.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Speed & Performance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "hosting-secondScroller",
      step: 2,
      title: "Security & Reliability",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Professional hosting services for websites come with built-in safeguards to protect your data. Secure hosting with firewalls, scans, and an uptime guarantee provides peace of mind. Regular backups, data protection protocols, and free SSL certificates build trust, while proactive site protection minimizes threats.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Security & Reliability",
        width: 669,
        height: 376,
      },
    },
    {
      id: "hosting-thirdScroller",
      step: 3,
      title: "Scalability & Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Scalable hosting allows you to add resources without downtime. With cloud hosting solutions, performance stays consistent even during traffic spikes. Adequate bandwidth and growth-ready infrastructure ensure your website remains stable and ready for future demand.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Scalability & Growth",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const websiteHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Website Hosting Services",
      href: "/website-hosting-services",
    },
  },
  heading: "Say Goodbye to Downtime With Reliable Website Hosting",
  description: [
    "Keep your business online with reliable website hosting built for speed and consistency. Our secure web hosting solutions protect your data and shield your site from downtime and threats.\n\nIn just minutes, you can start your hosting plan and get your site live, fast, and ready to serve visitors.",
  ],
  bullets: [],
  cta: {
    text: "Start My Hosting Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Website Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const websiteHostingServicesStatsData = [
  {
    id: 1,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
  },
  {
    id: 2,
    value: 24,
    suffix: "/7",
    label: "Expert Support",
  },
  {
    id: 3,
    value: 500,
    suffix: "+",
    label: "Businesses Hosted",
  },
  {
    id: 4,
    value: 1,
    suffix: "s",
    label: "Avg. Server Response",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const websiteHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Speed & Performance",
    description:
      "Fast website hosting reduces bounce rates and enhances user engagement. Quality web hosting ensures robust server performance and low latency, resulting in faster page load times and improved search rankings. Continuous performance optimization ensures your site operates efficiently as traffic grows.",
    icon: "uptime",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Security & Reliability",
    description:
      "Professional hosting services for websites come with built-in safeguards to protect your data. Secure hosting with firewalls, scans, and an uptime guarantee provides peace of mind. Regular backups, data protection protocols, and free SSL certificates build trust, while proactive site protection minimizes threats.",
    icon: "support",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Scalability & Growth",
    description:
      "Scalable hosting allows you to add resources without downtime. With cloud hosting solutions, performance stays consistent even during traffic spikes. Adequate bandwidth and growth-ready infrastructure ensure your website remains stable and ready for future demand.",
    icon: "scalable",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

// Industries Data
export const websiteHostingServicesIndustriesData = [
  {
    id: 1,
    title: "E-commerce",
    description:
      "Our hosting solutions power fast e-commerce stores with secure checkout, inventory management, and seamless payment processing. Built for high-traffic online businesses.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "HIPAA-compliant hosting with secure patient portals, medical data protection, and 99.9% uptime for critical healthcare applications and patient care systems.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Finance",
    description:
      "Bank-grade security hosting with SOC 2 compliance, encrypted data storage, and advanced monitoring for financial institutions and fintech applications.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Scalable hosting for educational institutions with LMS integration, student portals, and content delivery networks for seamless online learning experiences.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 5,
    title: "Media & Entertainment",
    description:
      "High-performance hosting optimized for media streaming, content delivery, and bandwidth-intensive applications with global CDN integration.",
    icon: "/assets/images/industry/media.svg",
  },
  {
    id: 6,
    title: "SaaS Applications",
    description:
      "Cloud-native hosting for SaaS platforms with auto-scaling, load balancing, and multi-tenant architecture support for growing software businesses.",
    icon: "/assets/images/industry/saas.svg",
  },
];

// Technologies Data
export const websiteHostingServicesTechnologiesData = [
  {
    id: 1,
    title: "AWS Cloud",
    description:
      "Leverage Amazon Web Services for scalable, secure, and reliable cloud hosting solutions with global infrastructure and enterprise-grade security.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Google Cloud",
    description:
      "Host on Google Cloud Platform with advanced machine learning capabilities, global network, and seamless integration with Google services.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Microsoft Azure",
    description:
      "Enterprise-grade hosting on Microsoft Azure with hybrid cloud capabilities, advanced security, and seamless Office 365 integration.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Docker",
    description:
      "Containerized hosting solutions using Docker for consistent deployment, easy scaling, and simplified application management across environments.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Kubernetes",
    description:
      "Orchestrated container hosting with Kubernetes for automated scaling, load balancing, and high availability across multiple servers.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "CDN Integration",
    description:
      "Global content delivery network integration for faster page loads, reduced latency, and improved user experience across all geographic locations.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
export const websiteHostingServicesIndustriesCardsData = [
  {
    title: "E-commerce",
    description:
      "Our hosting solutions power fast e-commerce stores with secure checkout, inventory management, and seamless payment processing. Built for high-traffic online businesses.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "E-commerce Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "HIPAA-compliant hosting with secure patient portals, medical data protection, and 99.9% uptime for critical healthcare applications and patient care systems.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Finance",
    description:
      "Bank-grade security hosting with SOC 2 compliance, encrypted data storage, and advanced monitoring for financial institutions and fintech applications.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Finance Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "Scalable hosting for educational institutions with LMS integration, student portals, and content delivery networks for seamless online learning experiences.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Education Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Media & Entertainment",
    description:
      "High-performance hosting optimized for media streaming, content delivery, and bandwidth-intensive applications with global CDN integration.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Media Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS Applications",
    description:
      "Cloud-native hosting for SaaS platforms with auto-scaling, load balancing, and multi-tenant architecture support for growing software businesses.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "SaaS Hosting",
    width: 71,
    height: 71,
  },
];

// Impact Section Data (for DevelopmentCards component)
export const websiteHostingServicesImpactSectionData = {
  heading: "Why the Right Website Hosting Matters for Your Business",
  showDescription: true,
  description:
    "Choosing the right hosting affects your site’s speed, security, and ability to grow. A reliable platform keeps visitors engaged and data protected while ensuring your business stays online. Here’s what strong hosting delivers:",
};

// Workflow Data (for StepSection component)
export const websiteHostingServicesWorkflowData = {
  title: "Our Process",
  description:
    "Our hosting process is designed to get your website online quickly, securely, and running at its best from day one. Here's how it works:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Assess Your Needs",
      description:
        "We start by reviewing your website requirements and providing a tailored hosting plan consultation. This ensures you receive the right resources and features to support your goals.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Set Up & Secure",
      description:
        "Our team handles server setup, SSL installation, and comprehensive security configurations to protect your data from the outset.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Optimize & Monitor",
      description:
        "We focus on performance optimization to boost site speed. With ongoing uptime monitoring and proactive support, we maintain reliability and prevent issues before they affect your visitors.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const websiteHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Industry-Leading Uptime",
    description:
      "We back every plan with an uptime guarantee and infrastructure designed for 99.9% availability, so visitors can consistently access your website.",
    icon: "uptime",
  },
  {
    id: 2,
    title: "24/7 Expert Support",
    description:
      "Our team is available around the clock with technical support and live chat hosting help, resolving issues quickly before they affect your business.",
    icon: "support",
  },
  {
    id: 3,
    title: "Scalable Infrastructure",
    description:
      "Our platform delivers cloud hosting scalability to grow with your needs. You can confidently handle traffic surges without downtime or performance loss.",
    icon: "scalable",
  },
  {
    id: 4,
    title: "Security-First Approach",
    description:
      "Your data and users stay protected with SSL encryption, firewall protection, and ongoing malware monitoring that guard against threats.",
    icon: "security",
  },
  {
    id: 5,
    title: "Transparent Pricing",
    description:
      "You get clear hosting plans with no hidden fees, so your costs stay predictable and transparent.",
    icon: "pricing",
  },
];

// FAQ Data
export const websiteHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why should I choose Website Digitals for hosting?",
    answer:
      "Website Digitals offers reliable website hosting with 99.9% uptime, secure infrastructure, and expert support available 24/7. Our hosting plans are designed to deliver speed, security, and scalability so your site stays online and ready to grow.",
  },
  {
    id: 2,
    question: "Does Website Digitals provide support if I face hosting issues?",
    answer:
      "Yes. Our support team is available 24/7 to help with server issues, performance concerns, and security questions. We provide quick resolutions through live chat and ticket-based assistance to keep your website running smoothly.",
  },
  {
    id: 3,
    question: "Can I upgrade my hosting plan later?",
    answer:
      "Absolutely. Website Digitals offers scalable hosting solutions, so you can upgrade from shared to VPS, dedicated, or cloud hosting as your business grows without any downtime during migration.",
  },
  {
    id: 4,
    question: "What are website hosting services?",
    answer:
      "Website hosting services are what make your website accessible online. They provide server space and technology to store your site's files, images, and data securely so that visitors can access your site anytime.",
  },
  {
    id: 5,
    question: "How does website hosting work?",
    answer:
      "When someone enters your domain name in a browser, their device connects to the hosting server where your website is stored. The server sends back your site's files so it loads quickly. Quality hosting ensures uptime, speed, and data security throughout this process.",
  },
  {
    id: 6,
    question: "What types of website hosting services does Website Digitals offer?",
    answer:
      "Website Digitals offers a full range of hosting options to fit different needs and budgets. Our services include shared hosting for small websites, VPS hosting with dedicated resources, dedicated hosting for maximum performance, cloud hosting for scalability, and managed hosting for businesses that want updates, backups, and security handled for them.",
  },
  {
    id: 7,
    question: "What is the difference between shared, VPS, and dedicated hosting?",
    answer:
      "Shared hosting is the most affordable option, with multiple sites sharing one server. It's best for small sites and blogs. VPS hosting allocates dedicated resources within a shared environment, offering enhanced performance and security, making it an ideal solution for growing businesses. Dedicated hosting, on the other hand, provides an entire server, delivering optimal speed, reliability, and full customization, making it well-suited for large, high-traffic websites.",
  },
  {
    id: 8,
    question: "How much bandwidth do I need for my website?",
    answer:
      "The bandwidth required depends on your website's monthly traffic and the size of its files. Small blogs may only need a few gigabytes per month, while e-commerce or media-heavy sites may require significantly more. Opt for a plan with scalable bandwidth to accommodate traffic growth without downtime.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const websiteHostingServicesSectionData = {
  heading: "Explore Our Range of Website Hosting Services",
  description:
    "Select the hosting solution that aligns with your specific needs and business stage. Each option offers the optimal balance of speed, security, and reliability to ensure your website performs at its best. Explore our offerings:",
  showDescription: true,
};

// Why Choose Us Section Data (Section 7)
export const websiteHostingServicesWhyChooseUsSectionData = {
  heading: "Why Businesses Trust Our Web Hosting Company",
  description:
    "Our customers choose us for reliability, security, and growth-ready infrastructure. Here's why:",
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const websiteHostingServicesIndustriesSectionData = {
  heading: "Sectors We Support",
  description:
    "We provide industry-focused hosting solutions that deliver secure, scalable, and high-performing platforms tailored to your business needs.",
  cta: {
    text: "Get My Hosting Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Workflow Section Data (Section 8)
export const websiteHostingServicesWorkflowSectionData = {
  heading: "Our Process",
  description:
    "Our hosting process is designed to get your website online quickly, securely, and running at its best from day one. Here's how it works:",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const websiteHostingServicesTechnologiesSectionData = {
  heading: "Innovative Technologies We Apply",
  description:
    "Our team leverages industry-leading platforms and frameworks to deliver secure, scalable, and future-ready hosting solutions. We choose the right technology stack for your business, ensuring reliable performance, smooth integrations, and a solution that grows with you.",
  showDescription: true,
  cta: {
    text: "See Tech in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const websiteHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Website Hosting Services",
      href: "/website-hosting-services",
    },
  },
  heading: "Say Goodbye to Downtime With Reliable Website Hosting",
  description: [
    "Keep your business online with reliable website hosting built for speed and consistency. Our secure web hosting solutions protect your data and shield your site from downtime and threats.",
    "",
    "In just minutes, you can start your hosting plan and get your site live, fast, and ready to serve visitors.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Website Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start My Hosting Plan",
    href: "#",
    className: "offer-btn primary",
  },
};
