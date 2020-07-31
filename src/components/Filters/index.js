import React from 'react';
import propTypes from 'prop-types';

import FiltersWrapper from './style';
import SearchBar from './SearchBar';
import Categories from './Categories';

const Filters = ({
  tags, updateSearchTerm, selectedTag, updateSelectedTag,
}) => (
  <FiltersWrapper>
    <SearchBar updateSearchTerm={updateSearchTerm} />
    <Categories
      tags={tags}
      selectedTag={selectedTag}
      updateSelectedTag={updateSelectedTag}
    />
  </FiltersWrapper>
);

Filters.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTag: propTypes.arrayOf(propTypes.string).isRequired,
  updateSearchTerm: propTypes.func.isRequired,
  updateSelectedTag: propTypes.func.isRequired,
};

export default Filters;
