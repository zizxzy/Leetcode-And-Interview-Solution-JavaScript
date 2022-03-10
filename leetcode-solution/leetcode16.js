/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function (nums, target) {
    let length = nums.length;
    if (nums === null || nums.length < 3) {
        return;
    }
    nums.sort((a, b) => a - b);
    let res = nums[0] + nums[1] + nums[2];
    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        let l = i + 1, r = length - 1;
        while (l < r) {
            const sum = nums[i] + nums[l] + nums[r];
            if (sum === target) {
                return sum;
            }
            if (Math.abs(sum - target) < Math.abs(res - target)) {
                res = sum;
            }
            if (sum > target) {
                r--;
            } else if (sum < target) {
                l++;
            }
        }
    }
    return res;
};