import React, { useContext } from 'react';
import { StateManagementContext } from './stateManagementProvider';

import './style.css';

const Decrement: React.FC = () => {
  const { dispatch } = useContext(StateManagementContext);

  function onDecrement(): void {
    dispatch({ type: 'decrement' });
  }

  return (
    <div className="state-management__decrement">
      <button onClick={onDecrement}>decrement</button>
    </div>
  );
}

export default Decrement;