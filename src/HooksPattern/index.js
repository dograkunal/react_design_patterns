import React, { useState, useEffect } from 'react';
import useWindowWidth from './useWindowWidth';
import useKeyPress from './useKeyPress';

export default function HooksPattern() {
  const [input, setInput] = useState('');
  const WindowWidth = useWindowWidth();
  const pressQ = useKeyPress('q');

  React.useEffect(() => {
    console.log(`The user pressed Q!`);
  }, [pressQ]);

  return (
    <div>
      <p>Hooks Patterns!</p>
      <input onChange={(e) => setInput(e.target.value)} value={input} />
      <div>Width: {WindowWidth}</div>
    </div>
  );
}
