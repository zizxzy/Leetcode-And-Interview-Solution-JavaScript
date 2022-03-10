/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
    const dp = new Array(nums.length).fill(1);
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
            if (nums[i] > nums[j]) {
                dp[i] = Math.max(dp[i], dp[j] + 1);
            }
        }
    }
    let res = dp[0];
    for (let i = 0; i < length; i++) {
        res = Math.max(res, dp[i]);
    }
    return res;
};