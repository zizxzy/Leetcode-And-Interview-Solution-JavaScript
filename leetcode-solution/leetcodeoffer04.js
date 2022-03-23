/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var findNumberIn2DArray = function (matrix, target) {
    const rows = matrix.length, cols = matrix[0].length;
    if (matrix === null || rows === 0 || cols === 0) {
        return false;
    }
    let row = 0, col = cols - 1;
    while (row < rows && col < cols && col >= 0) {
        let temp = matrix[row][col];
        if (temp === target) {
            return true;
        } else if (temp > target) {
            col--;
        } else if (temp < target) {
            row++;
        }
    }
    return false;
};