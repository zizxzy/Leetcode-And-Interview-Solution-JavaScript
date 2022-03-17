/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var maxPathSum = function (root) {
    let maxPathSum = Number.MIN_SAFE_INTEGER;
    const dfs = (root) => {
        if (root === null) {
            return 0;
        }
        const leftMax = dfs(root.left);
        const rightMax = dfs(root.right);
        const innerMax = leftMax + rightMax + root.val;
        maxPathSum = Math.max(maxPathSum, innerMax);
        const outputMax = root.val + Math.max(...[0, leftMax, rightMax]);
        return outputMax < 0 ? 0 : outputMax;
    }
    dfs(root);
    return maxPathSum;
};