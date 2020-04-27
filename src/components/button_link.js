import React from 'react';

import { Button } from 'react-bootstrap';

const ButtonLink = ({ href, transition, ...props }) => {
  // return href ? (
  //   <Button
  //     onClick={() => {
  //       console.log('clicked');
  //     }}
  //     {...props}
  //   />
  // ) : (
  //   <Button {...props} />
  // );

  return (
  <div className="whitebox">
    <p style={{marginBottom: '0', padding: '5px', fontStyle: 'bold', fontSize: '25px'}}>Tap Circles to Match Patterns</p>
  </div>
  );
};

export default ButtonLink;
