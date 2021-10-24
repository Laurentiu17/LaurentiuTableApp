import React, { Fragment } from 'react';

import RadioInput from '@components/RadioInput';

export default {
  title: 'Radio Input',
  component: RadioInput,
};

export const radio = () => (
  <Fragment>
    <RadioInput name="group" label="radio 1" />
  </Fragment>
);
