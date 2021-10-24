import React from 'react';

import SimpleDropdown from '@components/SimpleDropdown';

export default {
  title: 'Simple Dropdown',
  component: SimpleDropdown,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const simpleDropdown = () => (
  <SimpleDropdown
    placeholder={'Placeholder text'}
    label={'Label'}
    options={options}
    isDisabled={false}
  />
);
