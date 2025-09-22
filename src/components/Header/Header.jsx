'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import styles from './Header.module.css'
import { CrossIcon, EmailIcon, HamburgerIcon, LocationIcon, PhoneIcon, RoundLeftIcon, RoundRightIcon } from '../../icons'

/**
 * Converted from provided HTML to JSX for Next.js
 * - Replaced class -> className
 * - Added rel="noopener noreferrer" to target="_blank" links
 * - Converted inline onclick -> onClick handlers
 * - Collapsed repeated IDs in mobile menu; now handled by state
 * - Kept Bootstrap utility classes; ensure Bootstrap CSS/JS is loaded globally
 */

export default function Header() {
  const router = useRouter()

  // Mobile menu + nested submenu state
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileLevel1, setMobileLevel1] = useState(null) // e.g., 'web-dev', 'web-design', 'digital-marketing', 'web-hosting', 'web-builder', 'insight'
  const [mobileInner, setMobileInner] = useState(null)   // nested inside Web Builder / Insight
  
  // Web Builder tab state
  const [activeIndustryTab, setActiveIndustryTab] = useState(0)

  // Industry data for Web Builder tabs
  const industryData = [
    {
      name: 'Construction and Real Estate',
      services: ['Real Estate', 'Construction Company', 'Interior Designers', 'Property Management', 'Architecture Firms']
    },
    {
      name: 'Technology',
      services: ['Software Development', 'IT Services', 'Tech Startups', 'SaaS Companies', 'Tech Consulting']
    },
    {
      name: 'Legal Services',
      services: ['Law Firms', 'Legal Consulting', 'Patent Attorneys', 'Corporate Law', 'Personal Injury Law']
    },
    {
      name: 'Small Business',
      services: ['Local Services', 'Retail Stores', 'Restaurants', 'Consulting', 'Professional Services']
    },
    {
      name: 'Services',
      services: ['Marketing Agencies', 'Consulting Firms', 'Professional Services', 'Freelance Services', 'Business Services']
    },
    {
      name: 'Medical and Healthcare',
      services: ['Medical Practices', 'Dental Clinics', 'Hospitals', 'Mental Health', 'Healthcare Technology']
    },
    {
      name: 'Leisure and Entertainment',
      services: ['Entertainment Venues', 'Sports Clubs', 'Event Planning', 'Travel Agencies', 'Recreation Centers']
    },
    {
      name: 'Business and Finance',
      services: ['Financial Services', 'Accounting Firms', 'Investment Companies', 'Insurance Agencies', 'Banking']
    }
  ]

  const go = (href) => (e) => {
    e.preventDefault()
    if (!href) return
    // For internal routes prefer router; external can use location
    if (href.startsWith('http')) {
      window.location.href = href
    } else {
      router.push(href)
    }
  }

  return (
    <>
      {/* Top Header */}
      <div className={`${styles.top_header} bg-black text-white py-2 d-none d-md-block`}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-9 col-md-8">
              <div className="d-flex flex-wrap align-items-center gap-4">
                <div className={`${styles.contactInfo}`}>
                  <a className='text-decoration-none text-light' href="tel:(646)-222-3598"><PhoneIcon/> (646)-222-3598</a>
                </div>
                <div className={`${styles.contactInfo}`}>
                  <LocationIcon/> 
                  <span>175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201</span>
                </div>
                <div className={`${styles.contactInfo}`}>
                  <a className='text-decoration-none text-light' href="mailto:info@websitedigitals.com"><EmailIcon/> info@websitedigitals.com</a>
                </div>
              </div>
            </div>

            {/* Right Side - Login */}
            <div className="col-lg-3 col-md-4">
              <div className="d-flex justify-content-end align-items-center gap-3">
                <div className={`${styles.header_social} ms-3`}>
                  <a href="https://websitedigitals.com/website-builder/login" target="_blank" rel="noopener noreferrer">Login</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Header */}
      <header className={`${styles.new_header} d-none d-sm-block`} id="main-header">
        <nav className="p-0">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-md-3">
                <Link className={styles.navbar_brand} href="/">
                  <img loading="lazy" src="/assets/images-webp/website-digitals.webp" alt="Website Digitals" />
                </Link>
              </div>

              <div className="col-md-7">
                <ul className={`${styles.new_header_links} ${styles.navbar_nav} py-0`}>
                  <li className={`${styles.nav_item}`}>
                    <Link className={styles.nav_link} aria-current="page" href="/">Home</Link>
                  </li>

                  {/* Web Development */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/web-development')}>Web Development</a> 
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop2} ${styles.webBuilderDrop3}`}>
                      <li className={`${styles.w_100} p-0`}>
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/10.webp', title: 'Ecommerce Development', desc: 'Build impactful online stores that drive sales and growth.' },
                                  { img: '/assets/images/menu/11.webp', title: 'Wordpress Development', desc: 'Custom wordpress sites tailored to your business needs.' },
                                  { img: '/assets/images/menu/12.webp', title: 'Shopify Development', desc: 'Top-notch Shopify solutions to launch and scale your stor.' },
                                  { img: '/assets/images/menu/13.webp', title: 'Wix Development', desc: 'Easy-to-manage Wix websites designed for impact.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/14.webp', title: 'Squarespace Development', desc: 'Elegant Squarespace design for modern business.' },
                                  { img: '/assets/images/menu/15.webp', title: 'CMS Development', desc: 'Smart CMS solutions to simplify content management.' },
                                  { img: '/assets/images/menu/16.webp', title: 'Web Portal Development', desc: 'Secure, scalable portals for business and communities.' },
                                  { img: '/assets/images/menu/17.webp', title: 'Web Application Development', desc: 'Ineractive and custom web apps built to perform.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/18.webp', title: 'Web Speed Optimization', desc: 'Faster load times, better experience, and higher conversion.' },
                                  { img: '/assets/images/menu/19.png', title: 'Web Maintenance', desc: 'Keep your website secure , updated, and error-free.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
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

                  {/* Web Design */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/web-design')}>Web Design</a>
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop2} ${styles.webBuilderDrop3}`}>
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/1.png', title: 'Landing Page Design', desc: 'High-converting landing pages that capture leads.' },
                                  { img: '/assets/images/menu/2.png', title: 'Responsive Web Design', desc: 'Smooth browsing across every device and screen size.' },
                                  { img: '/assets/images/menu/3.png', title: 'Website Redesign', desc: 'Refresh your website for modern appeal and performance.' },
                                  { img: '/assets/images/menu/4.png', title: 'B2B Web Design', desc: 'Professional B2B designs that build trust and authority.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/5.png', title: 'Custom Web Design', desc: 'Unique and tailor-made designs aligned with your brand.' },
                                  { img: '/assets/images/menu/6.png', title: 'Amazon Store Setup', desc: 'Optimized Amazon stores to boost your eCommerce success.' },
                                  { img: '/assets/images/menu/7.png', title: 'Logo Design', desc: 'Creative logos that define and enhance your brand identity.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/8.png', title: 'Video Animation', desc: 'Compelling animations to tell your story with impact.' },
                                  { img: '/assets/images/menu/9.png', title: 'Graphic Design', desc: 'Visual designs that engage and communicate effectively.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
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

                  {/* Digital Marketing */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/digital-marketing')}>Digital Marketing</a>
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop4}`}>
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/20.webp', title: 'Search Engine Optimization (SEO', desc: 'Climb search rankings and attract the right audience.' },
                                  { img: '/assets/images/menu/21.webp', title: 'Pay Per Click (PPC', desc: 'Targeted ads that deliver measurable ROI.' },
                                  { img: '/assets/images/menu/22.webp', title: 'Social Media Marketing', desc: 'Engage, grow, and convert through social channels.' },
                                  { img: '/assets/images/menu/23.webp', title: 'Digital PR', desc: 'Build authority and visibility with impactful PR campaigns.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/24.webp', title: 'Content Writing', desc: 'Engaging content that speaks to your audience.' },
                                  { img: '/assets/images/menu/25.webp', title: 'Content Marketing', desc: 'Valuable content strategies that drive traffic and trust.' },
                                  { img: '/assets/images/menu/26.webp', title: 'Guest Post/Outreach', desc: 'Expand reach with strategic guest posting and outreach.' },
                                  { img: '/assets/images/menu/27.webp', title: 'Link Building', desc: 'High-quality backlinks to strengthen your SEO.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>

                            <div className="col-md-4 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/28.webp', title: 'Local SEO', desc: 'Dominate local searches and grow neighborhood visibility.' },
                                  { img: '/assets/images/menu/29.webp', title: 'Online Reputation Management', desc: 'Protect and enhance your brand’s online presence.' },
                                  { img: '/assets/images/menu/30.webp', title: 'App Store Optimization', desc: 'Get your app discovered and downloaded more often.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
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

                  {/* Web Hosting */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/web-hosting')}>Web Hosting</a>
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop9}`}>
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-6 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/030.webp', title: 'Shared Hosting', desc: 'Affordable hosting with reliable performance for small sites.' },
                                  { img: '/assets/images/menu/31.webp', title: 'VPS Hosting', desc: 'Flexibility and control with powerful VPS hosting.' },
                                  { img: '/assets/images/menu/32.webp', title: 'Dedicated Hosting', desc: 'Enterprise-level hosting with maximum resources' },
                                  { img: '/assets/images/menu/33.webp', title: 'Cloud Hosting', desc: 'Scalable cloud hosting built for speed and reliability.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
                                    </div>
                                  </Link>
                                ))}
                              </div>
                            </div>
                            <div className="col-md-6 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.vertical_bordersperator}2 ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/34.webp', title: 'Managed Hosting', desc: 'Worry-free hosting with complete expert management.' },
                                  { img: '/assets/images/menu/35.webp', title: 'Reseller Hosting', desc: 'Grow your business with flexible reseller hosting plans.' },
                                  { img: '/assets/images/menu/36.webp', title: 'Domain Registration', desc: 'Secure the perfect domain for your brand identity.' },
                                ].map((item, i) => (
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href="#">
                                    <div className={styles.menu_icon1_wrapper}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p><p className={styles.desc1}>{item.desc}</p></div>
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

                  {/* Web Builder */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/web-builder')}>Web Builder</a>
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop7}`}>
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row">
                            <div className="col-md-3">
                              <div className={`${styles.bgLight} p-0 py-4 ps-3`}>
                                <p className={`${styles.megamenu_heading} ${styles.iconNone} text-primary`}> Industries</p>
                                <div className={`nav nav-pills me-3 ${styles.navDropTabs}`} role="tablist" aria-orientation="vertical">
                                  {industryData.map((industry, idx) => (
                                    <button 
                                      key={idx} 
                                      className={`${styles.nav_link} ${idx === activeIndustryTab ? 'active' : ''}`}
                                      onClick={(e) => {
                                        e.preventDefault()
                                        setActiveIndustryTab(idx)
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
                                <div className={`tab-content ${styles.navDropContent}`}>
                                  {industryData.map((industry, idx) => (
                                    <div 
                                      key={idx} 
                                      className={`tab-pane ${idx === activeIndustryTab ? 'active' : ''}`}
                                      style={{ display: idx === activeIndustryTab ? 'block' : 'none' }}
                                    >
                                      <p className="text_primary fw-bold h6">{industry.name}</p>
                                      <ul className={styles.ulcustom_megamenu}>
                                        {industry.services.map((service, serviceIdx) => (
                                          <li key={serviceIdx}>
                                            <a className={styles.dropdown_item} href="#" target="_blank" rel="noopener noreferrer">
                                              {service}
                                            </a>
                                          </li>
                                        ))}
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

                  {/* Insight */}
                  <li className={`${styles.nav_item} ${styles.dropdown}`}>
                    <a className={`${styles.nav_link} dropdown-toggle`} href="#" role="button" aria-expanded="false" onClick={go('/')}>Insight</a>
                    <ul className={`${styles.dropdown_menu} ${styles.webfolio_mega_menu} p-0 ${styles.webBuilderDrop} ${styles.webBuilderDrop10}`}>
                      <li className="w-100 p-0">
                        <div className="container-fluid p-0">
                          <div className="row m-0">
                            <div className="col-md-12 p-0">
                              <div className={`${styles.vertical_bordersperator} ${styles.p04}`}>
                                {[
                                  { img: '/assets/images/menu/036.webp', title: 'About Us' , href: '/about' },
                                  { img: '/assets/images/menu/37.webp', title: 'Webfolio' , href: '/portfolio' },
                                  { img: '/assets/images/menu/38.webp', title: 'Blog' , href: '/blogs' },
                                ].map((item, i) => (      
                                  <Link key={i} className={`${styles.nav_link} ${styles.padding_left}`} href={item.href}>
                                    <div className={`${styles.menu_icon1_wrapper} ${styles.menu_icon1_wrapper}2`}>
                                      <div className={styles.menu_icon1}><img src={item.img} alt="Logo" className="logo-img" loading="lazy" /></div>
                                      <div className={styles.menu_content1}><p className={styles.menu_title}>{item.title}</p></div>
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
                  <a href="/contact" target="_blank" rel="noopener noreferrer" className="primary btn_black">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Header */}
      <header className={`${styles.mobile_header} d-block d-sm-none`}>
        {/* Logo */}
        <div className="logo">
          <Link href="/">
            <img src="/assets/images-webp/website-digitals.webp" alt="Logo" className="logo-img" />
          </Link>
        </div>

        {/* Hamburger */}
        <button id="menu-toggle" className={styles.menu_toggle} aria-label="Open menu" onClick={() => { setMobileOpen(true); setMobileLevel1(null); setMobileInner(null) }}>
          <HamburgerIcon />
        </button>

        {/* Sliding Menu */}
        <nav id="mobile-menu" className={`${styles.mobile_menu} ${mobileOpen ? 'open' : ''}`} aria-hidden={!mobileOpen}>
          <div className={styles.inner_logo_close}>
            <img width={150} src="/assets/images-webp/website-digitals.webp" alt="Logo" className="logo-img" />
            <button id="close-menu" className={`${styles.close_menu} filterInvert ${mobileOpen ? 'close-menu' : ''}`} aria-label="Close menu" onClick={() => setMobileOpen(false)}>
              <CrossIcon />
            </button>
          </div>

          {/* Level 0 */}
          {!mobileLevel1 && (
            <ul>
              <li><a href="/" target="_blank" rel="noopener noreferrer">Home</a></li>
              {[
                { key: 'web-dev', label: 'Web Development' },
                { key: 'web-design', label: 'Web Design' },
                { key: 'digital-marketing', label: 'Digital Marketing' },
                { key: 'web-hosting', label: 'Web Hosting' },
                { key: 'web-builder', label: 'Web builder' },
                { key: 'insight', label: 'Insight' },
              ].map(item => (
                <li key={item.key}>
                  <a href="#" onClick={(e) => { e.preventDefault(); setMobileLevel1(item.key); }}>
                    <div>{item.label}</div>
                    <RoundRightIcon />
                  </a>
                </li>
              ))}
              <li><a href="https://websitedigitals.com/website-builder/login" target="_blank" rel="noopener noreferrer">Login</a></li>
              <li><a href="tel:(646)-222-3598"><i className="fa-solid fa-phone" /> (646)-222-3598</a></li>
              <li><a href="mailto:info@websitedigitals.com"><i className="fa-solid fa-envelope" /> info@websitedigitals.com</a></li>
            </ul>
          )}

          {/* Level 1 generic list renderer */}
          {mobileLevel1 && !mobileInner && (
            <ul>
              <li>
                <a href="#" onClick={(e)=>{e.preventDefault(); setMobileLevel1(null)}}>
                  <RoundLeftIcon />&emsp;Back
                </a>
              </li>

              {/* Render categories based on selected section */}
              {mobileLevel1 === 'web-dev' && (
                [
                  { img:'/assets/images/menu/10.webp', label:'Landing Page Design' },
                  { img:'/assets/images/menu/11.webp', label:'Responsive Web Design' },
                  { img:'/assets/images/menu/12.webp', label:'Website Redesign' },
                  { img:'/assets/images/menu/13.webp', label:'B2B Web Design' },
                  { img:'/assets/images/menu/14.webp', label:'Custom Web Design' },
                  { img:'/assets/images/menu/15.webp', label:'Amazon Store Setup' },
                  { img:'/assets/images/menu/16.webp', label:'Logo Design' },
                  { img:'/assets/images/menu/17.webp', label:'Video Animation' },
                  { img:'/assets/images/menu/18.webp', label:'Graphic Design' },
                ].map((it, i) => (
                  <li key={i}><a href="#"><img src={it.img} alt="Logo" className="logo-img" loading="lazy" /> {it.label}</a></li>
                ))
              )}

              {mobileLevel1 === 'web-design' && (
                [
                  { img:'/assets/images/menu/1.png', label:'Landing Page Design' },
                  { img:'/assets/images/menu/2.png', label:'Responsive Web Design' },
                  { img:'/assets/images/menu/3.png', label:'Website Redesign' },
                  { img:'/assets/images/menu/4.png', label:'B2B Web Design' },
                  { img:'/assets/images/menu/5.png', label:'Custom Web Design' },
                  { img:'/assets/images/menu/6.png', label:'Amazon Store Setup' },
                  { img:'/assets/images/menu/7.png', label:'Logo Design' },
                  { img:'/assets/images/menu/8.png', label:'Video Animation' },
                  { img:'/assets/images/menu/9.png', label:'Graphic Design' },
                ].map((it, i) => (
                  <li key={i}><a href="#"><img src={it.img} alt="Logo" className="logo-img" loading="lazy" /> {it.label}</a></li>
                ))
              )}

              {mobileLevel1 === 'digital-marketing' && (
                [
                  { img:'/assets/images/menu/20.webp', label:'Search Engine Optimization (SEO' },
                  { img:'/assets/images/menu/21.webp', label:'Pay Per Click (PPC' },
                  { img:'/assets/images/menu/23.webp', label:'Social Media Marketing' },
                  { img:'/assets/images/menu/24.webp', label:'Digital PR' },
                  { img:'/assets/images/menu/25.webp', label:'Content Writing' },
                  { img:'/assets/images/menu/26.webp', label:'Content Marketing' },
                  { img:'/assets/images/menu/27.webp', label:'Guest Post/Outreach' },
                  { img:'/assets/images/menu/28.webp', label:'Link Building' },
                  { img:'/assets/images/menu/29.webp', label:'Local SEO' },
                  { img:'/assets/images/menu/30.webp', label:'Online Reputation Management' },
                  { img:'/assets/images/menu/30.webp', label:'App Store Optimization' },
                ].map((it, i) => (
                  <li key={i}><a href="#"><img src={it.img} alt="Logo" className="logo-img" loading="lazy" /> {it.label}</a></li>
                ))
              )}

              {mobileLevel1 === 'web-hosting' && (
                [
                  { img:'/assets/images/menu/030.webp', label:'Shared Hosting' },
                  { img:'/assets/images/menu/31.webp', label:'VPS Hosting' },
                  { img:'/assets/images/menu/32.webp', label:'Dedicated Hosting' },
                  { img:'/assets/images/menu/33.webp', label:'Cloud Hosting' },
                  { img:'/assets/images/menu/34.webp', label:'Managed Hosting' },
                  { img:'/assets/images/menu/35.webp', label:'Reseller Hosting' },
                  { img:'/assets/images/menu/36.webp', label:'Domain Registeration' },
                ].map((it, i) => (
                  <li key={i}><a href="#"><img src={it.img} alt="Logo" className="logo-img" loading="lazy" /> {it.label}</a></li>
                ))
              )}

              {mobileLevel1 === 'web-builder' && (
                <>
                  {['Services','Technology','Resource','Industries','Location'].map((label) => (
                    <li key={label}>
                      <a href="#" onClick={(e)=>{e.preventDefault(); setMobileInner(label)}}>
                        {label}
                        <RoundRughtIcon />
                      </a>
                    </li>
                  ))}
                </>
              )}

              {mobileLevel1 === 'insight' && (
                <>
                  {['Services','Technology','Resource','Industries','Location'].map((label) => (
                    <li key={label}>
                      <a href="#" onClick={(e)=>{e.preventDefault(); setMobileInner(label)}}>
                        {label}
                        <RoundRightIcon />
                      </a>
                    </li>
                  ))}
                </>
              )}
            </ul>
          )}

          {/* Level 2 (inner nested) */}
          {mobileInner && (
            <ul>
              <li>
                <a href="#" onClick={(e)=>{e.preventDefault(); setMobileInner(null)}}>
                  <RoundLeftIcon />&emsp;Back
                </a>
              </li>
              {/* Example static items; replace with your routes */}
              {mobileInner === 'Services' && (
                ['eCommerce','Portal','B2B','Consulting','Startup','CMS Development','Web Support'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))
              )}
              {mobileInner === 'Technology' && (
                ['PHP','Drupal','WordPress','Python','React','Javascript','Node JS'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))
              )}
              {mobileInner === 'Resource' && (
                ['Hire PHP Developer','Hire WordPress Developer','Hire Java Developer','Hire AngularJS Developer'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))
              )}
              {mobileInner === 'Industries' && (
                ['Healthcare','Real Estate','Fintech'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))
              )}
              {mobileInner === 'Location' && (
                ['Los Angeles','Chicago','Houston','Dallas','Miami','Atlanta','Philadelphia','Washington DC','Dubai','Qatar','Oman','Bahrain','Saudia Arabia'].map((l) => (
                  <li key={l}><a href="#">{l}</a></li>
                ))
              )}
            </ul>
          )}

          {/* Socials */}
          <div className={`${styles.header_social} d-block ps-3 mt-2`}>
            <a className="h5" href="https://www.facebook.com/webdigitals/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-facebook-f text_primary" /></a>
            <a className="h5" href="https://www.instagram.com/website_digitals/" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-instagram text_primary" /></a>
            <a className="h5" href="https://www.linkedin.com/company/website-digitals" target="_blank" rel="noopener noreferrer"><i className="fa-brands fa-linkedin-in text_primary" /></a>
          </div>
        </nav>
      </header>

    </>
  )
}
