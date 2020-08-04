import React from 'react';
import propTypes from 'prop-types';

import { Form, Input, Button } from './style';
import SearchIcon from '../../../assets/images/search-icon.svg';

const SearchBar = ({ updateSearchTerm }) => {
  const handleTyping = (e) => {
    updateSearchTerm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        onChange={handleTyping}
        placeholder="Buscar"
        icon={SearchIcon}
      />
    </Form>
  );
};

SearchBar.propTypes = {
  updateSearchTerm: propTypes.func.isRequired,
};

export default SearchBar;
