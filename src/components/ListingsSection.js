import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import HomeOne from '../images/home-1.jpg';
import HomeTwo from '../images/home-2.jpg';

const ListingsSection = () => {
  return (
    <section id='listings-section'>
      <div className='container'>
        <h2
          className='page-title'
          data-aos='fade-left'
          data-aos-duration='800'
          data-aos-delay='300'
          data-aos-anchor-placement='top-center'
          data-aos-once='true'
        >
          View our newest homes
        </h2>
        <div className='homes'>
          <div
            className='home'
            data-aos='zoom-out-up'
            data-aos-duration='800'
            data-aos-delay='300'
            data-aos-anchor-placement='top-center'
            data-aos-once='true'
          >
            <img src={HomeOne} alt='Home' />
            <h3>8 bed 10 bath house in Venice, California</h3>
            <Link to='/homes' className='btn btn-transparent'>
              <span>View Details</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
          <div
            className='home'
            data-aos='zoom-out-down'
            data-aos-duration='800'
            data-aos-delay='300'
            data-aos-anchor-placement='top-center'
            data-aos-once='true'
          >
            <img src={HomeTwo} alt='Home' />
            <h3>4 bed 2 bath house in Miami, Florida</h3>
            <Link to='/homes' className='btn btn-transparent'>
              <span>View Details</span>
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;
