/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function (height) {
    const length = height.length;
    if (length === 0) {
        return 0;
    }
    let res = 0;
    const lMax = new Array(length);
    const rMax = new Array(length);
    lMax[0] = height[0];
    rMax[length - 1] = height[length - 1];
    for (let i = 1; i < length; i++) {
        lMax[i] = Math.max(lMax[i - 1], height[i]);
    }
    for (let j = length - 2; j >= 0; j--) {
        rMax[j] = Math.max(rMax[j + 1], height[j]);
    }
    for (let i = 1; i < length - 1; i++) {
        res += Math.min(lMax[i], rMax[i]) - height[i];
    }
    return res;
};

console.log(trap([4, 2, 0, 3, 2, 5]));