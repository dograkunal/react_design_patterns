import React, { useState } from 'react';
import Input from './Input';

export default function RenderProps() {
  return (
    <div>
      <h2>Temperature Converter</h2>
      <Input>
        {(value) => (
          <>
            <Kelvin value={value} />
            <Fahrenheit value={value} />
          </>
        )}
      </Input>
    </div>
  );
}

function Kelvin({ value = 0 }) {
  return <div>{value + 273.15}K</div>;
}

function Fahrenheit({ value = 0 }) {
  return <div>{(value * 9) / 5 + 32}F</div>;
}
