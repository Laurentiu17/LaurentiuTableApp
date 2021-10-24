import React, { useState, useEffect, useRef, useContext } from 'react';
import i18next from '../../i18n';
import * as I from '@icons';
import * as S from './styles';
import { useOutsideClick } from '@services/utils';
import { capitalize } from '@services/utils';
import { AuthContext } from '@context';

const LanguageSwitcher = ({ isMobile }) => {
  const [openLangMenu, setOpenLangMenu] = useState(false);
  const { setLang } = useContext(AuthContext);
  const languages = [
    { value: 'en', label: <I.FlagEn />, name: 'English' },
    { value: 'fr', label: <I.FlagFr />, name: 'French' },
    { value: 'ru', label: <I.FlagRu />, name: 'Russian' },
    { value: 'zh', label: <I.FlagZh />, name: 'Chinese' },
    { value: 'es', label: <I.FlagEs />, name: 'Spanish' },
  ];

  const changeLanguage = lng => {
    i18next.changeLanguage(lng);
    setOpenLangMenu(false);
  };

  useEffect(() => {
    setLang(i18next.language);
  }, [i18next.language]);

  const currentLang = window.localStorage.i18nextLng;
  useEffect(() => {
    changeLanguage(currentLang);
  }, []);

  const closeLangMenu = useRef();
  useOutsideClick(closeLangMenu, () => {
    !isMobile && setOpenLangMenu(false);
  });

  const Flag = I[`Flag${capitalize(currentLang)}`];

  return (
    <S.LangWrapper ref={closeLangMenu}>
      <S.SelectableMenu onClick={() => setOpenLangMenu(!openLangMenu)}>
        <Flag />
        {isMobile && <S.LangHeader>Select Language</S.LangHeader>}
      </S.SelectableMenu>
      {openLangMenu && (
        <S.SelectLanguageMenu>
          {!isMobile && <S.LangHeader>Change Language</S.LangHeader>}
          {languages.map((item, i) => (
            <S.LangItem key={i} onClick={() => changeLanguage(item.value)}>
              {item.label} {item.name}
              {item.value === currentLang && (
                <S.Selected>
                  <I.Checkmark />
                </S.Selected>
              )}
            </S.LangItem>
          ))}
        </S.SelectLanguageMenu>
      )}
    </S.LangWrapper>
  );
};

export default LanguageSwitcher;
