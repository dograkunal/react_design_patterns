import React from 'react';
export default function Input(props) {
  const [value, setValue] = React.useState(' ');
  return (
    <>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder="Temperature in C"
      />
      {props.children(value)}
    </>
  );
}
