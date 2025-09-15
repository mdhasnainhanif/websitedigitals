// components/About/AboutHero.jsx
'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function AboutHero() {
  return (
    <section className="inner-banner gradient-circle leftCenter-gradient">
      <div className="container">
        <div className="row align-items-center">
          {/* Left */}
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  About Us
                </li>
              </ol>
            </nav>

            <div className="inner-bannerHeading">
              <h1>About Us</h1>
              <p>
                Are you looking for professional website building services to boost your online presence?
                At Website Digitals, we&apos;re your dedicated team.
              </p>
              <ul>
                <li>Beautiful, responsive designs</li>
                <li>Highly secured coding</li>
                <li>Outperforming branding services</li>
              </ul>
            </div>

            <div className="link-area">
              <Link href="/brief">Get Started Now</Link>
            </div>
          </div>

          {/* Right */}
          <div className="col-md-6">
            <div className="about-imageArea">
              <Image
                src="/assets/images/about/banner/circle.png"
                className="circle-img rotation-animation"
                width={475}
                height={482}
                alt="About Us"
                priority
              />
              <Image
                src="/assets/images/about/banner/banner-img.webp"
                className="banner-img"
                width={669}
                height={607}
                alt="About Us"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
