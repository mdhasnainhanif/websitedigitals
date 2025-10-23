export const aboutPageData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "About Us",
      href: "/about-us",
    },
  },
  heading: "About Us",
  description: [
    "At Website Digitals, we help businesses establish a powerful digital presence through innovation, precision, and performance. Our integrated approach to Web Development, Web Design, Web Hosting, and Digital Marketing ensures measurable growth for every client. Our focus:"
  ],
  bullets: [
    "• Custom-built web solutions",
    "• Creative design and branding", 
    "• Reliable hosting and marketing strategies"
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Get In Touch With Us",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "web-development", label: "Web Development" },
      { value: "web-design", label: "Web Design" },
      { value: "digital-marketing", label: "Digital Marketing" },
      { value: "web-hosting", label: "Web Hosting" },
      { value: "consultation", label: "General Consultation" },
    ],
    initialValues: {
      help: "consultation",
    },
  },
};

export const aboutPageStatsData = [
  {
    id: 1,
    value: 100,
    suffix: "+",
    label: "Websites Launched Across Industries"
  },
  {
    id: 2,
    value: 99.9,
    suffix: "%",
    label: "Uptime With Managed Hosting"
  },
  {
    id: 3,
    value: 95,
    suffix: "%",
    label: "Client Satisfaction Rate"
  }
];

export const aboutPageWhoWeAreData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: {
      label: "Who We Are",
      href: "/about-us",
    },
  },
  heading: "Who We Are",
  description: [
    "Based in Brooklyn, New York, Website Digitals is a full-service digital agency providing Web Development, Web Design, Web Hosting, and Digital Marketing services.",
    "We help businesses build a strong online presence through innovative solutions, strategic creativity, and technical precision.",
    "Our expert team of developers, designers, and digital marketers collaborates to deliver performance-driven websites and campaigns that turn ideas into measurable success.",
    "Whether launching a startup or scaling an established enterprise, we provide the digital foundation to help you grow."
  ],
  isCta: true,
  cta: false,
  image: null,
  formConfig: {
    buttonText: "Get In Touch With Us",
    heading: "Get In Touch With Us",
    helpOptions: [
      { value: "web-development", label: "Web Development" },
      { value: "web-design", label: "Web Design" },
      { value: "digital-marketing", label: "Digital Marketing" },
      { value: "web-hosting", label: "Web Hosting" },
      { value: "consultation", label: "General Consultation" },
    ],
    initialValues: {
      help: "consultation",
    },
  },
};