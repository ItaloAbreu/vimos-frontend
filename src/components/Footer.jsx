import React from 'react';
import { NavLink } from 'react-router-dom';

import { FooterStyled } from './ComponentsStyles';

function Footer() {
  return (
    <FooterStyled>
      <section>
        <NavLink to="/license" className="link">License</NavLink>
        <NavLink to="/about" className="link">About</NavLink>
      </section>
    </FooterStyled>
  );
}

export default Footer;
