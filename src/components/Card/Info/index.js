import React from 'react';
import {
  Info, Image, Title, Subtitle, TextWrapper, Button,
} from './style';
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow-icon.svg';

const Front = ({
  foto, redeSocial, nome, nomeDoProjeto, url,
}) => (
  <Info>
    <Image
      foto={foto}
      href={redeSocial}
      target="_blank"
    />

    <TextWrapper>
      <Title>
        {nomeDoProjeto}
      </Title>
      <Subtitle>
        {nome}
      </Subtitle>
    </TextWrapper>

    <Button
      as="a"
      aria-label="Ir para a página do projeto em nova aba"
      href={url}
      target="_blank"
    >
      <ArrowIcon className="arrow-icon" />
    </Button>
  </Info>
);

export default Front;
