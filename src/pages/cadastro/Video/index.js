import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import styled from 'styled-components';

import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/ButtonLink';

import useForm from '../../../hooks/userForm';
import videosRepository from '../../../repositories/videos';
import categoriasRepository from '../../../repositories/categorias';

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin: auto;
  h1 {
    font-size: 1.8em;
    margin: 30px auto;
  }
  button {
    margin: 10px auto;
  }
  a {
    margin: 10px auto;
    font-weight: bold;
    text-decoration: none;
  }
  a:hover {
    color: var(--primary);
    transition: 0.2s ease-in-out;
  }
  @media (max-width: 800px) {
    padding: 4%;
    h1 {
      font-size: 1.4em;
    }
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 600px;
  max-width: 600px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

function CadastroVideo() {
  const history = useHistory();
  const [categorias, setCategorias] = useState([]);
  const categoryTitles = categorias.map(({ titulo }) => titulo);
  const { handleChange, values } = useForm({
    titulo: '',
    url: '',
    categoria: '',
  });

  useEffect(() => {
    categoriasRepository.getAll().then((categoriasFromServer) => {
      setCategorias(categoriasFromServer);
    });
  }, []);

  return (
    <PageDefault>
      <MainWrapper>
        <h1>Cadastro de Video</h1>

        <Form
          onSubmit={(e) => {
            e.preventDefault();

            const categoriaEscolhida = categorias.find(
              (categoria) => categoria.titulo === values.categoria,
            );
            if (categoriaEscolhida) {
              videosRepository.create({
                titulo: values.url,
                url: values.url,
                categoriaId: 1,
              });
              history.push('/');
            }
          }}
        >
          <FormField
            label="Titulo da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="URL do Vídeo"
            type="text"
            name="url"
            value={values.url}
            onChange={handleChange}
          />

          <FormField
            label="Escolha uma Categoria"
            type="text"
            name="categoria"
            value={values.categoria}
            onChange={handleChange}
            suggestions={categoryTitles}
          />

          <ButtonLink type="submit">Cadastrar</ButtonLink>
        </Form>

        <Link to="/cadastro/categoria">Cadastrar Categoria</Link>
        <Link to="/">Ir para home</Link>
      </MainWrapper>
    </PageDefault>
  );
}

export default CadastroVideo;
