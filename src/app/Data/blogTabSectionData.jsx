// /data/blog/index.js

export const blogTabs = [
    { id: "all",          label: "All" },
    { id: "web-builder",  label: "Web Builder" },
    { id: "web-dev",      label: "Web Development" },
    { id: "web-design",   label: "Web Design" },
  ];
  
  const webBuilder = [
    {
      id: "wb-1",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Small business maintenance",
      category: "Website Builder",
      title: "Top Reasons Why Small Business Website Maintenance Matters",
      excerpt: "Missed updates cost traffic and trust. Here’s how to stay ahead…",
      link: "/blog/top-reasons-why-maintenance-matters",
      external: false,
    },
    {
      id: "wb-2",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Trends",
      category: "Website Builder",
      title: "10 Key Trends in Small Business Website Design",
      excerpt: "What’s working right now for speed, UX, and conversions.",
      link: "/blog/10-key-trends",
      external: false,
    },
    {
      id: "wb-3",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Choose designer",
      category: "Website Builder",
      title: "How to Choose the Right Website Designer",
      excerpt: "A practical checklist to compare vendors and avoid common pitfalls.",
      link: "/blog/choose-right-designer",
      external: false,
    },
    {
      id: "wb-4",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Management",
      category: "Website Builder",
      title: "Website Management for Strategy Success",
      excerpt: "Governance, security, and performance as a competitive edge.",
      link: "/blog/website-management-strategy-success",
      external: false,
    },
  ];
  
  const webDev = [
    {
      id: "wdv-1",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Stacks",
      category: "Web Development",
      title: "Choosing the Right Stack for Your MVP",
      excerpt: "Speed vs. scalability: where to compromise and where not to.",
      link: "/blog/right-stack-for-mvp",
      external: false,
    },
    {
      id: "wdv-2",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "APIs",
      category: "Web Development",
      title: "API Design That Survives Version 2.0",
      excerpt: "Contracts, pagination, and the deprecation playbook.",
      link: "/blog/api-design-that-lasts",
      external: false,
    },
    {
      id: "wdv-3",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "DevOps",
      category: "Web Development",
      title: "DevOps for Small Teams",
      excerpt: "CI/CD, rollbacks, and observability without enterprise overhead.",
      link: "/blog/devops-small-teams",
      external: false,
    },
    {
      id: "wdv-4",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Security",
      category: "Web Development",
      title: "Baselines for Web App Security in 2025",
      excerpt: "OWASP basics, rate limits, and secrets hygiene made simple.",
      link: "/blog/web-app-security-2025",
      external: false,
    },
  ];
  
  const webDesign = [
    {
      id: "wds-1",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "CRO",
      category: "Web Design",
      title: "Designing for Conversion: Above-the-Fold That Works",
      excerpt: "Hero, social proof, and CTA hierarchy that moves the needle.",
      link: "/blog/designing-for-conversion",
      external: false,
    },
    {
      id: "wds-2",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Accessibility",
      category: "Web Design",
      title: "Accessibility Wins That Also Boost SEO",
      excerpt: "Color contrast, focus states, and semantic structure.",
      link: "/blog/accessibility-seo-wins",
      external: false,
    },
    {
      id: "wds-3",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Brand",
      category: "Web Design",
      title: "Design Systems for Growing Brands",
      excerpt: "Tokens, components, and governance for consistency at scale.",
      link: "/blog/design-systems-growing-brands",
      external: false,
    },
    {
      id: "wds-4",
      imgSrc: "https://www.websitedigitals.com/blog/wp-content/uploads/2025/05/How-to-Choose-the-Right-Small-Business-Website-Designers-for-Your-Brand.webp",
      imgAlt: "Performance",
      category: "Web Design",
      title: "Speed Without Sacrificing Aesthetics",
      excerpt: "How to keep LCP low while staying on-brand.",
      link: "/blog/speed-without-sacrificing-aesthetics",
      external: false,
    },
  ];
  
  export const postsByTab = {
    "web-builder": webBuilder,
    "web-dev": webDev,
    "web-design": webDesign,
  };
  
  // build/refresh the "all" tab automatically (unique by id)
  const uniq = new Map();
  Object.entries(postsByTab).forEach(([key, arr]) => {
    if (key === "all") return;
    arr.forEach((p) => uniq.set(p.id, p));
  });
  postsByTab.all = Array.from(uniq.values());
  


  export const blogBannerData = {
    breadcrumb: {
      home: { label: "Home", href: "/" },
      current: { label: "Blogs", href: "/blogs" },
    },
    heading: "Explore Our Latest Blog",
    description: ["",
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

  export { blogBannerData };