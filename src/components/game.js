import React from 'react';
import App from './platypus/game';

const Game = ({
  entered,
  entryValue,
  submit,
  submitting,
  submitError,
  wrapperElement,
}) => {
  console.log(
    'Game props',
    entered,
    entryValue,
    submit,
    submitting,
    submitError,
    wrapperElement
  );

  return <canvas style={{ backgroundColor: '#77CBAF' }}>
      <App />
  </canvas>;
};

export default Game;
