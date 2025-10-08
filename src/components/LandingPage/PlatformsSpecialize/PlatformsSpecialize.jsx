"use client";

import React from "react";
import styles from "./PlatformsSpecialize.module.css";
import { Container, Row, Col } from "react-bootstrap";

const PlatformsSpecialize = ({ data, sectionData = null }) => {
    const defaultSectionData = {
        heading: "Platforms We Specialize In",
        description: "We design high-converting landing pages across today's most trusted platforms. Our expertise ensures every business, whether e-commerce, service-based, or enterprise, gets a tailored solution built for performance, scalability, and growth."
    };
    
    const section = sectionData || defaultSectionData;
    return (
        <section className={styles.platformSection}>
            <Container>
                <div className={styles.heading}>
                    <h2>
                        {section.heading}
                    </h2>
                    <p>
                        {section.description}
                    </p>
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
                                    <img src={item.icon} alt={item.title} />
                                </div>
                                <div className={styles.platformCardContent}>
                                    <h3>{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Container>
        </section>
    );
};

export default PlatformsSpecialize;
