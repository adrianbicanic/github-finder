import React from 'react';

import Input from 'react-toolbox/lib/input/Input';

const SearchBar = () => {
  return (
    <Input
      type="text"
      label="Search GitHub Users"
      name="search"
    />
  );
}

export default SearchBar;