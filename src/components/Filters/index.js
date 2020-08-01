import React from 'react';
import propTypes from 'prop-types';

import FiltersWrapper from './style';
import SearchBar from './SearchBar';
import Categories from './Categories';

const Filters = ({
  tags, updateSearchTerm, selectedTags, updateSelectedTags,
}) => (
  <FiltersWrapper>
    <SearchBar updateSearchTerm={updateSearchTerm} />
    <Categories
      tags={tags}
      selectedTags={selectedTags}
      updateSelectedTags={updateSelectedTags}
    />
  </FiltersWrapper>
);

Filters.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTags: propTypes.arrayOf(propTypes.string).isRequired,
  updateSearchTerm: propTypes.func.isRequired,
  updateSelectedTags: propTypes.func.isRequired,
};

export default Filters;
