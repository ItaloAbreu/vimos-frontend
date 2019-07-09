import React from 'react';
import { NavLink } from 'react-router-dom';

import './Header.css';

function Header() {
  return (
    <header>
      <section>
        <NavLink to="/" className="link">Main</NavLink>
        <NavLink to="/upload" className="link">Upload</NavLink>
      </section>
    </header>
  );
}

export default Header;
