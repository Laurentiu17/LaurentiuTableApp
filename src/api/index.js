import axios from 'axios';

import * as constants from '@services/constants';

// import i18n from '../i18n';
import store from '../store';
const apiBase = constants.API_BASE;
const apiAcceptHeader = constants.API_ACCEPT_HEADER;

// const user = store.getState().oidc.user;
// const token = user && user.access_token;

// For Demolines page only
const apiBaseDemo = constants.API_BASE_DEMO;

// create axios instance with baseURL and some headers
const axiosInstance = axios.create({
  baseURL: apiBase,
  headers: {
    Accept: apiAcceptHeader,
    AccessControlAllowOrigin: '*',
  },
});

// Create axios instance for Demolines page
// TODO: detele after demolines is removed from application
const axiosInstanceDemo = axios.create({
  baseURL: apiBaseDemo,
  headers: {
    Accept: apiAcceptHeader,
  },
});

// add Authorization header to the axios instance only if token exists
// if (token) {
//   axiosInstance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
// }

// check if the global handler should be used or not
const isHandlerEnabled = (config = {}) => {
  return config.hasOwnProperty('handlerEnabled') && !config.handlerEnabled
    ? false
    : true;
};
const onError = error => {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  if (isHandlerEnabled(error.config)) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      switch (error && error.response && error.response.status) {
        case 422:
          const { data } = error.response;
          const { type, detail, resultMessage } = data;

          if (type === 'validation.error') {
            // notif.error(i18n.t('notifications.validation.invalid'));
          }
          if (type !== 'validation.error' && detail && detail.length) {
            // notif.error(i18n.t(`notifications.${detail}`));
          }
          if (
            type !== 'validation.error' &&
            resultMessage &&
            resultMessage.length
          ) {
            // make sure there are no . in the result message, since that will break
            // the translation
            // notif.error(i18n.t(`notifications.${resultMessage.replace('.', '')}`));
          }
          break;

        case 300:
          break;

        case 503:
          // notif.error(i18n.t('notifications.api.unavailable'));
          break;

        case 504:
          // notif.error(i18n.t('notifications.api.unavailable'));
          break;

        case 500:
          // window.location.href = '/error';
          // return JSON.parse(JSON.stringify(error)).response.data;\
          break;
        default:
          break;
      }
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
      // http.ClientRequest in node.js
    } else {
      // Something happened in setting up the request that triggered an Error
    }
  }

  return Promise.reject(error);
};

const onSuccess = response => {
  // Any status code that lie within the range of 2xx cause this function to trigger
  // Do something with response data
  if (isHandlerEnabled(response.config)) {
  }

  return response.data;
};

axiosInstance.interceptors.response.use(
  response => onSuccess(response),
  error => onError(error)
);
axiosInstance.interceptors.request.use(
  config => {
    const user = store.getState().oidc.user;
    const token = user && user.access_token;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
      // axiosInstance.defaults.headers.common['Authorization'] = token;
    }
    return config;
  },
  error => Promise.reject(error)
);

// (function() {
//   const user = store.getState().oidc.user;
//   const token = user && user.access_token;
//   if (token) {
//     axios.defaults.headers.common['Authorization'] = token;
//   } else {
//     axios.defaults.headers.common['Authorization'] = null;
//     /*if setting null does not remove `Authorization` header then try
//            delete axios.defaults.headers.common['Authorization'];
//          */
//   }
// })();

// For Demolines page only
axiosInstanceDemo.interceptors.response.use(
  response => onSuccess(response),
  error => onError(error)
);

let api = {};

api.get = (url, config) => axiosInstance.get(url, config);
api.post = (url, data, config) => axiosInstance.post(url, data, config);
api.put = (url, data, config) => axiosInstance.put(url, data, config);
api.delete = (url, config) => axiosInstance.delete(url, config);
api.patch = (url, data, config) => axiosInstance.patch(url, data, config);

export default api;
// For Demolines page only

let apiDemo = {};

apiDemo.get = (url, config) => axiosInstanceDemo.get(url, config);
apiDemo.post = (url, data, config) => axiosInstanceDemo.post(url, data, config);
apiDemo.put = (url, data, config) => axiosInstanceDemo.put(url, data, config);
apiDemo.delete = (url, config) => axiosInstanceDemo.delete(url, config);
apiDemo.patch = (url, data, config) =>
  axiosInstanceDemo.patch(url, data, config);

export { api, apiDemo };
