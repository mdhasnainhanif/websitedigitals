import { BagIcon } from "@/icons";

// Metadata for Wix Development Service
export const wixDevelopmentMetadata = {
  title: "Hire #1 Wix Development Services in USA | Website Digitals",
  description:
    "From design to launch, our Wix development company in the USA ensures your site is fast, optimized, and ready to grow your business online.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-development/wix-development-services/",
  openGraph: {
    title: "Hire #1 Wix Development Services in USA | Website Digitals",
    description:
      "From design to launch, our Wix development company in the USA ensures your site is fast, optimized, and ready to grow your business online.",
    url: "https://www.websitedigitals.com/web-development/wix-development-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/wix-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Wix Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire #1 Wix Development Services in USA | Website Digitals",
    description:
      "From design to launch, our Wix development company in the USA ensures your site is fast, optimized, and ready to grow your business online.",
    images: [
      "https://websitedigitals.com/assets/images/wix-development-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-development/wix-development-services/",
  },
};

export const wixDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Wix Development Services",
      href: "/web-development/wix-development-services",
    },
  },
  heading: "Design, [[Launch]], and [[Grow]] with Wix Development Services",
  description: [
    "Too many businesses settle for a website that looks fine but fails to bring in customers.\n At Website Digitals, we provide Wix development services that turn your ideas into a professional online presence built to attract, engage, and convert visitors across the USA.\n\nWe combine the creative freedom of Wix with advanced features to deliver a site that not only looks great but also performs. From setup to launch, every step is designed to match your goals and make your site work harder for your business.\n\nHere's what you get when we handle your Wix project:\n• Websites that win customers\n• Features that fit your needs\n• Looks great on any device",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Claim Your Custom Wix Site",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-wix", label: "Custom Wix Development" },
      { value: "wix-migration", label: "Wix Migration Services" },
      { value: "wix-seo", label: "Wix SEO Optimization" },
      { value: "wix-integration", label: "Wix API Integration" },
      { value: "wix-ecommerce", label: "Wix E-commerce Setup" },
      { value: "wix-maintenance", label: "Wix Maintenance & Support" },
    ],
    initialValues: {
      help: "custom-wix",
    },
  },
};

