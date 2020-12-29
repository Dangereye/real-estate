import React from 'react';
import Features from '../components/Features';
import Hero from '../components/Hero';
import InfoSection from '../components/InfoSection';
import ListingsSection from '../components/ListingsSection';
import { infoData, infoDataTwo } from '../data/InfoSectionData';
import { SliderData } from '../data/SliderData';

const Home = () => {
  return (
    <>
      <Hero slides={SliderData} />
      <InfoSection {...infoData} />
      <ListingsSection />
      <Features />
      <InfoSection {...infoDataTwo} />
    </>
  );
};

export default Home;
