import { BagIcon } from "@/icons";

// Metadata for Web Portal Development Service
export const webPortalDevelopmentMetadata = {
  title: "Hire #1 Web Portal Development Company in USA for ROI",
  description:
    "Boost growth with expert web portal development services. Website Digitals delivers secure, scalable portals designed for ROI across the USA.",
  keywords: "",
  canonical:
    "https://www.websitedigitals.com/web-development/web-portal-development-company/",
  openGraph: {
    title: "Hire #1 Web Portal Development Company in USA for ROI",
    description:
      "Boost growth with expert web portal development services. Website Digitals delivers secure, scalable portals designed for ROI across the USA.",
    url: "https://www.websitedigitals.com/web-development/web-portal-development-company/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/web-portal-development-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Web Portal Development Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hire #1 Web Portal Development Company in USA for ROI",
    description:
      "Boost growth with expert web portal development services. Website Digitals delivers secure, scalable portals designed for ROI across the USA.",
    images: [
      "https://websitedigitals.com/assets/images/web-portal-development-twitter-image.jpg",
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
      "https://www.websitedigitals.com/web-development/web-portal-development-company/",
  },
};

// Banner Data (Section 1)
export const webPortalDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Web Portal Development Company",
      href: "/services/web-portal-development-company",
    },
  },
  heading: "Connect, Engage, and Grow with [[Web Portal Development Company]]",
  description: [
    "When critical information and services are difficult to access, organizations lose efficiency and customers lose trust. Website Digitals helps solve this challenge by delivering portals that connect people, data, and processes without complexity.",
    "",
    "As a trusted web portal development company, we design solutions that strengthen collaboration and simplify digital operations. We focus on scalable platforms that bring together user experience design and secure authentication systems.",
    "",
    "Whether it's creating custom web portal solutions for specialized needs or developing enterprise-grade portals for large-scale organizations, every project is built for long-term growth and usability.",
    "",
    "Here's how we make an impact:",
    "• Custom portals tailored to your business",
    "• Enterprise-ready solutions that scale",
    "• Intuitive designs for better engagement",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Get Started Instantly",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "customer-portal", label: "Customer Portal" },
      { value: "employee-portal", label: "Employee Portal" },
      { value: "partner-portal", label: "Partner Portal" },
      { value: "ecommerce-portal", label: "E-commerce Portal" },
      { value: "data-portal", label: "Data Management Portal" },
      { value: "custom-portal", label: "Custom Portal Solution" },
    ],
    initialValues: {
      help: "customer-portal",
    },
  },
};

// Stats Counter Data (Section 2)
export const webPortalDevelopmentStatsData = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Portals Delivered",
  },
  {
    id: 2,
    value: 15,
    suffix: "+",
    label: "Years Experience",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Client Retention",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Security Compliance",
  },
  {
    id: 5,
    value: 24,
    suffix: "/7",
    label: "Support",
  },
];

// Impact Section Data (Section 3) - for DevelopmentCards
export const webPortalDevelopmentImpactSectionData = {
  heading: "Why Web Portal Development Matters for Businesses",
  description:
    "Businesses depend on digital platforms to connect, manage data, and deliver services. Web portals centralize information, enhance collaboration, and ensure access. Gartner and Forrester see them as transformation drivers, with W3C and OWASP ensuring usability and security. Consider the following areas:",
  showDescription: true,
};

