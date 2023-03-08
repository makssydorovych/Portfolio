import Particles from "react-tsparticles";
import React from "react";
import type {Container, Engine} from "tsparticles-engine";
import {useCallback} from "react";
import {loadFull} from "tsparticles";

export const ParticlesComponent = () => {
    const particlesInit = useCallback(async (engine: Engine) => {
        await loadFull(engine);
    }, []);


    return <Particles
        id="tsparticles"
        init={particlesInit}

        options={{

            fpsLimit: 60,
            interactivity: {
                events: {
                    onClick: {
                        enable: true,
                        mode: "push",
                    },
                    onHover: {
                        enable: true,
                        mode: "repulse",
                    },
                    resize: true,
                },
                modes: {
                    push: {
                        quantity: 1,
                    },
                    repulse: {
                        distance: 100,
                        duration: 0.9,
                    },
                },
            },
            particles: {
                color: {
                    value: "#ffffff",

                },
                links: {
                    color: "#ffffff",
                    distance: 150,
                    enable: true,
                    opacity: 0.2,
                    width: 1,
                },
                collisions: {
                    enable: true,
                },
                move: {
                    enable: true,
                    outModes: {
                        default: "bounce",
                    },
                    random: false,
                    speed: 2,
                    straight: false,
                },
                number: {
                    density: {
                        enable: true,
                        area: 800,
                    },
                    value: 80,
                },
                opacity: {
                    value: 0.3,
                },
                shape: {
                    type: "circle",
                },

            },

        }}
    />
}