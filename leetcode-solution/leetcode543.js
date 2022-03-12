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
var diameterOfBinaryTree = function (root) {
    let res = 0;
    const postOrder = (root) => {
        if (root === null) return 0;
        const leftMax = postOrder(root.left);
        const rightMax = postOrder(root.right);
        // 最大直径不一定经过根
        res = Math.max(res, leftMax + rightMax);
        return 1 + Math.max(leftMax, rightMax);
    }
    postOrder(root);
    return res;
};