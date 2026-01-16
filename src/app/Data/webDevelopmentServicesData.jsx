import { BagIcon } from "@/icons";

// Metadata for Web Development Services
export const webDevelopmentServicesMetadata = {
  title: "#1 Web Development Company in USA | Website Digitals",
  description:
    "Get expert web development services in the USA. We build custom, fast, and secure websites that turn visitors into customers. Get a quote now!",
  keywords: "web development company, custom website development, web development services, USA web developers, website design and development",
  canonical: "https://www.websitedigitals.com/web-development/",
  openGraph: {
    title: "#1 Web Development Company in USA | Website Digitals",
    description:
      "Get expert web development services in the USA. We build custom, fast, and secure websites that turn visitors into customers. Get a quote now!",
    url: "https://www.websitedigitals.com/web-development/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/web-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "#1 Web Development Company in USA | Website Digitals",
    description:
      "Get expert web development services in the USA. We build custom, fast, and secure websites that turn visitors into customers. Get a quote now!",
    images: [
      "https://websitedigitals.com/assets/images/web-development-twitter-image.jpg",
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
    canonical: "https://www.websitedigitals.com/web-development/",
  },
};

export const webDevelopmentServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Web Development",
      href: "/web-development",
    },
  },
  heading: "Plan, Create, and [[Succeed]] with a Web Development Company",
  description: [
    "An expensive or outdated website can drain your budget, cost you leads, and weaken customer trust. To solve this, Website Digitals provides custom web development built for speed, security, scalability, and affordability.\n\nWe create websites that look exceptional, load fast, and work flawlessly on every device, handled start to finish by our experienced full-stack team.\n\nFrom business websites to eCommerce platforms, we deliver digital experiences designed to engage visitors and drive meaningful action.\n\nHere's what sets us apart:\n• Fast, secure, and up-to-date websites\n• Optimized for all devices\n• Complete development from idea to launch",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Start Building Your Website Today",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "ecommerce-development", label: "eCommerce Development" },
      { value: "wordpress-development", label: "WordPress Development" },
      { value: "shopify-development", label: "Shopify Development" },
      { value: "wix-development", label: "Wix Development" },
      { value: "squarespace-development", label: "Squarespace Development" },
      { value: "cms-development", label: "CMS Development" },
      { value: "web-portal-development", label: "Web Portal Development" },
      { value: "web-application-development", label: "Web Application Development" },
      { value: "web-maintenance", label: "Web Maintenance" },
      { value: "website-speed-optimization", label: "Website Speed Optimization" },
    ],
    initialValues: {
      help: "ecommerce-development",
    },
  },
};

