export const imageSlideSectionData = {
    id: 'platform-opportunities',
    bgColor: 'linear-gradient(180deg,#fff 0%,#f7fbff 100%)',
    headingHTML: 'Build, <span class="color-primary">Manage,</span> and <span class="color-primary">Grow</span> with Ease',
    description: 'Make your success path easier with our affordable and easy website builder',
    cta: { label: "Get Started-It's Free", href: '#', className: 'offer-btn primary business-report-btn' },
    durationSec: 10,
    pauseOnHover: true,
    tabs: [
      {
        key: 'signup',
        title: 'Sign Up Simplified',
        text: 'See how easy it is to start...',
        image: { src: '/assets/images-webp/platform-opportunities.webp', alt: 'Sign Up Simplified', width: 669, height: 631 },
      },
      {
        key: 'design',
        title: 'Intuitive Design Tools',
        text: 'Create and customize your site...',
        image: { src: '/assets/images-webp/banner.webp', alt: 'Intuitive Design Tools', width: 669, height: 631 },
      },
      {
        key: 'payments',
        title: 'Simplified Payments',
        text: 'Benefit from our straightforward and secure payment process...',
        image: { src: '/assets/images-webp/platform-opportunities.webp', alt: 'Simplified Payments', width: 669, height: 631 },
      },
    ],
  };

// ✅ TABS
export const tabs = [
  {
    id: 'cms-portfolio',
    label: 'B2B',
    whiteIcon: '/assets/images/portfolio/web/tabs/B2BW.svg',
    colorIcon: '/assets/images/portfolio/web/tabs/B2B.svg',
  },
  {
    id: 'ecom-portfolio',
    label: 'B2C',
    whiteIcon: '/assets/images/portfolio/web/tabs/B2CW.svg',
    colorIcon: '/assets/images/portfolio/web/tabs/B2C.svg',
  },
  {
    id: 'wordpress-portfolio',
    label: 'E-Commerce',
    whiteIcon: '/assets/images/portfolio/web/tabs/2.webp',
    colorIcon: '/assets/images/portfolio/web/tabs/2-colored.webp',
  },
  {
    id: 'portal-portfolio',
    label: 'personal brand',
    whiteIcon: '/assets/images/portfolio/web/tabs/personalbrandingw.png',
    colorIcon: '/assets/images/portfolio/web/tabs/personalbranding.png',
  },
  {
    id: 'non-profit',
    label: 'nonprofit',
    whiteIcon: '/assets/images/portfolio/web/tabs/nonprofitw.png',
    colorIcon: '/assets/images/portfolio/web/tabs/nonprofit.png',
  },
];

