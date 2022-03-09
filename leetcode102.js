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
var levelOrder = function (root) {
    let res = [];
    if (root === null) return res;
    let queue = [root];
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
            temp.push(node.val);
        }
        res.push(temp);
    }
    return res;
};


const promise = new Promise(function (resolve) {
    setTimeout(function () {
        resolve(1);
        console.log("2");
    });
})
promise.then(function (res) {
    console.log(res);
});