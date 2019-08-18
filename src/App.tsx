import React from 'react';
import StateManagement from 'components/demo/stateManagement';
import EventEmitter from 'components/demo/eventEmitter';

import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <StateManagement />
      <EventEmitter />
    </div>
  );
}

export default App;
