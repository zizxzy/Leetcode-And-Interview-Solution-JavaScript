/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const length = nums.length;
    nums.sort((a, b) => a - b);// 对给定的数组进行排序
    const res = [];
    for (let i = 0; i < length - 2; i++) {
        if (nums[i] > 0) break;// 当第一个数就已经大于0的时候，nums[i]+ nums[l]+ nums[r] > 0 === true，所以直接跳出循环，提前结束
        if (i > 0 && nums[i] === nums[i - 1]) continue;// 当要遍历的数和前一个数相同的时候，不执行后续语句，去重
        let l = i + 1;// l-左指针
        let r = length - 1;// r-右指针
        while (l < r) {
            let result = nums[i] + nums[l] + nums[r];// 相加结果
            if (result > 0) {
                r--;// 结果大于0，说明有元素需要变小，而i为固定的，左指针也无法左移，那么就只有右指针左移一位
                while (l < r && nums[r] === nums[r + 1]) {// 减少循环次数
                    r--;
                }
            } else if (result < 0) {// 结果小于0，说明有元素需要变大，而i为固定的，右指针也无法右移，那么就只有左指针右移一位
                l++;
                while (l < r && nums[l] === nums[l - 1]) {
                    l++;
                }
            } else {
                // 找到符合要求的结果
                res.push([nums[i], nums[l], nums[r]]);
                // 去重
                while (l < r && nums[r] === nums[r - 1]) {
                    r--;
                }
                while (l < r && nums[l] === nums[l + 1]) {
                    l++;
                }
                // 分别移动一位
                l++;
                r--;
            }
        }
    }
    return res;
};