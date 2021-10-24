// @flow

import React, { useContext } from 'react';
import type { Node } from 'react';
import { connect } from 'react-redux';

import userManager from '@services/user-manager';
import api from '@api';
import * as constants from '@services/constants';
import { AppContext } from '@components/MainLayout/AppContext';
import { protectedComponent } from '@containers/ProtectedRoute';

type Props = {
  children?: Node,
  user: {
    profile: {
      username: String,
      server: String,
      site: String,
    },
  },
};

const Dashboard = protectedComponent((props: Props) => {
  const { menuStatus } = useContext(AppContext);

  return (
    <div>
      <h1>Dashboard</h1>
      <div>User: {props.user.profile.username}</div>
      <div>Server: {props.user.profile.server}</div>
      <div>Site: {props.user.profile.site}</div>
      {props.children}
      <button
        onClick={event => {
          event.preventDefault();
          userManager.removeUser();
        }}
      >
        Logout
      </button>
      <button
        onClick={event => {
          api
            .get('/ast/assetstatus')
            .then(r => {})
            .catch(e => {});
        }}
      >
        Do Request
      </button>
      {menuStatus}
    </div>
  );
});

const mapStateToProps = state => {
  return {
    user: state.oidc.user,
  };
};

export default connect(mapStateToProps)(Dashboard);
