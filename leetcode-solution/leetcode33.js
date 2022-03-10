/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const mid = left + Math.floor((right - left) / 2);
        if (nums[mid] === target) {
            return mid;
        } else if (nums[mid] < nums[right]) {
            // 有序数组在右边
            if (target > nums[mid] && nums[right] > target) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        } else {
            // 左边
            if (target < nums[mid] && target > nums[left]) {
                right = mid - 1;
            } else {
                left = mid + 1;
            }
        }
    }
    return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0));