import header from 'images/header.png';
import React from 'react';
import winScreen from "images/png/Congratulations-Page.png";
import platyBanner from "images/platy-logo.png";
// import {currScore, canScoreChange} from './platypus/game-body';

function checkScore(initScore2, maxScore2){
  if(initScore2 == maxScore2){
    return <img className="br4-ns br--top-ns w100" alt="" src={winScreen} />
  }
  else{
    return <h1 className="br4-ns br--top-ns w100 game-header" >{initScore2 + " of "+ maxScore2}</h1>
  }
}

const HeaderImage = ({
  entry,
  toggleEntry,
  mutationLoading,
  toggleMutationLoading,
}) => (
  <header>
    <img className="br4-ns br--top-ns w100" alt="" src={platyBanner} />
      {/* <div>
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
      </div> */}
  </header>
);

export default HeaderImage;
