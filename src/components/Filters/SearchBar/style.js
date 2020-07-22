import styled from 'styled-components';

export const Form = styled.form`
  border: 4px solid var(--primary);
  border-radius: 8px;
  display: flex;
  max-width: 100%;
`;

export const Input = styled.input`
  border: 0;
  border-radius: 8px;
  color: var(--primary);
  flex: 1;
  font-size: 24px;
  outline: none;
  padding: 16px;

  @media(max-width: 800px) {
    font-size: 18px;
    padding: 8px;
  }
`;

export const Button = styled.button`
  background-color: var(--primary);
  border: 0;
  color: var(--white);
  cursor: pointer;
  padding: 16px;

  img {
    width: 20px;
  }
`;
