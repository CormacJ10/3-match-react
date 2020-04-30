import React from "react";
import oval from 'images/png/Oval.png';
import platyOval from 'images/png/platypus-oval-sm.png';
import shoe1 from 'images/png/Bitmap-sm.png';
import shoe2 from 'images/png/Bitmap-1-sm.png';
import shoe3 from 'images/png/Bitmap-2-sm.png';
import shoe4 from 'images/png/Bitmap-3-sm.png';
import shoe5 from 'images/png/Bitmap-4-sm.png';
import shoe6 from 'images/png/Bitmap-5-sm.png';

function formatScore(initScore, maxScore){
  return initScore + " of " + maxScore;
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random()*max)+min;
}

const shoeCountList={
  'shoe1':0,
  'shoe2':0,
  'shoe3':0,
  'shoe4':0,
  'shoe5':0,
  'shoe6':0,
}

const shoes={
  'shoe1':shoe1,
  'shoe2':shoe2,
  'shoe3':shoe3,
  'shoe4':shoe4,
  'shoe5':shoe5,
  'shoe6':shoe6,
}

function renderShoe(){

  const randCounter = getRandomInt(1, 6);

  if(shoeCountList['shoe'+randCounter] != 2){
    shoeCountList['shoe'+randCounter] += 1;
    return shoes['shoe'+randCounter];
  }
  else{
    for(var key in shoeCountList){
      if(shoeCountList[key] != 2){
        shoeCountList[key]++;
        // console.log(key);
        return shoes[key];
      }
    }
  }
}

const score = 0;

const PlatyIcon = <img className='' src={platyOval} />;

const Shoe = <img className='' src={renderShoe()} />;

const elementClicked = true;
function onElementClick(){
  return elementClicked;
}
 
// const GameHeader = () => {
//   return (
//     <div style={{ backgroundColor: '#FFF', color: 'black'}}>
//       <p className="h-100 w-100">{formatScore(score, 6)}</p>
//     </div>
//   );
// };

export {
  PlatyIcon,
  Shoe
}