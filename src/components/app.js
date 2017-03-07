// @flow
import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import ChooseGameContainer from './choose_game_container';
import Board from './board';
import GameContainer from './game_container';
import GameOverContainer from './game_over_container';


const App = (): React$Element<*> =>
  <BrowserRouter>
    <div>
      <Route exact path="/" component={ChooseGameContainer} />
      <Route path="/board" component={Board} />
      <Route path="/game" component={GameContainer} />
      <Route path="/game_over" component={GameOverContainer} />
    </div>
  </BrowserRouter>;

export default App;
