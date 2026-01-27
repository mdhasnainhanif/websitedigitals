import { BagIcon } from "@/icons";

// Metadata for VPS Hosting Services
export const vpsHostingServicesMetadata = {
  title: "Fix Site Issues with VPS Hosting Services | Website Digitals",
  description:
    "Solve downtime, speed, and growth issues in one step. Website Digitals VPS hosting services give you control and reliability. Get started now!",
  keywords: "VPS hosting, virtual private server, managed VPS, cloud VPS, dedicated resources, root access, scalable hosting",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/vps-hosting-services/",
  openGraph: {
    title: "Fix Site Issues with VPS Hosting Services | Website Digitals",
    description:
      "Solve downtime, speed, and growth issues in one step. Website Digitals VPS hosting services give you control and reliability. Get started now!",
    url: "https://www.websitedigitals.com/website-hosting-services/vps-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/vps-hosting-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "VPS Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Fix Site Issues with VPS Hosting Services | Website Digitals",
    description:
      "Solve downtime, speed, and growth issues in one step. Website Digitals VPS hosting services give you control and reliability. Get started now!",
    images: [
      "https://websitedigitals.com/assets/images/vps-hosting-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/vps-hosting-services/",
  },
};

export const vpsHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "VPS Hosting Services",
      href: "/website-hosting-services/vps-hosting-services",
    },
  },
  heading: "Secure, Scalable, and [[Fast]] VPS Hosting Services",
  description: [
    "Slow shared hosting and downtime can hold your website back and frustrate your visitors.\n\nAt Website Digitas, our VPS hosting service delivers dedicated resources, full root access, and fast, secure performance with 24/7 expert support. Choose managed VPS hosting or cloud VPS hosting to scale as your traffic grows.",
  ],
  isCta: true,
//   cta: false,
  image: null,
  formConfig: {
    buttonText: "Get VPS Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "managed-vps", label: "Managed VPS Hosting" },
      { value: "unmanaged-vps", label: "Unmanaged VPS Hosting" },
      { value: "cloud-vps", label: "Cloud VPS Hosting" },
    ],
    initialValues: {
      help: "managed-vps",
    },
  },
};

export const vpsHostingServicesData = [
  {
    id: 1,
    title: "Managed VPS Hosting",
    description:
      "Our managed VPS hosting plans handle the technical work so you can focus on growing your website or business. Each managed server solution includes proactive monitoring, automated updates, and 24/7 support to keep your server optimized and secure without manual effort.",
    icon: <BagIcon />,
    isActive: true,
    image: "/assets/images/vps-hosting-service/tailored-to-your-needs/managed-vps-hosting.svg",
  },
  {
    id: 2,
    title: "Unmanaged VPS Hosting",
    description:
      "For developers and technical teams, unmanaged VPS hosting offers full control and flexibility. This developer-friendly VPS provides root access, SSH control, and custom configuration options so you can build and deploy applications exactly as needed.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/vps-hosting-service/tailored-to-your-needs/unmanaged-vps-hosting.svg",
  },
  {
    id: 3,
    title: "OS & Resource Customization",
    description:
      "Choose how your VPS is configured with Linux VPS hosting or Windows VPS hosting options. Our flexible VPS plans let you select CPU, RAM, and storage, with control panels like cPanel or Plesk available for easy management and memory customization as your needs grow.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/vps-hosting-service/tailored-to-your-needs/os-resource-customization.svg",
  },
  {
    id: 4,
    title: "Optional Add-Ons and Upgrades",
    description:
      "Enhance any plan with add-ons like extra storage, premium backups, or advanced security tools. Select what you need at checkout for a tailored VPS setup that fits your business.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/vps-hosting-service/tailored-to-your-needs/optional-add-ons-and-upgrades.svg",
  },
];

