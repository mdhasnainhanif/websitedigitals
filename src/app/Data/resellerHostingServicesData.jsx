import { BagIcon } from "@/icons";

// Metadata for Reseller Hosting Services
export const resellerHostingServicesMetadata = {
  title: "Reliable Reseller Hosting Services | Website Digitals",
  description:
    "With Website Digitals, you get transparent pricing, secure infrastructure, and white-label reseller hosting plans for agencies and entrepreneurs.",
  keywords: "reseller hosting service, reseller hosting services, reseller web hosting, white-label hosting services, white label web hosting, reseller hosting providers, best reseller hosting, cheap reseller hosting, managed reseller hosting, WordPress reseller hosting, cPanel reseller hosting, WHM reseller hosting, unlimited reseller hosting, reseller hosting plans, reseller hosting business, reseller hosting solutions, reseller hosting company, cloud reseller hosting, VPS reseller hosting, shared reseller hosting, dedicated reseller hosting, reseller hosting packages, buy reseller hosting, reseller hosting comparison, reseller hosting reviews, reseller hosting price, reseller hosting cost",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/reseller-hosting-services/",
  openGraph: {
    title: "Reliable Reseller Hosting Services | Website Digitals",
    description:
      "With Website Digitals, you get transparent pricing, secure infrastructure, and white-label reseller hosting plans for agencies and entrepreneurs.",
    url: "https://www.websitedigitals.com/website-hosting-services/reseller-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/reseller-hosting-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Reseller Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Reliable Reseller Hosting Services | Website Digitals",
    description:
      "With Website Digitals, you get transparent pricing, secure infrastructure, and white-label reseller hosting plans for agencies and entrepreneurs.",
    images: [
      "https://websitedigitals.com/assets/images/reseller-hosting-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/reseller-hosting-services/",
  },
};

export const resellerHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Reseller Hosting Services",
      href: "/website-hosting-services/reseller-hosting-services",
    },
  },
  heading: "Reseller Hosting Services for [[Agencies]] & [[Entrepreneurs]]",
  description: [
    "Most reseller hosting plans overload servers, conceal essential tools behind upgrades, and limit branding and scalability, resulting in slow sites and unhappy clients.\n\nAt Website Digitals, our reseller hosting services include cPanel and WHM access, white-label branding, free SSL, automated backups, and a 99.9% uptime guarantee.\n\nWhether you choose WordPress reseller hosting, cloud reseller hosting, or VPS reseller hosting, you get scalable infrastructure and 24/7 expert support so you can focus on building your client base instead of troubleshooting servers.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Scale My Hosting Business",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "wordpress-reseller", label: "WordPress Reseller Hosting" },
      { value: "cloud-reseller", label: "Cloud Reseller Hosting" },
      { value: "vps-reseller", label: "VPS Reseller Hosting" },
      { value: "cpanel-reseller", label: "cPanel Reseller Hosting" },
      { value: "whm-reseller", label: "WHM Reseller Hosting" },
      { value: "white-label", label: "White-Label Hosting" },
    ],
    initialValues: {
      help: "wordpress-reseller",
    },
  },
};

