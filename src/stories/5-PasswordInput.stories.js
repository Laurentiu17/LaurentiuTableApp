import React from 'react';

import PasswordInput from '@components/PasswordInput';

export default {
  title: 'Password Input',
  component: PasswordInput,
};

export const password = () => (
  <PasswordInput placeholder={'Placeholder text'} label={'Label'} />
);
