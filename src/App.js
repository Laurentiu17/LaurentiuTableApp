import React, { Fragment, useState } from 'react';
import { ThemeProvider } from 'styled-components/macro';
import { Router } from '@reach/router';

import ErrorBoundary from '@components/ErrorBoundary';
import MainLayout from '@components/MainLayout';
import GlobalStyles from '@styles/global';
import MainPage from '@containers/MainPage';
import QuickLinks from '@containers/QuickLinks';
import QuickWorkOrders from '@containers/QuickWorkOrders';
import { AuthContext } from '@context';

const App = () => {
  const [auth, setAuth] = useState(false);
  const [lang, setLang] = useState(window.localStorage.i18nextLng);

  return (
    <ErrorBoundary>
      <ThemeProvider theme={{ mode: 'light' }}>
        <Fragment>
          <GlobalStyles />
          <AuthContext.Provider
            value={{
              auth: auth,
              authenticate: arg => setAuth(arg),
              lang,
              setLang,
            }}
          >
            <MainLayout>
              <Router>
                <MainPage path="/" />
                <QuickLinks path="/quicklinks" />
                <QuickWorkOrders path="/workorders/quickworkorders" />
              </Router>
            </MainLayout>
          </AuthContext.Provider>
        </Fragment>
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default App;
