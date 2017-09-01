import React from 'react';

import Input from 'react-toolbox/lib/input/Input';

const SearchBar = (props) => (
  <Input
    type="text"
    label="Search GitHub Users"
    name="search"
    onKeyUp={props.onKeyUp}
  />
);

export default SearchBar;
