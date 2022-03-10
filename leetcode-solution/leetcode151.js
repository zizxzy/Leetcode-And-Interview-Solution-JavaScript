/**
 * @param {string} s
 * @return {string}
 */
var reverseWords = function (s) {
    s = s.trim(' ');
    const arr = Array.from(s);
    let left = 0, right = arr.length - 1;
    let res = "";
    while (left <= right) {
        let index = right;
        while (index >= left && arr[index] !== ' ') {
            index--;
        }
        for (let i = index + 1; i <= right; i++) {
            res += arr[i];
        }
        if (index > left) {
            res += " ";
        }
        while (index >= left && arr[index] === ' ') {
            index--;
        }
        right = index;
    }
    return res;
};
