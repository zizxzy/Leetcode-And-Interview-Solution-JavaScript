// 三种方法将类数组转换为真正的数组
let al1 = {
  length: 4,
  0: 0,
  1: 1,
  3: 3,
  4: 4,
  5: 5,
};
console.log(Array.from(al1)) // [0, 1, undefined, 3]

// 代码示例
let al2 = {
  length: 4,
  '-1': -1,
  '0': 0,
  a: 'a',
  1: 1
};
console.log(Array.prototype.slice.call(al2)); //[0, 1, empty × 2]

let arrayLike2 = {
  2: 3,
  3: 4,
  length: 2,
  push: Array.prototype.push
}

// push 操作的是索引值为 length 的位置
arrayLike2.push(1);
console.log(arrayLike2); // {2: 1, 3: 4, length: 3, push: ƒ}
arrayLike2.push(2);
console.log(arrayLike2); // {2: 1, 3: 2, length: 4, push: ƒ}