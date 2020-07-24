import React from 'react';
import propTypes from 'prop-types';

import { CardWrapper, Tags, Tag } from './style';
import Info from './Info';

const Card = ({
  nome, redeSocial, foto, nomeDoProjeto, url, tags,
}) => {
  const thumbnail = `
https://api.screenshotmachine.com?key=296fe8&url=${url}&dimension=1024x768
  `;

  return (
    <CardWrapper thumbnail={thumbnail}>
      <Tags>
        {tags.map((tag) => (
          <Tag>{tag}</Tag>
        ))}
      </Tags>
      <Info
        foto={foto}
        redeSocial={redeSocial}
        nome={nome}
        nomeDoProjeto={nomeDoProjeto}
        url={url}
      />
    </CardWrapper>
  );
};

Card.defaultProps = {
  foto: '',
  redeSocial: '',
  tags: [],
};

Card.propTypes = {
  foto: propTypes.string,
  redeSocial: propTypes.string,
  nome: propTypes.string.isRequired,
  nomeDoProjeto: propTypes.string.isRequired,
  url: propTypes.string.isRequired,
  tags: propTypes.arrayOf(propTypes.string),
};

export default Card;
