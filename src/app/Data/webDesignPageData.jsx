// /data/webBannerData.js

export const webDesignBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Web Design", href: "/web-design" },
  },
  heading: "Best Web Design Company for Brands Looking for Success",
  description: [
    "You invested in a website, but the leads just aren't coming. It's not your offer, but the lack of strategy behind the design.",
    {
      text: "",
      link: { text: "Website Digitals", href: "/", target: "_blank" },
      afterText:
        " is the best web design company trusted by growth-driven brands that need more than a digital placeholder.",
    },
    "Our custom web design services focus on strategy, storytelling, and conversion to turn your site into a sales asset that actually works.",
    "Whether you're a coach, agency, or eCommerce brand, we create purpose-built websites designed to position you as an authority and increase your bottom line.",
  ],
  cta: {
    text: "Turn Clicks Into Clients",
    href: "#",
  },
  image: {
    src: "/assets/images-webp/web-design/web-design/best-web-design-company-for-brands-looking-for-success.webp",
    width: 598,
    height: 351,
    alt: "Website design illustration",
  },
  formConfig: {
    buttonText: "Design My Website",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "custom-web-design", label: "Custom Web Design" },
      { value: "responsive-design", label: "Responsive Design" },
      { value: "ecommerce-design", label: "E-commerce Design" },
      { value: "landing-page-design", label: "Landing Page Design" },
      { value: "ui-ux-design", label: "UI/UX Design" },
      { value: "redesign", label: "Website Redesign" }
    ],
    initialValues: {
      help: "custom-web-design"
    }
  },
};

export { webDesignBannerData };

// /data/whyChooseData.js

export const whyChooseWebDesignData = {
  heading: "Designed to Sell. Coded to Scale. Branded to Win.",
  image: {
    src: "/assets/images-webp/web-design/web-design/designed-to-sell-coded-to-scale.-branded-to-win.webp",
    alt: "Designed to Sell Coded to Scale",
    width: 667,
    height: 315,
  },

  // Optional intro copy (render above the list)
  paragraphs: [
    "Most agencies stop at aesthetics. As a professional web design firm, Website Digitals goes deeper by merging branding, usability, SEO, and mobile performance to deliver websites that not only look impressive but also drive real business results.",
    "We’re a cost-effective web design company delivering agency-level quality without the overhead.",
    "At Website Digitals, you get more than a website. You get a digital foundation built for long-term growth. We help you turn traffic into trust, clicks into clients, and browsers into buyers.",
  ],

  // Bullet list exactly as in the markup
  bullets: [
    "UX-first design aligned with your brand and customer journey",
    "Custom visuals that build trust and reflect your identity",
    "Responsive layouts for flawless performance on all devices",
    "SEO-ready structure built to rank and scale",
    "Conversion-driven elements like CTAs, forms, and booking tools",
  ],

  cta: {
    label: "Design My Sales-Driven Website",
    href: "/brief",
    className: "primary",
  },
};

export { whyChooseWebDesignData };

