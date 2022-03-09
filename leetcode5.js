// 中心扩散法
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
    const extend = (str, left, right) => {
        while (left >= 0 && right < str.length && str[left] === str[right]) {
            left--;
            right++;
        }
        return str.substring(left + 1, right);

    }
    const len = s.length;
    let res = s[0];
    if (s === null || len === 0) return "";
    for (let i = 0; i < len; i++) {
        const extendOdd = extend(s, i, i);
        const extendEven = extend(s, i, i + 1);
        const oddLength = extendOdd.length;
        const evenLength = extendEven.length;
        if (Math.max(oddLength, evenLength) > res.length) {
            if (oddLength > evenLength) {
                res = extendOdd;
            } else {
                res = extendEven;
            }
        }
    }
    return res;
};

longestPalindrome("babad");