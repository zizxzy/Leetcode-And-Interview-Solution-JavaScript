/**
 * @param {number[]} nums
 * @return {number[]}
 */
var largestDivisibleSubset = function (nums) {
    nums.sort((a, b) => a - b);
    const length = nums.length;
    const dp = new Array(length);
    const link = new Array(length);
    for (let i = 0; i < length; i++) {
        let max = 1, prev = -1;
        for (let j = 0; j < i; j++) {
            if (nums[i] % nums[j] === 0) {
                const temp = dp[j] ? dp[j] : 1;
                if (temp + 1 > max) {
                    max = dp[j] ? dp[j] + 1 : 1;
                    prev = j;
                }
            }
        }
        dp[i] = max;
        link[i] = prev;
    }
    let maxCount = -1, idx = -1;
    for (let i = 0; i < length; i++) {
        if (dp[i] > maxCount) {
            maxCount = dp[i];
            idx = i;
        }
    }
    const res = [];
    while (res.length !== maxCount) {
        res.unshift(nums[idx]);
        idx = link[idx];
    }
    return res;
};

console.log(largestDivisibleSubset([4, 8, 10, 240]));