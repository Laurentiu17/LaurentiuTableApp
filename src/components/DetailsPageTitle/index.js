import React from 'react';

import * as S from './styles';

type Props = {
  title?: string,
  children?: string,
};

const DetailsPageTitle = ({ children, title }: Props) => (
  <S.Title>
    {children}
    {title}
  </S.Title>
);

export default DetailsPageTitle;