export const industryTabsWebDesignData = [
  {
    id: "construction",
    title: "Construction & Real Estate",
    items: [
      {
        title: "Real Estate",
        href: "/real-estate-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_real-estate.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_real-estate.svg",
        alt: "Real Estate",
        desc: "Present dynamic real estate websites that highlight property listings with ease and elegance.",
      },
      {
        title: "Construction",
        href: "/construction-company-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_construction.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_construction.svg",
        alt: "Construction",
        desc: "Showcase projects, generate leads, and build authority with structured, SEO-friendly construction websites.",
      },
      {
        title: "Interior Designers",
        href: "/interior-designers-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_interior-designers.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/construction-and-real-estate/icon_interior-designers.svg",
        alt: "Interior Designers",
        desc: "Portfolio-ready layouts built to attract clients and spotlight creativity.",
      },
    ],
  },

  {
    id: "legal",
    title: "Legal Services",
    items: [
      {
        title: "Law",
        href: "/law-firm-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_law.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_law.svg",
        alt: "Law",
        desc: "Present a professional digital identity that builds trust and credibility with potential clients.",
      },
      {
        title: "Attorney",
        href: "/attorney-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_attorney.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_attorney.svg",
        alt: "Attorney",
        desc: "Streamlined design and intuitive navigation for client-first legal websites.",
      },
      {
        title: "Lawyer",
        href: "/lawyer-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_lawyer.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/legal-services/icon_lawyer.svg",
        alt: "Lawyer",
        desc: "Ensure your services stand out with a clean, modern, and information-driven legal website.",
      },
    ],
  },

  {
    id: "business",
    title: "Small Business",
    items: [
      {
        title: "Electrician",
        href: "/electrician-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_electrician.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_electrician.svg",
        alt: "Electrician",
        desc: "Mobile-optimized pages that let local customers contact you quickly and easily.",
      },
      {
        title: "Plumber",
        href: "/plumber-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_plumber.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_plumber.svg",
        alt: "Plumber",
        desc: "Informative and action-oriented websites that build trust and drive local bookings.",
      },
      {
        title: "Restaurant",
        href: "/restaurant-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_restaurant.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_restaurant.svg",
        alt: "Restaurant",
        desc: "Beautiful menus, reservation systems, and location integrations made simple.",
      },
      {
        title: "Pet Industry",
        href: "/pet-industry-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/small-business/icon_pet-industry.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/small-business/icon_pet-industry.svg",
        alt: "Pet Industry",
        desc: "Adorable and functional pet care websites built for bookings, services, and community engagement.",
      },
    ],
  },

  {
    id: "technology",
    title: "Technology",
    items: [
      {
        title: "WordPress",
        href: "/wordpress-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_wordpress.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_wordpress.svg",
        alt: "WordPress",
        desc: "Functional and scalable WordPress designs customized to your brand and business flow.",
      },
      {
        title: "Shopify",
        href: "/shopify-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_shopify.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_shopify.svg",
        alt: "Shopify",
        desc: "Custom Shopify web design tailored to streamline your ecommerce sales flow.",
      },
      {
        title: "Mobile Friendly",
        href: "/mobile-friendly-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/technology/icon_mobile-friendly.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/technology/icon_mobile-friendly.svg",
        alt: "Mobile Friendly",
        desc: "All websites are built mobile-first to ensure flawless UX across devices.",
      },
    ],
  },

  {
    id: "medical",
    title: "Medical & Healthcare",
    items: [
      {
        title: "Medical",
        href: "/medical-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical.svg",
        alt: "Medical",
        desc: "Professional layouts for clinics and private practices, optimized for credibility and care.",
      },
      {
        title: "Dentist",
        href: "/dentist-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_dentist.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_dentist.svg",
        alt: "Dentist",
        desc: "Clean, approachable designs that ease patient conversion and trust.",
      },
      {
        title: "Healthcare",
        href: "/healthcare-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_healthcare.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_healthcare.svg",
        alt: "Healthcare",
        desc: "Informative and HIPAA-conscious websites for healthcare providers.",
      },
      {
        title: "Medical Spa",
        href: "/medical-spa-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical-spa.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_medical-spa.svg",
        alt: "Medical Spa",
        desc: "Elegant and calming designs tailored to high-end service branding.",
      },
      {
        title: "Hospital",
        href: "/hospital-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_hospital.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_hospital.svg",
        alt: "Hospital",
        desc: "Comprehensive web systems to manage information, departments, and appointments.",
      },
      {
        title: "Veterinary",
        href: "/veterinary-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_veterinary.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/medical-and-healthcare/icon_veterinary.svg",
        alt: "Veterinary",
        desc: "Pet-friendly site designs optimized for mobile and appointment booking.",
      },
    ],
  },

  {
    id: "leisure",
    title: "Leisure & Entertainment",
    items: [
      {
        title: "Photographer",
        href: "/photography-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_photographer.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_photographer.svg",
        alt: "Photographer",
        desc: "Portfolio-based design that frames your work in the best light.",
      },
      {
        title: "Travel",
        href: "/travel-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_travel.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/leisure-and-entertainment/icons_travel.svg",
        alt: "Travel",
        desc: "Inspire journeys with immersive visuals, itineraries, and booking integrations.",
      },
    ],
  },

  {
    id: "services",
    title: "Services",
    items: [
      {
        title: "Responsive",
        href: "/responsive-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_responsive.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_responsive.svg",
        alt: "Responsive",
        desc: "Websites that respond smoothly to all screen sizes and user interactions.",
      },
      {
        title: "B2B",
        href: "/b2b-website-design",
        normalImg: "/assets/images-webp/web-design/icons/services/icon_b2b.svg",
        whiteImg: "/assets/images-webp/web-design/icons/services/icon_b2b.svg",
        alt: "B2B",
        desc: "Data-driven B2B web design that aligns with your sales funnel and client lifecycle.",
      },
      {
        title: "Corporate",
        href: "/corporate-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_corporate.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_corporate.svg",
        alt: "Corporate",
        desc: "Enterprise-grade digital experiences with modern aesthetics and robust backend systems.",
      },
      {
        title: "Ecommerce",
        href: "/ecommerce-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/services/icon_ecommerce.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/services/icon_ecommerce.svg",
        alt: "Ecommerce",
        desc: "Revenue-generating ecommerce sites that merge usability with powerful functionality.",
      },
    ],
  },

  {
    id: "finance",
    title: "Business & Finance",
    items: [
      {
        title: "Financial Services",
        href: "/financial-services-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon-financial-services.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon-financial-services.svg",
        alt: "Financial Services",
        desc: "Build trust with modern, compliant web design for financial firms.",
      },
      {
        title: "Accounting Firm",
        href: "/accounting-firm-website-design",
        normalImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon_accounting-firm.svg",
        whiteImg:
          "/assets/images-webp/web-design/icons/business-and-finance/icon_accounting-firm.svg",
        alt: "Accounting Firm",
        desc: "Clear, concise, and conversion-ready websites designed for service clarity and lead capture.",
      },
    ],
  },
];

export const WebDesignPageFAQs = [
  {
    id: "faq-1",
    question:
      "What makes Website Digitals the best web design company for growing brands?",
    answer:
      "We combine strategy, storytelling, and performance-focused design to deliver websites that attract, engage, and convert. This makes us the trusted and reliable web design firm for businesses that want measurable growth, not just visuals.",
  },
  {
    id: "faq-2",
    question:
      "How does working with a web design agency give me better results than a DIY tool?",
    answer:
      "An agency focuses on more than just looks. With expert guidance, custom design, and strategic development, your website is built to attract leads, convert visitors, and support long-term growth.",
  },
  {
    id: "faq-3",
    question:
      "Do you offer affordable web design services for startups or small businesses?",
    answer:
      "Yes, we provide low-cost web design services without compromising on quality. Our flexible packages are designed to meet your goals and budget while building a strong online presence.",
  },
  {
    id: "faq-4",
    question: "How long does it take to complete a custom web design project?",
    answer:
      "Timelines vary depending on the scope of work. Most custom websites are completed within 3 to 6 weeks with a focus on quality, responsiveness, and clear communication.",
  },
  {
    id: "faq-5",
    question: "Will my website be mobile-friendly and SEO-optimized?",
    answer:
      "Yes. Every website we build is mobile-responsive, fast-loading, and structured to meet SEO best practices for visibility across all devices.",
  },
];
