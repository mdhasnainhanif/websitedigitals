import { BagIcon } from "@/icons";

export const websiteMaintenanceBannerData = {
  breadcrumb: {
    home: { label: "Home", href: "/" },
    current: { label: "Website Maintenance Services", href: "/website-maintenance-services" },
  },
  heading: "Professional [[Website Maintenance]] Services to Keep Your Site [[Running]] Smoothly",
  description: ["Keep your website secure, fast, and up-to-date with our comprehensive website maintenance services. We handle all the technical aspects so you can focus on growing your business.\n\nOur website maintenance services include security updates, performance optimization, content updates, backup management, and 24/7 monitoring. We ensure your website stays protected from threats, loads quickly, and provides an excellent user experience.\n\nPartner with us for reliable website maintenance that keeps your online presence strong and your business running smoothly without any technical headaches.",],
  isCta: false,
  cta: {
    text: "Get Maintenance Quote",
    href: "/brief"
  },
  image: null,
};

export const websiteMaintenanceServicesData = [
  {
    id: 1,
    title: "Security Updates & Monitoring",
    description: "Regular security updates, vulnerability scanning, and 24/7 monitoring to protect your website from threats and ensure maximum security for your business and customers.",
    icon: <BagIcon />,
    isActive: true
  },
  {
    id: 2,
    title: "Performance Optimization",
    description: "Continuous performance monitoring and optimization to ensure fast loading times, improved user experience, and better search engine rankings.",
    icon: <BagIcon />,
    isActive: false
  },
  {
    id: 3,
    title: "Content & Plugin Updates",
    description: "Regular updates to your website content, plugins, themes, and core systems to keep everything current, secure, and functioning optimally.",
    icon: <BagIcon />,
    isActive: false
  }
];

export const websiteMaintenanceScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "Why Choose Our Website Maintenance Services",
  description: "Our website maintenance services are designed to keep your website running smoothly, securely, and efficiently so you can focus on what matters most - growing your business.",
  items: [
    {
      id: "maintenance-firstScroller",
      step: 1,
      title: "Proactive Security",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We proactively monitor and update your website's security to prevent breaches, malware infections, and other cyber threats before they can cause damage."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Proactive Security",
        width: 669,
        height: 376
      }
    },
    {
      id: "maintenance-secondScroller",
      step: 2,
      title: "Performance Monitoring",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Continuous monitoring of your website's performance metrics to identify and resolve issues before they impact user experience or search rankings."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Performance Monitoring",
        width: 669,
        height: 376
      }
    },
    {
      id: "maintenance-thirdScroller",
      step: 3,
      title: "Regular Backups",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Automated daily backups with secure storage and quick recovery options to ensure your data is always safe and your website can be restored quickly if needed."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Regular Backups",
        width: 669,
        height: 376
      }
    },
    {
      id: "maintenance-forthScroller",
      step: 4,
      title: "Expert Support",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Dedicated support team available to address any issues, answer questions, and provide guidance to keep your website operating at peak performance."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Expert Support",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const websiteMaintenanceBannerData2 = {
  isBreadcrumb: false,
  breadcrumb: {
    home: { label: "", href: "/" },
    current: { label: "Website Maintenance", href: "/website-maintenance-services" },
  },
  heading: "Keep Your Website Running at Peak Performance",
  description: [
    "Don't let technical issues slow down your business. Our website maintenance services ensure your site stays secure, fast, and always available."
  ],
  bullets: [],
  cta: {
    text: "Start Website Maintenance",
    href: "#",
    className: "offer-btn primary",
    show: true
  },
  image: {
    src: "/assets/images/everything-you-need.png",
    alt: "Website Maintenance Banner",
    className: "width-100",
  },
  imageWrapperClass: "boxes-bgArea leftBottom web-design-imageArea",
};
