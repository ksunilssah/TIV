import React, { useState } from 'react';
import TimeRangePicker from '@wojtekmaj/react-timerange-picker';

const now = new Date();
const nextHour = new Date();
nextHour.setHours(nextHour.getHours() + 1);

const TimeRangeSelector = () => {
  const [value, onChange] = useState([now, nextHour]);

  return (
    <TimeRangePicker
      onChange={onChange}
      rangeDivider=".    to  ."
      disableClock
      value={value}
      locale="fa-IR"
    />
  );
};
export default TimeRangeSelector;
