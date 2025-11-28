import React from 'react';
import { motion } from 'framer-motion';
import { HiStar } from 'react-icons/hi';
import './Testimonials.css';

const Testimonials = () => {
    const testimonials = [
        {
            id: 1,
            name: 'Rajesh Patel',
            position: 'CEO',
            company: 'TechVision India',
            image: 'https://ui-avatars.com/api/?name=Rajesh+Patel&background=8b5cf6&color=fff&size=128',
            rating: 5,
            text: 'LeadGen AI transformed our customer engagement. We saw a 250% increase in qualified leads within the first month. The multilingual support is a game-changer for our diverse customer base.',
        },
        {
            id: 2,
            name: 'Priya Sharma',
            position: 'Marketing Director',
            company: 'EduTech Solutions',
            image: 'https://ui-avatars.com/api/?name=Priya+Sharma&background=3b82f6&color=fff&size=128',
            rating: 5,
            text: 'ScoreSense helped us focus on the right leads. Our conversion rate improved by 180%, and our sales team is now more efficient than ever. Best investment we made this year!',
        },
        {
            id: 3,
            name: 'Amit Kumar',
            position: 'Founder',
            company: 'StartupHub',
            image: 'https://ui-avatars.com/api/?name=Amit+Kumar&background=06b6d4&color=fff&size=128',
            rating: 5,
            text: 'SDR Boost automated our entire outbound prospecting. We closed 5 major deals in 2 months that we would have never reached manually. Exceptional ROI!',
        },
        {
            id: 4,
            name: 'Sneha Iyer',
            position: 'Head of Growth',
            company: 'RetailPro',
            image: 'https://ui-avatars.com/api/?name=Sneha+Iyer&background=ec4899&color=fff&size=128',
            rating: 5,
            text: 'PersonaX took our email campaigns to the next level. The AI-powered personalization resulted in a 320% increase in click-through rates. Simply amazing!',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="testimonials" className="testimonials section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="testimonials-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Trusted by <span className="gradient-text">Industry Leaders</span>
                    </h2>
                    <p className="testimonials-subtitle">
                        See what our customers say about transforming their business with JashFlow AI
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <motion.div
                    className="testimonials-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {testimonials.map((testimonial) => (
                        <motion.div
                            key={testimonial.id}
                            className="testimonial-card glass-card"
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, y: -5 }}
                        >
                            {/* Rating Stars */}
                            <div className="testimonial-rating">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <HiStar key={i} className="star-icon" />
                                ))}
                            </div>

                            {/* Testimonial Text */}
                            <p className="testimonial-text">"{testimonial.text}"</p>

                            {/* Author Info */}
                            <div className="testimonial-author">
                                <img
                                    src={testimonial.image}
                                    alt={testimonial.name}
                                    className="author-image"
                                />
                                <div className="author-info">
                                    <h4 className="author-name">{testimonial.name}</h4>
                                    <p className="author-position">
                                        {testimonial.position} at {testimonial.company}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Trust Badges */}
                <motion.div
                    className="trust-badges"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <div className="trust-badge">
                        <span className="badge-number gradient-text">4.9/5</span>
                        <span className="badge-label">Customer Rating</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <span className="badge-number gradient-text">500+</span>
                        <span className="badge-label">Happy Clients</span>
                    </div>
                    <div className="trust-divider"></div>
                    <div className="trust-badge">
                        <span className="badge-number gradient-text">98%</span>
                        <span className="badge-label">Satisfaction Rate</span>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Testimonials;
