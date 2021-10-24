import React from 'react';

import TextInput from '@components/TextInput';

export default {
  title: 'Text Input',
  component: TextInput,
};

export const textInput = () => (
  <TextInput placeholder={'Placeholder text'} label={'Label'} />
);
