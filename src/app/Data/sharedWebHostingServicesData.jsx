import { BagIcon } from "@/icons";

// Metadata for Shared Web Hosting Services
export const sharedWebHostingServicesMetadata = {
  title: "Get Affordable and Secure Shared Web Hosting Services",
  description:
    "Grow with Website Digitals shared web hosting services. Get SSL, 24/7 support, and an uptime guarantee for smooth site performance. Start now!",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/shared-web-hosting-services/",
  openGraph: {
    title: "Get Affordable and Secure Shared Web Hosting Services",
    description:
      "Grow with Website Digitals shared web hosting services. Get SSL, 24/7 support, and an uptime guarantee for smooth site performance. Start now!",
    url: "https://www.websitedigitals.com/website-hosting-services/shared-web-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/shared-web-hosting-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Shared Web Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Affordable and Secure Shared Web Hosting Services",
    description:
      "Grow with Website Digitals shared web hosting services. Get SSL, 24/7 support, and an uptime guarantee for smooth site performance. Start now!",
    images: [
      "https://websitedigitals.com/assets/images/shared-web-hosting-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/shared-web-hosting-services/",
  },
};

export const sharedWebHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Shared Web Hosting Services",
      href: "/website-hosting-services/shared-web-hosting-services",
    },
  },
  heading: "Save Money and [[Stress]] with Shared Web Hosting Services",
  description: [
    "Slow pages drain revenue and trust as visitors leave before your site loads.\n\nAt Website Digitals, we provide shared web hosting services tailored for small business websites.\n\nOur plans deliver strong website performance with a 99.9% uptime guarantee in a secure hosting environment that grows with your traffic. We deliver:\n• Reliable hosting for consistent speed\n• Uptime guarantee for 24/7 availability\n• Secure hosting that scales with growth",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Launch Your Website Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "basic-shared", label: "Basic Shared Hosting" },
      { value: "business-shared", label: "Business Shared Hosting" },
      { value: "wordpress-shared", label: "WordPress Optimized Shared Hosting" },
    ],
    initialValues: {
      help: "basic-shared",
    },
  },
};

export const sharedWebHostingServicesData = [
  {
    id: 1,
    title: "Basic Shared Hosting",
    description:
      "Ideal for startups and smaller sites that need a cost-effective beginning. Powered by shared Linux hosting, it's a reliable entry-level web hosting choice for small site hosting with limited bandwidth, giving you a straightforward way to get your first site online.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Business Shared Hosting",
    description:
      "Built for growing businesses, this plan offers shared hosting for small business websites with SSL included for secure transactions. It also provides a free domain, extra security features, and a performance boost to support higher traffic.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "WordPress Optimized Shared Hosting",
    description:
      "Created for WordPress users, this shared hosting for WordPress plan is an optimized hosting plan with tuned servers for faster load times. It includes one-click WordPress installation and managed updates to keep your site secure and current.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const sharedWebHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Our Shared Hosting Stands Out for Businesses",
  description: [
    "Choosing the right hosting provider is about more than just getting online. It's about reliable performance, security, and support that grow with your business. Here's what sets our shared hosting apart:",
  ],
  items: [
    {
      id: "shared-firstScroller",
      step: 1,
      title: "Superior Server Performance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our optimized hosting environment delivers excellent server performance and website speed optimization for faster load times. Intelligent resource allocation reduces strain during traffic spikes, keeping downtime low and your site responsive.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Superior Server Performance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "shared-secondScroller",
      step: 2,
      title: "Robust Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Your website stays safe with advanced website security features, including an SSL certificate included with every plan. Built-in DDoS protection, automatic malware scanning, and an active firewall work together to safeguard your data and visitors.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Robust Security",
        width: 669,
        height: 376,
      },
    },
    {
      id: "shared-thirdScroller",
      step: 3,
      title: "Scalability Options",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Growth should never mean starting over. Our scalable shared hosting lets you add resources or upgrade hosting plan options as traffic increases. Whether you need a VPS upgrade or guided migration, our growth-ready hosting keeps pace with your business.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Scalability Options",
        width: 669,
        height: 376,
      },
    },
    {
      id: "shared-forthScroller",
      step: 4,
      title: "Transparent Pricing",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With us, you always know what you're paying for. We offer clear hosting prices and detailed shared hosting plan comparison tools to help you choose the right fit. There are no hidden fees, just straightforward pricing that delivers value for money.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376,
      },
    },
    {
      id: "shared-fifthScroller",
      step: 5,
      title: "Expert Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team provides expert hosting support and dependable technical support when you need it most. Access our knowledge base, live chat support, or reach out to our hosting helpdesk for quick answers and practical solutions.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Expert Support",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const sharedWebHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Shared Web Hosting Services",
      href: "/website-hosting-services/shared-web-hosting-services",
    },
  },
  heading: "Cut Costs, Reduce Downtime, and Boost Speed with Shared Hosting",
  description: [
    "Get online with a shared web hosting service backed by a 99.9% uptime guarantee and security-first infrastructure. Our website hosting solution includes SSL protection and 24/7 support, giving you reliable hosting you can trust from day one.",
  ],
  bullets: [],
  cta: {
    text: "Go Live Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Shared Web Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const sharedWebHostingServicesStatsData = [
  {
    id: 1,
    value: 99.9,
    suffix: "%",
    label: "Uptime Guarantee",
  },
  {
    id: 2,
    value: 10000,
    suffix: "+",
    label: "Websites Hosted",
  },
  {
    id: 3,
    value: 24,
    suffix: "/7",
    label: "Expert Support",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Free SSL Included",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const sharedWebHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Low Cost",
    description:
      "Start online with cheap shared hosting designed as affordable hosting plans for small businesses. This low-cost website hosting option delivers a budget-friendly hosting solution that performs well in any cost comparison, making it the ideal entry-level hosting choice for new websites.",
    icon: "podcast",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Easy to Set Up",
    description:
      "Get your site running quickly with shared hosting with cPanel and a one-click WordPress installer. This beginner-friendly web hosting solution offers an easy control panel and helpful managed hosting support so that you can focus on your content instead of setup tasks",
    icon: "saas",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "No Tech Hassle",
    description:"Enjoy complete peace of mind with customer support for hosting, 24/7 support, proactive server monitoring, and a proven uptime guarantee that keeps your website available around the clock.",
    icon: "gym",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Room to Grow",
    description:"Choose scalable hosting plans that adapt to your needs. With flexible resource allocation and easy upgrade options, your site can handle more visitors while maintaining consistent shared hosting uptime and reliable performance.",
    icon: "tutoring",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-6",
  },
];


