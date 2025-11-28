import React from 'react';
import { motion } from 'framer-motion';
import {
    HiChatAlt2,
    HiChartBar,
    HiLightningBolt,
    HiCog,
    HiSparkles
} from 'react-icons/hi';
import './Products.css';

const Products = () => {
    const products = [
        {
            id: 1,
            name: 'LeadGen AI',
            category: 'RAG Lead Bot',
            icon: <HiChatAlt2 />,
            promise: 'Convert visitors → WhatsApp leads (Gujarati/Hindi/English)',
            bestFor: 'E-commerce, education, CA firms',
            businessModel: 'Setup + monthly',
            gradient: 'gradient-purple',
        },
        {
            id: 2,
            name: 'ScoreSense',
            category: 'Predictive Scoring',
            icon: <HiChartBar />,
            promise: 'Prioritize top 20% leads & actions',
            bestFor: 'Agencies, B2B companies',
            businessModel: 'One-time + retainer',
            gradient: 'gradient-blue',
        },
        {
            id: 3,
            name: 'SDR Boost',
            category: 'AI Prospecting',
            icon: <HiLightningBolt />,
            promise: 'Done-for-you outbound prospecting',
            bestFor: 'IT agencies, industrial B2B',
            businessModel: 'Monthly + performance fee',
            gradient: 'gradient-cyan',
        },
        {
            id: 4,
            name: 'FlowForge',
            category: 'Multi-Agent Orchestration',
            icon: <HiCog />,
            promise: 'Internal agent engine (not for sale yet)',
            bestFor: 'Your infrastructure',
            businessModel: 'Internal',
            gradient: 'gradient-pink',
        },
        {
            id: 5,
            name: 'PersonaX',
            category: 'Hyper-Personalization',
            icon: <HiSparkles />,
            promise: 'AI-powered high-conversion campaigns',
            bestFor: 'Retail, D2C, education',
            businessModel: 'Retainer or % uplift',
            gradient: 'gradient-green',
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
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <section id="products" className="products section">
            <div className="container">
                {/* Section Header */}
                <motion.div
                    className="products-header"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <h2>
                        Our <span className="gradient-text">AI Products</span>
                    </h2>
                    <p className="products-subtitle">
                        Powerful AI solutions designed to transform your business operations
                        and drive measurable results
                    </p>
                </motion.div>

                {/* Products Grid */}
                <motion.div
                    className="products-grid"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: '-100px' }}
                >
                    {products.map((product) => (
                        <motion.div
                            key={product.id}
                            className={`product-card glass-card ${product.gradient}`}
                            variants={itemVariants}
                            whileHover={{
                                scale: 1.03,
                                transition: { duration: 0.3 }
                            }}
                        >
                            {/* Icon */}
                            <div className={`product-icon ${product.gradient}`}>
                                {product.icon}
                            </div>

                            {/* Category Badge */}
                            <span className="product-category">{product.category}</span>

                            {/* Product Name */}
                            <h3 className="product-name">{product.name}</h3>

                            {/* Core Promise */}
                            <p className="product-promise">{product.promise}</p>

                            {/* Details */}
                            <div className="product-details">
                                <div className="detail-item">
                                    <span className="detail-label">Best For</span>
                                    <span className="detail-value">{product.bestFor}</span>
                                </div>
                                <div className="detail-divider"></div>
                                <div className="detail-item">
                                    <span className="detail-label">Model</span>
                                    <span className="detail-value">{product.businessModel}</span>
                                </div>
                            </div>

                            {/* CTA */}
                            <a href="#contact" className="product-cta">
                                Learn More →
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Products;
