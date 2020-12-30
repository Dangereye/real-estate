import React from 'react';
import { Link } from 'react-router-dom';

const InfoSection = ({
  heading,
  paragraphOne,
  paragraphTwo,
  buttonLabel,
  image,
}) => {
  return (
    <section id='info-section'>
      <div className='container'>
        <div
          className='text-side'
          data-aos='fade-up'
          data-aos-duration='800'
          data-aos-delay='500'
          data-aos-anchor-placement='top-center'
          data-aos-once='true'
        >
          <h2 className='page-title'>{heading}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Link className='btn btn-primary' to='/homes'>
            {buttonLabel}
          </Link>
        </div>
        <div
          className='image-side'
          data-aos='zoom-out'
          data-aos-duration='800'
          data-aos-delay='300'
          data-aos-anchor-placement='top-center'
          data-aos-once='true'
        >
          <img src={image} alt='home' />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
