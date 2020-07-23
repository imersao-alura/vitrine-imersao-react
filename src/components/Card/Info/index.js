import React from 'react';
import propTypes from 'prop-types';

import {
  InfoWrapper, Image, Title, Subtitle, TextWrapper, Button,
} from './style';
import { ReactComponent as ArrowIcon } from '../../../assets/images/arrow-icon.svg';

const Info = ({
  foto, redeSocial, nome, nomeDoProjeto, url,
}) => (
  <InfoWrapper>
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
  </InfoWrapper>
);

Info.defaultProps = {
  foto: '',
  redeSocial: '',
};

Info.propTypes = {
  foto: propTypes.string,
  redeSocial: propTypes.string,
  nome: propTypes.string.isRequired,
  nomeDoProjeto: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
};

export default Info;
