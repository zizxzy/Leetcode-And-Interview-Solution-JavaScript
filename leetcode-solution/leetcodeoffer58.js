/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
    let res = '';
    const len = s.length;
    for (let i = n; i < len + n; i++) {
        res += s[i % len];
    }
    return res;
};