// Impact Section Data (for DevelopmentCards component)
export const sharedWebHostingServicesImpactSectionData = {
  heading: "Why Shared Hosting Matters for Your Business",
  showDescription: true,
  description:
    "Shared hosting is a smart choice for startups and small businesses that want reliable performance without a heavy investment. It balances affordability, simplicity, and the flexibility to grow as your online presence expands. Here’s why it works:",
  cta: null,
};

// Industries Data
export const sharedWebHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Podcast",
    description:
      "Our shared hosting for a podcast website ensures smooth streaming, fast file delivery, and consistent uptime. With optimized bandwidth and secure hosting, you can focus on growing your audience without worrying about downtime.",
    icon: "/assets/images/industry/podcast.svg",
  },
  {
    id: 2,
    title: "SaaS",
    description:
      "Choose shared hosting for SaaS startups that need dependable uptime and scalable resources. Our hosting is built to support app growth, API connections, and customer trust with a secure and affordable foundation.",
    icon: "/assets/images/industry/saas.svg",
  },
  {
    id: 3,
    title: "Gym",
    description:
      "Promote classes, memberships, and bookings with shared hosting for a gym website. Our platform keeps schedules accessible, payment pages secure, and performance strong across desktop and mobile devices.",
    icon: "/assets/images/industry/gym.svg",
  },
  {
    id: 4,
    title: "Tutoring",
    description:
      "Deliver lessons and resources online with shared hosting for a tutoring business. From video sessions to scheduling tools, our hosting supports e-learning platforms and grows as your student base expands.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 5,
    title: "Real Estate",
    description:
      "Showcase listings and generate leads with shared hosting for real estate agents. Our hosting supports high-quality image galleries, fast page loads, and secure inquiry forms to help you close deals faster.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 6,
    title: "Medical",
    description:
      "Improve patient access and trust with shared hosting for a medical clinic. From appointment booking to secure data handling, our hosting ensures compliance-friendly performance and reliable uptime.",
    icon: "/assets/images/industry/healthcare.svg",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
export const sharedWebHostingServicesIndustriesCardsData = [
  {
    title: "Podcast",
    description:
      "Our shared hosting for a podcast website ensures smooth streaming, fast file delivery, and consistent uptime. With optimized bandwidth and secure hosting, you can focus on growing your audience without worrying about downtime.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Podcast Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "Choose shared hosting for SaaS startups that need dependable uptime and scalable resources. Our hosting is built to support app growth, API connections, and customer trust with a secure and affordable foundation.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "SaaS Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Gym",
    description:
      "Promote classes, memberships, and bookings with shared hosting for a gym website. Our platform keeps schedules accessible, payment pages secure, and performance strong across desktop and mobile devices.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Gym Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Tutoring",
    description:
      "Deliver lessons and resources online with shared hosting for a tutoring business. From video sessions to scheduling tools, our hosting supports e-learning platforms and grows as your student base expands.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Tutoring Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Showcase listings and generate leads with shared hosting for real estate agents. Our hosting supports high-quality image galleries, fast page loads, and secure inquiry forms to help you close deals faster.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Real Estate Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Medical",
    description:
      "Improve patient access and trust with shared hosting for a medical clinic. From appointment booking to secure data handling, our hosting ensures compliance-friendly performance and reliable uptime.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Medical Hosting",
    width: 71,
    height: 71,
  },
];

// Workflow Data (for StepSection component)
export const sharedWebHostingServicesWorkflowData = {
  title: "Our Process",
  description:
    "Getting started with shared hosting should be straightforward. Here's how we take you from signup to a live website.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Select Your Hosting Plan",
      description:
        "Explore our shared hosting packages and use our clear hosting plan selection tools to compare features and choose the plan that fits your needs.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Quick Setup",
      description:
        "Once you've chosen your plan, we handle website setup and instant account activation so your site is ready to go quickly.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Launch and Grow",
      description:
        "With setup complete, your website launch is just a click away. Use our intuitive hosting management tools to stay in control as your site traffic grows.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const sharedWebHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Superior Server Performance",
    description:
      "Our optimized hosting environment delivers excellent server performance and website speed optimization for faster load times. Intelligent resource allocation reduces strain during traffic spikes, keeping downtime low and your site responsive.",
    icon: "performance",
  },
  {
    id: 2,
    title: "Robust Security",
    description:
      "Your website stays safe with advanced website security features, including an SSL certificate included with every plan. Built-in DDoS protection, automatic malware scanning, and an active firewall work together to safeguard your data and visitors.",
    icon: "security",
  },
  {
    id: 3,
    title: "Scalability Options",
    description:
      "Growth should never mean starting over. Our scalable shared hosting lets you add resources or upgrade hosting plan options as traffic increases. Whether you need a VPS upgrade or guided migration, our growth-ready hosting keeps pace with your business.",
    icon: "scalable",
  },
  {
    id: 4,
    title: "Transparent Pricing",
    description:
      "With us, you always know what you're paying for. We offer clear hosting prices and detailed shared hosting plan comparison tools to help you choose the right fit. There are no hidden fees, just straightforward pricing that delivers value for money.",
    icon: "pricing",
  },
  {
    id: 5,
    title: "Expert Support",
    description:
      "Our team provides expert hosting support and dependable technical support when you need it most. Access our knowledge base, live chat support, or reach out to our hosting helpdesk for quick answers and practical solutions.",
    icon: "support",
  },
];