export const webDevelopmentServicesData = [
  {
    id: 1,
    title: "eCommerce Development",
    description:
      "We build secure, scalable, and conversion-focused online stores. Our ecommerce website development services cover secure payment integration, online store development, and platforms such as Magento, WooCommerce, and Shopify Plus. Every project meets PCI DSS compliance and includes SSL certificates to ensure safe transactions, helping businesses launch robust, high-performance ecommerce solutions.",
    icon: <BagIcon />,
    isActive: true,
    image: "/assets/images/web-development/comprehensive-web-dev/ecommerce-development.svg",
  },
  {
    id: 2,
    title: "WordPress Development",
    description:
      "We offer custom WordPress development for businesses of all sizes, including WordPress theme customization, plugin development, and ecommerce builds with WooCommerce. Our team works with the Gutenberg editor, Elementor, and WPBakery to deliver functional, user-friendly websites.  We provide custom WordPress development solutions for businesses of all sizes, including theme customization, plugin development, and WooCommerce-based eCommerce builds. Our team leverages the Gutenberg editor, Elementor, and WPBakery to deliver scalable, high-performing, and user-friendly websites.",
    icon: <BagIcon />,
     isActive: false,
     image: "/assets/images/web-development/comprehensive-web-dev/wordpress-development.svg",
  },
  {
    id: 3,
    title: "Shopify Development",
    description:
      "We deliver complete Shopify store development services, from Shopify theme customization to Shopify app integration. Our expertise includes Shopify Liquid, dropshipping setup, and subscription ecommerce models. Certified Shopify Partner status (if applicable) ensures your store meets the highest standards.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/shopify-development.svg",
  },
  {
    id: 4,
    title: "Wix Development",
    description:
      "Our Wix website development services cater to small businesses, startups, and entrepreneurs looking for flexibility and visual appeal. We offer Wix SEO optimization, Wix ecommerce integration, and customization using the drag-and-drop builder with responsive templates from the Wix App Market integration. As a certified Wix Partner, we’ve delivered tailored Wix sites for clients across multiple industries.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/wix-development.svg",
  },
  {
    id: 5,
    title: "Squarespace Development",
    description:
      "We provide custom Squarespace website builds, Squarespace SEO services, and ecommerce setups using Squarespace templates, CSS customization, and ecommerce add-ons. With experience in Squarespace Circle membership, we design search-optimized sites that perform well in competitive markets.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/squarespace-development.svg",
  },
  {
    id: 6,
    title: "CMS Development",
    description:
      "We provide custom CMS development, including CMS migration services, enterprise CMS solutions, and builds using Drupal, Joomla, and headless CMS architectures. We also implement content workflow automation and ensure WCAG compliance for accessibility.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/cms-development.svg",
  },
  {
    id: 7,
    title: "Web Portal Development",
    description:
      "We create enterprise web portal development solutions for corporate, B2B, and government clients. Services include B2B portal solutions and client portal creation with features like secure login systems, role-based access, and cloud integration. Our ISO 9001-certified processes ensure every portal is secure, reliable, and built for long-term use.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/web-portal-development.svg",
  },
  {
    id: 8,
    title: "Web Application Development",
    description:
      "Our custom web app development services cover everything from SaaS application development to progressive web app services. We work with React, Angular, Node.js, API integration, and microservices architecture. Every app is built with strong security standards and hosted on compliant cloud platforms.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/web-application-development.svg",
  },
  {
    id: 9,
    title: "Web Maintenance",
    description:
      "Our website maintenance services include security updates, backup and monitoring, and quick issue resolution. With uptime monitoring, malware removal, and version control, we keep websites secure and running around the clock using trusted monitoring tools.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/web-maintenance.svg",
  },
  {
    id: 10,
    title: "Website Speed Optimization",
    description:
      "Our speed-up website loading service focuses on website performance tuning and core web vitals optimization for faster browsing. We use lazy loading, image compression, CDN integration, and advanced caching following Google PageSpeed Insights best practices to enhance both speed and user experience.",
    icon: <BagIcon />,
    isActive: false,
    image: "/assets/images/web-development/comprehensive-web-dev/website-speed-optimization.svg",
  },
];

