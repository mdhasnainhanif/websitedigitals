import { BagIcon } from "@/icons";

// Metadata for Cloud Hosting Services
export const cloudHostingServicesMetadata = {
  title: "End Downtime & Latency with Reliable Cloud Hosting Services | Website Digitals",
  description:
    "Website Digitals cloud hosting services solve scaling problems by auto-adjusting resources, improving speed, and reducing costly downtime.",
  keywords: "cloud hosting services, cloud hosting, scalable hosting, enterprise cloud hosting, managed cloud hosting",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/cloud-hosting-services/",
  openGraph: {
    title: "End Downtime & Latency with Reliable Cloud Hosting Services | Website Digitals",
    description:
      "Website Digitals cloud hosting services solve scaling problems by auto-adjusting resources, improving speed, and reducing costly downtime.",
    url: "https://www.websitedigitals.com/website-hosting-services/cloud-hosting-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/cloud-hosting-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Cloud Hosting Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "End Downtime & Latency with Reliable Cloud Hosting Services | Website Digitals",
    description:
      "Website Digitals cloud hosting services solve scaling problems by auto-adjusting resources, improving speed, and reducing costly downtime.",
    images: [
      "https://websitedigitals.com/assets/images/cloud-hosting-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/cloud-hosting-services/",
  },
};

export const cloudHostingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Cloud Hosting Services",
      href: "/website-hosting-services/cloud-hosting-services",
    },
  },
  heading: "Cloud Hosting Services for [[Fast]] and [[Scalable]] Websites",
  description: [
    "Running a website that crashes when traffic spikes can hurt growth and sales.", "At Website Digitals, our cloud hosting services are powered by enterprise-grade cloud infrastructure, elastic compute, and optimized for maximum server uptime.\n\nWith instant scaling, your site stays consistent during traffic surges, delivering fast website performance at all times.",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Get on the Cloud Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "managed-cloud", label: "Managed Cloud Hosting" },
      { value: "public-cloud", label: "Public Cloud Hosting" },
      { value: "private-cloud", label: "Private Cloud Hosting" },
      { value: "hybrid-cloud", label: "Hybrid Cloud Solutions" },
      { value: "cloud-migration", label: "Cloud Migration" },
      { value: "cloud-consultation", label: "Cloud Consultation" },
    ],
    initialValues: {
      help: "managed-cloud",
    },
  },
};

