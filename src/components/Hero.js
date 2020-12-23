import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  IoMdArrowRoundForward,
  IoArrowForward,
  IoArrowBack,
} from 'react-icons/all';

const Hero = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;
  const timeout = useRef(null);

  const nextSlide = useCallback(() => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  }, [current, length]);
  const previousSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  // useEffect(() => {
  //   timeout.current = setTimeout(nextSlide, 5000);
  //   return () => {
  //     clearTimeout(timeout.current);
  //   };
  // }, [current, length, nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  return (
    <header id='hero'>
      <div className='wrapper'>
        {slides.map((slide, index) => {
          if (index === current) {
            return (
              <div className='hero-slide' key={index}>
                <div
                  className='hero-image'
                  style={{ backgroundImage: `url(${slide.image})` }}
                >
                  <div className='hero-content'>
                    <h1>{slide.title}</h1>
                    <p>{slide.price}</p>
                    <Link className='btn btn-primary' to={slide.path}>
                      {slide.label}
                      <IoMdArrowRoundForward />
                    </Link>
                  </div>
                </div>
              </div>
            );
          }
          return null;
        })}
      </div>
      <div className='slider-buttons'>
        <button className='previous-slide' onClick={previousSlide}>
          <IoArrowBack />
        </button>
        <button className='next-slide' onClick={nextSlide}>
          <IoArrowForward />
        </button>
      </div>
    </header>
  );
};

export default Hero;
