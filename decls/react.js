
declare type AppState = {
  board: Board,
  game: GameType
}

declare type MoveAction = {
  type: 'MOVE',
  position: number,
}

declare type GameType =
  'HUMAN_HUMAN' | 'HUMAN_COMPUTER' | 'COMPUTER_HUMAN' | 'COMPUTER_COMPUTER'

declare type PlayerType =
  'HUMAN' | 'COMPUTER'

declare type SetNewGameAction = {
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

declare type SetGameCompletedAction = {
  type: 'SET_GAME_COMPLETED',
  completed: boolean
}

declare type Action =
  MoveAction | SetNewGameAction | SetBoardAction | ResetAction | InitAction | SetGameCompletedAction

declare type AppReducer = (state: AppState, action: Action) => AppState
