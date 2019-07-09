import React from 'react';
import { NavLink } from 'react-router-dom';

import './Footer.css';

function Footer() {
  return (
    <footer>
      <section>
        <NavLink to="/license" className="link">License</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
      </section>
    </footer>
  );
}

export default Footer;