// ✅ ITEMS
export const itemsByTab = {
  /* -------------------- B2B -------------------- */
  'cms-portfolio': [
    {
      index: 7,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/cms/1/bg-energy.webp',
        frontImage: '/assets/images/portfolio/web/cms/1/bg-energy.webp',
        rightImage: '/assets/images/portfolio/web/cms/1/front-energy.webp',
        titleImg: '/assets/images/portfolio/web/cms/1/logo-energy.webp',
        title: 'Energy Web Solutions',
        desc: 'Powering your brand with innovative digital design.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/1/website.webp',
          '/assets/images/portfolio/web/cms/1/innerpage1.webp',
          '/assets/images/portfolio/web/cms/1/innerpage2.webp',
          '/assets/images/portfolio/web/cms/1/innerpage3.webp',
        ],
        detailHTML:
          '<p>Energyland</p><p>A forward-thinking renewable energy platform that provides innovative solutions in solar and wind energy. Energyland offers detailed project insights, customizable energy plans, and a user-friendly interface for seamless interaction. It integrates with smart home systems and includes a robust support network for consumers, ensuring an eco-friendly transition is both smooth and efficient.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 8,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/cms/2/bg-flight.webp',
        frontImage: '/assets/images/portfolio/web/cms/2/bg-flight.webp',
        rightImage: '/assets/images/portfolio/web/cms/2/front-flight.webp',
        titleImg: '/assets/images/portfolio/web/cms/2/logo-flight.webp',
        title: 'Aviation Web Design',
        desc: 'Elevating your brand with sleek, modern websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/2/website.webp',
          '/assets/images/portfolio/web/cms/2/innerpage1.webp',
          '/assets/images/portfolio/web/cms/2/innerpage2.webp',
          '/assets/images/portfolio/web/cms/2/innerpage3.webp',
        ],
        detailHTML:
          '<p>Exclusive Aircraft</p><p>An elite aviation platform specializing in luxury aircraft solutions and custom aviation experiences. Exclusive Aircraft offers a comprehensive range of services, from detailed aircraft specifications to personalized charter options. The platform’s sleek, user-friendly design ensures effortless navigation, making it the go-to resource for discerning travelers and aviation enthusiasts alike.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 9,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/cms/3/bg-food.webp',
        frontImage: '/assets/images/portfolio/web/cms/3/bg-food.webp',
        rightImage: '/assets/images/portfolio/web/cms/3/front-food.webp',
        titleImg: '/assets/images/portfolio/web/cms/3/logo-food.webp',
        title: 'Culinary Web Design',
        desc: 'Serving up delicious digital experiences.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/3/website.webp',
          '/assets/images/portfolio/web/cms/3/innerpage1.webp',
          '/assets/images/portfolio/web/cms/3/innerpage2.webp',
          '/assets/images/portfolio/web/cms/3/innerpage3.webp',
        ],
        detailHTML:
          '<p>Simply Meals</p><p>A gourmet culinary platform designed to make fine dining accessible to everyone. Simply Meals features curated recipes, customizable meal plans, and a seamless online ordering system for premium ingredients. The website is visually appealing and easy to navigate, offering a rich culinary experience that caters to both amateur cooks and seasoned chefs.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 10,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/cms/4/bg-legal.webp',
        frontImage: '/assets/images/portfolio/web/cms/4/bg-legal.webp',
        rightImage: '/assets/images/portfolio/web/cms/4/front-legal.webp',
        titleImg: '/assets/images/portfolio/web/cms/4/logo-legal.webp',
        title: 'Legal Web Design',
        desc: 'Building trust through professional online presence.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/4/website.webp',
          '/assets/images/portfolio/web/cms/4/innerpage1.webp',
          '/assets/images/portfolio/web/cms/4/innerpage2.webp',
          '/assets/images/portfolio/web/cms/4/innerpage3.webp',
        ],
        detailHTML:
          '<p>The Griffin Law Firm</p><p>A professional legal platform offering comprehensive services in law and counsel. The Griffin Law Firm features detailed case studies, personalized legal advice, and an easy-to-navigate interface. Designed with clarity and accessibility in mind, the website ensures clients can find the information they need quickly and efficiently.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 11,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/cms/5/bg-medical.webp',
        frontImage: '/assets/images/portfolio/web/cms/5/bg-medical.webp',
        rightImage: '/assets/images/portfolio/web/cms/5/front-medical.webp',
        titleImg: '/assets/images/portfolio/web/cms/5/logo-medical.webp',
        title: 'Healthcare Web Design',
        desc: 'Innovating digital solutions for better patient care.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/5/website.webp',
          '/assets/images/portfolio/web/cms/5/innerpage1.webp',
          '/assets/images/portfolio/web/cms/5/innerpage2.webp',
          '/assets/images/portfolio/web/cms/5/innerpage3.webp',
        ],
        detailHTML:
          '<p>IHMP Health Management</p><p>A cutting-edge healthcare platform dedicated to enhancing patient care through innovative technology. IHMP Health Management provides comprehensive health services, including personalized treatment plans and easy-to-use patient portals. The website is designed for optimal user experience, ensuring that both healthcare providers and patients can access critical information effortlessly.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 12,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/portal/4/main-image.webp',
        frontImage: '/assets/images/portfolio/web/portal/4/main-image.webp',
        rightImage: '/assets/images/portfolio/web/portal/4/right-image.webp',
        titleImg: '/assets/images/portfolio/web/portal/4/logos-03.webp',
        title: 'Job Portal Website',
        desc: 'Designing efficient and user-friendly job portals.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/cms/6/website.webp',
          '/assets/images/portfolio/web/cms/6/innerpage1.webp',
          '/assets/images/portfolio/web/cms/6/innerpage2.webp',
          '/assets/images/portfolio/web/cms/6/innerpage3.webp',
        ],
        detailHTML:
          '<p>Jobzilla</p><p>A dynamic job portal designed to connect job seekers with top employers. Jobzilla offers a wide range of job listings, career resources, and an intuitive application process. The platform’s user-friendly interface ensures that users can easily find and apply for jobs that match their skills and career goals.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
  ],

  /* -------------------- B2C (your HTML used wordpress/* assets) -------------------- */
  'ecom-portfolio': [
    {
      index: 13,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/5/bg-restaturant.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/5/bg-restaturant.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/5/front-restaurant.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/5/logo-restaurant.webp',
        title: 'Restaurant Web Design',
        desc: 'Serving fresh, flavorful online experiences.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/5/website.webp',
          '/assets/images/portfolio/web/wordpress/5/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/5/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/5/innerpage3.webp',
        ],
        detailHTML:
          '<p>Ocean Grill</p><p>A vibrant restaurant platform where culinary excellence meets digital innovation. Ocean Grill offers a rich menu experience, showcasing fresh ingredients and creative dishes. The website is designed to be both visually appealing and user-friendly, making it easy for customers to explore the menu, make reservations, and stay updated on special events.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 14,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/1/edu-bg.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/1/edu-bg.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/1/edu-front.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/1/edu-logo.webp',
        title: 'University Web Design',
        desc: 'Creating engaging online learning platforms.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/1/website.webp',
          '/assets/images/portfolio/web/wordpress/1/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/1/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/1/innerpage3.webp',
        ],
        detailHTML:
          '<p>Kingster University</p><p>A comprehensive educational platform dedicated to academic excellence. Kingster University provides detailed course offerings, faculty profiles, and easy access to student resources. The website’s clean and modern design ensures that both prospective and current students can navigate effortlessly, supporting their educational journey from enrollment to graduation.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 15,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/4/main-image.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/4/main-image.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/4/right-image.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/4/logo-04.webp',
        title: 'Financial WordPress Website',
        desc: 'Ensuring security and user-friendliness in financial services.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/4/website.webp',
          '/assets/images/portfolio/web/wordpress/4/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/4/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/4/innerpage3.webp',
        ],
        detailHTML:
          '<p>Flamekast Estate & Builders</p><p>A dynamic real estate platform offering a seamless experience for property buyers and sellers. Flamekast Estate & Builders features comprehensive property listings, expert consultation services, and a user-friendly interface. The website is designed to provide clear and accessible information, making it easier for users to navigate the real estate market with confidence.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 16,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/3/bg-jewelery.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/3/bg-jewelery.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/3/front-jewelery.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/3/jewelery-logo.webp',
        title: 'Jewelry Web Design',
        desc: 'Showcasing luxury with elegant websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/3/website.webp',
          '/assets/images/portfolio/web/wordpress/3/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/3/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/3/innerpage3.webp',
        ],
        detailHTML:
          '<p>Zen Crystals of NY</p><p>An exquisite jewelry platform that brings luxury and elegance to the forefront. Zen Crystals of NY offers a curated collection of fine jewelry, featuring detailed product descriptions and an easy-to-use shopping interface. The website’s sophisticated design ensures that customers can explore and purchase their favorite pieces with ease.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 17,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/4/bg-pet.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/4/bg-pet.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/4/front-pet.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/4/logo-pet.webp',
        title: 'Pet Care Web Solutions',
        desc: 'Crafting user-friendly sites for pet lovers.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/2/website.webp',
          '/assets/images/portfolio/web/wordpress/2/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/2/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/2/innerpage3.webp',
        ],
        detailHTML:
          '<p>PawCare</p><p>A dedicated pet care platform designed to cater to pet owners and their furry friends. PawCare provides comprehensive services, including grooming tips, health advice, and an intuitive online booking system. The user-friendly website ensures that pet lovers can access all the resources they need to keep their pets happy and healthy.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 18,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/6/bg-education1.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/6/bg-education1.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/6/front-education1.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/6/logo-education1.webp',
        title: 'Academic Web Design',
        desc: 'Designing educational platforms that connect and inspire.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/wordpress/6/website.webp',
          '/assets/images/portfolio/web/wordpress/6/innerpage1.webp',
          '/assets/images/portfolio/web/wordpress/6/innerpage2.webp',
          '/assets/images/portfolio/web/wordpress/6/innerpage3.webp',
        ],
        detailHTML:
          '<p>Aspire Academy</p><p>An educational platform committed to fostering academic growth and development. Aspire Academy offers a wide range of courses, student resources, and faculty support, all within a modern and accessible website. The platform is designed to provide a seamless educational experience, guiding students from enrollment through to successful completion of their studies.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
  ],

  /* -------------------- E-Commerce (id: wordpress-portfolio in your HTML) -------------------- */
  'wordpress-portfolio': [
    {
      index: 1,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/1/main-image.webp',
        frontImage: '/assets/images/portfolio/web/e-com/1/main-image.webp',
        rightImage: '/assets/images/portfolio/web/e-com/1/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/1/logo-01.webp',
        title: 'Fashion eCommerce Website',
        desc: 'Tailoring vibrant and modern eCommerce websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/1/website.webp',
          '/assets/images/portfolio/web/e-com/1/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/1/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/1/innerpage3.webp',
        ],
        detailHTML:
          '<p>Pixio</p><p>A trendy fashion eCommerce platform that brings the latest styles directly to your doorstep. Pixio offers a wide range of clothing and accessories, featuring a sleek and easy-to-navigate website. With detailed product descriptions and a seamless shopping experience, Pixio ensures that customers can find and purchase the perfect outfit effortlessly.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 2,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/4/bg_amore.webp',
        frontImage: '/assets/images/portfolio/web/e-com/4/bg_amore.webp',
        rightImage: '/assets/images/portfolio/web/e-com/4/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/4/logo-04.webp',
        title: 'Beauty eCommerce Website',
        desc: 'Creating elegant and user-friendly beauty eCommerce websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/4/website.webp',
          '/assets/images/portfolio/web/e-com/4/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/4/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/4/innerpage3.webp',
        ],
        detailHTML:
          '<p>Sofee Cosmetics</p><p>A beauty eCommerce platform dedicated to enhancing your natural glow. Amore features a curated selection of skincare and makeup products, designed to cater to all skin types. The website’s clean and modern layout allows for easy browsing, making it simple for customers to discover new beauty essentials and shop with confidence.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 3,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/5/main-image.webp',
        frontImage: '/assets/images/portfolio/web/e-com/5/main-image.webp',
        rightImage: '/assets/images/portfolio/web/e-com/5/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/5/logo-06.webp',
        title: 'Watch eCommerce Website',
        desc: 'Designing sleek and modern watch eCommerce websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/5/website.webp',
          '/assets/images/portfolio/web/e-com/5/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/5/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/5/innerpage3.webp',
        ],
        detailHTML:
          '<p>TimeTrek</p><p>A sophisticated watch eCommerce platform offering a curated selection of timepieces for every style. TimeTrek provides detailed product information, including high-quality images and customer reviews. The website’s user-friendly design ensures that watch enthusiasts can explore and purchase the perfect timepiece with ease.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 4,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/2/main-image.webp',
        frontImage: '/assets/images/portfolio/web/e-com/2/main-image.webp',
        rightImage: '/assets/images/portfolio/web/e-com/2/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/2/logo-02.webp',
        title: 'Furniture eCommerce Website',
        desc: 'Highlighting elegance and functionality in design.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/2/website.webp',
          '/assets/images/portfolio/web/e-com/2/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/2/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/2/innerpage3.webp',
        ],
        detailHTML:
          '<p>Flamekast</p><p>A stylish furniture eCommerce platform offering a curated selection of modern and classic designs. Flamekast provides detailed product descriptions, high-quality images, and an intuitive shopping experience. The website\'s clean layout ensures that customers can easily explore and purchase the perfect pieces to enhance their living spaces.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 5,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/6/main-image.webp',
        frontImage: '/assets/images/portfolio/web/e-com/6/main-image.webp',
        rightImage: '/assets/images/portfolio/web/e-com/6/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/6/logo-05.webp',
        title: 'Luxury Car eCommerce Website',
        desc: 'Crafting sleek and high-end eCommerce websites for luxury cars.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/6/website.webp',
          '/assets/images/portfolio/web/e-com/6/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/6/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/6/innerpage3.webp',
        ],
        detailHTML:
          '<p>Exotec Cars</p><p>A premium eCommerce platform for luxury car enthusiasts. Exotec Cars offers an exclusive selection of high-end vehicles, complete with detailed specifications and stunning visuals. The website’s sleek design and user-friendly interface make it easy for customers to browse, compare, and purchase their dream cars.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 6,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/e-com/3/main-image.webp',
        frontImage: '/assets/images/portfolio/web/e-com/3/main-image.webp',
        rightImage: '/assets/images/portfolio/web/e-com/3/right-image.webp',
        titleImg: '/assets/images/portfolio/web/e-com/3/logo-03.webp',
        title: 'Cycling eCommerce Website',
        desc: 'Emphasizing adventure with high-performance websites.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/e-com/3/website.webp',
          '/assets/images/portfolio/web/e-com/3/innerpage1.webp',
          '/assets/images/portfolio/web/e-com/3/innerpage2.webp',
          '/assets/images/portfolio/web/e-com/3/innerpage3.webp',
        ],
        detailHTML:
          '<p>Noxbe</p><p>A dedicated cycling eCommerce platform catering to both casual riders and serious cyclists. Noxbe features a wide range of bikes, accessories, and gear, all presented with clear product details and customer reviews. The website\'s streamlined design ensures that cycling enthusiasts can find and purchase everything they need for their next adventure.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
  ],

  /* -------------------- Personal Brand -------------------- */
  'portal-portfolio': [
    {
      index: 19,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/4/bg-fitness.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/4/bg-fitness.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/4/front-fitness.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/4/logo-fitness.webp',
        title: 'Fitness & Nutrition Designs',
        desc: 'Creating dynamic online platforms for training and diet plans.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/1/website.webp',
          '/assets/images/portfolio/web/personal-brand/1/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/1/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/1/innerpage3.webp',
        ],
        detailHTML:
          '<p>Pride Fitness and Nutrition</p><p>A comprehensive fitness and nutrition platform designed to support a healthy lifestyle. Pride Fitness and Nutrition offers personalized workout plans, nutritional advice, and a user-friendly interface. The website’s clean and motivating design ensures users can easily track their progress and achieve their fitness goals.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 20,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/3/bg-massage.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/3/bg-massage.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/3/front-massage.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/3/logo-massage.webp',
        title: 'Skincare Website Design',
        desc: 'Creating beautiful and natural online experiences.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/2/website.webp',
          '/assets/images/portfolio/web/personal-brand/2/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/2/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/2/innerpage3.webp',
        ],
        detailHTML:
          '<p>Aquicki</p><p>A luxurious skincare platform dedicated to enhancing beauty through natural products. Aquicki features a range of skincare solutions with detailed product descriptions and a seamless shopping experience. The website’s elegant design and easy navigation make it simple for customers to find and purchase the perfect skincare regimen.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 21,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/5/bg-law.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/5/bg-law.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/5/front-law.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/5/logo-law.webp',
        title: 'Law Firm Portal Design',
        desc: 'Crafting professional and trustworthy online presences for legal services.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/3/website.webp',
          '/assets/images/portfolio/web/personal-brand/3/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/3/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/3/innerpage3.webp',
        ],
        detailHTML:
          '<p>Davalos Defense</p><p>A professional law firm portal designed to provide clients with easy access to legal services. Davalos Defense Law Firm offers detailed case information, attorney profiles, and a secure client portal. The website’s straightforward and polished design ensures clients can navigate legal resources with confidence and ease.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 22,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/2/bg-yoga.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/2/bg-yoga.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/2/front-yoga.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/2/logo-yoga.webp',
        title: 'Yoga & Wellness Portal',
        desc: 'Creating comfortable online environments for healthy living.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/4/website.webp',
          '/assets/images/portfolio/web/personal-brand/4/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/4/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/4/innerpage3.webp',
        ],
        detailHTML:
          '<p>Fassler Garden & Yoga</p><p>A holistic yoga and wellness portal designed to nurture body and mind. Fassler Garden & Yoga offers a range of online classes, wellness resources, and personalized plans. The website’s serene and intuitive design ensures users can easily access the tools they need to enhance their physical and mental well-being.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 23,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/1/bg-art.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/1/bg-art.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/1/front-art.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/1/logo-art.webp',
        title: 'Creative Therapy Portal',
        desc: 'Designing digital spaces for expressive arts engagement.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/5/website.webp',
          '/assets/images/portfolio/web/personal-brand/5/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/5/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/5/innerpage3.webp',
        ],
        detailHTML:
          '<p>Michelle Wolski</p><p>A vibrant creative therapy portal dedicated to healing through artistic expression. Michelle Wolski Creative Therapy provides resources, workshops, and support for those exploring art as a form of therapy. The website’s colorful and engaging layout makes it easy for users to find inspiration and connect with therapeutic art practices.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 24,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/personal-brand/6/bg-cosmetics.webp',
        frontImage: '/assets/images/portfolio/web/personal-brand/6/bg-cosmetics.webp',
        rightImage: '/assets/images/portfolio/web/personal-brand/6/front-cosmetics.webp',
        titleImg: '/assets/images/portfolio/web/personal-brand/6/logo-cosmetics.webp',
        title: 'Cosmetics Website Design',
        desc: 'Creating stunning online stores for beauty brands.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/personal-brand/6/website.webp',
          '/assets/images/portfolio/web/personal-brand/6/innerpage1.webp',
          '/assets/images/portfolio/web/personal-brand/6/innerpage2.webp',
          '/assets/images/portfolio/web/personal-brand/6/innerpage3.webp',
        ],
        detailHTML:
          '<p>TB Cosmetics</p><p>An elegant cosmetics website that showcases a curated selection of beauty products. TB Cosmetics offers detailed product descriptions, tutorials, and a seamless shopping experience. The website’s stylish design and user-friendly interface ensure that customers can discover and purchase their favorite beauty essentials with ease.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
  ],

  /* -------------------- Nonprofit -------------------- */
  'non-profit': [
    {
      index: 25,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/non-profit/1/bg-legal.webp',
        frontImage: '/assets/images/portfolio/web/non-profit/1/bg-legal.webp',
        rightImage: '/assets/images/portfolio/web/non-profit/1/front-legal.webp',
        titleImg: '/assets/images/portfolio/web/non-profit/1/logo-legal.webp',
        title: 'Law Firm Website Design',
        desc: 'Developing professional online solutions for law practices.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/1/website.webp',
          '/assets/images/portfolio/web/non-profit/1/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/1/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/1/innerpage3.webp',
        ],
        detailHTML:
          '<p>Texas Legal Solutions PLLC</p><p>A comprehensive law firm website designed to provide expert legal services. Texas Legal Solutions PLLC offers detailed case information, attorney profiles, and a user-friendly client portal. The website’s professional and accessible design ensures clients can easily navigate legal resources and connect with their legal team.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 26,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/non-profit/2/bg-medical.webp',
        frontImage: '/assets/images/portfolio/web/non-profit/2/bg-medical.webp',
        rightImage: '/assets/images/portfolio/web/non-profit/2/front-medical.webp',
        titleImg: '/assets/images/portfolio/web/non-profit/2/logo-medical.webp',
        title: 'CPR Training Website Design',
        desc: 'Designing user-friendly platforms for lifesaving education.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/2/website.webp',
          '/assets/images/portfolio/web/non-profit/2/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/2/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/2/innerpage3.webp',
        ],
        detailHTML:
          '<p>Longevity CPR</p><p>A specialized CPR training website dedicated to saving lives through education. Longevity CPR offers a range of certification courses, instructional materials, and easy-to-access resources. The website’s clear and organized design ensures users can quickly find and enroll in the training programs they need.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 27,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/non-profit/3/bg-nonprofit.webp',
        frontImage: '/assets/images/portfolio/web/non-profit/3/bg-nonprofit.webp',
        rightImage: '/assets/images/portfolio/web/non-profit/3/front-nonprofit.webp',
        titleImg: '/assets/images/portfolio/web/non-profit/3/logo-nonprofit.webp',
        title: 'Nonprofit Website Design',
        desc: 'Creating impactful online platforms for charitable causes',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/3/website.webp',
          '/assets/images/portfolio/web/non-profit/3/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/3/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/3/innerpage3.webp',
        ],
        detailHTML:
          '<p>Bucks County Charity Foundation</p><p>A compassionate nonprofit website focused on making a positive impact in the community. Bucks County Charity Foundation provides information on ongoing projects, donation opportunities, and volunteer programs. The website’s heartfelt and engaging design makes it easy for visitors to get involved and support meaningful causes.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 28,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/non-profit/4/bg-pet.webp',
        frontImage: '/assets/images/portfolio/web/non-profit/4/bg-pet.webp',
        rightImage: '/assets/images/portfolio/web/non-profit/4/front-pet.webp',
        titleImg: '/assets/images/portfolio/web/non-profit/4/logo-pet.webp',
        title: 'Pet Rescue Website Design',
        desc: 'Building heartwarming online platforms for pet adoption and care.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/4/website.webp',
          '/assets/images/portfolio/web/non-profit/4/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/4/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/4/innerpage3.webp',
        ],
        detailHTML:
          '<p>Furrescue</p><p>A compassionate pet rescue website dedicated to saving and rehoming animals in need. Furrescue offers information on adoptable pets, volunteer opportunities, and donation options. The website’s heartwarming design and easy navigation make it simple for visitors to get involved and help give pets a second chance at life.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 29,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/wordpress/1/main-image.webp',
        frontImage: '/assets/images/portfolio/web/wordpress/1/main-image.webp',
        rightImage: '/assets/images/portfolio/web/wordpress/1/right-image.webp',
        titleImg: '/assets/images/portfolio/web/wordpress/1/logo-01.webp',
        title: 'Plant WordPress Website',
        desc: 'Creating vibrant websites for gardening enthusiasts.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/5/website.webp',
          '/assets/images/portfolio/web/non-profit/5/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/5/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/5/innerpage3.webp',
        ],
        detailHTML:
          '<p>Eco Life</p><p>A vibrant plant-focused WordPress website designed to inspire a greener lifestyle. Eco Life provides tips on plant care, sustainable living, and an online shop for eco-friendly products. The website’s fresh and clean design ensures users can easily access valuable resources and make environmentally conscious choices.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
    {
      index: 30,
      colClass: 'col-lg-4 col-md-6',
      variant: 'static_portfolio__home',
      card: {
        backImage: '/assets/images/portfolio/web/portal/1/main-image.webp',
        frontImage: '/assets/images/portfolio/web/portal/1/main-image.webp',
        rightImage: '/assets/images/portfolio/web/portal/1/right-image.webp',
        titleImg: '/assets/images/portfolio/web/portal/1/logos-01.webp',
        title: 'News Portal Website',
        desc: 'Delivering comprehensive and user-friendly news portals.',
        ctaHref: 'javascript:void(0);',
      },
      caseStudy: {
        images: [
          '/assets/images/portfolio/web/non-profit/6/website.webp',
          '/assets/images/portfolio/web/non-profit/6/innerpage1.webp',
          '/assets/images/portfolio/web/non-profit/6/innerpage2.webp',
          '/assets/images/portfolio/web/non-profit/6/innerpage3.webp',
        ],
        detailHTML:
          '<p>Elite News</p><p>A dynamic news portal website offering up-to-the-minute news coverage on various topics. Elite News features articles, opinion pieces, and multimedia content, all presented in a sleek and modern interface. The website’s efficient design allows readers to stay informed and engaged with the latest happenings around the world.</p>',
        links: { launchHref: '/case-study/ekommart' },
      },
    },
  ],
};


