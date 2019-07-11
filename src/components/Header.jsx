import React from 'react';
import { NavLink } from 'react-router-dom';

import { HeaderStyled } from './ComponentsStyles';

function Header() {
  return (
    <HeaderStyled>
      <section>
        <NavLink to="/" className="link">Main</NavLink>
        <NavLink to="/upload" className="link">Upload</NavLink>
      </section>
    </HeaderStyled>
  );
}

export default Header;
