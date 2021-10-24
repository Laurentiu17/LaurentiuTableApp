const getEnvVar = (name: string, defaultVal: string = '') =>
  process.env[`REACT_APP_${name}`] || defaultVal;

export const WEB_BASE = getEnvVar('WEB_BASE', '');
export const API_ACCEPT_HEADER = getEnvVar('API_ACCEPT_HEADER', '');
export const API_BASE = getEnvVar('API_BASE', '');
export const MOCK_API_BASE = getEnvVar('MOCK_API_BASE', '');

// For Demolines only

export const API_BASE_DEMO = getEnvVar('API_BASE_DEMO', '');
