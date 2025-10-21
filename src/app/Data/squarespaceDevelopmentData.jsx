import { BagIcon } from "@/icons";

// Metadata for Squarespace Development Service
export const squarespaceDevelopmentMetadata = {
  title: "Hire #1 Squarespace Development Services | Website Digitals",
  description:
    "Build a site that sells. Our Squarespace development agency helps US brands with design, SEO, and e-commerce to drive real results.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-development/squarespace-development-services/",
  openGraph: {
    title: "Hire #1 Squarespace Development Services | Website Digitals",
    description:
      "Build a site that sells. Our Squarespace development agency helps US brands with design, SEO, and e-commerce to drive real results.",
    url: "https://www.websitedigitals.com/web-development/squarespace-development-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/squarespace-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Squarespace Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire #1 Squarespace Development Services | Website Digitals",
    description:
      "Build a site that sells. Our Squarespace development agency helps US brands with design, SEO, and e-commerce to drive real results.",
    images: [
      "https://websitedigitals.com/assets/images/squarespace-development-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-development/squarespace-development-services/",
  },
};

export const squarespaceDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Squarespace Development Services",
      href: "/web-development/squarespace-development-services",
    },
  },
  heading: "Design, [[Customize]], and [[Sell]] with Squarespace Development Services",
  description: [
    "Many businesses struggle to turn a basic Squarespace site into a fully customized online presence, leading to missed opportunities, lower sales, and reduced brand impact.\n\nAt Website Digitals, our Squarespace development services help brands create, refine, and grow websites that represent their identity, improve visibility, and deliver measurable ROI across the United States.\n\nFrom tailored template customization to smooth integrations and ecommerce solutions, we ensure your site looks great and works flawlessly.\n\nHere's what you can expect from us:\n• Website that fits your brand\n• Found easily on Google\n• Sell online with ease",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Launch My Squarespace Site Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-theme", label: "Custom Theme Development" },
      { value: "ecommerce-setup", label: "E-commerce Setup & Product Management" },
      { value: "api-integration", label: "API & Third-Party Integration" },
      { value: "custom-forms", label: "Custom Forms & Data Capture Solutions" },
      { value: "platform-migration", label: "Platform Migration to Squarespace" },
      { value: "performance-seo", label: "Performance Optimization & SEO" },
    ],
    initialValues: {
      help: "custom-theme",
    },
  },
};

