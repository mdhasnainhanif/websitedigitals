'use client';

import React, { useState } from 'react';
import Image from 'next/image';

interface ContactFormData {
  fname: string;
  lname: string;
  businessemail: string;
  phone: string;
  companyname: string;
  service: string;
  message: string;
}

export default function ContactSection() {
  const [formData, setFormData] = useState<ContactFormData>({
    fname: '',
    lname: '',
    businessemail: '',
    phone: '',
    companyname: '',
    service: '',
    message: '',
  });

  const [showSuccess, setShowSuccess] = useState(false);
  const [showError, setShowError] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setShowSuccess(false);
    setShowError(false);

    try {
      // Add your form submission logic here
      console.log('Form submitted:', formData);
      setShowSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
    }
  };

  return (
    <>
      <style jsx>{`
        .contactPage-listDetail {
          max-width: 16rem;
        }
        
        .basic-inputArea {
          position: relative;
        }
        
        .basic-inputArea > select:has(+ .nice-select) {
          display: block !important;
          position: absolute;
          pointer-events: none;
          z-index: -1;
          opacity: 0;
        }
      `}</style>

      <section 
        className="section-padding split-section innerPage-contactSection gradient-circle light-gradient rightCenter-gradient" 
        id="contact"
      >
        <div className="container">
          <div className="row">
            {/* Left Column - Contact Info */}
            <div className="col-md-6 position-relative">
              <div className="lightBlue-area">
                <div className="section-heading">
                  <p className="topHeading">Get In touch</p>
                  <h2>Let&apos;s Build Together</h2>
                  <p>
                    At Website Digitals, we are committed to providing expert
                    guidance and personalized solutions for all your digital
                    needs. Whether you have questions about our services, need
                    assistance or seek professional advice, our
                    team is here to help.
                  </p>
                </div>
                
                <ul className="contactPage-list">
                  <li>
                    <i className="fa fa-phone"></i>
                    <div className="contactPage-listDetail">
                      <p>Phone Number</p>
                      <a href="tel:(646)-222-3598">(646)-222-3598</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-envelope"></i>
                    <div className="contactPage-listDetail">
                      <p>Email</p>
                      <a href="mailto:info@websitedigitals.com">info@websitedigitals.com</a>
                    </div>
                  </li>
                  <li>
                    <i className="fa fa-map-marker-alt"></i>
                    <div className="contactPage-listDetail">
                      <p>Address</p>
                      <p>175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201</p>
                    </div>
                  </li>
                </ul>
                
                <Image
                  src="/assets/images/contact/inner-contact.png"
                  width={683}
                  height={504}
                  className="inner-contactImg"
                  alt="inner-contact"
                />
              </div>
            </div>

            {/* Right Column - Contact Form */}
            <div className="col-md-6 position-relative">
              <div className="dark-area innerPage-contactArea">
                <form method="post" action="" id="contactformsec" onSubmit={handleSubmit}>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="basic-inputArea">
                        <label>First Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="fname"
                          id="contactsec_fname"
                          value={formData.fname}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basic-inputArea">
                        <label>Last Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="lname"
                          id="contactsec_lname"
                          value={formData.lname}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basic-inputArea">
                        <label>Business Email</label>
                        <input
                          type="email"
                          placeholder=""
                          name="businessemail"
                          id="contactsec_businessemail"
                          value={formData.businessemail}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="basic-inputArea">
                        <label>Phone Number</label>
                        <input
                          type="text"
                          className="phone-number"
                          name="phone"
                          id="contactsec_phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-md-12">
                      <div className="basic-inputArea">
                        <label>Company Name</label>
                        <input
                          type="text"
                          placeholder=""
                          name="companyname"
                          id="contactsec_companyname"
                          value={formData.companyname}
                          onChange={handleInputChange}
                          required
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basic-inputArea">
                        <label>What can we help with you?</label>
                        <select
                          name="service"
                          id="contactsec_service"
                          value={formData.service}
                          onChange={handleInputChange}
                          required
                        >
                          <option value="" disabled hidden>
                            Select Your Service
                          </option>
                          <option value="Custom Web Design">Custom Web Design</option>
                          <option value="Website Redesign">Website Redesign</option>
                          <option value="Wordpress Web Design">Wordpress Web Design</option>
                          <option value="Shopify Web Design">Shopify Web Design</option>
                          <option value="Magento Web Design">Magento Web Design</option>
                          <option value="Drupal Web Design">Drupal Web Design</option>
                          <option value="Joomla Web Design">Joomla Web Design</option>
                          <option value="Branding">Branding</option>
                          <option value="Digital Marketing">Digital Marketing</option>
                        </select>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basic-inputArea">
                        <label>Message</label>
                        <textarea
                          placeholder=""
                          name="message"
                          id="contactsec_message"
                          value={formData.message}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="basic-inputArea mt-3">
                        <div className="form-group g-recaptcha-response">
                          <div className="g-recaptcha" data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}></div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12 mt-3">
                      <div className="basic-inputArea">
                        <button type="submit" name="submit">
                          Submit Your Request
                        </button>
                      </div>
                    </div>
                  </div>
                </form>
                
                <div className="contactsecnpagealert mt-3">
                  {showSuccess && (
                    <div className="alert alert-success" role="alert">
                      <p className="mb-0">Congratulations!!! Your form has been submitted.</p>
                    </div>
                  )}
                  {showError && (
                    <div className="alert alert-danger" role="alert">
                      <p className="mb-0">Error submitting form!!!</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}