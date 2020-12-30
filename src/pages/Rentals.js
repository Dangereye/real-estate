import React from 'react';
import Hero from '../components/Hero';
import ListingsSection from '../components/ListingsSection';
import { SliderDataTwo } from '../data/SliderData';

const Rentals = () => {
  return (
    <>
      <Hero slides={SliderDataTwo} />
      <ListingsSection />
    </>
  );
};

export default Rentals;
