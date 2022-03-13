/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
    if (headA === null || headB === null) {
        return null;
    }
    let p1 = headA, p2 = headB;
    while (p1 !== p2) {
        p1 = p1.next === null ? headB : p1.next;
        p2 = p2.next === null ? headA : p2.next;
    }
    return p1;
};


var getIntersectionNode = function (headA, headB) {
    let lenA = 0, lenB = 0;
    let t1 = headA, t2 = headB;
    while (t1 !== null) {
        lenA++;
        t1 = t1.next;
    }
    while (t2 !== null) {
        lenB++;
        t2 = t2.next;
    }
    let p1 = headA, p2 = headB;
    if (lenA > lenB) {
        const length = lenA - lenB;
        for (let i = 0; i < length; i++) {
            p1 = p1.next;
        }
    }
    else {
        const length = lenB - lenA;
        for (let i = 0; i < length; i++) {
            p2 = p2.next;
        }
    }
    while (p1 !== p2) {
        p1 = p1.next;
        p2 = p2.next;
    }
    return p1;
};