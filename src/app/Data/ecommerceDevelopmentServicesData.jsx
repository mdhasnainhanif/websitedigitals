import { BagIcon } from "@/icons";

// Metadata for Ecommerce Development Service
export const ecommerceDevelopmentMetadata = {
  title: "Best US Ecommerce Development Company | Website Digitals",
  description: "Boost conversions with our ecommerce development services, deliver fast, scalable, and secure online stores for US brands ready to grow.",
  keywords: "ecommerce development, ecommerce development company, ecommerce website development, magento development, shopify development, woocommerce development, ecommerce development services, ecommerce development agency, custom ecommerce development, ecommerce platform development",
  canonical: "https://www.websitedigitals.com/web-development/ecommerce-development-company/",
  openGraph: {
    title: "Best US Ecommerce Development Company | Website Digitals",
    description: "Boost conversions with our ecommerce development services, deliver fast, scalable, and secure online stores for US brands ready to grow.",
    url: "https://www.websitedigitals.com/web-development/ecommerce-development-company/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/ecommerce-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ecommerce Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Best US Ecommerce Development Company | Website Digitals",
    description: "Boost conversions with our ecommerce development services, deliver fast, scalable, and secure online stores for US brands ready to grow.",
    images: ["https://websitedigitals.com/assets/images/ecommerce-development-twitter-image.jpg"],
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
    canonical: "https://www.websitedigitals.com/web-development/ecommerce-development-company/",
  },
};

export const ecommerceDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Ecommerce Development Company",
      href: "/web-development/ecommerce-development-company",
    },
  },
  heading: "Build, [[Grow]] & [[Scale]] with an Ecommerce Development Company",
  description: [
    "Most online stores fail to grow because their websites are slow, hard to manage, and can't adapt to changing customer needs.\nWe solve this by delivering custom ecommerce websites with smooth ecommerce platform integration, mobile optimization, payment gateway integration, and secure ecommerce solutions to ensure your business runs efficiently from day one.\nAt Website Digitals, our team of experienced ecommerce developers creates online stores that don't just look professional but are built to sell.\nHere's what working with our ecommerce development company means for your business:\nOnline stores built for your customers' journey\nScalable solutions that grow without rebuilds\nTrusted experts in ecommerce platforms",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Start Your Ecommerce Project Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-ecommerce", label: "Custom Ecommerce Development" },
      { value: "shopify", label: "Shopify Development" },
      { value: "magento", label: "Magento Development" },
      { value: "woocommerce", label: "WooCommerce Development" },
      { value: "ecommerce-migration", label: "Ecommerce Migration" },
      { value: "ecommerce-integration", label: "Ecommerce Integration" },
    ],
    initialValues: {
      help: "custom-ecommerce",
    },
  },
};

