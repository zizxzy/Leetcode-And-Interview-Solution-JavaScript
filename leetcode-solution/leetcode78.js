/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
    if (nums.length === 0) return [[]];
    const n = nums.pop();
    const res = subsets(nums);
    const size = res.length;
    for (let i = 0; i < size; i++) {
        res.push(res[i].slice());// 特别注意这里用slice
        res[res.length - 1].push(n);
    }
    return res;
};

