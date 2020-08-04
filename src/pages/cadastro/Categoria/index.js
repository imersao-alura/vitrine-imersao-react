/* eslint-disable react/no-array-index-key */
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { Ring } from 'react-spinners-css';

import categoriasRepository from '../../../repositories/categorias';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import ButtonLink from '../../../components/ButtonLink';
import Table from '../../../components/Table';

import useForm from '../../../hooks/userForm';

const MainWrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

const LoadingWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  margin: 10px auto;
`;

function CadastroCategoria() {
  const valoresIniciais = {
    titulo: '',
    descricao: '',
    cor: '',
  };
  const { clearForm, handleChange, values } = useForm(valoresIniciais);
  const [categorias, setCategorias] = useState([]);

  function handleSubmit(infosDoEvento) {
    infosDoEvento.preventDefault();
    setCategorias([...categorias, values]);
    clearForm();
  }

  useEffect(() => {
    categoriasRepository
      .getAllWithVideos()
      .then((respostaDoServidor) => {
        setTimeout(() => {
          setCategorias(respostaDoServidor);
        }, 2000);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <PageDefault>
      <MainWrapper>
        <h1>Cadastro de Categoria</h1>

        <Form onSubmit={handleSubmit}>
          <FormField
            label="Titulo da Categoria"
            type="text"
            name="titulo"
            value={values.titulo}
            onChange={handleChange}
          />

          <FormField
            label="Descrição da Categoria"
            type="textarea"
            name="descricao"
            value={values.descricao}
            onChange={handleChange}
          />

          <FormField
            label="Cor da Categoria"
            type="color"
            name="cor"
            value={values.cor}
            onChange={handleChange}
          />

          <ButtonLink>Cadastrar</ButtonLink>
        </Form>

        <Table categorias={categorias} />
        {categorias.length === 0 && (
          <LoadingWrapper>
            <Ring color="var(--primary)" size={100} />
          </LoadingWrapper>
        )}

        <Link to="/">Ir para home</Link>
      </MainWrapper>
    </PageDefault>
  );
}

export default CadastroCategoria;
