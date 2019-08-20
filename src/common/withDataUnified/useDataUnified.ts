import React, { useReducer } from 'react';
import { initialState, reducer } from 'components/demo/stateManagement/reducer';

export interface BaseAction {
  type: string;
  payload?: any;
};

export interface Reducer<T> {
  <U extends T>(state: U, action: BaseAction): U;
}

export interface UseDataUnified {
  <T extends Object>(initialState: T, reducer: Reducer<T>): T & React.Dispatch<BaseAction>;
};

const useDataUnified: UseDataUnified = (initialState, reducer) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return { state, dispatch };
}