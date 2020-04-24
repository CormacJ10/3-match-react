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

  return <App />;
};

export default Game;
