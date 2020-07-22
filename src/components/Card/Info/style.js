import styled, { css } from 'styled-components';

export const Info = styled.div`
  bottom: -10px;
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  align-items: center;
  padding: 16px;
  display: flex;
  height: 30%;
  position: absolute;
  left: -8px;
  width: calc(100% + 16px);

  &:after,
  &:before {
    content: '';
    border: 4px solid;
    top: -8px;
    position: absolute;
  }

  &:after {
    right: 0;
  }

  &:before {
    left: 0;
  }
`;

export const Image = styled.a`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
  background: ${({ foto }) => css`
    url(${foto});
  `};
  background-size: cover;
  background-position: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
export const Title = styled.h1`
  text-align: left;
  margin: 0;
  font-weight: normal;
  font-family: 'Staatliches';
  `;

export const Subtitle = styled.h2`
  text-align: left;
  margin: 0;
  font-size: 1rem;
  font-weight: normal;
`;

export const Button = styled.button`
  margin-left: auto;
  border-radius: 50%;
  background-color: var(--primary);
  padding: 10px;
  width: 50px;
  height: 50px;
  transition: background-color .2s, fill .2s;
  border: 4px solid;

  .arrow-icon {
    width: 100%;
    height: auto;
    path {
      fill: inherit;
    }
  }
`;
