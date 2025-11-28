import React from 'react';
import { motion } from 'framer-motion';
import {
    HiShieldCheck,
    HiTrendingUp,
    HiLightningBolt,
    HiGlobe,
    HiClock,
    HiUserGroup
} from 'react-icons/hi';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <HiShieldCheck />,
            title: 'Enterprise-Grade Security',
            description: 'SOC2, HIPAA, and PCI compliant. Your data is always protected with industry-leading security standards.',
            color: 'purple',
        },
        {
            icon: <HiTrendingUp />,
            title: 'Proven Results',
            description: 'Our AI solutions have helped businesses increase conversion rates by up to 300% and reduce operational costs by 50%.',
            color: 'blue',
        },
        {
            icon: <HiLightningBolt />,
            title: 'Lightning Fast',
            description: 'Sub-500ms latency ensures real-time responses. Your customers never have to wait.',
            color: 'cyan',
        },
        {
            icon: <HiGlobe />,
            title: 'Multi-Language Support',
            description: 'Built-in support for Gujarati, Hindi, and English. Expand your reach with localized AI agents.',
            color: 'green',
        },
        {
            icon: <HiClock />,
            title: '99.99% Uptime',
            description: 'Industry-leading reliability with 24/7 monitoring. Your business never stops, and neither do we.',
            color: 'pink',
        },
        {
            icon: <HiUserGroup />,
            title: 'Expert Support',
            description: 'Forward-deployed team ready to help you succeed. Get white-glove onboarding and ongoing support.',
            color: 'purple',
        },
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.12,
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
        <section id="features" className="features section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="features-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Why Choose <span className="gradient-text">JashFlow</span>
                    </h2>
                    <p className="features-subtitle">
                        Built for scale, designed for success. Our AI solutions deliver measurable
                        results with enterprise-grade reliability.
                    </p>
                </motion.div>

                {/* Features Grid */}
                <motion.div
                    className="features-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-50px' }}
                >
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className={`feature-card glass-card feature-${feature.color}`}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02 }}
                        >
                            <div className={`feature-icon icon-${feature.color}`}>
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Features;
