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

function renderTableCell(col){
  let tableCell = [];

  for(let currCell =0; currCell < col; currCell++){
    // tableCell['curr_cell'+currCell]= <td className='padding-content'><img src={platyOval} /></td>;
    tableCell.push(<td className='padding-content'><img src={platyOval} /></td>);
    // col++;
  }
  
  // return <td><img src={platyOval} /></td>;
  return tableCell;
}

function renderTable(column, row){
    // let currNumRow=0;
    // let currNumColumn=0;
    let elementArray=[];

    for(let currNumRow =0; currNumRow < row; currNumRow++){
      // elementArray['curr_row'+currNumRow]= <tr>{renderTableCell(column)}</tr>;
      elementArray.push(<tr>{renderTableCell(column)}</tr>);
      // currNumRow++;
    }
    return elementArray;
}

const score = 0;
 
const GameBody = () => {
  return (
    <div style={{ backgroundColor: 'white', padding: '20px'}}>
        {/* <div style={{marginBottom: '12px', display: 'flex', color: 'white', justifyContent:'center', alignItems:'center', borderRadius: '10px' }}>
          <h1 className="" style={{backgroundColor: '#77CBAF', width: '80%', borderRadius: '7px'}}>{formatScore(score, 6)}</h1>
        </div> */}
        <table style={{display: 'flex', color: 'white', justifyContent:'center', alignItems:'center'}}>
            <tbody>
              {renderTable(3, 4)}
            </tbody>
        </table>
        <div style={{marginTop: '12px', display: 'flex', color: 'black', justifyContent:'center', alignItems:'center' }}>
          <div className="" style={{ backgroundColor: 'white', width: '80%', border: 'solid black 1px', borderRadius: '7px'}}>
            <p style={{marginBottom: '0', padding: '5px', fontStyle: 'bold', fontSize: '25px'}}>Tap Circles to Match Patterns</p>
          </div>
        </div>
    </div>
  );
};

export default GameBody;