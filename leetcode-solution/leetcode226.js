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
 * @return {TreeNode}
 */
// 递归写法
var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    let temp = root.left;
    root.left = root.right;
    root.right = temp;
    invertTree(root.left);
    invertTree(root.right);
    return root;
};

// 迭代式的写法
var invertTree = function (root) {
    if (root === null) {
        return null;
    }
    const queue = [];
    queue.push(root);
    while (queue.length > 0) {
        let temp = queue.shift();
        let left = temp.left;
        temp.left = temp.right;
        temp.right = left;
        if (temp.left !== null) {
            queue.push(temp.left);
        }
        if (temp.right !== null) {
            queue.push(temp.right);
        }
    }
    return root;
};