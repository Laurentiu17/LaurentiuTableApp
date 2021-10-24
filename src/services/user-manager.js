import { createUserManager } from 'redux-oidc';

const settings = {
  client_id: 'react-client',
  redirect_uri: `${window.location.protocol}//${window.location.hostname}${
    window.location.port ? `:${window.location.port}` : ''
  }/callback`,
  response_type: 'token id_token',
  scope: 'openid imaint imaint-profile',
  authority: '',
  silent_redirect_uri: `${window.location.protocol}//${
    window.location.hostname
  }${window.location.port ? `:${window.location.port}` : ''}/silent_renew.html`,
  automaticSilentRenew: true,
  filterProtocolClaims: true,
  loadUserInfo: true,
};

const userManager = createUserManager(settings);

export default userManager;