export const webDevelopmentServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Us the Right Web Development Firm",
  description: [
    "A strong web development firm does more than deliver code. It understands your goals, maintains clear communication, and builds solutions designed to produce measurable results. \n  At Website Digitals, we combine certified expertise with proven processes to complete every project on time, within budget, and ready to perform.\n Here’s what makes our approach stand out. "
  ],
  items: [
    {
      id: "webdev-firstScroller",
      step: 1,
      title: "Real-time Communication",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Working with US-based developers ensures direct and real-time collaboration without time zone delays or communication gaps. We understand the standards of United States business credibility and keep projects moving smoothly from kickoff to delivery.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Real-time Communication",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdev-secondScroller",
      step: 2,
      title: "Certified Developers & Proven Processes",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team includes Microsoft Certified professionals and Google Partner specialists, applying industry-recognized best practices to every project. With structured workflows that minimize risks and maintain quality, we deliver results that are consistent, reliable, and built to last.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Builds Trust",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdev-thirdScroller",
      step: 3,
      title: "Transparent Pricing",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "From the first proposal to the final invoice, our transparent pricing approach provides a clear breakdown of costs so you can budget with confidence. No hidden fees. Just honest pricing that supports long-term trust.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdev-fourthScroller",
      step: 4,
      title: "SEO-Optimized Websites from Day One",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every website is launched with on-page optimization and structured data implemented from the start. This helps search engines properly index your site and gives you an early boost in rankings, following the latest technical SEO best practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "SEO-Optimized Websites from Day One",
        width: 669,
        height: 376,
      },
    },
    {
      id: "webdev-fifthScroller",
      step: 5,
      title: "Expertise Across Industries",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We have delivered solutions for healthcare, finance, and retail web solutions, adapting strategies to meet each sector’s needs. Our industry experience includes compliance with standards such as HIPAA for healthcare and PCI DSS for secure financial transactions.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Expertise Across Industries",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const webDevelopmentServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Web Development",
      href: "/web-development",
    },
  },
  heading: "Get a Website Developed to Convert",
  description: [
    "Your website should do more than look good. It should attract visitors, keep them engaged, and turn them into customers. We create scalable, secure, and high-performing websites built for long-term business growth.",
  ],
  bullets: [],
  cta: {
    text: "Start Your Web Development Now",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Web Development Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const webDevelopmentServicesStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Websites Built",
  },
  {
    id: 2,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 3,
    value: 99,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    id: 4,
    value: 120,
    suffix: "%",
    label: "Avg. Conversion Growth",
  },
  {
    id: 5,
    value: 50,
    suffix: "+",
    label: "Industries Served",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const webDevelopmentServicesImpactCardsData = [
  {
    id: 1,
    title: "Supports Your Goals",
    description:
      "An effective website is built to align with your business objectives from day one. Scalable and secure development ensures your platform can expand with your growth while safeguarding sensitive data. By applying responsive design and mobile-first principles, your site stays accessible to users on any device, enabling business expansion without costly rebuilds.",
    icon: "goals",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
    image: "/assets/images/web-development/section-1/supports-your-goals.svg",
  },
  {
    id: 2,
    title: "Builds Trust",
    description:
      "Visitors are more likely to engage with brands that offer a fast, secure, and visually consistent online experience. Certified developers who adhere to quality assurance standards, such as ISO 9001 for process reliability and WCAG accessibility guidelines for inclusivity, create platforms that inspire confidence. Beyond technical compliance, being featured in respected directories like Clutch and GoodFirms further reinforces credibility and professionalism.",
    icon: "trust",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
    image: "/assets/images/web-development/section-1/builds-trust.svg",
  },
  {
    id: 3,
    title: "Drives Results",
    description:
      "Modern web development goes beyond visual appeal. SEO-driven strategies that prioritize web accessibility, performance optimization, and compliance with search engine best practices make websites easier to find and navigate more quickly. These improvements consistently lead to higher user engagement and increased conversion rates, transforming visitors into customers.",
    icon: "results",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
    image: "/assets/images/web-development/section-1/drives-results.svg",
  },
  {
    id: 4,
    title: "Leverages Advanced Technologies",
    description:
      "Staying competitive means choosing the right tools for your needs. Modern frameworks such as React, Angular, and Node.js are the latest technologies that support fast, interactive, and maintainable websites, helping ensure your platform delivers strong performance today while remaining flexible for future advancements.",
    icon: "technology",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
    image: "/assets/images/web-development/section-1/leverages-advanced-technologies.svg",
  },
  {
    id: 5,
    title: "Creates a Better User Experience",
    description:
      "Professional web development companies carefully consider how every design element, feature, and functionality impacts the end user. This attention to detail results in intuitive navigation, consistent branding, and seamless interaction that encourage visitors to stay longer, explore more, and take meaningful action.",
    icon: "ux",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
    image: "/assets/images/web-development/section-1/better-user-experience.svg",
  },
];

// Industries Data
export const webDevelopmentServicesIndustriesData = [
  {
    id: 1,
    title: "Healthcare",
    description:
      "HIPAA-compliant web development with secure patient portals, medical data protection, and accessibility features for healthcare providers and medical institutions.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 2,
    title: "Finance",
    description:
      "Bank-grade security web development with SOC 2 compliance, encrypted data storage, and advanced monitoring for financial institutions and fintech applications.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 3,
    title: "E-commerce",
    description:
      "Custom e-commerce solutions with secure checkout, inventory management, payment processing, and mobile-optimized shopping experiences for online businesses.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 4,
    title: "Education",
    description:
      "Scalable web development for educational institutions with LMS integration, student portals, and content delivery networks for seamless online learning experiences.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 5,
    title: "Media & Entertainment",
    description:
      "High-performance web development optimized for media streaming, content delivery, and bandwidth-intensive applications with global CDN integration.",
    icon: "/assets/images/industry/media.svg",
  },
  {
    id: 6,
    title: "SaaS Applications",
    description:
      "Cloud-native web development for SaaS platforms with auto-scaling, load balancing, and multi-tenant architecture support for growing software businesses.",
    icon: "/assets/images/industry/saas.svg",
  },
];

// Technologies Data
export const webDevelopmentServicesTechnologiesData = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "React, Angular, Vue.js, HTML5/CSS3",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/front-end-development.svg",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Node.js, PHP, Laravel, .NET",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/back-end-development.svg",
  },
  {
    id: 3,
    title: "Content Management Systems",
    description:
      "WordPress, Drupal, Joomla, Shopify, Magento, Squarespace",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/content-management-systems.svg",
  },
  {
    id: 4,
    title: "eCommerce Solutions",
    description:
      "WooCommerce, Shopify Plus, Magento Commerce",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/ecommerce-solutions.svg",
  },
  {
    id: 5,
    title: "Database & API Integration",
    description:
      "MySQL, PostgreSQL, MongoDB",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/ecommerce-solutions.svg",
  },
  {
    id: 6,
    title: "Performance & Optimization Tools",
    description:
      "CDN integration, image compression tools, lazy loading, Google PageSpeed Insights",
    icon: "/assets/images/technologyIcons.png",
    image: "/assets/images/web-development/technology/performance-optimization.svg",
  },
];

