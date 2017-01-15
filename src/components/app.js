// @flow
import React from 'react';
// import { Overlay } from 'rebass';
import Board from './board';


const App = (): React$Element<*> =>
  <div>
    <Board />
    {/* {true
      ? <Overlay open box>hello</Overlay>
      : null} */}
  </div>;

export default App;
