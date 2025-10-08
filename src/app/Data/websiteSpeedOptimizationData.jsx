import { BagIcon } from "@/icons";

export const websiteSpeedOptimizationBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Website Speed Optimization Services", href: "/website-speed-optimization-services" },
  },
  heading: "Expert [[Website Speed Optimization]] Services for [[Lightning-Fast]] Performance",
  description: ["Boost your website's speed and performance with our comprehensive speed optimization services. Fast-loading websites not only provide better user experiences but also rank higher in search engines and convert more visitors into customers.\n\nOur website speed optimization services include image optimization, code minification, caching implementation, CDN setup, and performance monitoring. We use advanced techniques and tools to identify bottlenecks and implement solutions that deliver measurable speed improvements.\n\nPartner with us to transform your slow website into a lightning-fast platform that keeps visitors engaged and drives better business results.",],
  isCta: false,
  cta: {
    text: "Get Speed Optimization Quote",
    href: "/brief"
  },
  image: null,
};

export const websiteSpeedOptimizationServicesData = [
  {
    id: 1,
    title: "Performance Analysis & Auditing",
    description: "Comprehensive website performance analysis using advanced tools to identify speed bottlenecks, loading issues, and optimization opportunities for maximum impact.",
    icon: <BagIcon />,
    isActive: true
  },
  {
    id: 2,
    title: "Image & Media Optimization",
    description: "Advanced image compression, format conversion, and lazy loading implementation to reduce file sizes and improve loading times without compromising quality.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 3,
    title: "Code & Database Optimization",
    description: "Code minification, database query optimization, and caching implementation to streamline your website's backend performance and reduce server response times.",
    icon: <BagIcon />,
    isActive: false
  }
];

export const websiteSpeedOptimizationScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Choose Our Website Speed Optimization Services",
  description: "Our speed optimization experts use proven techniques and cutting-edge tools to deliver measurable performance improvements that boost user experience and business results.",
  items: [
    {
      id: "speed-firstScroller",
      step: 1,
      title: "Comprehensive Analysis",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We conduct thorough performance audits using industry-standard tools to identify every factor affecting your website's speed and user experience."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Comprehensive Analysis",
        width: 669,
        height: 376
      }
    },
    {
      id: "speed-secondScroller",
      step: 2,
      title: "Advanced Optimization Techniques",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We implement advanced optimization techniques including CDN setup, caching strategies, and code optimization to achieve maximum performance gains."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Advanced Optimization Techniques",
        width: 669,
        height: 376
      }
    },
    {
      id: "speed-thirdScroller",
      step: 3,
      title: "Continuous Monitoring",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Ongoing performance monitoring and optimization to ensure your website maintains peak speed and performance as your content and traffic grow."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Continuous Monitoring",
        width: 669,
        height: 376
      }
    },
    {
      id: "speed-forthScroller",
      step: 4,
      title: "Measurable Results",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide detailed before and after reports showing concrete improvements in loading times, Core Web Vitals, and overall user experience metrics."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Measurable Results",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const websiteSpeedOptimizationBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "Website Speed Optimization", href: "/website-speed-optimization-services" },
  },
  heading: "Transform Your Website into a Speed Champion",
  description: [
    "Ready to boost your website's performance? Our speed optimization experts are here to make your site lightning-fast and user-friendly."
  ],
  bullets: [],
  cta: {
    text: "Start Speed Optimization",
    href: "#",
    className: "offer-btn primary",
    show: true
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Website Speed Optimization Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};
