/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let p = nums1.length - 1;

    m--;
    n--;
    while (n >= 0) {
        while (m >= 0 && nums1[m] > nums2[n]) {
            [nums1[m], nums1[p]] = [nums1[p], nums1[m]];
            p--;
            m--;
        }
        [nums2[n], nums1[p]] = [nums1[p], nums2[n]];
        n--;
        p--;
    }
};