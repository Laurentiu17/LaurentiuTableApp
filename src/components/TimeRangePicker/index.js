import React, { useState } from 'react';
import ReactTimeRangePicker from '@wojtekmaj/react-timerange-picker';

function TimeRangePicker() {
  const [val, setTime] = useState(['10:00', '11:00']);
  return <ReactTimeRangePicker onChange={e => setTime(e)} value={val} />;
}

export default TimeRangePicker;
