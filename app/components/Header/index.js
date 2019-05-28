import React, { Fragment } from 'react';
import NavBar from './NavBar';

function Header() {
  const sticky = false;
  // eslint-disable-next-line global-require
  const logoImg = require('.../../images/logo.png');

  return (
    <Fragment>
      <NavBar sticky={sticky} logoImg={logoImg} />
    </Fragment>
  );
}

export default Header;
