/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
    const p = new ListNode(head.val, head.next);
    const stack = [];
    while (p.next !== void 0) {
        stack.push(p.val);
        p = p.next;
    }
    while (head.next !== void 0) {
        if (head.val !== stack.pop()) {
            return false;
        }
    }
    return true;
};

// 快慢指针加链表翻转
var isPalindrome = function (head) {
    const reverseList = function (head) {
        let prev = null, cur = head;
        while (cur !== null) {
            let temp = cur.next;
            cur.next = prev;
            prev = cur;
            cur = temp;
        }
        return prev;
    }
    let slow = fast = head;
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    if (fast !== null) {
        slow = slow.next;
    }
    let l = head;
    let r = reverseList(slow);
    while (r !== null) {
        if (l.val !== r.val) {
            return false;
        }
        r = r.next;
        l = l.next;
    }
    return true;
};