// Industries Cards Data (for WebBuilderCardSection)
// Industries Cards Data (for WebBuilderCardSection)
export const webDevelopmentServicesIndustriesCardsData = [
  {
    title: "Real-time Communication",
    description:
      "Working with US-based developers ensures direct and real-time collaboration without time zone delays or communication gaps. We understand the standards of United States business credibility and keep projects moving smoothly from kickoff to delivery.",
    imgOriginal: `/assets/images/web-development/web-development-firm/original/real-time-communication.svg`,
    imgWhite: `/assets/images/web-development/web-development-firm/hover/real-time-communication.svg`,
    alt: "Real-time Communication",
    width: 71,
    height: 71,
  },
  {
    title: "Certified Developers & Proven Processes",
    description:
      "Our team includes Microsoft Certified professionals and Google Partner specialists, applying industry-recognized best practices to every project. With structured workflows that minimize risks and maintain quality, we deliver results that are consistent, reliable, and built to last.",
    imgOriginal: `/assets/images/web-development/web-development-firm/original/certified-developers.svg`,
    imgWhite: `/assets/images/web-development/web-development-firm/hover/certified-developers.svg`,
    alt: "Certified Developers",
    width: 71,
    height: 71,
  },
  {
    title: "Transparent Pricing",
    description:
      "From the first proposal to the final invoice, our transparent pricing approach provides a clear breakdown of costs so you can budget with confidence. No hidden fees. Just honest pricing that supports long-term trust.",
    imgOriginal: `/assets/images/web-development/web-development-firm/original/transparent-pricing.svg`,
    imgWhite: `/assets/images/web-development/web-development-firm/hover/transparent-pricing.svg`,
    alt: "Transparent Pricing",
    width: 71,
    height: 71,
  },
  {
    title: "SEO-Optimized Websites from Day One",
    description:
      "Every website is launched with on-page optimization and structured data implemented from the start. This helps search engines properly index your site and gives you an early boost in rankings, following the latest technical SEO best practices.",
    imgOriginal: `/assets/images/web-development/web-development-firm/original/seo-optimized-websites.svg`,
    imgWhite: `/assets/images/web-development/web-development-firm/hover/seo-optimized-websites.svg`,
    alt: "SEO-Optimized Websites",
    width: 71,
    height: 71,
  },
  {
    title: "Expertise Across Industries",
    description:
      "We have delivered solutions for healthcare, finance, and retail web solutions, adapting strategies to meet each sector’s needs. Our industry experience includes compliance with standards such as HIPAA for healthcare and PCI DSS for secure financial transactions.",
    imgOriginal: `/assets/images/web-development/web-development-firm/original/expertise-across-industries.svg`,
    imgWhite: `/assets/images/web-development/web-development-firm/hover/expertise-across-industries.svg`,
    alt: "Industry Expertise",
    width: 71,
    height: 71,
  },
];


// Impact Section Data (for DevelopmentCards component)
export const webDevelopmentServicesImpactSectionData = {
  heading: "Why Website Development Is Essential for Business Success",
  showDescription: true,
  description:
    "A well-planned website is more than a place to showcase your business. It is the foundation for sustainable growth, earning customer trust, and building long-term success.\n Expert web development blends design, technology, and strategy to create an online presence that not only looks professional but also drives measurable business results\n Below are the key reasons why partnering with a professional web development company or a custom website solutions provider benefits businesses across all industries.",
};

