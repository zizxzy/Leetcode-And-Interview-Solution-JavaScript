/**
 * @param {number[]} nums
 * @return {string}
 */
var largestNumber = function (nums) {
    let res = nums.sort((a, b) => `${b}${a}` - `${a}${b}`).join('');
    return res.startsWith('0') ? '0' : res;
};