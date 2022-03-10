/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
    if (x < 0) return false;
    if (x === 0) return true;
    if (x % 10 === 0) return false;

    let res = 0;
    let copy = x;
    while (copy > 0) {
        res = res * 10 + (copy % 10);
        copy = ~~(copy / 10);
    }
    return res === x;
};