import React from 'react';
import propTypes from 'prop-types';

import {
  Category, RadioButton, CategoriesWrapper, CategoriesItem,
} from './style';

const Categories = ({ tags, updateSelectedTag }) => {
  const handleChange = (e) => {
    const targetValue = e.target.value;
    const valueIsCheched = e.target.checked;
    const newValue = valueIsCheched ? targetValue : 'all';
    updateSelectedTag(newValue);
  };

  return (
    <CategoriesWrapper>
      {tags.map((tag) => (
        <CategoriesItem>
          <RadioButton
            value={tag}
            type="checkbox"
            id={tag}
            onChange={handleChange}
          />

          <Category for={tag}>{tag}</Category>
        </CategoriesItem>
      ))}
    </CategoriesWrapper>
  );
};

Categories.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  updateSelectedTag: propTypes.func.isRequired,
};

export default Categories;