export const squarespaceDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Theme Development",
    description:
      "We deliver custom Squarespace website development using responsive Squarespace templates and the drag-and-drop builder. Our branding and design services create layouts that work across all devices and reflect your brand.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "E-commerce Setup & Product Management",
    description:
      "Our Squarespace ecommerce development covers payment gateway integration, intuitive product pages, and mobile-responsive design. Full domain integration keeps your store consistent and accessible.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "API & Third-Party Integration",
    description:
      "We handle social media integration, analytics and tracking setup, Google Analytics integration, and payment gateway integration to connect your site with essential tools.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Custom Forms & Data Capture Solutions",
    description:
      "We build custom Squarespace templates for lead capture, with content management and branding, and design services to maintain a cohesive look. All forms are responsive Squarespace templates for device compatibility.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Platform Migration to Squarespace",
    description:
      "Our Squarespace migration services move your site with no data loss. We include website launch services, domain integration, and SSL security setup for a smooth transition.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Performance Optimization & SEO",
    description:
      "With Squarespace SEO optimization services, we follow Google Search Central best practices, track metrics with analytics and tracking setup, and use mobile-responsive design to maintain usability.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const squarespaceDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Growing Businesses Pick Our Squarespace Development Company",
  description: [
    "Choosing the right web development company ensures your Squarespace website is built with precision, strategy, and long-term results in mind. Our approach combines technical expertise, industry recognition, and a full-service methodology to deliver sites that perform and grow.\n\nHere's what sets us apart:",
  ],
  items: [
    {
      id: "squarespace-firstScroller",
      step: 1,
      title: "US-Based Squarespace Experts",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our US-based developer team brings hands-on experience and direct knowledge of the market. As a Squarespace Circle membership certification holder, we have access to exclusive tools and updates from the platform. We follow the vision established by Anthony Casalena, Founder of Squarespace, to create professional, high-quality websites that align with best practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "US-Based Squarespace Experts",
        width: 669,
        height: 376,
      },
    },
    {
      id: "squarespace-secondScroller",
      step: 2,
      title: "Certified & Recognized in the Industry",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We are backed by credentials that strengthen our work quality, including Google Analytics Certification, HubSpot Content Marketing Certification, and Google Ads Certification. These recognitions ensure that every project benefits from data-driven insights, effective content strategies, and compliant advertising practices.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Certified & Recognized in the Industry",
        width: 669,
        height: 376,
      },
    },
    {
      id: "squarespace-thirdScroller",
      step: 3,
      title: "Proven Track Record in Diverse Industries",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "From small businesses to large-scale operations, our portfolio includes client success case references that demonstrate measurable results. We specialize in ecommerce website customization and provide branding and design services tailored to different market segments, ensuring each site reflects its industry's unique demands.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Proven Track Record in Diverse Industries",
        width: 669,
        height: 376,
      },
    },
    {
      id: "squarespace-forthScroller",
      step: 4,
      title: "Full-Service Approach from Design to Launch",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our process covers everything from concept to live deployment. We deliver website launch services that meet W3C web standards compliance, develop custom templates, and implement robust content management solutions so your site remains functional and adaptable.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Full-Service Approach from Design to Launch",
        width: 669,
        height: 376,
      },
    },
    {
      id: "squarespace-fifthScroller",
      step: 5,
      title: "SEO & Marketing Integration for Growth",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With our team of Google SEO experts, we follow Google Search Central guidelines to boost visibility and traffic. We integrate social media integration features and implement analytics and tracking setup to monitor performance, refine strategies, and support ongoing growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "SEO & Marketing Integration for Growth",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const squarespaceDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Squarespace Development",
      href: "/web-development/squarespace-development-services",
    },
  },
  heading: "Turn Ideas into Results with Squarespace Development",
  description: [
    "Get professional Squarespace development services from trusted US experts who know how to design, build, and optimize websites that attract visitors and convert them into customers. With the right strategy and execution, your site becomes a tool for measurable business growth.",
  ],
  bullets: [],
  cta: {
    text: "Grow My Business Online",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Squarespace Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const squarespaceDevelopmentStatsData = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Squarespace Websites Launched",
  },
  {
    id: 2,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction",
  },
  {
    id: 4,
    value: 200,
    suffix: "+",
    label: "E-commerce Projects",
  },
  {
    id: 5,
    value: 100,
    suffix: "%",
    label: "SEO & W3C Compliance",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const squarespaceDevelopmentImpactCardsData = [
  {
    id: 1,
    title: "Revenue and Growth Focused Design",
    description:
      "Through expert Squarespace development services, websites are built to generate more leads and sales. Custom templates and responsive Squarespace designs adapt smoothly to desktops, tablets, and mobile devices. Clear, consistent branding ensures the message connects with the intended audience and encourages action.",
    icon: "brand",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-6",
  },
  {
    id: 2,
    title: "Scalable E-Commerce Solutions",
    description:
      "A thriving store requires more than product listings. Squarespace ecommerce development includes payment gateway setup, intuitive checkout flows, and mobile-responsive design for an easy shopping experience. Professional website launch services prepare the store for success from day one.",
    icon: "seo",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-6",
  },
    {
        id: 3,
        title: "Brand Authority and Trust",
        description:
        "Leveraging proven Squarespace developer expertise ensures technical precision, while SSL security setup protects customer information. Combined with strong visual branding and accurate domain integration, these elements reinforce credibility with both customers and search engines.",
        icon: "ecommerce",
        isHighlighted: false,
        col: "col-12 col-md-4 col-lg-6",
    },
    {
        id: 4,
        title: "Data-Driven Performance",
        description:
        "Google Analytics integration delivers valuable insights for continuous improvement. Squarespace SEO services strengthen rankings, while ongoing visibility enhancements and strategic content management keep the site relevant and competitive over time.",
        icon: "seo",
        isHighlighted: false,
        col: "col-12 col-md-4 col-lg-6",
    },
];

// Impact Section Data (for DevelopmentCards component)
export const squarespaceDevelopmentImpactSectionData = {
  heading: "Why Professional Squarespace Development Matters",
  showDescription: true,
  description:
    "Choosing the right approach to building and optimizing a Squarespace website determines how effectively it attracts visitors, converts leads, and sustains growth. With professional development, every element from visual design to technical framework works together to deliver measurable results. Here’s how it helps:",
};

// Industries Data
export const squarespaceDevelopmentIndustriesData = [
  {
    id: 1,
    title: "Restaurants",
    description:
      "Our Squarespace website development for restaurants highlights your menu, enables reservations, and attracts more diners. We focus on stunning visuals and a smooth user experience that encourages repeat visits.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 2,
    title: "Photographers",
    description:
      "We offer Squarespace site development for photographers that showcases your portfolio with fast-loading, gallery-style layouts. Our designs put your work in the spotlight and make booking sessions effortless.",
    icon: "/assets/images/industry/photography.svg",
  },
  {
    id: 3,
    title: "Law Firms",
    description:
      "Our Squarespace development for law firms builds trust and credibility online. We create clear, professional websites with intuitive navigation and lead capture features to attract new clients.",
    icon: "/assets/images/industry/legal.svg",
  },
  {
    id: 4,
    title: "Fitness",
    description:
      "We deliver Squarespace development for fitness studios featuring class schedules, membership options, and booking functionality. Our solutions keep your community engaged and your business growing.",
    icon: "/assets/images/industry/fitness.svg",
  },
  {
    id: 5,
    title: "Education",
    description:
      "Our Squarespace development for education services helps schools, courses, and programs connect with students. We integrate calendars, resources, and enrollment forms to support learning and engagement.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 6,
    title: "Healthcare",
    description:
      "We provide Squarespace development for healthcare clinics that makes patient interaction simple and secure. From service pages to online booking, we ensure a reliable, HIPAA-conscious experience.",
    icon: "/assets/images/industry/healthcare.svg",
  },
];

// Technologies Data
export const squarespaceDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "Custom Template",
    description:
      "Elevate your brand with our Squarespace custom template development service. We design responsive, conversion-focused templates that create a unique structure for your website, helping you stand out and engage visitors effectively.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "JavaScript",
    description:
      "Enhance interactivity with Squarespace custom JavaScript development. From dynamic sliders to advanced form validation, we add features that improve user experience and keep visitors engaged longer.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "CSS",
    description:
      "Perfect your site's look with our Squarespace custom CSS development. We customize layouts, typography, and visual elements for a polished, professional design that reflects your brand identity and improves usability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "API Integration",
    description:
      "Our Squarespace API integration service seamlessly connects your website to payment gateways, CRMs, analytics tools, and more—streamlining workflows and automating data exchange for better efficiency.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Membership Functionality",
    description:
      "Grow recurring revenue with our Squarespace membership functionality setup service. We create secure, easy-to-navigate member areas, gated content, and subscription features to boost user engagement and retention.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Blueprint AI",
    description:
      "Accelerate your launch when you hire a Squarespace Blueprint AI website developer from our team. We combine AI-driven insights with expert design to build smarter, data-backed websites faster.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const squarespaceDevelopmentWorkflowData = {
  title: "Our Process",
  description:
    "A clear process ensures your Squarespace website aligns with your goals, functions smoothly, and delivers results from day one. Here's how we work:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We start by clarifying your brand goals, identifying your target audience, and defining the ideal website structure. Our team selects responsive Squarespace templates that provide a strong, scalable foundation for design and functionality.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Customization",
      description:
        "We use custom Squarespace templates with professional branding and design services to shape your site's look and feel. Our team fine-tunes layouts in the drag-and-drop builder, ensuring they are intuitive, consistent, and mobile-friendly across all devices.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Development & Integration",
      description:
        "Next, we configure ecommerce features, set up secure payment gateway integration, and complete domain integration. We also add social media integration so your site stays connected with your audience and supports engagement.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Optimization & Launch",
      description:
        "Before launch, we apply Squarespace SEO optimization services to boost search visibility. SSL security setup protects customer data, and performance optimization improves speed. We finish with analytics and tracking setup to measure success and guide ongoing improvements.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const squarespaceDevelopmentWhyChooseUsData = [
  {
    id: 1,
    title: "US-Based Squarespace Experts",
    description:
      "Our US-based developer team brings hands-on experience and direct knowledge of the market. As a Squarespace Circle membership certification holder, we have access to exclusive tools and updates from the platform. We follow the vision established by Anthony Casalena, Founder of Squarespace, to create professional, high-quality websites that align with best practices.",
    icon: "expertise",
  },
  {
    id: 2,
    title: "Certified & Recognized in the Industry",
    description:
      "We are backed by credentials that strengthen our work quality, including Google Analytics Certification, HubSpot Content Marketing Certification, and Google Ads Certification. These recognitions ensure that every project benefits from data-driven insights, effective content strategies, and compliant advertising practices.",
    icon: "certification",
  },
  {
    id: 3,
    title: "Proven Track Record in Diverse Industries",
    description:
      "From small businesses to large-scale operations, our portfolio includes client success case references that demonstrate measurable results. We specialize in ecommerce website customization and provide branding and design services tailored to different market segments, ensuring each site reflects its industry's unique demands.",
    icon: "portfolio",
  },
  {
    id: 4,
    title: "Full-Service Approach from Design to Launch",
    description:
      "Our process covers everything from concept to live deployment. We deliver website launch services that meet W3C web standards compliance, develop custom templates, and implement robust content management solutions so your site remains functional and adaptable.",
    icon: "fullservice",
  },
  {
    id: 5,
    title: "SEO & Marketing Integration for Growth",
    description:
      "With our team of Google SEO experts, we follow Google Search Central guidelines to boost visibility and traffic. We integrate social media integration features and implement analytics and tracking setup to monitor performance, refine strategies, and support ongoing growth.",
    icon: "seo",
  },
];

