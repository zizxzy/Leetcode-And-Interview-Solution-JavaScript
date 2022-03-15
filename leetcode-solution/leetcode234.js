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


var isPalindrome = function (head) {
    let left = head;
    const traverse = (head) => {
        if (head === null) {
            return true;
        }
        let res = traverse(head.next);
        res = res && head.val === left.val;
        left = left.next;
        return res;
    }
    return traverse(head);
};


function ListNode(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
}
// 构建链表的方法
function buildLinkList(values) {
    return values.reverse().reduce((acc, val) => {
        console.log(val, acc);
        return new ListNode(val, acc);
    }, null);
}

// ---- Generate our linked list ----
const linkedList = buildLinkList(["a", "b", "c", "d"]);

var isPalindrome = function (head) {
    if (head === null || head.next === null) return head;

    let slow = head,
        fast = head;
    // 寻找链表中点
    while (fast !== null && fast.next !== null) {
        slow = slow.next;
        fast = fast.next.next;
    }
    // 如果fast指针没有指向null，说明链表长度为奇数，slow还要再前进一步：
    if (fast !== null) {
        slow = slow.next;
    }
    // slow 指针现在指向链表中点

    // 从slow开始反转后面的链表
    let left = head,
        right = reverse(slow);
    let p = null,
        q = right;
    // 比较回文串
    while (right !== null) {
        if (left.val !== right.val) return false;
        p = left;
        left = left.next;
        right = right.next;
    }

    // 恢复原先链表顺序
    p.next = reverse(q);
    return true;

    function reverse(head) {
        let prev = null,
            cur = head;
        while (cur != null) {
            const next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
        return prev;
    }
};

console.log(linkedList);