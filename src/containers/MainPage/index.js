import React, { useContext } from 'react';
import Button from '@components/Button';
import * as S from './styles';
import { AuthContext } from '@context';
import { useTranslation } from 'react-i18next';

const MainPage = () => {
  const { authenticate, auth } = useContext(AuthContext);
  const { t } = useTranslation(['translation']);

  return (
    <S.MainWrapper>
      <S.LoginPage>
        {!auth ? (
          <>
            <S.Hero>{t('welcome')}</S.Hero>
            <S.SubHero>{t('login.label')}</S.SubHero>
            <Button primary onClick={() => authenticate(true)}>
              {t('login.button')}
            </Button>
          </>
        ) : (
          <>
            <S.WelcomePage>{t('title')}</S.WelcomePage>
            <Button primary onClick={() => authenticate(false)}>
              {t('login.logout')}
            </Button>
          </>
        )}
      </S.LoginPage>
    </S.MainWrapper>
  );
};

export default MainPage;
