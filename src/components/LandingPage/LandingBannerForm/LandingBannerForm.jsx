"use client";

import React, { useState } from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import styles from "./LandingBannerForm.module.css";

const LandingBannerForm = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        help: "",
        budget: "",
        message: "",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", formData);
    };

    return (
        <section className={styles.formSection}>
            <Container>
                <div className={styles.formWrapper}>
                    <h2 className={styles.heading}>Get In Touch With Us</h2>

                    <Form onSubmit={handleSubmit}>
                        <Row className="gy-4">
                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="name"
                                        placeholder="Tony Stark"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        name="email"
                                        placeholder="tony@starkindustries.com"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>How We Can Help?</Form.Label>
                                    <Form.Select
                                        name="help"
                                        value={formData.help}
                                        onChange={handleChange}
                                        className={styles.input}
                                    >
                                        <option value="">Select</option>
                                        <option value="web">Web Development</option>
                                        <option value="design">UI/UX Design</option>
                                        <option value="marketing">Digital Marketing</option>
                                    </Form.Select>
                                </Form.Group>
                            </Col>

                            <Col md={6}>
                                <Form.Group>
                                    <Form.Label>What’s Your Budget?</Form.Label>
                                    <Form.Control
                                        type="text"
                                        name="budget"
                                        placeholder="5000$"
                                        value={formData.budget}
                                        onChange={handleChange}
                                        className={styles.input}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={12}>
                                <Form.Group>
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        name="message"
                                        rows={4}
                                        placeholder="Your Message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        className={styles.textarea}
                                    />
                                </Form.Group>
                            </Col>

                            <Col md={12} className="text-center mt-3">
                                <Button type="submit" className={styles.submitBtn}>
                                    Submit and Book a call <span>📞</span>
                                </Button>
                            </Col>
                        </Row>
                    </Form>
                </div>
            </Container>
        </section>
    );
};

export default LandingBannerForm;
