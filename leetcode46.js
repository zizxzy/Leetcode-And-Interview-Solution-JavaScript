/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var res = [];
var permute = function (nums) {
    const backtrack = (nums, track, used) => {
        if (nums.length === track.length) {
            res.push(track.slice());
            return;
        }
        const length = nums.length;
        for (let i = 0; i < length; i++) {
            if (used[i]) {
                continue;
            }
            track.push(nums[i]);
            used[i] = true;
            backtrack(nums, track, used);
            used[i] = false;
            track.pop();
        }
    };
    const track = [],
        used = new Array(nums.length);
    backtrack(nums, track, used);
    return res;
};

console.log(permute([1, 2, 3]));