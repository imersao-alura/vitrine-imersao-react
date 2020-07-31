import React from 'react';
import propTypes from 'prop-types';

import {
  Category, RadioButton, CategoriesWrapper, CategoriesItem,
} from './style';

const Categories = ({ tags, selectedTags, updateSelectedTags }) => {
  const handleChange = (e) => {
    const newSelectedTags = [...selectedTags];
    const targetValue = e.target.value;
    const targetValueIndex = selectedTags.indexOf(targetValue);
    if (targetValueIndex < 0) {
      newSelectedTags.push(targetValue);
    } else {
      newSelectedTags.splice(targetValueIndex, 1);
    }
    updateSelectedTags(newSelectedTags);
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
  selectedTags: propTypes.arrayOf(propTypes.string).isRequired,
  updateSelectedTags: propTypes.func.isRequired,
};

export default Categories;
