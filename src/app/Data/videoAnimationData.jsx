import { BagIcon } from "@/icons";

// Metadata for Video Animation Service
export const videoAnimationMetadata = {
  title: "Professional Video Animation Services | Website Digitals",
  description: "Website Digitals offers professional video animation services, explainer videos, motion graphics, and 2D/3D animation to help brands grow.",
  keywords: "video animation services, professional animation services, animated video production services, custom video animation, corporate video animation, whiteboard animation services, 2D animation services, 3D animation services, explainer video services, motion graphics video services, video production and animation, animation studios in the US, video animation for business, affordable video animation services, creative animation services, explainer videos, motion graphics, animated marketing videos, video production agency, corporate storytelling, digital content creation, brand video animation, business animation services, character animation, whiteboard explainer, custom storyboard design, creative video editing, social media animation, product demo animation, animation studio near me, animated commercials",
  canonical: "https://websitedigitals.com/services/video-animation-services",
  openGraph: {
    title: "Professional Video Animation Services | Website Digitals",
    description: "Website Digitals offers professional video animation services, explainer videos, motion graphics, and 2D/3D animation to help brands grow.",
    url: "https://websitedigitals.com/services/video-animation-services",
    siteName: "Website Digitals",
    images: [
      {
        url: "https://websitedigitals.com/assets/images/video-animation-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Video Animation Services by Website Digitals",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Professional Video Animation Services | Website Digitals",
    description: "Website Digitals offers professional video animation services, explainer videos, motion graphics, and 2D/3D animation to help brands grow.",
    images: ["https://websitedigitals.com/assets/images/video-animation-twitter-image.jpg"],
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
    canonical: "https://websitedigitals.com/services/video-animation-services",
  },
};

// Banner Data (Section 1)
export const videoAnimationBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Video Animation Services",
      href: "/services/video-animation-services",
    },
  },
  heading: "Video Animation Services That Simplify, Engage, and Persuade",
  description: [
    "Every competitor using animated video is capturing the attention that your business is losing without it.",
    "",
    "That's why at Website Digitals, we provide video animation services that don't just look good; they persuade, educate, and convert.",
    "",
    "Our team creates custom animations for businesses that want to stand out. From corporate videos and motion graphics to 2D and 3D animation services, we design visuals that capture attention and build trust.",
  ],
  isCta: false,
  image: null,
  formConfig: {
    buttonText: "Let’s Create Your Story",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "2d-animation", label: "2D Animation" },
      { value: "3d-animation", label: "3D Animation" },
      { value: "motion-graphics", label: "Motion Graphics" },
      { value: "explainer-videos", label: "Explainer Videos" },
      { value: "corporate-videos", label: "Corporate Videos" },
      { value: "social-media-videos", label: "Social Media Videos" }
    ],
    initialValues: {
      help: "2d-animation"
    }
  },
};

// Stats Counter Data (Section 2)
export const videoAnimationStatsData = [
  {
    id: 1,
    value: 500,
    suffix: "+",
    label: "Videos Delivered",
  },
  {
    id: 2,
    value: 200,
    suffix: "+",
    label: "Clients Served",
  },
  {
    id: 3,
    value: 98,
    suffix: "%",
    label: "Satisfaction Rate",
  },
  {
    id: 4,
    value: 10,
    suffix: "+",
    label: "Years Experience",
  },
];

// Impact Section Data (Section 3) - for DevelopmentCards
export const videoAnimationImpactSectionData = {
  heading: "Why Brands Invest in Video Animation to Tell Their Story",
  description: "",
  showDescription: false,
};

