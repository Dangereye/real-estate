import React from 'react';
import { Link } from 'react-router-dom';
import { IoMdArrowRoundForward } from 'react-icons/io';
import HomeOne from '../images/home-1.jpg';
import HomeTwo from '../images/home-2.jpg';

const ListingsSection = () => {
  return (
    <section id='listings-section'>
      <div className='container'>
        <h2 className='page-title'>View our newest homes</h2>
        <div className='homes'>
          <div className='home'>
            <img src={HomeOne} alt='Home' />
            <h3>8 bed 10 bath house in Venice, California</h3>
            <Link to='/homes' className='btn btn-transparent'>
              View Details
              <IoMdArrowRoundForward />
            </Link>
          </div>
          <div className='home'>
            <img src={HomeTwo} alt='Home' />
            <h3>4 bed 2 bath house in Miami, Florida</h3>
            <Link to='/homes' className='btn btn-transparent'>
              View Details
              <IoMdArrowRoundForward />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ListingsSection;
