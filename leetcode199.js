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