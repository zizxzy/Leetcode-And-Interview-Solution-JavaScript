/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var getKthFromEnd = function (head, k) {
    let fast = head,
        slow = head;
    for (let i = 0; i < k; i++) {
        fast = fast.next;
    }
    while (fast !== null) {
        slow = slow.next;
        fast = fast.next;
    }
    return slow;
};