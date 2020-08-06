import styled, { css } from 'styled-components';

export const CategoriesWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  list-style: none;
  padding: 0;
  position: relative;
  margin: 0;
`;

export const Dropdown = styled.button`
  background-color: var(--primary);
  background-image: ${({ icon }) => `url(${icon})`};
  background-position: 90% 53%;
  background-repeat: no-repeat;
  background-size: 14px 14px;
  border: none;
  border-top-right-radius: 8px;
  border-bottom-right-radius: 8px;
  color: var(--white);
  cursor: pointer;
  font-size: 16px;
  height: 100%;
  outline: none;
  padding-left: 16px;
  padding-right: 30px;
  transition: opacity .3s;
  &:hover {
    opacity: .8;
  }
`;

export const DropdownContent = styled.div`
  background-color: var(--grayMedium);
  border: 6px solid var(--primary);
  border-radius: 12px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  list-style: none;
  max-height: 80vh;
  overflow-y: auto;
  padding: 12px;
  position: absolute;
  right: 0;
  top: calc(100% + 20px);
  width: 90vw;
  z-index: 1;
`;

DropdownContent.Item = styled.span`
  border: 10px solid var(--primary);
  border-right-color: transparent;
  border-left-color: transparent;
  border-top-color: transparent;
  bottom: -20px;
  position: absolute;
  right: 10px;
`;

export const CategoriesItem = styled.li`
  margin: 8px;
  color: var(--secondary);
`;

export const Category = styled.label`
  background-color: var(--grayMedium);
  border: 2px solid;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  padding: 5px;
  transition: backgroun-color .3s;

  &:hover {
    background-color: var(--grayLight);
  }

  ${
  ({ isChecked }) => (isChecked && css`
    color: var(--primary);
    background-color: var(--secondary);
  `
  )
}
`;

export const RadioButton = styled.input`
  display: none;

  &:checked + label{
    color: var(--primary);
    background-color: var(--secondary);
  }
`;
