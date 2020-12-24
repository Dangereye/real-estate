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
        <div className='text-side'>
          <h2>{heading}</h2>
          <p>{paragraphOne}</p>
          <p>{paragraphTwo}</p>
          <Link className='btn btn-primary' to='/homes'>
            {buttonLabel}
          </Link>
        </div>
        <div className='image-side'>
          <img src={image} alt='home' />
        </div>
      </div>
    </section>
  );
};

export default InfoSection;
