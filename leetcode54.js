/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (matrix.length === 0) {
        return [];
    }
    const height = matrix.length,
        width = matrix[0].length;
    let upperBound = 0,
        leftBound = 0,
        lowerBound = matrix.length - 1,
        rightBound = matrix[0].length - 1;
    const res = [];
    while (res.length < height * width) {
        if (upperBound <= lowerBound) {
            for (let i = leftBound; i <= rightBound; i++) {
                res.push(matrix[upperBound][i]);
            }
            upperBound++;
        }

        if (leftBound <= rightBound) {
            for (let i = upperBound; i <= lowerBound; i++) {
                res.push(matrix[i][rightBound]);
            }
            rightBound--;
        }
        if (upperBound <= lowerBound) {
            for (let i = rightBound; i >= leftBound; i--) {
                res.push(matrix[lowerBound][i]);
            }
            lowerBound--;
        }

        if (leftBound <= rightBound) {
            for (let i = lowerBound; i >= upperBound; i--) {
                res.push(matrix[i][leftBound]);
            }
            leftBound++;
        }

    }
    return res;
};