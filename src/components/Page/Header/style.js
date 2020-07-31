import styled from 'styled-components';

export const Logo = styled.img`
  max-width: 168px;
  max-height: 90px;
  @media (max-width: 800px) {
    max-width: 105px;
  }
`;

Logo.Icone = styled(Logo)`
  @media (max-width: 800px) {
    display: none;
  }
`;

export const Menu = styled.nav`
  width: 100%;
  height: 94px;
  z-index: 100;

  display: flex;
  justify-content: space-between;
  align-items: center;

  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding-left: 5%;
  padding-right: 5%;

  background: var(--grayLight);
  border-bottom: 1px solid var(--grayMedium);
`;

export const HeaderWrapper = styled.header`
  --bodyPaddingTop: 94px;
  padding-top: var(--bodyPaddingTop);
`;
