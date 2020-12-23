import React, { useState } from 'react';
import { GrContact } from 'react-icons/gr';
import { Link } from 'react-router-dom';
import { NavbarMenuData } from '../data/NavbarMenuData';

const Navbar = ({ toggle }) => {
  const [mobileMenu, setMobileMenu] = useState(false);
  return (
    <nav>
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
        className={mobileMenu ? 'mobile-menu active' : 'mobile-menu'}
        onClick={() => {
          setMobileMenu(!mobileMenu);
          toggle();
        }}
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
