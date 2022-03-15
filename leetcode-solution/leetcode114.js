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
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
    while (root !== null) {

        if (root.left === null) {
            root = root.right;
        } else {
            let curr = root.left;
            while (curr.right !== null) {
                curr = curr.right;
            }
            curr.right = root.right;
            root.right = root.left;
            root.left = null;
            root = root.right;
        }
    }
};

var flatten = function (root) {
    if (root === null) {
        return;
    }
    flatten(root.left);
    flatten(root.right);

    let left = root.left;
    let right = root.right;
    root.left = null;
    root.right = left;
    let p = root;
    while (p.right !== null) {
        p = p.right;
    }
    p.right = right;
};