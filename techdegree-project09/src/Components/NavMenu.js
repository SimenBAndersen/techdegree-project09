import React from 'react';
import {NavLink} from 'react-router-dom';

const NavMenu = (props) => {
  return(
    <div>
      <ul>
        <li><NavLink to='/search'>search</NavLink></li>
        <li><NavLink to='/cats'>cats</NavLink></li>
        <li><NavLink to='/dogs'>dogs</NavLink></li>
        <li><NavLink to='/coffee'>coffee</NavLink></li>
      </ul>
    </div>
  );
}

export default NavMenu;
