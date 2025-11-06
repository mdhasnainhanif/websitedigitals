'use client';
import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'next/navigation';
import { EmailIcon, LocationIcon, PhoneIcon } from '@/icons';
interface ContactFormData {
  fname: string;
  lname: string;
  businessemail: string;
  phone: string;
  companyname: string;
  service: string;
  message: string;
  gclid: string;
  fbclid: string;
  igclid: string;
  ttclid: string;
  fingerprint: string;
  chat: string;
}
export default function ContactBanner() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState<ContactFormData>({
    fname: '',
    lname: '',
    businessemail: '',
    phone: '',
    companyname: '',
    service: '',
    message: '',
    gclid: '',
    fbclid: '',
    igclid: '',
    ttclid: '',
    fingerprint: '',
    chat: '',
  });
  useEffect(() => {
    if (searchParams) {
      setFormData(prev => ({
        ...prev,
        gclid: searchParams.get('gclid') || '',
        fbclid: searchParams.get('fbclid') || '',
        igclid: searchParams.get('igclid') || '',
        ttclid: searchParams.get('ttclid') || '',
        fingerprint: searchParams.get('fingerprint') || '',
      }));
    }
  }, [searchParams]);
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
      console.log('Form submitted:', formData);
      setShowSuccess(true);
    } catch (error) {
      console.error('Form submission error:', error);
      setShowError(true);
    }
  };
  return (
    <section className="inner-banner">
      <div className="container">
        <div className="row rowGap4 col-reverse-mob">
          <div className="col-md-6">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <a href="#">Home</a>
                </li>
                <li className="breadcrumb-item active" aria-current="page">
                  Contact Us
                </li>
              </ol>
            </nav>
            <form
              method="post"
              action=""
              className="contactPage-formArea"
              id="contactformsec"
              onSubmit={handleSubmit}
            >
              <div className="row">
                <div className="col-12">
                  <h3>Fill Out The Form And We&apos;ll Get in Touch With You Shortly.</h3>
                </div>
                <div className="col-md-6">
                  <div className="basic-inputArea">
                    <input
                      type="text"
                      placeholder="First Name"
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
                    <input
                      type="text"
                      placeholder="Last Name"
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
                    <input
                      type="email"
                      placeholder="Business Email"
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
                    <input
                      type="text"
                      className="phone-number"
                      placeholder="Phone Number"
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
                    <input
                      type="text"
                      placeholder="Company Name"
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
                    <select
                      name="service"
                      className='nice-select'
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
                    <textarea
                      placeholder="Your Project Details"
                      name="message"
                      id="contactsec_message"
                      value={formData.message}
                      onChange={handleInputChange}
                    />
                  </div>
                </div>
                <div className="col-12">
                  <div className="form-group g-recaptcha-response">
                    <div
                      className="g-recaptcha"
                      data-sitekey={process.env.NEXT_PUBLIC_GOOGLE_CAPTCHA_SITE_KEY}
                    />
                  </div>
                  <span className="validation-error text-danger g-recaptcha-error"></span>
                </div>
                <div className="col-12">
                  <div className="basic-inputArea">
                    <input name="gclid" type="hidden" value={formData.gclid} />
                    <input name="fbclid" type="hidden" value={formData.fbclid} />
                    <input name="igclid" type="hidden" value={formData.igclid} />
                    <input name="ttclid" type="hidden" value={formData.ttclid} />
                    <input name="fingerprint" type="hidden" value={formData.fingerprint} />
                    <input name="chat" type="hidden" value={formData.chat} />
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
          <div className="col-md-6">
            <div className="contactPage-heading">
              <h1>Talk To An Expert</h1>
              <p>
                At Website Digitals, we are committed to providing expert guidance and personalized solutions for all your digital needs.
                Whether you have questions about our services, need assistance with your project, or seek professional advice, our
                team is here to help. Contact us through our contact form, email, or phone, and let us collaborate to bring your
                vision to life. Your success is our priority, and we look forward to working with you to achieve your goals.
              </p>
              <ul className="contactPage-list">
                <li>
                  <PhoneIcon />
                  <div className="contactPage-listDetail">
                    <h2>Book a Call</h2>
                    <p>(646)-222-3598</p>
                  </div>
                </li>
                <li>
                  <EmailIcon />
                  <div className="contactPage-listDetail">
                    <h2>Email Us</h2>
                    <p>info@websitedigitals.com</p>
                  </div>
                </li>
                <li>
                  <LocationIcon />
                  <div className="contactPage-listDetail">
                    <h2>Location</h2>
                    <p>175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}