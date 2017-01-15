
declare type AppState = {
  board: Board,
}

declare type BoardAction = {
  type: 'MOVE',
  position: number,
}

declare type GameType =
  null | 'HUMAN_HUMAN' | 'HUMAN_COMPUTER' | 'COMPUTER_HUMAN' | 'COMPUTER_COMPUTER'

declare type GameStartAction = {
  type: 'SET_NEW_GAME',
  gameType: GameType,
}

declare type Action =
  BoardAction | GameStartAction | Object

declare type AppReducer = (state: AppState, action: Action) => AppState
