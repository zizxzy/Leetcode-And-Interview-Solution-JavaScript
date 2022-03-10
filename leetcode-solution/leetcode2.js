/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    const dummy = new ListNode(-1);
    let res = dummy;
    while (l1 !== null || l2 !== null) {
        const a = l1 !== null ? l1.val : 0;
        const b = l2 !== null ? l2.val : 0;
        const temp = (a + b + carry) % 10;
        carry = Math.floor((a + b + carry) / 10);
        const node = new ListNode(temp);
        res.next = node;
        res = res.next;
        if (l1 !== null) {
            l1 = l1.next;
        }
        if (l2 !== null) {
            l2 = l2.next;
        }
    }
    if (carry === 1) {
        res.next = new ListNode(carry);
    }
    return dummy.next;
};