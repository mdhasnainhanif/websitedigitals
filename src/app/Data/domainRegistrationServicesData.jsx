import { BagIcon } from "@/icons";

// Metadata for Domain Registration Service
export const domainRegistrationMetadata = {
  title: "Get Trusted Domain Registration Services | Website Digitals",
  description:
    "Claim your domain in minutes. Our domain registration services include privacy protection, secure checkout, and 24/7 expert support.",
  keywords: "domain registration, domain name, ICANN accredited, WHOIS privacy, domain transfer, domain renewal",
  canonical:
    "https://www.websitedigitals.com/website-hosting-services/domain-registration-services/",
  openGraph: {
    title: "Get Trusted Domain Registration Services | Website Digitals",
    description:
      "Claim your domain in minutes. Our domain registration services include privacy protection, secure checkout, and 24/7 expert support.",
    url: "https://www.websitedigitals.com/website-hosting-services/domain-registration-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/domain-registration-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Domain Registration Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Get Trusted Domain Registration Services | Website Digitals",
    description:
      "Claim your domain in minutes. Our domain registration services include privacy protection, secure checkout, and 24/7 expert support.",
    images: [
      "https://websitedigitals.com/assets/images/domain-registration-twitter-image.jpg",
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
      "https://www.websitedigitals.com/website-hosting-services/domain-registration-services/",
  },
};

export const domainRegistrationBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Domain Registration Services",
      href: "/website-hosting-services/domain-registration-services",
    },
  },
  heading: "Domain Registration Services That Are [[Secure]], [[Simple]] & [[Fast]]",
  description: [
    "Losing your perfect domain to someone else is frustrating when it should have been yours from the start.", "At Website Digitals, our domain registration services make it quick and secure so you can claim your online identity with confidence.", "Every step is protected with encrypted payments and trusted processes, giving you full control over your domain settings from day one. Here's what you get:\n\n• Secure domain registration with ICANN accreditation\n• Tools to buy a domain name instantly\n• Set up to register a domain online with WHOIS privacy",
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Secure Your Domain Now",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "single-domain", label: "Single Domain Registration" },
      { value: "bulk-domains", label: "Bulk Domain Registration" },
      { value: "premium-domain", label: "Premium Domain Registration" },
      { value: "international-domain", label: "International Domain Registration" },
      { value: "domain-transfer", label: "Domain Transfer" },
      { value: "domain-renewal", label: "Domain Renewal" },
    ],
    initialValues: {
      help: "single-domain",
    },
  },
};

export const domainRegistrationServicesData = [
  {
    id: 1,
    title: "Single Domain Registration",
    description:
      "Ideal for individuals and small businesses. Choose from multiple TLDs and register with an ICANN-accredited registrar. Each domain includes DNS management and an option for a domain with free email hosting.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Bulk & Enterprise Solutions",
    description:
      "Protect your brand with bulk domain registration across multiple extensions. Centralized tools simplify renewals and management while ensuring compliance with global standards and the IANA root zone.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Premium Domain Registration",
    description:
      "Get memorable, keyword-rich names through premium domain registration to strengthen brand visibility.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "International Domain Registration",
    description:
      "Use international domain registration and ccTLDs to build trust and reach local markets.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Transfer & Renewal Management",
    description:
      "Our streamlined registrar transfer process minimizes downtime, handles authorization codes, and follows ICANN transfer policy. Auto-renew and reminders keep domains active.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 6,
    title: "Privacy & Security Add-Ons",
    description:
      "Enable WHOIS privacy, SSL certificates, registrar locks, and DNS monitoring to protect your domains.",
    icon: <BagIcon />,
    isActive: false,
  },
];

