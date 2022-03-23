/**
 * @param {string} s
 * @return {character}
 */
var firstUniqChar = function (s) {
    const len = s.length;
    if (len === 0) return " ";
    let mapper = new Map();
    for (let i = 0; i < len; i++) {
        mapper.set(s[i], (mapper.get(s[i]) || 0) + 1);
    }
    for (let [key, val] of mapper.entries()) {
        if (val === 1) {
            return key;
        }
    }
    return " ";
};
firstUniqChar("leetcode");