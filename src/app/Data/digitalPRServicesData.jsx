import { BagIcon } from "@/icons";

// Metadata for Digital PR Services
export const digitalPRServicesMetadata = {
  title: "Digital PR Services That Work for You | Website Digitals",
  description:
    "Website Digitals delivers expert digital PR campaigns that earn top-tier media coverage, build brand authority, and grow your online presence.",
  keywords:
    "digital PR services, digital PR agency USA, online public relations services US, digital PR company near me, PR outreach services for businesses US, digital PR for startups USA, online reputation management services US, digital PR campaigns for brands, best digital PR services US, affordable digital PR services US, corporate digital PR agencies, digital marketing, online reputation management, public relations strategy, media outreach, press coverage, influencer collaboration, SEO link building PR, brand awareness, earned media, content marketing campaigns, online PR, social media PR services, digital brand management, blogger outreach services, media coverage distribution, online publicity, corporate communications, PR analytics reporting, press release optimization, crisis communication digital",
  canonical:
    "https://www.websitedigitals.com/digital-marketing/digital-pr-services/",
  openGraph: {
    title: "Digital PR Services That Work for You | Website Digitals",
    description:
      "Website Digitals delivers expert digital PR campaigns that earn top-tier media coverage, build brand authority, and grow your online presence.",
    url: "https://www.websitedigitals.com/digital-marketing/digital-pr-services/",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/digital-pr-services-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digital PR Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital PR Services That Work for You | Website Digitals",
    description:
      "Website Digitals delivers expert digital PR campaigns that earn top-tier media coverage, build brand authority, and grow your online presence.",
    images: [
      "https://websitedigitals.com/assets/images/digital-pr-services-twitter-image.jpg",
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
      "https://www.websitedigitals.com/digital-marketing/digital-pr-services/",
  },
};

// Banner Data (Section 1)
export const digitalPRServicesBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Digital PR Services",
      href: "/digital-marketing/digital-pr-services",
    },
  },
  heading: "Digital PR Services That Get Your Brand [[Featured]] Everywhere",
  description: [
    "Many brands struggle to get coverage because their stories never reach the right media outlets.",
    "",
    "Website Digitals helps you earn features in top publications, build lasting authority, and grow online visibility.",
    "",
    "Through targeted media outreach, SEO-powered link building, and compelling storytelling, we make your brand visible and trusted across the platforms that matter.",
  ],
  isCta: false,
  image: null,
  formConfig: {
    buttonText: "Get Featured Today",
    heading: "Ready to Build Your Authority?",
    helpOptions: [
      { value: "media-outreach", label: "Media Outreach & Press Coverage" },
      { value: "influencer-partnerships", label: "Influencer Partnerships" },
      { value: "content-pr-campaigns", label: "Content-Driven PR Campaigns" },
      {
        value: "press-release-distribution",
        label: "Press Release Distribution",
      },
      {
        value: "thought-leadership",
        label: "Thought Leadership & Reputation Building",
      },
      { value: "crisis-communication", label: "Crisis Communication" },
    ],
    initialValues: {
      help: "media-outreach",
    },
  },
};

// Banner Data 2 (CTA Section)
export const digitalPRServicesBannerData2 = {
  heading: "Start Building Lasting Authority Today",
  description: [
    "Gain consistent visibility and trust through targeted digital PR strategies that deliver real results.",
  ],
  showDescription: true,
  cta: {
    text: "Launch My PR Campaign",
    href: "#",
  },
  image: {
    src: "/assets/images/scroller/digital-marketing/1.png",
    alt: "Digital PR Services CTA",
    width: 1200,
    height: 400,
  },
};

// Impact Section Data (Section 2)
export const digitalPRServicesImpactSectionData = {
  heading: "Why Digital PR Services Matter for Modern Brands",
  showDescription: false,
  cta: {
    href: "#",
    label: "See Our Results",
  },
};

