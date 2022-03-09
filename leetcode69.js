/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
    var left = 0;
    var right = x;
    var res = -1;
    while (left <= right) {
        var mid = Math.floor(left + (right - left) / 2);
        let temp = mid * mid;
        if (temp <= x) {
            res = mid;
            left = mid + 1;
        } else if (temp > mid) {
            right = mid - 1;
        }
    }
    return res;
};
console.log(mySqrt(8));