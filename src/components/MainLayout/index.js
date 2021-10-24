import React, { useState, useEffect } from 'react';
import Header from '@components/Header';
import SideBar from '@components/SideBar';
import { DefaultDatas } from '@context';
import * as S from './styles.js';

const MainLayout = ({ children }) => {
  const [width, setWidth] = useState(window.innerWidth);
  const [hiddenSideBar, setHiddenSideBar] = useState(false);
  const [openNavBar, setOpenNavBar] = useState(true);
  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
  });
  const isMobile = width <= 768;
  useEffect(() => {
    if (isMobile) {
      setHiddenSideBar(false);
      setOpenNavBar(false);
    }
  }, [isMobile]);
  return (
    <DefaultDatas.Provider
      value={{
        isMobile: isMobile,
        setOpenNavBar: setOpenNavBar,
        openNavBar: openNavBar,
        hiddenSideBar: hiddenSideBar,
        setHiddenSideBar: setHiddenSideBar,
      }}
    >
      <S.Wrapper>
        <Header />
        {!hiddenSideBar && <SideBar />}
        <S.ContentPage openNavBar={openNavBar} hiddenSideBar={hiddenSideBar}>
          {children}
        </S.ContentPage>
      </S.Wrapper>
    </DefaultDatas.Provider>
  );
};

export default MainLayout;