export const digitalPRServicesImpactCardsData = [
  {
    id: 1,
    title: "Build Credibility & Trust",
    description:
      "Consistent coverage in respected publications gives your brand credibility that ads can’t replicate. Strategic storytelling and media outreach help you shape public perception and influence buying decisions.",
    icon: <BagIcon />,
    isActive: true,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Stay in Control of Your Reputation",
    description:
      "With proactive reputation management and crisis communication, your brand stays in control of its narrative even in challenging times, protecting trust with customers and stakeholders.",
    icon: <BagIcon />,
    isActive: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Drive Organic Growth",
    description:
      "Media mentions and backlinks naturally improve search visibility and bring new audiences to your business. This earned exposure supports sustainable growth and lasting recognition.",
    icon: <BagIcon />,
    isActive: false,
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Track Results That Matter",
    description:
      "Transparent reporting shows your coverage, audience engagement, and visibility gains, keeping campaigns focused on measurable, long-term impact.",
    icon: <BagIcon />,
    isActive: false,
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Stats Counter Data (Section 3)
export const digitalPRServicesStatsData = [
  {
    id: 1,
    value: 250,
    suffix: "+",
    label: "Digital PR Campaigns Delivered",
  },
  {
    id: 2,
    value: 400,
    suffix: "%",
    label: "Average Increase in Online Mentions",
  },
  {
    id: 3,
    value: 300,
    suffix: "+",
    label: "Brands Featured in Leading Publications",
  },
  {
    id: 4,
    value: 100,
    suffix: "%",
    label: "Tailored PR Strategies",
  },
];

// Why Choose Us Data (Section 3) - This data is now in the array format below

// Services Data (Section 4)
export const digitalPRServicesServicesData = [
  {
    id: 1,
    title: "Media Outreach & Press Coverage",
    description:
      "Our team connects with journalists and editors to secure meaningful coverage in outlets your audience trusts, boosting credibility, visibility, and brand recognition.",
    icon: <BagIcon />,
    isActive: true,
  },
  {
    id: 2,
    title: "Influencer Partnerships",
    description:
      "By collaborating with industry influencers and thought leaders, we extend your reach to engaged audiences. These influencer partnerships help create authentic brand conversations that increase recognition and audience trust.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 3,
    title: "Content-Driven PR Campaigns",
    description:
      "Our team develops newsworthy stories, research reports, and creative campaigns designed to attract organic coverage. These content-driven PR campaigns amplify your brand’s voice and generate lasting attention across digital platforms.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 4,
    title: "Press Release Distribution & Optimization",
    description:
      "We craft professional, SEO-optimized press releases that highlight your most important announcements. With targeted press release distribution, your brand news reaches journalists, publications, and online channels that maximize exposure.",
    icon: <BagIcon />,
    isActive: false,
  },
  {
    id: 5,
    title: "Thought Leadership & Reputation Building",
    description:
      "Positioning your brand as an industry leader is essential. Through thought leadership campaigns, including expert commentary, guest articles, and interviews, we strengthen your reputation and establish long-term authority.",
    icon: <BagIcon />,
    isActive: false,
  },
];

// Services Section Data (Section 5)
export const digitalPRServicesServicesSectionData = {
  heading: "Explore Our Full Suite of Digital PR Services",
  showDescription: false,
  cta: {
    href: "#",
    label: "Get Started Today",
  },
};

// Industries Section Data (Section 6)
export const digitalPRServicesIndustriesSectionData = {
  heading: "Who We Help Grow",
  description:
    "At Website Digitals, we make tailored digital PR campaigns for every industry, building brand authority, boosting visibility, and earning lasting audience trust.",
  cta: {
    text: "Launch My PR Campaign",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const digitalPRServicesIndustriesCardsData = [
  {
    title: "Fintech",
    description:
      "Our digital PR services for fintech highlight innovation and compliance to build credibility and investor confidence. We connect your brand with top financial media and industry analysts for stronger authority.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Healthcare",
    description:
      "We offer digital PR services for healthcare that improve patient trust and ensure accurate communication. Our team secures visibility in leading health and wellness publications to enhance brand reputation.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Legal Firms",
    description:
      "Our digital PR for legal firms positions attorneys as thought leaders through expert media placements. We boost credibility and recognition across trusted legal and business outlets.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Real Estate",
    description:
      "We deliver digital PR for real estate that attracts buyers, investors, and community attention. Targeted coverage in property and lifestyle media increases visibility and brand trust.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Hospitality",
    description:
      "Our digital PR services for hospitality strengthen guest engagement and showcase brand experiences. We secure placements in travel and lifestyle publications to drive bookings and loyalty.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Automotive",
    description:
      "We create digital PR campaigns for automotive brands that emphasize innovation, new launches, and leadership. Coverage in industry and lifestyle media builds awareness and consumer confidence.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Why Choose Us Section Data (Section 7)
export const digitalPRServicesWhyChooseUsSectionData = {
  heading: "Why Opt for Our Digital PR Agency",
  description:
    "Our proven media relationships, tailored campaigns, transparent reporting, and integrated approach ensure your digital PR efforts deliver measurable results and lasting authority.",
  cta: {
    text: "Start Your PR Campaign",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const digitalPRServicesWhyChooseUsData = [
  {
    title: "Proven Media Relationships",
    description:
      "Every media outreach strategy is built on long-term relationships with journalists, editors, and industry publications. This ensures consistent placements in outlets that genuinely matter to your audience.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Tailored Campaigns for Every Brand",
    description:
      "No two businesses are alike, which is why we focus on customized PR solutions that match brand goals, audience expectations, and industry tone. Each campaign is built to reflect your unique story and strengthen your authority in the market.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Transparent Process and Clear Reporting",
    description:
      "With clear campaign reporting, we show the impact of coverage, links earned, and visibility gained, removing the guesswork and giving you a measurable view of success.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "Consistency That Builds Authority",
    description:
      "We keep your brand relevant in search and media conversations, building authority steadily for lasting recognition.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    title: "PR Integrated With Marketing Goals",
    description:
      "By ensuring digital marketing alignment, we connect PR campaigns with SEO, content, and brand messaging so that every effort works together to support overall growth.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Workflow Data (Section 8)
export const digitalPRServicesWorkflowData = {
  title: "Our Workflow for Digital PR Services",
  description:
    "Building brand authority and visibility through digital PR requires a strategic and transparent approach. Our proven workflow ensures every campaign delivers measurable impact and long-term results. The process includes:",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Research and Media Mapping",
      description:
        "Every campaign begins with media landscape research to identify the right journalists, outlets, and platforms for your brand. This stage ensures data, industry relevance, and audience alignment guide outreach strategies.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Story Development and Campaign Planning",
      description:
        "We craft compelling narratives and develop a digital PR campaign strategy that connects with target audiences. From press releases to thought leadership opportunities, planning ensures each story has a clear angle that resonates with media and stakeholders.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Outreach and Media Placement",
      description:
        "Our team executes a structured media outreach process, building relationships with editors, reporters, and online publications. This ensures consistent coverage, brand mentions, and authoritative backlinks in outlets that matter most to your business.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Monitoring and Performance Reporting",
      description:
        "PR efforts are tracked using campaign analytics to measure coverage, visibility, and engagement. With ongoing performance reporting, we refine strategies to maximize results, ensuring long-term brand authority and sustained visibility.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Workflow Section Data (Section 9)
export const digitalPRServicesWorkflowSectionData = {
  heading: "Our Digital PR Process",
  description:
    "From research to reporting, our proven process ensures your digital PR campaigns deliver measurable results and lasting authority.",
  showDescription: true,
  cta: {
    href: "#",
    label: "Start Your Campaign",
  },
};

export const digitalPRServicesFinalCTAData = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: {
      label: "CMS Development Company",
      href: "/services/cms-development-company",
    },
  },
  heading: "Start Building Lasting Authority Today",
  description: [
    "Gain consistent visibility and trust through targeted digital PR strategies that deliver real results.",
  ],
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "CMS Development Services",
    width: 500,
    height: 400,
  },
  isCta: true,
  cta: {
    text: "Launch My PR Campaign",
    href: "#",
    className: "offer-btn primary",
  },
};
// Final CTA Data (Section 10)

// FAQs Data (Section 11)
export const digitalPRServicesFAQsData = [
  {
    id: 1,
    question:
      "What makes Website Digitals different from other digital PR agencies?",
    answer:
      "At Website Digitals, we don't rely on cookie-cutter campaigns. Our digital PR services are built on proven media relationships, tailored outreach, and strategies designed to secure placements in outlets that truly matter to your industry. By integrating PR with SEO and brand storytelling, we ensure clients gain not just coverage but measurable authority and lasting visibility.",
  },
  {
    id: 2,
    question:
      "How does Website Digitals measure success in digital PR campaigns?",
    answer:
      "We believe transparency is essential. That's why Website Digitals provides clear reporting on every campaign, including media coverage earned, backlinks acquired, brand mentions, and audience reach. Success isn't based on vanity metrics; it's tracked through tangible improvements in reputation, visibility, and organic growth.",
  },
  {
    id: 3,
    question: "What are digital PR services?",
    answer:
      "Digital PR services focus on increasing online visibility by combining traditional public relations with digital marketing strategies. They include media outreach, press coverage, influencer collaboration, content-driven campaigns, and SEO-based link building to help brands gain trust and recognition across digital channels.",
  },
  {
    id: 4,
    question: "How does digital PR work for businesses?",
    answer:
      "Digital PR works by connecting a business's story with the right journalists, publications, and online platforms. Through targeted outreach, engaging content, and strategic media placement, businesses can strengthen their reputation, attract quality backlinks, and increase brand awareness while building lasting authority in their industry.",
  },
  {
    id: 5,
    question: "How is digital PR different from traditional PR?",
    answer:
      "Traditional PR focuses on offline methods like print coverage, broadcast interviews, and events. Digital PR, on the other hand, integrates with SEO and online marketing. It emphasizes online publications, social media, blogger outreach, and digital content to generate measurable results such as backlinks, website traffic, and online mentions.",
  },
  {
    id: 6,
    question: "Can you share examples of successful digital PR campaigns?",
    answer:
      "Successful digital PR campaigns often include brands securing coverage in top-tier publications, building authority through expert interviews, or running creative online campaigns that go viral. Case studies usually highlight measurable results such as increased traffic, higher search rankings, or significant growth in brand mentions across the web.",
  },
  {
    id: 7,
    question: "How can I hire a top-rated digital PR company?",
    answer:
      "Hiring a top-rated digital PR company involves reviewing their portfolio, checking client testimonials, and ensuring they have proven media connections in your industry. A strong agency should also provide transparency through reporting and align PR campaigns with your broader marketing goals.",
  },
  {
    id: 8,
    question: "What does digital PR service pricing look like?",
    answer:
      "Digital PR service pricing varies depending on campaign goals, industry, and scope of work. Costs may be based on retainer models, project-based campaigns, or performance metrics. Transparent agencies will provide clear breakdowns that cover outreach, content creation, reporting, and strategic consulting so businesses understand exactly where their investment goes.",
  },
  {
    id: 9,
    question: "How can I hire digital PR services?",
    answer:
      "When you choose to hire digital PR services, the process begins by evaluating an agency's media connections, track record, and industry experience. At Website Digitals, we provide tailored strategies that align with your goals, helping you gain measurable visibility and long-term trust.",
  },
  {
    id: 10,
    question: "What are outsourced digital PR services?",
    answer:
      "Outsourced digital PR services let brands rely on expert teams without the cost of building in-house resources. At Website Digitals, we manage every aspect—media outreach, content, and SEO-driven campaigns—so you save time while gaining stronger authority and scalable growth.",
  },
  {
    id: 11,
    question: "What are full-service digital PR services?",
    answer:
      "Full-service digital PR services cover the entire spectrum of PR campaigns, including outreach, influencer collaborations, press releases, and reputation management. Website Digitals integrates every element into one cohesive strategy, ensuring maximum visibility and measurable impact for your brand.",
  },
];

// Scroll Section Data (Section 12)
export const digitalPRServicesScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Opt for Our Digital PR Agency",
  showDescription: false,
  items: [
    {
      id: "pr-firstScroller",
      step: 1,
      title: "Proven Media Relationships",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Every media outreach strategy is built on long-term relationships with journalists, editors, and industry publications. This ensures consistent placements in outlets that genuinely matter to your audience.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Proven Media Relationships",
        width: 669,
        height: 376,
      },
    },
    {
      id: "pr-secondScroller",
      step: 2,
      title: "Tailored Campaigns for Every Brand",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "No two businesses are alike, which is why we focus on customized PR solutions that match brand goals, audience expectations, and industry tone. Each campaign is built to reflect your unique story and strengthen your authority in the market.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Tailored Campaigns for Every Brand",
        width: 669,
        height: 376,
      },
    },
    {
      id: "pr-thirdScroller",
      step: 3,
      title: "Transparent Process and Clear Reporting",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "With clear campaign reporting, we show the impact of coverage, links earned, and visibility gained, removing the guesswork and giving you a measurable view of success.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Transparent Process and Clear Reporting",
        width: 669,
        height: 376,
      },
    },
    {
      id: "pr-fourthScroller",
      step: 4,
      title: "Consistency That Builds Authority",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We keep your brand relevant in search and media conversations, building authority steadily for lasting recognition.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Consistency That Builds Authority",
        width: 669,
        height: 376,
      },
    },
    {
      id: "pr-fifthScroller",
      step: 5,
      title: "PR Integrated With Marketing Goals",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "By ensuring digital marketing alignment, we connect PR campaigns with SEO, content, and brand messaging so that every effort works together to support overall growth.",
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/5.png",
        alt: "PR Integrated With Marketing Goals",
        width: 669,
        height: 376,
      },
    },
  ],
  cta: null,
};
