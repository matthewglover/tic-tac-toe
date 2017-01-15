// @flow
import React from 'react';
import { BrowserRouter, Match } from 'react-router';
import ChooseGame from './choose_game';
import Board from './board';
import Game from './game';


const App = (): React$Element<*> =>
  <BrowserRouter>
    <div>
      <Match exactly pattern="/" component={ChooseGame} />
      <Match pattern="/board" component={Board} />
      <Match pattern="/game" component={Game} />
    </div>
  </BrowserRouter>;

export default App;
