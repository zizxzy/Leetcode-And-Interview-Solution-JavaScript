/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (head === null) return null;
    let curr = head;
    const mapper = new Map();
    while (curr !== null) {
        let node = new Node(curr.val);
        mapper.set(curr, node);
        curr = curr.next;
    }
    curr = head;
    while (curr !== null) {
        mapper.get(curr).next = curr.next !== null ? mapper.get(curr.next) : null;
        mapper.get(curr).random = curr.random !== null ? mapper.get(curr.random) : null;
        curr = curr.next;
    }
    return mapper.get(head);
};


var copyRandomList = function (head) {
    if (head === null) return null;
    let curr = head;
    while (curr !== null) {
        let temp = new Node(curr.val);
        temp.next = curr.next;
        curr.next = temp;
        curr = temp.next;
    }
    curr = head;
    while (curr !== null) {
        if (curr.random !== null) {
            curr.next.random = curr.random.next;
        } else {
            curr.next.random = null;
        }
        curr = curr.next.next;
    }
    curr = head.next;
    let pre = head, res = head.next;
    while (curr !== null && curr.next !== null) {
        pre.next = pre.next.next;
        curr.next = curr.next.next;
        pre = pre.next;
        curr = curr.next;
    }
    pre.next = null;
    return res;
};