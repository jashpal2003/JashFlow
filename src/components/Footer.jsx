import React from 'react';
import {
    FaTwitter,
    FaLinkedin,
    FaGithub,
    FaYoutube
} from 'react-icons/fa';
import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const footerLinks = {
        Products: [
            { name: 'LeadGen AI', href: '#products' },
            { name: 'ScoreSense', href: '#products' },
            { name: 'SDR Boost', href: '#products' },
            { name: 'PersonaX', href: '#products' },
        ],
        Company: [
            { name: 'About Us', href: '#about' },
            { name: 'Careers', href: '#' },
            { name: 'Blog', href: '#' },
            { name: 'Press Kit', href: '#' },
        ],
        Resources: [
            { name: 'Documentation', href: '#' },
            { name: 'API Reference', href: '#' },
            { name: 'Support', href: '#' },
            { name: 'Community', href: '#' },
        ],
        Legal: [
            { name: 'Privacy Policy', href: '#' },
            { name: 'Terms of Service', href: '#' },
            { name: 'Security', href: '#' },
            { name: 'Compliance', href: '#' },
        ],
    };

    const socialLinks = [
        { icon: <FaTwitter />, href: '#', label: 'Twitter' },
        { icon: <FaLinkedin />, href: '#', label: 'LinkedIn' },
        { icon: <FaGithub />, href: '#', label: 'GitHub' },
        { icon: <FaYoutube />, href: '#', label: 'YouTube' },
    ];

    return (
        <footer className="footer">
            <div className="footer-gradient"></div>

            <div className="container">
                <div className="footer-content">
                    {/* Brand Section */}
                    <div className="footer-brand">
                        <a href="#" className="footer-logo">
                            <span className="gradient-text">Jash</span>
                            <span className="text-white">Flow</span>
                        </a>
                        <p className="footer-tagline">
                            Empowering businesses with intelligent AI solutions that drive
                            growth and innovation.
                        </p>
                        <div className="footer-social">
                            {socialLinks.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    className="social-link"
                                    aria-label={social.label}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Links Sections */}
                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="footer-links">
                            <h4 className="footer-heading">{category}</h4>
                            <ul>
                                {links.map((link) => (
                                    <li key={link.name}>
                                        <a href={link.href}>{link.name}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p className="footer-copyright">
                        © {currentYear} JashFlow. All rights reserved.
                    </p>
                    <p className="footer-credits">
                        Built with ❤️ for the future of AI
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
