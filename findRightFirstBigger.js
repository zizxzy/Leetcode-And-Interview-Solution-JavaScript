// 给定一个数组，按找到每个元素右侧第一个比它大的数字，没有的话返回-1 规则返回一个数

const findRightFristMax = (arr) => {
  let result = [];
  const len = arr.length;
  for (let i = 0; i < len - 1; i++) {
    for (let j = i + 1; j < len; j++) {
      if (arr[j] > arr[i]) {
        result[i] = arr[j];
        break;
      }
      result[i] = -1;
    }
  }
  result[len - 1] = -1;
  return result;
}

console.log(findRightFristMax([2, 6, 3, 8, 10, 9]));