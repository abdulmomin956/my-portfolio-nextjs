import { faEnvelope, faMapMarkerAlt, faPhoneAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'

const Contact = () => {
    return (
        <section className='contact-form mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <h1 className='text-4xl font-bold text-center'>Get In Touch</h1>
            <div className="flex flex-wrap mt-2">
                <div className="text-center basis-0 grow-1 max-w-full">
                    <FontAwesomeIcon icon={faPhoneAlt} />
                    <h6 className='text-2xl'>Call Me</h6>
                    <a href="tel:+8801518960163">+8801518960163</a>
                </div>
                <div className="text-center basis-0 grow-1 max-w-full">
                    <FontAwesomeIcon icon={faMapMarkerAlt} />
                    <h6 className='text-2xl'>Location</h6>
                    <a
                        href="https://maps.app.goo.gl/2Xe3njdRrMykyivcA"
                        target="_blank"
                        rel="noreferrer">
                        Belkuchi, Sirajganj - 6740
                    </a>
                </div>
                <div className="text-center basis-0 grow-1 max-w-full">
                    <FontAwesomeIcon icon={faEnvelope} />
                    <h6 className='text-2xl'>Email</h6>
                    <a
                        href="https://mail.google.com/mail/?view=cm&amp;fs=1&amp;to=abdulmomin956@gmail.com"
                        target="_blank"
                        rel="noreferrer">
                        abdulmomin956@gmail.com
                    </a>
                </div>
            </div>

            <div className="flex flex-col md:flex-row items-center">
                <div className="order-2 md:order-1 w-full md:w-1/2">
                    <div className="react-reveal text" style={{
                        animationFillMode: 'both',
                        animationDuration: '3000ms',
                        animationDelay: '0ms',
                        animationIterationCount: 1,
                        opacity: 1,
                        animationName: 'react-reveal-552593156641902-2'
                    }}>
                        <p>
                            I'd Love to hear from you. Whether you have a question or just want to say Hi, feel free to drop a message. I'll try my best to get back to you!
                        </p>
                    </div>
                    <div className="react-reveal" style={{
                        animationFillMode: 'both',
                        animationDuration: '3000ms',
                        animationDelay: '0ms',
                        animationIterationCount: 1,
                        opacity: 1,
                        animationName: 'react-reveal-552593156641902-2'
                    }}>
                        <form className="space-y-4">
                            <div className="form-group">
                                <input name="name" placeholder="Your Name" type="text" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="form-group">
                                <input name="email" placeholder="Your Email" type="email" className="w-full p-2 border border-gray-300 rounded" />
                            </div>
                            <div className="form-group">
                                <textarea name="message" placeholder="Your Message" type="text" className="w-full p-2 border border-gray-300 rounded">
                                </textarea>
                            </div>
                            <button type="submit" className="w-full bg-[#72B626] text-white py-3 rounded-lg text-lg">Send Message</button>
                        </form>
                    </div>
                </div>
                <div className="order-1 md:order-2 w-full md:w-1/2">
                    <div className="react-reveal" style={{
                        animationFillMode: 'both',
                        animationDuration: '3000ms',
                        animationDelay: '0ms',
                        animationIterationCount: 1,
                        opacity: 1,
                        animationName: 'react-reveal-552593156641902-3'
                    }}>
                        <Image
                            className="w-full h-auto"
                            src="/Mail-sent.svg"
                            width={0}
                            height={0}
                            sizes='100vw'
                            style={{ width: '100%', height: 'auto' }}
                            alt='mail sent svg' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact