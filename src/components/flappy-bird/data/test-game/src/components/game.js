import React from 'react';

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

  return <canvas style={{ backgroundColor: 'blue' }} />;
};

export default Game;
