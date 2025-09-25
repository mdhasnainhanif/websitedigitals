import { BagIcon } from "@/icons";
import { PenToolIcon } from "../../icons";

export const landingPageBannerData = {
    breadcrumb: {
      home: { label: "Home", href: "/" },
      current: { label: "Landing Page", href: "/landing-page" },
    },
    heading: "Plan, [[Create]], And [[Succeed]] With A Web Development Company",
    description: ["An expensive or outdated website can drain your budget, cost you leads, and weaken customer trust. To solve this,\n Website Digitals provides custom web development built for speed, security, scalability, and affordability.\nWe create websites that look exceptional, load fast, and work flawlessly on every device, handled \n start to finish by our experienced full-stack team.\nFrom business websites to ecommerce platforms, we deliver digital experiences that keep \n visitors engaged and ready to act.",
      {
        text: "",
        link: { text: "", href: "/", target: "_blank" },
        afterText:
          "",
      },
    ],
    isCta: false,
    cta: {
      text: "Get Started Now",
      href: "/brief"
    },
    image: null, // no image in this section
  };

export const developmentCardsData = [
  {
    id: 1,
    title: "Supports Your Goals",
    description: "An effective website is built to align with your business objectives from day one. Scalable and secure development ensures your platform can expand with your growth while safeguarding sensitive data. By applying responsive design and mobile-first principles, your site stays accessible to users on any device, enabling business expansion without costly rebuilds.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 2,
    title: "Builds Trust",
    description: "Visitors are more likely to engage with brands that offer a fast, secure, and visually consistent online experience. Certified developers who follow quality assurance standards such as ISO 9001 for process reliability and WCAG accessibility guidelines for inclusivity create platforms that inspire confidence. Beyond technical compliance, being featured in respected directories like Clutch and GoodFirms further reinforces credibility and professionalism",
    icon: "target",
    isHighlighted: true
  },
  {
    id: 3,
    title: "Drives Results",
    description: "Modern web development focuses on more than visual appeal. SEO-driven practices that emphasize web accessibility, performance optimization, and adherence to search engine best practices make your site easier to discover and faster to navigate. These enhancements are commonly associated with higher engagement and improved conversion rates, turning more visitors into customers.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 4,
    title: "Leverages Advanced Technologies",
    description: "Staying competitive means choosing the right tools for your needs. Modern frameworks such as React, Angular, and Node.js are the latest technologies that support fast, interactive, and maintainable websites, helping ensure your platform delivers strong performance today while remaining flexible for future advancements.",
    icon: "target",
    isHighlighted: false
  },
  {
    id: 5,
    title: "Creates a Better User Experience",
    description: "Professional web development companies carefully consider how every design element, feature, and functionality impacts the end user. This attention to detail results in intuitive navigation, consistent branding, and seamless interaction that encourage visitors to stay longer, explore more, and take meaningful action.",
    icon: "target",
    isHighlighted: false
  }
];

export const webDevelopmentServicesData = [
  {
    id: 1,
    title: "Ecommerce Development",
    description: "We build secure, scalable, and conversion-focused online stores. Our ecommerce website development services cover secure payment integration, online store development, and platforms such as Magento, WooCommerce, and Shopify Plus. Every project meets PCI DSS compliance and includes SSL certificates to ensure safe transactions, helping businesses launch robust, high-performance ecommerce solutions.",
    icon: <BagIcon/>,
    isActive: false
  },
  {
    id: 2,
    title: "WordPress Development",
    description: "We offer custom WordPress development for businesses of all sizes, including WordPress theme customization, plugin development, and ecommerce builds with WooCommerce. Our team works with the Gutenberg editor, Elementor, and WPBakery to deliver functional, user-friendly websites.",
    icon: <BagIcon/>,
    isActive: true
  },
  {
    id: 3,
    title: "Shopify Development",
    description: "We deliver complete Shopify store development services, from Shopify theme customization to Shopify app integration. Our expertise includes Shopify Liquid, dropshipping setup, and subscription ecommerce models. Certified Shopify Partner status (if applicable) ensures your store meets the highest standards.",
    icon: <BagIcon/>,
    isActive: false
  }
];

export { landingPageBannerData, developmentCardsData, webDevelopmentServicesData, stepSectionData };

