import React from "react";
import Unity, { UnityContent } from "react-unity-webgl";
 
 
const App = () => {
  return (
    <div className="br4 br--bottom flex flex-column h-100 w-100 page--card-loading">
      <HeaderImage />

      <CardWrapper>
        <Card.Body className="card-body--loading">
          <Spinner animation="border" />
        </Card.Body>
      </CardWrapper>
    </div>
  );
};

export default App;