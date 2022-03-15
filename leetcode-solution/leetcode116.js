/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
    if (root === null) {
        return root;
    }
    let pre = root;
    while (pre.left !== null) {
        let curr = pre;
        while (curr !== null) {
            curr.left.next = curr.right;
            if (curr.next !== null) {
                curr.right.next = curr.next.left;
            }
            curr = curr.next;
        }
        pre = pre.left;
    }
    return root;
};

var connect = function (root) {
    if (root === null) {
        return root;
    }
    const connectTwoNode = (left, right) => {
        if (left === null || right === null) {
            return;
        }
        left.next = right;
        connectTwoNode(left.left, left.right);
        connectTwoNode(left.right, right.left);
        connectTwoNode(right.left, right.right);
    };
    connectTwoNode(root.left, root.right);
    return root;
};