// FAQ Data
export const squarespaceDevelopmentFAQsData = [
  {
    id: 1,
    question: "How can I hire Website Digitals for my Squarespace project?",
    answer:
      "You can hire Website Digitals by contacting us through our website's inquiry form or scheduling a consultation call. We'll discuss your goals, review your requirements, and provide a detailed proposal with timelines and pricing before starting your project.",
  },
  {
    id: 2,
    question: "How does Website Digitals ensure fast and robust websites?",
    answer:
      "Our team follows proven development practices, including optimized coding, responsive design, performance tuning, and thorough testing. We use Google Search Central guidelines and advanced optimization techniques to ensure your site loads quickly and functions reliably across devices.",
  },
  {
    id: 3,
    question: "Does Website Digitals handle the full process from design to launch?",
    answer:
      "Yes, we manage every stage from strategy and custom design to development, SEO setup, and launch. Our full-service approach ensures your website is visually aligned with your brand, technically sound, and ready to deliver results from day one.",
  },
  {
    id: 4,
    question: "Why choose Website Digitals over other agencies?",
    answer:
      "Website Digitals combines US-based expertise, industry certifications, and a track record of delivering high-performing Squarespace websites. We focus on measurable results, transparent communication, and long-term client success.",
  },
  {
    id: 5,
    question: "What is Squarespace development?",
    answer:
      "Squarespace development refers to the process of designing, building, and customizing websites on the Squarespace platform. It can include everything from creating custom templates to integrating ecommerce features, configuring SEO, and optimizing site speed for better performance.",
  },
  {
    id: 6,
    question: "What are the benefits of hiring a Squarespace developer in the US?",
    answer:
      "Hiring a Squarespace developer in the US ensures you work with someone who understands local markets, follows US-based business standards, and is available during your working hours. This can improve communication, reduce project delays, and result in a website that resonates with your target audience.",
  },
  {
    id: 7,
    question: "How can I customize a Squarespace template?",
    answer:
      "To customize a Squarespace template, you can use the built-in drag-and-drop editor, adjust design settings, and modify layouts. For advanced changes, hiring a developer allows you to integrate custom code, enhance branding, and add unique features tailored to your business needs.",
  },
  {
    id: 8,
    question: "Which is better for small businesses, Squarespace or WordPress?",
    answer:
      "For small businesses, Squarespace offers a user-friendly interface and all-in-one hosting, while WordPress provides more flexibility but requires separate hosting and higher maintenance. The right choice depends on your budget, technical skills, and desired customization level.",
  },
  {
    id: 9,
    question: "What are your tips for improving Squarespace website speed?",
    answer:
      "To improve Squarespace website speed, optimize image sizes, limit third-party scripts, choose the best Squarespace templates for ecommerce or content-heavy sites, and enable built-in performance features. Developers can also fine-tune site code for faster loading.",
  },
  {
    id: 10,
    question: "How do I hire a Squarespace developer in the US?",
    answer:
      "You can hire a Squarespace developer in the US through the official Squarespace developer directory, Squarespace experts marketplace, or by contacting top Squarespace agencies in the US with proven portfolios and client reviews.",
  },
  {
    id: 11,
    question: "Can I buy a Squarespace ecommerce development package?",
    answer:
      "Yes, you can buy a Squarespace ecommerce development package that includes product setup, payment gateway integration, mobile optimization, and SEO configuration. These packages can be tailored to suit both new stores and established online businesses.",
  },
  {
    id: 12,
    question: "How do I get a custom Squarespace site built?",
    answer:
      "To get a custom Squarespace site built, share your brand requirements, design preferences, and business goals with a developer or agency. They will create a site using Squarespace partner developers' tools and best practices.",
  },
  {
    id: 13,
    question: "What is the typical Squarespace developer pricing in the USA?",
    answer:
      "Squarespace development cost varies based on project complexity, developer experience, and whether you choose affordable vs. premium Squarespace developers. On average, projects can range from a few hundred dollars for simple sites to several thousand for complex builds.",
  },
  {
    id: 14,
    question: "What are the best Squarespace web design packages?",
    answer:
      "The best Squarespace web design packages usually combine custom theme development, SEO setup, content management, and post-launch support. Look for agencies that also follow Squarespace development cost comparison in the USA benchmarks to ensure fair pricing.",
  },
  {
    id: 15,
    question: "Where can I find reviews of Squarespace development agencies?",
    answer:
      "You can find reviews of Squarespace development agencies on platforms like Google Business Profiles, Clutch, or the Squarespace help center community forum. Reading verified feedback helps you identify reputable agencies.",
  },
  {
    id: 16,
    question: "How do Squarespace SEO services compare to Wix SEO services?",
    answer:
      "Squarespace SEO services vs. Wix SEO services often come down to flexibility and control. Squarespace offers strong built-in SEO tools, while Wix allows more granular control through apps and plugins. For many businesses, Squarespace is sufficient when optimized by experts.",
  },
  {
    id: 17,
    question: "What should I consider when I hire Squarespace website development company professionals?",
    answer:
      "When you hire Squarespace website development company experts, review their portfolio, case studies, and client testimonials. Look for a team that aligns with your goals and offers strategy, design, and ongoing optimization. Contact us today to start your project.",
  },
  {
    id: 18,
    question: "Do you offer local Squarespace website development services?",
    answer:
      "Yes, we provide local Squarespace website development services across the US. Working with a nearby team ensures smooth collaboration, faster response times, and websites tailored to your community and target market.",
  },
  {
    id: 19,
    question: "How do I choose the right Squarespace website development expert?",
    answer:
      "Selecting a Squarespace website development expert involves checking experience, certifications, and client results. Our certified team meets these criteria and has successfully delivered 200+ projects, ensuring your site is both visually engaging and technically sound.",
  },
  {
    id: 20,
    question: "Why is mobile optimization development important?",
    answer:
      "Squarespace mobile optimization development ensures your site is fully responsive, loads quickly, and performs well on every device. This helps you improve user experience, retain visitors, and boost conversions.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const squarespaceDevelopmentServicesSectionData = {
  heading: "Our Complete Squarespace Website Development Services for Your Business",
  description:
    "Every business has unique goals, and your website should reflect that. Our Squarespace development services cover everything from initial design to ongoing optimization, ensuring your site functions smoothly, looks professional, and meets your specific requirements. Here's what we offer:",
  showDescription: true,
  cta: {
    label: "Start My Squarespace Site",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const squarespaceDevelopmentIndustriesSectionData = {
  heading: "Industries We Support",
  description:
    "Our Squarespace experts build industry-specific websites that boost visibility, attract customers, and convert them into loyal clients.",
  cta: {
    text: "Launch My Squarespace Site",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const squarespaceDevelopmentIndustriesCardsData = [
  {
    title: "Restaurants",
    description:
      "Our Squarespace website development for restaurants highlights your menu, enables reservations, and attracts more diners. We focus on stunning visuals and a smooth user experience that encourages repeat visits.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Restaurant Squarespace Development",
    width: 71,
    height: 71,
  },
  {
    title: "Photographers",
    description:
      "We offer Squarespace site development for photographers that showcases your portfolio with fast-loading, gallery-style layouts. Our designs put your work in the spotlight and make booking sessions effortless.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Photographer Squarespace Development",
    width: 71,
    height: 71,
  },
  {
    title: "Law Firms",
    description:
      "Our Squarespace development for law firms builds trust and credibility online. We create clear, professional websites with intuitive navigation and lead capture features to attract new clients.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Law Firm Squarespace Development",
    width: 71,
    height: 71,
  },
  {
    title: "Fitness",
    description:
      "We deliver Squarespace development for fitness studios featuring class schedules, membership options, and booking functionality. Our solutions keep your community engaged and your business growing.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Fitness Studio Squarespace Development",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "Our Squarespace development for education services helps schools, courses, and programs connect with students. We integrate calendars, resources, and enrollment forms to support learning and engagement.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Education Squarespace Development",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "We provide Squarespace development for healthcare clinics that makes patient interaction simple and secure. From service pages to online booking, we ensure a reliable, HIPAA-conscious experience.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Squarespace Development",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const squarespaceDevelopmentWhyChooseUsSectionData = {
  heading: "Why Growing Businesses Pick Our Squarespace Development Company",
  description:
    "Choosing the right web development company ensures your Squarespace website is built with precision, strategy, and long-term results in mind. Our approach combines technical expertise, industry recognition, and a full-service methodology to deliver sites that perform and grow.\n\nHere's what sets us apart:",
};

// Workflow Section Data (Section 8)
export const squarespaceDevelopmentWorkflowSectionData = {
  heading: "Our Process",
  description:
    "A clear process ensures your Squarespace website aligns with your goals, functions smoothly, and delivers results from day one. Here's how we work:",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const squarespaceDevelopmentTechnologiesSectionData = {
  heading: "Our Technology Stack",
  description:
    "We build fast, secure, and scalable Squarespace websites that look stunning, perform flawlessly, and turn visitors into loyal customers.",
  showDescription: true,
  cta: {
    text: "Start My Optimized Site",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const squarespaceDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Squarespace Development Services",
      href: "/web-development/squarespace-development-services",
    },
  },
  heading: "Turn Ideas into Results with Squarespace Development",
  description: [
    "Get professional Squarespace development services from trusted US experts who know how to design, build, and optimize websites that attract visitors and convert them into customers. With the right strategy and execution, your site becomes a tool for measurable business growth.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Squarespace Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Grow My Business Online",
    href: "#",
    className: "offer-btn primary",
  },
};
