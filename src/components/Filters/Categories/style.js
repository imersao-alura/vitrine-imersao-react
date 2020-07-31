import styled from 'styled-components';

export const CategoriesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
`;

export const CategoriesItem = styled.li`
  margin: 8px;
  color: var(--secondary);
`;

export const Category = styled.label`
  border: 2px solid;
  border-radius: 4px;
  font-size: 12px;
  padding: 5px;
`;

export const RadioButton = styled.input`
  display: none;

  &:checked + label {
    color: var(--primary);
    background-color: var(--secondary);
  }
`;
