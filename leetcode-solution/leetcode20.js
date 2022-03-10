/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const mapper = {
        '}': '{',
        ']': '[',
        ')': '(',
    };
    const length = s.length;
    let stack = [];
    for (let i = 0; i < length; i++) {
        if (s[i] === '{' || s[i] === '[' || s[i] === '(') {
            stack.push(s[i]);
        }
        else if (mapper[s[i]] !== void 0) {
            if (stack.length > 0 && mapper[s[i]] === stack[stack.length - 1]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
};