// FAQ Data
export const sharedWebHostingServicesFAQsData = [
  {
    id: 1,
    question: "What is a shared web hosting service?",
    answer:
      "A shared web hosting service is a type of hosting where multiple websites share the same server resources, such as storage, bandwidth, and processing power. This makes it one of the most cost-effective options for individuals, startups, and small businesses to get online.",
  },
  {
    id: 2,
    question: "How does shared hosting work?",
    answer:
      "Shared hosting works by dividing a server into multiple accounts, each with its own allocated space and resources. Your website files, database, and email accounts are stored alongside other websites, but each site remains isolated so other users can't access your data.",
  },
  {
    id: 3,
    question: "What are the pros and cons of shared hosting?",
    answer:
      "The main advantage of shared hosting is affordability. It's an ideal low-cost way to start a website. It's also beginner-friendly and easy to manage. However, because resources are shared, performance may be affected during traffic spikes on other websites. It's best suited for small to medium-sized sites with moderate traffic.",
  },
  {
    id: 4,
    question: "What is the difference between shared and dedicated hosting?",
    answer:
      "Shared hosting uses one server for many websites, making it more affordable but with shared resources. Dedicated hosting gives you an entire server exclusively for your site, offering maximum performance and customization, but at a significantly higher cost.",
  },
  {
    id: 5,
    question: "Is shared hosting good for small businesses?",
    answer:
      "Yes. Shared hosting is ideal for small businesses looking for a budget-friendly way to build their online presence. It offers the right balance of price, performance, and ease of management, making it perfect for small business websites, blogs, and portfolio sites.",
  },
  {
    id: 6,
    question: "How do I buy a shared hosting plan?",
    answer:
      "You can buy a shared hosting plan directly from Website Digitals by selecting the package that fits your needs, adding it to your cart, and completing the checkout process. Website Digitals includes free SSL, a strong uptime guarantee, and 24/7 support with every plan to give you peace of mind.",
  },
  {
    id: 7,
    question: "Does shared hosting include free SSL?",
    answer:
      "Yes, many providers now offer shared hosting with free SSL at checkout. At Website Digitals, all plans include SSL protection to secure your site and safeguard visitor data from day one.",
  },
  {
    id: 8,
    question: "What is the fastest shared hosting for WordPress?",
    answer:
      "The fastest shared hosting for WordPress typically includes optimized servers, caching, and one-click WordPress installation. Website Digitals offers shared hosting for WordPress with tuned servers and managed updates to deliver faster load times and smooth performance.",
  },
  {
    id: 9,
    question: "How do I find shared hosting with the best uptime?",
    answer:
      "Look for providers that advertise a 99.9% or higher uptime guarantee. Website Digitals offers shared hosting with the best uptime backed by proactive server monitoring, so your site stays online around the clock.",
  },
  {
    id: 10,
    question: "What is the difference between shared and cloud hosting?",
    answer:
      "Shared hosting runs on a single physical server with multiple websites sharing resources. Cloud hosting distributes your website across multiple virtual servers, allowing for better scalability and reliability. If one server goes down, another takes over, reducing downtime risk.",
  },
  {
    id: 11,
    question: "How can I purchase a shared web hosting service?",
    answer:
      "You can purchase a shared web hosting service by choosing your preferred package, completing checkout, and activating your account instantly. Our setup process is straightforward, and expert support is available at every step to ensure a smooth start.",
  },
  {
    id: 12,
    question: "Where can I find an affordable shared web hosting service?",
    answer:
      "You can find an affordable shared web hosting service with Website Digitals, where plans are designed for startups and small businesses. With transparent pricing, free SSL, and strong uptime, our entry-level packages deliver quality hosting at budget-friendly rates.",
  },
  {
    id: 13,
    question: "What is the best shared web hosting service plan for me?",
    answer:
      "The best shared web hosting service plan depends on your website goals. If you're starting a blog, the basic plan is ideal. For growing businesses, the business plan offers SSL and extra performance. WordPress users benefit most from our WordPress-optimized plan with managed updates.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const sharedWebHostingServicesSectionData = {
  heading: "Our Range of Shared Hosting Services for Every Need",
  description:
    "Our shared hosting plans are designed for businesses of all types, from small websites to growing brands and WordPress-powered sites. Each plan delivers speed, security, and flexibility so your site performs consistently as your needs grow.",
  showDescription: true,
  cta: {
    label: "Choose Your Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const sharedWebHostingServicesIndustriesSectionData = {
  heading: "Sectors We Cover",
  description:
    "We've built hosting solutions that adapt to the unique needs of diverse industries. Whether you're launching content, services, or online platforms, our shared hosting delivers the right balance of speed, security, and flexibility to support your growth.",
  cta: {
    text: "Explore Your Hosting Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Why Choose Us Section Data (Section 7)
export const sharedWebHostingServicesWhyChooseUsSectionData = {
  heading: "Why Our Shared Hosting Stands Out for Businesses",
  description:
    "Choosing the right hosting provider is about more than just getting online. It's about reliable performance, security, and support that grow with your business. Here's what sets our shared hosting apart:",
};

// Workflow Section Data (Section 8)
export const sharedWebHostingServicesWorkflowSectionData = {
  heading: "Our Process",
  description:
    "Getting started with shared hosting should be straightforward. Here's how we take you from signup to a live website:",
};

// Final CTA Section Data (Section 11)
export const sharedWebHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Shared Web Hosting Services",
      href: "/website-hosting-services/shared-web-hosting-services",
    },
  },
  heading: "Cut Costs, Reduce Downtime, and Boost Speed with Shared Hosting",
  description: [
    "Get online with a shared web hosting service backed by a 99.9% uptime guarantee and security-first infrastructure. Our website hosting solution includes SSL protection and 24/7 support, giving you reliable hosting you can trust from day one.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Shared Web Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Go Live Today",
    href: "#",
    className: "offer-btn primary",
  },
};
