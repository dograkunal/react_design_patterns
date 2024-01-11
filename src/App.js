import React from 'react';
import './style.css';
import CompoundPattern from './CompoundPattern';
import HooksPattern from './HooksPattern';
import RenderPropsPattern from './RenderPropsPattern';

export default function App() {
  return (
    <div>
      <h3>React Patterns!</h3>
      {/* <CompoundPattern /> */}
      {/* <HooksPattern /> */}
      <RenderPropsPattern />
    </div>
  );
}
