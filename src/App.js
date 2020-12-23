import React, { useState } from 'react';
import DropdownNav from './components/DropdownNav';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
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
    </div>
  );
};

export default App;