export const resellerHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Reseller Hosting Services",
      href: "/website-hosting-services/reseller-hosting-services",
    },
  },
  heading: "Turn Hosting into Your Next Revenue Stream",
  description: [
    "Join hundreds of resellers who trust our platform for speed, security, and support.",
  ],
  bullets: [],
  cta: {
    text: "Host Clients Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Reseller Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const resellerHostingServicesStatsData = [
  {
    id: 1,
    value: 250,
    suffix: "+",
    label: "Agencies Onboard",
  },
  {
    id: 2,
    value: 100,
    suffix: "%",
    label: "White-Label Access",
  },
  {
    id: 3,
    value: 99.9,
    suffix: "%",
    label: "Reliable Servers",
  },
  {
    id: 4,
    value: 98,
    suffix: "%",
    label: "Client Retention",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const resellerHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Complete White-Label Control",
    description:
      "The ability to deliver hosting under your own brand is a core benefit of reseller hosting. With white-label branding, private name servers, and custom client portals, you can create a professional, consistent experience that keeps the provider invisible and strengthens your business identity.",
    icon: "white-label",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/hosting-services-reseller/section-1/complete white-label-control.svg",
  },
  {
    id: 2,
    title: "Fully Managed Infrastructure",
    description:
      "Reliable reseller hosting includes managed infrastructure, where servers are monitored 24/7, accounts are provisioned instantly, and updates run automatically. This ensures stable performance and frees you from handling server administration, letting you focus on building and supporting your client base.",
    icon: "infrastructure",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/hosting-services-reseller/section-1/fully-managed-infrastructure.svg",
  },
  {
    id: 3,
    title: "Security & Compliance Built-In",
    description:
      "Features like DDoS protection, proactive malware scanning, and PCI DSS compliance protect websites from common threats and help maintain data security. This reduces downtime and supports businesses that handle online transactions.",
    icon: "security",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/hosting-services-reseller/section-1/security-&-compliance-built-In.svg",
  },
  {
    id: 4,
    title: "Easy Scalability & Resource Allocation",
    description:
      "As your client base grows, scalable plans become essential. Flexible resource allocation and unlimited cPanel accounts allow you to add new clients and expand services without disruptive migrations or performance issues, keeping operations smooth and reliable.",
    icon: "scalability",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
    image: "/assets/images/hosting-services-reseller/section-1/easy-scalability-&-resource-allocation.svg",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const resellerHostingServicesImpactSectionData = {
  heading: "Why Reseller Hosting Services Matter for Your Business",
  showDescription: false,
};

// Services Data
export const resellerHostingServicesData = [
  {
    id: 1,
    title: "Email Hosting & Spam Protection",
    description:
      "Every plan includes business email hosting with webmail access, spam filtering, and easy account management. Your clients can run professional email accounts on your hosting platform without relying on third-party providers.",
    icon: <BagIcon />,
    isActive: true,
    image: "/assets/images/hosting-services-reseller/whats-included/email-hosting-spam-protection.svg",
  },
  {
    id: 2,
    title: "API & Third-Party Integrations",
    description:
      "Our platform supports API access for automation and integrates with popular tools like billing software, CDN providers, and analytics dashboards, helping you streamline workflows.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/hosting-services-reseller/whats-included/api-third-party-integrations.svg",
  },
  {
    id: 3,
    title: "Account Isolation & Security Layers",
    description:
      "Each client account is hosted in a secure and isolated environment with separate resources, preventing one compromised site from affecting others on the same server.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/hosting-services-reseller/whats-included/account-isolation-security-layers.svg",
  },
  {
    id: 4,
    title: "Resource Usage Monitoring",
    description:
      "Real-time monitoring dashboards let you see CPU, memory, and bandwidth usage per client account. This helps you allocate resources efficiently and prevent overuse before it affects performance.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/hosting-services-reseller/whats-included/resource-usage-monitoring.svg",
  },
  {
    id: 5,
    title: "Staging & Cloning Tools",
    description:
      "Built-in staging environments allow you to test updates and changes before going live. This reduces risk and gives agencies a safe way to deliver high-quality, error-free websites to clients.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/hosting-services-reseller/whats-included/staging-cloning-tools.svg",
  },
];

// Industries Data
export const resellerHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Digital Marketing",
    description:
      "Our reseller hosting for digital marketing agencies supports campaign-heavy websites with reliable uptime, private branding, and scalable resources, helping you deliver consistent client experiences and manage multiple projects with ease.",
    icon: "/assets/images/industry/digital-marketing.svg",
  },
  {
    id: 2,
    title: "Creative Studios",
    description:
      "We provide reseller hosting for creative studios that need staging environments, version control, and fast performance for asset-heavy sites. Manage client portfolios under your brand while ensuring secure, high-quality project delivery.",
    icon: "/assets/images/industry/creative.svg",
  },
  {
    id: 3,
    title: "SaaS",
    description:
      "With reseller hosting for SaaS startups, you get stable infrastructure, API integrations, and automated scaling. Deliver reliable hosting to clients, maintain uptime guarantees, and focus on product innovation while we handle the backend.",
    icon: "/assets/images/industry/saas.svg",
  },
  {
    id: 4,
    title: "Startups",
    description:
      "Our reseller hosting for startups offers predictable costs, free migrations, and white-label branding. Launch quickly with ready-to-scale hosting plans, automation tools, and 24/7 support designed to grow with your business.",
    icon: "/assets/images/industry/startup.svg",
  },
  {
    id: 5,
    title: "Small Business",
    description:
      "We make reseller hosting for small businesses simple and affordable with bundled essentials like SSL, email hosting, and backups. Offer professional-grade hosting under your brand, helping local businesses go online with confidence.",
    icon: "/assets/images/industry/small-business.svg",
  },
  {
    id: 6,
    title: "Bloggers",
    description:
      "Our reseller hosting for bloggers includes one-click WordPress installs, backups, and CDN support. Manage multiple blogs securely, handle traffic spikes, and ensure fast load times for readers worldwide.",
    icon: "/assets/images/industry/blogging.svg",
  },
];

