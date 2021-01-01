import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import {
  IoMdArrowRoundForward,
  IoArrowForward,
  IoArrowBack,
} from 'react-icons/all';

import { motion, AnimatePresence } from 'framer-motion';

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

  useEffect(() => {
    timeout.current = setTimeout(nextSlide, 5000);
    return () => {
      clearTimeout(timeout.current);
    };
  }, [current, length, nextSlide]);

  if (!Array.isArray(slides) || slides.length <= 0) return null;

  const fadeAnimation = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.6 } },
    exit: { opacity: 0 },
  };

  return (
    <header id='hero'>
      <AnimatePresence>
        <div className='wrapper'>
          {slides.map((slide, index) => {
            if (index === current) {
              return (
                <motion.div
                  className='hero-slide'
                  key={index}
                  initial='hidden'
                  animate='visible'
                  variants={fadeAnimation}
                >
                  <div
                    className='hero-image'
                    style={{ backgroundImage: `url(${slide.image})` }}
                  >
                    <div className='hero-content'>
                      <h1 data-aos='fade-down' data-aos-duration='1000'>
                        {slide.title}
                      </h1>
                      <p
                        data-aos='fade-down'
                        data-aos-duration='1000'
                        data-aos-delay='200'
                      >
                        {slide.price}
                      </p>
                      <Link
                        className='btn btn-primary'
                        to={slide.path}
                        data-aos='zoom-out'
                        data-aos-duration='1000'
                        data-aos-delay='400'
                      >
                        <span>{slide.label}</span>
                        <IoMdArrowRoundForward />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              );
            }
            return null;
          })}
        </div>
      </AnimatePresence>
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
