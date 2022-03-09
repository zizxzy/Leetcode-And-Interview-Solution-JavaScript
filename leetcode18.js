/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    // 先排序
    nums.sort((a, b) => a - b);
    /*
    注意：调用这个函数之前一定要先给 nums 排序
    n 填写想求的是几数之和，start 从哪个索引开始计算（一般填 0），target 填想凑出的目标和
     */
    const nSumTarget = (nums, n, start, target) => {
        let size = nums.length;
        let res = [];
        // 至少是 2Sum，且数组大小不应该小于 n
        if (n < 2 || size < n) return res;
        // 2Sum 是 base case
        if (n == 2) {
            // 双指针那一套操作
            let lo = start,
                hi = size - 1;
            while (lo < hi) {
                let sum = nums[lo] + nums[hi];
                let left = nums[lo],
                    right = nums[hi];
                if (sum < target) {
                    while (lo < hi && nums[lo] == left) lo++;
                } else if (sum > target) {
                    while (lo < hi && nums[hi] == right) hi--;
                } else {
                    res.push([left, right]);
                    while (lo < hi && nums[lo] == left) lo++;
                    while (lo < hi && nums[hi] == right) hi--;
                }
            }
        } else {
            // n > 2 时，递归计算 (n-1)Sum 的结果
            for (let i = start; i < size; i++) {
                let sub = nSumTarget(nums, n - 1, i + 1, target - nums[i]);
                for (let arr of sub) {
                    arr.push(nums[i]);
                    res.push(arr);
                }
                while (i < size - 1 && nums[i] == nums[i + 1]) i++;
            }
        }
        return res;
    };
    // n 为 4，从 nums[0] 开始计算和为 target 的四元组
    return nSumTarget(nums, 4, 0, target);
};



// 非递归，代码优化，在时间复杂度上有很大的提升
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
    nums.sort((a, b) => a - b);
    let length = nums.length;
    if (nums === null || length < 4) {
        return [];
    }
    const result = [];
    for (let i = 0; i < length - 3; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) {
            continue;
        }
        if (target - nums[i] - nums[i + 1] - nums[i + 2] - nums[i + 3] < 0) {
            break;
        }
        if (target - nums[length - 1] - nums[length - 2] - nums[length - 3] - nums[i] > 0) {
            continue;
        }
        for (let j = i + 1; j < length - 2; j++) {
            if (j > i + 1 && nums[j] === nums[j - 1]) {
                continue;
            }
            if (target - nums[i] - nums[j] - nums[j + 1] - nums[j + 2] < 0) {
                break;
            }
            if (target - nums[length - 1] - nums[length - 2] - nums[i] - nums[j] > 0) {
                continue;
            }
            let l = j + 1,
                r = length - 1;
            while (l < r) {
                let res = target - nums[i] - nums[j] - nums[l] - nums[r];
                if (res < 0) {
                    r--;
                } else if (res > 0) {
                    l++;
                } else {
                    result.push([nums[i], nums[j], nums[l], nums[r]]);
                    while (l < r && nums[l] === nums[l + 1]) {
                        l++;
                    }
                    while (l < r && nums[r] === nums[r - 1]) {
                        r--;
                    }
                    l++;
                    r--;
                }
            }
        }
    }
    return result;
};