export const videoAnimationImpactCardsData = [
  {
    id: 1,
    title: "Enhanced Brand Storytelling",
    description:
      "With brand video animation, businesses can showcase personality, values, and uniqueness in a way that resonates emotionally with their audience. Adding character animation brings a human-like connection that builds trust and memorability.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 2,
    title: "Driving Digital Engagement",
    description:
      "Digital content creation works best when it moves, and animated visuals naturally draw attention. Animated visuals consistently outperform static ads, making them perfect for animated commercials that capture attention and boost interaction across platforms.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 3,
    title: "Simplifying Complex Messages",
    description:
      "Through corporate storytelling, animation makes complex information digestible and engaging. With product demo animation, businesses can break down features step by step, ensuring clarity while keeping viewers hooked.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
  {
    id: 4,
    title: "Animation That Builds Confidence",
    description:
      "Professional business animation services use structured visuals to present brands with authority. With a custom storyboard design, each frame is crafted intentionally, ensuring consistency and clarity from start to finish.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-6",
  },
];

// Services Section Data (Section 5)
export const videoAnimationServicesSectionData = {
  heading: "Creative Solutions for Every Animation Need",
  description: "",
  showDescription: false,
  cta: {
    text: "Let's Animate My Story",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const videoAnimationServicesData = [
  {
    id: 1,
    title: "Explainer Videos",
    description:
      "Simplify complex concepts with explainer videos that connect with your audience. Choose from whiteboard explainer styles, character animation, or minimalistic design to match your brand tone.",
    icon: <BagIcon/>,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 2,
    title: "Motion Graphics",
    description:
      "Bring presentations, ads, and digital campaigns to life with dynamic motion graphics that grab attention and enhance brand recall.",
    icon: <BagIcon/>,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 3,
    title: "2D & 3D Animation",
    description:
      "From clean, flat 2D animation for educational or marketing content to immersive 3D animation for product showcases, we tailor the right visual style for your goals.",
    icon: <BagIcon/>,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 4,
    title: "Storyboarding & Editing",
    description:
      "Every project begins with a custom storyboard design to lock in the creative vision. Our creative video editing ensures smooth pacing, polished transitions, and a professional finish.",
    icon: <BagIcon/>,
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 5,
    title: "Animated Commercials & Social Media Content",
    description:
      "Stop the scroll with short-form social media animation and compelling animated commercials designed to boost engagement and conversions.",
    icon: <BagIcon/>,
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Industries Section Data (Section 6)
export const videoAnimationIndustriesSectionData = {
  heading: "Who We Create Animated Videos For",
  description: "At Website Digitals, we partner with brands across industries, crafting tailored video animations that deliver clarity, creativity, and measurable results for every story.",
  showDescription: true,
  cta: {
    text: "Let's Animate My Story",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const videoAnimationIndustriesCardsData = [
  {
    title: "SaaS",
    description:
      "Our SaaS video animation services explain complex software with clarity, helping teams onboard users, highlight product features, and drive adoption faster.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "SaaS Video Animation",
    width: 71,
    height: 71,
  },
  {
    title: "Education",
    description:
      "Through education video animation services, we create engaging tutorials and e-learning modules that simplify lessons, improve retention, and support interactive learning.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Education Video Animation",
    width: 71,
    height: 71,
  },
  {
    title: "Healthcare",
    description:
      "Our healthcare video animation services make medical concepts easier to understand, from patient education to staff training, while supporting clear, compliant communication.",
    imgOriginal: `/assets/images/services/thirty-56.webp`,
    imgWhite: `/assets/images/services/thirty-55.webp`,
    alt: "Healthcare Video Animation",
    width: 71,
    height: 71,
  },
  {
    title: "Real Estate",
    description:
      "With real estate video animation services, we craft virtual tours, animated floor plans, and neighborhood walkthroughs that boost property visibility and buyer confidence.",
    imgOriginal: `/assets/images/services/thirty-54.webp`,
    imgWhite: `/assets/images/services/thirty-53.webp`,
    alt: "Real Estate Video Animation",
    width: 71,
    height: 71,
  },
  {
    title: "Automotive",
    description:
      "Our automotive video animation services bring vehicles to life with 3D showcases, feature highlights, and dealership promos that accelerate interest and sales.",
    imgOriginal: `/assets/images/whyChooseUs1.webp`,
    imgWhite: `/assets/images/whyChooseUs2.webp`,
    alt: "Automotive Video Animation",
    width: 71,
    height: 71,
  },
  {
    title: "Travel",
    description:
      "Through travel video animation services, we design destination explainers, itinerary highlights, and promotional videos that inspire bookings and build customer excitement.",
    imgOriginal: `/assets/images/services/thirty-50.webp`,
    imgWhite: `/assets/images/services/thirty-49.webp`,
    alt: "Travel Video Animation",
    width: 71,
    height: 71,
  },
];

// Why Choose Us Section Data (Section 7)
export const videoAnimationWhyChooseUsSectionData = {
  heading: "Why Businesses Trust Our Animation Services",
  description: "",
  showDescription: false,
};

export const videoAnimationWhyChooseUsData = [
  {
    id: 1,
    title: "Creative Brand Flexibility",
    description:
      "Many providers offer generic animations that feel templated. Our focus is on animated marketing videos built to reflect brand identity, tone, and messaging. Each project is tailored so the final animation feels unique to your business and resonates with the right audience.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    alt: "Creative Brand Flexibility",
    width: 71,
    height: 71,
  },
  {
    id: 2,
    title: "Transparent Pricing",
    description:
      "Cost often becomes a barrier when businesses look for quality animations. We address this by offering affordable video animation services with clear packages and no hidden charges. This ensures you know exactly what you are investing in while still receiving top-quality results.",
    imgOriginal: "/assets/images/services/thirty-50.webp",
    imgWhite: "/assets/images/services/thirty-49.webp",
    alt: "Transparent Pricing",
    width: 71,
    height: 71,
  },
  {
    id: 3,
    title: "Faster Turnarounds",
    description:
      "Time matters in digital campaigns, and delays can stall growth. Our workflow for animated video production services is structured to deliver high-quality animations quickly, without cutting corners or affecting creative standards.",
    imgOriginal: "/assets/images/services/thirty-56.webp",
    imgWhite: "/assets/images/services/thirty-55.webp",
    alt: "Faster Turnarounds",
    width: 71,
    height: 71,
  },
  {
    id: 4,
    title: "Full Production Support",
    description:
      "Instead of outsourcing parts of the process, we handle everything in-house. Our explainer video services include scripting, storyboarding, animation, voiceovers, and final delivery, keeping the process smooth and ensuring consistency at every stage.",
    imgOriginal: "/assets/images/services/thirty-54.webp",
    imgWhite: "/assets/images/services/thirty-53.webp",
    alt: "Full Production Support",
    width: 71,
    height: 71,
  },
  {
    id: 5,
    title: "Industry-Specific Expertise",
    description:
      "Experience across industries helps us understand how different businesses communicate. Unlike general providers, our team works like specialized animation studios in the US, offering insights that align with sector-specific needs, whether it's technology, healthcare, or retail.",
    imgOriginal: "/assets/images/whyChooseUs1.webp",
    imgWhite: "/assets/images/whyChooseUs2.webp",
    alt: "Industry-Specific Expertise",
    width: 71,
    height: 71,
  },
];

// Workflow Section Data (Section 8)
export const videoAnimationWorkflowData = {
  title: "How Our Video Animation Process Works",
  description: "",
  showDescription: false,
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Script Development",
      description:
        "The process begins with understanding your brand, audience, and objectives. Through animated storytelling, we translate your message into a clear script that sets the foundation for the animation.",
      image: "/assets/images/work/step1.png",
      alignment: "right",
    },
    {
      id: 2,
      number: "02",
      title: "Storyboarding & Concept Design",
      description:
        "Once the script is finalized, we create detailed frames that show how the story will unfold. A strong visual content strategy ensures that each scene aligns with your goals and captures the right tone.",
      image: "/assets/images/work/step2.png",
      alignment: "left",
    },
    {
      id: 3,
      number: "03",
      title: "Animation Production",
      description:
        "At this stage, ideas are brought to life with motion, graphics, and sound. Using creative video editing, we refine pacing, transitions, and effects to deliver smooth and engaging visuals.",
      image: "/assets/images/work/step3.png",
      alignment: "right",
    },
    {
      id: 4,
      number: "04",
      title: "Review & Refinement",
      description:
        "Before delivery, the animation goes through strict checks for accuracy, flow, and effectiveness. With content quality assurance, we ensure the final video meets both brand standards and audience expectations.",
      image: "/assets/images/work/step4.png",
      alignment: "left",
    },
  ],
};

// Technologies Section Data (Section 9)
export const videoAnimationTechnologiesSectionData = {
  heading: "How Our Video Animation Process Works",
  showDescription: false,
  cta: {
    text: "Get My Animation Quote",
    href: "#",
    className: "offer-btn primary",
    show: true,
  },
};

export const videoAnimationTechnologiesData = [
  {
    id: 1,
    title: "Adobe After Effects",
    description:
      "Our primary tool for motion graphics and visual effects, enabling us to create stunning animations with professional-grade compositing and motion design capabilities.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 2,
    title: "Cinema 4D",
    description:
      "For 3D animation and modeling, we use Cinema 4D to create realistic 3D visuals, product showcases, and immersive animated experiences that captivate audiences.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 3,
    title: "Adobe Premiere Pro",
    description:
      "Professional video editing software for seamless post-production, ensuring smooth transitions, perfect timing, and polished final deliverables.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 4,
    title: "Blender",
    description:
      "Open-source 3D creation suite for modeling, animation, and rendering, allowing us to create high-quality 3D content cost-effectively.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 5,
    title: "Adobe Illustrator",
    description:
      "For creating vector graphics and 2D assets that scale perfectly in animations, ensuring crisp visuals at any resolution.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
  {
    id: 6,
    title: "Figma",
    description:
      "Collaborative design tool for storyboarding and concept development, enabling seamless communication and iteration throughout the creative process.",
    icon: "/assets/images/work/pen-tool.svg",
    col: "col-12 col-md-6 col-lg-4",
  },
];

// Final CTA Section Data (Section 10)
export const videoAnimationFinalCTAData = {
  heading: "Want Animated Videos That Win Customers?",
  description: [
    "With custom video animation, your brand can capture attention, explain faster, and build trust across every channel."
  ],
  isCta: true,
  cta: {
    text: "Let's Animate My Story",
    href: "#",
    className: "offer-btn primary",
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Video Animation Services",
    width: 500,
    height: 400,
  },
};

// Scroll Section Data (Section 4 - Case Study)
export const videoAnimationScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Businesses Trust Our Animation Services",
  showDescription: false,
  items: [
    {
      id: "video-case-study-1",
      step: 1,
      title: "Creative Brand Flexibility",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Many providers offer generic animations that feel templated. Our focus is on animated marketing videos built to reflect brand identity, tone, and messaging. Each project is tailored so the final animation feels unique to your business and resonates with the right audience."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Creative Brand Flexibility",
        width: 669,
        height: 376
      }
    },
    {
      id: "video-case-study-2",
      step: 2,
      title: "Transparent Pricing",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Cost often becomes a barrier when businesses look for quality animations. We address this by offering affordable video animation services with clear packages and no hidden charges. This ensures you know exactly what you are investing in while still receiving top-quality results."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Transparent Pricing",
        width: 669,
        height: 376
      }
    },
    {
      id: "video-case-study-3",
      step: 3,
      title: "Faster Turnarounds",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Time matters in digital campaigns, and delays can stall growth. Our workflow for animated video production services is structured to deliver high-quality animations quickly, without cutting corners or affecting creative standards."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Faster Turnarounds",
        width: 669,
        height: 376
      }
    },
    {
      id: "video-case-study-4",
      step: 4,
      title: "Full Production Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Instead of outsourcing parts of the process, we handle everything in-house. Our explainer video services include scripting, storyboarding, animation, voiceovers, and final delivery, keeping the process smooth and ensuring consistency at every stage."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Full Production Support",
        width: 669,
        height: 376
      }
    },
    {
      id: "video-case-study-5",
      step: 5,
      title: "Industry-Specific Expertise",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Experience across industries helps us understand how different businesses communicate. Unlike general providers, our team works like specialized animation studios in the US, offering insights that align with sector-specific needs, whether it’s technology, healthcare, or retail."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Industry-Specific Expertise",
        width: 669,
        height: 376
      }
    }
  ],
  cta: {
    text: "See More Case Studies",
    href: "#",
    className: "offer-btn primary",
    show: true
  }
};