export const cloudHostingServicesBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Cloud Hosting Services",
      href: "/website-hosting-services/cloud-hosting-services",
    },
  },
  heading: "Secure Your Website Before the Next Traffic Surge",
  description: [
    "Don't let downtime or slow performance hold your business back. Get started with our cloud hosting platform to keep your site fast and protected with enterprise-grade cloud hosting that ensures uptime and supports growth when it matters most.",
  ],
  bullets: [],
  cta: {
    text: "Start My Cloud Hosting",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Cloud Hosting Services Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const cloudHostingServicesStatsData = [
  {
    id: 1,
    value: 99.99,
    suffix: "%",
    label: "Uptime Guarantee",
  },
  {
    id: 2,
    value: 100,
    suffix: "+",
    label: "Sites Hosted",
  },
  {
    id: 3,
    value: 3,
    suffix: "x",
    label: "Faster Load Speeds",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Expert Support",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const cloudHostingServicesImpactCardsData = [
  {
    id: 1,
    title: "Reliability & Uptime",
    description:
      "Cloud hosting offers high availability hosting with an uptime guarantee and a clear SLA (Service Level Agreement). Redundant data centers keep websites online even during failures. NIST Cloud Computing Program guidelines stress the need for consistent uptime, with top providers targeting 99.9%+ availability.",
    icon: "reliability",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 2,
    title: "Performance Optimization",
    description:
      "Global delivery networks and smart load balancing keep websites fast across devices and regions, boosting user experience and search performance.",
    icon: "performance",
    isHighlighted: true,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 3,
    title: "Scalability On Demand",
    description:
      "With auto-scaling servers and elastic scaling, resources adjust instantly during traffic surges. Multi-cloud infrastructure spreads workloads across regions for low latency and consistent stability.",
    icon: "scalability",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 4,
    title: "Security & Compliance",
    description:
      "Cloud environments provide data redundancy, meet GDPR compliance, and maintain SOC 2 and HIPAA compliance for regulated sectors. Following ISO/IEC 27001 standards and auditing security measures builds trust and meets industry requirements.",
    icon: "security",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 5,
    title: "Cost Efficiency & Flexibility",
    description:
      "Pay-as-you-go pricing eliminates waste by scaling resources up or down based on demand, keeping costs predictable and performance steady.",
    icon: "cost-efficiency",
    isHighlighted: false,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const cloudHostingServicesImpactSectionData = {
  heading: "Why Cloud Hosting Matters for Your Business",
  showDescription: true,
  description:
    "The right hosting solution impacts website performance, security, and growth potential. Cloud hosting delivers flexibility and reliability that traditional models can't match. Consider these core benefits:",
};

// Services Data
export const cloudHostingServicesData = [
  {
    id: 1,
    title: "Managed Cloud Hosting",
    description:
      "Our managed hosting service includes 24/7 monitoring and proactive server management, keeping servers optimized for uptime, security, and smooth operations so you can focus on growing your business.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Public & Private Cloud Options",
    description:
      "Choose public cloud hosting for scalability, private cloud hosting for dedicated resources, or hybrid cloud solutions for a mix of both. Our infrastructure supports virtual servers, containerized applications, and disaster recovery planning to maintain stability under any circumstances.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Cloud Hosting for Industries",
    description:
      "From cloud hosting for e-commerce with high-transaction needs to enterprise-grade hosting for large organizations and developer-friendly hosting with cloud-native applications, Kubernetes, and Docker, we offer solutions built for a range of projects and workflows.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Load Balancing & Performance Support",
    description:
      "We use intelligent load balancing to distribute traffic evenly across servers, preventing downtime and keeping response times fast even during peak demand. This ensures consistent website performance and a reliable user experience.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Industries Data
export const cloudHostingServicesIndustriesData = [
  {
    id: 1,
    title: "Online Stores",
    description:
      "Our cloud hosting services for online stores keep e-commerce websites fast, secure, and scalable. They ensure smooth shopping experiences during flash sales or traffic peaks without downtime.",
    icon: "/assets/images/industry/ecommerce.svg",
  },
  {
    id: 2,
    title: "SaaS",
    description:
      "We provide cloud hosting services for SaaS apps built for high availability, fast scaling, and secure performance. Your users experience consistent speed and reliability at all times.",
    icon: "/assets/images/industry/technology.svg",
  },
  {
    id: 3,
    title: "Healthcare",
    description:
      "Our cloud hosting for healthcare software supports HIPAA compliance, data security, and constant access to patient information. It is ideal for critical healthcare systems that require complete trust.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 4,
    title: "Financial",
    description:
      "We offer cloud hosting for financial services with PCI DSS-compliant infrastructure, advanced encryption, and real-time resource scaling. It ensures secure banking, fintech, and investment operations.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 5,
    title: "Schools",
    description:
      "Our cloud hosting services for schools power online learning platforms and virtual classrooms with dependable uptime and secure data management. Students and educators enjoy uninterrupted access.",
    icon: "/assets/images/industry/education.svg",
  },
  {
    id: 6,
    title: "Game Studios",
    description:
      "We design cloud hosting services for game studios that manage heavy multiplayer traffic and real-time updates with low latency. Players enjoy smooth and continuous gaming performance.",
    icon: "/assets/images/industry/gaming.svg",
  },
];

// Technologies Data
export const cloudHostingServicesTechnologiesData = [
  {
    id: 1,
    title: "AWS",
    description:
      "Amazon Web Services provides scalable cloud infrastructure with services like EC2, S3, and CloudFront. Our AWS-certified experts help you leverage the full power of the cloud for maximum performance and reliability.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 2,
    title: "Google Cloud",
    description:
      "Google Cloud Platform offers advanced machine learning capabilities and global infrastructure. We help you build and deploy applications that scale automatically with Google's robust cloud services.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 3,
    title: "Microsoft Azure",
    description:
      "Microsoft Azure provides enterprise-grade cloud solutions with seamless integration to Microsoft products. Our Azure specialists ensure your applications run smoothly with hybrid cloud capabilities.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 4,
    title: "Docker",
    description:
      "Containerization with Docker enables consistent deployment across environments. We help you containerize applications for better scalability, portability, and resource efficiency in the cloud.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 5,
    title: "Kubernetes",
    description:
      "Kubernetes orchestration manages containerized applications at scale. Our experts help you implement K8s for automated scaling, load balancing, and high availability in cloud environments.",
    icon: "/assets/images/technologyIcons.png",
  },
  {
    id: 6,
    title: "CDN",
    description:
      "Content Delivery Networks accelerate content delivery worldwide. We implement CDN solutions to reduce latency, improve load times, and enhance user experience across global audiences.",
    icon: "/assets/images/technologyIcons.png",
  },
];

// Workflow Data (for StepSection component)
export const cloudHostingServicesWorkflowData = {
  title: "Our Cloud Hosting Process",
  description:
    "Migrating to the cloud can seem complex, but our process is designed to be structured and predictable so you know exactly what to expect.",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Consultation & Assessment",
      description:
        "We begin with a detailed cloud readiness assessment to analyze your current infrastructure and needs. Based on the findings, we create a tailored hosting migration plan outlining timelines, dependencies, and risk-mitigation measures.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Deployment & Scaling",
      description:
        "Our team handles server provisioning, configures load balancing setup, and performs auto-scaling configuration so resources adjust to changing demand. High-availability architecture and elastic compute capabilities ensure stability and reliable performance during peak traffic periods.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Monitoring & Optimization",
      description:
        "Once deployed, we provide continuous performance monitoring, uptime tracking, and resource optimization to keep your site efficient. Regular reviews include disaster recovery planning and updates to your cloud infrastructure to maintain resilience as your business grows.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
  ],
};

// Why Choose Us Data
export const cloudHostingServicesWhyChooseUsData = [
  {
    id: 1,
    title: "Performance-Focused Architecture",
    description:
      "Our infrastructure runs on a low-latency network with a global CDN to deliver consistently fast load times worldwide.",
    icon: "performance",
  },
  {
    id: 2,
    title: "Built-In Redundancy",
    description:
      "Regular data backup schedules and automated failover systems protect against hardware failures and minimize downtime, helping maintain business continuity with near-99.9% availability targets.",
    icon: "redundancy",
  },
  {
    id: 3,
    title: "Compliance & Security",
    description:
      "We operate PCI DSS–compliant and ISO/IEC 27001–certified data centers, aligning with security controls recommended by the Cloud Security Alliance and NIST frameworks to ensure your data is protected under strict standards.",
    icon: "security",
  },
  {
    id: 4,
    title: "Transparent Pricing",
    description:
      "Our predictable pricing model and pay-as-you-go hosting let you control costs with full visibility, paying only for the resources you actually use.",
    icon: "pricing",
  },
  {
    id: 5,
    title: "Expert Support",
    description:
      "Our certified cloud engineers provide 24/7 live support with fast response times, so expert help is always within reach when issues arise.",
    icon: "support",
  },
];

// FAQ Data
export const cloudHostingServicesFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for cloud hosting?",
    answer:
      "Website Digitals delivers fast, reliable, and scalable cloud hosting with enterprise-grade infrastructure, 24/7 monitoring, and expert support to keep your site running at its best.",
  },
  {
    id: 2,
    question: "Does Website Digitals assist with cloud migration?",
    answer:
      "Yes. We provide a cloud readiness assessment and a detailed migration plan, handling setup and optimization to minimize downtime during the move.",
  },
  {
    id: 3,
    question: "What is cloud hosting, and how does it work?",
    answer:
      "Cloud hosting is a hosting model where your website or application runs on a network of connected virtual servers rather than a single physical machine. This setup uses a distributed cloud infrastructure to balance resources, providing better uptime, scalability, and performance.",
  },
  {
    id: 4,
    question: "What are the benefits of cloud hosting over shared hosting?",
    answer:
      "Unlike shared hosting, where multiple websites compete for the same resources on one server, cloud hosting provides dedicated resources and elastic compute that scale on demand. This means better website performance, faster load times, and more reliability during traffic spikes.",
  },
  {
    id: 5,
    question: "What is the difference between cloud hosting, VPS, and dedicated servers?",
    answer:
      "Cloud hosting uses virtual servers connected to multiple machines, offering scalability and high availability. VPS hosting gives you a fixed portion of one physical server's resources, providing more control than shared hosting but less flexibility than cloud hosting. Dedicated servers provide full control over a single physical machine, ideal for workloads that require complete isolation and custom configurations.",
  },
  {
    id: 6,
    question: "How secure is cloud hosting?",
    answer:
      "Modern cloud hosting providers implement advanced security measures, including DDoS protection, firewalls, data encryption, and compliance with standards such as ISO/IEC 27001 and SOC 2. Many platforms also offer PCI DSS–compliant options for businesses handling online transactions.",
  },
  {
    id: 7,
    question: "What are the best practices for migrating to cloud hosting?",
    answer:
      "Best practices include running a cloud readiness assessment, creating a detailed hosting migration plan, testing workloads in a staging environment, and setting up disaster recovery protocols. Monitoring performance post-migration is essential to ensure uptime and stability.",
  },
  {
    id: 8,
    question: "Does cloud hosting offer a 99.99% uptime guarantee?",
    answer:
      "Yes, many top providers include cloud hosting with a 99.99% uptime guarantee backed by Service Level Agreements (SLAs). This ensures your website remains available nearly all the time, minimizing disruptions to visitors and sales.",
  },
  {
    id: 9,
    question: "Are there managed cloud hosting plans for WordPress?",
    answer:
      "Yes, many hosts offer managed cloud hosting plans for WordPress, which include automatic updates, performance optimization, backups, and 24/7 support. This is perfect for businesses that want hassle-free WordPress management.",
  },
  {
    id: 10,
    question: "Does cloud hosting come with DDoS protection?",
    answer:
      "Yes, most enterprise-grade solutions include cloud hosting with DDoS protection to filter malicious traffic, safeguard uptime, and protect sensitive data during attacks.",
  },
  {
    id: 11,
    question: "What is the difference between AWS, Google Cloud, and Azure pricing?",
    answer:
      "AWS, Google Cloud, and Microsoft Azure all use pay-as-you-go models, but their pricing structures vary. AWS offers granular per-second billing, Google Cloud provides sustained-use discounts, and Azure bundles enterprise-friendly licensing benefits. Choosing the right provider depends on workload size, storage needs, and long-term cost projections.",
  },
  {
    id: 12,
    question: "What is the top-rated cloud hosting for e-commerce?",
    answer:
      "Top-rated cloud hosting for e-commerce includes platforms with scalable infrastructure, PCI compliance, fast load speeds, and global CDNs. These features support secure transactions and keep online stores running smoothly even during high sales periods.",
  },
  {
    id: 13,
    question: "What is the best cloud hosting for high-traffic websites?",
    answer:
      "The best cloud hosting for high-traffic websites offers auto-scaling, load balancing, and optimized caching to handle traffic surges without performance drops. Multi-region availability is also crucial for global audiences.",
  },
  {
    id: 14,
    question: "What are cloud hosting services with CDN integration?",
    answer:
      "Cloud hosting services with CDN integration use distributed edge servers to deliver content closer to users. This improves load speeds worldwide, reduces latency, and enhances user experience during peak traffic.",
  },
  {
    id: 15,
    question: "What are cloud hosting services with API access?",
    answer:
      "Cloud hosting services with API access allow developers to automate server management, integrate applications, and customize environments. This enables efficiency, faster deployments, and seamless scaling for modern digital platforms.",
  },
  {
    id: 16,
    question: "What are cloud hosting services with auto scaling?",
    answer:
      "Cloud hosting services with auto scaling automatically adjust resources based on demand. This prevents slowdowns, keeps performance consistent, and ensures cost efficiency by avoiding overprovisioning.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const cloudHostingServicesSectionData = {
  heading: "Our End-to-End Cloud Hosting Services for Your Business",
  description:
    "Every business has unique hosting needs, so we offer solutions tailored to fit specific requirements and industries. Explore our hosting options:",
  showDescription: true,
  cta: {
    label: "Start Your Cloud Project",
    href: "#",
    className: "book-your-call d-block mx-auto w_fit",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const cloudHostingServicesIndustriesSectionData = {
  heading: "Industries We Support with Cloud Hosting",
  description:
    "We deliver flexible cloud hosting solutions for a wide range of industries. Our expertise helps every business achieve strong performance, full compliance, and sustainable growth across digital platforms.",
  cta: {
    text: "Launch on the Cloud",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const cloudHostingServicesIndustriesCardsData = [
  {
    title: "Online Stores",
    description:
      "Our cloud hosting services for online stores keep e-commerce websites fast, secure, and scalable. They ensure smooth shopping experiences during flash sales or traffic peaks without downtime.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Online Stores Cloud Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "SaaS",
    description:
      "We provide cloud hosting services for SaaS apps built for high availability, fast scaling, and secure performance. Your users experience consistent speed and reliability at all times.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "SaaS Cloud Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "Our cloud hosting for healthcare software supports HIPAA compliance, data security, and constant access to patient information. It is ideal for critical healthcare systems that require complete trust.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Healthcare Cloud Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Financial",
    description:
      "We offer cloud hosting for financial services with PCI DSS-compliant infrastructure, advanced encryption, and real-time resource scaling. It ensures secure banking, fintech, and investment operations.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Financial Cloud Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Schools",
    description:
      "Our cloud hosting services for schools power online learning platforms and virtual classrooms with dependable uptime and secure data management. Students and educators enjoy uninterrupted access.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Schools Cloud Hosting",
    width: 71,
    height: 71,
  },
  {
    title: "Game Studios",
    description:
      "We design cloud hosting services for game studios that manage heavy multiplayer traffic and real-time updates with low latency. Players enjoy smooth and continuous gaming performance.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Game Studios Cloud Hosting",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const cloudHostingServicesWhyChooseUsSectionData = {
  heading: "What Makes Our Cloud Hosting the Right Choice",
  description:
    "Selecting a cloud hosting partner is about more than just server space. It is about reliability, performance, and trust, and here's what makes our solutions stand out.",
};

// Workflow Section Data (Section 8)
export const cloudHostingServicesWorkflowSectionData = {
  heading: "Our Cloud Hosting Process",
  description:
    "Migrating to the cloud can seem complex, but our process is designed to be structured and predictable so you know exactly what to expect.",
};

// Technologies Section Data (Section 9) - for PlatformsSpecialize
export const cloudHostingServicesTechnologiesSectionData = {
  heading: "Tools We Use",
  description:
    "Our team leverages industry-leading cloud platforms and technologies to deliver secure, scalable, and future-ready hosting solutions. We choose the right technology stack for your business, ensuring reliable performance, smooth integrations, and a solution that grows with you.",
  showDescription: true,
  cta: {
    text: "See Tech in Action",
    href: "#",
    className: "primary book-your-call",
    show: true,
  },
};

// Final CTA Section Data (Section 11)
export const cloudHostingServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Cloud Hosting Services",
      href: "/website-hosting-services/cloud-hosting-services",
    },
  },
  heading: "Secure Your Website Before the Next Traffic Surge",
  description: [
    "Don't let downtime or slow performance hold your business back. Get started with our cloud hosting platform to keep your site fast and protected with enterprise-grade cloud hosting that ensures uptime and supports growth when it matters most.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.webp",
    alt: "Cloud Hosting Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Start My Cloud Hosting",
    href: "#",
    className: "offer-btn primary",
  },
};

// Scroll Section Data
export const cloudHostingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Our Cloud Hosting the Right Choice",
  description: [
    "Selecting a cloud hosting partner is about more than just server space. It is about reliability, performance, and trust, and here's what makes our solutions stand out.",
  ],
  items: [
    {
      id: "cloud-firstScroller",
      step: 1,
      title: "Performance-Focused Architecture",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our infrastructure runs on a low-latency network with a global CDN to deliver consistently fast load times worldwide.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Performance-Focused Architecture",
        width: 669,
        height: 376,
      },
    },
    {
      id: "cloud-secondScroller",
      step: 2,
      title: "Built-In Redundancy",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Regular data backup schedules and automated failover systems protect against hardware failures and minimize downtime, helping maintain business continuity with near-99.9% availability targets.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Built-In Redundancy",
        width: 669,
        height: 376,
      },
    },
    {
      id: "cloud-thirdScroller",
      step: 3,
      title: "Compliance & Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We operate PCI DSS–compliant and ISO/IEC 27001–certified data centers, aligning with security controls recommended by the Cloud Security Alliance and NIST frameworks to ensure your data is protected under strict standards.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Compliance & Security",
        width: 669,
        height: 376,
      },
    },
    {
      id: "cloud-forthScroller",
      step: 4,
      title: "Transparent Pricing",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our predictable pricing model and pay-as-you-go hosting let you control costs with full visibility, paying only for the resources you actually use.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376,
      },
    },
    {
      id: "cloud-fifthScroller",
      step: 5,
      title: "Expert Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our certified cloud engineers provide 24/7 live support with fast response times, so expert help is always within reach when issues arise.",
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
