import React, { useState, useEffect } from 'react';
import { GrContact } from 'react-icons/gr';
import { Link, useLocation } from 'react-router-dom';
import { NavbarMenuData } from '../data/NavbarMenuData';

const Navbar = ({ isOpen, toggle }) => {
  const [navbar, setNavbar] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.pageYOffset >= 88) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    const watchScroll = () => {
      window.addEventListener('scroll', changeBackground);
    };
    watchScroll();
    return () => {
      window.removeEventListener('scroll', changeBackground);
    };
  }, []);

  let style = {
    backgroundColor:
      navbar || (location.pathname !== '/' && location.pathname !== '/rentals')
        ? '#CD853F'
        : 'transparent',
    transition: '.4s',
  };

  return (
    <nav style={style}>
      <Link to='/' className='logo'>
        elixr
      </Link>
      <ul className='nav-menu'>
        {NavbarMenuData.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
      </ul>
      <div
        className={isOpen ? 'mobile-menu active' : 'mobile-menu'}
        onClick={toggle}
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <Link to='/contact' className='btn btn-contact'>
        <GrContact />
      </Link>
    </nav>
  );
};

export default Navbar;
