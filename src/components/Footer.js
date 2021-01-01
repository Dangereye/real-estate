import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import {
  FaInstagram,
  FaFacebookF,
  FaLinkedinIn,
  FaYoutube,
} from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <div className='footer-top'>
          <h2>
            Let's find <br />
            your dream home
          </h2>
          <div className='links'>
            <div className='link-group'>
              <h4>Contact Us</h4>
              <Link to='/contact'>FAQ</Link>
              <Link to='/contact'>Support</Link>
              <Link to='/contact'>Questions</Link>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='social-icons'>
            <a
              href='//www.youtube.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaYoutube />
            </a>
            <a
              href='//www.instagram.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaInstagram />
            </a>
            <a
              href='//www.linkedin.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaLinkedinIn />
            </a>
            <a
              href='//www.facebook.com'
              rel='noopener noreferrer'
              target='_blank'
            >
              <FaFacebookF />
            </a>
          </div>
          <Link to='/contact' className='btn btn-secondary'>
            <span>Let's Chat</span>
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
