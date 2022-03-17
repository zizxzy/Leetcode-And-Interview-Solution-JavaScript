/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function (head) {
    const merge = (l1, l2) => {
        let dummyHead = new ListNode(-1);
        let curr = dummyHead;
        while (l1 !== null && l2 !== null) {
            if (l1.val < l2.val) {
                curr.next = l1;
                l1 = l1.next;
            } else {
                curr.next = l2;
                l2 = l2.next;
            }
            curr = curr.next;
        }
        curr.next = l1 === null ? l2 : l1;
        return dummyHead.next;
    }
    if (head === null || head.next === null) {
        return head;
    }
    let fast = head.next, slow = head;
    while (fast !== null && fast.next !== null) {
        fast = fast.next.next;
        slow = slow.next;
    }
    let middle = slow.next;
    slow.next = null;
    return merge(sortList(head), sortList(middle));
};