// Scroll Section Data
export const resellerHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Agencies & Entrepreneurs Trust Us",
  description: [
    "",
  ],
  showDescription: false,
  items: [
    {
      id: "reseller-firstScroller",
      step: 1,
      title: "Transparent Pricing",
      icon: "/assets/images/hosting-services-reseller/why/transparent-pricing.svg",
      paragraphs: [
        "Many providers lure resellers with low entry prices but add costs for backups, SSL, and account creation. We offer transparent pricing with everything included upfront, ensuring predictable costs and a clear path to profitability.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376,
      },
    },
    {
      id: "reseller-secondScroller",
      step: 2,
      title: "Optimized Server Performance",
      icon: "/assets/images/hosting-services-reseller/why/optimized-server-performance.svg",
      paragraphs: [
        "Competitors often run overloaded servers that slow websites and hurt client satisfaction. With SSD and NVMe storage, optimized PHP configurations, and server-level caching, every site runs faster and handles higher traffic loads without performance dips.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Optimized Server Performance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "reseller-thirdScroller",
      step: 3,
      title: "Free Website Migration & Setup",
      icon: "/assets/images/hosting-services-reseller/why/free-website-migration-setup.svg",
      paragraphs: [
        "Moving existing clients to a new provider can be stressful, but our free migration services transfer websites, databases, and emails with zero downtime. This makes it easy to switch and consolidate hosting under one branded platform.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Free Website Migration & Setup",
        width: 669,
        height: 376,
      },
    },
    {
      id: "reseller-forthScroller",
      step: 4,
      title: "Developer-Friendly Hosting Environment",
      icon: "/assets/images/hosting-services-reseller/why/developer-friendly-hosting-environment.svg",
      paragraphs: [
        "For developers and agencies managing custom websites, our platform supports multiple PHP versions, SSH access, and Git integration, making it easy to deploy updates and maintain applications without restrictions.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Developer-Friendly Hosting Environment",
        width: 669,
        height: 376,
      },
    },
    {
      id: "reseller-fifthScroller",
      step: 5,
      title: "Global Data Center Options",
      icon: "/assets/images/hosting-services-reseller/why/global-data-center-options.svg",
      paragraphs: [
        "Most reseller hosting providers offer a single server location, but we provide access to multi-location data centers across the US and internationally. This reduces latency, improves load times, and delivers a better experience for geographically diverse client bases.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Global Data Center Options",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

// Workflow Data (for StepSection component)
export const resellerHostingServicesWorkflowData = {
  title: "How Our Reseller Hosting Works",
  showDescription: false,
  description:
    "",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Select Your Hosting Plan",
      description:
        "The first step is selecting the right plan based on your projected client base and resource needs. Our plans include disk space, bandwidth allocation, and account limits that can grow with you, ensuring you start with a setup that matches your business goals.",
      image: "/assets/images/hosting-services-reseller/hosting-works/select-your-hosting-plan.svg",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Set Up White-Label Branding",
      description:
        "Once your plan is active, you can customize your hosting environment with private name servers, branded control panels, and custom login pages. This step ensures that all client interactions reflect your business identity, not the upstream provider.",
      image: "/assets/images/hosting-services-reseller/hosting-works/setup-white-label-branding.svg",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Enable Billing & Automation",
      description:
        "Next, integrate billing software like WHMCS or ClientExec to automate invoices, payments, and renewals. This automation reduces manual work, streamlines client onboarding, and provides a professional experience from the very first transaction.",
      image: "/assets/images/hosting-services-reseller/hosting-works/enable-billing-automation.svg",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Create Accounts & Launch Sites",
      description:
        "After setup, you can begin creating client accounts, assigning resources, and deploying sites using one-click installers for WordPress or other CMS platforms. Each account is isolated to maintain security and performance consistency across your entire reseller environment.",
      image: "/assets/images/hosting-services-reseller/hosting-works/create-accounts-launchsites.svg",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Monitor & Scale Easily",
      description:
        "The final step is managing your business day-to-day. Use server monitoring tools to track performance, respond to client requests promptly, and upgrade resources as demand grows. With scalable infrastructure, you can expand seamlessly without downtime or migrations.",
      image: "/assets/images/hosting-services-reseller/hosting-works/monitor-scale-easily.svg",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const resellerHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Transparent Pricing",
    description:
      "Many providers lure resellers with low entry prices but add costs for backups, SSL, and account creation. We offer transparent pricing with everything included upfront, ensuring predictable costs and a clear path to profitability.",
    icon: "pricing",
  },
  {
    id: 2,
    title: "Optimized Server Performance",
    description:
      "Competitors often run overloaded servers that slow websites and hurt client satisfaction. With SSD and NVMe storage, optimized PHP configurations, and server-level caching, every site runs faster and handles higher traffic loads without performance dips.",
    icon: "performance",
  },
  {
    id: 3,
    title: "Free Website Migration & Setup",
    description:
      "Moving existing clients to a new provider can be stressful, but our free migration services transfer websites, databases, and emails with zero downtime. This makes it easy to switch and consolidate hosting under one branded platform.",
    icon: "migration",
  },
  {
    id: 4,
    title: "Developer-Friendly Hosting Environment",
    description:
      "For developers and agencies managing custom websites, our platform supports multiple PHP versions, SSH access, and Git integration, making it easy to deploy updates and maintain applications without restrictions.",
    icon: "developer",
  },
  {
    id: 5,
    title: "Global Data Center Options",
    description:
      "Most reseller hosting providers offer a single server location, but we provide access to multi-location data centers across the US and internationally. This reduces latency, improves load times, and delivers a better experience for geographically diverse client bases.",
    icon: "global",
  },
];

// FAQ Data
export const resellerHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for reseller hosting?",
    answer:
      "Website Digitals offers cPanel/WHM access, white-label branding, free SSL, backups, and 99.9% uptime. Our plans include free migrations, transparent pricing, and 24/7 support so you can focus on growing your client base.",
  },
  {
    id: 2,
    question: "Can Website Digitals migrate my clients?",
    answer:
      "Yes. We provide free website migrations, transferring sites, databases, and email accounts with zero downtime so you can start reselling under your brand quickly.",
  },
  {
    id: 3,
    question: "What is reseller hosting?",
    answer:
      "Reseller hosting is a service where you purchase hosting resources from a provider and resell them to your clients under your own brand. It lets agencies, freelancers, and entrepreneurs run a hosting business without managing physical servers.",
  },
  {
    id: 4,
    question: "How does reseller hosting work?",
    answer:
      "With reseller hosting, you get a master control panel like WHM to create and manage individual client accounts. You control disk space, bandwidth, and features while your hosting provider handles server infrastructure and maintenance.",
  },
  {
    id: 5,
    question: "Which hosting is better, reseller hosting or VPS?",
    answer:
      "Reseller hosting is simpler, with server management handled for you. A VPS offers root access and more control but requires technical knowledge. Reseller hosting is better for client management and ease of use, while VPS hosting suits advanced users needing full customization.",
  },
  {
    id: 6,
    question: "How to start a reseller hosting business?",
    answer:
      "Choose a provider offering white-label reseller hosting, select a plan that matches your resource needs, set up billing software like WHMCS, and begin adding client accounts. Most providers, including Website Digitals, offer free migrations to help you get started.",
  },
  {
    id: 7,
    question: "Is there a reseller hosting guide for beginners?",
    answer:
      "Yes, many providers offer tutorials and documentation for first-time resellers. Website Digitals provides setup guides, video walkthroughs, and 24/7 support to help beginners launch and manage their reseller hosting business with confidence.",
  },
  {
    id: 8,
    question: "What's the difference between white-label and branded reseller hosting?",
    answer:
      "White-label reseller hosting allows you to operate under your own brand, hiding the provider's details with private name servers and customizable client portals. In contrast, branded reseller hosting still displays the parent provider's branding, which can limit your ability to create a fully independent hosting business.",
  },
  {
    id: 9,
    question: "What is the best reseller hosting for agencies?",
    answer:
      "The best reseller hosting for agencies includes white-label branding, automated backups, scalable resources, and 24/7 support. Website Digitals delivers these features along with cPanel/WHM access, making it a strong choice for agencies managing multiple clients.",
  },
  {
    id: 10,
    question: "What are top rated reseller hosting services?",
    answer:
      "Top rated reseller hosting services stand out through consistent uptime, positive client reviews, and trusted infrastructure. Website Digitals is recognized as one of the top rated reseller hosting services, with 250+ agencies onboard and a 98% client retention rate backed by 99.9% uptime.",
  },
  {
    id: 11,
    question: "What is a premium reseller hosting service?",
    answer:
      "A premium reseller hosting service offers advanced features like NVMe storage, developer-friendly tools, and global data centers. Website Digitals delivers a premium reseller hosting service with cPanel/WHM access, Git and SSH support, and free migrations to ensure high performance for demanding businesses.",
  },
  {
    id: 12,
    question: "What is an affordable reseller hosting service?",
    answer:
      "An affordable reseller hosting service provides reliable hosting without hidden costs or compromises on quality. Website Digitals offers an affordable reseller hosting service with transparent pricing, free SSL, bundled email hosting, and 24/7 support, helping entrepreneurs and startups scale within budget.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const resellerHostingServicesSectionData = {
  heading: "What's Included in Our Reseller Hosting Plans",
  description:
    "",
  showDescription: false,
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const resellerHostingServicesIndustriesSectionData = {
  heading: "Markets We Serve",
  description:
    "We provide reliable reseller hosting for agencies, startups, and entrepreneurs, ensuring performance, flexibility, and seamless scalability for your brand.",
  cta: {
    text: "Host Clients Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const resellerHostingServicesIndustriesCardsData = [
  {
    title: "Digital Marketing",
    description:
      "Our reseller hosting for digital marketing agencies supports campaign-heavy websites with reliable uptime, private branding, and scalable resources, helping you deliver consistent client experiences and manage multiple projects with ease.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/digital-marketing.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/digital-marketing.svg`,
    alt: "Digital Marketing Reseller Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Creative Studios",
    description:
      "We provide reseller hosting for creative studios that need staging environments, version control, and fast performance for asset-heavy sites. Manage client portfolios under your brand while ensuring secure, high-quality project delivery.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/creative-studios.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/creative-studios.svg`,
    alt: "Creative Studios Reseller Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "With reseller hosting for SaaS startups, you get stable infrastructure, API integrations, and automated scaling. Deliver reliable hosting to clients, maintain uptime guarantees, and focus on product innovation while we handle the backend.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/saas.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/saas.svg`,
    alt: "SaaS Reseller Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Startups",
    description:
      "Our reseller hosting for startups offers predictable costs, free migrations, and white-label branding. Launch quickly with ready-to-scale hosting plans, automation tools, and 24/7 support designed to grow with your business.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/startups.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/startups.svg`,
    alt: "Startups Reseller Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Small Business",
    description:
      "We make reseller hosting for small businesses simple and affordable with bundled essentials like SSL, email hosting, and backups. Offer professional-grade hosting under your brand, helping local businesses go online with confidence.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/small-business.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/small-business.svg`,
    alt: "Small Business Reseller Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Bloggers",
    description:
      "Our reseller hosting for bloggers includes one-click WordPress installs, backups, and CDN support. Manage multiple blogs securely, handle traffic spikes, and ensure fast load times for readers worldwide.",
    imgOriginal: `/assets/images/hosting-services-reseller/industries/original/bloggers.svg`,
    imgWhite: `/assets/images/hosting-services-reseller/industries/hover/bloggers.svg`,
    alt: "Bloggers Reseller Hosting",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const resellerHostingServicesWhyChooseUsSectionData = {
  heading: "Why Agencies & Entrepreneurs Trust Us",
  description:
    "When choosing a reseller hosting provider, trust and reliability are paramount. Our platform delivers the performance, security, and support that agencies and entrepreneurs need to build successful hosting businesses.",
};

// Workflow Section Data (Section 8)
export const resellerHostingServicesWorkflowSectionData = {
  heading: "How Our Reseller Hosting Works",
  description:
    "Getting started with reseller hosting is straightforward when you have the right partner. Our proven process ensures you can launch your hosting business quickly and efficiently.",
};

// Final CTA Section Data (Section 11)
export const resellerHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Reseller Hosting Services",
      href: "/website-hosting-services/reseller-hosting-services",
    },
  },
  heading: "Turn Hosting into Your Next Revenue Stream",
  description: [
    "Join hundreds of resellers who trust our platform for speed, security, and support.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Reseller Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Host Clients Now",
    href: "#",
    className: "offer-btn primary",
  },
};
