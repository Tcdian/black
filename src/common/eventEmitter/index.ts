import * as CONTENTS from './contents';

interface Func {
  (...args: any[]): any;
};

const events: Map<string, Func[]> = new Map();
const onceEvents: Set<Func> = new Set();

function on(this: any, event: string, listener: Func): void {
  addListener.call(this, event, listener);
}

function once(this: any, event: string, listener: Func): void {
  onceEvents.add(listener);
  addListener.call(this, event, listener);
}

function emit(this: any, event: string, ...args: any[]): boolean {
  const listeners = events.get(event);

  if (Array.isArray(listeners) && listeners.length !== 0) {
    listeners.forEach((listener) => {
      listener.call(this, ...args);
      if (onceEvents.has(listener)) {
        removeListener(event, listener);
        onceEvents.delete(listener);
      }
    });
    return true;
  }
  return false;
}

function addListener(event: string, listener: Func): void {
  if (events.has(event)) {
    events.set(event, [...events.get(event) as Func[], listener]);
  } else {
    events.set(event, [listener]);
  }
}

function removeListener(event: string, listener: Func): void {
  if (events.has(event)) {
    events.set(event, (events.get(event) as Func[]).filter((func) => func !== listener));
  }
}

function removeAllListeners(event?: string): void {
  if (event === void 0) {
    events.clear();
    return;
  }
  events.delete(event);
}

export { CONTENTS };

export default {
  on,
  once,
  emit,
  addListener,
  removeListener,
  removeAllListeners,
}
