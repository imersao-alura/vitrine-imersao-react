import React, { useState } from 'react';

import { CardWrapper } from './style';
import Info from './Info';

const Card = ({
  nome, redeSocial, foto, nomeDoProjeto, url, tags,
}) => {
  const thumbnail = `
https://api.screenshotmachine.com?key=296fe8&url=${url}&dimension=1024x768
  `;

  return (
    <CardWrapper thumbnail={thumbnail}>
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

export default Card;
