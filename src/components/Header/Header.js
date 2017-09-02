import React from 'react';
import {browserHistory} from 'react-router';
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar';

const Header = (props) => (
  <div>
    <AppBar
      leftIcon={props.leftIcon}
      fixed
      onLeftIconClick={() => browserHistory.push('')}
      className="app-bar"
      title="GitHub Finder"
    />
  </div>
);

export default Header;