export const domainRegistrationScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why We're the Right Partner for Your Domain Needs",
  description: [
    "Selecting the right partner for domain registration ensures your brand, data, and payments stay protected. Our approach is built on compliance, clarity, and reliable support through every step of domain transfer and management. Our unique strengths include:",
  ],
  items: [
    {
      id: "domain-firstScroller",
      step: 1,
      title: "ICANN-Accredited Trust",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We are an ICANN-accredited registrar and follow global domain policies to keep records accurate and compliant. This gives businesses confidence that their online identity is secure and properly managed.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "ICANN-Accredited Trust",
        width: 669,
        height: 376,
      },
    },
    {
      id: "domain-secondScroller",
      step: 2,
      title: "Transparent Pricing",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our pricing is straightforward with no hidden fees. Renewal costs are clear from the start, and renewal alerts help keep your domains active without interruption.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376,
      },
    },
    {
      id: "domain-thirdScroller",
      step: 3,
      title: "Strong Security Features",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We use DNSSEC, two-factor authentication, and registrar lock to protect your domains. Secure payments use encryption, and operations meet ISO 27001 and SOC 2 security standards.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Strong Security Features",
        width: 669,
        height: 376,
      },
    },
    {
      id: "domain-forthScroller",
      step: 4,
      title: "24/7 Expert Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our support team is available any time to answer questions, assist with setup, and guide you through configuration and the registrar transfer process when needed.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "24/7 Expert Support",
        width: 669,
        height: 376,
      },
    },
    {
      id: "domain-fifthScroller",
      step: 5,
      title: "Scalable for Any Stage",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Whether registering one domain or many, our platform adapts to your needs. We offer brand protection, portfolio management, and domain auction services for businesses growing their online presence.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Scalable for Any Stage",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};

export const domainRegistrationBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Domain Registration Services",
      href: "/website-hosting-services/domain-registration-services",
    },
  },
  heading: "Secure Your Domain Before It's Taken",
  description: [
    "Your perfect name won't stay available forever. Our domain registration services provide instant access, ownership confirmation, and privacy protection so no one else can claim what should be yours. Start your secure domain registration today to protect your brand's future with confidence.",
  ],
  bullets: [],
  cta: {
    text: "Register Your Domain",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Domain Registration Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};

// Stats Counter Data
export const domainRegistrationStatsData = [
  {
    id: 1,
    value: 98,
    suffix: "%",
    label: "Customer Satisfaction",
  },
  {
    id: 2,
    value: 50,
    suffix: "K+",
    label: "Domains Registered",
  },
  {
    id: 3,
    value: 24,
    suffix: "/7",
    label: "Support Availability",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "ICANN Compliance",
  },
];

// Impact Cards Data (for DevelopmentCards component)
export const domainRegistrationImpactCardsData = [
  {
    id: 1,
    title: "Own Your Brand Online",
    description:
      "A registered domain protects your identity and reduces the risk of competitors registering a similar name. It builds credibility and allows full DNS management to create custom subdomains and professional email addresses that strengthen your business image.",
    icon: "brand",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 2,
    title: "Stay Secure and Compliant",
    description:
      "Security and compliance are critical for building online trust. WHOIS privacy protection hides sensitive ownership data, and DNSSEC strengthens the domain lifecycle by ensuring data integrity.",
    icon: "security",
    isHighlighted: true,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 3,
    title: "Plan for the Long Run",
    description:
      "Your domain is a valuable digital asset. Using a defined renewal grace period prevents accidental loss of ownership, and enabling auto-renewals keeps your website live.",
    icon: "planning",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 4,
    title: "Simplify Domain Transfers",
    description:
      "Switching providers should be stress-free. A clear domain transfer policy ensures a smooth, secure process with registrar locks and authorization codes.",
    icon: "transfer",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
  {
    id: 5,
    title: "Expand With Future-Ready Options",
    description:
      "Domain strategy grows with your business. A wide range of TLD choices, including ccTLDs for regional targeting, lets you protect your brand across multiple extensions.",
    icon: "expand",
    isHighlighted: false,
    col: "col-12 col-md-4 col-lg-4",
  },
];

// Impact Section Data (for DevelopmentCards component)
export const domainRegistrationImpactSectionData = {
  heading: "How Domain Registration Impacts Your Website and Brand",
  showDescription: true,
  description:
    "A domain is the foundation of your online presence. It defines how customers find you, helps build trust, and safeguards your brand's identity for the long term.",
};

// Industries Data
export const domainRegistrationIndustriesData = [
  {
    id: 1,
    title: "Finance",
    description:
      "Boost credibility with domain registration for finance company websites. Our ICANN-accredited service protects your brand, ensures compliance, and gives financial firms a trusted online foundation.",
    icon: "/assets/images/industry/finance.svg",
  },
  {
    id: 2,
    title: "Healthcare",
    description:
      "Build patient confidence with domain registration for healthcare provider websites. We offer secure, privacy-focused registration that meets industry standards and keeps sensitive data protected.",
    icon: "/assets/images/industry/healthcare.svg",
  },
  {
    id: 3,
    title: "Law Firm",
    description:
      "Show authority online with domain registration for law firm websites. Our secure and professional process safeguards your brand and reinforces client trust.",
    icon: "/assets/images/industry/law-firm.svg",
  },
  {
    id: 4,
    title: "Restaurant",
    description:
      "Increase local visibility with domain registration for restaurant businesses. Choose a unique name that helps your restaurant stand out, attract new customers, and protect its online identity.",
    icon: "/assets/images/industry/restaurant.svg",
  },
  {
    id: 5,
    title: "Fitness",
    description:
      "Expand your reach with domain registration for fitness brands. We provide professional domains that boost discoverability, support brand growth, and engage wellness audiences.",
    icon: "/assets/images/industry/fitness.svg",
  },
  {
    id: 6,
    title: "Consulting",
    description:
      "Build authority and trust when you register a domain for consulting firm websites. Our secure solutions help consultants showcase expertise and scale confidently in new markets.",
    icon: "/assets/images/industry/consulting.svg",
  },
];

// Workflow Data (for StepSection component)
export const domainRegistrationWorkflowData = {
  title: "How Our Domain Registration Process Works",
  description:
    "Getting your domain shouldn't feel complicated. Our process makes registration, management, and protection clear and straightforward while keeping you in control at every step of the domain lifecycle. Here's how it works:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Search Your Perfect Domain",
      description:
        "Run a quick domain search with our smart lookup tools. You'll see instant availability results, suggested alternatives, and the option to add WHOIS privacy during registration.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Register in Minutes",
      description:
        "Complete checkout in a few easy steps with instant registration and encrypted payments. Your domain is registered right away, and you can enable privacy protection and auto-renew to avoid missing your grace period.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Manage and Protect",
      description:
        "After registration, manage DNS settings, create a custom email, and enable security measures like registrar lock (change-protection). Automated renewal reminders keep you compliant with registrar change policy and maintain control of your domains.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Transfer When Needed",
      description:
        "When switching providers, follow our clear domain transfer steps based on the ICANN transfer policy for a smooth move with minimal disruption. Authorization codes and verification keep your ownership secure throughout the process.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Why Choose Us Data
export const domainRegistrationWhyChooseUsData = [
  {
    id: 1,
    title: "ICANN-Accredited Trust",
    description:
      "We are an ICANN-accredited registrar and follow global domain policies to keep records accurate and compliant. This gives businesses confidence that their online identity is secure and properly managed.",
    icon: "trust",
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "Our pricing is straightforward with no hidden fees. Renewal costs are clear from the start, and renewal alerts help keep your domains active without interruption.",
    icon: "pricing",
  },
  {
    id: 3,
    title: "Strong Security Features",
    description:
      "We use DNSSEC, two-factor authentication, and registrar lock to protect your domains. Secure payments use encryption, and operations meet ISO 27001 and SOC 2 security standards.",
    icon: "security",
  },
  {
    id: 4,
    title: "24/7 Expert Support",
    description:
      "Our support team is available any time to answer questions, assist with setup, and guide you through configuration and the registrar transfer process when needed.",
    icon: "support",
  },
  {
    id: 5,
    title: "Scalable for Any Stage",
    description:
      "Whether registering one domain or many, our platform adapts to your needs. We offer brand protection, portfolio management, and domain auction services for businesses growing their online presence.",
    icon: "scalable",
  },
];

// FAQ Data
export const domainRegistrationFAQsData = [
  {
    id: 1,
    question: "Why choose Website Digitals for domain registration?",
    answer:
      "Website Digitals provides ICANN-accredited domain registration services with secure payments, WHOIS privacy, and DNS management, all designed to keep your domains protected and easy to manage.",
  },
  {
    id: 2,
    question: "Does Website Digitals offer support after registration?",
    answer:
      "Yes. Our 24/7 expert support helps with DNS setup, transfers, and renewals, ensuring your domains stay active and secure.",
  },
  {
    id: 3,
    question: "What is domain registration, and why is it important?",
    answer:
      "Domain registration is the process of securing a unique name on the internet so users can find your website. It's important because it protects your brand identity, helps establish credibility, and ensures no one else can use your chosen name.",
  },
  {
    id: 4,
    question: "What's the difference between a domain registrar and web hosting?",
    answer:
      "A domain registrar is responsible for managing and selling domain names, while web hosting provides the server space and technology that make your website accessible online. You need both a registered domain name and a hosting plan to have a live website.",
  },
  {
    id: 5,
    question: "How does WHOIS privacy protection work?",
    answer:
      "WHOIS privacy protection hides your personal contact details (name, email, phone number) from the public WHOIS database. Instead, proxy information is displayed, helping prevent spam, identity theft, and unwanted solicitations while keeping your registration compliant.",
  },
  {
    id: 6,
    question: "What happens if my domain expires?",
    answer:
      "When a domain expires, it typically enters a short grace period during which you can renew it without losing ownership. After that, it may move into redemption status, become available for auction, or be released back to the public, risking loss of your brand name.",
  },
  {
    id: 7,
    question: "How do I choose a good domain registrar?",
    answer:
      "Look for a registrar that is ICANN-accredited, transparent with pricing, offers strong security features like DNSSEC and registrar locks, and provides renewal reminders. Additional benefits like responsive support and bundled services, such as email or SSL certificates, can also add value.",
  },
  {
    id: 8,
    question: "Can I register a domain name instantly?",
    answer:
      "Yes. Many registrars allow you to check availability and register a domain name instantly through their online search tools. Once payment is processed, you receive ownership confirmation and can configure DNS settings right away.",
  },
  {
    id: 9,
    question: "Can I purchase bulk domains for brand protection?",
    answer:
      "Absolutely. Bulk domain registration helps secure multiple extensions (.com, .net, .org, and country-specific TLDs) to protect your brand from misuse. It's especially useful for growing businesses that want consistent branding across regions.",
  },
  {
    id: 10,
    question: "Do you offer a domain registrar with a free SSL certificate?",
    answer:
      "Yes, many top registrars provide plans that include a free SSL certificate with domain purchase or hosting packages. SSL helps secure data transfer between your site and visitors, improving trust and search rankings.",
  },
  {
    id: 11,
    question: "Who are the top-rated ICANN-accredited registrars?",
    answer:
      "Top-rated registrars are those recognized for reliability, compliance with ICANN policies, and excellent support. Look for registrars with clear transfer policies, strong uptime records, and positive user reviews before making a choice.",
  },
  {
    id: 12,
    question: "How much do domain registration costs vary by TLD?",
    answer:
      "Domain registration costs depend on the top-level domain (TLD) you choose. Common TLDs like .com or .net are usually affordable, while premium TLDs or niche extensions (like .io, .ai) may cost more due to demand. Renewal prices should also be considered when budgeting.",
  },
  {
    id: 13,
    question: "What are the best domain registration solutions for businesses?",
    answer:
      "The best domain registration solutions go beyond just securing a name. Website Digitals provides ICANN-accredited domains with DNS management, renewal alerts, and flexible plans, giving businesses a scalable and reliable foundation for long-term online growth.",
  },
  {
    id: 14,
    question: "Why choose a domain registration service with support?",
    answer:
      "A domain registration service with support ensures ongoing guidance, not just setup help. At Website Digitals, our experts assist with DNS management, transfers, and renewals around the clock, so your domain stays active and stress-free to manage.",
  },
  {
    id: 15,
    question: "Why is a domain registration service with privacy protection important?",
    answer:
      "Choosing a domain registration service with privacy protection safeguards your personal details in WHOIS records. With Website Digitals, proxy information replaces sensitive data, helping prevent spam, fraud, and misuse while keeping your registration fully compliant.",
  },
];

// Services Section Data (Section 5) - for DevelopmentCardSlider
export const domainRegistrationServicesSectionData = {
  heading: "Our Comprehensive Domain Registration Services",
  description:
    "Every business has unique domain needs, from single domains to large portfolios. We provide secure, compliant, and easy-to-manage solutions for individuals, startups, and enterprises. Here's what we offer:",
  showDescription: true,
  cta: {
    label: "Explore Domain Plans",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Section Data (Section 6) - for WebBuilderCardSection
export const domainRegistrationIndustriesSectionData = {
  heading: "Sectors We Work With",
  description:
    "We help businesses in every sector secure trusted domains that protect brands, ensure compliance, and support growth online.",
  cta: {
    text: "Explore Domain Plans",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

// Industries Cards Data (for WebBuilderCardSection)
export const domainRegistrationIndustriesCardsData = [
  {
    title: "Finance",
    description:
      "Boost credibility with domain registration for finance company websites. Our ICANN-accredited service protects your brand, ensures compliance, and gives financial firms a trusted online foundation.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Finance Domain Registration",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "Build patient confidence with domain registration for healthcare provider websites. We offer secure, privacy-focused registration that meets industry standards and keeps sensitive data protected.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Healthcare Domain Registration",
    width: 71,
    height: 71,
  },
  {
    title: "Law Firm",
    description:
      "Show authority online with domain registration for law firm websites. Our secure and professional process safeguards your brand and reinforces client trust.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Law Firm Domain Registration",
    width: 71,
    height: 71,
  },
  {
    title: "Restaurant",
    description:
      "Increase local visibility with domain registration for restaurant businesses. Choose a unique name that helps your restaurant stand out, attract new customers, and protect its online identity.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Restaurant Domain Registration",
    width: 71,
    height: 71,
  },
  {
    title: "Fitness",
    description:
      "Expand your reach with domain registration for fitness brands. We provide professional domains that boost discoverability, support brand growth, and engage wellness audiences.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Fitness Domain Registration",
    width: 71,
    height: 71,
  },
  {
    title: "Consulting",
    description:
      "Build authority and trust when you register a domain for consulting firm websites. Our secure solutions help consultants showcase expertise and scale confidently in new markets.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Consulting Domain Registration",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const domainRegistrationWhyChooseUsSectionData = {
  heading: "Why We're the Right Partner for Your Domain Needs",
  description:
    "Selecting the right partner for domain registration ensures your brand, data, and payments stay protected. Our approach is built on compliance, clarity, and reliable support through every step of domain transfer and management. Our unique strengths include:",
};

// Workflow Section Data (Section 8)
export const domainRegistrationWorkflowSectionData = {
  heading: "How Our Domain Registration Process Works",
  description:
    "Getting your domain shouldn't feel complicated. Our process makes registration, management, and protection clear and straightforward while keeping you in control at every step of the domain lifecycle. Here's how it works:",
};

// Final CTA Section Data (Section 11)
export const domainRegistrationFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "Domain Registration Services",
      href: "/website-hosting-services/domain-registration-services",
    },
  },
  heading: "Secure Your Domain Before It's Taken",
  description: [
    "Your perfect name won't stay available forever. Our domain registration services provide instant access, ownership confirmation, and privacy protection so no one else can claim what should be yours. Start your secure domain registration today to protect your brand's future with confidence.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Domain Registration Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Register Your Domain",
    href: "#",
    className: "offer-btn primary",
  },
};
