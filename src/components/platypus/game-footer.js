import React from "react";
// import Unity, { UnityContent } from "react-unity-webgl";

function importAllImages(r) {
  let images = {};
  r.keys().map((item, index) => { images[item.replace('./', '')] = r(item); });
  return images;
}



const images = importAllImages(require.context('./images/png', false, '/\.png/'));
 
const GameFooter = () => {
  return (
    <div class="game-footer">
        <img src={images['Tap Circles to Match.png']} />
    </div>
  );
};

export default GameFooter;