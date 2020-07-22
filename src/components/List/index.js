import React from 'react';
import Card from '../Card';
import ListWrapper from './style';

const List = ({ projetos }) => (
  <ListWrapper>
    {
      projetos.map((projeto, index) => (
        <Card
          nome={projeto.nome}
          redeSocial={projeto.redeSocial}
          foto={projeto.foto}
          nomeDoProjeto={projeto.nomeDoProjeto}
          url={projeto.url}
          tags={projeto.tags}
          key={index}
        />
      ))
    }
  </ListWrapper>
);

export default List;
