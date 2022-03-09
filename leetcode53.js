/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp = new Array(nums.length);// 存储结果的数组
    const length = dp.length;
    dp[0] = nums[0];
    for (let i = 1; i < length; i++) {
        // 动态规划的关键
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);// dp[i]赋值为当前数和当前数加上前面以nums[i-1]为结尾的最大连续序列之和中的最大值
    }
    let res = dp[0];
    for (let i = 1; i < length; i++) {
        res = Math.max(res, dp[i]);// 取出dp数组中最大的一个数，即为最大连续子序列之和
    }
    return res;
};


/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const dp = new Array(nums.length);// 存储结果的数组
    const length = dp.length;
    dp[0] = nums[0];
    let res = dp[0];
    for (let i = 1; i < length; i++) {
        // 动态规划的关键
        dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);// dp[i]赋值为当前数和当前数加上前面以nums[i-1]为结尾的最大连续序列之和中的最大值
        res = Math.max(res, dp[i]);// 取出dp数组中最大的一个数，即为最大连续子序列之和
    }
    return res;
};

// 前缀和求法
/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const length = nums.length;
    if (length === 1) {
        return nums[0];
    }
    maxSum = nums[0];
    minSum = nums[0];
    sum = nums[0];
    for (let i = 1; i < length; i++) {
        sum += nums[i];
        maxSum = Math.max(maxSum, sum);
        minSum = Math.min(minSum, sum);
    }
    return maxSum - minSum;
};