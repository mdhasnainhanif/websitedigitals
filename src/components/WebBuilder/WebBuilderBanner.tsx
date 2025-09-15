import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function WebBuilderBanner() {
  return (
    <section className="inner-banner gradient-circle leftCenter-gradient">
      <div className="container">
        <div className="row align-items-center mb-5">
          {/* Left Column - Content */}
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <Link href="/">Home</Link>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Web Builder
                </li>
              </ol>
            </nav>
            
            <div className="inner-bannerHeading">
              <h1>Zero Tech Skills? You&apos;ll Still Win with the Best Website Builder</h1>
              <p className="mb-0">
                Do you think putting your business online is a hassle or too expensive? Rethink your thoughts.
              </p>
              <p className="mb-0">
                With{' '}
                <Link 
                  href="/" 
                  target="_blank" 
                  style={{ color: 'var(--primary)' }}
                >
                  Website Digitals
                </Link>
                , you can get all you need without feeling overwhelmed from smart tools, beautiful design, and quick results, we cover it all!
              </p>
              <p className="mb-0">
                If you&apos;re looking to build a personal brand, showcasing services, or launch an online store, our online web builder is here to help you out.
              </p>
              <p className="mb-0">
                Our easy-to-use interface lets you focus on building instead of dealing with backend issues.
              </p>
              <p className="mb-0">
                So are you looking for the best website builder to take your business online? You just discovered it.
              </p>
            </div>
            
            <div className="link-area">
              <Link href="/brief">Get Started Now</Link>
            </div>
          </div>

          {/* Right Column - Image */}
          <div className="col-md-6">
            <div className="industry-imageArea">
              <Image
                className="w-100"
                src="/assets/images-webp/web-builder-Banner.webp"
                width={669}
                height={473}
                alt="Web Builder"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}