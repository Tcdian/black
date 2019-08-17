import React, { useContext } from 'react';
import { StateManagementContext } from './stateManagementProvider';

import './style.css';

const Display: React.FC = () => {
  const { state } = useContext(StateManagementContext);

  return (
    <div className="state-management__display">
      {
        state.display
      }
    </div>
  );
}

export default Display;