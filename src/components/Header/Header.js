import React, {Component} from 'react';
import PropTypes from 'prop-types';

import AppBar from 'react-toolbox/lib/app_bar/AppBar'

const Header = () => {
    return (
      <div>
        <AppBar title="GitHub Finder" />
      </div>
    );
}

export default Header;
