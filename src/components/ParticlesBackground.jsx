import React, { useCallback } from 'react';
import Particles from 'react-tsparticles';
import { loadFull } from 'tsparticles';
import './ParticlesBackground.css';

const ParticlesBackground = () => {
    const particlesInit = useCallback(async (engine) => {
        await loadFull(engine);
    }, []);

    const particlesConfig = {
        fullScreen: { enable: false },
        background: {
            color: {
                value: 'transparent',
            },
        },
        fpsLimit: 120,
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800,
                },
            },
            color: {
                value: ['#8b5cf6', '#3b82f6', '#06b6d4'],
            },
            shape: {
                type: 'circle',
            },
            opacity: {
                value: 0.5,
                random: true,
                anim: {
                    enable: true,
                    speed: 0.5,
                    opacity_min: 0.1,
                    sync: false,
                },
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: true,
                    speed: 2,
                    size_min: 0.5,
                    sync: false,
                },
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#8b5cf6',
                opacity: 0.2,
                width: 1,
            },
            move: {
                enable: true,
                speed: 1,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false,
                },
            },
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab',
                },
                onclick: {
                    enable: true,
                    mode: 'push',
                },
                resize: true,
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 0.5,
                    },
                },
                push: {
                    particles_nb: 4,
                },
            },
        },
        retina_detect: true,
    };

    return (
        <div className="particles-container">
            <Particles
                id="tsparticles"
                init={particlesInit}
                options={particlesConfig}
            />
        </div>
    );
};

export default ParticlesBackground;
