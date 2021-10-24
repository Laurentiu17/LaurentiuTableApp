import React from 'react';

import Toggle from '@components/Toggle';

export default {
  title: 'Toggle',
  component: Toggle,
};

export const toogleCustom = () => (
  <Toggle
    onColor="#86d3ff"
    onHandleColor="#2693e6"
    handleDiameter={30}
    uncheckedIcon={false}
    checkedIcon={false}
    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
    height={20}
    width={48}
  />
);

export const toggleDefault = () => (
  <Toggle
    checkedIcon={false}
    uncheckedIcon={false}
    onColor="#5DB082"
    offColor="#A8B2C7"
  />
);
