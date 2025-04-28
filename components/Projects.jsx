"use client"
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const Projects = () => {
    const [mounted, setMounted] = useState(false);
    useEffect(() => {
        setMounted(true);
    }, []);

    return (
        <section className='projects'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <h1 className='text-4xl font-bold text-center title mb-12'>Some of <span>My Projects</span></h1>
                <div className='flex flex-wrap flex-row'>
                    <div className='card bg-gray-300'>
                        <div className="p-2 pj-img">
                            <Image
                                className="card-img-top"
                                src="/vleaf.png"
                                width={0}
                                height={0}
                                sizes="100vw"
                                style={{ width: '100%', height: 'auto' }}
                                alt='V-Leaf Equipment' />
                        </div>
                        <div className="card-body">
                            <div className="card-title text-2xl">V-Leaf Equipment</div>
                            <p className="card-text">A full-stack single-page warehouse management web app where people can store a new product and manage equipment. Login system with firebase and private routes. An admin can do CRUD operations with any product.</p>
                            <div className="technology">
                                <span>React.js</span>
                                <span>React Bootstrap</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase Authentication</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            {mounted && <a href="https://vleaf-gym.web.app"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] mr-3 btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>}
                            {mounted && <a href="https://github.com/abdulmomin956/V-LEAF-GYM-equipment-management-app-client"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>}
                        </div>
                    </div>
                    <div className='card bg-gray-300'>
                        <div className="p-2 pj-img">
                            <Image
                                className="card-img-top"
                                src="/couplecapture.png"
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{ width: '100%', height: 'auto' }}
                                alt='Couple Capture' />
                        </div>
                        <div className="card-body">
                            <div className="card-title text-2xl">Couple Capture</div>
                            <p className="card-text">A full-stack single-page independent service provider web app where people can book an independent cameraman to capture their happy moment. Login system with firebase and private routes.</p>
                            <div className="technology">
                                <span>React.js</span>
                                <span>React Bootstrap</span>
                                <span>Node.js</span>
                                <span>Express.js</span>
                                <span>MongoDB</span>
                                <span>Firebase Authentication</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            {mounted && <a href="https://couple-capture.web.app/"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] mr-3 btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>}
                            {mounted && <a href="https://github.com/abdulmomin956/couple-capture"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>}
                        </div>
                    </div>
                    <div className='card bg-gray-300'>
                        <div className="p-2 pj-img">
                            <Image
                                className="card-img-top"
                                src="/autohunt.png"
                                width={0}
                                height={0}
                                sizes='100vw'
                                style={{ width: '100%', height: 'auto' }}
                                alt='Auto Hunt' />
                        </div>
                        <div className="card-body">
                            <div className="card-title text-2xl">Auto Hunt</div>
                            <p className="card-text">A full-stack single-page marketplace web app. Users can sell thier used  or new conditioned car in the website. AppWrite is used here as Database and image bucket. Any registered users can CRUD operations.</p>
                            <div className="technology">
                                <span>Next.js</span>
                                <span>TailwindCSS</span>
                                <span>Radix UI</span>
                                <span>AppWrite</span>
                                <span>Axios</span>
                            </div>
                        </div>
                        <div className="card-footer">
                            {mounted && <a href="https://auto-hunt-956.vercel.app"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] mr-3 btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon title="Visit Website" icon={faExternalLinkAlt} /> Live Link
                            </a>}
                            {mounted && <a href="https://github.com/abdulmomin956/auto-hunt-clone"
                                className="bg-[#72B626] p-1 px-4 text-white rounded hover:bg-black focus:outline-none focus:ring-2 focus:ring-[#72B626] btn-sm"
                                target="_blank"
                                rel="noreferrer">
                                <FontAwesomeIcon icon={faGithub} /> Github
                            </a>}
                        </div>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Projects