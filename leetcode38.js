/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
    let res = "1";
    for (let i = 0; i < n - 1; i++) {// 遍历次数为n
        let currentChar = res[0];
        let charCount = 0;
        let temp = "";
        for (let j = 0; j < res.length; j++) {
            if (res[j] === currentChar) {
                charCount++;
            } else {
                temp += (charCount.toString() + currentChar);
                currentChar = res[j];
                charCount = 1;// 注意赋值为1
            }
        }
        temp += (charCount.toString() + currentChar);// 字符串最后面的一排重复数字
        res = temp;
    }
    return res;
};