export const webPortalDevelopmentImpactCardsData = [
  {
    id: 1,
    title: "Driving Business Growth through Portals",
    description:
      "Enterprise web portal development streamlines operations across departments, while business portal development improves workflows for mid-sized companies. Partner portal development enhances vendor and distributor collaboration, and document management portals reduce inefficiencies through structured information sharing.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Enhancing Customer Experience",
    description:
      "Customer self-service portals reduce support costs and increase satisfaction. eLearning portals deliver accessible education, while healthcare portal development services improve patient communication and record access. Online community portals create spaces for engagement and knowledge sharing.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Future-Proofing with Technology",
    description:
      "Cloud-based portal services provide flexibility and cost efficiency. SaaS portals offer continuous updates and scalability. Seamless application integration prevents data silos, supported by robust portal architecture for secure and scalable platforms.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Strengthening Trust and Compliance",
    description:
      "Standards from the W3C ensure accessibility, while OWASP guidelines safeguard against vulnerabilities. Businesses that adopt these frameworks build user trust, maintain compliance, and protect long-term credibility.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const webPortalDevelopmentServicesSectionData = {
  heading: "Our Web Portal Development Services to Scale Your Business",
  description:
    "Every business has unique digital needs, so our solutions are built to be flexible, secure, and scalable. From niche platforms to enterprise systems, we deliver portals focused on usability, security, and growth. Here's how we structure our services:",
  showDescription: true,
};

export const webPortalDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Portal Development",
    description:
      "We create tailored solutions, including multi-tenant and SaaS application portals, designed for scalability, usability, and long-term value.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Enterprise Solutions",
    description:
      "Our enterprise portals centralize workflows, enable knowledge sharing, and provide intranet and extranet systems for seamless internal and external collaboration.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Integration & Security",
    description:
      "Our portal integration services connect portals with existing business systems for smooth operations. We implement secure authentication systems to protect sensitive data and leverage cloud hosting services like Google Cloud, AWS, and Azure for performance and reliability.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Quality Standards and Compliance",
    description:
      "We follow ISO/IEC 27001 for security and CMMI certifications for process maturity. These standards ensure every portal is trusted, secure, and compliant with industry regulations.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const webPortalDevelopmentIndustriesSectionData = {
  heading: "Industries We Cater To",
  description:
    "We deliver secure, scalable digital solutions across industries, helping organizations streamline operations, enhance collaboration, and create meaningful user experiences.",
  cta: {
    text: "Build My Custom Portal",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const webPortalDevelopmentIndustriesCardsData = [
  {
    title: "Patient Portal",
    description:
      "As a trusted patient portal development company, we create HIPAA-compliant solutions that improve patient engagement, simplify appointment scheduling, and provide secure access to health records for better care outcomes.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Patient Portal Development",
    width: 71,
    height: 71,
  },
  {
    title: "Banking Portal",
    description:
      "Recognized as a leading banking portal development company, we design secure, user-friendly portals that enable online transactions, loan management, and seamless customer communication while meeting industry compliance standards.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Banking Portal Development",
    width: 71,
    height: 71,
  },
  {
    title: "Vendor Portal",
    description:
      "Our ecommerce vendor portal development service empowers businesses with efficient vendor onboarding, real-time inventory tracking, and streamlined supplier collaboration to boost operational efficiency.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Vendor Portal Development",
    width: 71,
    height: 71,
  },
  {
    title: "HR Portal",
    description:
      "As an experienced hr portal development company, we build centralized systems that manage employee data, simplify HR workflows, and improve internal communication for a more connected workplace.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "HR Portal Development",
    width: 71,
    height: 71,
  },
  {
    title: "Travel Portal",
    description:
      "Our travel portal development agency delivers booking engines, itinerary management tools, and personalized user experiences that help travel businesses drive more bookings and enhance customer satisfaction.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Travel Portal Development",
    width: 71,
    height: 71,
  },
  {
    title: "Logistics Portal",
    description:
      "As a reliable logistics portal development firm, we create platforms that enable real-time shipment tracking, optimize fleet operations, and improve supply chain visibility for faster, smarter deliveries.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Logistics Portal Development",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7) - for ScrollSection
export const webPortalDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading:
    "Why Businesses Grow Faster with Our Web Portal Development Company?",
  description: [
    "Choosing the right development partner can define the success of your digital initiatives. Our web development focus on results, compliance, innovation, and client satisfaction sets us apart from other providers in the United States. Here's what sets us apart:",
  ],
  items: [
    {
      id: "portal-firstScroller",
      step: 1,
      title: "Proven Track Record",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Recognized as one of the best web portal development firms, we are consistently ranked among the top portal development agencies in the US. Independent reviews highlight our ability to deliver projects on time while maintaining quality and scalability.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Proven Track Record",
        width: 669,
        height: 376,
      },
    },
    {
      id: "portal-secondScroller",
      step: 2,
      title: "Security & Compliance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We integrate OWASP best practices into every project, align frameworks with the NIST Cybersecurity Framework, and ensure WCAG accessibility compliance so that portals remain secure, inclusive, and reliable.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Security & Compliance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "portal-thirdScroller",
      step: 3,
      title: "Innovation & Scalability",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "From implementing cloud-based portal services to designing effective digital transformation strategies, our approach ensures that portals scale as businesses grow. Seamless application integration enables clients to unify systems and maintain efficiency across platforms.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Innovation & Scalability",
        width: 669,
        height: 376,
      },
    },
    {
      id: "portal-forthScroller",
      step: 4,
      title: "Client-Centric Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "The user needs to shape every decision we make. By focusing on user experience for portals, we design platforms that are easy to adopt and manage. Our custom portal development services pricing is structured for flexibility, positioning us among the most affordable web portal developers without compromising on quality.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Client-Centric Approach",
        width: 669,
        height: 376,
      },
    },
    {
      id: "portal-fifthScroller",
      step: 5,
      title: "Global Experience with US Market Focus",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With experience working alongside industry leaders such as IBM, Accenture, Cognizant, and Deloitte, we combine global knowledge with a deep understanding of the U.S. market. Insights from the U.S. Digital Service further strengthen our ability to deliver portals that meet government-level performance and compliance standards.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Global Experience with US Market Focus",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

// Workflow Data (Section 8) - for StepSection
export const webPortalDevelopmentWorkflowData = {
  title: "Our Web Portal Development Process",
  description:
    "A successful portal requires more than just coding. It demands a structured approach that ensures scalability, usability, and long-term value. Our process is designed to guide every stage, from the initial concept to ongoing optimization. Here's how it works:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "The journey begins with understanding your requirements and defining the right foundation. Our team focuses on portal design and architecture to ensure stability and scalability from the start. We also plan business process automation portals that align with workflows, reducing manual tasks and improving efficiency.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Development",
      description:
        "Once the strategy is in place, we move into building user-friendly and reliable systems. With a strong focus on user experience design, our solutions are intuitive and easy to navigate. We combine custom software development with modern web application frameworks to deliver portals that are both functional and future-ready.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Testing & Deployment",
      description:
        "Before launch, every solution undergoes rigorous testing to ensure reliability and security. We implement secure authentication systems to safeguard sensitive data and use trusted cloud hosting services like AWS, Google Cloud, and Azure to deliver stability, speed, and scalability.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Support & Optimization",
      description:
        "Our role doesn't end at deployment. We provide ongoing support to enhance performance and adapt to changing needs. Whether it's upgrading SaaS portals or refining knowledge management portals, we continuously optimize solutions to ensure they deliver long-term value.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const webPortalDevelopmentTechnologiesSectionData = {
  heading: "Tech Stack We Rely On",
  description:
    "We use proven technologies and expertise to build secure, scalable portals with seamless integration, great user experience, and lasting value.",
  showDescription: true,
    cta: {
    text: "Supercharge My Business",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

export const webPortalDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "ASP.NET",
    description:
      "As a trusted ASP.NET portal development company, we build enterprise-grade solutions that deliver robust security, seamless integration with Microsoft systems, and exceptional scalability for complex business environments.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Java",
    description:
      "Our Java portal development services deliver cross-platform, high-performance solutions designed for businesses that need reliable, future-proof portals capable of handling enterprise-level workloads.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Angular",
    description:
      "We provide angular portal development services that create responsive, single-page applications with fast load times and smooth user experiences, ideal for modern, interactive portals.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Mobile Portal",
    description:
      "As a leading mobile portal development company, we design mobile-first portals that ensure secure, on-the-go access to business services, improving engagement and user convenience.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "PHP",
    description:
      "Recognized as a flexible PHP portal development company, we develop cost-effective, customizable solutions using PHP frameworks like Laravel and CodeIgniter, enabling rapid deployment and easy scalability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "API Integrations",
    description:
      "Our expertise in portal development with API integration services allows businesses to connect third-party tools, unify workflows, and enable real-time data exchange for maximum operational efficiency.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Final CTA Section Data (Section 11)
export const webPortalDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Web Portal Development Company",
      href: "/services/web-portal-development-company",
    },
  },
  heading: "Build Smarter & Grow Faster with Web Portal Development",
  description: [
    "Struggling to keep customers engaged? Build your custom portal solution with a trusted web portal development company. Deliver exclusive experiences and stronger results through expert-driven portal development.",
  ],
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Web Portal Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start My Project Today",
    href: "#",
    className: "offer-btn primary",
  },
};

