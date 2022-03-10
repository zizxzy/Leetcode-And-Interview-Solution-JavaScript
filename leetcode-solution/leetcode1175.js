/**
 * @param {number} n
 * @return {number}
 */
const mod = 10 ** 9 + 7;
var numPrimeArrangements = function (n) {
    const primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];
    let primeCount = 0;
    primes.forEach(prime => {
        if (prime <= n) {
            primeCount++;
        }
    });
    let res = factorial(primeCount);
    for (let i = 2; i <= n - primeCount; i++) {
        res = (res * i) % mod;
    }
    return res;
};

var factorial = function (n) {
    if (n <= 1) {
        return 1;
    }
    return (factorial(n - 1) * n) % mod;
}

console.log(numPrimeArrangements(100));