// /data/testimonials.js
export const testimonialsData = {
  sectionClass: "section-padding dark-section",
  heading: "What They Are Talking About Us",
  stats: [
    {
      icon: "/assets/images/testimonials/stats/1.png",
      alt: "Star Rating",
      title: "4.8/5 Star Rating",
      desc: "Exceptional service and results.",
      width: 67,
      height: 52,
    },
    {
      icon: "/assets/images/testimonials/stats/2.png",
      alt: "Design Support",
      title: "24/7 Design Support",
      desc: "We're here round-the-clock.",
      width: 67,
      height: 52,
    },
    {
      icon: "/assets/images/testimonials/stats/3.png",
      alt: "Customers have trusted",
      title: "417,789",
      desc: "Customers have trusted us.",
      width: 67,
      height: 52,
    },
    {
      icon: "/assets/images/testimonials/stats/4.png",
      alt: "Projects",
      title: "634+ Projects",
      desc: "Over six hundred projects were completed.",
      width: 67,
      height: 52,
    },
  ],
  items: [
    {
      image: { src: "/assets/images/testimonials/1.jpg", alt: "testimonial1", width: 322, height: 237 },
      rating: 5,
      text: "The redesign of our website was exceptional; the new look is sleek and modern. Highly recommended!",
      user: {
        avatar: "/assets/images/testimonials/client/1.webp",
        name: "Amanda Kirsten",
        role: "CEO",
        width: 48,
        height: 48,
      },
    },
    {
      image: { src: "/assets/images/testimonials/1.webp", alt: "testimonial2", width: 322, height: 237 },
      rating: 5,
      text: "Outstanding service! The design team was responsive and delivered a website that perfectly fits our brand.",
      user: {
        avatar: "/assets/images/testimonials/client/2.webp",
        name: "Tanya Shawn",
        role: "Startup Owner",
        width: 48,
        height: 48,
      },
    },
    {
      image: { src: "/assets/images/testimonials/3.webp", alt: "testimonial3", width: 322, height: 237 },
      rating: 5,
      text: "Our website now attracts more visitors thanks to the stunning redesign. Excellent work!",
      user: {
        avatar: "/assets/images/testimonials/client/3.webp",
        name: "Carlos Leanard",
        role: "Brand Manager",
        width: 48,
        height: 48,
      },
    },
    {
      image: { src: "/assets/images/testimonials/2.jpg", alt: "testimonial4", width: 322, height: 237 },
      rating: 5,
      text: "Professional and efficient! The design exceeded our expectations, enhancing both look and functionality.",
      user: {
        avatar: "/assets/images/testimonials/client/4.webp",
        name: "Amit Tundrikar",
        role: "Digital Marketer",
        width: 48,
        height: 48,
      },
    },
  ],
  carouselOptions: {
    loop: true,
    margin: 24,
    nav: false,
    dots: true,
    // autoplay: true,
    autoplayTimeout: 3500,
    smartSpeed: 700,
    responsive: {
      0: { items: 1 },
      768: { items: 2 },
      1200: { items: 3 },
    },
  },
};


