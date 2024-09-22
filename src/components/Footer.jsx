import React from 'react';
import './components.css';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import logoImage from "../assets/imagefolder/whitehomestylerlogo.jpg"


const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <img src={logoImage} alt="" />
        <div className="footer-section about">
          <h2>About Us</h2>
          <p>
            We are dedicated to transforming your space with innovative design solutions. Our team of experts crafts elegant and functional interiors tailored to your needs.
          </p>
        </div>
        
        <div className="footer-section services">
          <h2>Our Services</h2>
          <ul>
            <li><a href="#">Interior Design</a></li>
            <li><a href="#">Consultation</a></li>
            <li><a href="#">Home Staging</a></li>
            <li><a href="#">Renovation</a></li>
          </ul>
        </div>
        
        <div className="footer-section contact">
          <h2>Contact Us</h2>
          <p>Email: info@homedesign.com</p>
          <p>Phone: (123) 456-7890</p>
          <p>Address: 123 Design Street, Creativity City, 45678</p>
        </div>
        
        <div className="footer-section social-media">
          <h2>Follow Us</h2>
          <div className="social-icons">
            <a href="#" className="social-icon"><FaFacebook />
            </a>
            <a href="#" className="social-icon"><FaXTwitter />
            </a>
            <a href="#" className="social-icon"><FaSquareInstagram />
            </a>
            <a href="#" className="social-icon"><FaLinkedin />
            </a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; 2024 Home Interior Design. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
