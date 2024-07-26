import React from 'react';
import "./Footer.css";

const Footer = () => {
    return (
        <div className='footer' id='footer'>
            <div className="footer-content">
                <div className="footer-content-left">
                    <p className='footer-title'>Event Hub</p>
                    <p className='footer-description'>Discover, explore, and enjoy the best events across the state. Stay updated with what's happening around you.</p>
                    <div className="footer-social-icons">
                        <img src="./src/assets/Images/instagram.jpeg" alt="Instagram" />
                        <img src="./src/assets/Images/twitter.jpeg" alt="Twitter" />
                        <img src="./src/assets/Images/whatsapp.jpeg" alt="WhatsApp" />
                        <img src="./src/assets/Images/telegram.jpeg" alt="Telegram" />
                    </div>
                </div>
                <div className="footer-content-center">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About Us</li>
                        <li>Delivery</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="footer-content-right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+1-212-456-7890</li>
                        <li>contact@eventhub.com</li>
                    </ul>
                </div>
            </div>
            <hr />
            <p className="footer-copyright">Copyright 2024 © Event Hub - All Rights Reserved.</p>
        </div>
    );
}

export default Footer;
