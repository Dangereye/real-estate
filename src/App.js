import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import DropdownNav from './components/DropdownNav';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Home from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Homes from './pages/Homes';
import Rentals from './pages/Rentals';
import Aos from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <Navbar isOpen={isOpen} toggle={toggle} />
      <DropdownNav isOpen={isOpen} toggle={toggle} />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/about' exact component={About} />
        <Route path='/homes' exact component={Homes} />
        <Route path='/rentals' exact component={Rentals} />
        <Route path='/contact' exact component={Contact} />
      </Switch>
      <Footer />
    </div>
  );
};

export default App;
