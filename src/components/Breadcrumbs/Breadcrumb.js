import React from 'react';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const Breadcrumb = ({ links }) => {
  return (
    <>
      <S.Breadcrumb>
        {links.map((link, i) => (
          <S.Breadcrumb key={i}>{link}</S.Breadcrumb>
        ))}
      </S.Breadcrumb>
    </>
  );
};

export default Breadcrumb;
