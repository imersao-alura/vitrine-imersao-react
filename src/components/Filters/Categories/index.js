import React from 'react';
import propTypes from 'prop-types';

import { Category, RadioButton } from './style';

const Categories = ({ tags, updateSelectedTag }) => {
  const handleChange = (e) => {
    const targetValue = e.target.value;
    const valueIsCheched = e.target.checked;
    const newValue = valueIsCheched ? targetValue : 'all';
    updateSelectedTag(newValue);
  };

  return (
    <>
      {
        tags.map((tag) => (
          <>
            <Category for={tag}>
              {tag}
            </Category>

            <RadioButton
              value={tag}
              type="checkbox"
              id={tag}
              onChange={handleChange}
            />
          </>
        ))
      }
    </>
  );
};

Categories.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTag: propTypes.string.isRequired,
  updateSelectedTag: propTypes.func.isRequired,
};

export default Categories;
