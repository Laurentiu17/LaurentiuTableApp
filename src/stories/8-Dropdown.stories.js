import React from 'react';

import Dropdown from '@components/Dropdown';

export default {
  title: 'Dropdown',
  component: Dropdown,
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const dropdown = () => (
  <Dropdown
    placeholder={'Placeholder text'}
    label={'Label'}
    options={options}
    isDisabled={false}
    isLoading={false}
    isClearable={false}
    isRtl={false}
    isSearchable={true}
    isMulti={false}
  />
);
