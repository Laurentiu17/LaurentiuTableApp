import React from 'react';
import { connect } from 'react-redux';
import { lazy } from '@loadable/component';

const LoginPage = lazy(() => import('@components/Login'));
const MainPage = lazy(() => import('@components/Dashboard'));

type Props = {
  user: {
    expired: Boolean,
  },
};

const HomePage = ({ user }: Props) => {
  return !user || user.expired ? <LoginPage /> : <MainPage />;
};

function mapStateToProps(state) {
  return {
    user: state.oidc.user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    dispatch,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
