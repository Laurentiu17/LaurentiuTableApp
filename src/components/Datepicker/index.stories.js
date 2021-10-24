import React from 'react';
import { storiesOf } from '@storybook/react';

import DatePicker from './index.js';
import FullDatePicker from './FullDatePicker';

storiesOf('DatePicker', module)
  .add(
    'FullDatePicker default',
    () => <FullDatePicker handleDateChange={value => {}} />,
    {
      info: 'ceva',
    }
  )
  .add('FullDatePicker without navigation', () => (
    <DatePicker.FullDatePicker
      handleDateChange={value => {}}
      showNavigation={false}
    />
  ))
  .add('FullDatePicker select Range', () => (
    <DatePicker.FullDatePicker
      handleDateChange={value => {}}
      selectRange={true}
    />
  ))
  .add('MonthDatePicker month format long', () => (
    <DatePicker.MonthDatePicker
      handleDateChange={value => {}}
      locale={'en-us'}
      monthFormat={'long'}
    />
  ))
  .add('MonthDatePicker month format short', () => (
    <DatePicker.MonthDatePicker
      handleDateChange={value => {}}
      locale={'en-us'}
      monthFormat={'short'}
    />
  ));
