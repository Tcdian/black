import produce from 'immer';

export interface BaseAction {
  type: string;
  payload?: any;
}

export interface State {
  display: number;
}

export const initialState: State = { display: 0 };

export function reducer<T extends State>(state: T, action: BaseAction): T {
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
