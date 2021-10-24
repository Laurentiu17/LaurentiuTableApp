import React, { useState, useRef, useEffect, useContext } from 'react';
import * as S from './styles';
import { Hamburger } from '@icons';
import MainNav from './MainNav';
import { HideMenu, Close } from '@icons';
import { useOutsideClick } from '@services/utils';
import { AuthContext, DefaultDatas } from '@context';

const NavBar = props => {
  const sideBarRef = useRef();
  const authContext = useContext(AuthContext);
  const { isMobile, setOpenNavBar, openNavBar } = useContext(DefaultDatas);
  useOutsideClick(sideBarRef, () => isMobile && setOpenNavBar(false));

  return (
    <S.NavBar openNavBar={openNavBar}>
      {!openNavBar ? (
        <>
          <S.Burger>
            <S.BurgerButton onClick={() => setOpenNavBar(true)}>
              <Hamburger />
            </S.BurgerButton>
          </S.Burger>
          {isMobile && (
            <S.LogoBig to="/">
              <S.Img src="../../../assets/images/logobig.png" alt="" />
            </S.LogoBig>
          )}
        </>
      ) : (
        <>
          <S.LogoBig to="/">
            <S.Img src="../../../assets/images/logobig.png" alt="" />
          </S.LogoBig>
          {authContext.auth && (
            <MainNav openNavBar={openNavBar} _ref={sideBarRef} />
          )}
          {!isMobile ? (
            <S.BurgerButton onClick={() => setOpenNavBar(false)}>
              <HideMenu />
            </S.BurgerButton>
          ) : (
            <S.Burger closeButton>
              <S.BurgerButton onClick={() => setOpenNavBar(false)}>
                <Close />
              </S.BurgerButton>
            </S.Burger>
          )}
        </>
      )}
    </S.NavBar>
  );
};

export default NavBar;
