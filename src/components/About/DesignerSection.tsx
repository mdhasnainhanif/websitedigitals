// components/DesignerSection.jsx
import Image from 'next/image';
import styles from './About.module.css'

const items = [
  {
    src: '/assets/images/why-choose-us/1.png',
    alt: 'Years Of Experience',
    title: 'Years Of Experience',
    desc:
      'With years of experience, we have polished our skills to provide exceptional services that meet your needs and exceed your expectations.',
  },
  {
    src: '/assets/images/why-choose-us/2.png',
    alt: 'Full-Service Studio',
    title: 'Full-Service Studio',
    desc:
      'We are a full-service studio offering comprehensive solutions from development to marketing. We ensure all your digital needs are met under one roof.',
  },
  {
    src: '/assets/images/why-choose-us/3.png',
    alt: 'Quality Work',
    title: 'Quality Work',
    desc:
      'Our focus on quality ensures that every project we undertake meets the highest standards of excellence and professionalism.',
  },
  {
    src: '/assets/images/why-choose-us/4.png',
    alt: 'Affordable',
    title: 'Affordable',
    desc:
      'We believe in delivering high-quality services at affordable prices, ensuring that you get the best value for your investment.',
  },
  {
    src: '/assets/images/why-choose-us/5.png',
    alt: 'Quick Turnaround Time',
    title: 'Quick Turnaround Time',
    desc:
      'Our efficient processes and dedicated team ensure quick turnaround times without compromising on quality.',
  },
  {
    src: '/assets/images/why-choose-us/6.png',
    alt: 'Latest Technology',
    title: 'Latest Technology',
    desc:
      'We leverage the latest technology to deliver innovative solutions that keep you ahead of the competition.',
  },
];

export default function DesignerSection() {
  return (
    <section className={`${styles.section_padding} ${styles.gradient_circle} ${styles.leftCenter_gradient}`}>
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className={`${styles.section_heading} ${styles.text_center}`}>
              <h2>Build Your Own Website Without a Designer</h2>
            </div>
          </div>
        </div>

        <div className={`row ${styles.rowGap4}`}>
          {items.map((item, i) => (
            <div className="col-md-4" key={i}>
              <div className={`${styles.single_whyChooseUs}`}>
                <Image
                  src={item.src}
                  width={109}
                  height={109}
                  alt={item.alt}
                />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
