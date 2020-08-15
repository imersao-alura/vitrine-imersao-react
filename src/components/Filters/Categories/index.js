import React, { useState } from 'react';
import propTypes from 'prop-types';

import DownArrowIcon from '../../../assets/images/down-arrow.svg';
import {
  Category,
  RadioButton,
  CategoriesWrapper,
  CategoriesItem,
  Dropdown,
  DropdownContent,
} from './style';

const Categories = ({ tags, selectedTags, updateSelectedTags }) => {
  const [open, setOpen] = useState(false);

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
      <Dropdown
        onClick={() => setOpen(!open)}
        icon={DownArrowIcon}
      >
        Categorias
      </Dropdown>
      {
        open

      && (
      <>
        <DropdownContent.Item />
        <DropdownContent>
          {tags.map((tag) => {
            const isChecked = selectedTags.includes(tag);

            return (
              <CategoriesItem>
                <RadioButton
                  value={tag}
                  type="checkbox"
                  id={tag}
                  onChange={handleChange}
                />
                <Category for={tag} isChecked={isChecked}>{tag}</Category>
              </CategoriesItem>
            );
          })}
        </DropdownContent>
      </>
      )
      }
    </CategoriesWrapper>
  );
};

Categories.propTypes = {
  tags: propTypes.arrayOf(propTypes.string).isRequired,
  selectedTags: propTypes.arrayOf(propTypes.string).isRequired,
  updateSelectedTags: propTypes.func.isRequired,
};

export default Categories;
