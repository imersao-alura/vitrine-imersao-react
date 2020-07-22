import React from 'react';
import Card from '../Card';
import { ListWrapper } from './style';

const List = ({ projetos }) => (
  <ListWrapper>
    {
      projetos.map((projeto, index) => (
        <Card projeto={projeto} key={index} />
      ))
    }
  </ListWrapper>
);

export default List;
