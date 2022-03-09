const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

// 该方法可能会耗费大量的数组内存
const quickSort = (arr) => {
  const arrLength = arr.length;
  if (arrLength <= 1) {
    return arr;
  }
  const splitIndex = Math.floor(arrLength / 2);
  const splitValue = arr.splice(splitIndex, 1)[0];
  let left = [];
  let right = [];
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] < splitValue) {
      left.push(arr[i]);
    } else {
      right.push(arr[i]);
    }
  }
  return quickSort(left).concat([splitValue], quickSort(right));
}

console.log(quickSort([1, 4, 6, 7, 2, 3, 2]));


const partition = function (arr, start, end) {
  const privotValue = arr[end];
  let privotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < privotValue) {
      [arr[privotIndex], arr[i]] = [arr[i], arr[privotIndex]];
      privotIndex++;
    }
  }

  [arr[end], arr[privotIndex]] = [arr[privotIndex], arr[end]];
  return privotIndex;
}


function quickS(arr, start, end) {
  if (start > end) return;

  // 返回 pivotIndex
  let index = partition(arr, start, end);

  // 将相同的逻辑递归地用于左右子数组
  quickSort(arr, start, index - 1);
  quickSort(arr, index + 1, end);
}


array = [7, -2, 4, 1, 6, 5, 0, -4, 2]
quickS(array, 0, array.length - 1)

console.log(array)




const selectionSort = function (arr) {
  const arrLen = arr.length;
  let minIndex, temp;
  for (let i = 0; i < arrLen - 1; i++) {
    minIndex = i;
    for (let j = i + 1; j < arrLen; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    temp = arr[minIndex];
    arr[minIndex] = arr[i];
    arr[i] = temp;
  }
  return arr;
}


array1 = [7, -2, 4, 1, 6, 5, 0, -4, 2]
selectionSort(array1)

console.log(array1)