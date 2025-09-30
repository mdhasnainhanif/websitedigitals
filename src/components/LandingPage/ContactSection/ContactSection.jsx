'use client'
import React, { useState } from 'react'
import styles from './ContactSection.module.css'

const ContactSection = ({ contactData = {} }) => {
  // Default contact data if none provided
  const defaultContactData = {
    title: "Let's create something out of this world together.",
    description: "Have a project in mind? Contact us for expert design and development solutions. Let's discuss how we can help grow your business.",
    contactInfo: {
      phone: "(646)-222-3598",
      email: "info@websitedigitals.com",
      address: "175 Pearl Street Dumbo, 1st, 2nd and 3rd Floor, Dumbo, NY 11201"
    },
    image: "/assets/images/support.png",
    imageAlt: "Customer service team with headsets"
  }

  // Use provided data or defaults
  const data = { ...defaultContactData, ...contactData }

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    helpType: "",
    budget: "",
    deadline: "",
    hearAbout: "",
    message: ""
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
  }

  return (
    <div className={`section-padding ${styles.contactSection}`}>
      <div className="container">
        {/* Header Section */}
        <div className="row mb-5">
          <div className="section-heading text-center col-12 text-center">
            <h2>{data.title}</h2>
            <p>{data.description}</p>
          </div>
        </div>

        {/* Main Content */}
        <div className="row">
          {/* Left Column - Contact Info & Image */}
          <div className="col-lg-6 col-md-12 mb-4">
            <div className={styles.contactInfoSection}>
              {/* Image */}
              <div className={styles.imageContainer}>
                <div className={styles.imageWrapper}>
                  <img 
                    src={data.image} 
                    alt={data.imageAlt}
                    className={styles.contactImage}
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className={styles.contactDetails}>
                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-phone"></i>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Phone Number</span>
                    <span className={styles.contactValue}>{data.contactInfo.phone}</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-envelope"></i>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Email</span>
                    <span className={styles.contactValue}>{data.contactInfo.email}</span>
                  </div>
                </div>

                <div className={styles.contactItem}>
                  <div className={styles.contactIcon}>
                    <i className="fas fa-map-marker-alt"></i>
                  </div>
                  <div className={styles.contactText}>
                    <span className={styles.contactLabel}>Address</span>
                    <span className={styles.contactValue}>{data.contactInfo.address}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Contact Form */}
          <div className="col-lg-6 col-md-12">
            <div className={styles.formContainer}>
              <form onSubmit={handleSubmit} className={styles.contactForm}>
                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="Tony Stark"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="tony@starkindustries.com"
                      required
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>How We Can Help?</label>
                    <select
                      name="helpType"
                      value={formData.helpType}
                      onChange={handleInputChange}
                      className={styles.formInput}
                    >
                      <option value="">Select</option>
                      <option value="Web Development">Web Development</option>
                      <option value="Mobile App">Mobile App</option>
                      <option value="UI/UX Design">UI/UX Design</option>
                      <option value="Digital Marketing">Digital Marketing</option>
                      <option value="Consulting">Consulting</option>
                    </select>
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>What's Your Budget?</label>
                    <input
                      type="text"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="5000$"
                    />
                  </div>
                </div>

                <div className="row">
                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>What's Your Project Deadline?*</label>
                    <input
                      type="text"
                      name="deadline"
                      value={formData.deadline}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      placeholder="1 month"
                      required
                    />
                  </div>

                  <div className="col-md-6 mb-3">
                    <label className={styles.formLabel}>How Did You Hear About Us?*</label>
                    <select
                      name="hearAbout"
                      value={formData.hearAbout}
                      onChange={handleInputChange}
                      className={styles.formInput}
                      required
                    >
                      <option value="">Linkedin</option>
                      <option value="Google">Google</option>
                      <option value="Facebook">Facebook</option>
                      <option value="Referral">Referral</option>
                      <option value="Other">Other</option>
                    </select>
                  </div>
                </div>

                <div className="mb-4">
                  <label className={styles.formLabel}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    className={`${styles.formInput} ${styles.textarea}`}
                    rows="4"
                    placeholder="Your Message"
                  ></textarea>
                </div>

                <a className='link-area' href="">
                <button type="submit" className="offer-btn primary ">
                  Submit and Book a call
                  <i className="fas fa-video ms-2"></i>
                </button>
                </a>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactSection
