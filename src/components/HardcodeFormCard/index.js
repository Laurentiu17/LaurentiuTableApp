import React from 'react';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const HardcodeFormCard = props => (
  <S.CardContainer half={props.half}>
    <S.CardTopBar>{props.title}</S.CardTopBar>
    <S.CardContent>stuff happens here</S.CardContent>
  </S.CardContainer>
);

export default HardcodeFormCard;
