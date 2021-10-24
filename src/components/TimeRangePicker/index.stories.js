import React from 'react';
import { storiesOf } from '@storybook/react';

import TimeRangePicker from './index.js';

storiesOf('Time range picker', module).add('default', () => (
  <TimeRangePicker />
));
