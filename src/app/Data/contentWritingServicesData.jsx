import { BagIcon } from "@/icons";

// Metadata for Content Writing Services
export const contentWritingServicesMetadata = {
  title: "Content Writing Services | Hire Skilled Writers Today",
  description:
    "Professional content writing services for websites, blogs, and campaigns to boost traffic, engage audiences, and drive results.",
  keywords:
    "content writing services, content writing service, content writing agency, content writing company, professional content writing, content writing firms, business content writing services, B2B content writing services, content writing services for small business, SEO content writing services, blog writing services, website content writing services, ecommerce content writing services, landing page content writing, ghostwriting content services, technical content writing services, white paper writing services, case study content writing services, content writing subscription services, freelance content writing services, content writing service packages, copywriting services, content creation services, article writing service, content marketing writing, editorial writing services, creative writing services, content production services, SEO optimization, content strategy, keyword research, on-page SEO, content calendar, editorial calendar, blog post writing, article writing, website copy, copywriting, marketing content, white papers, eBooks, case studies, press release writing, social media content, newsletter content, landing page copy, product descriptions, content audit, refresh, optimization, content briefs, content workflow, readability, plagiarism-free content, content metrics, KPIs, conversion copywriting, tone of voice, brand voice, niche content, technical writing, ghostwriting, content scaling, outsourcing",
  canonical:
    "https://www.websitedigitals.com/content-writing/content-writing-services/",
  openGraph: {
    title: "Content Writing Services | Hire Skilled Writers Today",
    description:
      "Professional content writing services for websites, blogs, and campaigns to boost traffic, engage audiences, and drive results.",
    url: "https://www.websitedigitals.com/content-writing/content-writing-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/content-writing-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Content Writing Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Content Writing Services | Hire Skilled Writers Today",
    description:
      "Professional content writing services for websites, blogs, and campaigns to boost traffic, engage audiences, and drive results.",
    images: [
      "https://websitedigitals.com/assets/images/content-writing-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/content-writing/content-writing-services/",
  },
};

// Banner Data (Section 1)
export const contentWritingServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Content Writing Services",
      href: "/content-writing/content-writing-services",
    },
  },
  heading: "Content Writing Services to [[Engage]], [[Convert]], and [[Win]] Clients",
  description: [
    "Your website may attract plenty of visitors, but without clear, persuasive copy, those clicks rarely turn into customers.",
    "",
    "At Website Digitals, our content writing service turns passive readers into engaged prospects by delivering copy that informs, persuades, and inspires action, whether it's a homepage, blog, or case study.",
    "",
    "Every piece we create is deeply researched, strategically structured, and crafted to support your business goals, so your content doesn't just fill space but drives measurable growth.",
  ],
  isCta: true,
  cta: {
    text: "Get Your Content Strategy",
    href: "#",
  },
  image: null,
  formConfig: {
    buttonText: "Start Winning with Words",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "white-paper-writing", label: "White Paper Writing Services" },
      { value: "case-study-writing", label: "Case Study Content Writing" },
      { value: "content-production", label: "Content Production Services" },
      { value: "freelance-writing", label: "Freelance Content Writing" },
      { value: "content-audit", label: "Content Audit & Refresh" },
      { value: "seo-content", label: "SEO Content Writing" },
    ],
    initialValues: {
      help: "white-paper-writing",
    },
  },
};

// Banner Data 2 (CTA Section)
export const contentWritingServicesBannerData2 = {
  heading: "Turn Words Into Revenue",
  description: "Partner with Website Digitals for words that engage, convert, and deliver results.",
  cta: {
    text: "Get Expert Help",
    href: "#",
  },
  image: {
    src: "/assets/images/scroller/digital-marketing/3.png",
    alt: "Content Writing Services CTA",
    width: 1200,
    height: 400,
  },
};

// Impact Section Data (Section 2)
export const contentWritingServicesImpactSectionData = {
  heading: "Proven Results That Drive Growth",
  description: "Our content writing services deliver measurable results that build authority, increase visibility, and drive organic growth for businesses across all industries.",
  showDescription: true,
  cta: {
    href: "#",
    label: "See Our Results",
  },
};

