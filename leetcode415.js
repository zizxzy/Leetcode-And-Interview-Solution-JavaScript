/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
var addStrings = function (num1, num2) {
    // 大数加法 注意进位
    let len1 = num1.length - 1;
    let len2 = num2.length - 1;
    let remainder = 0;
    const res = [];
    while (len1 >= 0 || len2 >= 0 || remainder !== 0) {
        const a = len1 >= 0 ? num1[len1] - '0' : 0;
        const b = len2 >= 0 ? num2[len2] - '0' : 0;
        const temp = a + b + remainder;
        res.push(temp % 10);
        remainder = Math.floor(temp / 10);
        len1--;
        len2--;
    }
    return res.reverse().join('');
};