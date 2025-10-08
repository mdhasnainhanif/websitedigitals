import { BagIcon } from "@/icons";

// Banner Data (Section 1)
export const webApplicationDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Web Application Development Services",
      href: "/services/web-application-development-services",
    },
  },
  heading: "Increase Revenue with [[Web Application Development Services]]",
  description: [
    "Businesses today struggle with outdated systems that slow growth and limit scalability.",
    "",
    "At Website Digitals, our custom web application development services are designed to help organizations modernize their operations with cost efficiency.",
    "",
    "We focus on building scalable solutions that improve efficiency, deliver stronger user experience design, and support long-term digital transformation goals.",
    "",
    "You can expect:",
    "• Custom Web Applications",
    "• Secure & Future-Proof Development",
    "• Optimized Performance and User Experience",
  ],
  isCta: true,
  cta: {
    text: "Start Web App Project",
    href: "#",
    className: "offer-btn primary",
  },
  image: null,
};

// Stats Counter Data (Section 2)
export const webApplicationDevelopmentStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Web Apps Delivered",
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
    label: "Retention Rate",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Security Compliance",
  },
];

// Impact Section Data (Section 3) - for DevelopmentCards
export const webApplicationDevelopmentImpactSectionData = {
  heading: "Why Businesses Invest in Web App Development",
  description:
    "Modern web applications drive growth, strengthen security, and build lasting brand trust while helping businesses scale, expand reach, and deliver seamless customer experiences. Key areas of impact:",
};

