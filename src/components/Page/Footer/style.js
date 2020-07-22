import styled from 'styled-components';

export default styled.footer`
  background: var(--secondary);
  border-top: 8px solid var(--primary);
  padding: 10px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

