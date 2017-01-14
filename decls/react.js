declare type SquareProps = {
  position: number,
  clickHandler?: Function,
}

declare type AppState = {
  board: Board,
}

declare type BoardAction = {
  type: string,
  boardPosition: string,
}

declare type Action = BoardAction

declare type AppReducer = (state: AppState, action: Action) => AppState
