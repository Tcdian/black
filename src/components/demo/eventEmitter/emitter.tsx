import React from 'react';
import eventEmitter, { CONTENTS } from 'common/eventEmitter';

import './style.css';

const StateManagement: React.FC = () => {

  function onEmit(): void {
    const emitStatus = eventEmitter.emit(CONTENTS.EVENT_EMITTER_DEMO, 1, 2);
    console.log(emitStatus);
  }

  function onRemoveAll(): void {
    eventEmitter.removeAllListeners();
  }

  return (
    <div className="event-emitter__emitter">
      <button onClick={onEmit}>emitter</button>
      <button onClick={onRemoveAll}>remove all</button>
      <button onClick={() => { eventEmitter.emit('second') }}>emit second</button>
    </div>
  );
}

export default StateManagement;