// app/Data/caseStudies.js
export const caseStudiesData = [
  {
    id: "cs-1",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/1.png",
    bg: "#C6AAEE",
    href: "/case-studies/munchiz"
  },
  {
    id: "cs-2",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/2.png",
    bg: "#333333",
    href: "/case-studies/munchiz-burger"
  },
  {
    id: "cs-3",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/3.png",
    bg: "#FF4E00",
    href: "/case-studies/travel-hero"
  },
  {
    id: "cs-4",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/4.png",
    bg: "#B7A163",
    href: "/case-studies/real-estate"
  },
  {
    id: "cs-5",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/5.png",
    bg: "#FFC813",
    href: "/case-studies/rankon"
  },
  {
    id: "cs-6",
    title: "Munchiz",
    tag: "Health",
    desc:
      "Open partnered with us to revamp their app with a fresh design and key performance improvements, creating a smoother and more modern user experience.",
    image: "/assets/images/work/6.png",
    bg: "#185AE9",
    href: "/case-studies/creative-lab"
  }
];


export const landingPageScrollSectionData = {
  sectionClass: "scroller-section gray-section",
  heading: "What Makes Us the Right Web Development Firm",
  description:
    "A strong web development firm does more than deliver code. It understands your goals, maintains clear communication, and builds solutions designed to produce measurable results. At Website Digitals, we combine certified expertise with proven processes to complete every project on time, within budget, and ready to perform. Here’s what makes our approach stand out.",
  items: [
    {
      id: "web-firstScroller",
      step: 1,
      title: "Real-Time Communication",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Working with US-based developers ensures direct and real-time collaboration without time zone delays or communication gaps. We understand the standards of United States business credibility and keep projects moving smoothly from kickoff to delivery."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/1.png",
        alt: "Innovative Strategies That Deliver",
        width: 669,
        height: 376
      }
    },
    {
      id: "web-secondScroller",
      step: 2,
      title: "Results-Driven Approach",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our results-driven approach focuses on achieving measurable outcomes. We set clear goals and track progress to ensure your marketing campaigns are effective and provide a strong ROI."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/2.png",
        alt: "Results-Driven Approach",
        width: 669,
        height: 376
      }
    },
    {
      id: "web-thirdScroller",
      step: 3,
      title: "Expert Team of Professionals",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "Our team consists of industry professionals with years of experience in digital marketing. We stay updated with the latest trends and technologies to provide the best services."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/3.png",
        alt: "Expert Team of Professionals",
        width: 669,
        height: 376
      }
    },
    {
      id: "web-forthScroller",
      step: 4,
      title: "Customized Client Solutions",
      icon: "/assets/images/work/pen-tool.svg",
      paragraphs: [
        "We understand that every business is unique. That’s why we offer bespoke solutions tailored to your specific needs and goals. Our personalized approach ensures you get the best of digital marketing services for USA."
      ],
      image: {
        src: "/assets/images/scroller/digital-marketing/4.png",
        alt: "Customized Client Solutions",
        width: 669,
        height: 376
      }
    }
  ],
  cta: null
};

export const stepSectionData = {
  title: "5 Steps to launch your project",
  steps: [
    {
      id: 1,
      number: "01",
      title: "Discovery & Planning",
      description: "We begin by defining your website goals and understanding your target audience. This stage includes competitor research to identify opportunities and set benchmarks. The outcome is a detailed project plan that guides every decision moving forward.",
      image: "/assets/images/work/step1.png",
      alignment: "right"
    },
    {
      id: 2,
      number: "02", 
      title: "Design & Prototyping",
      description: "Our design team creates UX/UI design concepts that focus on both aesthetics and usability. We produce responsive layouts to ensure your website looks and functions seamlessly across all devices. Before development begins, you'll see interactive prototypes that bring your vision to life.",
      image: "/assets/images/work/step2.png",
      alignment: "left"
    },
    {
      id: 3,
      number: "03",
      title: "Development & Integration", 
      description: "Once designs are approved, our developers bring them to life with clean, efficient code. This phase includes API integration for third-party services, database setup, and any required custom features. The result is a fully functional platform tailored to your specifications.",
      image: "/assets/images/work/step3.png",
      alignment: "right"
    },
    {
      id: 4,
      number: "04",
      title: "Testing & Launch",
      description: "Before going live, we conduct thorough QA testing to identify and fix any issues. This includes performance checks to ensure fast load times, mobile responsiveness, and browser compatibility. Once testing is complete, we coordinate a smooth, secure launch.",
      image: "/assets/images/work/step4.png", 
      alignment: "left"
    },
    {
      id: 5,
      number: "05",
      title: "Ongoing Support & Optimization",
      description: "Our relationship doesn't end at launch. We provide site maintenance to keep your website secure, along with regular SEO updates to maintain and improve search rankings. Ongoing performance monitoring ensures your site continues to meet growing user and business needs.",
      image: "/assets/images/work/step5.png",
      alignment: "right"
    }
  ]
};