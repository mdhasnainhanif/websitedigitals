import { BagIcon } from "@/icons";

// Metadata for App Store Optimization Service
export const appStoreOptimizationMetadata = {
  title: "Maximize Growth with Our App Store Optimization Services",
  description: "Our ASO company helps you rank higher, boost downloads, and improve conversions. Contact Website Digitals now for measurable growth.",
  keywords: "app store optimization, ASO services, mobile app marketing, app store ranking, app downloads, mobile app optimization",
  canonical: "https://www.websitedigitals.com/digital-marketing/app-store-optimization-services/",
  openGraph: {
    title: "Maximize Growth with Our App Store Optimization Services",
    description: "Our ASO company helps you rank higher, boost downloads, and improve conversions. Contact Website Digitals now for measurable growth.",
    url: "https://www.websitedigitals.com/digital-marketing/app-store-optimization-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/app-store-optimization-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "App Store Optimization Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Maximize Growth with Our App Store Optimization Services",
    description: "Our ASO company helps you rank higher, boost downloads, and improve conversions. Contact Website Digitals now for measurable growth.",
    images: [
      "https://websitedigitals.com/assets/images/app-store-optimization-twitter-image.jpg",
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
    canonical: "https://www.websitedigitals.com/digital-marketing/app-store-optimization-services/",
  },
};

export const appStoreOptimizationBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "App Store Optimization Services",
      href: "/digital-marketing/app-store-optimization-services",
    },
  },
  heading: "Boost Rankings and Installs with [[App Store Optimization]] Services",
  description: [
    "Most apps stay hidden in search results and miss out on potential users.\n\nAt Website Digitals, we provide app store optimization services that improve app ranking, grow app impressions, and turn visits into installs.\n\nOur team handles search term optimization, refines metadata, and enhances screenshots so your listing draws more clicks and achieves a higher conversion rate.\n\nHere's what you get:\n• Boost rankings with keyword and metadata optimization\n• Drive installs through visuals and descriptions\n• Track growth using analytics and competitor data",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Rank My App",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "keyword-optimization", label: "Keyword Research & Metadata Optimization" },
      { value: "creative-optimization", label: "Creative Asset Optimization" },
      { value: "localization", label: "App Store Listing Localization" },
      { value: "review-management", label: "Review & Rating Management" },
      { value: "competitor-analysis", label: "Competitor Analysis & Benchmarking" },
      { value: "performance-tracking", label: "Performance Tracking & Analytics" },
    ],
    initialValues: {
      help: "keyword-optimization",
    },
  },
};

