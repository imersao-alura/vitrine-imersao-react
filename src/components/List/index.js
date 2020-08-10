import React from 'react';
import propTypes from 'prop-types';

import Card from '../Card';
import ListWrapper from './style';

const List = ({ projetos }) => (
  <ListWrapper>
    {
      projetos.map((projeto, index) => {
        const key = `${index}_${projeto.nome}`;

        return (
          <Card
            nome={projeto.nome}
            redeSocial={projeto.redeSocial}
            foto={projeto.foto}
            nomeDoProjeto={projeto.nomeDoProjeto}
            url={projeto.url}
            tags={projeto.tags}
            key={key}
            indice={index}
          />
        );
      })
    }
  </ListWrapper>
);

List.propTypes = {
  projetos: propTypes.arrayOf(
    propTypes.shape(
      {
        nome: propTypes.string,
        foto: propTypes.string,
        nomeDoProjeto: propTypes.string,
        url: propTypes.string,
        tags: propTypes.arrayOf(propTypes.string),
      },
    ),
  ).isRequired,
};

export default List;
