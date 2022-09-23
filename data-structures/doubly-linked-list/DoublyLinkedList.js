const {Node} = require("./Node");

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.head = node;
        } else {
            this.tail.next = node;
            node.prev = this.tail;
        }

        this.tail = node;
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const removedNode = this.tail;

        this.tail = this.tail.prev;
        removedNode.prev = null;
        this.length--;

        if (this.length === 0) {
            this.head = null;
        } else {
            this.tail.next = null;
        }

        return removedNode.value;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.tail = node;
        } else {
            node.next = this.head;
            this.head.prev = node;
        }

        this.head = node;
        this.length++;

        return this;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const removedNode = this.head;

        this.head = this.head.next;
        removedNode.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        } else {
            this.head.prev = null;
        }

        return removedNode.value;
    }

    get(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return undefined;
        }

        const middleIdx = Math.floor(this.length / 2);
        let foundNode = idx < middleIdx ? this.head : this.tail;

        if (idx < middleIdx) {
            for (let i = 0; i < idx; i++) {
                foundNode = foundNode.next;
            }
        } else {
            for (let i = this.length - 1; i > idx; i--) {
                foundNode = foundNode.prev;
            }
        }

        return foundNode;
    }

    set(idx, value) {
        const node = this.get(idx);

        if (!node) {
            return false;
        }

        node.value = value;

        return true;
    }

    insert(idx, value) {
    }

    remove(idx) {
    }

    reverse() {
    }
}

module.exports = {DoublyLinkedList};