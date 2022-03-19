/**
 * @param {string} s
 * @return {number}
 */
var myAtoi = function (s) {
    const charArr = s.split('');
    const len = charArr.length;
    let idx = 0;
    const reg = /\d/;
    while (idx < len && charArr[idx] === ' ') {
        idx++;
    }
    let negative = false;
    if (charArr[idx] === '-') {
        negative = true;
        idx++;
    } else if (charArr[idx] === '+') {
        idx++;
    } else if (!reg.test(charArr[idx])) {
        return 0;
    }
    let res = 0;
    const maxValue = 2 ** 31;
    while (idx < len && reg.test(charArr[idx])) {
        let digit = charArr[idx] - '0';
        if (res > (maxValue - 1 - digit) / 10 && !negative) {
            return maxValue - 1;
        }
        if (res > (maxValue - digit) / 10 && negative) {
            return -(maxValue);
        }
        res = res * 10 + digit;
        idx++;
    }
    return negative ? - res : res;
};