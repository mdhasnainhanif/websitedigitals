'use client';

import { RightArrowIcon } from "../../../icons";

export default function CtaForm() {

  return (
    <section className="section-padding cta-section" id="newsletter-webbuilder">
      <div className="container">
        <div className="row justify-content-center text-center">
          <div className="section-heading text-center mb-0">
            <h2 className="text-white">
              Get Your Website Up And Running With A Domain Name That's All Yours!
            </h2>
          </div>

          <form className="banner-form" action="" method="POST">
            <img
              src={`/assets/images/banner/pencil.png`}
              width="24"
              height="24"
              alt="Get Your Website Up And Running With A Domain Name That's All Yours!"
              loading="lazy"
              decoding="async"
            />

            <input
              type="text"
              placeholder="Enter Your Business Name"
              name="cname"
              required
              id="logo-brief-cname"
            />

            <button type="submit" className="submit">
              Search <RightArrowIcon/>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
