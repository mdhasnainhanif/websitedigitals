// /components/TrustpilotSection.jsx

export default function TrustpilotSection({
    link = 'https://www.trustpilot.com/review/websitedigitals.com',
    ratingWord = 'Excellent',
    ratingValue = '4.7',
    reviewsCount = '89,720',
  }) {
    return (
      <section className="section-padding reviews-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="about-top-text m-0">
                <p>
                  <span className="text-white left-side11">
                    Our customers say <strong>{ratingWord}</strong>
                  </span>
                  <a
                    className="mx-2"
                    href={link}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-text="trustpilot"
                    aria-label="View our Trustpilot reviews"
                  >
                    <img
                      className="trustpilot-img"
                      src={`/assets/images/trust-pilot.png`}
                      alt="trustpilot"
                      width="300"
                      height="36"
                      loading="lazy"
                    />
                  </a>
                  <span className="text-white mx-2">
                    {ratingValue} out 5 stars based on {reviewsCount} reviews
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
  