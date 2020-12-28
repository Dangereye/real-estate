import React, { useState } from 'react';
import DropdownNav from './components/DropdownNav';
import Features from './components/Features';
import Footer from './components/Footer';
import Hero from './components/Hero';
import InfoSection from './components/InfoSection';
import ListingsSection from './components/ListingsSection';
import Navbar from './components/Navbar';
import { infoData, infoDataTwo } from './data/InfoSectionData';
import { SliderData } from './data/SliderData';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <Navbar toggle={toggle} />
      <DropdownNav isOpen={isOpen} />
      <Hero slides={SliderData} />
      <InfoSection {...infoData} />
      <ListingsSection />
      <Features />
      <InfoSection {...infoDataTwo} />
      <Footer />
    </div>
  );
};

export default App;
