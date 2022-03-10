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
 * @return {number[]}
 */
// 递归式的写法
var inorderTraversal = function (root) {
    const res = [];
    const inorder = (root) => {
        if (root === null) {
            return;
        }
        inorderTraversal(root.left);
        res.push(root.val);
        inorderTraversal(root.right);
    }
    inorder(root);
    return res;
};

// 迭代，显示的维护一个栈
var inorderTraversal = function (root) {
    if (root === null) {
        return [];
    }
    const stack = [];
    const res = [];
    while (root !== null || stack.length !== 0) {
        if (root !== null) {
            stack.push(root);
            root = root.left;
        } else {
            const node = stack.pop();
            res.push(node.val);
            root = node.right;
        }
    }
    return res;
};