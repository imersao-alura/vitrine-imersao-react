import styled from 'styled-components';

export const Form = styled.form`
  border: 4px solid var(--primary);
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  display: flex;
  max-width: 100%;
  flex: 1;
  `;

export const Input = styled.input`
  background-image: ${({ icon }) => `url(${icon})`};
  background-position: 98%;
  background-size: 30px 30px;
  background-repeat: no-repeat;
  border: 0;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
  color: var(--primary);
  flex: 1;
  font-size: 24px;
  outline: none;
  padding: 16px;

  @media (max-width: 800px) {
    font-size: 18px;
    padding: 8px;
    background-size: 25px 25px;
  }
`;
