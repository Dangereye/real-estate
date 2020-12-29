import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
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

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    Aos.init({});
  }, []);

  return (
    <div>
      <Navbar toggle={toggle} />
      <DropdownNav isOpen={isOpen} />
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
