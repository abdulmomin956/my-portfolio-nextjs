import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faGenderless } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const About = () => {
    return (
        <section className='about'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-wrap mt-2'>
                    <div className="flex items-center w-full md:w-5/12">
                        <img src="me.png" className="w-full h-auto" />
                    </div>
                    <div className='flex flex-col md:flex-row md:items-center w-full md:w-7/12'>
                        <div>
                            <h1 className='text-4xl font-bold '>About Me</h1>
                            <p className="md:pr-8 mb-4">
                                I am a MERN-Stack WEB Developer. I am working with React, Node.js and MongoDB.
                                I also have experience in developing static websites using HTML5, CSS3 and JavaScript (ES6).
                                I am a quick learner. I believe in hard work and efficiency.
                                That's why I am always ready to accomplish any task by working hard.
                                I always focus on learning new technology.
                                My goal is to become A World-Class Professional Web Developer.
                            </p>
                            <p className="mb-2 p2">Here are a few technologies I've been working with recently :</p>

                            <div className="skills space-y-6">
                                <div>
                                    <h5 className="text-xl font-semibold mb-2">Frontend</h5>
                                    <ul className="flex flex-wrap gap-3 list-none p-0">
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> JavaScript (ES6)</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> React.js</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Redux</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> React Bootstrap</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> HTML5</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> CSS3</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Material UI</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-xl font-semibold mb-2">Backend</h5>
                                    <ul className="flex flex-wrap gap-3 list-none p-0">
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Node.js</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Express.js</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> MongoDB</li>
                                    </ul>
                                </div>

                                <div>
                                    <h5 className="text-xl font-semibold mb-2">Tools</h5>
                                    <ul className="flex flex-wrap gap-3 list-none p-0">
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> VS Code</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Git</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Chrome Dev Tool</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Npm & Yarn</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Firebase</li>
                                        <li className="flex items-center gap-2"><FontAwesomeIcon icon={faGenderless} /> Netlify</li>
                                    </ul>
                                </div>

                            </div>

                            <div className="social-links mt-6">
                                <a href="https://github.com/abdulmomin956" target="_blank" rel="noreferrer" className="inline-block text-gray-800 hover:text-black transition">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/abdulmomin956"
                                    target="_blank"
                                    rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                                <a
                                    href="https://www.facebook.com/abdulmomin956"
                                    target="_blank"
                                    rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebook} />
                                </a>
                                <a
                                    href="https://mail.google.com/mail/?view=cm&fs=1&to=abdulmomin956@gmail.com"
                                    target="_blank"
                                    rel="noreferrer">
                                    <FontAwesomeIcon icon={faEnvelope} />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About