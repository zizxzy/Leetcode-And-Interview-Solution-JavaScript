/**
 * @param {number} numerator
 * @param {number} denominator
 * @return {string}
 */
// 本题需要理解除法运算的过程
var fractionToDecimal = function (numerator, denominator) {
    let str = '';
    if ((numerator > 0 && denominator < 0) || (numerator < 0 && denominator > 0)) {
        str += '-';
    }
    numerator = Math.abs(numerator);
    denominator = Math.abs(denominator);
    let mapper = {};
    const quotient = Math.floor(numerator / denominator);
    str += quotient;
    if (numerator % denominator === 0) {
        return str;
    }
    str += '.';
    let a = numerator, b = denominator;
    while ((a = (a % b) * 10) > 0 && mapper[a] === void 0) {
        mapper[a] = str.length;
        str += Math.floor(a / b);
    }
    if (a === 0) return str;
    let arr = str.split("");
    arr.splice(mapper[a], 0, "(");
    return arr.join("") + ")";
};

console.log(fractionToDecimal(1, 214748364));