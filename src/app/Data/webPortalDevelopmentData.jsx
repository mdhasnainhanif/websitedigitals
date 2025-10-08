import { BagIcon } from "@/icons";

export const webPortalDevelopmentBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Web Portal Development Company", href: "/web-portal-development-company" },
  },
  heading: "Professional [[Web Portal Development]] Company for [[Enterprise]] Solutions",
  description: ["Build powerful web portals that connect your business with customers, partners, and employees. Our web portal development company creates secure, scalable, and feature-rich portals that streamline operations and enhance user experiences.\n\nWe specialize in developing custom web portals including customer portals, employee intranets, partner portals, and B2B platforms. Our solutions integrate seamlessly with your existing systems while providing advanced functionality like user management, document sharing, and real-time collaboration.\n\nPartner with us to transform your business processes with a web portal that's built for performance, security, and growth.",],
  isCta: false,
  cta: {
    text: "Get Portal Development Quote",
    href: "/brief"
  },
  image: null,
};

export const webPortalDevelopmentServicesData = [
  {
    id: 1,
    title: "Customer Portal Development",
    description: "Secure customer portals that provide self-service capabilities, account management, and seamless communication channels. Built with user experience and security as top priorities.",
    icon: <BagIcon />,
    isActive: true
  },
  {
    id: 2,
    title: "Employee Intranet Development",
    description: "Comprehensive employee portals with HR management, document sharing, project collaboration, and internal communication tools to boost productivity.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 3,
    title: "B2B Partner Portal Development",
    description: "Advanced B2B portals for partner management, order processing, inventory tracking, and business collaboration with role-based access controls.",
    icon: <BagIcon />,
    isActive: false
  }
];

export const webPortalDevelopmentScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Choose Our Web Portal Development Company",
  description: "Our web portal development expertise combines technical excellence with business understanding. We create portals that not only meet your current needs but also adapt to your future growth.",
  items: [
    {
      id: "portal-firstScroller",
      step: 1,
      title: "Scalable Architecture",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We build web portals with scalable architectures that can handle growing user bases and increasing data volumes without compromising performance."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Scalable Architecture",
        width: 669,
        height: 376
      }
    },
    {
      id: "portal-secondScroller",
      step: 2,
      title: "Advanced Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Enterprise-grade security features including multi-factor authentication, role-based access control, and data encryption to protect sensitive information."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Advanced Security",
        width: 669,
        height: 376
      }
    },
    {
      id: "portal-thirdScroller",
      step: 3,
      title: "System Integration",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Seamless integration with your existing business systems, databases, and third-party applications for unified data management and workflow automation."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "System Integration",
        width: 669,
        height: 376
      }
    },
    {
      id: "portal-forthScroller",
      step: 4,
      title: "User Experience Focus",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Intuitive user interfaces designed for different user types, ensuring easy navigation and efficient task completion for all portal users."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "User Experience Focus",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const webPortalDevelopmentBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "Web Portal Development", href: "/web-portal-development-company" },
  },
  heading: "Transform Your Business with Custom Web Portals",
  description: [
    "Ready to streamline your business operations? Our web portal development experts are here to create the perfect solution for your enterprise needs."
  ],
  bullets: [],
  cta: {
    text: "Start Your Portal Development",
    href: "#",
    className: "offer-btn primary",
    show: true
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Web Portal Development Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};
