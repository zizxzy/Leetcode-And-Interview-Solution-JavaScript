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
// 层序遍历，每次取最后的一个元素
var rightSideView = function (root) {
    if (root === null) return [];
    const queue = [],
        res = [];
    queue.push(root);
    while (queue.length !== 0) {
        const length = queue.length;
        let temp = 0;
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            temp = node.val;
        }
        res.push(temp);
    }
    return res;
};
// 根 右子树 左子树
var rightSideView = function (root) {
    const res = [];
    const dfs = (root, depth) => {
        if (root === null) {
            return;
        }
        if (res.length === depth) {
            res.push(root.val);
        }
        depth++;
        dfs(root.right, depth);
        dfs(root.left, depth);
    }
    dfs(root, 0);
    return res;
};
