import produce from 'immer';

export interface IBaseAction {
  type: string;
  payload?: any;
}

export interface IState {
  display: number;
}

export const initialState: IState = { display: 0 };

export function reducer<T extends IState>(state: T, action: IBaseAction): T {
  switch (action.type) {
    case 'increment':
      return produce(state, (draft) => {
        draft.display += 1;
      });
    case 'decrement':
      return produce(state, (draft) => {
        draft.display -= 1;
      });
    default:
      return state;
  }
}
