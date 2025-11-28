import React from 'react';
import { motion } from 'framer-motion';
import { HiArrowDown } from 'react-icons/hi';
import ParticlesBackground from './ParticlesBackground';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero section">
            {/* Animated Background Gradient Mesh */}
            <div className="hero-background">
                <ParticlesBackground />
                <div className="gradient-orb orb-1"></div>
                <div className="gradient-orb orb-2"></div>
                <div className="gradient-orb orb-3"></div>
                <div className="gradient-orb orb-4"></div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-text"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Tagline */}
                    <motion.p
                        className="hero-tagline"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        Welcome to the Future of AI
                    </motion.p>

                    {/* Main Heading */}
                    <motion.h1
                        className="hero-heading"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        AI Solutions That{' '}
                        <span className="gradient-text">Scale Your Business</span>
                    </motion.h1>

                    {/* Subtitle */}
                    <motion.p
                        className="hero-subtitle"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 0.8 }}
                    >
                        Transform your business with cutting-edge AI products. From lead generation
                        to predictive scoring, we provide the tools you need to stay ahead.
                    </motion.p>

                    {/* CTA Buttons */}
                    <motion.div
                        className="hero-cta"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                    >
                        <a href="#products" className="btn btn-primary">
                            Explore Products
                        </a>
                        <a href="#contact" className="btn btn-secondary">
                            Book a Demo
                        </a>
                    </motion.div>

                    {/* Stats */}
                    <motion.div
                        className="hero-stats"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.8, delay: 1.2 }}
                    >
                        <div className="stat-item">
                            <h3 className="gradient-text">250K+</h3>
                            <p>Active Users</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="gradient-text">99.99%</h3>
                            <p>Uptime</p>
                        </div>
                        <div className="stat-divider"></div>
                        <div className="stat-item">
                            <h3 className="gradient-text">5+</h3>
                            <p>AI Products</p>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Scroll Indicator */}
                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, y: [0, 10, 0] }}
                    transition={{
                        opacity: { duration: 1, delay: 1.5 },
                        y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' }
                    }}
                >
                    <a href="#products" aria-label="Scroll to products">
                        <HiArrowDown size={28} />
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
