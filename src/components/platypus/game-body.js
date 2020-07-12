import React from "react";
import winScreen from "images/Congratulations-Page.png";
import platyOval from 'images/platypus-oval-md.png';
import shoe1 from 'images/Bitmap-md.png';
import shoe2 from 'images/Bitmap-1-md.png';
import shoe3 from 'images/Bitmap-2-md.png';
import shoe4 from 'images/Bitmap-3-md.png';
import shoe5 from 'images/Bitmap-4-md.png';
import shoe6 from 'images/Bitmap-5-md.png';

// function displayScore(initScore, maxScore){
//   return <p className="br3 w100 game-header" >{initScore + " of "+ maxScore}</p>
// }

function displayScore(initScore, maxScore, isMatched){
  if(!isMatched){
    return <p className="br3 w100 game-header" >{initScore + " of "+ maxScore}</p>;
  }
  if(isMatched){
    
    setTimeout(function() {
        // Whatever you want to do after the wait
        isMatch = false;
    }, 500);

    return <p className="br3 w100 game-header" >{"Match!"}</p>;
  }
}

function checkScore(initScore2, maxScore2){
  if(initScore2 == maxScore2){
    return <img className="br3 w100 win-screen" alt="" src={winScreen} />
  }
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
        return shoes[key];
      }
    }

  }
}

// Initialize Shoes...
const renderedShoe1=renderShoe();
const renderedShoe2=renderShoe();
const renderedShoe3=renderShoe();
const renderedShoe4=renderShoe();
const renderedShoe5=renderShoe();
const renderedShoe6=renderShoe();
const renderedShoe7=renderShoe();
const renderedShoe8=renderShoe();
const renderedShoe9=renderShoe();
const renderedShoe10=renderShoe();
const renderedShoe11=renderShoe();
const renderedShoe12=renderShoe();

var score = 0;
var isMatch = false;
let shoeCheckList = {};
let shoeCheckedList = [];

function checkIfSameShoe2(isClicked2, shoeObj2, shoeName2){
  if(isClicked2){
    let shoeCount2 = Object.keys(shoeCheckList).length;

    // console.log(!shoeCheckedList.includes(shoeObj2));

    if(!shoeCheckedList.includes(shoeObj2)){
      shoeCheckList[shoeName2] = shoeObj2;
      if(shoeCount2 == 2){
        var firstKey = Object.keys(shoeCheckList)[0];
        var secondKey = Object.keys(shoeCheckList)[1];
        console.log(firstKey);
        console.log(secondKey);
        if(shoeCheckList[firstKey] == shoeCheckList[secondKey]){
          if(!shoeCheckedList.includes(shoeCheckList[firstKey])){
            shoeCheckedList.push(shoeCheckList[firstKey]);
            score += 1;
            isMatch = true;
          }
        }
        shoeCheckList={};
      }
    }

    return <img className={shoeName2} src={shoeObj2} />;
  }
  else{
    return <img className='platy-oval' src={platyOval} />;
  }
}
 
const GameBody = () => {
  const [clicked1, setClick1] = React.useState(false);
  const onClick1 = () => {
    !clicked1 ? setClick1(true) : setClick1(false);
  };
  const [clicked2, setClick2] = React.useState(false);
  const onClick2 = () => {
    !clicked2 ? setClick2(true) : setClick2(false);
  };
  const [clicked3, setClick3] = React.useState(false);
  const onClick3 = () => {
    !clicked3 ? setClick3(true) : setClick3(false);
  };
  const [clicked4, setClick4] = React.useState(false);
  const onClick4 = () => {
    !clicked4 ? setClick4(true) : setClick4(false);
  };
  const [clicked5, setClick5] = React.useState(false);
  const onClick5 = () => {
    !clicked5 ? setClick5(true) : setClick5(false);
  };
  const [clicked6, setClick6] = React.useState(false);
  const onClick6 = () => {
    !clicked6 ? setClick6(true) : setClick6(false);
  };
  const [clicked7, setClick7] = React.useState(false);
  const onClick7 = () => {
    !clicked7 ? setClick7(true) : setClick7(false);
  };
  const [clicked8, setClick8] = React.useState(false);
  const onClick8 = () => {
    !clicked8 ? setClick8(true) : setClick8(false);
  };
  const [clicked9, setClick9] = React.useState(false);
  const onClick9 = () => {
    !clicked9 ? setClick9(true) : setClick9(false);
  };
  const [clicked10, setClick10] = React.useState(false);
  const onClick10 = () => {
    !clicked10 ? setClick10(true) : setClick10(false);
  };
  const [clicked11, setClick11] = React.useState(false);
  const onClick11 = () => {
    !clicked11 ? setClick11(true) : setClick11(false);
  };
  const [clicked12, setClick12] = React.useState(false);
  const onClick12 = () => {
    !clicked12 ? setClick12(true) : setClick12(false);
  };


  return (
    <>
    <div className="pt2 pb2 pl2 pr2 game-header-container">
      {checkScore(score, 6)}
      {displayScore(score, 6, isMatch)}
    </div>
        <div className="pt2 pb2 pl3 pr3 grid-container">
            <div data-column-id="1" onClick={onClick1}>
              {checkIfSameShoe2(clicked1, renderedShoe1, 'shoe-1')}
            </div>
            <div data-column-id="2" onClick={onClick2}>
              {checkIfSameShoe2(clicked2, renderedShoe2, 'shoe-2')}
            </div>
            <div data-column-id="3" onClick={onClick3}>
              {checkIfSameShoe2(clicked3, renderedShoe3, 'shoe-3')}
            </div>
            <div data-column-id="1" onClick={onClick4}>
              {checkIfSameShoe2(clicked4, renderedShoe4, 'shoe-4')}
            </div>
            <div data-column-id="2" onClick={onClick5}>
              {checkIfSameShoe2(clicked5, renderedShoe5, 'shoe-5')}
            </div>
            <div data-column-id="3" onClick={onClick6}>
              {checkIfSameShoe2(clicked6, renderedShoe6, 'shoe-6')}
            </div>
            <div data-column-id="1" onClick={onClick7}>
              {checkIfSameShoe2(clicked7, renderedShoe7, 'shoe-7')}
            </div>
            <div data-column-id="2" onClick={onClick8}>
              {checkIfSameShoe2(clicked8, renderedShoe8, 'shoe-8')}
            </div>
            <div data-column-id="3" onClick={onClick9}>
              {checkIfSameShoe2(clicked9, renderedShoe9, 'shoe-9')}
            </div>
            <div data-column-id="1" onClick={onClick10}>
              {checkIfSameShoe2(clicked10, renderedShoe10, 'shoe-10')}
            </div>
            <div data-column-id="2" onClick={onClick11}>
              {checkIfSameShoe2(clicked11, renderedShoe11, 'shoe-11')}
            </div>
            <div data-column-id="3" onClick={onClick12}>
              {checkIfSameShoe2(clicked12, renderedShoe12, 'shoe-12')}
            </div>
        </div>
        
        <div className="pt2 pb3 pl2 pr2 game-footer-container">
          <p className="br3 pt2 pb2 w100 game-footer">Tap Circles to Match Patterns</p>
        </div>
    </>
  );
};

export default GameBody;