// /data/blueCounterData.js

const blueCounterData = [
  {
    countTo: 105,
    label: "Qualified Customers",
    className: "single-caseStudy-stats3",
  },
  {
    countTo: 200,
    label: "Honors Awards",
    className: "single-caseStudy-stats4",
  },
  {
    countTo: 400,
    label: "Successful Cases",
    className: "single-caseStudy-stats5",
  },
  {
    countTo: 600,
    label: "Trusted Clients",
    className: "counterLastElem",
  },
];

export default blueCounterData;


export const awardBadgesData = [
  {
    href: 'https://www.rightfirms.co/company/website-digitals',
    src: `/assets/images-webp/award-logo/1.png`,
    alt: 'Right Firms Top Service Provider 2025',
    width: 178,
    height: 120,
  },
  {
    href: 'https://upcity.com/profiles/website-digitals',
    src: '/assets/images-webp/award-logo/2.webp',
    alt: 'Featured On Upcity',
    width: 178,
    height: 120,
  },
  {
    href: 'https://www.softwareworld.co/service/website-digitals-reviews/',
    src: '/assets/images-webp/award-logo/3.jpg',
    alt: 'Software World Highly Recommended',
    width: 178,
    height: 120,
  },
  {
    href: 'https://clutch.co/profile/website-digitals',
    src: '/assets/images-webp/award-logo/4.jpg',
    alt: 'Client Say We Deliver On Clutch',
    width: 178,
    height: 120,
  },
  {
    href: 'https://www.sortlist.com/agency/website-digitals',
    src: '/assets/images-webp/award-logo/5.jpg',
    alt: 'Sortlist Certified Member',
    width: 178,
    height: 120,
  },
  {
    href: 'https://techbehemoths.com/company/website-digitals',
    src: '/assets/images-webp/award-logo/6.png',
    alt: 'Trusted On Tech Behemoths',
    width: 178,
    height: 120,
  },
  {
    href: 'https://www.crunchbase.com/organization/website-digitals',
    src: '/assets/images-webp/award-logo/7.png',
    alt: 'Crunchbase',
    width: 178,
    height: 120,
  },
  {
    href: 'https://www.goodfirms.co/company/website-digitals',
    src: '/assets/images-webp/award-logo/8.png',
    alt: 'Goodfirms',
    width: 178,
    height: 120,
  },
];


