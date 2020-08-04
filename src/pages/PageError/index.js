import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const AppWrapper = styled.iframe`
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #fff;
  width: 100%;
  height: 680px;
  margin-top: 30px;
  @media(max-width: 800px) {
    width: 100%;
  }
`;

const ReturnPage = styled.nav`
  color: #fff;
  width: 100%;
  height: 40px;
  a {
    display: flex;
    align-items: center;
    cursor: pointer;
    font-size: 1em;
    font-weight: bold;
    text-decoration: none;
    width: 150px;
    padding: 0.5rem 1rem;
  }

  a:hover * {
    color: var(--primary);
    fill: var(--primary);
  }
  a p {
    display: flex;
    align-items: center;
    font-family: 'Press Start 2P', cursive;
  }
  p svg {
    margin-right: 0.5rem;
  }
`;

function PageError() {
  return (
    <>
      <ReturnPage>
        <Link to="/">
          <p>
            <svg aria-hidden="true" height="24" width="24" focusable="false" data-prefix="fas" data-icon="arrow-left" class="svg-inline--fa fa-arrow-left fa-w-14" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path id="arrow-left" fill="#ffffff" d="M257.5 445.1l-22.2 22.2c-9.4 9.4-24.6 9.4-33.9 0L7 273c-9.4-9.4-9.4-24.6 0-33.9L201.4 44.7c9.4-9.4 24.6-9.4 33.9 0l22.2 22.2c9.5 9.5 9.3 25-.4 34.3L136.6 216H424c13.3 0 24 10.7 24 24v32c0 13.3-10.7 24-24 24H136.6l120.5 114.8c9.8 9.3 10 24.8.4 34.3z"></path></svg>
            Voltar
          </p>
        </Link>
      </ReturnPage>

      <AppWrapper src="https://gameflappybird.vercel.app" scrolling="no" frameborder="no" />
    </>
  );
}

export default PageError;
