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

        const removedNode = this.tail.value;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            this.tail = this.tail.prev;
            this.tail.next.prev = null;
            this.tail.next = null;
        }

        this.length--;

        return removedNode;
    }

    unshift(value) {
    }

    shift() {
    }

    get(idx) {
    }

    set(idx, value) {
    }

    insert(idx, value) {
    }

    remove(idx) {
    }

    reverse() {
    }
}

module.exports = {DoublyLinkedList};