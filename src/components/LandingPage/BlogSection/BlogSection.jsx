import React from 'react'
import styles from './BlogSection.module.css'
import Image from 'next/image'

const BlogSection = ({ blogs = [] }) => {
  // Default blog data if none provided
  const defaultBlogs = [
    {
      id: 1,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN",
      readTime: "12 Mins Read",
      image: "/assets/images/blog1.webp",
      imageAlt: "Webflow vs WP Engine comparison",
      slug: "ecommerce-web-features"
    },
    {
      id: 2,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN", 
      readTime: "12 Mins Read",
      image: "/assets/images/blog2.webp",
      imageAlt: "Webflow SEO analysis",
      slug: "webflow-seo-analysis"
    },
    {
      id: 3,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN",
      readTime: "12 Mins Read", 
      image: "/assets/images/blog3.webp",
      imageAlt: "Webflow CMS interface",
      slug: "webflow-cms-guide"
    }
  ]

  // Use provided blogs or default ones
  const blogData = blogs.length > 0 ? blogs : defaultBlogs

  return (
    <div className={`section-padding ${styles.blogSection}`}>
      <div className='container-fluid'>
        <div className='section-heading text-center'>
          <h2 className={styles.title}>Recent Blogs</h2>
        </div>
        
        <div className={styles.blogGrid}>
          {blogData.map((blog, index) => (
            <div key={blog.id} className={styles.blogCard}>
              <div className={styles.imageContainer}>
                <Image
                  width={375}
                  height={200}
                  src={blog.image} 
                  alt={blog.imageAlt}
                  className={styles.blogImage}
                  loading="lazy"
                />
              </div>
              
              <div className={styles.blogContent}>
                <div className={styles.categoryTag}>
                  {blog.category}
                </div>
                
                <h3 className={styles.blogTitle}>
                  {blog.title}
                </h3>
                
                <div className={styles.readTime}>
                  {blog.readTime}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default BlogSection