export const contentWritingServicesImpactCardsData = [
  {
    id: 1,
    title: "Content Performance Growth",
    description: "Average 250% increase in organic traffic and engagement through strategic content writing.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Authority Building",
    description: "High-quality, plagiarism-free content builds credibility and positions brands as industry leaders.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Brand Voice Consistency",
    description: "Maintaining clear tone of voice across all content strengthens brand identity and customer experience.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Scalable Content Production",
    description: "Structured workflows and editorial calendars enable consistent, high-quality content at scale.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Stats Counter Data (Section 3)
export const contentWritingServicesStatsData = [
  {
    id: 1,
    value: 99,
    suffix: "%",
    label: "On-Time Delivery",
  },
  {
    id: 2,
    value: 250,
    suffix: "%",
    label: "Avg. Organic Traffic Lift",
  },
  {
    id: 3,
    value: 100,
    suffix: "%",
    label: "Original & Plagiarism-Free",
  },
  {
    id: 4,
    value: 24,
    suffix: "/7",
    label: "Dedicated Support",
  },
];

// Why Choose Us Data (Section 4)
export const contentWritingServicesWhyChooseUsData = {
  heading: "The Core Values Driving Our Content Writing Services",
  description: "Our content writing services are built on four core values that ensure every piece of content we create delivers real business value and measurable results.",
  items: [
    {
      id: 1,
      title: "Clarity & Readability",
      description: "Professional content writing ensures your message is easy to read and understand. Well-structured copy, optimized for readability and flow, keeps users engaged and reduces bounce rates.",
      icon: <BagIcon />,
      isActive: true,
    },
    {
      id: 2,
      title: "Authority & Trust",
      description: "High-quality, plagiarism-free content builds credibility and positions a brand as an industry leader. Whether through white papers, case studies, or technical writing services, authoritative content inspires confidence and trust.",
      icon: <BagIcon />,
      isActive: false,
    },
    {
      id: 3,
      title: "Consistency & Brand Voice",
      description: "Maintaining a clear tone of voice across blogs, landing pages, and campaigns strengthens brand identity and ensures customers have a seamless experience across touchpoints.",
      icon: <BagIcon />,
      isActive: false,
    },
    {
      id: 4,
      title: "Scalability & Efficiency",
      description: "Structured content workflows and editorial calendars make it possible to scale production without sacrificing quality. Brands can refresh old assets, publish consistently, and meet aggressive deadlines while staying on strategy.",
      icon: <BagIcon />,
      isActive: false,
    },
  ],
};

// Services Data (Section 5)
export const contentWritingServicesServicesData = [
  {
    id: 1,
    title: "White Paper Writing Services",
    description:
      "Our white paper writing services establish your authority and attract high-quality leads. We create well-researched, data-backed reports that position your business as an industry leader. Perfect for B2B content writing services where credibility is key.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Case Study Content Writing Services",
    description:
      "Showcase your success stories with compelling case study writing. We highlight your client results, weaving storytelling with conversion copywriting to build trust and drive new business.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Content Production Services",
    description:
      "Our streamlined content production services handle everything from content briefs to final delivery. We use a structured content workflow with built-in proofreading, editing, and quality control to ensure every piece meets your standards.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Freelance Content Writing Services",
    description:
      "Our freelance content writing services let you scale content output without hiring in-house. Ideal for brands that want to keep costs low while maintaining access to top-tier talent.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Content Audit & Refresh",
    description:
      "Old content can hurt rankings. Our content audit and refresh services analyze your site for gaps, optimize outdated pages, and boost performance with fresh, SEO content writing services.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Services Section Data (Section 6)
export const contentWritingServicesServicesSectionData = {
  heading: "Our Complete Writing Solutions",
  description:
    "We provide comprehensive content writing services designed to build authority, increase visibility, and create lasting brand recognition across all digital channels.",
  showDescription: true,
  cta: {
    href: "#",
    label: "Get Started Today",
  },
};

// Industries Section Data (Section 7)
export const contentWritingServicesIndustriesSectionData = {
  heading: "Who We Write For",
  description:
    "We provide tailored content writing services for all industries, aligning strategies with audience needs, compliance goals, and brand objectives to deliver clear, persuasive, and impactful messages.",
  cta: {
    text: "Start Winning with Words",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const contentWritingServicesIndustriesCardsData = [
  {
    title: "Healthcare",
    description:
      "Our healthcare content writing services focus on patient education, compliance, and wellness, creating clear and trustworthy communication that builds confidence and supports medical brands.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Finance",
    description:
      "Through finance content writing, we simplify complex topics, maintain compliance accuracy, and craft transparent, client-focused messages that inspire trust.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Real Estate",
    description:
      "Our real estate content writing services showcase properties, trends, and investment insights with compelling storytelling that attracts leads and serious buyers.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Education",
    description:
      "We create education content writing that engages learners, supports educators, and enhances institutional credibility through effective e-learning and academic materials.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Automotive",
    description:
      "Our automotive content writing services spotlight innovation, highlight vehicles, and drive dealership success with persuasive, brand-building campaigns.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Manufacturing",
    description:
      "We deliver manufacturing content writing that simplifies technical concepts, showcases expertise, and strengthens your position as a trusted B2B partner.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Why Choose Us Section Data (Section 8)
export const contentWritingServicesWhyChooseUsSectionData = {
  heading: "Why Choose Our Content Writing Service",
  description:
    "Our content writing services combine expertise, efficiency, and results to deliver content that not only looks great but drives measurable business growth.",
  cta: {
    text: "Start Your Content Strategy",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const contentWritingServicesWhyChooseUsCardsData = [
  {
    title: "Easy Client Collaboration",
    description:
      "We make working with our content writing firms simple through seamless communication tools, clear content workflow, and editorial calendar planning that keeps you in control.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Transparent Pricing",
    description:
      "Our content writing service packages come with upfront pricing, making it easy to plan your budget and measure ROI.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "ROI-Driven Content",
    description:
      "We create content marketing writing that moves the needle. Every project includes measurable KPIs so you can track performance and know you're getting value.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Skilled Writing Team",
    description:
      "Our professional content writing team includes subject-matter experts, SEO strategists, and editors who ensure every deliverable is publication-ready and plagiarism-free.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "On-Time Delivery",
    description:
      "Your deadlines matter. Our process guarantees fast turnaround times without compromising quality, perfect for brands with aggressive publishing schedules.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Workflow Data (Section 9)
export const contentWritingServicesWorkflowData = {
  title: "How We Work With Businesses Like Yours",
  description:
    "Our proven content writing process ensures every piece of content we create is strategically aligned with your business goals, optimized for performance, and delivered on time.",
  steps: [
    {
      id: 1,
      title: "Research & Alignment",
      description:
        "We start by aligning with your business goals, audience, and content strategy. Our team performs in-depth keyword research and competitor analysis to ensure your content hits the mark.",
      icon: "/assets/images/work/pen-tool.svg",
    },
    {
      id: 2,
      title: "Brief & Planning",
      description:
        "We create detailed content briefs, finalize your editorial calendar, and lock in the scope before we write a single word.",
      icon: "/assets/images/work/pen-tool.svg",
    },
    {
      id: 3,
      title: "Writing & Editing",
      description:
        "Our writers produce engaging, optimized copy while editors ensure readability, tone of voice, and brand voice stay consistent.",
      icon: "/assets/images/work/pen-tool.svg",
    },
    {
      id: 4,
      title: "Optimization & QA",
      description:
        "Every piece goes through on-page SEO checks, proofreading, and QA to guarantee high performance and conversion-focused content.",
      icon: "/assets/images/work/pen-tool.svg",
    },
    {
      id: 5,
      title: "Delivery & Feedback",
      description:
        "You receive final content on time, with room for revisions based on your feedback—ensuring the end product is exactly what your business needs.",
      icon: "/assets/images/work/pen-tool.svg",
    },
  ],
};

// Workflow Section Data (Section 10)
export const contentWritingServicesWorkflowSectionData = {
  heading: "Our Content Writing Process",
  description:
    "From research to delivery, our proven process ensures your content writing projects are completed efficiently and effectively.",
  showDescription: true,
  cta: {
    href: "#",
    label: "Start Your Project",
  },
};

// Final CTA Data (Section 11)
export const contentWritingServicesFinalCTAData = {
  heading: "Ready to Transform Your Content?",
  description:
    "Let's create content that engages your audience, builds authority, and drives measurable business results.",
  cta: {
    text: "Get Expert Help",
    href: "#",
  },
  image: {
    src: "/assets/images/scroller/digital-marketing/4.png",
    alt: "Content Writing Services Final CTA",
    width: 1200,
    height: 400,
  },
};

// FAQs Data (Section 12)
export const contentWritingServicesFAQsData = [
  {
    id: 1,
    question: "Why should I choose Website Digitals for my content writing needs?",
    answer:
      "At Website Digitals, we don't just write; we build content that performs. Our content writing services combine SEO optimization, data-driven content strategy, and expert copywriting services to help you attract, engage, and convert your ideal customers. Every piece we deliver is plagiarism-free, optimized for readability, and designed to align with your business objectives.",
  },
  {
    id: 2,
    question: "Can Website Digitals handle both small projects and ongoing content needs?",
    answer:
      "Yes, we work with businesses of all sizes. Whether you need one-off landing page content writing, a set of blog writing services, or a recurring content writing subscription service, we've built flexible content writing service packages to match your goals and budget.",
  },
  {
    id: 3,
    question: "What are content writing services?",
    answer:
      "Content writing services provide professionally written blogs, website copy, case studies, ebooks, and other materials designed to engage readers and encourage action. They help businesses maintain a consistent tone of voice, improve search visibility, and deliver valuable information that attracts and converts the right audience.",
  },
  {
    id: 4,
    question: "How do content writing services work?",
    answer:
      "The process typically starts with understanding your business goals and audience. From there, the provider performs keyword research, prepares detailed content briefs, and assigns a skilled writer. Each piece is then written, edited, and checked for on-page SEO, readability, and originality before being delivered for your review and approval.",
  },
  {
    id: 5,
    question: "What are the benefits of hiring a content writing service?",
    answer:
      "Hiring a professional team saves time and ensures plagiarism-free content that is optimized for SEO. You get consistent, high-quality copy that improves traffic, generates leads, and supports your broader marketing goals, all while letting you focus on other priorities in your business.",
  },
  {
    id: 6,
    question: "How do I choose the best content writing agency?",
    answer:
      "Look for an agency that offers transparent pricing, clear deliverables, and a proven track record. Check testimonials, samples, and case studies to verify quality. A good provider should also offer revisions, a clear workflow, and reliable communication to keep projects on track.",
  },
  {
    id: 7,
    question: "How much do content writing services cost?",
    answer:
      "Pricing depends on word count, complexity, turnaround time, and the type of content required. Many providers offer content writing service packages or subscription models, making it easy to plan your budget and scale production as needed.",
  },
  {
    id: 8,
    question: "Are SEO content writing services packages available?",
    answer:
      "Yes, many providers offer SEO content writing services packages that include keyword optimization, meta descriptions, internal linking, and formatting designed to improve rankings and increase organic traffic.",
  },
  {
    id: 9,
    question: "What's the difference between content writing services and copywriting?",
    answer:
      "Content writing services focus on educating and building trust through blogs, articles, and white papers to boost SEO and authority. Copywriting is persuasive, crafting ads, landing pages, and sales copy to drive immediate actions like clicks or purchases. Together, they balance long-term growth with short-term conversions.",
  },
  {
    id: 10,
    question: "Where can I find the most affordable content writing services?",
    answer:
      "Website Digitals provides the most affordable content writing services with flexible packages for startups and growing businesses. We deliver SEO-optimized, high-quality content that fits your budget without compromising effectiveness.",
  },
  {
    id: 11,
    question: "What makes Website Digitals a premium content writing service provider?",
    answer:
      "As a premium content writing service provider, Website Digitals combines research-driven strategy, SEO expertise, and creative storytelling. We help businesses build stronger brand presence, improve online visibility, and generate measurable results.",
  },
  {
    id: 12,
    question: "Why should I choose professional expert content writing services?",
    answer:
      "Professional expert content writing services ensure every piece is tailored to your audience, optimized for search, and designed to achieve results. Website Digitals' team of specialists creates compelling, plagiarism-free content that supports your growth and credibility.",
  },
];

// Scroll Section Data (Section 13)
export const contentWritingServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Us a Trusted Content Writing Agency",
  description: [
    "Selecting the right content writing partner is critical when building authority and visibility that drives growth. Here's what sets us apart:",
  ],
  items: [
    {
      id: "content-firstScroller",
      step: 1,
      title: "Expert Writing Team",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team includes subject-matter experts, SEO strategists, and professional editors who ensure every piece of content is publication-ready, optimized for search, and aligned with your brand voice.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Expert Writing Team",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-secondScroller",
      step: 2,
      title: "Data-Driven Content Strategy",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every content piece is backed by comprehensive keyword research, competitor analysis, and audience insights. We identify the right topics, optimal timing, and compelling angles that maximize engagement and search visibility.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Data-Driven Content Strategy",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-thirdScroller",
      step: 3,
      title: "SEO-Optimized Content",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We create content that not only engages readers but also performs well in search engines. Our SEO content writing services include keyword optimization, meta descriptions, internal linking, and formatting designed to improve rankings.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "SEO-Optimized Content",
        width: 669,
        height: 376,
      },
    },
    {
      id: "content-fourthScroller",
      step: 4,
      title: "Quality Assurance & Revisions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every piece of content goes through multiple rounds of editing, proofreading, and quality checks. We guarantee plagiarism-free, error-free content that meets your standards and exceeds your expectations.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Quality Assurance & Revisions",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: {
    href: "#",
    label: "Start Your Content Strategy",
  },
};
