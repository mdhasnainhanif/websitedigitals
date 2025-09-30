import React from 'react'
import styles from './TestimonialSlider.module.css'

// Interface for testimonial data structure
const TestimonialSlider = ({ testimonials = [] }) => {
  // Default testimonials data if none provided
  const defaultTestimonials = [
    {
      id: 1,
      name: "Orlando Diggs",
      position: "CEO",
      company: "TechCorp",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 2,
      name: "Mollie Hall",
      position: "Marketing Director",
      company: "Digital Solutions",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 3,
      name: "Lori Bryson",
      position: "CTO",
      company: "InnovateLab",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 4,
      name: "Kate Morrison",
      position: "Product Manager",
      company: "FutureTech",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 5,
      name: "David Chen",
      position: "Founder",
      company: "StartupXYZ",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 6,
      name: "Sarah Johnson",
      position: "Design Lead",
      company: "Creative Agency",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 7,
      name: "Orlando Diggs",
      position: "CEO",
      company: "TechCorp",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 8,
      name: "Mollie Hall",
      position: "Marketing Director",
      company: "Digital Solutions",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 9,
      name: "Lori Bryson",
      position: "CTO",
      company: "InnovateLab",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 10,
      name: "Kate Morrison",
      position: "Product Manager",
      company: "FutureTech",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 11,
      name: "David Chen",
      position: "Founder",
      company: "StartupXYZ",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&h=150&fit=crop&crop=face"
    },
    {
      id: 12,
      name: "Sarah Johnson",
      position: "Design Lead",
      company: "Creative Agency",
      rating: 5,
      quote: "I am incredibly impressed with the outstanding service and user-friendly customer support provided by Remap",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&h=150&fit=crop&crop=face"
    }
  ]

  // Use provided testimonials or default ones
  const testimonialData = testimonials.length > 0 ? testimonials : defaultTestimonials

  // Duplicate testimonials for seamless infinite scroll
  const duplicatedTestimonials = [...testimonialData, ...testimonialData]

  // Split testimonials for two rows (first 4 for top row, rest for bottom row)
  const topRowTestimonials = duplicatedTestimonials.slice(0, 8) // First 4 + duplicates
  const bottomRowTestimonials = duplicatedTestimonials.slice(0, 8) // Same testimonials for bottom row

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span key={index} className={styles.star}>
        ★
      </span>
    ))
  }

  return (
    <div className={`section-padding ${styles.testimonialSection}`}>
      <div className='container-fluid'>
        <div className='section-heading text-center'>
          <h2 className={styles.title}>
            <span className={styles.titleBlack}>What They Are</span>
            <span className={styles.titleBlue}> Talking About Us</span>
          </h2>
        </div>
        
        <div className={styles.sliderContainer}>
          {/* Top Row - Moving Left */}
          <div className={styles.sliderRow}>
            <div className={`${styles.slider} ${styles.sliderLeft}`}>
              {topRowTestimonials.map((testimonial, index) => (
                <div key={`top-${testimonial.id}-${index}`} className={styles.testimonialCard}>
                  <div className={styles.starsContainer}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className={styles.quote}>
                    "{testimonial.quote}"
                  </p>
                  <div className={styles.reviewerInfo}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className={styles.avatar}
                    />
                    <div className={styles.reviewerDetails}>
                      <h4 className={styles.reviewerName}>{testimonial.name}</h4>
                      <p className={styles.reviewerPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Row - Moving Right */}
          <div className={styles.sliderRow}>
            <div className={`${styles.slider} ${styles.sliderRight}`}>
              {bottomRowTestimonials.map((testimonial, index) => (
                <div key={`bottom-${testimonial.id}-${index}`} className={styles.testimonialCard}>
                  <div className={styles.starsContainer}>
                    {renderStars(testimonial.rating)}
                  </div>
                  <p className={styles.quote}>
                    "{testimonial.quote}"
                  </p>
                  <div className={styles.reviewerInfo}>
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name}
                      className={styles.avatar}
                    />
                    <div className={styles.reviewerDetails}>
                      <h4 className={styles.reviewerName}>{testimonial.name}</h4>
                      <p className={styles.reviewerPosition}>
                        {testimonial.position}, {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialSlider
