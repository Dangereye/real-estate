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
              <Link to='/homes'>FAQ</Link>
              <Link to='/homes'>Support</Link>
              <Link to='/homes'>Questions</Link>
            </div>
            <div className='link-group'>
              <h4>Offices</h4>
              <Link to='/homes'>USA</Link>
              <Link to='/homes'>Europe</Link>
              <Link to='/homes'>UK</Link>
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
          <Link to='/homes' className='btn btn-secondary'>
            Let's Chat
            <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
