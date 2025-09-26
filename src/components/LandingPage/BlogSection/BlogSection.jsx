import React from 'react'
import styles from './BlogSection.module.css'

const BlogSection = ({ blogs = [] }) => {
  // Default blog data if none provided
  const defaultBlogs = [
    {
      id: 1,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN",
      readTime: "12 Mins Read",
      image: "/assets/images/blog1.png",
      imageAlt: "Webflow vs WP Engine comparison",
      slug: "ecommerce-web-features"
    },
    {
      id: 2,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN", 
      readTime: "12 Mins Read",
      image: "/assets/images/blog2.png",
      imageAlt: "Webflow SEO analysis",
      slug: "webflow-seo-analysis"
    },
    {
      id: 3,
      title: "10 Must-Have Features for Ecommerce Web...",
      category: "WEB DESIGN",
      readTime: "12 Mins Read", 
      image: "/assets/images/blog3.png",
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
                <img 
                  src={blog.image} 
                  alt={blog.imageAlt}
                  className={styles.blogImage}
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
