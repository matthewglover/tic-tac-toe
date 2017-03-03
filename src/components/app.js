// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChooseGame from './choose_game';
import Board from './board';
import Game from './game';
import GameOver from './game_over';


const App = (): React$Element<*> =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ChooseGame} />
      <Route path="/board" component={Board} />
      <Route path="/game" component={Game} />
      <Route path="/game_over" component={GameOver} />
    </div>
  </BrowserRouter>;

export default App;
