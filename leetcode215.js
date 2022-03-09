// class minHeap {
//     constructor() {
//         this.heap = []; //数组来维护最小堆
//     }

//     getParentNodeIndex(i) {
//         return Math.floor((i - 1) / 2);
//     }
//     getLeftChildIndex(i) {
//         return 2 * i + 1;
//     }

//     getRightChildIndex(i) {
//         return 2 * i + 2;
//     }

//     swap(i, j) {
//         [this.heap[i], this.heap[j]] = [this.heap[j], this.heap[i]];
//     }

//     shiftUp(i) {
//         if (i <= 0) return;
//         const parentIndex = this.getParentNodeIndex(i);
//         if (this.heap[parentIndex] > this.heap[i]) {
//             this.swap(parentIndex, i);
//             this.shiftUp(parentIndex);
//         }
//     }

//     shiftDown(i) {
//         if (i >= this.heap.length) return;
//         const leftIndex = this.getLeftChildIndex(i);
//         const rightIndex = this.getRightChildIndex(i);
//         // 比如 7 2 1的时候，经过下面的两次交换，可以变成 1 7 2
//         if (this.heap[leftIndex] < this.heap[i]) {
//             this.swap(leftIndex, i);
//             this.shiftDown(leftIndex);
//         }
//         if (this.heap[rightIndex] < this.heap[i]) {
//             this.swap(rightIndex, i);
//             this.shiftDown(rightIndex);
//         }
//     }

//     insert(val) {
//         this.heap.push(val);
//         this.shiftUp(this.heap.length - 1);
//     }

//     pop() {
//         if (this.heap.length === 0) return;
//         this.heap[0] = this.heap.pop();
//         this.shiftDown(0);
//     }

//     peek() {
//         if (this.heap.length === 0) return;
//         return this.heap[0];
//     }
// }
// /**
//  * @param {number[]} nums
//  * @param {number} k
//  * @return {number}
//  */
// var findKthLargest = function (nums, k) {
//     const minheap = new minHeap();
//     nums.forEach(num => {
//         minheap.insert(num);
//         if (minheap.heap.length > k) {
//             minheap.pop();
//         }
//     });
//     return minheap.peek();
// };


// console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6], 4));


/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    if (!Array.isArray(nums) || nums.length < 1) {
        return -1;
    }
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
    let start = 0, end = nums.length - 1;
    k = nums.length - k;
    while (start <= end) {
        const mid = partitions(nums, start, end);
        if (mid < k) {
            start = mid + 1;
        } else if (mid > k) {
            end = mid - 1;
        } else {
            return nums[mid];
        }
    }
    return -1;
};


console.log(findKthLargest([1], 1));