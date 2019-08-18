import React, { useEffect } from 'react';
import Emitter from './emitter';
import eventEmitter, { CONTENTS } from 'common/eventEmitter';

import './style.css';

const EventEmitter: React.FC = () => {
  useEffect(() => {
    eventEmitter.addListener(CONTENTS.EVENT_EMITTER_DEMO, addListener);
  }, []);

  useEffect(() => {
    eventEmitter.on(CONTENTS.EVENT_EMITTER_DEMO, (a, b) => {
      console.log('on', a, b);
    });
  }, []);

  useEffect(() => {
    eventEmitter.once(CONTENTS.EVENT_EMITTER_DEMO, (a, b) => {
      console.log('once', a, b);
    });
  }, []);

  function addListener(a: number, b: number): void {
    console.log('addListener', a, b)
  }

  function onRemove(): void {
    eventEmitter.removeListener(CONTENTS.EVENT_EMITTER_DEMO, addListener);
  }

  function addListenerSecond(second: string): void {
    console.log('second');
  }

  return (
    <div className="event-emitter">
      <Emitter />
      <button onClick={onRemove}>remove</button>
      <button onClick={() => { eventEmitter.addListener('second', addListenerSecond) }}>add second</button>
    </div>
  );
}

export default EventEmitter;