export const appStoreOptimizationServicesData = [
  {
    id: 1,
    title: "Keyword Research & Metadata Optimization",
    description: "We perform detailed keyword optimization for apps and target the most relevant search terms to improve keyword ranking. Every metadata field is refined, including app title optimization, subtitles, and descriptions, to maximize visibility and relevance.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Creative Asset Optimization",
    description: "Our team handles app screenshot optimization, icon design, and preview video optimization to improve click-through rate. By testing store listing creatives and applying conversion rate optimization, we turn more views into installs.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "App Store Listing Localization",
    description: "We provide localization and app translation services to create localized store listings that connect with multilingual markets. Proper internationalization ensures your app reaches a broader global audience with culturally relevant messaging.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Review & Rating Management",
    description: "We built a structured ratings and reviews strategy to collect positive user feedback and improve store ratings. Ongoing review, monitoring, and sentiment analysis support effective reputation management and encourage trust.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Competitor Analysis & Benchmarking",
    description: "Our team conducts thorough competitor analysis to identify opportunities and benchmark your app's performance against industry leaders. This helps us develop strategies that give you a competitive edge in the app store.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Performance Tracking & Analytics",
    description: "We provide comprehensive analytics and performance tracking to monitor your app's growth, ranking improvements, and conversion rates. Regular reporting ensures you stay informed about your ASO campaign's success.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const appStoreOptimizationScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Our ASO Company Is Trusted by App Owners?",
  description: [
    "Our approach combines data-driven insights with hands-on expertise to deliver lasting improvements for your app’s visibility and growth. Each step is designed to produce results that can be tracked and refined over time. Here’s what sets our ASO apart:",
  ],
  showDescription: true,
  items: [
    {
      id: "aso-firstScroller",
      step: 1,
      title: "Data-Driven Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We start with a full ASO audit to identify opportunities. Using advanced analytics, we focus on performance tracking and ranking metrics to prioritize changes that deliver measurable outcomes.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Data-Driven Approach",
        width: 669,
        height: 376,
      },
    },
    {
      id: "aso-secondScroller",
      step: 2,
      title: "Full-Funnel Optimization",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide end-to-end app listing optimization, covering titles, descriptions, and creatives. Through ongoing creative testing and precise conversion optimization, we convert more visitors into engaged users.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Full-Funnel Optimization",
        width: 669,
        height: 376,
      },
    },
    {
      id: "aso-thirdScroller",
      step: 3,
      title: "Cross-Platform Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team executes both iOS app optimization and Google Play optimization under a unified multi-store strategy, ensuring consistent performance across platforms and store environments.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Cross-Platform Expertise",
        width: 669,
        height: 376,
      },
    },
    {
      id: "aso-fourthScroller",
      step: 4,
      title: "Ongoing Monitoring & Iteration",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We perform regular store listing updates to keep your app competitive. With consistent keyword tracking and smart algorithm adaptation, your rankings stay strong as market conditions shift.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Ongoing Monitoring & Iteration",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const appStoreOptimizationBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "App Store Optimization",
      href: "/digital-marketing/app-store-optimization-services",
    },
  },
  heading: "Make Your App Impossible to Miss",
  description: [
    "Competitors are after the same users, but your app deserves to stand out. With our expert app store optimization services, you can climb rankings, reach the right audience, and turn impressions into installs faster.",
  ],
  bullets: [],
  cta: {
    text: "Increase Your Installs",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "App Store Optimization Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const appStoreOptimizationStatsData = [
  {
    id: 1,
    value: 75,
    suffix: "%",
    label: "Higher app rankings",
  },
  {
    id: 2,
    value: 120,
    suffix: "%",
    label: "More organic installs",
  },
  {
    id: 3,
    value: 40,
    suffix: "%",
    label: "Better conversion rates",
  },
  {
    id: 4,
    value: 92,
    suffix: "%",
    label: "Client retention",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const appStoreOptimizationImpactCardsData = [
  {
    id: 1,
    title: "Increase App Visibility Organically",
    description: "Focusing on key app store ranking factors improves app discoverability and drives organic app growth. Consistent keyword tracking, adapting to the store algorithm, and selecting the right app category ranking keep your listing visible to the right audience.",
    icon: "visibility",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Drive More Installs and Engagement",
    description: "Effective conversion optimization turns visitors into users. Clear descriptions and strong visuals increase app downloads and click-through rate, while churn reduction strategies maintain loyal users. Monitoring app installs, user acquisition, and engagement metrics ensures performance aligns with growth goals.",
    icon: "engagement",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Strengthen Your App's Competitive Edge",
    description: "Ongoing competitor analysis and regular app store audits reveal new opportunities. Creative A/B testing, tracking category ranking improvement, and detailed store listing analysis guide optimizations, while benchmarking and monitoring algorithm updates help stay ahead of competitors.",
    icon: "competitive",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

export const appStoreOptimizationImpactSectionData = {
  heading: "Why Every App Needs a Strong ASO Strategy",
  showDescription: true,
  description: "App store optimization improves visibility, attracts users, and sustains growth through a data-driven strategy and continuous refinement. Here's why it matters:",
};

export const appStoreOptimizationIndustriesData = [
  {
    id: 1,
    title: "Gaming",
    description: "We deliver expert app store optimization services for gaming, focusing on category alignment, keyword targeting, and creative sequencing. From optimizing preview frames to genre-specific terms, we help gaming apps attract players, boost installs, and strengthen retention.",
    icon: "/assets/images/industry/gaming.svg",
  },
  {
    id: 2,
    title: "Travel Booking",
    description: "Our app store optimization services for travel booking focus on geo-localized keywords, seasonal trends, and creative localization. By aligning listings with peak travel periods and destination searches, we ensure your app reaches more travelers and drives sustained installs.",
    icon: "/assets/images/industry/travel.svg",
  },
  {
    id: 3,
    title: "Food Delivery",
    description: "With app store optimization services for food delivery, we target hyperlocal keywords, cuisine-based search terms, and listing creatives that highlight delivery speed. This approach improves visibility, attracts local users, and boosts organic installs in competitive food app markets.",
    icon: "/assets/images/industry/food.svg",
  },
  {
    id: 4,
    title: "Fitness",
    description: "We provide tailored app store optimization services for fitness apps, optimizing for subscription-based keywords, workout features, and integrations like Apple Health or Google Fit. Our strategies improve discoverability, drive installs, and retain engaged, active users.",
    icon: "/assets/images/industry/fitness.svg",
  },
  {
    id: 5,
    title: "SaaS",
    description: "Our app store optimization services for saas help business apps capture high-intent users through metadata refinement, category optimization, and trial-related keywords. By optimizing creatives and store presence, SaaS apps improve installs and scale across iOS and Android.",
    icon: "/assets/images/industry/saas.svg",
  },
  {
    id: 6,
    title: "Workflow",
    description: "We specialize in app store optimization services for workflow apps by targeting role-based keywords, integration terms, and automation-focused metadata. This ensures better discoverability, stronger conversion rates, and increased installs among professionals and teams seeking productivity solutions.",
    icon: "/assets/images/industry/workflow.svg",
  },
];

// Workflow Data (for StepSection component)
export const appStoreOptimizationWorkflowData = {
  title: "Our ASO Process",
  description: "Our process is designed to maximize visibility, improve conversions, and drive measurable results. Each step follows a data-driven approach so every change delivers meaningful performance gains. Here's how our process works:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Audit & Research",
      description: "We begin with a detailed competitor analysis and comprehensive keyword research to build a data-backed strategy. A full metadata review ensures your titles, descriptions, and subtitles are optimized from the start.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Implementation",
      description: "Our team updates your title, subtitle, screenshots, and handles icon optimization to create a listing that stands out and meets store guidelines.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "A/B Testing & Analysis",
      description: "We conduct creative asset experimentation to identify the most effective visuals and use CTR tracking to refine listings and improve conversion rates.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Monitoring & Reporting",
      description: "With ongoing analytics, we track ranking improvements and analyze user engagement data to guide updates. Clear reporting keeps you informed and supports continuous optimization.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const appStoreOptimizationWhyChooseUsData = [
  {
    id: 1,
    title: "Data-Driven Approach",
    description: "We start with a full ASO audit to identify opportunities. Using advanced analytics, we focus on performance tracking and ranking metrics to prioritize changes that deliver measurable outcomes.",
    icon: "data",
  },
  {
    id: 2,
    title: "Full-Funnel Optimization",
    description: "We provide end-to-end app listing optimization, covering titles, descriptions, and creatives. Through ongoing creative testing and precise conversion optimization, we convert more visitors into engaged users.",
    icon: "optimization",
  },
  {
    id: 3,
    title: "Cross-Platform Expertise",
    description: "Our team executes both iOS app optimization and Google Play optimization under a unified multi-store strategy, ensuring consistent performance across platforms and store environments.",
    icon: "cross-platform",
  },
  {
    id: 4,
    title: "Ongoing Monitoring & Iteration",
    description: "We perform regular store listing updates to keep your app competitive. With consistent keyword tracking and smart algorithm adaptation, your rankings stay strong as market conditions shift.",
    icon: "monitoring",
  },
];

// FAQ Data
export const appStoreOptimizationFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for ASO services?",
    answer: "Website Digitals offers end-to-end app store optimization services for iOS and Android. We combine keyword research, metadata optimization, creative testing, and performance tracking to boost rankings and drive installs with measurable results.",
  },
  {
    id: 2,
    question: "What are app store optimization services?",
    answer: "App store optimization services are strategies designed to improve your app's visibility in the Apple App Store and Google Play Store. These services include keyword research, metadata optimization, creative asset improvements, and performance tracking to help your app rank higher and get more organic installs.",
  },
  {
    id: 3,
    question: "How does ASO work for mobile apps?",
    answer: "ASO works by optimizing your app title, description, keywords, and visuals so store algorithms better understand and promote your app. It also includes tracking ranking metrics, analyzing user engagement, and making regular updates to improve discoverability and conversions over time.",
  },
  {
    id: 4,
    question: "What are the benefits of ASO services?",
    answer: "ASO services can enhance app visibility, improve click-through rate, grow organic downloads, and lower acquisition costs. They also help retain users by presenting a clear, compelling app listing that converts visitors into active users.",
  },
  {
    id: 5,
    question: "What is the difference between ASO and SEO for mobile apps?",
    answer: "ASO improves visibility in app stores by optimizing keywords, metadata, and visuals, while SEO boosts rankings on search engines like Google. Using both helps drive traffic from search and convert more installs in stores.",
  },
  {
    id: 6,
    question: "What are the best practices for app listing optimization?",
    answer: "Best practices include keyword research, app title optimization, engaging descriptions, optimized screenshots and icons, and regular testing with A/B experiments. Monitoring analytics and adapting to store algorithm updates are also essential for sustained growth.",
  },
  {
    id: 7,
    question: "How do I find the best app store optimization agency in the US?",
    answer: "Look for an ASO agency with experience in iOS and Android optimization, transparent reporting, proven case studies, and a data-driven approach to keyword tracking and creative testing.",
  },
  {
    id: 8,
    question: "When to choose ASO services over in-house optimization?",
    answer: "In-house ASO gives you full control but needs significant time, tools, and expertise. Partnering with a professional ASO agency delivers faster results, expert insights, and scalable strategies, making it ideal for startups and growing apps.",
  },
  {
    id: 9,
    question: "What is the cost of ASO services per month?",
    answer: "Pricing depends on the scope of work, the number of markets targeted, and the level of ongoing monitoring required. Most agencies offer monthly plans ranging from basic optimization packages to full-service management.",
  },
  {
    id: 10,
    question: "Is there an ASO service package comparison available?",
    answer: "Yes, many agencies provide ASO service package comparisons outlining what's included, such as audits, keyword tracking, A/B testing, and reporting, so you can choose the plan that matches your goals and budget.",
  },
  {
    id: 11,
    question: "When should I hire an app store optimization service or buy ASO services?",
    answer: "You should hire ASO services when launching a new app, noticing declining rankings, or aiming to scale installs. Buying ASO services ensures professional optimization and ongoing updates that keep your listing competitive.",
  },
  {
    id: 12,
    question: "Can I get an ASO audit quote before signing up?",
    answer: "Yes, most ASO agencies offer a free or low-cost audit quote that highlights opportunities in your metadata, visuals, and ranking metrics before starting a full engagement.",
  },
  {
    id: 13,
    question: "Do you provide ASO service for startup app launches?",
    answer: "Yes, ASO services can be tailored specifically for startup apps, focusing on keyword discovery, competitive positioning, and conversion optimization to ensure a strong initial launch.",
  },
  {
    id: 14,
    question: "Why contract an ASO agency for app launch?",
    answer: "Contracting an ASO agency for launch ensures that your app is optimized from day one. Website Digitals helps maximize early visibility, attract the right users, and prevent costly launch mistakes with a tailored ASO plan.",
  },
  {
    id: 15,
    question: "What are the best practices for app listing optimization?",
    answer: "Best practices for an app listing optimization service include keyword research, engaging app titles, optimized screenshots and icons, and localized descriptions. Regular A/B testing and analytics-driven updates help maintain visibility and improve install rates.",
  },
 
  {
    id: 16,
    question: "Why should I hire an expert app store optimization consultant?",
    answer: "An expert app store optimization consultant provides tailored strategies, competitor insights, and data-driven recommendations. With in-depth knowledge of algorithm updates and store mechanics, consultants guide you in achieving measurable ranking improvements and sustained growth.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const appStoreOptimizationServicesSectionData = {
  heading: "Explore Our Full Suite of ASO Services",
  description: "We deliver complete ASO solutions for iOS and Android to help apps rank higher and generate measurable growth. Each service focuses on improving visibility, performance, and ROI to attract users and convert them effectively. Here's what our ASO services cover:",
  showDescription: true,
  cta: {
    label: "Get a Tailored ASO Plan",
    href: "#",
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const appStoreOptimizationIndustriesSectionData = {
  heading: "Industries We Serve",
  description: "Our expertise spans diverse industries, delivering tailored app store optimization strategies that drive measurable installs, visibility, and engagement. From B2C categories like gaming and food delivery to B2B solutions such as SaaS and workflow apps, we help apps achieve lasting growth with proven optimization tactics.",
  cta: {
    text: "Get a Tailored ASO Plan",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const appStoreOptimizationIndustriesCardsData = [
  {
    title: "Gaming",
    description: "We deliver expert app store optimization services for gaming, focusing on category alignment, keyword targeting, and creative sequencing. From optimizing preview frames to genre-specific terms, we help gaming apps attract players, boost installs, and strengthen retention.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Gaming App Store Optimization",
    width: 71,
    height: 71,
  },
  {
    title: "Travel Booking",
    description: "Our app store optimization services for travel booking focus on geo-localized keywords, seasonal trends, and creative localization. By aligning listings with peak travel periods and destination searches, we ensure your app reaches more travelers and drives sustained installs.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Travel Booking App Store Optimization",
    width: 71,
    height: 71,
  },
  {
    title: "Food Delivery",
    description: "With app store optimization services for food delivery, we target hyperlocal keywords, cuisine-based search terms, and listing creatives that highlight delivery speed. This approach improves visibility, attracts local users, and boosts organic installs in competitive food app markets.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Food Delivery App Store Optimization",
    width: 71,
    height: 71,
  },
  {
    title: "Fitness",
    description: "We provide tailored app store optimization services for fitness apps, optimizing for subscription-based keywords, workout features, and integrations like Apple Health or Google Fit. Our strategies improve discoverability, drive installs, and retain engaged, active users.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Fitness App Store Optimization",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description: "Our app store optimization services for saas help business apps capture high-intent users through metadata refinement, category optimization, and trial-related keywords. By optimizing creatives and store presence, SaaS apps improve installs and scale across iOS and Android.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "SaaS App Store Optimization",
    width: 71,
    height: 71,
  },
  {
    title: "Workflow",
    description: "We specialize in app store optimization services for workflow apps by targeting role-based keywords, integration terms, and automation-focused metadata. This ensures better discoverability, stronger conversion rates, and increased installs among professionals and teams seeking productivity solutions.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Workflow App Store Optimization",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const appStoreOptimizationWhyChooseUsSectionData = {
  heading: "Why Our ASO Company Is Trusted by App Owners?",
  description: "Our approach combines data-driven insights with hands-on expertise to deliver lasting improvements for your app's visibility and growth. Each step is designed to produce results that can be tracked and refined over time. Here's what sets our ASO apart:",
};

// Technologies Section Data (Section 9)
export const appStoreOptimizationTechnologiesSectionData = {
  heading: "Technologies We Use",
  description: "We work across major platforms, frameworks, and languages to deliver tailored ASO strategies. From iOS and Android to cross-platform technologies like Flutter and React Native, and native languages like Swift and Kotlin, our expertise ensures apps perform at their best across all stores.",
  showDescription: true,
};

// Technologies Data
export const appStoreOptimizationTechnologiesData = [
  {
    id: 1,
    title: "iOS",
    description: "Our iOS app store optimization services leverage App Store Connect features like Custom Product Pages, In-App Events, and Product Page Optimization. These tactics improve keyword rankings, drive higher CTR, and strengthen conversions for iOS apps.",
    width: 71,
    height: 71,
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    alt: "iOS App Store Optimization",
  },
  {
    id: 2,
    title: "Android",
    description: "Through android app store optimization services, we optimize Play Store listings using Store Listing Experiments, Custom Store Listings, and feature graphic testing. This helps Android apps improve visibility, installs, and user engagement across global markets.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    width: 71,
    height: 71,
    alt: "Android App Store Optimization",
  },
  {
    id: 3,
    title: "Flutter",
    description: "We provide flutter app store optimization services to keep cross-platform apps consistent across iOS and Android. From metadata synchronization to creative testing, Flutter apps achieve higher rankings and broader reach with a unified ASO strategy.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    width: 71,
    height: 71,
    alt: "Flutter App Store Optimization",
  },
  {
    id: 4,
    title: "React Native",
    description: "Our react native app store optimization services refine bundle consistency, listing creatives, and integration keywords across stores. This ensures React Native apps maintain visibility, improve installs, and scale effectively on both iOS and Android.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    width: 71,
    height: 71,
    alt: "React Native App Store Optimization",
  },
  {
    id: 5,
    title: "Swift",
    description: "With swift app store optimization services, we optimize native iOS apps using tactics like App Clips metadata, in-app review prompts, and release note refinement. These strategies improve discoverability, boost installs, and build user trust.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    width: 71,
    height: 71,
    alt: "React Native App Store Optimization",
  },
  {
    id: 6,
    title: "Kotlin",
    description: "Our kotlin app store optimization services enhance Android apps with in-app review flows, Instant Apps optimization, and update cadence management. These improvements increase visibility, user acquisition, and retention in the Play Store.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    width: 71,
    height: 71,
    alt: "React Native App Store Optimization",
  },
];

// Final CTA Section Data (Section 11)
export const appStoreOptimizationFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "App Store Optimization Services",
      href: "/digital-marketing/app-store-optimization-services",
    },
  },
  heading: "Make Your App Impossible to Miss",
  description: [
    "Competitors are after the same users, but your app deserves to stand out. With our expert app store optimization services, you can climb rankings, reach the right audience, and turn impressions into installs faster.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "App Store Optimization Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Increase Your Installs",
    href: "#",
    className: "offer-btn primary",
  },
};