export const wixDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Wix Theme Development",
    description:
      "We design and build custom Wix themes that reflect your brand identity and meet your business needs. Every theme is optimized for both visual appeal and functionality, ensuring a consistent user experience.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Integrations with External Tools",
    description:
      "Through Wix API integration, we connect your website to CRMs, marketing automation platforms, payment systems, and other essential tools. These integrations help streamline workflows and improve site performance.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Platform Migration Services",
    description:
      "Our website migration to Wix process is smooth and efficient, minimizing downtime and preserving your existing SEO value. We handle every step, from data transfer to design adaptation, so your site launches on Wix without disruptions.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "On-Page Optimization for Wix",
    description:
      "With our Wix SEO services, we refine content, structure, and metadata to align with search engine best practices. This includes keyword targeting, internal linking, and compliance with Wix's built-in SEO tools.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Ongoing Website Care",
    description:
      "Our Wix maintenance & support ensures your site remains updated, secure, and fully functional. From routine checks to troubleshooting, we keep your website running at its best.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Responsive and Mobile-Ready Design",
    description:
      "We implement mobile optimization for Wix to guarantee your site looks and works perfectly on smartphones, tablets, and desktops. This includes adjustments for touch navigation, responsive layouts, and fast loading speeds.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const wixDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Clients Choose Our Wix Development Company for Their Business",
  description: [
    "Choosing the right Wix partner can determine whether your website meets its full potential or falls short. Our approach combines technical skill, industry knowledge, and proven results to help your site perform from the start. Here’s what sets us apart:",
  ],
  items: [
    {
      id: "wix-firstScroller",
      step: 1,
      title: "Specialized Developers",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "A team of specialized Wix developers in the United States who understand the platform's capabilities and the needs of local audiences. Each project is tailored to connect with the right customers and deliver measurable results.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Specialized Developers",
        width: 669,
        height: 376,
      },
    },
    {
      id: "wix-secondScroller",
      step: 2,
      title: "Complete Solutions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide end-to-end Wix development solutions covering planning, design, optimization, and post-launch care. This integrated approach saves time, reduces revisions, and ensures a consistent user experience.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Complete Solutions",
        width: 669,
        height: 376,
      },
    },
    {
      id: "wix-thirdScroller",
      step: 3,
      title: "Proven Success",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our portfolio includes Wix projects that have generated measurable growth, with documented increases in organic sessions and revenue. These results, highlighted by credible agencies such as Infidigit, demonstrate the return on investment our clients achieve.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Proven Success",
        width: 669,
        height: 376,
      },
    },
    {
      id: "wix-forthScroller",
      step: 4,
      title: "Faster Delivery",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "By using Velo by Wix, development timelines are shortened without compromising quality. This allows your website to go live sooner so you can begin attracting visitors and generating leads faster.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Faster Delivery",
        width: 669,
        height: 376,
      },
    },
    {
      id: "wix-fifthScroller",
      step: 5,
      title: "Industry-Specific Customization",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We deliver industry-specific Wix customization so your site aligns with the standards and style of your market. This ensures both a professional presentation and functionality that matches your audience's expectations.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Industry-Specific Customization",
        width: 669,
        height: 376,
      },
    },
    {
      id: "wix-sixthScroller",
      step: 6,
      title: "Recognized Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "As part of the Certified Wix Partner program, our expertise is independently verified. Recognition on trusted platforms such as Clutch and GoodFirms confirms our credibility and consistent performance.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Recognized Expertise",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const wixDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Wix Development Services",
      href: "/web-development/wix-development-services",
    },
  },
  heading: "Start Your Wix Project with Our US-Based Experts",
  description: [
    "Hire a Wix development company in the USA that delivers custom and professional Wix solutions built for speed, optimization, and growth. We create websites with enterprise-level functionality, smooth integrations, and compliance-backed security using trusted Wix tools and Velo by Wix.\n\nWhether you need clarity on Wix development services pricing in America or a tailored build ready to launch, we make sure your Wix site is built right the first time and prepared to support your growth for years.",
  ],
  bullets: [],
  cta: {
    text: "Get My Tailored Wix Proposal",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Wix Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const wixDevelopmentStatsData = [
  {
    id: 1,
    value: 250,
    suffix: "+",
    label: "Wix Projects Successfully Delivered",
  },
  {
    id: 2,
    value: 98,
    suffix: "%",
    label: "Client Satisfaction Rate",
  },
  {
    id: 3,
    value: 60,
    suffix: "%",
    label: "Average Boost in Organic Sessions",
  },
  {
    id: 4,
    value: 12,
    suffix: "+",
    label: "Years of Experience",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const wixDevelopmentImpactCardsData = [
    {
      id: 1,
      title: "Tailored Design & Branding",
      description:
        "With responsive design, websites adapt to any screen size, delivering a smooth user experience that encourages engagement. The drag-and-drop interface of Wix offers creative freedom and professional precision for brand-aligned layouts.",
      icon: "design",
      isHighlighted: true,
      col: "col-12 col-md-4 col-lg-6",
    },
    {
      id: 2,
      title: "Advanced Functionality",
      description:
        "Wix API integration connects sites to third-party tools, CRMs, and marketing platforms. Payment gateway integration enables secure e-commerce, while custom development supports advanced applications and features.",
      icon: "functionality",
      isHighlighted: false,
      col: "col-12 col-md-4 col-lg-6",
    },
    {
      id: 3,
      title: "Better Performance & Conversions",
      description:
        "Wix SEO optimization refines site content and structure for visibility. Combined with secure Wix hosting, this ensures fast load times and strong protection, following the Wix official SEO checklist.",
      icon: "performance",
      isHighlighted: false,
      col: "col-12 col-md-4 col-lg-6",
    },
    {
      id: 4,
      title: "Time & Cost Efficiency",
      description:
        "Wix migration services make platform transitions simple and quick. Insights from Wix usage statistics ensure the platform remains forward-thinking and aligned with market needs.",
      icon: "efficiency",
      isHighlighted: false,
      col: "col-12 col-md-4 col-lg-6",
    },
  ];
  

// Impact Section Data (for DevelopmentCards component)
export const wixDevelopmentImpactSectionData = {
  heading: "Why Investing in Wix Development Delivers Results",
  showDescription: true,
  description:
    "Wix makes it possible for anyone to build a website, but creating one that’s professional, high-performing, and built for growth takes more than drag-and-drop tools. Professional Wix development services ensure your site is not only beautiful but also functional, optimized, and tailored to your specific goals. \nBenefits include:"
};

// Industries Data
export const wixDevelopmentIndustriesData = [
  {
    id: 1,
    title: "Law Firms",
    description:
      "Our custom Wix website development for law firms creates ADA-compliant, professional websites that showcase expertise, build credibility, and drive client inquiries with optimized layouts and conversion-focused design.",
    icon: "/assets/images/industry/law.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "We provide secure Wix website development for healthcare clinics, featuring HIPAA-conscious forms, easy appointment booking, and clear service pages that improve patient engagement and trust.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Real Estate",
    description:
      "Our Wix website development for real estate agents delivers MLS-ready listings, lead capture tools, and mobile-optimized layouts to connect buyers and sellers faster and close more deals.",
    icon: "/assets/images/industry/real-estate.svg",
  },
  {
    id: 4,
    title: "Construction",
    description:
      "We offer Wix website development for construction companies that highlight past projects, showcase services with interactive galleries, and generate quality leads through strategic call-to-actions.",
    icon: "/assets/images/industry/construction.svg",
  },
  {
    id: 5,
    title: "Dentists",
    description:
      "Our Wix website development for dentists makes it easy for patients to book appointments, learn about treatments, and trust your practice through a clean and professional design.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 6,
    title: "Education",
    description:
      "We create Wix website development for education providers that share resources, support enrollment, and engage students with mobile-friendly, easy-to-navigate websites.",
    icon: "/assets/images/industry/education.svg",
  },
];

// Technologies Data
export const wixDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "JavaScript",
    description:
      "Hire Wix JavaScript developer experts to bring your site to life with interactive features, smooth animations, and dynamic content that keeps visitors engaged and improves user experience.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Node.js",
    description:
      "Our Wix Node.js backend development service enables real-time functionality, API integrations, and scalable server-side logic so your website runs reliably under any traffic load.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Velo",
    description:
      "Partner with our Wix Velo development agency to build custom workflows, automate repetitive tasks, and create advanced features tailored to your business needs — all within the Wix platform.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "MongoDB",
    description:
      "We integrate Wix websites with MongoDB database solutions for secure, scalable data storage and real-time updates, enabling personalized content delivery and seamless user interactions.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "React.js",
    description:
      "Our custom Wix React.js development creates modular, reusable components for lightning-fast rendering, ensuring your site remains responsive and easy to maintain as it grows.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Next.js",
    description:
      "With our custom Wix Next.js development, we deliver SEO-friendly, server-side rendered websites that load faster, rank higher, and provide users with an exceptional browsing experience.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const wixDevelopmentWorkflowData = {
  title: "Our Step-by-Step Wix Development Process",
  description:
    "A structured, transparent process ensures every project is delivered on schedule, meets agreed objectives, and follows the standards set in the Wix Developer Docs. From the first discussion to long-term support, each stage is managed with precision to prepare your site for optimal performance. Here's how we work:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Consultation",
      description:
        "We begin with a detailed consultation for Wix development to define goals, understand target audiences, and clarify functional requirements. This step sets the scope, identifies essential features, and establishes a clear direction before design and coding start.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Planning & Wireframing",
      description:
        "Through careful planning and wireframing on Wix Editor, we map the site's structure, navigation flow, and content placement. This ensures the layout, user pathways, and interactions align with your brand identity and support conversion goals.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Custom Features",
      description:
        "When advanced capabilities are needed, we handle custom feature integration with Velo by Wix. This can include interactive tools, automation, and third-party connections, built in line with official Wix guidelines to ensure compatibility and stability.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Testing & QA",
      description:
        "Every build undergoes thorough testing and quality assurance to verify functionality, responsiveness, and compliance with the SEO integration checklist from Wix's official resources. This stage also checks performance, browser consistency, and mobile usability.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
    {
      id: 5,
      number: "05",
      title: "Launch & Support",
      description:
        "After launch, we deliver ongoing Wix support to maintain site performance, apply updates, and resolve technical issues promptly. This ensures your website continues to operate smoothly and meet business objectives long after it goes live.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const wixDevelopmentWhyChooseUsData = [
  {
    id: 1,
    title: "Specialized Developers",
    description:
      "A team of specialized Wix developers in the United States who understand the platform's capabilities and the needs of local audiences. Each project is tailored to connect with the right customers and deliver measurable results.",
    icon: "developers",
  },
  {
    id: 2,
    title: "Complete Solutions",
    description:
      "We provide end-to-end Wix development solutions covering planning, design, optimization, and post-launch care. This integrated approach saves time, reduces revisions, and ensures a consistent user experience.",
    icon: "solutions",
  },
  {
    id: 3,
    title: "Proven Success",
    description:
      "Our portfolio includes Wix projects that have generated measurable growth, with documented increases in organic sessions and revenue. These results, highlighted by credible agencies such as Infidigit, demonstrate the return on investment our clients achieve.",
    icon: "success",
  },
  {
    id: 4,
    title: "Faster Delivery",
    description:
      "By using Velo by Wix, development timelines are shortened without compromising quality. This allows your website to go live sooner so you can begin attracting visitors and generating leads faster.",
    icon: "delivery",
  },
  {
    id: 5,
    title: "Industry-Specific Customization",
    description:
      "We deliver industry-specific Wix customization so your site aligns with the standards and style of your market. This ensures both a professional presentation and functionality that matches your audience's expectations.",
    icon: "customization",
  },
  {
    id: 6,
    title: "Recognized Expertise",
    description:
      "As part of the Certified Wix Partner program, our expertise is independently verified. Recognition on trusted platforms such as Clutch and GoodFirms confirms our credibility and consistent performance.",
    icon: "expertise",
  },
];

// FAQ Data
export const wixDevelopmentFAQsData = [
  {
    id: 1,
    question: "How can I hire Website Digitals for Wix development?",
    answer:
      "You can hire Website Digitals by reaching out through our contact page or booking a consultation. Our team will review your requirements, outline a project plan, and provide a clear proposal before work begins.",
  },
  {
    id: 2,
    question: "Why choose Website Digitals for fast and robust Wix websites?",
    answer:
      "Website Digitals uses optimized design practices, efficient coding with Velo by Wix, and advanced integrations to deliver fast-loading, secure, and scalable websites tailored to your business goals.",
  },
  {
    id: 3,
    question: "Does Website Digitals provide ongoing support after launch?",
    answer:
      "Yes. Website Digitals offers ongoing maintenance, updates, and performance monitoring to ensure your Wix site stays secure, optimized, and ready to grow with your business.",
  },
  {
    id: 4,
    question: "How quickly can Website Digitals deliver a Wix project?",
    answer:
      "Delivery times depend on project scope, but Website Digitals is known for streamlined workflows that shorten timelines without compromising quality, helping you go live sooner.",
  },
  {
    id: 5,
    question: "What are Wix development services?",
    answer:
      "Wix development services cover designing, building, and optimizing a website on the Wix platform. They include custom design, integrations, SEO setup, and ongoing support.",
  },
  {
    id: 6,
    question: "How do Wix development services work?",
    answer:
      "The process starts with a consultation, followed by planning in Wix Editor, development, testing, and launch. Many providers also include ongoing maintenance.",
  },
  {
    id: 7,
    question: "What are the benefits of hiring a Wix developer?",
    answer:
      "A professional developer ensures speed, SEO, and usability are optimized. They can add custom features, integrations, and advanced functions using Velo by Wix.",
  },
  {
    id: 8,
    question: "How does Wix development compare to other platforms?",
    answer:
      "Compared to platforms like WordPress, Wix offers built-in hosting, security, and easy-to-use design tools. It's often faster to launch and maintain for small to medium-sized businesses.",
  },
  {
    id: 9,
    question: "How to migrate to Wix development services?",
    answer:
      "Migration involves transferring content, redesigning layouts, and optimizing for SEO. Wix migration services ensure minimal downtime and smooth transitions.",
  },
  {
    id: 10,
    question: "What's the Wix site setup service cost in the US?",
    answer:
      "Basic site setups can start from a few hundred dollars. Advanced builds or Wix migration service rates vary based on complexity.",
  },
  {
    id: 11,
    question: "How to book Wix consulting services?",
    answer:
      "You can book Wix consulting services through certified partners or top agencies. Sessions clarify your goals and outline a tailored plan.",
  },
  {
    id: 12,
    question: "Who offers the best Wix development services in the USA?",
    answer:
      "Website Digitals and other leading Wix development companies like BEMO Design and Lounge Lizard are recognized for delivering proven results, client-backed reviews, and case studies that show measurable growth.",
  },
  {
    id: 13,
    question: "Where can I find a Wix development services comparison?",
    answer:
      "A Wix development services comparison can help you evaluate pricing, features, and turnaround times before choosing a provider.",
  },
  {
    id: 14,
    question: "How do I hire Wix website developer experts for my project?",
    answer:
      "You can hire Wix website developer specialists from Website Digitals for custom design, development, and optimization. With 250+ projects delivered and a 98% satisfaction rate, we ensure your site is built to attract, engage, and convert visitors.",
  },
  {
    id: 15,
    question: "What is considered the best Wix website development service?",
    answer:
      "The best Wix website development service combines design excellence, SEO readiness, and smooth integrations. Website Digitals is a certified Wix Partner known for proven results and faster project delivery that helps businesses grow online.",
  },
  {
    id: 16,
    question: "Where can I get an affordable Wix website development service?",
    answer:
      "Website Digitals provides an affordable Wix website development service with flexible packages to suit any budget. Our transparent pricing ensures you get maximum value without sacrificing quality or functionality.",
  },
  {
    id: 17,
    question: "What does your Wix API integration service include?",
    answer:
      "Our Wix API integration service connects your site with CRMs, marketing tools, and payment systems. This automation streamlines workflows, improves efficiency, and enhances the user experience for both your team and customers.",
  },
  {
    id: 18,
    question: "Why is Wix's mobile responsive development essential?",
    answer:
      "Wix mobile responsive development ensures your site adapts to all screen sizes, loads quickly, and passes Google's mobile-friendly tests. This improves search rankings and keeps users engaged across devices.",
  },
  {
    id: 19,
    question: "How does Wix's multilingual site development benefit my business?",
    answer:
      "Our Wix multilingual site development service helps you reach international audiences by offering localized content, boosting engagement, and increasing conversions in multiple languages.",
  },
  {
    id: 20,
    question: "What is included in your Wix template customization service?",
    answer:
      "Our Wix template customization service transforms a standard template into a brand-specific design with tailored layouts, color schemes, and features. This ensures a professional look and seamless user experience.",
  },
  {
    id: 21,
    question: "How can the Wix booking system integration help me get more clients?",
    answer:
      "Wix booking system integration allows customers to schedule appointments directly on your website. It automates reminders, reduces no-shows, and helps you manage your calendar efficiently.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const wixDevelopmentServicesSectionData = {
  heading: "Our Comprehensive Services for Wix Website Success",
  description:
    "Our Wix development services are designed to cover every stage of your website’s lifecycle, from initial design to long-term care. Each service is tailored to meet your specific goals while making the most of the platform’s capabilities, including the Wix App Market and Wix Studio / Editor X. \n Here’s what we deliver:",
  showDescription: true,
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const wixDevelopmentIndustriesSectionData = {
  heading: "Who We Build Wix Websites For",
  description:
    "We build high-performing Wix websites tailored to each industry, helping businesses attract visitors, convert leads, and grow.",
  cta: {
    text: "Grow with Wix",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const wixDevelopmentIndustriesCardsData = [
  {
    title: "Law Firms",
    description:
      "Our custom Wix website development for law firms creates ADA-compliant, professional websites that showcase expertise, build credibility, and drive client inquiries with optimized layouts and conversion-focused design.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Law Firms Wix Development",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "We provide secure Wix website development for healthcare clinics, featuring HIPAA-conscious forms, easy appointment booking, and clear service pages that improve patient engagement and trust.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Wix Development",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Our Wix website development for real estate agents delivers MLS-ready listings, lead capture tools, and mobile-optimized layouts to connect buyers and sellers faster and close more deals.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Wix Development",
    width: 71,
    height: 71,
  },
  {
    title: "Construction",
    description:
      "We offer Wix website development for construction companies that highlight past projects, showcase services with interactive galleries, and generate quality leads through strategic call-to-actions.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Construction Wix Development",
    width: 71,
    height: 71,
  },
  {
    title: "Dentists",
    description:
      "Our Wix website development for dentists makes it easy for patients to book appointments, learn about treatments, and trust your practice through a clean and professional design.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Dentists Wix Development",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "We create Wix website development for education providers that share resources, support enrollment, and engage students with mobile-friendly, easy-to-navigate websites.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Education Wix Development",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const wixDevelopmentWhyChooseUsSectionData = {
  heading: "Why Clients Choose Our Wix Development Company for Their Business",
  description:
    "Choosing the right Wix partner can determine whether your website meets its full potential or falls short. Our approach combines technical skill, industry knowledge, and proven results to help your site perform from the start. Here's what sets us apart:",
};

// Workflow Section Data (Section 8)
export const wixDevelopmentWorkflowSectionData = {
  heading: "Our Step-by-Step Wix Development Process",
  description:
    "A structured, transparent process ensures every project is delivered on schedule, meets agreed objectives, and follows the standards set in the Wix Developer Docs. From the first discussion to long-term support, each stage is managed with precision to prepare your site for optimal performance. Here's how we work:",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const wixDevelopmentTechnologiesSectionData = {
  heading: "The Tech Behind Our Work",
  description:
    "We use Wix and modern tech to build fast, secure, and scalable websites optimized for growth.",
  showDescription: true,
  cta: {
    text: "Upgrade with Tech Now",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const wixDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Wix Development Services",
      href: "/web-development/wix-development-services",
    },
  },
  heading: "Turn Missed Opportunities on Wix into Sales",
  description: [
    "Every day without a conversion-ready site means lost leads. Our professional Wix developers handle everything, from expert Wix customization to SEO-ready builds, so you can start your Wix development project now and launch with confidence.",
    "",
    "Turn visitors into customers before your competitors do.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Wix Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start Getting Sales Now",
    href: "#",
    className: "offer-btn primary",
  },
};
