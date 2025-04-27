import { faFacebook, faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

const SocialLinks = () => {
    return (
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
    )
}

export default SocialLinks