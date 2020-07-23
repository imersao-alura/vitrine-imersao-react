import React from 'react';
import propTypes from 'prop-types';

import FiltersWrapper from './style';
import SearchBar from './SearchBar';

const Filters = ({ updateSearchTerm }) => (
  <FiltersWrapper>
    <SearchBar updateSearchTerm={updateSearchTerm} />
  </FiltersWrapper>
);

Filters.propTypes = {
  updateSearchTerm: propTypes.func.isRequired,
};

export default Filters;