// Workflow Data (for StepSection component)
export const webDevelopmentServicesWorkflowData = {
  title: "Our Web Development Process",
  description: [
    "A successful website starts with a clear plan and is built through a structured process that ensures quality at every stage. At Website Digitals, each project follows a proven workflow designed to align with your goals, maintain transparency, and deliver results you can measure.",
    "The process we follow includes:"
  ],
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description:
        "We begin by defining your website goals and understanding your target audience. This stage includes competitor research to identify opportunities and set benchmarks. The outcome is a detailed project plan that guides every decision moving forward.",
      image: "/assets/images/web-development/development-process/discovery-planning.svg",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Prototyping",
      description:
        "Our design team creates UX/UI design concepts that focus on both aesthetics and usability. We produce responsive layouts to ensure your website looks and functions seamlessly across all devices. Before development begins, you'll see interactive prototypes that bring your vision to life.",
      image: "/assets/images/web-development/development-process/design-prototyping.svg",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Development & Integration",
      description:
        "Once designs are approved, our developers bring them to life with clean, efficient code. This phase includes API integration for third-party services, database setup, and any required custom features. The result is a fully functional platform tailored to your specifications.",
      image: "/assets/images/web-development/development-process/development-integration.svg",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Testing & Launch",
      description:
        "Before going live, we conduct thorough QA testing to identify and fix any issues. This includes performance checks to ensure fast load times, mobile responsiveness, and browser compatibility. Once testing is complete, we coordinate a smooth, secure launch.",
      image: "/assets/images/web-development/development-process/testing-launch.svg",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Ongoing Support & Optimization",
      description:
        "Our relationship doesn't end at launch. We provide site maintenance to keep your website secure, along with regular SEO updates to maintain and improve search rankings. Ongoing performance monitoring ensures your site continues to meet growing user and business needs.",
      image: "/assets/images/web-development/development-process/ongoing-support-optimization.svg",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const webDevelopmentServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Real-time Communication",
    description:
      "Working with US-based developers ensures direct and real-time collaboration without time zone delays or communication gaps. We understand the standards of United States business credibility and keep projects moving smoothly from kickoff to delivery.",
    icon: "communication",
  },
  {
    id: 2,
    title: "Certified Developers & Proven Processes",
    description:
      "Our team includes Microsoft Certified professionals and Google Partner specialists, applying industry-recognized best practices to every project. With structured workflows that minimize risks and maintain quality, we deliver results that are consistent, reliable, and built to last.",
    icon: "certified",
  },
  {
    id: 3,
    title: "Transparent Pricing",
    description:
      "From the first proposal to the final invoice, our transparent pricing approach provides a clear breakdown of costs so you can budget with confidence. No hidden fees. Just honest pricing that supports long-term trust.",
    icon: "pricing",
  },
  {
    id: 4,
    title: "SEO-Optimized Websites from Day One",
    description:
      "Every website is launched with on-page optimization and structured data implemented from the start. This helps search engines properly index your site and gives you an early boost in rankings, following the latest technical SEO best practices.",
    icon: "seo",
  },
  {
    id: 5,
    title: "Expertise Across Industries",
    description:
      "We have delivered solutions for healthcare, finance, and retail web solutions, adapting strategies to meet each sector's needs. Our industry experience includes compliance with standards such as HIPAA for healthcare and PCI DSS for secure financial transactions.",
    icon: "expertise",
  },
];

