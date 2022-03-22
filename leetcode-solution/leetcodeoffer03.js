/**
 * @param {number[]} nums
 * @return {number}
 */
var findRepeatNumber = function (nums) {
    const len = nums.length;
    const set = new Set();
    for (let i = 0; i < len; i++) {
        if (set.has(nums[i])) {
            return nums[i];
        } else {
            set.add(nums[i])
        }
    }
    return -1;
};

var findRepeatNumber = function (nums) {
    const len = nums.length;
    for (let i = 0; i < len;) {
        if (i === nums[i]) {
            i++;
            continue;
        } else if (nums[i] === nums[nums[i]]) {
            return nums[i];
        } else {
            const tmp = nums[i];
            nums[i] = nums[tmp];
            nums[tmp] = tmp;
        }
    }
    return -1;
};
findRepeatNumber([[2, 3, 1, 0, 2, 5, 3]]);