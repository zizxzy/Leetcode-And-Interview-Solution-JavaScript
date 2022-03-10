Array.prototype.myFlat1 = function () {
  return this.reduce((acc, cur) => {
    return acc.concat(cur);
  }, []);
};

const arr = [1, 2, [3, 4]];
console.log(arr.myFlat1());

Array.prototype.myFlat2 = function (depth = 1) {
  const arr = this.slice();
  return depth > 0 ? arr.reduce((acc, cur) => {
    return acc.concat(Array.isArray(cur) ? cur.myFlat2(depth - 1) : cur);
  }, []) : arr.slice();
};
const arr1 = [1, 2, [[3], 4]];
// 不知道目标数组有几层的话，可以使用Infinity使得数组完全扁平化
console.log(arr1.myFlat2(2));



function flatten(input) {
  const stack = [...input];
  const res = [];
  while (stack.length) {
    const next = stack.pop();
    if (Array.isArray(next)) {
      stack.push(...next);// ... 展开运算符拷贝了一个新的数组
    } else {
      res.unshift(next);
    }
  }
  return res;
}

const arr3 = [1, 2, [3, 4, [5, 6]]];
console.log(flatten(arr3));


function* flat(arr, depth = 1) {
  for (const item of arr) {
    if (Array.isArray(item) && depth > 0) {
      yield flat(item, depth - 1);
    } else {
      yield item;
    }
  }
}
const arr4 = [1, 2, [3, 4, [5, 6]]];
const flattened = [...flatten(arr4, Infinity)];
console.log(flattened);