// FAQ Data
export const webDevelopmentServicesFAQsData = [
  {
    id: 1,
    question: "How can I hire Website Digitals for my project?",
    answer:
      "Hiring Website Digitals is simple. Start by contacting our team through our website or phone. We'll discuss your goals, budget, and timeline, then provide a detailed proposal outlining the best web development approach for your needs.",
  },
  {
    id: 2,
    question: "How does Website Digitals ensure fast and robust websites?",
    answer:
      "We use optimized coding practices, lightweight frameworks, and performance-focused hosting. Our developers implement speed optimization techniques, security best practices, and responsive design to deliver sites that load quickly and perform flawlessly across all devices.",
  },
  {
    id: 3,
    question: "Does Website Digitals handle the entire web development process?",
    answer:
      "Yes. As a full-stack web development company, we manage everything from planning and design to coding, testing, and launch. We also provide ongoing maintenance to keep your website secure, updated, and performing at its best.",
  },
  {
    id: 4,
    question: "Why should I choose Website Digitals over other agencies?",
    answer:
      "Website Digitals combines proven expertise, transparent communication, and a results-driven approach. Our solutions are tailored to your business goals, ensuring you get a high-quality, secure, and scalable website that supports long-term growth.",
  },
  {
    id: 5,
    question: "What does a web development company do?",
    answer:
      "A web development company plans, designs, builds, and maintains websites or web applications. This includes front-end design, back-end programming, database integration, website security, performance optimization, and ongoing support to keep the site operating efficiently.",
  },
  {
    id: 6,
    question: "How do I choose a web development firm in the U.S.?",
    answer:
      "Seek a proven track record, relevant industry experience, clear communication, and measurable results. Review independent directories, industry award listings, or client feedback platforms such as Clutch or GoodFirms to compare highly rated U.S. agencies.",
  },
  {
    id: 7,
    question: "Front-end vs Back-end Development: What's the Difference?",
    answer:
      "Front-end development handles the visual and interactive elements users see—layout, design, and user experience. Back-end development powers the server, database, and application logic, ensuring the site runs securely and reliably.",
  },
  {
    id: 8,
    question: "How can I hire a web development company in the U.S.?",
    answer:
      "Define your needs and budget, research agencies, compare proposals, and check verified client reviews before making a decision.",
  },
  {
    id: 9,
    question: "What are web development company rates?",
    answer:
      "Rates depend on project scope, technology stack, developer expertise, location, and whether you hire an agency or a freelancer. Basic websites can start at a few thousand dollars, while large-scale, custom builds with advanced features may exceed $50,000.",
  },
  {
    id: 10,
    question: "Who are considered the best custom web development agencies in the U.S.?",
    answer:
      "The answer depends on your goals, budget, and industry. Look for agencies with strong case studies, verified client feedback, recognized certifications (such as ISO 9001 or Google Partner), and consistent rankings on respected industry directories or award platforms.",
  },
  {
    id: 11,
    question: "What's the difference between Clutch and GoodFirms when evaluating providers?",
    answer:
      "Both are credible agency review resources. Clutch focuses on detailed case studies and direct client interviews, while GoodFirms provides research-based rankings and in-depth service profiles. Checking both offers a broader perspective and helps you make a confident, informed decision.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const webDevelopmentServicesSectionData = {
  heading: "Our Comprehensive Web Development Services to Grow Your Business",
  description:
    "We provide professional web development solutions for businesses across the United States, combining proven practices, industry certifications, and modern technologies to deliver results that drive growth. Explore our specialized services below.",
  showDescription: true,
};

// Why Choose Us Section Data (Section 7)
export const webDevelopmentServicesWhyChooseUsSectionData = {
  heading: "What Makes Us the Right Web Development Firm",
  description:
    "A strong web development firm does more than deliver code. It understands your goals, maintains clear communication, and builds solutions designed to produce measurable results. At Website Digitals, we combine certified expertise with proven processes to complete every project on time, within budget, and ready to perform. Here's what makes our approach stand out.",
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const webDevelopmentServicesIndustriesSectionData = {
  heading: "What Makes Us the Right Web Development Firm",
  description:
    "A strong web development firm does more than deliver code. It understands your goals, maintains clear communication, and builds solutions designed to produce measurable results. \n At Website Digitals, we combine certified expertise with proven processes to complete every project on time, within budget, and ready to perform. \n Here's what makes our approach stand out.",
  cta: {
    text: "Start Building Your Website Today",
    href: "#",
    className: "offer-btn primary",
    show: false,
  },
};

// Workflow Section Data (Section 8)
export const webDevelopmentServicesWorkflowSectionData = {
  heading: "Our Web Development Process",
  description:
    "A successful website starts with a clear plan and is built through a structured process that ensures quality at every stage. At Website Digitals, each project follows a proven workflow designed to align with your goals, maintain transparency, and deliver results you can measure. The process we follow includes:",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const webDevelopmentServicesTechnologiesSectionData = {
  heading: "Technology We Use",
  description:
    "",
  showDescription: false,
  cta: false,
};

// Final CTA Section Data (Section 11)
export const webDevelopmentServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Web Development",
      href: "/web-development",
    },
  },
  heading: "Get a Website Developed to Convert",
  description: [
    "Your website should do more than look good. It should attract visitors, keep them engaged, and turn them into customers. We create scalable, secure, and high-performing websites built for long-term business growth.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Web Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start Your Web Development Now",
    href: "#",
    className: "offer-btn primary",
  },
};
