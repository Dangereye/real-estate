import React from 'react';
import { NavbarMenuData } from '../data/NavbarMenuData';
import { Link } from 'react-router-dom';

const DropdownNav = ({ isOpen }) => {
  return (
    <div className={isOpen ? 'dropdown-nav active' : 'dropdown-nav'}>
      <ul className='nav-menu'>
        {NavbarMenuData.map((item, index) => (
          <li key={index}>
            <Link to={item.link}>{item.title}</Link>
          </li>
        ))}
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNav;
