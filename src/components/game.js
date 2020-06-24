import React from 'react';
import GameBody from './platypus/game-body';
import platyLogo from 'images/platypus-logo.png';
import platyOval from 'images/platypus-oval.png';

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
    return (
    // <div className="grid-container">
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    //   <div>
    //     <img src={platyLogo} />
    //   </div>
    // </div>
    <GameBody />
    );
  };

export default Game;
