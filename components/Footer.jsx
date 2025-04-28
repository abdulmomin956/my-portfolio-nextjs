import React from 'react'
import SocialLinks from './SocialLinks'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="text-center container">
                <SocialLinks />
                <p>
                    Designed and Developed by {" "}
                    <a
                        href="https://github.com/abdulmomin956"
                        target="_blank"
                        rel="noreferrer">
                        Abdul Momin
                    </a>
                </p>
                <p>
                    Copyright © {new Date().getFullYear()}, All Rights Reserved
                </p>
            </div>
        </footer>
    )
}

export default Footer