// data/industryTabsData.js
export const industryTabsData = [
  {
    id: "ecommerce",
    title: "E-commerce & Dropshipping",
    items: [
      {
        title: "Dropshipping Website Builder",
        href: "/dropshipping", // was: route('front.dropshipping')
        normalImg: "/assets/images/services/two-2.webp",
        whiteImg: "/assets/images/services/one-1.webp",
        alt: "Dropshipping Website Builder",
        desc: "Launch and manage a visually impressive store that supports disruption-free supplier integration and efficient order handling."
      },
      {
        title: "Ecommerce Website Builder",
        href: "/ecommerce", // was: route('front.ecommerce')
        normalImg: "/assets/images/services/four-4.webp",
        whiteImg: "/assets/images/services/three-3.webp",
        alt: "Ecommerce Website Builder",
        desc: "From product listings to checkout, every aspect of your online store is designed for conversion."
      },
      {
        title: "Auction Website Builder",
        href: "/auction-website-builder", // was: route('front.online.auction.website.builder')
        normalImg: "/assets/images/services/six-6.webp",
        whiteImg: "/assets/images/services/five-5.webp",
        alt: "Auction Website Builder",
        desc: "Create real-time bidding platforms with full customization, perfect for niche eCommerce needs."
      },
      {
        title: "Shopping",
        href: "/shopping-cart-website", // was: route('front.website.builder.with.shopping.cart')
        normalImg: "/assets/images/services/eight-8.webp",
        whiteImg: "/assets/images/services/seven-7.webp",
        alt: "Shopping",
        desc: "Engage users with smooth navigation, intuitive design, and an easy-to-use interface."
      }
    ]
  },

  {
    id: "construction",
    title: "Construction & Real Estate",
    items: [
      {
        title: "Real Estate Website Builder",
        href: "/real-estate", // was: route('front.real.estate')
        normalImg: "/assets/images/services/fourteen-14.webp",
        whiteImg: "/assets/images/services/thirteen-13.webp",
        alt: "Real Estate Website Builder",
        desc: "Showcase properties with high-quality galleries, map views, and listing filters."
      },
      {
        title: "Property Management Website Builder",
        href: "/property-management", // was: route('front.property.management')
        normalImg: "/assets/images/services/twelve-12.webp",
        whiteImg: "/assets/images/services/eleven-11.webp",
        alt: "Property Management Website Builder",
        desc: "Manage portfolios and tenant communication from one platform tailored to your operations."
      },
      {
        title: "Website Builder For Construction",
        href: "/construction-company", // was: route('front.construction.company')
        normalImg: "/assets/images/services/ten-10.webp",
        whiteImg: "/assets/images/services/nine-9.webp",
        alt: "Website Builder For Construction",
        desc: "Display completed projects, manage leads and highlight your services with ease."
      },
      {
        title: "Realtors",
        href: "/realtors", // was: route('front.realtors')
        normalImg: "/assets/images/services/sixteen-16.webp",
        whiteImg: "/assets/images/services/fifteen-15.webp",
        alt: "Realtors",
        desc: "Build trust with visually engaging and mobile-responsive pages that turn visitors into clients."
      }
    ]
  },

  {
    id: "healthcare",
    title: "Healthcare",
    items: [
      {
        title: "Website Builder For Medical Practice",
        href: "/medical-website-builder", // was: route('front.medical.website.builder')
        normalImg: "/assets/images/services/twentytwo-22.webp",
        whiteImg: "/assets/images/services/twentyone-21.webp",
        alt: "Website Builder For Medical Practice",
        desc: "Set appointments, share resources, and build credibility with a secure, professional platform."
      },
      {
        title: "Dental Website Builder",
        href: "/dental-website-builder", // was: route('front.dental.website.builder')
        normalImg: "/assets/images/services/twenty-20.webp",
        whiteImg: "/assets/images/services/nineteen-19.webp",
        alt: "Dental Website Builder",
        desc: "Provide service menus, testimonials, and online booking through a clean and modern interface."
      }
    ]
  },

  {
    id: "smallbusiness",
    title: "Small Business",
    items: [
      {
        title: "Wedding Website Builder",
        href: "/wedding-website-builder", // was: route('front.wedding.website.builder')
        normalImg: "/assets/images/services/twentyeight-28.webp",
        whiteImg: "/assets/images/services/twentyseven-27.webp",
        alt: "Wedding Website Builder",
        desc: "From portfolios to booking forms, help planners, photographers, and venues create their presence online."
      },
      {
        title: "Restaurant Website Builder",
        href: "/restaurant-website-builder", // was: route('front.restaurant.website.builder')
        normalImg: "/assets/images/services/twentysiz-26.webp",
        whiteImg: "/assets/images/services/twentyfive-25.webp",
        alt: "Restaurant Website Builder",
        desc: "Add menus, take orders, and accept reservations using tools tailored for food businesses."
      },
      {
        title: "Website Builder For Cleaning Business",
        href: "/cleaning-business-website-builder", // was: route('front.cleaning.business.website.builder')
        normalImg: "/assets/images/services/twentyfour-24.webp",
        whiteImg: "/assets/images/services/twentythree-23.webp",
        alt: "Website Builder For Cleaning Business",
        desc: "Set schedules, capture leads, and rank in local searches with optimized layouts."
      },
      {
        title: "Marketing Agency",
        href: "/marketing-agency-website-builder", // was: route('front.website.builder.for.marketing.agency')
        normalImg: "/assets/images/services/thirty-30.png",
        whiteImg: "/assets/images/services/thirty-31.png",
        alt: "Marketing Agency",
        desc: "Highlight case studies, showcase services, and drive lead generation with a high-performing site."
      },
      {
        title: "Booking System",
        href: "/booking-website-builder", // was: route('front.booking.website.builder')
        normalImg: "/assets/images/services/twentynine-29.png",
        whiteImg: "/assets/images/services/thirty-32.png",
        alt: "Booking System",
        desc: "Let your clients schedule appointments anytime using a system that syncs with your calendar."
      }
    ]
  },

  {
    id: "automotive",
    title: "Automotive",
    items: [
      {
        title: "Car Dealer Website Builder",
        href: "/car-dealer-website-builder", // was: route('front.car.dealer.website.builder')
        normalImg: "/assets/images/services/thirty-48.webp",
        whiteImg: "/assets/images/services/thirty-47.webp",
        alt: "Car Dealer Website Builder",
        desc: "Promote listings, streamline financing applications, and engage buyers with a ready-to-use digital solution."
      }
    ]
  },

  {
    id: "tech",
    title: "Tech",
    items: [
      {
        title: "Website Builder For Affiliate Marketing",
        href: "/affiliate-marketing-website-builder", // was: route('front.website.builder.for.affiliate.marketing')
        normalImg: "/assets/images/services/thirty-34.webp",
        whiteImg: "/assets/images/services/thirty-33.webp",
        alt: "Website Builder For Affiliate Marketing",
        desc: "Maximize conversions with fast-loading landing pages built for performance."
      },
      {
        title: "B2B Website Builder",
        href: "/b2b-website-builder", // was: route('front.b2b.website.builder')
        normalImg: "/assets/images/services/thirty-36.webp",
        whiteImg: "/assets/images/services/thirty-35.webp",
        alt: "B2B Website Builder",
        desc: "Create credibility and drive lead generation with tools designed to showcase your value."
      },
      {
        title: "Blog Website Builder",
        href: "/blog-website-builder", // was: route('front.blog.website.builder')
        normalImg: "/assets/images/services/thirty-38.webp",
        whiteImg: "/assets/images/services/thirty-37.webp",
        alt: "Blog Website Builder",
        desc: "Start publishing insights and ranking online with templates and built-in SEO features."
      }
    ]
  },

  {
    id: "travel",
    title: "Travel & Entertainment",
    items: [
      {
        title: "Website Builder For Artists",
        href: "/artist-website-builder", // was: route('front.artist.website.builder')
        normalImg: "/assets/images/services/thirty-40.webp",
        whiteImg: "/assets/images/services/thirty-39.webp",
        alt: "Website Builder For Artists",
        desc: "Display your portfolio using elegantly crafted templates designed specifically for visual narrators."
      },
      {
        title: "Website Builder For Photographers",
        href: "/photographers-website-builder", // was: route('front.website.builder.for.photographers')
        normalImg: "/assets/images/services/thirty-44.webp",
        whiteImg: "/assets/images/services/thirty-43.webp",
        alt: "Website Builder For Photographers",
        desc: "Display galleries, take inquiries, and sell prints with a platform tailored to your needs."
      },
      {
        title: "Hotel Website Builder",
        href: "/hotel-website-builder", // was: route('front.hotel.website.builder')
        normalImg: "/assets/images/services/thirty-42.webp",
        whiteImg: "/assets/images/services/thirty-41.webp",
        alt: "Hotel Website Builder",
        desc: "Enable direct bookings, highlight amenities, and integrate third-party booking systems effortlessly."
      },
      {
        title: "Vacation Rental",
        href: "/vacation-rental-website-builder", // was: route('front.vacation.rental.website.builder')
        normalImg: "/assets/images/services/thirty-46.webp",
        whiteImg: "/assets/images/services/thirty-45.webp",
        alt: "Vacation Rental",
        desc: "List properties, sync calendars, and accept payments through a mobile-optimized platform."
      }
    ]
  }
];


