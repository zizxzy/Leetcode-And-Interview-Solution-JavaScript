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
// prev和curr指针法
var deleteDuplicates = function (head) {
    const dummy = new ListNode(-1);
    dummy.next = head;
    let cur = head,
        prev = dummy;
    while (cur !== null && cur.next !== null) {
        if (cur.val !== cur.next.val) {
            prev = cur;
            cur = cur.next;
        } else {
            while (cur.next !== null && cur.val === cur.next.val) {
                cur = cur.next;
            }
            prev.next = cur.next;
            cur = cur.next;
        }
    }
    return dummy.next;
};

// hashmap法
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
// hashmap
var deleteDuplicates = function (head) {
    if (head === null || head.next === null) {
        return head;
    }
    const map = {};
    let dummy = new ListNode(-1);
    let cur = head;
    while (cur !== null) {
        if (map[cur.val] === void 0) {
            map[cur.val] = 1;
        } else {
            map[cur.val] += 1;
        }
        cur = cur.next;
    }
    let res = dummy;
    while (head !== null) {
        if (map[head.val] === 1) {
            let newNode = new ListNode(head.val);
            dummy.next = newNode;
            dummy = dummy.next;
        }
        head = head.next;
    }
    return res.next;
};