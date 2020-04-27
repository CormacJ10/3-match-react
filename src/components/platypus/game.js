import React from "react";
// import Unity, { UnityContent } from "react-unity-webgl";
import GameHeader from './game-header';
import GameBody from './game-body';
import GameFooter from './game-footer';

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}

const score = 0;
// const images = importAllImages(require.context('./images/png', false, '/\.png/'));
 
const App = () => {
  return (
      <GameBody>

      </GameBody>
  );
};

export default App;