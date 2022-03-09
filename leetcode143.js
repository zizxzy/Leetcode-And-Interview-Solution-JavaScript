/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function (head) {
    if (head === null) {
        return;
    }
    let slow = head, fast = head;
    while (fast !== null && fast.next !== null && fast.next.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    const reverse = (head) => {
        let prev = null;
        let curr = head;
        while (curr !== null) {
            let temp = curr.next;
            curr.next = prev;
            prev = curr;
            curr = temp;
        }
        return prev;
    }
    let needReverseNode = slow.next;
    slow.next = null;
    needReverseNode = reverse(needReverseNode);
    let curr = head;
    while (curr !== null && needReverseNode !== null) {
        let temp = needReverseNode;
        let currNext = curr.next;
        needReverseNode = needReverseNode.next;
        curr.next = temp;
        temp.next = currNext;
        curr = currNext;
    }
};