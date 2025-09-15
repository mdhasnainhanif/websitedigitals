// components/About/SupportSection.jsx
import React from 'react';
import Image from 'next/image';

export default function SupportSection() {
  return (
    <section className="section-padding primary-extra-light-bg">
      <div className="container">
        <div className="row align-items-center rowGap4">
          <div className="col-md-6">
            <Image
              src="/assets/images/about/chat.webp"
              width={669}
              height={435}
              alt="24/7 World-Class Support"
              className="width-100 chatimg-1"
              priority
            />
          </div>
          <div className="col-md-6">
            <div className="section-heading">
              <h2>24/7 World-Class Support</h2>
              <p>
                At WebDigi, we provide 24/7 support to ensure that your website is always running smoothly.
                Our dedicated team is here to assist you with any issues at any time.
              </p>
              <ul>
                <li>Round-the-clock assistance</li>
                <li>Prompt resolution of issues</li>
                <li>Dedicated support team</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
