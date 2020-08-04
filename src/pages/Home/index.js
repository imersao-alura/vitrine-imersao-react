import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { Ring } from "react-spinners-css";

import categoriasRepository from "../../repositories/categorias";
import PageDefault from "../../components/PageDefault";
import BannerMain from "../../components/BannerMain";
import Carousel from "../../components/Carousel";

const AppWrapper = styled.div`
  background: var(--grayDark);
`;

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 5rem auto;
`;

function Home() {
  const [dadosIniciais, setDadosIniciais] = useState([]);

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((categoriasComVideos) => {
        setDadosIniciais(categoriasComVideos);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <AppWrapper>
      <PageDefault>
        {dadosIniciais.length === 0 && (
          <LoadingWrapper>
            <Ring color="var(--primary)" size={100} />
          </LoadingWrapper>
        )}

        {dadosIniciais.map((categoria, indice) => {
          if (indice === 0) {
            return (
              <div key={categoria.id}>
                <BannerMain
                  videoTitle={dadosIniciais[0].videos[0].titulo}
                  url={dadosIniciais[0].videos[0].url}
                  videoDescription={dadosIniciais[0].videos[0].description}
                />
                <Carousel ignoreFirstVideo category={dadosIniciais[0]} />
              </div>
            );
          }

          return <Carousel key={categoria.id} category={categoria} />;
        })}
      </PageDefault>
    </AppWrapper>
  );
}

export default Home;
