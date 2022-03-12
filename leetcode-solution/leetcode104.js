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
var maxDepth = function (root) {
    let depth = 0;
    let res = 0;
    const traverse = (root) => {
        if (root === null) {
            res = Math.max(res, depth);
            return;
        }
        depth++;
        traverse(root.left);
        traverse(root.right);
        depth--;
    }
    traverse(root);
    return res;
};