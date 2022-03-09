class minHeap {
    constructor() {
        this.heap = []; //数组来维护最小堆
    }
    size() {
        return this.heap.length;
    }

    getParentNodeIndex(i) {
        return Math.floor((i - 1) / 2);
    }
    getLeftChildIndex(i) {
        return 2 * i + 1;
    }

    getRightChildIndex(i) {
        return 2 * i + 2;
    }

    swap(i, j) {
        [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
    }

    shiftUp(i) {
        if (i <= 0) return;
        const parentIndex = this.getParentNodeIndex(i);
        if (this.heap[parentIndex] && this.heap[parentIndex].val > this.heap[i].val) {
            this.swap(parentIndex, i);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(i) {
        if (i >= this.heap.length) return;
        const leftIndex = this.getLeftChildIndex(i);
        const rightIndex = this.getRightChildIndex(i);
        // 比如 7 2 1的时候，经过下面的两次交换，可以变成 1 7 2
        if (this.heap[leftIndex] && this.heap[leftIndex].val < this.heap[i].val) {
            this.swap(leftIndex, i);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] && this.heap[rightIndex].val < this.heap[i].val) {
            this.swap(rightIndex, i);
            this.shiftDown(rightIndex);
        }
    }

    insert(node) {
        this.heap.push(node);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 1) return this.heap.shift();
        const node = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return node;
    }

    peek() {
        if (this.heap.length === 0) return;
        return this.heap[0];
    }
}

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
    if (lists.length === 0) return null;
    const dummy = new ListNode(0);
    let curr = dummy;
    const minheap = new minHeap();
    lists.forEach(list => {
        if (list !== null) {
            minheap.insert(list);
        }
    });
    while (minheap.size() > 0) {
        const node = minheap.pop();
        curr.next = node;
        if (node.next !== null) {
            minheap.insert(node.next);
        }
        curr = curr.next;
    }
    return dummy.next;
};