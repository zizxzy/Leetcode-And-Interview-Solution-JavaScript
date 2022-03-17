/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function (nums) {
    const build = (nums, l, r) => {
        if (l > r) {
            return null;
        }
        let max = Number.MIN_SAFE_INTEGER;
        let idx = -1;
        for (let i = l; i <= r; i++) {
            if (nums[i] > max) {
                max = nums[i];
                idx = i;
            }
        }
        let rootNode = new TreeNode(max);
        rootNode.left = build(nums, l, idx - 1);
        rootNode.right = build(nums, idx + 1, r);
        return rootNode;
    }
    return build(nums, 0, nums.length - 1);
};