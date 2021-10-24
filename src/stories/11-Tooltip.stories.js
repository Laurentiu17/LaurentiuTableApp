import React from 'react';

import Tooltip from '@components/Tooltip';

export default {
  title: 'Tooltip',
  component: Tooltip,
};

export const tooltip = () => (
  <Tooltip
    targetElement="◕‿‿◕"
    tooltipMessage="this is an awesome tooltip message"
    place="bottom"
  />
);
