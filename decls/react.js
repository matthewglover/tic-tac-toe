
declare type AppState = {
  board: Board,
  game: GameType
}

declare type MoveAction = {
  type: 'MOVE',
  position: number,
}

declare type GameType =
  null | 'HUMAN_HUMAN' | 'HUMAN_COMPUTER' | 'COMPUTER_HUMAN' | 'COMPUTER_COMPUTER'

declare type PlayerType =
  'HUMAN' | 'COMPUTER'

declare type GameStartAction = {
  type: 'SET_NEW_GAME',
  gameType: GameType
}

declare type SetBoardAction = {
  type: 'SET_BOARD',
  board: Board
}

declare type ResetAction = {
  type: 'RESET'
}

declare type InitAction = {
  type: '@@INIT'
}

declare type Action =
  MoveAction | GameStartAction | SetBoardAction | ResetAction | InitAction

declare type AppReducer = (state: AppState, action: Action) => AppState
