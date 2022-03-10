const bigNumberAdd = (strA, strB) => {
  let aLen = strA.length - 1;
  let bLen = strB.length - 1;
  let remainder = 0;
  let result = [];
  while (aLen >= 0 || bLen >= 0 || remainder !== 0) {
    const a = aLen >= 0 ? strA.charAt(aLen) - '0' : 0;
    const b = bLen >= 0 ? strB.charAt(bLen) - '0' : 0; // ASCII码相减
    const tempResult = a + b + remainder
    result.push((tempResult) % 10);
    remainder = Math.floor(tempResult / 10);
    aLen -= 1;
    bLen -= 1;
  }
  return result.reverse().join('');
}


var addStrings = function (num1, num2) {
  let aLen = num1.length - 1;
  let bLen = num2.length - 1;
  let remainder = 0;
  let result = [];
  while (aLen >= 0 || bLen >= 0 || remainder !== 0) {
    const a = aLen >= 0 ? num1.charAt(aLen) - '0' : 0;
    const b = bLen >= 0 ? num2.charAt(bLen) - '0' : 0;
    const tempResult = a + b + remainder
    result.push((tempResult) % 10);
    remainder = Math.floor(tempResult / 10);
    aLen -= 1;
    bLen -= 1;
  }
  return result.reverse().join('');
};