import React, { useState } from 'react';
import MultiRangeSlider from 'multi-range-slider-react';
const RangeSlider = () => {
  const [minValue, set_minValue] = useState(10);
  const [maxValue, set_maxValue] = useState(30);
  const handleInput = (e) => {
    set_minValue(e.minValue);
    set_maxValue(e.maxValue);
  };

  return (
    <div className="App">
      <MultiRangeSlider
        min={10}
        max={100}
        step={15}
        ruler={true}
        label={true}
        preventWheel={false}
        minValue={minValue}
        maxValue={maxValue}
        onInput={(e) => {
          handleInput(e);
        }}
      />
    </div>
  );
};

export default RangeSlider;
