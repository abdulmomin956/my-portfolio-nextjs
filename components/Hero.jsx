import React from 'react'
import ParticleComponent from './Particles'
import { motion } from "framer-motion";
import { Typewriter } from 'react-simple-typewriter';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFileDownload } from '@fortawesome/free-solid-svg-icons';

function Hero() {
    return (
        <main className='header'>
            <ParticleComponent />
            <section className='hero mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className="flex flex-col md:flex-row items-center justify-between gap-10 w-full">
                    {/* Text Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="md:w-7/12 w-full"
                    >
                        <h1 className="text-4xl font-bold mb-4">
                            Hi, I’m <br /> Abdul Momin
                        </h1>

                        <h3 className="text-2xl font-semibold text-[#72B626] mb-4">
                            <Typewriter
                                words={['MERN Stack Developer', 'React.js Enthusiast', 'Open Source Contributor']}
                                loop={true}
                                cursor
                                cursorStyle="|"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </h3>

                        <p className="md:pr-8 text-gray-700 mb-6">
                            A self-motivated and enthusiastic web developer. To gain confidence and fame using my potential in the field of web development and express my innovative creative skills for self and company growth. I always like to learn new things and have experience with new stuff.
                        </p>

                        <a
                            href="https://drive.google.com/u/0/uc?id=1ggFW7OTCV_pOO-boMmq9pV9KofAhaGy0&export=download"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            <button className="bg-[#72B626] hover:bg-black text-white font-semibold px-6 py-2 rounded inline-flex items-center transition">
                                <FontAwesomeIcon icon={faFileDownload} className='mr-1' />
                                Resume
                            </button>
                        </a>
                    </motion.div>

                    {/* Image Section */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 2 }}
                        className="md:w-5/12 w-full"
                    >
                        <img
                            src="Developer.svg"
                            alt="Developer"
                            className="w-full h-auto"
                        />
                    </motion.div>
                </div>
            </section>
        </main>
    )
}

export default Hero