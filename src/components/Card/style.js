import styled, { css } from 'styled-components';
import { InfoWrapper, Button } from './Info/style';

export const CardWrapper = styled.article`
  border-radius: 24px;
  box-shadow: 0 0 4px #dedede;  display: flex;
  flex: 1;
  margin: 1rem;
  max-width: 400px;
  min-width: 300px;
  min-height: 300px;
  padding: 1rem;
  position: relative;
  
  @media (max-width: 800px) {
    max-width: 90vw;
  }

  ${({ thumbnail }) => css`
  background: url(${thumbnail});
  background-size: cover;
  background-position: center;
  `}

  &:nth-child(even) {
    & ${Button} {
      background-color: var(--primary);
      fill: var(--secondary);
      border-color: var(--secondary);
      
      &:hover {
        fill: var(--primary);
        background-color: var(--secondary);
        border-color: var(--secondary);
      }
    }

    & ${InfoWrapper} {
      background-color: var(--primary);
      color: var(--secondary);
      
      &:after,
      &:before {
        border-color: var(--primary);
        border-top-color: transparent;
      }
      &:before {
        border-left-color: transparent;
      }
      
      &:after {
        border-right-color: transparent;
      }
    }
  }

  &:nth-child(odd) {
    & ${Button} {
      background-color: var(--secondary);
      fill: var(--white);
      border-color: var(--white);
      
      &:hover {
        fill: var(--secondary);
        background-color: var(--white);
        border-color: var(--white);
      }
    }

    & ${InfoWrapper} {
      background-color: var(--secondary);
      color: var(--white);
      &:after,
      &:before {
        border-color: var(--secondary);
        border-top-color: transparent;
      }
      &:before {
        border-left-color: transparent;
      }
      
      &:after {
        border-right-color: transparent;
      }
    }
  }
`;

export const Back = styled.div`

`;
