/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    let r = nums.length - 1;
    let l = 0;
    let arr = nums.slice(0);
    arr.sort((a, b) => a - b);
    while (l < r) {
        if (arr[l] + arr[r] > target) {
            r -= 1;
        } else if (arr[l] + arr[r] < target) {
            l += 1;
        } else {
            return [nums.indexOf(arr[l]), nums.lastIndexOf(arr[r])];
        }
    }
    return [];
};

// 哈希表查找
var twoSum = function (nums, target) {
    let mapper = {};
    for (let i = 0; i < nums.length; i++) {
        // 最好用void 0 来判断是否为undefined，如果用的是undefined的话，局部作用域可能会重写undefined
        /*function test() {
            var undefined = 2;
            console.log(undefined);
        }*/
        if (mapper[target - nums[i]] !== void 0) {
            return [mapper[target - nums[i]], i];
        }
        mapper[nums[i]] = i;
    }
    return [];
}