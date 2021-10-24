import React from 'react';

import TextAreaInput from '@components/TextAreaInput';

export default {
  title: 'Text Area',
  component: TextAreaInput,
};

export const textArea = () => (
  <TextAreaInput placeholder={'Placeholder text'} label={'Label'} />
);
