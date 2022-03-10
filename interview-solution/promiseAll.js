const promiseAll = (promises) => {
  const newPromise = new Promise(function (resolve, reject) {
    if (!Array.isArray(promises)) reject(new Error('promises is not array'));

    const promiseLength = promises.length;
    let promiseResolveCount = 0;
    let promiseResolveResult = [];
    for (let promise in promises) {
      Promise.resolve(promise).then(value => {
        promiseResolveResult.push(value);
        promiseResolveCount++;
        if (promiseResolveCount === promiseLength) resolve(promiseResolveResult);
      }, error => {
        reject(error);
      })
    }
  });
  return newPromise;
}

// test
let p1 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(1)
  }, 1000)
})
let p2 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(2)
  }, 2000)
})
let p3 = new Promise(function (resolve, reject) {
  setTimeout(function () {
    resolve(3)
  }, 3000)
})
promiseAll([p3, p1, p2]).then(res => {
  console.log(res) // [3, 1, 2]
})