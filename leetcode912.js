/**
 * @param {number[]} nums
 * @return {number[]}
 */
// 冒泡
var sortArray = function (nums) {
    if (!Array.isArray(nums)) {
        return;
    }
    const length = nums.length - 1;
    for (let i = 0; i < length; i++) {
        let flag = true;
        for (let j = 0; j < length - i; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                flag = false;
            }
        }
        if (flag) {
            break;
        }
    }
    return nums;
};
console.log(sortArray([3, 2, 1]));
// 冒泡排序 内外都加了优化
var sortArray = function (nums) {
    if (!Array.isArray(nums)) {
        return;
    }
    let lastIndex = nums.length - 1;// 最后执行交换的元素 该元素后面都是有序的
    while (lastIndex > 0) {
        let flag = true, k = lastIndex;
        for (let j = 0; j < k; j++) {
            if (nums[j] > nums[j + 1]) {
                [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
                flag = false;
                lastIndex = j;
            }
        }
        if (flag) {
            break;
        }
    }
    return nums;
};
// 选择排序
var sortArray = function (nums) {
    if (!Array.isArray(nums)) {
        return;
    }
    const length = nums.length;
    for (let i = 0; i < length - 1; i++) {
        let minIndex = i;
        for (let j = i + 1; j < length; j++) {
            if (nums[j] < nums[minIndex]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            [nums[minIndex], nums[i]] = [nums[i], nums[minIndex]];
        }
    }
    return nums;
};
console.log(sortArray([3, 2, 1]));
// 插入排序
var sortArray = function (nums) {
    const length = nums.length;
    for (let i = 1; i < length; i++) {
        const temp = nums[i];

        let j = i;
        while (j > 0 && temp < nums[j - 1]) {
            nums[j] = nums[j - 1];
            j--;
        }
        if (j !== i) {
            nums[j] = temp;
        }
    }
    return nums;
};
console.log(sortArray([3, 2, 1]));

//
var sortArray = function (nums) {

};

// 快速排序
var sortArray = function (nums) {
    const partitions = (nums, start, end) => {
        let pivot = nums[start];
        // 当start = end的时候停止循环
        while (start < end) {
            while (nums[end] >= pivot && start < end) {
                end--;
            }
            // 这时候end指针指向的元素小于基准值 或者start与end相遇
            nums[start] = nums[end];

            while (nums[start] < pivot && start < end) {
                start++;
            }
            nums[end] = nums[start];
        }
        nums[start] = pivot;
        return start;
    }
    const quickSort = (nums, start, end) => {
        if (nums.length <= 1 || start > end) {
            return;
        }
        const mid = partitions(nums, start, end);
        quickSort(nums, start, mid - 1);
        quickSort(nums, mid + 1, end);
    }


    const length = nums.length;
    if (!Array.isArray(nums)) {
        return;
    }
    if (length <= 1) {
        return nums;
    }
    quickSort(nums, 0, length - 1);
    return nums;
};



// 堆排序，超时

class minHeap {
    constructor() {
        this.heap = []; //数组来维护最小堆
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
        if (this.heap[parentIndex] > this.heap[i]) {
            this.swap(parentIndex, i);
            this.shiftUp(parentIndex);
        }
    }

    shiftDown(i) {
        if (i >= this.heap.length) return;
        const leftIndex = this.getLeftChildIndex(i);
        const rightIndex = this.getRightChildIndex(i);
        // 比如 7 2 1的时候，经过下面的两次交换，可以变成 1 7 2
        if (this.heap[leftIndex] < this.heap[i]) {
            this.swap(leftIndex, i);
            this.shiftDown(leftIndex);
        }
        if (this.heap[rightIndex] < this.heap[i]) {
            this.swap(rightIndex, i);
            this.shiftDown(rightIndex);
        }
    }

    insert(val) {
        this.heap.push(val);
        this.shiftUp(this.heap.length - 1);
    }

    pop() {
        if (this.heap.length === 0) return;
        const temp = this.heap[0];
        this.heap[0] = this.heap.pop();
        this.shiftDown(0);
        return temp;
    }

    peek() {
        if (this.heap.length === 0) return;
        return this.heap[0];
    }
}

//
var sortArray = function (nums) {
    const minheap = new minHeap();
    const length = nums.length;
    for (let i = 0; i < length; i++) {
        minheap.insert(nums[i]);
    }
    let res = [];
    for (let i = 0; i < length; i++) {
        res.push(minheap.pop());
    }
    return res;
};
console.log(sortArray([4, 1, 4, 6]));

