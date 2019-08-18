import React, { createContext, useReducer } from 'react';
import { State, BaseAction, reducer, initialState } from './reducer';


export interface StateManagementContextProps {
  state: State,
  dispatch: React.Dispatch<BaseAction>
}

export const StateManagementContext = createContext<StateManagementContextProps>({} as StateManagementContextProps);

const StateManagementProvider: React.FC = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <StateManagementContext.Provider value={{ state, dispatch }}>
      {
        children
      }
    </StateManagementContext.Provider>
  );
}

export default StateManagementProvider;