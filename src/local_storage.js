// @flow

type F<A, B> = (a: A) => B
type SavedState = Object;
type ErrorState = { error: Error }


// eslint-disable-next-line arrow-parens
export const tryCatch = <A, B>(fn: F<A, B>, errorFn: (a: any) => B, arg: A): B => {
  try {
    return fn(arg);
  } catch (error) {
    return errorFn(error);
  }
};

export const reportError = <E>(error: E): { error: E } => ({ error });


const dangerouslyLoadState = (): ?SavedState | ErrorState => {
  const serializedState = window.localStorage.getItem('state');

  return serializedState
    ? JSON.parse(serializedState)
    : undefined;
};


const dangerouslySaveState = (state: SavedState): void => {
  localStorage.setItem('state', JSON.stringify(state));
};


const dangerouslyClearState = (): void => {
  localStorage.removeItem('state');
};


export const loadState = (): ?SavedState | ErrorState =>
  tryCatch(dangerouslyLoadState, reportError, undefined);


export const saveState = (state: SavedState): ?ErrorState =>
  tryCatch(dangerouslySaveState, reportError, state);


export const clearState = (): ?ErrorState =>
  tryCatch(dangerouslyClearState, reportError, undefined);


export const isErrorState = (data: any): boolean =>
  !!(data && data.error);
