import React from 'react';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const Card = props => (
  <S.CardContainer half={props.half}>
    <S.CardTopBar>{props.label}</S.CardTopBar>
    <S.CardContent>{props.children}</S.CardContent>
  </S.CardContainer>
);

export default Card;
