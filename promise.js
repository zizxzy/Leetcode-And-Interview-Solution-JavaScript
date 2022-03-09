class MyPromise {
  constructor(executor) {
    this.state = 'pending';
    this.value = undefined;
    this.reason = undefined;
    const resolve = (value) => {
      if (this.state === 'pending') {
        this.value = value;
        this.state = 'fulfilled';
      }
    };

    const reject = (reason) => {
      if (this.state === 'pending') {
        this.reason = reason;
        this.state = 'rejected';
      }
    };
    try {
      executor(resolve, reject);
    } catch (err) {
      reject(err);
    }

  }

  then(onFulfilled, onRejected) {
    if (this.state === 'fulfilled') {
      onFulfilled(this.value);
    }
    if (this.state === 'rejected') {
      onRejected(this.value);
    }
  }
}

// 测试
var p = new MyPromise(function (resolve, reject) { resolve(1) });
p.then(function (x) { console.log(x); });