// FAQs Data (Section 12)
export const webPortalDevelopmentFAQsData = [
  {
    question: "How do I hire Website Digitals for web portal development?",
    answer:
      "Hiring Website Digitals is simple. You can contact our team through our website, share your project requirements, and receive a tailored proposal. We guide you through discovery, planning, and execution to ensure a smooth start.",
  },
  {
    question:
      "What makes Website Digitals different from other portal development agencies?",
    answer:
      "Website Digitals stands out for its proven track record, client-focused process, and ability to deliver secure, scalable, and custom-built portals. We combine technical expertise with a deep understanding of business needs to provide solutions that drive measurable growth.",
  },
  {
    question: "Does Website Digitals deliver fast and robust web portals?",
    answer:
      "Yes. Our team builds portals using modern frameworks, optimized architecture, and secure hosting solutions. This ensures your portal is fast, reliable, and capable of handling high traffic while maintaining performance.",
  },
  {
    question:
      "Why should I trust Website Digitals with my custom portal solution?",
    answer:
      "Website Digitals has years of experience delivering successful projects for businesses across industries in the USA. From discovery to ongoing support, we ensure your custom portal solution is designed for long-term usability, compliance, and ROI.",
  },
  {
    question: "What is web portal development?",
    answer:
      "Web portal development is the process of designing and building secure, centralized platforms that connect users, data, and applications in one place. Unlike standard websites, portals focus on interaction and functionality, allowing businesses to improve collaboration, streamline workflows, and enhance customer or employee engagement.",
  },
  {
    question: "What are the types of web portals?",
    answer:
      "Common types of web portals include customer self-service portals, eLearning portals, healthcare portals, eCommerce portals, government portals, intranet and extranet solutions, and knowledge management portals. Each type is designed to serve specific industries and business goals.",
  },
  {
    question: "How much does web portal development cost?",
    answer:
      "Cost depends on scope, features, integrations, and security requirements. Simple portals may start at lower budgets, while enterprise-grade solutions require higher investment. For clarity, businesses often request estimates based on custom portal development services pricing.",
  },
  {
    question: "What are the benefits of custom web portal development?",
    answer:
      "The benefits of custom web portal development include centralized data access, improved customer experience, workflow automation, enhanced security, and scalability. Tailored solutions ensure portals fit unique business needs rather than relying on one-size-fits-all platforms.",
  },
  {
    question: "How can I hire a web portal development company?",
    answer:
      "Hiring a web portal development company involves evaluating experience, client reviews, pricing models, and industry expertise. Many businesses also compare the best web portal development companies in the USA before finalizing a trusted partner.",
  },
  {
    question:
      "What should I know about custom portal development services pricing?",
    answer:
      "Custom portal development services pricing varies based on functionality, integrations, and support requirements. Transparent pricing models help businesses choose affordable web portal developers USA without compromising quality or long-term scalability.",
  },
  {
    question: "Should I outsource portal development in the United States?",
    answer:
      "Outsource portal development in the United States if you want access to skilled developers, faster delivery timelines, and ongoing technical support. Many organizations outsource to top-rated portal development agencies near me for specialized expertise.",
  },
  {
    question: "Where can I find reviews of US web portal development agencies?",
    answer:
      "Reviews of US web portal development agencies can be found on trusted platforms such as Clutch, G2, or Google Business. Independent feedback highlights strengths in delivery, communication, and post-deployment support.",
  },
  {
    question:
      "What is the difference between enterprise and small business web portal development?",
    answer:
      "Enterprise web portal development focuses on complex integrations, security frameworks, and large-scale user management. In contrast, small business web portal development emphasizes affordability, ease of use, and faster deployment while still supporting growth.",
  },
  {
    question:
      "How does a healthcare portal development company comparison work?",
    answer:
      "Healthcare portal development company comparison involves evaluating compliance with HIPAA, security measures, and patient experience design. Businesses often look for agencies experienced in healthcare portal development services to ensure usability, security, and regulatory adherence.",
  },
  {
    question:
      "Why should I choose a web portal development company for business?",
    answer:
      "A professional web portal development company for business ensures you get a solution tailored to your workflows, helping improve collaboration, customer experience, and overall operational efficiency while reducing costs.",
  },
  {
    question: "Why hire a web portal development outsourcing company?",
    answer:
      "Working with a web portal development outsourcing company allows businesses to access skilled developers, reduce in-house costs, and speed up project delivery while maintaining quality and scalability.",
  },
  {
    question: "Why work with an enterprise web portal development company?",
    answer:
      "Partnering with an enterprise web portal development company helps large organizations build secure, scalable platforms with advanced integrations that support thousands of users and ensure compliance with industry standards.",
  },
];

// Legacy exports for backward compatibility
export const webPortalDevelopmentBannerData2 = webPortalDevelopmentFinalCTAData;