// FAQs Data (Section 11)
export const videoAnimationFAQsData = [
  {
    id: 1,
    question: "What makes Website Digitals different from other video animation companies?",
    answer: "Website Digitals focuses on tailored video animation services that reflect each client's brand identity. Unlike generic providers, we handle everything in-house, from scriptwriting and storyboard design to animation and final delivery, ensuring creativity, consistency, and results.",
  },
  {
    id: 2,
    question: "Does Website Digitals provide affordable video animation services for startups?",
    answer: "Yes. At Website Digitals, we offer affordable video animation services with flexible packages designed for startups and small businesses. Our goal is to deliver high-quality animations without unnecessary costs or hidden fees.",
  },
  {
    id: 3,
    question: "Can Website Digitals handle both 2D and 3D animation projects?",
    answer: "Absolutely. Website Digitals provides a full range of video animation services, including 2D animation services, 3D animation services, explainer videos, motion graphics, and corporate animations. We adapt our process to suit your project needs and industry.",
  },
  {
    id: 4,
    question: "What are video animation services?",
    answer: "Video animation services include the creation of animated content such as explainer videos, motion graphics, 2D animation, and 3D animation. These services help businesses simplify complex ideas, build brand awareness, and engage audiences across multiple platforms.",
  },
  {
    id: 5,
    question: "What are the benefits of animated videos for businesses?",
    answer: "Animated videos boost engagement, improve message retention, and increase conversions. Businesses use them for storytelling, product demos, and brand campaigns because animated videos are more effective than static visuals in capturing attention and driving results.",
  },
  {
    id: 6,
    question: "What is the difference between 2D and 3D animation services?",
    answer: "2D animation services focus on flat, two-dimensional visuals ideal for explainer videos, whiteboard animations, and educational content. 3D animation services create depth and realism, often used in product showcases, architectural walkthroughs, or medical animations. Choosing between 2D and 3D depends on your budget, goals, and desired visual impact.",
  },
  {
    id: 7,
    question: "How long does it take to make an animated video?",
    answer: "On average, animated videos take 2–6 weeks to produce, depending on script length, design complexity, and revision cycles. Explainer videos and motion graphics are usually quicker, while 3D animation services often require more time due to detailed rendering.",
  },
  {
    id: 8,
    question: "Where can I hire video animation services?",
    answer: "Many businesses choose to hire video animation services from specialized animation studios or agencies. The best 2D/3D animation company for your project should offer transparent pricing, a strong portfolio, and services that align with your industry.",
  },
  {
    id: 9,
    question: "Are there affordable video animation packages for startups?",
    answer: "Yes. Many providers offer affordable video animation packages designed specifically for startups and small businesses. These options allow brands to order custom explainer video animation without overspending, helping them compete with larger companies.",
  },
  {
    id: 10,
    question: "What are the best video animation companies?",
    answer: "The best video animation companies are those that combine creativity with strategy. Top-rated animation studios for business videos often provide both 2D and 3D services, motion graphics, and explainer videos, along with strong client reviews and transparent pricing.",
  },
  {
    id: 11,
    question: "How do I compare video animation service reviews and pricing?",
    answer: "To compare effectively, look at both client testimonials and cost structures. Reviews highlight reliability and quality, while pricing shows whether a studio offers affordable video animation services that fit your budget. Comparing 2D vs. 3D animation costs is also important before choosing a package.",
  },
  {
    id: 12,
    question: "What is the difference between explainer videos and motion graphics services?",
    answer: "Explainer video services typically combine storytelling with visuals to simplify complex ideas, while motion graphics services focus more on design-driven animated visuals for branding, ads, or presentations. Businesses often use both depending on campaign goals.",
  },
  {
    id: 13,
    question: "What are on-demand video animation services?",
    answer: "On-demand video animation services let brands order animations whenever needed without long contracts. At Website Digitals, this flexibility ensures fast delivery for seasonal campaigns, product launches, or urgent marketing needs while maintaining quality and consistency.",
  },
  {
    id: 14,
    question: "What are video animation services for business?",
    answer: "Video animation services for business help organizations communicate ideas, market products, and train employees more effectively. At Website Digitals, we design business-focused animations that improve storytelling, strengthen branding, and boost digital engagement across industries.",
  },
  {
    id: 15,
    question: "What are local video animation services?",
    answer: "Local video animation services connect businesses with nearby creative teams who understand regional markets and audience preferences. At Website Digitals, we support clients locally and globally, offering personalized collaboration and industry-specific insights that enhance results.",
  },
];

// Banner Data 2 (for second banner section)
export const videoAnimationBannerData2 = {
  heading: "Want Animated Videos That Win Customers?",
  description: [
    "With custom video animation, your brand can capture attention, explain faster, and build trust across every channel."
  ],
  isCta: true,
  cta: {
    text: "Let's Animate My Story",
    href: "#",
    className: "offer-btn primary",
  },
  image: null,
};
