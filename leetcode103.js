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
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
    let res = [];
    if (root === null) return res;
    let queue = [root];
    let flag = false;
    while (queue.length > 0) {
        const length = queue.length;
        let temp = [];
        for (let i = 0; i < length; i++) {
            const node = queue.shift();
            if (node.left !== null) {
                queue.push(node.left);
            }
            if (node.right !== null) {
                queue.push(node.right);
            }
            if (flag) {
                temp.unshift(node.val);
            } else {
                temp.push(node.val);
            }
        }
        flag = !flag;
        res.push(temp);
    }
    return res;
};