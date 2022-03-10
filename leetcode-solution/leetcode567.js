/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    const need = new Map();
    const window = new Map();
    const s1Len = s1.length;
    for (let i = 0; i < s1Len; i++) {
        let temp = need.has(s1[i]) ? need.get(s1[i]) : 0;
        need.set(s1[i], ++temp);
    }
    let left = 0, right = 0, valid = 0;
    const len = s2.length;
    while (right < len) {
        const char = s2[right];
        right++;
        if (need.has(char)) {
            let temp = window.has(char) ? window.get(char) : 0;
            window.set(char, ++temp);
            if (need.get(char) === window.get(char)) {
                valid++;
            }
        }
        while (right - left >= need.size) {
            if (valid === need.size) {
                return true;
            }
            const char = s2[left];
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
    return false;
};

console.log(checkInclusion("abcdxabcde", "abcdeabcdx"));