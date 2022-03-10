// 迭代解法
var reverseList = function (head) {
    let curr = head;
    let prev = null;
    while (curr !== null) {
        let temp = curr.next;
        curr.next = prev;
        prev = curr;
        curr = temp;
    }
    return prev;
};

//递归解法
// 递归三大条件：大问题可以拆分成子问题，存在最小子问题（可解），子问题求解方式跟大问题一致
var reverseList = function (head) {
    // 递归终止条件
    if (head === null || head.next === null) {
        return head;
    }
    let p = reverseList(head.next);// 递的过程，一步步将问题拆分成子问题
    head.next.next = head;
    head.next = null;
    return p;// 最后是头指针
}