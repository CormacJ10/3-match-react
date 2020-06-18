import header from 'images/header.png';
import React from 'react';
// import {currScore, canScoreChange} from './platypus/game-body';

function formatScore(initScore, maxScore){
  // console.log(currScore);
  return initScore + " of " + maxScore;
}

// const HeaderImage = () => (
//   <header className="">
//     <img className="br4-ns br--top-ns w100" alt="" src={header} />
//   </header>
// );

const HeaderImage = ({
  entry,
  toggleEntry,
  mutationLoading,
  toggleMutationLoading,
}) => (
  <header>
    {/* <img className="br4-ns br--top-ns w100" alt="" src={header} /> */}
    <div className="game-header">
      <h2>Test Controls</h2>
      <div>
        <h3>
          Entry: {`${entry}`}{' '}
          <span>
            <button className="btn btn-primary" onClick={toggleEntry}>
              Toggle
            </button>
          </span>
        </h3>
      </div>

      <div>
        <h3>
          Submitting: {`${mutationLoading}`}{' '}
          <span>
            <button className="btn btn-primary" onClick={toggleMutationLoading}>
              Toggle
            </button>
          </span>
        </h3>
      </div>
    </div>
  </header>
);

export default HeaderImage;
