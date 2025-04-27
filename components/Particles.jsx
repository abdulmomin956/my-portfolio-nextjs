import Particles, { initParticlesEngine } from "@tsparticles/react";
import { useEffect, useState } from "react";
import { loadFull } from "tsparticles";


const ParticleComponent = () => {
    const [init, setInit] = useState(false);

    useEffect(() => {
        initParticlesEngine(async (engine) => {
            await loadFull(engine);
        }).then(() => {
            setInit(true);
        });
    }, []);


    return (
        init &&
        <Particles
            id="tsparticles"

            style={{ position: 'relative' }}

            options={{
                "fullScreen": {
                    "enable": false,
                    "zIndex": -1
                },
                "particles": {
                    "number": {
                        "value": 15,
                        "density": {
                            "enable": false,
                            "value_area": 800
                        }
                    },
                    "color": {
                        "value": "#72B626"
                    },
                    "shape": {
                        "type": "star",
                        "options": {
                            "sides": 5
                        }
                    },
                    "opacity": {
                        "value": 0.8,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacityMin": 0.1,
                            "sync": false
                        }
                    },
                    "size": {
                        "value": 3,
                        "random": false,
                        "anim": {
                            "enable": false,
                            "speed": 40,
                            "sizeMin": 0.1,
                            "sync": false
                        }
                    },
                    "rotate": {
                        "value": 0,
                        "random": true,
                        "direction": "clockwise",
                        "animation": {
                            "enable": true,
                            "speed": 5,
                            "sync": false
                        }
                    },
                    "links": {
                        "enable": true,
                        "distance": 600,
                        "color": "#72B626",
                        "opacity": 0.4,
                        "width": 1
                    },
                    "move": {
                        "enable": true,
                        "speed": 2,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "outMode": "out",
                        "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                        }
                    }
                },
                "interactivity": {
                    "events": {
                        "onHover": {
                            "enable": true,
                            "mode": ["grab"]
                        },
                        "onClick": {
                            "enable": false,
                            "mode": "bubble"
                        },
                        "resize": true
                    },
                    "modes": {
                        "grab": {
                            "distance": 400,
                            "links": {
                                "opacity": 1
                            }
                        },
                        "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                        },
                        "repulse": {
                            "distance": 200,
                            "duration": 0.4
                        },
                        "push": {
                            "particles_nb": 4
                        },
                        "remove": {
                            "particles_nb": 2
                        }
                    }
                },
                "detectRetina": true,
                "background": {
                    "color": "#eeeeee",
                    "image": "",
                    "position": "50% 50%",
                    "repeat": "no-repeat",
                    "size": "cover"
                }
            }}

        />
    );
}

export default ParticleComponent;