// Stats Counter Data
export const ecommerceDevelopmentStatsData = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Online Stores Built",
  },
  {
    id: 2,
    value: 65,
    suffix: "%",
    label: "Higher Conversions",
  },
  {
    id: 3,
    value: 2.8,
    suffix: "s",
    label: "Average Mobile Load Time",
  },
  {
    id: 4,
    value: 92,
    suffix: "%",
    label: "Client Retention Rate",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const ecommerceDevelopmentImpactSectionData = {
  heading: "Why Ecommerce Web Development Matters for Businesses",
  showDescription: true,
  description: "Your website is often the first interaction customers have with your brand, and in ecommerce, that first impression can shape sales, loyalty, and trust. A well-planned ecommerce site is more than a sales channel as it's the foundation for long-term growth.\nBelow are the core reasons it plays such a critical role in your success:",
};

// Impact Cards Data (for DevelopmentCards component)
export const ecommerceDevelopmentImpactCardsData = [
  {
    id: 1,
    title: "Direct Impact on Conversions",
    description:
      "Smart design and development improve SEO, navigation, and checkout flow, turning visitors into customers. Fast load times, responsive design, and mobile optimization reduce drop-offs and boost sales.",
    icon: "conversion",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Scalability for Growth",
    description:
      "With scalable ecommerce development, your store can expand products, add channels, or grow into a multi-vendor marketplace without costly rebuilds. Features like headless commerce, API integration, and cloud hosting keep performance high as demand grows.",
    icon: "scale",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Security & Customer Trust",
    description:
      "Secure payment gateways, encryption, and compliance measures protect shoppers and your brand. Strong security builds confidence and encourages repeat purchases.",
    icon: "security",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];


// Services Section Data (Section 5) - for DevelopmentCardSlider
export const ecommerceDevelopmentServicesSectionData = {
  heading: "Our Complete Ecommerce Development Services for Your Store",
  description: "Our ecommerce services provide everything you need for a complete, high-performing online store. From building your site to configuring platforms, integrating systems, and optimizing for search, we deliver solutions that keep your store running smoothly and ready to grow.\nWhether you are launching for the first time or upgrading your current setup, our team covers every stage of web development.\nHere's what we offer:",
  showDescription: true,
  cta: {
    label: "Get My Store Live",
    href: "#contact",
    className: "offer-btn primary",
    show: true,
  },
};

export const ecommerceDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Ecommerce Development",
    description: "We design and build custom ecommerce websites tailored to your brand, audience, and business goals. This includes shopping cart and checkout system development designed for ease of use, fast performance, and higher conversion rates. We also create robust product catalogs and inventory management systems, giving you the tools to run your store efficiently.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Platform Setup and Configuration",
    description: "From Shopify and Magento to WooCommerce, we handle platform setup and configuration to ensure your store is ready to launch without delays. Our process includes theme customization, store settings, and technical configurations so your platform reflects your brand and meets your operational needs.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Platform Migration and Integration",
    description: "Switching ecommerce platforms can be seamless with the right approach. Whether it is a Shopify to Magento migration or a WooCommerce to BigCommerce migration, we manage the transition with zero downtime and secure data transfer. We also integrate third-party APIs, including shipping providers, CRM systems, and ERP software, so every tool in your business ecosystem works together efficiently.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Ecommerce SEO and Marketing Support",
    description: "Beyond development, we provide ecommerce content optimization, keyword targeting, and schema markup for ecommerce to improve search visibility and rankings. By following best practices from Google Search Central and proven strategies from OuterBox, we help increase your visibility and drive high-intent traffic to your store.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const ecommerceDevelopmentIndustriesSectionData = {
  heading: "Industries We Help Grow Online",
  description: "We create tailored ecommerce development solutions for multiple industries, helping businesses launch, scale, and grow with high-performing online stores designed around their customers.",
  cta: {
    text: "Grow My Store Today",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Data
export const ecommerceDevelopmentIndustriesData = [
  {
    id: 1,
    title: "Retail",
    description: "Our ecommerce development for retail enables smooth omnichannel experiences, from in-store pickup to easy returns, while boosting conversions with fast, intuitive checkouts and smart merchandising tools.",
    icon: "/assets/images/industry/retail.svg",
  },
  {
    id: 2,
    title: "Automotive",
    description: "We specialize in ecommerce development for automotive parts, featuring VIN-based fitment search, real-time inventory syncing, and secure checkout to streamline purchasing and reduce returns.",
    icon: "/assets/images/industry/automotive.svg",
  },
  {
    id: 3,
    title: "Small Business",
    description: "Our ecommerce development services for small businesses deliver scalable, budget-friendly online stores with simple content management, mobile optimization, and built-in tools for local delivery and growth.",
    icon: "/assets/images/industry/small-business.svg",
  },
  {
    id: 4,
    title: "Digital Products",
    description: "Our ecommerce development for digital products supports instant downloads, subscription billing, and secure license management, ensuring a smooth user experience and automated fulfillment.",
    icon: "/assets/images/industry/digital-products.svg",
  },
  {
    id: 5,
    title: "Electronics",
    description: "We offer ecommerce development for electronics with product comparison tools, warranty workflows, and fast-loading product pages to improve decision-making and boost customer confidence.",
    icon: "/assets/images/industry/electronics.svg",
  },
  {
    id: 6,
    title: "Jewelry",
    description: "Our ecommerce development for jewelry features high-resolution galleries, AR try-on, and insured checkout options, helping luxury brands build trust and increase high-value sales.",
    icon: "/assets/images/industry/jewelry.svg",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
export const ecommerceDevelopmentIndustriesCardsData = [
  {
    title: "Retail",
    description: "Our ecommerce development for retail enables smooth omnichannel experiences, from in-store pickup to easy returns, while boosting conversions with fast, intuitive checkouts and smart merchandising tools.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Retail Ecommerce Development",
    width: 71,
    height: 71,
  },
  {
    title: "Automotive",
    description: "We specialize in ecommerce development for automotive parts, featuring VIN-based fitment search, real-time inventory syncing, and secure checkout to streamline purchasing and reduce returns.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Automotive Ecommerce Development",
    width: 71,
    height: 71,
  },
  {
    title: "Small Business",
    description: "Our ecommerce development services for small businesses deliver scalable, budget-friendly online stores with simple content management, mobile optimization, and built-in tools for local delivery and growth.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Small Business Ecommerce Development",
    width: 71,
    height: 71,
  },
  {
    title: "Digital Products",
    description: "Our ecommerce development for digital products supports instant downloads, subscription billing, and secure license management, ensuring a smooth user experience and automated fulfillment.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Digital Products Ecommerce Development",
    width: 71,
    height: 71,
  },
  {
    title: "Electronics",
    description: "We offer ecommerce development for electronics with product comparison tools, warranty workflows, and fast-loading product pages to improve decision-making and boost customer confidence.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Electronics Ecommerce Development",
    width: 71,
    height: 71,
  },
  {
    title: "Jewelry",
    description: "Our ecommerce development for jewelry features high-resolution galleries, AR try-on, and insured checkout options, helping luxury brands build trust and increase high-value sales.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Jewelry Ecommerce Development",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const ecommerceDevelopmentWhyChooseUsSectionData = {
  heading: "Why We're the Right Partner for Your Ecommerce Development",
  description: "Every online store deserves a development partner that delivers expertise, proven results, and future-ready solutions. Here's what sets us apart.",
};

// Why Choose Us Data
export const ecommerceDevelopmentWhyChooseUsData = [
  {
    icon: "fas fa-certificate",
    title: "Certified Ecommerce Experts",
    description: "Our team includes Magento-certified developers and recognized members of the Shopify Experts program, with deep Adobe Commerce expertise and verified platform certifications. This ensures every project is executed to the highest professional standard."
  },
  {
    icon: "fas fa-trophy",
    title: "Proven Track Record",
    description: "We have earned a reputation among the top ecommerce developers in the USA, delivering award-winning ecommerce projects backed by measurable results. Our case studies and project portfolio demonstrate consistent success in helping businesses achieve their online goals."
  },
  {
    icon: "fas fa-lock",
    title: "Security & Compliance First",
    description: "Security is central to our development process. We adhere to PCI DSS compliance for secure payment processing, implement SSL encryption, and offer two-factor authentication for added protection. For more details, visit the official PCI DSS compliance documentation."
  },
  {
    icon: "fas fa-rocket",
    title: "Future-Ready Technology",
    description: "We develop headless commerce solutions and PWA ecommerce to ensure your store is prepared for evolving trends. With mobile-first indexing and progressive web apps, your site delivers fast, app-like experiences across devices."
  }
];


// Workflow Data
export const ecommerceDevelopmentWorkflowData = {
  title: "Our Process for Ecommerce Development",
  description: "Every successful online store starts with a clear plan and a precise execution strategy. Our process ensures each stage of your project is handled with attention to detail, from initial planning to post-launch optimization. Our process includes the following stages:",
  showDescription: true,
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description: "We begin with thorough ecommerce project planning and requirements analysis to understand your business model, products, and target customers. This stage focuses on business goals alignment and competitor research to create a roadmap that sets your store up for success.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02", 
      title: "Design & Development",
      description: "Our team produces custom ecommerce design tailored to your brand, focusing on UX/UI for online stores that guide customers naturally toward a purchase. Through wireframing and responsive design development, we ensure your site looks and functions flawlessly on all devices.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Testing & Launch",
      description: "Before your site goes live, we conduct QA testing for ecommerce to detect and resolve any issues. This includes bug fixing before launch, cross-browser testing, and load testing to confirm your store performs consistently under varying traffic conditions.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Optimization & Support",
      description: "After launch, we provide ongoing ecommerce support and site performance optimization to keep your store running at its best. With analytics tracking and SEO monitoring, we continuously improve site speed, usability, and search visibility to maximize your return on investment.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    }
  ]
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const ecommerceDevelopmentTechnologiesSectionData = {
  heading: "Technologies We Use",
  description: "We use leading platforms like Magento, WooCommerce, Salesforce Commerce Cloud, Drupal, Headless, and Laravel to build fast, scalable ecommerce solutions tailored to your business goals.",
  showDescription: true,
  cta: {
    text: "Get Started Now",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Technologies Data
export const ecommerceDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "Magento",
    description: "As the best Magento ecommerce website development company, we create enterprise-ready stores with multi-store support, advanced catalog management, and PCI-compliant checkout to drive growth and handle large-scale operations.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "WooCommerce",
    description: "Our WooCommerce ecommerce development agency builds flexible WordPress stores with custom themes, plugin integrations, and SEO-friendly architecture for easy management and better visibility for small to mid-sized businesses.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Salesforce",
    description: "We are a Salesforce Commerce Cloud development firm helping brands deliver personalized shopping journeys powered by Einstein AI, unified CRM data, and seamless omnichannel integrations.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Drupal",
    description: "As a Drupal commerce development company, we build content-rich ecommerce sites with editorial-friendly workflows, custom modules, and robust performance for businesses prioritizing content and commerce together.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Headless",
    description: "Our headless ecommerce development company builds lightning-fast, API-first storefronts using React or Vue, enabling omnichannel selling, faster load times, and future-proof scalability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Laravel",
    description: "We are a Laravel ecommerce development company delivering secure, custom-built online stores with clean code architecture, rapid development cycles, and powerful API integrations for complex business needs.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Final CTA Section Data (Section 11)
export const ecommerceDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Ecommerce Development Company",
      href: "/web-development/ecommerce-development-company",
    },
  },
  heading: "Build an Ecommerce Brand That Stays in Mind",
  description: [
    "Your online store won’t build itself. The longer you wait, the more sales opportunities you miss. Let our team design, develop, and launch an ecommerce solution built to perform from day one.",
    "",
    "Build your online store with experts who understand how to create a platform that sells.",
    "",
    "Launch your ecommerce project now and turn visitors into customers.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Ecommerce Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Launch My Ecommerce Site",
    href: "#",
    className: "offer-btn primary",
  },
};

// FAQs Data
export const ecommerceDevelopmentFAQsData = [
  {
    question: "How can I hire Website Digitals for my ecommerce development project?",
    answer: "Hiring Website Digitals is simple. You can contact our team through our website's inquiry form or call us directly to discuss your requirements. We'll review your goals, provide a tailored proposal, and outline the next steps to get started."
  },
  {
    question: "Why should I choose Website Digitals for fast and robust ecommerce websites?",
    answer: "Website Digitals combines advanced development frameworks, optimized code, and performance-focused hosting setups to deliver ecommerce sites with exceptional speed and reliability. Every store we build is tested for mobile performance, load time, and scalability."
  },
  {
    question: "How does Website Digitals ensure my ecommerce website is secure?",
    answer: "Our team implements industry-standard security measures, including SSL encryption, secure payment gateways, PCI DSS compliance, and regular security audits. This ensures your store and customer data are always protected."
  },
  {
    question: "Can Website Digitals handle my project from start to finish?",
    answer: "Yes. Website Digitals offers end-to-end ecommerce development, from initial strategy and platform selection to design, development, SEO optimization, and ongoing support. We ensure your store is ready to perform from launch day."
  },
  {
    question: "What does an ecommerce development company do?",
    answer: "An ecommerce development company designs, builds, and maintains online stores. Services typically include platform selection, custom ecommerce design, shopping cart development, payment gateway integration, product catalog setup, and ongoing optimization. We manage every stage to ensure your store is ready to perform from day one."
  },
  {
    question: "What are the benefits of using a Shopify development agency?",
    answer: "A Shopify development agency provides expertise in creating, customizing, and scaling Shopify stores. Working with certified Shopify Experts ensures your site is optimized for speed, mobile responsiveness, and sales conversion while making full use of Shopify's features. Learn more through the official Shopify Experts directory."
  },
  {
    question: "How do I choose between Magento vs WooCommerce developers?",
    answer: "The choice between Magento and WooCommerce developers depends on your store's scale and technical needs. Magento is best for enterprise ecommerce with advanced customization, while WooCommerce is ideal for small to mid-sized stores needing flexibility within WordPress. A requirements analysis can help determine which platform aligns with your goals."
  },
  {
    question: "How can I hire an ecommerce development company in the USA?",
    answer: "Hiring an ecommerce development company in the USA involves reviewing their experience, exploring case studies, and confirming platform certifications. Look for agencies that offer transparent processes, certified developers, and tailored ecommerce solutions suited to your business model."
  },
  {
    question: "How much do Shopify development services cost in the United States?",
    answer: "Shopify development costs vary based on project scope, customization level, and required integrations. Smaller projects may cost a few thousand dollars, while enterprise ecommerce builds with complex third-party API integrations require higher budgets. Request a tailored quote to get accurate pricing for your needs."
  },
  {
    question: "What is the best Magento development agency for enterprise projects?",
    answer: "The best Magento development agencies combine Magento-certified developers, Adobe Commerce expertise, and a portfolio of proven case studies. These teams deliver scalable, secure Magento ecommerce solutions for large organizations. See the Adobe Commerce certification page for more on official credentials."
  },
  {
    question: "Where can I find Clutch ecommerce development companies in the USA?",
    answer: "You can find vetted ecommerce development companies on Clutch, a platform that ranks agencies based on verified client reviews, service expertise, and project results. Clutch listings provide insight into an agency's reputation and past performance."
  },
  {
    question: "Is there a GoodFirms ecommerce developers list I can check?",
    answer: "Yes. GoodFirms publishes a verified list of ecommerce developers worldwide, including agencies in the United States. These lists highlight companies with strong client feedback, service quality, and industry expertise."
  },
  {
    question: "Who are the top ecommerce development firms in the USA for 2025?",
    answer: "The top ecommerce development firms in the USA for 2025 deliver scalable ecommerce solutions, exceptional UX and UI design, and secure payment processing. Agencies with consistent client satisfaction, industry certifications, and a proven track record, such as those listed on Clutch and GoodFirms, continue to lead the market. Many of these agencies also have certified developers available in key cities across the United States."
  },
  {
    question: "Are there Magento-certified ecommerce developers in Chicago?",
    answer: "Yes. Our team includes professionals certified in Magento and skilled in Adobe Commerce who serve clients in Chicago and other major US cities. They deliver tailored, secure ecommerce solutions that align with business goals while meeting compliance standards."
  },
  {
    question: "What is the difference between an ecommerce development company and an ecommerce SEO company?",
    answer: "An ecommerce development company focuses on building and integrating the technical infrastructure of an online store, including platform setup, design, and functionality. An ecommerce SEO company works to improve search rankings, increase organic traffic, and optimize content for better visibility. Partnering with both ensures your store is technically sound and search-friendly."
  },
  {
    question: "Why should I work with an ecommerce development consulting company?",
    answer: "An ecommerce development consulting company helps you plan a strategy, select the right platform, and reduce risks before development begins. They analyze your business needs, align technology with goals, and prevent costly missteps for a store built to scale and deliver long-term ROI."
  },
  {
    question: "What are the benefits of hiring a D2C ecommerce development company?",
    answer: "A D2C ecommerce development company empowers brands to sell directly to consumers, gain valuable first-party data, and personalize shopping experiences. This approach increases margins, improves retention, and gives you full control over your customer journey and brand messaging."
  },
  {
    question: "Why choose an ecommerce development company with maintenance services?",
    answer: "An ecommerce development company with maintenance provides proactive monitoring, bug fixes, and security updates to keep your store running 24/7. Regular performance optimization helps prevent downtime, enhance user experience, and protect revenue growth well beyond launch day."
  }
];

export const ecommerceDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why We're the Right Partner for Your Ecommerce Development",
  description: [
    "Every online store deserves a development partner that delivers expertise, proven results, and future-ready solutions. Here's what sets us apart.",
  ],
  items: [
    {
      id: "ecommerce-firstScroller",
      step: 1,
      title: "Certified Ecommerce Experts",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team includes Magento-certified developers and recognized members of the Shopify Experts program, with deep Adobe Commerce expertise and verified platform certifications. This ensures every project is executed to the highest professional standard.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Certified Ecommerce Experts",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ecommerce-secondScroller",
      step: 2,
      title: "Proven Track Record",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We have earned a reputation among the top ecommerce developers in the USA, delivering award-winning ecommerce projects backed by measurable results. Our case studies and project portfolio demonstrate consistent success in helping businesses achieve their online goals.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Proven Track Record",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ecommerce-thirdScroller",
      step: 3,
      title: "Security & Compliance First",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Security is central to our development process. We adhere to PCI DSS compliance for secure payment processing, implement SSL encryption, and offer two-factor authentication for added protection. For more details, visit the official PCI DSS compliance documentation.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Security & Compliance First",
        width: 669,
        height: 376,
      },
    },
    {
      id: "ecommerce-forthScroller",
      step: 4,
      title: "Future-Ready Technology",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We develop headless commerce solutions and PWA ecommerce to ensure your store is prepared for evolving trends. With mobile-first indexing and progressive web apps, your site delivers fast, app-like experiences across devices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Future-Ready Technology",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const ecommerceDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Ecommerce Development",
      href: "/web-development/ecommerce-development-company",
    },
  },
  heading: "Build an Ecommerce Brand That Stays in Mind",
  description: [
    "Your online store won't build itself. The longer you wait, the more sales opportunities you miss. Let our team design, develop, and launch an ecommerce solution built to perform from day one.",
    "",
    "Build your online store with experts who understand how to create a platform that sells.",
    "",
    "Launch your ecommerce project now and turn visitors into customers.",
  ],
  bullets: [],
  cta: {
    text: "Launch My Ecommerce Site",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Ecommerce Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

