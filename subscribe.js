class EventEmitter {
  constructor() {
    this.event = {};
  }

  on(eventName, callbackFunc) {
    const callback = this.event[eventName] || [];
    if (Array.isArray(callback)) {
      callback.push(callbackFunc);
      this.event[eventName] = callback;
    }
    return this.event;
  }

  off(eventName, callback) {
    if (this.event[eventName]) {
      const newEventCallback = this.event[eventName].filter(c => c !== callback);
      this.event[eventName] = newEventCallback;
    }
    return this.event;
  }

  emit(eventName, data) {
    if (this.event[eventName]) {
      this.event[eventName].forEach(callback => {
        callback && callback(data);
      });
    }
    return this.event;
  }
}

const eventEmitter = new EventEmitter();
const clickFunc = function () {
  console.log('click 1');
}
eventEmitter.on('click', clickFunc)
eventEmitter.on('click', () => {
  console.log('click 2')
})
eventEmitter.emit('click')
eventEmitter.off('click', clickFunc);
eventEmitter.emit('click')
