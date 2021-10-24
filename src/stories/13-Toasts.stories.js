import React, { Fragment } from 'react';

import Toast from '@components/Toast';

export default {
  title: 'Toast',
  component: Toast,
};

export const defaultTopLeft = () => (
  <Toast
    position="top-left"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange={false}
    draggable={false}
    pauseOnHover={false}
  />
);

const toastMessage = () => {
  return (
    <Fragment>
      <div className="title">ceva</div>
      <div className="content">altceva</div>
    </Fragment>
  );
};

export const info = () => (
  <Toast
    position="top-left"
    autoClose={50000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange={false}
    draggable={false}
    pauseOnHover={false}
    toastMsg={toastMessage()}
    toastType="info"
  />
);

export const positive = () => (
  <Toast
    position="top-left"
    autoClose={50000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange={false}
    draggable={false}
    pauseOnHover={false}
    toastMsg={toastMessage()}
    toastType="positive"
  />
);

export const warning = () => (
  <Toast
    position="top-left"
    autoClose={50000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange={false}
    draggable={false}
    pauseOnHover={false}
    toastMsg={toastMessage()}
    toastType="warning"
  />
);

export const negative = () => (
  <Toast
    position="top-left"
    autoClose={50000}
    hideProgressBar={true}
    newestOnTop={false}
    closeOnClick={false}
    rtl={false}
    pauseOnVisibilityChange={false}
    draggable={false}
    pauseOnHover={false}
    toastMsg={toastMessage()}
    toastType="negative"
  />
);
