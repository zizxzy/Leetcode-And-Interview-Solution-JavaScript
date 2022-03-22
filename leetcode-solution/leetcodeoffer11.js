/**
 * @param {number[]} numbers
 * @return {number}
 */
var minArray = function (numbers) {
    let i = 0, j = numbers.length - 1;
    while (i < j) {
        let m = i + Math.floor((j - i) / 2);
        if (numbers[m] > numbers[j]) {
            i = m + 1;
        } else if (numbers[m] < numbers[j]) {
            j = m;
        } else {
            j--;
        }
    }
    return numbers[i];
};