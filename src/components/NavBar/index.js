import React from 'react';
import LeftNav from './LeftNav';
import RightNav from './RightNav';
import * as S from './styles';

const NavBar = () => {
  return (
    <S.NavBar>
      <LeftNav />
      <RightNav />
    </S.NavBar>
  );
};

export default NavBar;
