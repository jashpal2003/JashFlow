import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowRight, HiMail, HiPhone } from 'react-icons/hi';
import './CTA.css';

const CTA = ({ openBooking }) => {
    return (
        <section id="contact" className="cta section">
            <div className="cta-background">
                <div className="cta-orb cta-orb-1"></div>
                <div className="cta-orb cta-orb-2"></div>
            </div>

            <div className="container">
                <motion.div
                    className="cta-content glass-card"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-text">
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            Ready to Transform Your Business with{' '}
                            <span className="gradient-text">AI?</span>
                        </motion.h2>

                        <motion.p
                            className="cta-subtitle"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                        >
                            Join 250,000+ businesses already leveraging JashFlow's AI solutions.
                            Get started today and see results in days, not months.
                        </motion.p>

                        <motion.div
                            className="cta-buttons"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.6 }}
                        >
                            <a href="#contact" className="btn btn-primary cta-btn">
                                Start Free Trial
                                <HiArrowRight />
                            </a>
                            <button
                                onClick={openBooking}
                                className="btn btn-secondary cta-btn"
                                type="button"
                            >
                                Schedule Demo
                            </button>
                        </motion.div>

                        <motion.div
                            className="cta-contact"
                            initial={{ opacity: 0 }}
                            whileInView={{ opacity: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.8 }}
                        >
                            <div className="contact-item">
                                <HiMail />
                                <a href="mailto:hello@jashflow.ai">hello@jashflow.ai</a>
                            </div>
                            <div className="contact-divider"></div>
                            <div className="contact-item">
                                <HiPhone />
                                <a href="tel:+911234567890">+91 123 456 7890</a>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
