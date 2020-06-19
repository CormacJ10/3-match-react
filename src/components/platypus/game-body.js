import React from "react";
import winScreen from "images/png/Congratulations-Page.png";
import platyOval from 'images/png/platypus-oval.png';
import shoe1 from 'images/png/Bitmap.png';
import shoe2 from 'images/png/Bitmap-1.png';
import shoe3 from 'images/png/Bitmap-2.png';
import shoe4 from 'images/png/Bitmap-3.png';
import shoe5 from 'images/png/Bitmap-4.png';
import shoe6 from 'images/png/Bitmap-5.png';

function checkScore(initScore2, maxScore2){
  if(initScore2 == maxScore2){
    return <img className="br4-ns br--top-ns w100" alt="" src={winScreen} />
  }
  else{
    return <p className="br3 w100 game-header" >{initScore2 + " of "+ maxScore2}</p>
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
    return ['shoe'+randCounter, shoes['shoe'+randCounter]];
  }

  else{

    for(var key in shoeCountList){
      if(shoeCountList[key] != 2){
        shoeCountList[key]++;
        return ['shoe'+key, shoes[key]];
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
let shoeCheckList = {};
let shoeCheckedList = [];

function checkIfSameShoe2(isClicked2, shoeObj2, shoeName2){
  if(isClicked2){
    let shoeCount2 = Object.keys(shoeCheckList).length;

    if(!shoeCheckedList.includes(shoeObj2)){
      shoeCheckList[shoeName2] = shoeObj2;
      if(shoeCount2 == 2){
        var firstKey = Object.keys(shoeCheckList)[0];
        var secondKey = Object.keys(shoeCheckList)[1];
        if(shoeCheckList[firstKey] == shoeCheckList[secondKey]){
          if(!shoeCheckedList.includes(shoeCheckList[firstKey])){
            shoeCheckedList.push(shoeCheckList[firstKey]);
            score += 1;
          }
        }
        shoeCheckList={};
      }
    }

    return <img className={shoeName2} src={shoeObj2} />
  }
  else{
    return <img className='' src={platyOval} />;
  }
}
 
const GameBody = ({
  entered,
  entryValue,
  submit,
  submitting,
  submitError,
  wrapperElement,
}) => {
  const [clicked1, setClick1] = React.useState(false);
  const onClick1 = event => {
    !clicked1 ? setClick1(true) : setClick1(false);
  };
  const [clicked2, setClick2] = React.useState(false);
  const onClick2 = event => {
    !clicked2 ? setClick2(true) : setClick2(false);
  };
  const [clicked3, setClick3] = React.useState(false);
  const onClick3 = event => {
    !clicked3 ? setClick3(true) : setClick3(false);
  };
  const [clicked4, setClick4] = React.useState(false);
  const onClick4 = event => {
    !clicked4 ? setClick4(true) : setClick4(false);
  };
  const [clicked5, setClick5] = React.useState(false);
  const onClick5 = event => {
    !clicked5 ? setClick5(true) : setClick5(false);
  };
  const [clicked6, setClick6] = React.useState(false);
  const onClick6 = event => {
    !clicked6 ? setClick6(true) : setClick6(false);
  };
  const [clicked7, setClick7] = React.useState(false);
  const onClick7 = event => {
    !clicked7 ? setClick7(true) : setClick7(false);
  };
  const [clicked8, setClick8] = React.useState(false);
  const onClick8 = event => {
    !clicked8 ? setClick8(true) : setClick8(false);
  };
  const [clicked9, setClick9] = React.useState(false);
  const onClick9 = event => {
    !clicked9 ? setClick9(true) : setClick9(false);
  };
  const [clicked10, setClick10] = React.useState(false);
  const onClick10 = event => {
    !clicked10 ? setClick10(true) : setClick10(false);
  };
  const [clicked11, setClick11] = React.useState(false);
  const onClick11 = event => {
    !clicked11 ? setClick11(true) : setClick11(false);
  };
  const [clicked12, setClick12] = React.useState(false);
  const onClick12 = event => {
    !clicked12 ? setClick12(true) : setClick12(false);
  };


  return (
    <>
    {checkScore(0, 6)}
    <div className="grid-container">
      <div onClick={onClick1}>
        {checkIfSameShoe2(clicked1, renderedShoe1[1], 'shoe-1')}
      </div>
      <div onClick={onClick2}>
        {checkIfSameShoe2(clicked2, renderedShoe2[1], 'shoe-2')}
      </div>
      <div onClick={onClick3}>
        {checkIfSameShoe2(clicked3, renderedShoe3[1], 'shoe-3')}
      </div>
      <div onClick={onClick4}>
        {checkIfSameShoe2(clicked4, renderedShoe4[1], 'shoe-4')}
      </div>
      <div onClick={onClick5}>
        {checkIfSameShoe2(clicked5, renderedShoe5[1], 'shoe-5')}
      </div>
      <div onClick={onClick6}>
        {checkIfSameShoe2(clicked6, renderedShoe6[1], 'shoe-6')}
      </div>
      <div onClick={onClick7}>
        {checkIfSameShoe2(clicked7, renderedShoe7[1], 'shoe-7')}
      </div>
      <div onClick={onClick8}>
        {checkIfSameShoe2(clicked8, renderedShoe8[1], 'shoe-8')}
      </div>
      <div onClick={onClick9}>
        {checkIfSameShoe2(clicked9, renderedShoe9[1], 'shoe-9')}
      </div>
      <div onClick={onClick10}>
        {checkIfSameShoe2(clicked10, renderedShoe10[1], 'shoe-10')}
      </div>
      <div onClick={onClick11}>
        {checkIfSameShoe2(clicked11, renderedShoe11[1], 'shoe-11')}
      </div>
      <div onClick={onClick12}>
        {checkIfSameShoe2(clicked12, renderedShoe12[1], 'shoe-12')}
      </div>
    </div>
    </>
  );
};

export default GameBody;