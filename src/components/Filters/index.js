import React from 'react';
import FiltersWrapper from './style';
import SearchBar from './SearchBar';

const Filters = ({ updateSearchTerm }) => (
  <FiltersWrapper>
    <SearchBar updateSearchTerm={updateSearchTerm} />
  </FiltersWrapper>
);

export default Filters;
