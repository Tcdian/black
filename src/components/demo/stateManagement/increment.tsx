import React, { useContext } from 'react';
import { StateManagementContext } from './stateManagementProvider';

import './style.css';

const Increment: React.FC = () => {
  const { dispatch } = useContext(StateManagementContext);

  function onIncrement(): void {
    dispatch({ type: 'increment' });
  }

  return (
    <div className="state-management__increment">
      <button onClick={onIncrement}>increment</button>
    </div>
  );
}

export default Increment;