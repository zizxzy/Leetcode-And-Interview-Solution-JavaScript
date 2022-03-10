/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
    const window = new Map();
    let left = 0, right = 0, res = 0;
    const len = s.length;
    while (right < len) {
        const char = s[right];
        right++;
        let temp = window.has(char) ? window.get(char) : 0;
        window.set(char, ++temp);
        while (window.get(char) > 1) {
            const char = s[left];
            left++;
            let temp = window.has(char) ? window.get(char) : 0;
            window.set(char, --temp);
        }
        res = Math.max(res, right - left);
    }
    return res;
};