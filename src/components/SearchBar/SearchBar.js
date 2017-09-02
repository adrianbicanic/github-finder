import React from 'react';

import Input from 'react-toolbox/lib/input/Input';

import * as styles from './SearchBar.css';

const SearchBar = (props) => (
  <div className="search-bar-main">
    <Input
      type="text"
      label="Search GitHub Users"
      name="search"
      value={props.value}
      onChange={props.onChange}
      onKeyUp={props.onKeyUp}
    />
  </div>
);

export default SearchBar;