export const webApplicationDevelopmentImpactCardsData = [
  {
    id: 1,
    title: "Business Growth and Market Reach",
    description:
      "An agile development methodology shortens release cycles and adapts to shifting demands. SaaS applications extend access across regions, while responsive web apps ensure usability on every device, supporting wider market reach.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Data Security and Compliance",
    description:
      "Integrated cybersecurity practices and secure API integration protect sensitive data. Cloud-based applications enhance governance and compliance, aligned with standards such as the OWASP Top Ten, NIST, and ISO/IEC 27001.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Brand Image and Competitiveness",
    description:
      "Strong UX/UI design, cross-platform compatibility, and progressive web apps (PWA) deliver consistent, accessible experiences. Adhering to W3C standards further reinforces credibility and competitiveness.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Cost-Effectiveness and ROI",
    description:
      "Designing with scalability minimizes redevelopment costs, while cloud-based applications reduce infrastructure expenses. Together, these factors improve efficiency and deliver measurable ROI.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const webApplicationDevelopmentServicesSectionData = {
  heading: "Web App Development Services We Provide to Businesses",
  description:
    "We provide end-to-end solutions built to meet the needs of modern businesses. Each service is designed for adaptability, scalability, and long-term value. Our key service areas:",
};

export const webApplicationDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Web App Development",
    description:
      "We build bespoke applications aligned with unique workflows and goals. From tailored solutions for small businesses to enterprise-grade web apps, every project is created for measurable impact.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description:
      "With expertise in frontend and backend development, our team delivers secure and responsive solutions. Using Node.js, React, Angular, and Django, we create applications that perform across devices.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Cloud-Ready Application Development",
    description:
      "We develop applications built for the cloud from the start. Leveraging AWS, Azure, and Google Cloud, we deliver cloud-native apps with SaaS integration that scale and adapt with ease.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "API & Third-Party Integration",
    description:
      "Our API-driven development connects your applications to third-party systems for greater functionality. By ensuring system interoperability within digital ecosystems, we expand capabilities and streamline operations.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const webApplicationDevelopmentIndustriesSectionData = {
  heading: "Our Expertise Across Sectors",
  description:
    "With 15+ years of experience, we deliver secure, scalable solutions that help businesses overcome challenges, streamline operations, and drive growth.",
  cta: {
    text: "Get Your Industry Solution",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const webApplicationDevelopmentIndustriesCardsData = [
  {
    title: "Healthcare",
    description:
      "Secure patient portals, telemedicine platforms, and HIPAA-compliant systems help our web application development services for healthcare empower providers to improve care coordination and patient engagement.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Healthcare Web App Development",
    width: 71,
    height: 71,
  },
  {
    title: "Ecommerce",
    description:
      "Boost conversions with intuitive storefronts, smart inventory tools, and seamless checkouts. Our web application development for ecommerce businesses helps drive sales and deliver frictionless customer experiences.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Ecommerce Web App Development",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "Showcase properties with immersive virtual tours, smart search filters, and lead-tracking dashboards. Our web application development services for real estate simplify transactions and enhance buyer–seller interactions.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Real Estate Web App Development",
    width: 71,
    height: 71,
  },
  {
    title: "Logistics",
    description:
      "Optimize routes, track shipments in real time, and reduce delivery costs. Our web app development services for logistics bring transparency and speed to supply chain operations.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Logistics Web App Development",
    width: 71,
    height: 71,
  },
  {
    title: "Automotive",
    description:
      "Enable online vehicle booking, inventory visibility, and customer self-service portals. Our web application development for automotive enhances dealership efficiency and improves customer loyalty.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Automotive Web App Development",
    width: 71,
    height: 71,
  },
  {
    title: "Manufacturing",
    description:
      "Automate production workflows, enable predictive maintenance, and gain real-time performance insights. Our web application development services for manufacturing support Industry 4.0 adoption and ROI-driven operations.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Manufacturing Web App Development",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 8) - for ScrollSection
export const webApplicationDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Us a Trusted Web Application Development Company",
  description: [
    "Selecting the right partner is critical when building solutions that drive growth and long-term value. Here's what sets us apart:",
  ],
  items: [
    {
      id: "app-firstScroller",
      step: 1,
      title: "End-to-End Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We manage the entire software development lifecycle, supported by DevOps practices and agile delivery methods. This ensures projects are delivered efficiently, with continuous improvement and faster time to market.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "End-to-End Expertise",
        width: 669,
        height: 376,
      },
    },
    {
      id: "app-secondScroller",
      step: 2,
      title: "Future-Proof Technology Stack",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our solutions are built using modern frameworks such as React, Angular, Vue.js, and Django. With responsive design principles and progressive web apps, applications remain relevant, adaptable, and aligned with the latest industry standards.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Future-Proof Technology Stack",
        width: 669,
        height: 376,
      },
    },
    {
      id: "app-thirdScroller",
      step: 3,
      title: "Focus on Security & Compliance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We adhere to international benchmarks like ISO/IEC 27001 and apply secure development practices across every project. By delivering compliance-ready solutions, we help businesses meet regulations while protecting sensitive data.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Focus on Security & Compliance",
        width: 669,
        height: 376,
      },
    },
    {
      id: "app-forthScroller",
      step: 4,
      title: "Scalable Solutions for Any Business Size",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "From startups to enterprises, our approach to enterprise web development ensures growth without limitations. By leveraging cloud scalability and performance optimization, we deliver solutions that adapt as business needs expand.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Scalable Solutions for Any Business Size",
        width: 669,
        height: 376,
      },
    },
    {
      id: "app-fifthScroller",
      step: 5,
      title: "User-Centric Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our process starts with a UX-first design that prioritizes usability. Through usability testing and a commitment to digital innovation, we create applications that not only meet business goals but also exceed user expectations.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "User-Centric Approach",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

// Workflow Data (Section 9) - for StepSection
export const webApplicationDevelopmentWorkflowData = {
  title: "Our Process for Building Web Applications That Last",
  description:
    "A structured process ensures every project moves from concept to launch with clarity, quality, and long-term value. Each stage is designed to keep business goals and user needs at the core. Here's how we work:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Strategy",
      description:
        "We begin with business analysis to understand objectives and challenges, followed by requirements gathering to capture critical functionality. The outcome is a digital transformation roadmap that guides development with clear milestones and priorities.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Design & Prototyping",
      description:
        "Once the strategy is set, our design team creates intuitive UI/UX design concepts. We prepare wireframes to define structure and deliver responsive prototypes that allow stakeholders to visualize and refine the application before development begins.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Agile Development & Testing",
      description:
        "Development is carried out in iterative sprints, ensuring progress is measurable and adaptable. Through QA testing and optimized DevOps pipelines, every release maintains quality, scalability, and alignment with project goals.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Deployment & Support",
      description:
        "The final application is prepared for cloud deployment, ensuring performance and scalability from day one. After launch, we provide ongoing maintenance and performance monitoring to keep the application secure, efficient, and ready to grow with your business.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Technologies Section Data (Section 10) - for PlatformsSpecialize
export const webApplicationDevelopmentTechnologiesSectionData = {
  heading: "Our Technologies for Web Apps",
  description:
    "Our certified developers use trusted frameworks and modern stacks to deliver scalable, high-performing web applications aligned with your business goals.",
  cta: {
    text: "Launch a Future-Ready App",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

export const webApplicationDevelopmentTechnologiesData = [
  {
    id: 1,
    title: "React.js",
    description:
      "Achieve lightning-fast, interactive UIs with reusable components. Businesses looking to hire ReactJS web application development services gain optimized performance and a smooth user experience across devices.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Angular",
    description:
      "Deliver enterprise-grade single-page apps with powerful architecture and maintainability. When you hire Angular web application development services, you get scalable, secure, and modular solutions built to last.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Vue.js",
    description:
      "Leverage the flexibility of Vue for lightweight, progressive web apps. Companies that hire Vue.js web application development services benefit from rapid development and streamlined user interfaces.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Node.js",
    description:
      "Power real-time applications and high-traffic platforms with ease. Organizations that hire Node.js web application development services get fast, event-driven backends built for speed and reliability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: ".NET",
    description:
      "Develop secure, enterprise-level applications tailored to complex workflows. Businesses that hire .NET web application development services gain stability, seamless integrations, and long-term scalability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "Java Spring Boot",
    description:
      "Build microservice-ready, cloud-friendly solutions quickly and efficiently. Companies that hire Java Spring Boot web application development services benefit from performance-driven apps designed for enterprise growth.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Final CTA Section Data (Section 12)
export const webApplicationDevelopmentFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Web Application Development Services",
      href: "/services/web-application-development-services",
    },
  },
  heading: "Turn Limited Scalability into Growth",
  description: [
    "Rely on custom web application development that grows with your needs. Our proven scalable solutions and trusted role as a digital transformation partner give you confidence in every stage of your business journey.",
  ],
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Web Application Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start Scaling Today",
    href: "#",
    className: "offer-btn primary",
  },
};

// FAQs Data (Section 13)
export const webApplicationDevelopmentFAQsData = [
  {
    question: "Why choose Website Digitals for web application development?",
    answer:
      "We deliver custom solutions focused on scalability, security, and user experience, managing the full lifecycle to ensure long-term growth.",
  },
  {
    question:
      "Does Website Digitals provide scalable solutions for growing businesses?",
    answer:
      "Yes. Our cloud-ready applications scale with demand, supporting both startups and enterprises through performance optimization.",
  },
  {
    question: "How does Website Digitals support digital transformation goals?",
    answer:
      "We align technology with strategy, creating applications that streamline operations, integrate with systems, and drive sustainable growth.",
  },
  {
    question: "What is web application development?",
    answer:
      "It's the process of designing, building, and maintaining interactive applications that run in a browser. Unlike websites, web apps let users complete tasks such as shopping, logging in, or managing data.",
  },
  {
    question: "What are the benefits of custom web application development?",
    answer:
      "Custom apps are built around your processes, improving efficiency and user experience. They scale with business growth and support long-term digital transformation.",
  },
  {
    question: "What is the difference between a website and a web application?",
    answer:
      "A website shares information, while a web application enables interaction. For example, a blog is a website, while online banking is a web app with secure logins and transactions.",
  },
  {
    question: "Can you explain the web application development process?",
    answer:
      "The process typically involves business analysis, requirements gathering, UI/UX design, prototyping, agile development, QA testing, and deployment with ongoing support.",
  },
  {
    question: "What are the best technologies for web application development?",
    answer:
      "Modern frameworks like React, Angular, Vue.js, and Django are widely used. Cloud platforms such as AWS, Azure, and Google Cloud support hosting, integration, and scalability.",
  },
  {
    question: "Why should I hire a web application development company?",
    answer:
      "A company provides full lifecycle expertise, covering design, development, security, and support. This ensures scalability and compliance that may be harder to achieve in-house.",
  },
  {
    question: "Are there affordable web app development services near me now?",
    answer:
      "Yes. Many agencies deliver cost-effective solutions, and with remote collaboration, location is no longer a barrier to accessing skilled developers.",
  },
  {
    question: "Should I outsource custom web app development?",
    answer:
      "Outsourcing reduces overhead, provides access to global expertise, and allows businesses to focus on core operations while developers handle scalability and delivery.",
  },
  {
    question: "How much does web application development cost?",
    answer:
      "Costs vary by complexity, features, and tech stack. Smaller apps cost less, while enterprise-grade solutions require higher investment. A custom estimate gives clarity.",
  },
  {
    question: "Is there a way to compare web app development costs?",
    answer:
      "Yes. Comparing agencies, regions, and technologies helps, but quality, support, and scalability should weigh more than just upfront pricing.",
  },
  {
    question:
      "Which is better for web app development agencies or freelancers?",
    answer:
      "Agencies are suited for larger, long-term projects with scalability and compliance needs. Freelancers may be cost-effective for smaller tasks but have limited resources.",
  },
  {
    question: "How do custom applications compare to off-the-shelf solutions?",
    answer:
      "Custom apps align with specific workflows and scale as needs grow. Off-the-shelf tools are faster to adopt but often lack flexibility and integration options.",
  },
  {
    question: "Why should I hire web application development services?",
    answer:
      "When you hire web application development services, you get a dedicated team focused on building secure, scalable apps that align with your goals and deliver measurable results.",
  },
  {
    question: "What are scalable web application development services?",
    answer:
      "Scalable web application development services are solutions built to handle user growth, larger data volumes, and evolving features without performance issues.",
  },
  {
    question: "What are dedicated web application development services?",
    answer:
      "Dedicated web application development services provide a team working exclusively on your project, ensuring faster delivery, better communication, and solutions tailored to your business.",
  },
];

// Legacy exports for backward compatibility
export const webApplicationDevelopmentBannerData2 =
  webApplicationDevelopmentFinalCTAData;
