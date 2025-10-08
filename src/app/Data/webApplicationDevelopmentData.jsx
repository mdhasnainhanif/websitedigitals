import { BagIcon } from "@/icons";

export const webApplicationDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Web Application Development Services", href: "/web-application-development-services" },
  },
  heading: "Expert [[Web Application Development]] Services for [[Modern]] Businesses",
  description: ["Build powerful web applications that drive your business forward. Our web application development services create custom solutions that are fast, secure, and perfectly tailored to your unique requirements.\n\nWe develop everything from simple web apps to complex enterprise applications using modern technologies like React, Node.js, Python, and cloud platforms. Our applications are built for scalability, performance, and user experience, ensuring they grow with your business.\n\nPartner with us to transform your ideas into powerful web applications that deliver real business value and exceptional user experiences.",],
  isCta: false,
  cta: {
    text: "Get App Development Quote",
    href: "/brief"
  },
  image: null,
};

export const webApplicationDevelopmentServicesData = [
  {
    id: 1,
    title: "Custom Web Applications",
    description: "Bespoke web applications built from scratch to meet your specific business requirements. We use modern frameworks and technologies to create scalable, secure solutions.",
    icon: <BagIcon />,
    isActive: true
  },
  {
    id: 2,
    title: "Progressive Web Apps (PWA)",
    description: "Modern Progressive Web Applications that work seamlessly across all devices. PWAs combine the best of web and mobile app experiences with offline capabilities.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 3,
    title: "Enterprise Web Applications",
    description: "Large-scale enterprise applications with advanced features like multi-tenancy, complex workflows, and integration with existing business systems.",
    icon: <BagIcon />,
    isActive: false
  }
];

export const webApplicationDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Choose Our Web Application Development Services",
  description: "Our web application development team combines technical expertise with business acumen to deliver applications that not only work perfectly but also drive real business results.",
  items: [
    {
      id: "app-firstScroller",
      step: 1,
      title: "Modern Technology Stack",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We use cutting-edge technologies and frameworks to build web applications that are fast, secure, and future-ready. Our tech stack includes React, Node.js, Python, and cloud platforms."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Modern Technology Stack",
        width: 669,
        height: 376
      }
    },
    {
      id: "app-secondScroller",
      step: 2,
      title: "Agile Development Process",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our agile development methodology ensures rapid delivery, continuous feedback, and iterative improvements throughout the development process."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Agile Development Process",
        width: 669,
        height: 376
      }
    },
    {
      id: "app-thirdScroller",
      step: 3,
      title: "Quality Assurance",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Comprehensive testing and quality assurance processes ensure your web application is bug-free, secure, and performs optimally across all devices and browsers."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Quality Assurance",
        width: 669,
        height: 376
      }
    },
    {
      id: "app-forthScroller",
      step: 4,
      title: "Ongoing Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We provide continuous support and maintenance to keep your web application updated, secure, and performing at its best long after launch."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Ongoing Support",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const webApplicationDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "Web Application Development", href: "/web-application-development-services" },
  },
  heading: "Build Your Next-Generation Web Application",
  description: [
    "Ready to bring your web application idea to life? Our development team is here to create a powerful, scalable solution that drives your business forward."
  ],
  bullets: [],
  cta: {
    text: "Start Your App Development",
    href: "#",
    className: "offer-btn primary",
    show: true
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Web Application Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};
