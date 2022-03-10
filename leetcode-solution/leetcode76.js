/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map();
    const window = new Map();
    for (let i = 0; i < t.length; i++) {
        let temp = need.has(t[i]) ? need.get(t[i]) : 0;
        need.set(t[i], ++temp);
    }
    let left = 0, right = 0, valid = 0;
    let start = 0, length = Number.MAX_VALUE;
    const len = s.length;
    while (right < len) {
        const char = s[right];
        right++;
        if (need.has(char)) {
            let temp = window.has(char) ? window.get(char) : 0;
            window.set(char, ++temp);
            if (need.get(char) === window.get(char)) {
                valid++;
            }
        }
        while (valid === need.size) {
            if (right - left < length) {
                length = right - left;
                start = left;
            }
            const char = s[left];
            left++;
            if (need.has(char)) {
                if (need.get(char) === window.get(char)) {
                    valid--;
                }
                let temp = window.has(char) ? window.get(char) : 0;
                window.set(char, --temp);
            }
        }
    }
    return length === Number.MAX_VALUE ? "" : s.substring(start, start + length);
};