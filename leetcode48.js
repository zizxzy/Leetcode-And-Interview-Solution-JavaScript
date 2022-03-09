/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var rotate = function (matrix) {
    if (matrix.length === 0) return;
    const length = matrix.length;
    for (let i = 0; i < length; i++) {
        for (let j = i + 1; j < length; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]];
        }
    }
    const reverseRow = (matrix) => {
        let r = matrix.length - 1;
        let l = 0;
        while (l < r) {
            [matrix[l], matrix[r]] = [matrix[r], matrix[l]];
            r--;
            l++;
        }
    };
    for (let i = 0; i < length; i++) {
        reverseRow(matrix[i]);
    }
};