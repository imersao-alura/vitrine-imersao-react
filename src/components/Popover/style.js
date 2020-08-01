import styled from 'styled-components';
import { Tag } from '../Card/style';

export const PopoverButton = styled.button`
  align-self: baseline;
  background: transparent;
  border: none;
  cursor: pointer;
  display: inherit;
  outline: none;
  padding: 0;
  position: relative;
`;

export const PopoverContent = styled.ul`
  background-color: var(--secondary);
  border-radius: 4px;
  color: var(--secondary);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  list-style: none;
  min-width: 250px;
  padding: 10px;
  position: absolute;
  right: 10px;
  top: calc(100% + 10px);

  &:after {
    border: 8px solid;
    border-left-color: transparent;
    border-top-color: transparent;
    content: '';
    position: absolute;
    right: 0;
    top: -9px;
  }
`;

PopoverContent.Tag = styled(Tag)`
  background: var(--grayDark);
`;
