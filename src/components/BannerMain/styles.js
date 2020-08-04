import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  width: 1200px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (min-width: 1800px) {
    width: 1450px;
  }
  @media (max-width: 800px) {
    width: 100%;
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 49%;
  display: inline-block;
  @media (max-width: 800px) {
    width: 100%;
    margin-bottom: 0px;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;
  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  font-weight: 400;
  max-width: 540px;
  @media (max-width: 800px) {
    display: none;
  }
  @media (min-width: 801px) {
    text-align: justify;
    width: 440px;
    padding-right: 5px;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 300;
  font-size: 40px;
  text-shadow: #000 2px 3px 2px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;
  @media (max-width: 800px) {
    font-size: 28px;
    text-align: center;
    text-shadow: #000 2px 3px 2px;
    margin-top: 80px;
  }
`;

export const BannerMainContainer = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 70vh;
  position: relative;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  margin-bottom: 64px;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }
  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }
  &:before {
    top: 0;
    height: 100%;
    background: rgba(0,0,0,0.5);
  }
  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #141414 0%, transparent 100%);
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  box-sizing: border-box;
  cursor: pointer;
  padding: 16px 24px;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  outline: none;
  border-radius: 5px;
  text-decoration: none;
  display: inline-block;
  border: 1px solid transparent;
  color: var(--black);
  background: var(--white);
  border-color: 2px solid var(--black);
  transition: opacity .3s;
  display: none;
  margin: 0 auto;
  &:hover {
    opacity: .8;
    transition: 0.2s ease-in-out;
  }
  @media (max-width: 800px) {
    display: block;
  }
`;
