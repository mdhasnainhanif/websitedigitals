import { BagIcon } from "@/icons";

// Metadata for Custom Web Design Agency
export const customWebDesignAgencyMetadata = {
  title: "Hire Trusted Custom Web Design Agency | Website Digitals",
  description:
    "Looking for a custom web design agency? We build fast, mobile-first, and scalable websites designed to deliver real results.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-design/custom-web-design-agency/",
  openGraph: {
    title: "Hire Trusted Custom Web Design Agency | Website Digitals",
    description:
      "Looking for a custom web design agency? We build fast, mobile-first, and scalable websites designed to deliver real results.",
    url: "https://www.websitedigitals.com/web-design/custom-web-design-agency/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/custom-web-design-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Custom Web Design Agency by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire Trusted Custom Web Design Agency | Website Digitals",
    description:
      "Looking for a custom web design agency? We build fast, mobile-first, and scalable websites designed to deliver real results.",
    images: [
      "https://websitedigitals.com/assets/images/custom-web-design-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-design/custom-web-design-agency/",
  },
};

export const customWebDesignAgencyBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Custom Web Design Agency",
      href: "/web-design/custom-web-design-agency",
    },
  },
  heading:
    "Custom Web Design Services By [[Website Digitals]] To Grow Your Brand",
  description: [
    "Many business websites underperform because they rely on generic templates that fail to build trust.\n At Website Digitals, we create tailored, SEO-friendly, and mobile-first websites that showcase your brand, engage visitors, and convert them into customers.\n\nWhether you need ecommerce website development, small business website design, or enterprise-scale solutions, we deliver fast and modern websites built to drive measurable results.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Request a Custom Quote",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-web-design", label: "Custom Web Design" },
      {
        value: "ecommerce-development",
        label: "Ecommerce Website Development",
      },
      {
        value: "small-business-design",
        label: "Small Business Website Design",
      },
      { value: "enterprise-solutions", label: "Enterprise Web Solutions" },
      { value: "website-redesign", label: "Website Redesign Services" },
      { value: "ui-ux-design", label: "UI/UX Design Services" },
    ],
    initialValues: {
      help: "custom-web-design",
    },
  },
};

export const customWebDesignAgencyData = [
  {
    id: 1,
    title: "Responsive & Mobile-First Design",
    description:
      "We design for mobile first, guaranteeing that your site looks and works perfectly on any device, improving usability, accessibility, and search rankings.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Third-Party Integrations",
    description:
      "From CRM and analytics platforms to booking systems and marketing automation, we seamlessly connect your website to the tools you rely on.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "CMS Integration",
    description:
      "Whether it's WordPress, Webflow, or a custom CMS, we integrate flexible content management solutions that make updating and scaling your site effortless.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Secure Checkout",
    description:
      "From product catalogs to payment gateways, we create seamless ecommerce experiences that boost conversions and keep transactions safe.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "SEO-Optimized Site Architecture",
    description:
      "Our sites are built with clean code, schema markup, and logical URL structures, setting you up for better visibility on Google and long-term search success.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const customWebDesignAgencyScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Sets Our Custom Web Design Services Apart",
  description: [""],
  showDescription: false,
  items: [
    {
      id: "custom-firstScroller",
      step: 1,
      title: "Tailored Designs for Niche Markets",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We deliver industry-specific web design solutions that go beyond generic templates. From healthcare and finance to real estate and education, each website is designed to meet sector-specific requirements while reflecting the brand’s unique identity.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Tailored Designs for Niche Markets",
        width: 669,
        height: 376,
      },
    },
    {
      id: "custom-secondScroller",
      step: 2,
      title: "Ongoing Website Maintenance and Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A website’s success does not end at launch. Through our website maintenance services, we provide continuous updates, security monitoring, and performance optimization to keep websites running smoothly while businesses focus on growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Ongoing Website Maintenance and Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "custom-thirdScroller",
      step: 3,
      title: "Optimized for Mobile and Voice Search",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "User behavior is shifting rapidly toward mobile and smart devices. Our mobile-friendly website design ensures fast, responsive performance across screens while preparing websites for the rise of voice-based search. This creates a seamless experience for today’s audiences.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Optimized for Mobile and Voice Search",
        width: 669,
        height: 376,
      },
    },
    {
      id: "custom-fourthScroller",
      step: 4,
      title: "Futuristic Scalable Technology",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Websites need to grow alongside the business they represent. By building with scalable website solutions, we allow clients to add new features, integrate advanced tools, and adapt to evolving customer demands without the need for a full rebuild.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Futuristic Scalable Technology",
        width: 669,
        height: 376,
      },
    },
    {
      id: "custom-fifthScroller",
      step: 5,
      title: "Transparent Pricing Without Hidden Costs",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our approach to custom website pricing is upfront and easy to understand. Every project comes with a detailed breakdown so clients know exactly what they are paying for. This transparency builds trust and ensures there are no surprises during or after the project.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "Transparent Pricing Without Hidden Costs",
        width: 669,
        height: 376,
      },
    },
  ],

  cta: null,
};

