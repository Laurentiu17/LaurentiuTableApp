import React from 'react';
import { Link } from '@reach/router';

import * as S from './styles';
/* eslint react/prop-types: 0 */

const BreadcrumbItem = ({ children, path }) => {
  return (
    <S.BreadcrumbItem className={`${path ? 'clickable' : ''}`}>
      {path ? <Link to={path}>{children}</Link> : <>{children}</>}
    </S.BreadcrumbItem>
  );
};

export default BreadcrumbItem;
