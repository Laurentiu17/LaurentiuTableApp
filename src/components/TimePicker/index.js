import React, { useState } from 'react';
import ReactTimePicker from 'react-time-picker';

function TimePicker() {
  const [val, setTime] = useState('10:00');
  return <ReactTimePicker onChange={e => setTime(e)} value={val} />;
}

export default TimePicker;
