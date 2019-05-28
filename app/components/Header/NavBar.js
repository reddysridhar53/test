import React from 'react';
import PropTypes from 'prop-types';
import { NavWrapper, Img, ImageWrapper, NavCenter } from './styledElements';
function NavBar({ sticky, logoImg }) {
  return (
    <NavWrapper sticky={sticky}>
      <NavCenter>
        <ImageWrapper to="/">
          <Img src={logoImg} alt="Huddl AI" />
        </ImageWrapper>
      </NavCenter>
    </NavWrapper>
  );
}

NavBar.defaultPorps = {
  sticky: false,
};

NavBar.propTypes = {
  sticky: PropTypes.bool,
  logoImg: PropTypes.string,
};

export default NavBar;