export const vpsHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Businesses Trust Our VPS Hosting",
  description: [
    "VPS hosting should deliver reliability, speed, security, and support you can count on. Here's how we make sure your website stays online, loads quickly, and scales as your needs grow.",
  ],
  items: [
    {
      id: "vps-firstScroller",
      step: 1,
      title: "99.99% Uptime Guarantee",
      icon: "/assets/images/vps-hosting-service/scroller/99.99-uptime-guarantee.svg",
      paragraphs: [
        "Our 99.99% uptime guarantee keeps your site available with minimal interruptions. This reliable VPS hosting setup uses network redundancy, proactive monitoring, and failover protection to restore service quickly if issues arise.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "99.99% Uptime Guarantee",
        width: 669,
        height: 376,
      },
    },
    {
      id: "vps-secondScroller",
      step: 2,
      title: "High-Performance SSD Storage",
      icon: "/assets/images/vps-hosting-service/scroller/high-performance-ssd-storage.svg",
      paragraphs: [
        "Every plan includes SSD VPS hosting for faster data processing and quicker server response. Optimized read/write speeds and lower latency mean faster load times and a smoother user experience.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "High-Performance SSD Storage",
        width: 669,
        height: 376,
      },
    },
    {
      id: "vps-thirdScroller",
      step: 3,
      title: "DDoS Protection & Advanced Security",
      icon: "/assets/images/vps-hosting-service/scroller/ddos-protection-advanced-security.svg",
      paragraphs: [
        "Our secure VPS hosting uses layered defenses to protect your site. Firewalls, intrusion detection, and continuous malware scanning keep your data safe around the clock.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "DDoS Protection & Advanced Security",
        width: 669,
        height: 376,
      },
    },
    {
      id: "vps-forthScroller",
      step: 4,
      title: "24/7 Expert Support",
      icon: "/assets/images/vps-hosting-service/scroller/24-7-expert support.svg",
      paragraphs: [
        "Our VPS hosting support team is available anytime. Get live chat help, proactive issue monitoring, and direct troubleshooting to resolve problems fast.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "24/7 Expert Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "vps-fifthScroller",
      step: 5,
      title: "Easy Scalability & Migration",
      icon: "/assets/images/vps-hosting-service/scroller/easy-scalability-migration.svg",
      paragraphs: [
        "Scale resources instantly with our scalable VPS solutions with no downtime required. Our VPS migration service makes switching from another provider simple, and cloud scalability is available to support future growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Easy Scalability & Migration",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const vpsHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "VPS Hosting Services",
      href: "/website-hosting-services/vps-hosting-services",
    },
  },
  heading: "Secure Your VPS Before Traffic Spikes",
  description: [
    "Don't wait until your site slows down or crashes under pressure. Buy VPS hosting, finish your hosting signup, and get instant server deployment so your site is ready for the next traffic surge.",
  ],
  bullets: [],
  cta: {
    text: "Start Hosting in Minutes",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "VPS Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const vpsHostingServicesStatsData = [
  {
    id: 1,
    value: 99.99,
    suffix: "%",
    label: "Uptime",
  },
  {
    id: 2,
    value: 24,
    suffix: "/7",
    label: "Support",
  },
  {
    id: 3,
    value: 150,
    suffix: "+",
    label: "Sites Hosted",
  },
  {
    id: 4,
    value: 5,
    suffix: " Min Setup",
    label: "<5 Min Setup",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const vpsHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Dedicated Resources",
    description:
      "With dedicated resources, your site runs in an isolated environment, ensuring stable VPS performance during traffic spikes. Guaranteed CPU cores, optimized memory allocation, and SSD hosting deliver faster load times and reliable uptime without resource drain from other accounts.",
    icon: "podcast",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
    image: "/assets/images/vps-hosting-service/section1/dedicated-resources.svg",
  },
  {
    id: 2,
    title: "Security & Root Access",
    description:
      "Secure VPS hosting gives you control and protection in one solution. Use root access control to configure your server while advanced firewalls, malware scanning, and data protection keep your site secure.",
    icon: "saas",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-6",
    image: "/assets/images/vps-hosting-service/section1/security-root-access.svg",
  },
  {
    id: 3,
    title: "Scalable Growth",
    description:
      "A scalable VPS hosting plan lets you adjust resources whenever needed. Easily add storage, increase CPU, or upgrade server plan, with the option to expand into cloud VPS hosting as your business grows.",
    icon: "gym",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
    image: "/assets/images/vps-hosting-service/section1/scalable-growth.svg",
  },
  {
    id: 4,
    title: "Improved Website Stability",
    description:
      "Dedicated server space keeps your applications running smoothly without interference. This isolation improves server health monitoring, reduces downtime, and maintains consistent performance under heavy load.",
    icon: "tutoring",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
    image: "/assets/images/vps-hosting-service/section1/improved-website-stability.svg",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const vpsHostingServicesImpactSectionData = {
  heading: "Why VPS Hosting Is the Right Choice",
  showDescription: true,
  description:
    "Choosing VPS hosting gives you performance, security, and flexibility that shared hosting can't offer. It's the right solution for businesses and websites that need consistent speed, control, and scalability as they grow.",
  cta: null,
};

// Industries Data
export const vpsHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Ecommerce",
    description:
      "Our VPS hosting for ecommerce sites delivers fast page loads and secure transactions. Scalable resources maintain performance during high-traffic sales and ensure smooth checkout experiences.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "SaaS",
    description:
      "Choose VPS hosting for SaaS companies to ensure stable applications and uninterrupted service. Our infrastructure supports flexible scaling and robust data protection for growing user bases.",
    icon: "/assets/images/industry/saas.svg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "With VPS hosting for real estate portals, handle large databases and high-resolution listings efficiently. Reliable uptime and fast performance keep property searches responsive for buyers and agents.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 4,
    title: "Fintech",
    description:
      "Our VPS hosting for fintech startups safeguards sensitive data with strong security and compliance features. High-speed performance supports seamless transactions and builds customer trust.",
    icon: "/assets/images/industry/fintech.svg",
  },
  {
    id: 5,
    title: "Gaming",
    description:
      "Use VPS hosting for gaming servers to maintain low latency and consistent uptime. Scalable resources let you expand easily as your player community grows.",
    icon: "/assets/images/industry/gaming.svg",
  },
  {
    id: 6,
    title: "Digital Marketing",
    description:
      "Our VPS hosting for digital marketing supports data-driven campaigns and multiple clients with reliable uptime and flexible storage to keep projects running efficiently.",
    icon: "/assets/images/industry/digital-marketing.svg",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
export const vpsHostingServicesIndustriesCardsData = [
  {
    title: "Ecommerce",
    description:
      "Our VPS hosting for ecommerce sites delivers fast page loads and secure transactions. Scalable resources maintain performance during high-traffic sales and ensure smooth checkout experiences.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/ecommerce.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/ecommerce.svg`,
    alt: "Ecommerce VPS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "Choose VPS hosting for SaaS companies to ensure stable applications and uninterrupted service. Our infrastructure supports flexible scaling and robust data protection for growing user bases.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/saas.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/saas.svg`,
    alt: "SaaS VPS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "With VPS hosting for real estate portals, handle large databases and high-resolution listings efficiently. Reliable uptime and fast performance keep property searches responsive for buyers and agents.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/real-estate.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/real-estate.svg`,
    alt: "Real Estate VPS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Fintech",
    description:
      "Our VPS hosting for fintech startups safeguards sensitive data with strong security and compliance features. High-speed performance supports seamless transactions and builds customer trust.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/fintech.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/fintech.svg`,
    alt: "Fintech VPS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Gaming",
    description:
      "Use VPS hosting for gaming servers to maintain low latency and consistent uptime. Scalable resources let you expand easily as your player community grows.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/gaming.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/gaming.svg`,
    alt: "Gaming VPS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Digital Marketing",
    description:
      "Our VPS hosting for digital marketing supports data-driven campaigns and multiple clients with reliable uptime and flexible storage to keep projects running efficiently.",
    imgOriginal: `/assets/images/vps-hosting-service/businesses-we-support/original/digital-marketing.svg`,
    imgWhite: `/assets/images/vps-hosting-service/businesses-we-support/hover/digital-marketing.svg`,
    alt: "Digital Marketing VPS Hosting",
    width: 71,
    height: 71,
  },
];

// Workflow Data (for StepSection component)
export const vpsHostingServicesWorkflowData = {
  title: "Our Process",
  description:
    "Getting started with VPS hosting should be straightforward. Here's how we take you from plan selection to a live, optimized server.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Choose Your VPS Plan",
      description:
        "Start by selecting the plan that best fits your project needs. Our VPS hosting plan selection process makes it easy to compare resources and features. Once you've chosen the right plan, you can quickly order VPS server access and move on to setup.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Configure & Set Up Server",
      description:
        "After purchase, complete your VPS setup by selecting your operating system and adjusting resources as needed. Finalize your control panel configuration and perform a root access setup to enable full server control when required.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Launch & Monitor",
      description:
        "When setup is complete, you can launch your website and begin tracking performance with integrated server monitoring tools. We support ongoing performance optimization so your site continues to run efficiently as it grows.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const vpsHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "99.99% Uptime Guarantee",
    description:
      "Our 99.99% uptime guarantee keeps your site available with minimal interruptions. This reliable VPS hosting setup uses network redundancy, proactive monitoring, and failover protection to restore service quickly if issues arise.",
    icon: "performance",
  },
  {
    id: 2,
    title: "High-Performance SSD Storage",
    description:
      "Every plan includes SSD VPS hosting for faster data processing and quicker server response. Optimized read/write speeds and lower latency mean faster load times and a smoother user experience.",
    icon: "security",
  },
  {
    id: 3,
    title: "DDoS Protection & Advanced Security",
    description:
      "Our secure VPS hosting uses layered defenses to protect your site. Firewalls, intrusion detection, and continuous malware scanning keep your data safe around the clock.",
    icon: "scalable",
  },
  {
    id: 4,
    title: "24/7 Expert Support",
    description:
      "Our VPS hosting support team is available anytime. Get live chat help, proactive issue monitoring, and direct troubleshooting to resolve problems fast.",
    icon: "pricing",
  },
  {
    id: 5,
    title: "Easy Scalability & Migration",
    description:
      "Scale resources instantly with our scalable VPS solutions with no downtime required. Our VPS migration service makes switching from another provider simple, and cloud scalability is available to support future growth.",
    icon: "support",
  },
];

// FAQ Data
export const vpsHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why should I choose Website Digitals for VPS hosting?",
    answer:
      "Website Digitals provides VPS hosting with a 99.99% SLA-backed uptime guarantee, enterprise-grade security, and fast server deployment. Our team is available 24/7 to keep your site online and performing reliably, whether you choose managed or unmanaged VPS solutions.",
  },
  {
    id: 2,
    question: "Does Website Digitals offer managed VPS hosting?",
    answer:
      "Yes. We offer managed VPS hosting for businesses that prefer hands-off server management. Our team handles monitoring, updates, and maintenance so you can focus on running your business.",
  },
  {
    id: 3,
    question: "Can I migrate my existing website to Website Digitals VPS hosting?",
    answer:
      "Absolutely. We provide free migration assistance to move your website from your current host to our VPS servers with minimal downtime. Our team ensures everything is working properly before your site goes live.",
  },
  {
    id: 4,
    question: "What is VPS hosting and how does it work?",
    answer:
      "A VPS (Virtual Private Server) uses virtualization technology to divide a physical server into multiple isolated environments. Each VPS has its own CPU, RAM, and storage, giving you dedicated resources and better performance than shared hosting.",
  },
  {
    id: 5,
    question: "What are the benefits of using a VPS server?",
    answer:
      "A VPS server offers dedicated resources, faster speed, and flexibility to customize your hosting environment. It's ideal for growing websites, eCommerce stores, and businesses that need uptime guarantees or root access for custom applications.",
  },
  {
    id: 6,
    question: "Is VPS hosting good for eCommerce?",
    answer:
      "Yes. VPS hosting is recommended for eCommerce websites because it supports secure transactions, handles high traffic without slowdowns, and ensures compliance with SSL requirements. This improves customer trust and helps boost conversions.",
  },
  {
    id: 7,
    question: "How secure is VPS hosting?",
    answer:
      "VPS hosting is secure because each server environment is isolated. You can enable firewalls, malware scanning, and custom security rules to protect your data. Look for a provider that offers DDoS protection and active monitoring for maximum safety.",
  },
  {
    id: 8,
    question: "How do I set up a VPS server for my website?",
    answer:
      "After you buy a VPS hosting service, you'll receive login credentials to access your control panel. From there, complete your VPS setup, configure your OS and resources, and deploy your site files. You can also order managed VPS hosting if you prefer our team to handle setup and ongoing maintenance for you.",
  },
  {
    id: 9,
    question: "What VPS server subscription plans are available?",
    answer:
      "VPS server subscription plans are available in tiers based on CPU, RAM, storage, and bandwidth. You can choose monthly or yearly billing options. You may also sign up for Windows VPS hosting or Linux VPS hosting, depending on your preferred environment.",
  },
  {
    id: 10,
    question: "How can I order and get started quickly?",
    answer:
      "You can place your order online and choose between managed or unmanaged VPS plans. Once confirmed, your VPS is provisioned quickly, allowing you to log in, finish setup, and launch your website without delay.",
  },
  {
    id: 11,
    question: "What is included in a VPS hosting service plan?",
    answer:
      "A VPS hosting service plan provides guaranteed CPU, RAM, and storage with options to add features like backups or security tools. Each plan is built to match different project requirements, helping you choose the right balance of performance and control.",
  },
  {
    id: 12,
    question: "Does Website Digitals provide VPS hosting service with backups?",
    answer:
      "Yes, we offer VPS hosting service with backups to protect your files and databases. Our automated backup system ensures quick recovery from data loss, giving you confidence that your website and applications remain secure at all times.",
  },
  {
    id: 13,
    question: "Can I get a VPS hosting service with root access?",
    answer:
      "Our VPS hosting service with root access gives you full administrative control of your server. This means you can install custom applications, configure security policies, and manage performance settings to build the exact hosting environment you need.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const vpsHostingServicesSectionData = {
  heading: "Our VPS Hosting Services Tailored to Your Needs",
  description:
    "Finding the right VPS hosting plan is about more than server space. It's about aligning resources with your project's goals and choosing the right mix of control, performance, and flexibility. Explore your VPS options below:",
  showDescription: true,
  cta: {
    label: "Choose VPS Plan Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const vpsHostingServicesIndustriesSectionData = {
  heading: "Businesses We Support with VPS Hosting",
  description:
    "We deliver VPS hosting solutions for all industries, ensuring fast, reliable, and scalable performance for online stores, SaaS platforms, and digital agencies.",
  cta: {
    text: "Get Your Custom VPS Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Why Choose Us Section Data (Section 7)
export const vpsHostingServicesWhyChooseUsSectionData = {
  heading: "Why Businesses Trust Our VPS Hosting",
  description:
    "VPS hosting should deliver reliability, speed, security, and support you can count on. Here's how we make sure your website stays online, loads quickly, and scales as your needs grow.",
};

// Workflow Section Data (Section 8)
export const vpsHostingServicesWorkflowSectionData = {
  heading: "Our Process",
  description:
    "Getting started with VPS hosting should be straightforward. Here's how we take you from plan selection to a live, optimized server.",
};

// Final CTA Section Data (Section 11)
export const vpsHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "VPS Hosting Services",
      href: "/website-hosting-services/vps-hosting-services",
    },
  },
  heading: "Secure Your VPS Before Traffic Spikes",
  description: [
    "Don't wait until your site slows down or crashes under pressure. Buy VPS hosting, finish your hosting signup, and get instant server deployment so your site is ready for the next traffic surge.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "VPS Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start Hosting in Minutes",
    href: "#",
    className: "offer-btn primary",
  },
};
