import React from 'react';
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

const Header = (props) => (
  <div>
    <AppBar
      leftIcon="A"
      onLeftIconClick={props.onBackButtonClick}
      className="app-bar"
      title="GitHub Finder"
    />
  </div>
);

export default Header;
