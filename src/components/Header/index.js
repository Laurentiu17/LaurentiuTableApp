import React, { useState, useEffect, useRef } from 'react';
import * as S from './styles';
import * as I from '@icons';
import LanguageSwitcher from '../LanguageSwitcher';
import { useOutsideClick } from '@services/utils';

const Header = () => {
  const [openMyProfile, setOpenMyProfile] = useState(false);
  const [width, setWidth] = useState(window.innerWidth);
  const isMobile = width <= 768;
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
      isMobile && openMyProfile && setOpenMyProfile(false);
    };
    window.addEventListener('resize', handleResize);
  });

  const moreButtonRef = useRef();
  useOutsideClick(moreButtonRef, () => isMobile && setOpenMyProfile(false));

  return (
    <>
      <S.MoreButton
        onClick={() => {
          setOpenMyProfile(!openMyProfile);
        }}
        close={openMyProfile}
      >
        {!openMyProfile ? <I.More /> : <I.Close />}
      </S.MoreButton>
      <S.Header openedProfile={openMyProfile}>
        {openMyProfile || !isMobile ? (
          <S.Ul>
            <S.Li>
              <I.InfoIcon />
              {isMobile && <S.ProfileLink>About Application</S.ProfileLink>}
            </S.Li>
            <S.Li>
              <I.ServerIcon />
              {isMobile && <S.ProfileLink>Current Site</S.ProfileLink>}
            </S.Li>
            <S.Li>
              <I.NotificationBell />
              {isMobile && <S.ProfileLink>Notifications</S.ProfileLink>}
            </S.Li>
            <S.Li ref={moreButtonRef}>
              <LanguageSwitcher isMobile={isMobile} />
            </S.Li>
            <S.ProfilePhoto>
              <S.Img src="../../../assets/images/profile.png" alt="" />
              {isMobile && <div>Tyles Gibbs</div>}
            </S.ProfilePhoto>
          </S.Ul>
        ) : null}
      </S.Header>
    </>
  );
};

export default Header;
