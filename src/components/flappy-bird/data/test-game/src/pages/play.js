import React, { lazy } from 'react';
import { Interface } from 'components/interactive_quiz';
import { Wrapper, Navigation } from 'components/play';

const Game = lazy(() => import('components/game'));

const Play = () => (
  <Wrapper navigation={Navigation}>
    <Interface component={Game} />
  </Wrapper>
);

export default Play;
