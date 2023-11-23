import React from 'react'
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';
import './style.css'

export default function Footer() {
  return (
    <div className='footer'>
      <div className='sb__footer section__padding'>
        <div className="sb__footer-links">
          <div className="sb__footer-links_div">
            <h4>Bank</h4>
            <a href='/'>
              <p>Freatures</p>
            </a>
            <a href='/'>
              <p>About Us</p>
            </a>
            <a href='/'>
              <p>Pricing</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Blog</h4>
            <a href='/'>
              <p>Financial Freedom</p>
            </a>
            <a href='/'>
              <p>Banking Innovation Hub</p>
            </a>
            <a href='/'>
              <p>Retirement Planning Corner</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Resources</h4>
            <a href='/'>
              <p>Resource center</p>
            </a>
            <a href='/'>
              <p>Testimonials</p>
            </a>
            <a href='/'>
              <p>STV</p>
            </a>
          </div>
          <div className="sb__footer-links_div">
            <h4>Social Media</h4>
            <div className="socialmedia">
              <p><a href='https://www.instagram.com/gi_fiuzaa/'><FaInstagram size={28}/></a></p>
              <p><a href='https://github.com/giifiuza'><FaGithub size={28}/></a></p>
              <p><a href='https://www.linkedin.com/in/gifiuzaa/'><FaLinkedin size={28}/></a></p>
            </div>
          </div>
        </div>

        <hr></hr>

        <div className="sb__footer-below">
          <div className="sb__footer-copyright">
            <p> @{new Date().getFullYear} Giovanna Fiuza. All right reserved</p>
          </div>
          <div className="sb__footer-below-links">
            <a href='/'><div><p>Terms & Conditions</p></div></a>
            <a href='/'><div><p>Privacy</p></div></a>
            <a href='/'><div><p>Security</p></div></a>
            <a href='/'><div><p>Cookie Declarition </p></div></a>
          </div>
        </div>
      </div>
    </div>
  );
};