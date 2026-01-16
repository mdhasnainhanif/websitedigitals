"use client";

import React from "react";
import styles from "./PlatformsSpecialize.module.css";
import { Container, Row, Col } from "react-bootstrap";
import Image from "next/image";

const PlatformsSpecialize = ({ data, sectionData = null }) => {
    const defaultSectionData = {
        heading: "Platforms We Specialize In",
        description: "We design high-converting landing pages across today's most trusted platforms. Our expertise ensures every business, whether e-commerce, service-based, or enterprise, gets a tailored solution built for performance, scalability, and growth.",
        showDescription: true
    };
    
    const section = sectionData || defaultSectionData;
    return (
        <section className={styles.platformSection}>
            <Container>
                    <div className={styles.heading}>
                        <h2>
                            {section.heading}
                        </h2>
                        {section.showDescription && section.description && (
                            <p>
                                {section.description}
                            </p>
                        )}
                    </div>

                <Row className="justify-content-center rowGap2">
                    {data.map((item) => (
                        <Col
                            key={item.id}
                            md={6}
                            lg={6}
                            className={`${styles.platformBox} ${item.colClass || ""}`}
                        >
                            <div className={styles.platformCard}>
                                <div className={styles.iconWrapper}>
                                    {item.image ? <Image className="d-block me-auto w_fit" width={80} height={80} src={item.image} alt={item.title}  /> : <img src={item.icon} alt={item.title} />}
                                </div>
                                <div className={styles.platformCardContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
                
                {/* CTA Section */}
                {section.cta && section.cta.show && (
                    <div className="row mt-5">
                        <div className="col-12 text-center">
                            <div className="link-area">
                                <a 
                                    href={section.cta.href || "#"} 
                                    className={section.cta.className || "primary book-your-call"}
                                >
                                    {section.cta.text}
                                </a>
                            </div>
                        </div>
                    </div>
                )}
            </Container>
        </section>
    );
};

export default PlatformsSpecialize;
