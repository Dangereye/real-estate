import React from 'react';
import { NavbarMenuData } from '../data/NavbarMenuData';
import { Link } from 'react-router-dom';

const DropdownNav = ({ isOpen, toggle }) => {
  return (
    <div className={isOpen ? 'dropdown-nav active' : 'dropdown-nav'}>
      <ul className='nav-menu'>
        {NavbarMenuData.map((item, index) => (
          <li key={index}>
            <Link to={item.link} onClick={toggle}>
              {item.title}
            </Link>
          </li>
        ))}
        <li>
          <Link to='/contact' onClick={toggle}>
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default DropdownNav;
