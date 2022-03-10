// 利用map.keys() 可以返回一个新的 Iterator对象。它包含按照顺序插入Map对象中每个元素的key值。
/**
 * @param {number} capacity
 */

class ListNode {
    constructor(key, value) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

class LRUCache {
    constructor(capacity) {
        this.capacity = capacity;
        this.mapper = new Map();
        this.dummyHead = new ListNode(null, null);
        this.dummyTail = new ListNode(null, null);
        this.dummyHead.next = this.dummyTail;
        this.dummyTail.prev = this.dummyHead;
    }

    isFull() {
        return this.capacity === this.mapper.size;
    }
    addToHead(node) {
        let temp = this.dummyHead.next;
        node.next = temp;
        temp.prev = node;
        node.prev = this.dummyHead;
        this.dummyHead.next = node;
    }

    removeNode(node) {
        node.prev.next = node.next;
        node.next.prev = node.prev;
        node.prev = null;
        node.next = null;
        return node;
    }
    get(key) {
        if (this.mapper.has(key)) {
            const node = this.mapper.get(key);
            this.addToHead(this.removeNode(node));
            return node.value;
        } else {
            return -1;
        }
    }
    put(key, value) {
        if (this.mapper.has(key)) {
            const node = this.mapper.get(key);
            node.value = value;
            this.addToHead(this.removeNode(node));
        } else {
            if (this.isFull()) {
                const node = this.dummyTail.prev;
                this.removeNode(node);
                this.mapper.delete(node.key);
            }
            const node = new ListNode(key, value);
            this.mapper.set(key, node);
            this.addToHead(node);
        }
    }

}

