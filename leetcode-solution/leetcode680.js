/**
 * @param {string} s
 * @return {boolean}
 */
var validPalindrome = function (s) {
    const isPalindrome = (s, low, high) => {
        for (let i = low, j = high; i < j; i++, j--) {
            if (s[i] !== s[j]) {
                return false;
            }
        }
        return true;
    }
    let l = 0, r = s.length - 1;
    while (l < r) {
        if (s[l] !== s[r]) {
            return isPalindrome(s, l + 1, r) || isPalindrome(s, l, r - 1);
        }
        l++;
        r--;
    }
    return true;
};