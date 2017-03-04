// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChooseGame from './choose_game';
import Board from './board';
import GameContainer from './game_container';
import GameOver from './game_over';


const App = (): React$Element<*> =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ChooseGame} />
      <Route path="/board" component={Board} />
      <Route path="/game" component={GameContainer} />
      <Route path="/game_over" component={GameOver} />
    </div>
  </BrowserRouter>;

export default App;
