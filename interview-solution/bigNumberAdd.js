var bigNumberAdd = (strA, strB) => {
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


function bigNumberAdd(number1, number2) {

    let result = "", // 保存最后结果
        carry = false; // 保留进位结果

    // 将字符串转换为数组
    number1 = number1.split("");
    number2 = number2.split("");

    // 当数组的长度都变为0，并且最终不再进位时，结束循环
    while (number1.length || number2.length || carry) {

        // 每次将最后的数字进行相加，使用~~的好处是，即使返回值为 undefined 也能转换为 0
        carry += ~~number1.pop() + ~~number2.pop();

        // 取加法结果的个位加入最终结果
        result = carry % 10 + result;

        // 判断是否需要进位，true 和 false 的值在加法中会被转换为 1 和 0
        carry = carry > 9;
    }

    // 返回最终结果
    return result;
}
