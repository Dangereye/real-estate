import React from 'react';
import { IoMdArrowRoundForward } from 'react-icons/io';
import { Link } from 'react-router-dom';
import ImageOne from '../images/kitchen-1.jpg';

const Features = () => {
  return (
    <section id='features-section'>
      <div className='container'>
        <div
          className='image-side'
          data-aos='zoom-in-right'
          data-aos-duration='800'
          data-aos-delay='300'
          data-aos-anchor-placement='top-center'
          data-aos-once='true'
        >
          <img src={ImageOne} alt='Kitchen' />
        </div>
        <div
          className='text-side'
          data-aos='fade-left'
          data-aos-duration='800'
          data-aos-delay='300'
          data-aos-anchor-placement='top-center'
          data-aos-once='true'
        >
          <h2 className='page-title'>Stunning Interior</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
            repudiandae, libero facere voluptatibus quo ducimus ipsam voluptatum
            tempora voluptate illum doloribus amet sit nesciunt saepe!
            Laudantium consequuntur nam sunt minus.
          </p>
          <Link to='/homes' className='btn btn-transparent'>
            Learn More <IoMdArrowRoundForward />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Features;