export const customWebDesignAgencyBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Custom Web Design Agency",
      href: "/web-design/custom-web-design-agency",
    },
  },
  heading: "Let's Build a Website That Works",
  description: [
    "Your website is your digital storefront. Make it count with a design that attracts, engages, and converts.",
  ],
  bullets: [],
  cta: {
    text: "Start My Project",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Custom Web Design Agency Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const customWebDesignAgencyStatsData = [
  {
    id: 1,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    id: 2,
    value: 200,
    suffix: "+",
    label: "Website Redesigns",
  },
  {
    id: 3,
    value: 4.8,
    suffix: "/5",
    label: "Client Rating",
  },
  {
    id: 4,
    value: 85,
    suffix: "%",
    label: "Faster Load Speeds",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const customWebDesignAgencyImpactCardsData = [
  {
    id: 1,
    title: "Build a Strong Brand Identity",
    description:
      "A custom web design agency will create a custom website that will reflect your business goals. Unlike a bespoke website design firm using templates, the focus is on a tailored design that builds trust and leaves a lasting first impression.",
    icon: "conversion",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 2,
    title: "Improve User Experience",
    description:
      "A custom website design enhances user experience (UX) through responsive web design and fast performance. By ensuring seamless navigation across devices, businesses gain lower bounce rates, higher engagement, and SEO-friendly websites that convert.",
    icon: "engagement",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 3,
    title: "Scale With Business Growth",
    description:
      "Websites built with enterprise web solutions are designed to adapt as your business grows. They can easily support new features, ecommerce integration, and market changes, keeping your brand scalable and future-ready.",
    icon: "roi",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 4,
    title: "Outrank Your Competitors",
    description:
      "A custom web design agency delivers SEO-friendly websites designed for visibility. Using modern website redesign services and optimized structures, businesses achieve stronger rankings and stay ahead of competitors in search results.",
    icon: "trust",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const customWebDesignAgencyImpactSectionData = {
  heading: "Why Working With a Custom Web Design Agency Pays Off",
  showDescription: false,
  description: "",
};

// Industries Data
export const customWebDesignAgencyIndustriesData = [
  {
    id: 1,
    title: "Law Firms",
    description:
      "Our custom web design agency for law firms builds professional websites with attorney bios, practice-area pages, and intake forms that attract new clients and enhance credibility.",
    icon: "/assets/images/industry/law.svg",
  },
  {
    id: 2,
    title: "Healthcare Practices",
    description:
      "As a trusted custom web design agency for healthcare practices, we create patient-focused websites with secure forms, online booking, and provider profiles to boost engagement and trust.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Our custom web design agency for real estate delivers IDX-ready websites with property search, map views, and lead capture tools that convert browsers into qualified buyers.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 4,
    title: "eCommerce",
    description:
      "We are a custom web design agency for eCommerce, building conversion-focused online stores with seamless checkout, mobile-first design, and product pages optimized for sales.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 5,
    title: "Restaurants",
    description:
      "Our custom web design agency for restaurants creates menu-driven websites with online ordering, reservations, and integrations that help you fill tables and drive repeat business.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 6,
    title: "Construction",
    description:
      "As a custom web design agency for construction, we design scalable sites featuring project portfolios, RFQ forms, and certifications to attract clients and win more bids.",
    icon: "/assets/images/industry/construction.svg",
  },
];

// Technologies Data (Platforms)
export const customWebDesignAgencyTechnologiesData = [
  {
    id: 1,
    title: "WordPress",
    description:
      "Our team, as a custom WordPress web design agency, builds SEO-friendly sites with custom post types, Gutenberg blocks, and easy content management, empowering you to update your site without developer support.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Shopify",
    description:
      "Partnering with a custom Shopify web design agency ensures conversion-optimized online stores, custom themes, and smooth checkout flows that drive higher sales and repeat customers.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Magento",
    description:
      "As an experienced custom Magento web design agency, we deliver enterprise-level eCommerce solutions with multi-store management, advanced product catalogs, and performance tuning for high-traffic sites.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Drupal",
    description:
      "Our custom Drupal web design agency builds secure, content-rich websites with advanced permissions, workflows, and integrations, making them ideal for enterprises and organizations with complex needs.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Angular",
    description:
      "As a custom Angular web design agency, we create fast, interactive SPAs and PWAs using Angular Universal for SEO and smooth, app-like user experiences.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Laravel",
    description:
      "Our custom Laravel web design agency develops scalable web applications and APIs with clean code, strong security, and performance enhancements like caching and queue management.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const customWebDesignAgencyWorkflowData = {
  title: "Our Process Behind Every Custom Website",
  description:
    "Every custom website project follows a structured approach that ensures quality, performance, and alignment with business goals. Our proven process delivers results that exceed expectations.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery and Strategy",
      description:
        "Every project begins with a website discovery phase where we learn about goals, target audience, and competitors. This stage sets the foundation for a strategy that aligns design decisions with measurable business outcomes.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "UX and Wireframing",
      description:
        "Next, our team develops wireframes and prototypes focused on user interface design. By mapping user journeys before development, we ensure that the final layout supports both clarity and engagement.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Custom Development and Integration",
      description:
        "Once the structure is approved, we move into CMS web development and integrations. This step ensures the website is built on a scalable platform with the flexibility to add features such as eCommerce, booking systems, or CRM tools.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Testing and Quality Assurance",
      description:
        "Before launch, each project undergoes rigorous website quality assurance checks. From browser compatibility to page speed, every detail is tested to ensure the site works flawlessly across devices.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Launch and Ongoing Optimization",
      description:
        "After the launch, we provide continuous website optimization services to refine performance, track user behavior, and apply updates. This keeps the website aligned with evolving business needs and digital trends.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const customWebDesignAgencyWhyChooseUsData = [
  {
    id: 1,
    title: "Tailored Designs for Niche Markets",
    description:
      "We deliver industry-specific web design solutions that go beyond generic templates. From healthcare and finance to real estate and education, each website is designed to meet sector-specific requirements while reflecting the brand's unique identity.",
    icon: "data",
  },
  {
    id: 2,
    title: "Ongoing Website Maintenance and Support",
    description:
      "A website's success does not end at launch. Through our website maintenance services, we provide continuous updates, security monitoring, and performance optimization to keep websites running smoothly while businesses focus on growth.",
    icon: "responsive",
  },
  {
    id: 3,
    title: "Optimized for Mobile and Voice Search",
    description:
      "User behavior is shifting rapidly toward mobile and smart devices. Our mobile-friendly website design ensures fast, responsive performance across screens while preparing websites for the rise of voice-based search. This creates a seamless experience for today's audiences.",
    icon: "seo",
  },
  {
    id: 4,
    title: "Futuristic Scalable Technology",
    description:
      "Websites need to grow alongside the business they represent. By building with scalable website solutions, we allow clients to add new features, integrate advanced tools, and adapt to evolving customer demands without the need for a full rebuild.",
    icon: "trust",
  },
  {
    id: 5,
    title: "Transparent Pricing Without Hidden Costs",
    description:
      "Our approach to custom website pricing is upfront and easy to understand. Every project comes with a detailed breakdown so clients know exactly what they are paying for. This transparency builds trust and ensures there are no surprises during or after the project.",
    icon: "goals",
  },
];

// FAQ Data
export const customWebDesignAgencyFAQsData = [
  {
    id: 1,
    question:
      "What makes Website Digitals different from other custom web design agencies?",
    answer:
      "At Website Digitals, every project is built from the ground up, no generic templates. As a custom web design agency, we focus on responsive layouts, SEO-friendly websites, and designs aligned with each client's brand identity. Our process blends strategy, usability, and scalability, ensuring websites not only look sharp but also deliver measurable business results.",
  },
  {
    id: 2,
    question:
      "Does Website Digitals provide ongoing support after launching my website?",
    answer:
      "Yes. Beyond design and development, Website Digitals offers comprehensive website maintenance services. We handle updates, security, performance monitoring, and website optimization services so clients can focus on growth. This commitment to long-term support sets us apart from agencies that end involvement at launch.",
  },
  {
    id: 3,
    question: "How much does a custom website with Website Digitals cost?",
    answer:
      "Our custom website pricing depends on project scope, required features, and industry needs. Whether it's ecommerce website development, small business website design, or enterprise web solutions, we provide transparent quotes with no hidden costs. Every investment is detailed clearly, helping clients understand the value they're getting upfront.",
  },
  {
    id: 4,
    question: "What is a custom web design agency?",
    answer:
      "A custom web design agency creates websites that are built from scratch instead of relying on templates. This means every aspect of the design, layout, navigation, and features is tailored to the brand's goals, industry, and target audience.",
  },
  {
    id: 5,
    question: "What are the benefits of custom website design over templates?",
    answer:
      "The biggest benefit of custom website design over templates is flexibility; your site can be tailored to your brand, goals, and functionality needs, rather than being limited by pre-set options.",
  },
  {
    id: 6,
    question: "How do I hire a custom web design agency?",
    answer:
      "To hire a custom web design agency, businesses should look for agencies with industry experience, proven case studies, and transparent processes. Scheduling a consultation is the best way to discuss goals and explore tailored design options.",
  },
  {
    id: 7,
    question: "Are there affordable custom website design packages in the USA?",
    answer:
      "Yes, many agencies provide affordable custom website design packages that businesses can benefit from. Packages vary by service scope but should always include responsive layouts, basic SEO setup, and clear pricing without hidden costs.",
  },
  {
    id: 8,
    question: "Do you offer custom ecommerce web design services near me now?",
    answer:
      "Yes. We provide custom ecommerce design services for businesses across the U.S., including secure checkout, catalog management, and mobile-friendly layouts.",
  },
  {
    id: 9,
    question: "Can I book a consultation with a US web design company?",
    answer:
      "Yes. Our consultations go beyond a quick introduction; we take the time to understand your goals, challenges, and expectations, then outline a clear strategy for building a website that truly supports your business.",
  },
  {
    id: 10,
    question:
      "What is the difference between custom website design and website builders?",
    answer:
      "When comparing custom website design and website builders, the difference lies in ownership and performance. Website builders are quick and cheap but limited in functionality. A custom website is more scalable, SEO-friendly, and designed to meet long-term business goals.",
  },
  {
    id: 11,
    question: "How does a premium custom web design agency improve ROI?",
    answer:
      "Working with a premium custom web design agency helps boost ROI through conversion-focused layouts, faster performance, and scalable features aligned with business objectives. Explore our portfolio to see real results.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const customWebDesignAgencyServicesSectionData = {
  heading: "Complete Web Design Services to Build Your Presence",
  description: "",
  showDescription: false,
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const customWebDesignAgencyIndustriesSectionData = {
  heading: "Sectors We Help Grow",
  description:
    "We partner with businesses across industries, creating tailored websites that engage audiences and deliver measurable results through thoughtful design, strategy, and technology.",
  cta: {
    text: "Get Custom Quote",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const customWebDesignAgencyIndustriesCardsData = [
  {
    title: "Law Firms",
    description:
      "Our custom web design agency for law firms builds professional websites with attorney bios, practice-area pages, and intake forms that attract new clients and enhance credibility.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Law Firms Custom Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare Practices",
    description:
      "As a trusted custom web design agency for healthcare practices, we create patient-focused websites with secure forms, online booking, and provider profiles to boost engagement and trust.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Practices Custom Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Our custom web design agency for real estate delivers IDX-ready websites with property search, map views, and lead capture tools that convert browsers into qualified buyers.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Custom Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "eCommerce",
    description:
      "We are a custom web design agency for eCommerce, building conversion-focused online stores with seamless checkout, mobile-first design, and product pages optimized for sales.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "eCommerce Custom Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurants",
    description:
      "Our custom web design agency for restaurants creates menu-driven websites with online ordering, reservations, and integrations that help you fill tables and drive repeat business.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Restaurants Custom Web Design",
    width: 71,
    height: 71,
  },
  {
    title: "Construction",
    description:
      "As a custom web design agency for construction, we design scalable sites featuring project portfolios, RFQ forms, and certifications to attract clients and win more bids.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Construction Custom Web Design",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const customWebDesignAgencyWhyChooseUsSectionData = {
  heading: "What Sets Our Custom Web Design Services Apart",
  description:
    "Our custom web design agency stands out through industry expertise, ongoing support, and a commitment to delivering websites that truly support business growth and success.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const customWebDesignAgencyTechnologiesSectionData = {
  heading: "Our Website Design Technology Suite",
  description:
    "We use leading platforms and frameworks to build scalable, secure websites for businesses across industries, ensuring exceptional performance, seamless integrations, and long-term growth.",
  showDescription: true,
  cta: {
    text: "Request Custom Quote",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const customWebDesignAgencyFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Custom Web Design Agency",
      href: "/web-design/custom-web-design-agency",
    },
  },
  heading: "Let's Build a Website That Works",
  description: [
    "Your website is your digital storefront. Make it count with a design that attracts, engages, and converts.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Custom Web Design Agency",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start My Project",
    href: "#",
    className: "offer-btn primary",
  },
};
