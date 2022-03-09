/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const reverse = (a, b) => {
        let pre = null,
            cur = a,
            next = a;
        while (cur !== b) {
            next = cur.next;
            cur.next = pre;
            pre = cur;
            cur = next;
        }
        return pre;
    }
    let a = head,
        b = head;
    if (head === null) {
        return null;
    }
    for (let i = 0; i < k; i++) {
        if (b === null) {
            return head;
        }
        b = b.next;
    }
    let newHead = reverse(a, b);
    a.next = reverseKGroup(b, k);
    return newHead;
};