export const webBuilderIndustriesHeading = 'One Website Builder Company, Solutions for All Industries';
export const webBuilderIndustriesColumnCount = 2;
export const webBuilderIndustriesClassName = "cc1";

export const webBuilderIndustriesCards = [
  {
    title: 'Made for Local and Global Brands',
    description:
      'With our flexible web building platforms, you can grow your online presence step by step and reach your local audience with the same ease as a global one.',
    imgOriginal: '/assets/images/c01.png',
    imgWhite: '/assets/images/c5.png',
    alt: 'Made for Local and Global Brands',
    width: 100,
    height: 100,
  },
  {
    title: 'We Are Trusted By All',
    description:
      'Our web building platforms are trusted by all! <br/> From solo creators to growing companies, our platform is used by thousands who want to take control of their website without relying on outside developers.',
    imgOriginal: '/assets/images/c02.png',
    imgWhite: '/assets/images/c6.png',
    alt: 'We Are Trusted By All',
    width: 100,
    height: 100,
  },
  {
    title: 'Full eCommerce Capabilities',
    description:
      'Our built-in eCommerce tools are perfect for any scale, whether you\'re starting small or running a full storefront. It’s all part of what makes Website Digitals a go-to business web builder for sellers.',
    imgOriginal: '/assets/images/c03.png',
    imgWhite: '/assets/images/c7.png',
    alt: 'Full eCommerce Capabilities',
    width: 100,
    height: 100,
  },
  {
    title: 'SEO Tools That Help You Rank',
    description:
      'Your website should do more than just look good; it should get found. Thats why our platform includes built-in SEO features to help your pages show up in search results.<br/>From custom meta tags to fast-loading pages and clean URLs, we give you the tools to compete online, no plugins required.',
    imgOriginal: '/assets/images/c04.png',
    imgWhite: '/assets/images/c8.png',
    alt: 'SEO Tools That Help You Rank',
    width: 100,
    height: 100,
  },
];
