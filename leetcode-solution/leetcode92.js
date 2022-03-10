/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function (head, left, right) {
    let dummyHead = new ListNode(-1);
    dummyHead.next = head;
    let prev = dummyHead;
    for (let i = 1; i < left; i++) {
        prev = prev.next;
    }
    let pre = null;
    let curr = prev.next;
    for (let i = 0; i <= right - left; i++) {
        let temp = curr.next;
        curr.next = pre;
        pre = curr;
        curr = temp;
    }
    prev.next.next = curr;
    prev.next = pre;
    return dummyHead.next;
};