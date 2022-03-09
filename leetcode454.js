/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number[]} nums3
 * @param {number[]} nums4
 * @return {number}
 */
var fourSumCount = function (nums1, nums2, nums3, nums4) {
    const mapper = {};
    let res = 0;
    for (let i = 0; i < nums1.length; i++) {
        for (let j = 0; j < nums2.length; j++) {
            mapper[nums1[i] + nums2[j]] = mapper[nums1[i] + nums2[j]] === void 0 ? 1 : mapper[nums1[i] + nums2[j]] + 1;
        }
    }
    for (let i = 0; i < nums3.length; i++) {
        for (let j = 0; j < nums4.length; j++) {
            if (mapper[-1 * (nums3[i] + nums4[j])] !== void 0) {
                res += mapper[-1 * (nums3[i] + nums4[j])];
            }
        }
    }
    return res;
};