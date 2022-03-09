/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length === 0) return;
    intervals.sort((a, b) => {
        return a[0] === b[0] ? a[a.length - 1] - b[b.length - 1] : a[0] - b[0];
    });
    const res = [];
    const length = intervals.length;
    for (let i = 0; i < length;) {
        let j = i + 1;
        let leftMax = intervals[i][1];
        while (j < length && intervals[j][0] <= leftMax) {
            leftMax = Math.max(leftMax, intervals[j][1]);
            j++;
        }
        res.push([intervals[i][0], leftMax]);
        i = j;
    }
    return res;
};
console.log(merge([[1, 3], [0, 6], [-6, 10], [15, 18]]));