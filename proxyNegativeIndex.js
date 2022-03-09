const negativeIndex = arr => {
  return new Proxy(arr, {
    get: (target, proKey) => {
      let index = Number(proKey);
      let length = target.length;
      while (index < 0) {
        index += length;
      }
      return target[index];
    }
  })
}

console.log(negativeIndex([1, 2, 3, 4, 5, 6, 7])[-1]);
console.log(negativeIndex([1, 2, 3, 4, 5, 6, 7])[-20]);