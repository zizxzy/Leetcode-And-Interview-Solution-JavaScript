/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
    let l = 0, r = nums.length - 1;
    while (l <= r) {
        let mid = l + Math.floor((r - l) / 2);
        if (nums[mid] === mid) {
            l = mid + 1;
        } else {
            r = mid - 1;
        }
    }
    return l;
};