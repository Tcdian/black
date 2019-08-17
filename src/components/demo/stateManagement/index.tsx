import React from 'react';
import StateManagementProvider from './stateManagementProvider';
import Display from './display';
import Increment from './increment';
import Decrement from './decrement';

import './style.css';

const StateManagement: React.FC = () => {

  return (
    <div className="state-management">
      <StateManagementProvider>
        <Increment />
        <Display />
        <Decrement />
      </StateManagementProvider>
    </div>
  );
}

export default StateManagement;