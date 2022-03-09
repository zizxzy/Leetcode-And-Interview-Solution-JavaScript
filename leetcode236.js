/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
    if (root === null) {
        return null;
    }
    if (root === p || root === q) {
        return root;
    }
    let leftLowestCommonAncestor = lowestCommonAncestor(root.left, p, q);
    let rightLowestCommonAncestor = lowestCommonAncestor(root.right, p, q);
    if (leftLowestCommonAncestor === null && rightLowestCommonAncestor === null) {
        return null;
    }
    if (leftLowestCommonAncestor !== null && rightLowestCommonAncestor !== null) {
        return root;
    }
    if (leftLowestCommonAncestor === null) {
        return rightLowestCommonAncestor;
    }
    if (rightLowestCommonAncestor === null) {
        return leftLowestCommonAncestor;
    }
};