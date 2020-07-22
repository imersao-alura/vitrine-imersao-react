import styled from 'styled-components';

export default styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  padding-top: 3rem;
  padding-bottom: 3rem;

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
  }
  @media (max-width: 680px) {
    grid-template-columns: 1fr;
  }
`;
