/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function (root) {
    if (root === null) {
        return [];
    }
    const queue = [];
    const result = [];
    queue.push(root);
    while (queue.length > 0) {
        const temp = [];
        const len = queue.length;
        for (let i = 0; i < len; i++) {
            let node = queue.shift();
            if (result.length % 2 === 0) {
                temp.unshift(node.val);
            } else {
                temp.push(node.val);
            }
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
        }
        result.push(temp);
    }
    return result;
};