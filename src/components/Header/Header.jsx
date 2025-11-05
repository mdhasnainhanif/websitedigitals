"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import styles from "./Header.module.css";
import {
  CrossIcon,
  EmailIcon,
  FacebookIcon,
  HamburgerIcon,
  InstagramIcon,
  LinkedinIcon,
  LocationIcon,
  PhoneIcon,
  RoundLeftIcon,
  RoundRightIcon,
} from "../../icons";
import Image from "next/image";


export default function Header() {
  const router = useRouter();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileLevel1, setMobileLevel1] = useState(null);
  const [mobileInner, setMobileInner] = useState(null);
  const [activeIndustryTab, setActiveIndustryTab] = useState(0);
  useEffect(() => {
    const handleScroll = () => {
      const header = document.querySelector("header");
      if (window.scrollY > 50) {
        header?.classList.add("fixed-header");
      } else {
        header?.classList.remove("fixed-header");
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const industryData = [
    {
      name: "Construction and Real Estate",
      services: [
        "Real Estate",
        "Construction Company",
        "Interior Designers",
        "Property Management",
        "Architecture Firms",
      ],
    },
    {
      name: "Technology",
      services: [
        "Software Development",
        "IT Services",
        "Tech Startups",
        "SaaS Companies",
        "Tech Consulting",
      ],
    },
    {
      name: "Legal Services",
      services: [
        "Law Firms",
        "Legal Consulting",
        "Patent Attorneys",
        "Corporate Law",
        "Personal Injury Law",
      ],
    },
    {
      name: "Small Business",
      services: [
        "Local Services",
        "Retail Stores",
        "Restaurants",
        "Consulting",
        "Professional Services",
      ],
    },
    {
      name: "Services",
      services: [
        "Marketing Agencies",
        "Consulting Firms",
        "Professional Services",
        "Freelance Services",
        "Business Services",
      ],
    },
    {
      name: "Medical and Healthcare",
      services: [
        "Medical Practices",
        "Dental Clinics",
        "Hospitals",
        "Mental Health",
        "Healthcare Technology",
      ],
    },
    {
      name: "Leisure and Entertainment",
      services: [
        "Entertainment Venues",
        "Sports Clubs",
        "Event Planning",
        "Travel Agencies",
        "Recreation Centers",
      ],
    },
    {
      name: "Business and Finance",
      services: [
        "Financial Services",
        "Accounting Firms",
        "Investment Companies",
        "Insurance Agencies",
        "Banking",
      ],
    },
  ];

  const go = (href) => (e) => {
    e.preventDefault();
    if (!href) return;

    if (href.startsWith("http")) {
      window.location.href = href;
    } else {
      router.push(href);
    }
  };

  return (
    <>
      <div
        className={`${styles.top_header} bg-black text-white py-2 d-none d-md-block`}
      >
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className={`${styles.contactInfo}`}>
                  <a
                    className="text-decoration-none text-light"
                    href="tel:(646)-222-3598"
                  >
                    <PhoneIcon /> (646)-222-3598
                  </a>
                </div>
                <div className={`${styles.contactInfo}`}>
                  <LocationIcon />
                  <span>
                    175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY
                    11201
                  </span>
                </div>
                <div className={`${styles.contactInfo}`}>
                  <a
                    className="text-decoration-none text-light"
                    href="mailto:info@websitedigitals.com"
                  >
                    <EmailIcon /> info@websitedigitals.com
                  </a>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-4">
              <div className="d-flex justify-content-end align-items-center gap-3">
                <div className={`${styles.header_social} ms-3`}>
                  <a
                    href="https://websitedigitals.com/website-builder/login"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Login
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <header className={`${styles.new_header} d-none d-sm-block `}
        id="main-header"
      >
        <nav className="p-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-2">
                <Link className={styles.navbar_brand} href="/">
                  <Image
                    loading="lazy"
                    src="/assets/images-webp/website-digitals.webp"
                    alt="Website Digitals"
                    width={200}
                    height={56}
                  />
                </Link>
              </div>
              <div className="col-md-8">
                <ul
                  className={`${styles.new_header_links} ${styles.navbar_nav} py-0 mb-0`}
                >
                  <li className={`${styles.nav_item}`}>
                    <Link
                      className={styles.nav_link}
                      aria-current="page"
                      href="/"
                    >
                      Home
                    </Link>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/web-development")}
                    >
                      Web Development
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop2} ${styles.webBuilderDrop3}`}
                    >
                      <li className={`${styles.w_100} p-0`}>
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/10.webp",
                                    title: "Ecommerce Development",
                                    desc: "Build impactful online stores that drive sales and growth.",
                                    href: "/web-development/ecommerce-development-company",
                                  },
                                  {
                                    img: "/assets/images/menu/11.webp",
                                    title: "Wordpress Development",
                                    desc: "Custom wordpress sites tailored to your business needs.",
                                    href: "/web-development/wordpress-development-company",
                                  },
                                  {
                                    img: "/assets/images/menu/12.webp",
                                    title: "Shopify Development",
                                    desc: "Top-notch Shopify solutions to launch and scale your store.",
                                    href: "/web-development/shopify-development-services",
                                  },
                                  {
                                    img: "/assets/images/menu/13.webp",
                                    title: "Wix Development",
                                    desc: "Easy-to-manage Wix websites designed for impact.",
                                    href: "/web-development/wix-development-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"
                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/14.webp",
                                    title: "Squarespace Development",
                                    desc: "Elegant Squarespace design for modern business.",
                                    href: "/web-development/squarespace-development-services",
                                  },
                                  {
                                    img: "/assets/images/menu/15.webp",
                                    title: "CMS Development",
                                    desc: "Smart CMS solutions to simplify content management.",
                                    href: "/web-development/cms-development-company",
                                  },
                                  {
                                    img: "/assets/images/menu/16.webp",
                                    title: "Web Portal Development",
                                    desc: "Secure, scalable portals for business and communities.",
                                    href: "/web-development/web-portal-development-company",
                                  },
                                  {
                                    img: "/assets/images/menu/17.webp",
                                    title: "Web Application Development",
                                    desc: "Ineractive and custom web apps built to perform.",
                                    href: "/web-development/web-application-development-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"
                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/18.webp",
                                    title: "Web Speed Optimization",
                                    desc: "Faster load times, better experience, and higher conversion.",
                                    href: "/web-development/website-speed-optimization-services",
                                  },
                                  {
                                    img: "/assets/images/menu/19.png",
                                    title: "Web Maintenance",
                                    desc: "Keep your website secure , updated, and error-free.",
                                    href: "/web-development/website-maintenance-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"
                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/web-design")}
                    >
                      Web Design
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop2} ${styles.webBuilderDrop3}`}
                    >
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/1.png",
                                    title: "Landing Page Design",
                                    desc: "High-converting landing pages that capture leads.",
                                    href: "/web-design/landing-page-design-services",

                                  },
                                  {
                                    img: "/assets/images/menu/2.png",
                                    title: "Responsive Web Design",
                                    desc: "Smooth browsing across every device and screen size.",

                                    href: "/web-design/responsive-web-design-services",
                                  },
                                  {
                                    img: "/assets/images/menu/3.png",
                                    title: "Website Redesign",
                                    desc: "Refresh your website for modern appeal and performance.",
                                    href: "/web-design/website-redesign-services",
                                  },
                                  {
                                    img: "/assets/images/menu/4.png",
                                    title: "B2B Web Design",
                                    desc: "Professional B2B designs that build trust and authority.",
                                    href: "/web-design/b2b-web-design-agency",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"
                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/5.png",
                                    title: "Custom Web Design",
                                    desc: "Unique and tailor-made designs aligned with your brand.",
                                    href: "/web-design/custom-web-design-agency",
                                  },
                                  {
                                    img: "/assets/images/menu/6.png",
                                    title: "Amazon Store Setup",
                                    desc: "Optimized Amazon stores to boost your eCommerce success.",
                                    href: "/web-design/amazon-store-design-services",
                                  },
                                  {
                                    img: "/assets/images/menu/7.png",
                                    title: "Logo Design",
                                    desc: "Creative logos that define and enhance your brand identity.",
                                    href: "/web-design/custom-logo-design-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"
                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/8.png",
                                    title: "Video Animation",
                                    desc: "Compelling animations to tell your story with impact.",
                                    href: "/web-design/video-animation-services",
                                  },
                                  {
                                    img: "/assets/images/menu/9.png",
                                    title: "Graphic Design",
                                    desc: "Visual designs that engage and communicate effectively.",
                                    href: "/web-design/custom-graphic-design-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/digital-marketing-company")}
                    >
                      Digital Marketing
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop4}`}
                    >
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/20.webp",
                                    title: "Search Engine Optimization (SEO",
                                    desc: "Climb search rankings and attract the right audience.",
                                    href: "/digital-marketing-company/search-engine-optimization-agency",
                                  },
                                  {
                                    img: "/assets/images/menu/21.webp",
                                    title: "Pay Per Click (PPC",
                                    desc: "Targeted ads that deliver measurable ROI.",
                                    href: "/digital-marketing-company/pay-per-click-agency",
                                  },
                                  {
                                    img: "/assets/images/menu/22.webp",
                                    title: "Social Media Marketing",
                                    desc: "Engage, grow, and convert through social channels.",
                                    href: "/digital-marketing-company/social-media-marketing-agency",
                                  },
                                  {
                                    img: "/assets/images/menu/23.webp",
                                    title: "Digital PR",
                                    desc: "Build authority and visibility with impactful PR campaigns.",
                                    href: "/digital-marketing-company/digital-pr-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/24.webp",
                                    title: "Content Writing",
                                    desc: "Engaging content that speaks to your audience.",
                                    href: "/digital-marketing-company/content-writing-services",
                                  },
                                  {
                                    img: "/assets/images/menu/25.webp",
                                    title: "Content Marketing",
                                    desc: "Valuable content strategies that drive traffic and trust.",
                                    href: "/digital-marketing-company/content-marketing-services",
                                  },
                                  {
                                    img: "/assets/images/menu/26.webp",
                                    title: "Guest Post/Outreach",
                                    desc: "Expand reach with strategic guest posting and outreach.",
                                    href: "/digital-marketing-company/guest-posting-services",
                                  },
                                  {
                                    img: "/assets/images/menu/27.webp",
                                    title: "Link Building",
                                    desc: "High-quality backlinks to strengthen your SEO.",
                                    href: "/digital-marketing-company/link-building-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-4 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/28.webp",
                                    title: "Local SEO",
                                    desc: "Dominate local searches and grow neighborhood visibility.",
                                    href: "/digital-marketing-company/local-seo-services",
                                  },
                                  {
                                    img: "/assets/images/menu/29.webp",
                                    title: "Online Reputation Management",
                                    desc: "Protect and enhance your brand’s online presence.",
                                    href: "/digital-marketing-company/online-reputation-management-services",
                                  },
                                  {
                                    img: "/assets/images/menu/30.webp",
                                    title: "App Store Optimization",
                                    desc: "Get your app discovered and downloaded more often.",
                                    href: "/digital-marketing-company/app-store-optimization-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/website-hosting-services")}
                    >
                      Web Hosting
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop9}`}
                    >
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-6 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/030.webp",
                                    title: "Shared Hosting",
                                    desc: "Affordable hosting with reliable performance for small sites.",
                                    href: "/website-hosting-services/shared-web-hosting-services",
                                  },
                                  {
                                    img: "/assets/images/menu/31.webp",
                                    title: "VPS Hosting",
                                    desc: "Flexibility and control with powerful VPS hosting.",
                                    href: "/website-hosting-services/vps-hosting-services",
                                  },
                                  {
                                    img: "/assets/images/menu/32.webp",
                                    title: "Dedicated Hosting",
                                    desc: "Enterprise-level hosting with maximum resources",
                                    href: "/website-hosting-services/dedicated-hosting-service",
                                  },
                                  {
                                    img: "/assets/images/menu/33.webp",
                                    title: "Cloud Hosting",
                                    desc: "Scalable cloud hosting built for speed and reliability.",
                                    href: "/website-hosting-services/cloud-hosting-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-6 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/34.webp",
                                    title: "Managed Hosting",
                                    desc: "Worry-free hosting with complete expert management.",
                                    href: "/website-hosting-services/managed-hosting-services",
                                  },
                                  {
                                    img: "/assets/images/menu/35.webp",
                                    title: "Reseller Hosting",
                                    desc: "Grow your business with flexible reseller hosting plans.",
                                    href: "/website-hosting-services/reseller-hosting-services",
                                  },
                                  {
                                    img: "/assets/images/menu/36.webp",
                                    title: "Domain Registration",
                                    desc: "Secure the perfect domain for your brand identity.",
                                    href: "/website-hosting-services/domain-registration-services",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href || "#"}
                                  >
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                        <p className={styles.desc1}>
                                          {item.desc}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/web-builder")}
                    >
                      Web Builder
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop7}`}
                    >
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row">
                            <div className="col-md-3">
                              <div
                                className={`${styles.bgLight} p-0 py-4 ps-3`}
                              >
                                <p
                                  className={`${styles.megamenu_heading} ${styles.iconNone} text-primary`}
                                >

                                  Industries
                                </p>
                                <div
                                  className={`nav nav-pills me-3 ${styles.navDropTabs}`}
                                  role="tablist"
                                  aria-orientation="vertical"
                                >
                                  {industryData.map((industry, idx) => (
                                    <button
                                      key={idx}
                                      className={`${styles.nav_link} ${idx === activeIndustryTab
                                        ? "active"
                                        : ""
                                        }`}
                                      onClick={(e) => {
                                        e.preventDefault();
                                        setActiveIndustryTab(idx);
                                      }}
                                      type="button"
                                    >
                                      {industry.name}
                                    </button>
                                  ))}
                                </div>
                              </div>
                            </div>
                            <div className="col-md-9">
                              <div className="ps-4 py-4">
                                <div
                                  className={`tab-content ${styles.navDropContent}`}
                                >
                                  {industryData.map((industry, idx) => (
                                    <div
                                      key={idx}
                                      className={`tab-pane ${idx === activeIndustryTab
                                        ? "active"
                                        : ""
                                        }`}
                                      style={{
                                        display:
                                          idx === activeIndustryTab
                                            ? "block"
                                            : "none",
                                      }}
                                    >
                                      <p className="text_primary fw-bold h6">
                                        {industry.name}
                                      </p>
                                      <ul className={styles.ulcustom_megamenu}>
                                        {industry.services.map(
                                          (service, serviceIdx) => (
                                            <li key={serviceIdx}>
                                              <a
                                                className={styles.dropdown_item}
                                                href="#"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                              >
                                                {service}
                                              </a>
                                            </li>
                                          )
                                        )}
                                      </ul>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a
                      className={`${styles.nav_link} dropdown-toggle`}
                      href="#"
                      role="button"
                      aria-expanded="false"
                      onClick={go("/")}
                    >
                      Insight
                    </a>
                    <ul
                      className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop10}`}
                    >
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-12 p-0">
                              <div
                                className={`${styles.vertical_bordersperator} ${styles.p04}`}
                              >
                                {[
                                  {
                                    img: "/assets/images/menu/036.webp",
                                    title: "About Us",
                                    href: "/about",
                                  },
                                  {
                                    img: "/assets/images/menu/37.webp",
                                    title: "Webfolio",
                                    href: "/portfolio",
                                  },
                                  {
                                    img: "/assets/images/menu/38.webp",
                                    title: "Blog",
                                    href: "/blogs",
                                  },
                                ].map((item, i) => (
                                  <Link
                                    key={i}
                                    className={`${styles.nav_link} ${styles.padding_left}`}
                                    href={item.href}
                                  >
                                    <div
                                      className={`${styles.menu_icon1_wrapper} ${styles.menu_icon1_wrapper}2`}
                                    >
                                      <div className={styles.menu_icon1}>
                                        <Image
                                          src={item.img}
                                          alt="Logo"

                                          loading="lazy"
                                          width={50}
                                          height={50}
                                        />
                                      </div>
                                      <div className={styles.menu_content1}>
                                        <p className={styles.menu_title}>
                                          {item.title}
                                        </p>
                                      </div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                          </div>
                        </div>
                      </li>
                    </ul>
                  </li>
                </ul>
              </div>
              <div className="col-md-2 text-end">
                <div className="link-area pt-1 contact-btn">
                  <a
                    href="/contact"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="primary btn_black"
                  >
                    Contact Us
                  </a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>
      <header className={`${styles.mobile_header} d-block d-sm-none`}>
        <div className="logo">
          <Link href="/">
            <Image
              src="/assets/images-webp/website-digitals.webp"
              alt="Logo"
              className="logo-img"
              width={50}
              height={50}
            />
          </Link>
        </div>
        <button
          id="menu-toggle"
          className={styles.menu_toggle}
          aria-label="Open menu"
          onClick={() => {
            setMobileOpen(true);
            setMobileLevel1(null);
            setMobileInner(null);
          }}
        >
          <HamburgerIcon />
        </button>
        <nav
          id="mobile-menu"
          className={`${styles.mobile_menu} ${mobileOpen ? "open" : ""}`}
          aria-hidden={!mobileOpen}
        >
          <div className={styles.inner_logo_close}>
            <Image
              src="/assets/images-webp/website-digitals.webp"
              alt="Logo"
              className="logo-img"
              width={200}
              height={56}
            />
            <button
              id="close-menu"
              className={`${styles.close_menu} filterInvert ${mobileOpen ? "close-menu" : ""
                }`}
              aria-label="Close menu"
              onClick={() => setMobileOpen(false)}
            >
              <CrossIcon />
            </button>
          </div>
          {!mobileLevel1 && (
            <ul>
              <li>
                <a href="/" target="_blank" rel="noopener noreferrer">
                  Home
                </a>
              </li>
              {[
                { key: "web-dev", label: "Web Development" },
                { key: "web-design", label: "Web Design" },
                { key: "digital-marketing", label: "Digital Marketing" },
                { key: "web-hosting", label: "Web Hosting" },
                { key: "web-builder", label: "Web builder" },
                { key: "insight", label: "Insight" },
              ].map((item) => (
                <li key={item.key}>
                  <a
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setMobileLevel1(item.key);
                    }}
                  >
                    <div>{item.label}</div>
                    <RoundRightIcon />
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://websitedigitals.com/website-builder/login"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Login
                </a>
              </li>
              <li>
                <a href="tel:(646)-222-3598">
                  <PhoneIcon /> (646)-222-3598
                </a>
              </li>
              <li>
                <a href="mailto:info@websitedigitals.com">
                  <EmailIcon />
                  info@websitedigitals.com
                </a>
              </li>
            </ul>
          )}
          {mobileLevel1 && !mobileInner && (
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileLevel1(null);
                  }}
                >
                  <RoundLeftIcon />
                  &emsp;Back
                </a>
              </li>
              {mobileLevel1 === "web-dev" &&
                [
                  {
                    img: "/assets/images/menu/10.webp",
                    label: "Landing Page Design",
                  },
                  {
                    img: "/assets/images/menu/11.webp",
                    label: "Responsive Web Design",
                  },
                  {
                    img: "/assets/images/menu/12.webp",
                    label: "Website Redesign",
                  },
                  {
                    img: "/assets/images/menu/13.webp",
                    label: "B2B Web Design",
                  },
                  {
                    img: "/assets/images/menu/14.webp",
                    label: "Custom Web Design",
                  },
                  {
                    img: "/assets/images/menu/15.webp",
                    label: "Amazon Store Setup",
                  },
                  { img: "/assets/images/menu/16.webp", label: "Logo Design" },
                  {
                    img: "/assets/images/menu/17.webp",
                    label: "Video Animation",
                  },
                  {
                    img: "/assets/images/menu/18.webp",
                    label: "Graphic Design",
                  },
                ].map((it, i) => (
                  <li key={i}>
                    <a href="#">
                      <Image
                        src={it.img}
                        alt="Logo"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                      {it.label}
                    </a>
                  </li>
                ))}
              {mobileLevel1 === "web-design" &&
                [
                  {
                    img: "/assets/images/menu/1.png",
                    label: "Landing Page Design",
                  },
                  {
                    img: "/assets/images/menu/2.png",
                    label: "Responsive Web Design",
                  },
                  {
                    img: "/assets/images/menu/3.png",
                    label: "Website Redesign",
                  },
                  { img: "/assets/images/menu/4.png", label: "B2B Web Design" },
                  {
                    img: "/assets/images/menu/5.png",
                    label: "Custom Web Design",
                  },
                  {
                    img: "/assets/images/menu/6.png",
                    label: "Amazon Store Setup",
                  },
                  { img: "/assets/images/menu/7.png", label: "Logo Design" },
                  {
                    img: "/assets/images/menu/8.png",
                    label: "Video Animation",
                  },
                  { img: "/assets/images/menu/9.png", label: "Graphic Design" },
                ].map((it, i) => (
                  <li key={i}>
                    <a href="#">
                      <Image
                        src={it.img}
                        alt="Logo"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                      {it.label}
                    </a>
                  </li>
                ))}

              {mobileLevel1 === "digital-marketing" &&
                [
                  {
                    img: "/assets/images/menu/20.webp",
                    label: "Search Engine Optimization (SEO",
                  },
                  {
                    img: "/assets/images/menu/21.webp",
                    label: "Pay Per Click (PPC",
                  },
                  {
                    img: "/assets/images/menu/23.webp",
                    label: "Social Media Marketing",
                  },
                  { img: "/assets/images/menu/24.webp", label: "Digital PR" },
                  {
                    img: "/assets/images/menu/25.webp",
                    label: "Content Writing",
                  },
                  {
                    img: "/assets/images/menu/26.webp",
                    label: "Content Marketing",
                  },
                  {
                    img: "/assets/images/menu/27.webp",
                    label: "Guest Post/Outreach",
                  },
                  {
                    img: "/assets/images/menu/28.webp",
                    label: "Link Building",
                  },
                  { img: "/assets/images/menu/29.webp", label: "Local SEO" },
                  {
                    img: "/assets/images/menu/30.webp",
                    label: "Online Reputation Management",
                  },
                  {
                    img: "/assets/images/menu/30.webp",
                    label: "App Store Optimization",
                  },
                ].map((it, i) => (
                  <li key={i}>
                    <a href="#">
                      <Image
                        src={it.img}
                        alt="Logo"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                      {it.label}
                    </a>
                  </li>
                ))}
              {mobileLevel1 === "web-hosting" &&
                [
                  {
                    img: "/assets/images/menu/030.webp",
                    label: "Shared Hosting",
                  },
                  { img: "/assets/images/menu/31.webp", label: "VPS Hosting" },
                  {
                    img: "/assets/images/menu/32.webp",
                    label: "Dedicated Hosting",
                  },
                  {
                    img: "/assets/images/menu/33.webp",
                    label: "Cloud Hosting",
                  },
                  {
                    img: "/assets/images/menu/34.webp",
                    label: "Managed Hosting",
                  },
                  {
                    img: "/assets/images/menu/35.webp",
                    label: "Reseller Hosting",
                  },
                  {
                    img: "/assets/images/menu/36.webp",
                    label: "Domain Registeration",
                  },
                ].map((it, i) => (
                  <li key={i}>
                    <a href="#">
                      <Image
                        src={it.img}
                        alt="Logo"
                        loading="lazy"
                        width={50}
                        height={50}
                      />
                      {it.label}
                    </a>
                  </li>
                ))}
              {mobileLevel1 === "web-builder" && (
                <>
                  {[
                    "Services",
                    "Technology",
                    "Resource",
                    "Industries",
                    "Location",
                  ].map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileInner(label);
                        }}
                      >
                        {label}
                        <RoundRightIcon />
                      </a>
                    </li>
                  ))}
                </>
              )}
              {mobileLevel1 === "insight" && (
                <>
                  {[
                    "Services",
                    "Technology",
                    "Resource",
                    "Industries",
                    "Location",
                  ].map((label) => (
                    <li key={label}>
                      <a
                        href="#"
                        onClick={(e) => {
                          e.preventDefault();
                          setMobileInner(label);
                        }}
                      >
                        {label}
                        <RoundRightIcon />
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          )}
          {mobileInner && (
            <ul>
              <li>
                <a
                  href="#"
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileInner(null);
                  }}
                >
                  <RoundLeftIcon />
                  &emsp;Back
                </a>
              </li>
              {mobileInner === "Services" &&
                [
                  "eCommerce",
                  "Portal",
                  "B2B",
                  "Consulting",
                  "Startup",
                  "CMS Development",
                  "Web Support",
                ].map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              {mobileInner === "Technology" &&
                [
                  "PHP",
                  "Drupal",
                  "WordPress",
                  "Python",
                  "React",
                  "Javascript",
                  "Node JS",
                ].map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              {mobileInner === "Resource" &&
                [
                  "Hire PHP Developer",
                  "Hire WordPress Developer",
                  "Hire Java Developer",
                  "Hire AngularJS Developer",
                ].map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              {mobileInner === "Industries" &&
                ["Healthcare", "Real Estate", "Fintech"].map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
              {mobileInner === "Location" &&
                [
                  "Los Angeles",
                  "Chicago",
                  "Houston",
                  "Dallas",
                  "Miami",
                  "Atlanta",
                  "Philadelphia",
                  "Washington DC",
                  "Dubai",
                  "Qatar",
                  "Oman",
                  "Bahrain",
                  "Saudia Arabia",
                ].map((l) => (
                  <li key={l}>
                    <a href="#">{l}</a>
                  </li>
                ))}
            </ul>
          )}
          <div className={`${styles.header_social} d-block ps-3 mt-2`}>
            <a
              className="h5"
              href="https://www.facebook.com/webdigitals/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FacebookIcon />
            </a>
            <a
              className="h5"
              href="https://www.instagram.com/website_digitals/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <InstagramIcon />
            </a>
            <a
              className="h5"
              href="https://www.linkedin.com/company/website-digitals"
              target="_blank"
              rel="noopener noreferrer"
            >
              <LinkedinIcon />
            </a>
          </div>
        </nav>
      </header>
    </>
  );
}