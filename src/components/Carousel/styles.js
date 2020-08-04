import styled from 'styled-components';

export const Title = styled.h3`
  font-style: normal;
  font-weight: normal;
  font-size: 28px;
  line-height: 1;
  margin-bottom: 8px;
  display: inline-block;
  padding: 0;
  line-height: 1;
  border-radius: 4px;
  @media (max-width: 800px) {
    font-size: 18px;
    font-weight: bold;
    padding: 0;
  }
`;

export const VideoCardList = styled.ul`
  margin: 0;
  padding-left: 0;
  padding-bottom: 8px;
  list-style: none;
  display: flex;
  overflow-x: auto;
  flex-direction: row;

  @media (max-width: 800px) {
    padding-bottom: 10px;

    ::-webkit-scrollbar {
      height: 2px;
    }

  }
`;

export const VideoCardGroupContainer = styled.section`
  color: white;
  min-height: 197px;
  margin-left: 5%;
  margin-bottom: 16px;
`;
