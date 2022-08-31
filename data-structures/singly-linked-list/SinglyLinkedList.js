const {Node} = require("./Node");

class SinglyLinkedList {
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
        }

        this.tail = node;
        this.length++;

        return this;
    }

    pop() {
        if (this.length === 0) {
            return undefined;
        }

        const oldTail = this.tail;

        if (this.length === 1) {
            this.head = null;
            this.tail = null;
        } else {
            let newTail = this.head;

            while (newTail.next !== oldTail) {
                newTail = newTail.next;
            }

            newTail.next = null;
            this.tail = newTail;
        }

        this.length--;

        return oldTail.value;
    }

    unshift(value) {
        const node = new Node(value);

        if (this.length === 0) {
            this.tail = node;
        } else {
            node.next = this.head;
        }

        this.head = node;
        this.length++;

        return this;
    }

    shift() {
        if (this.length === 0) {
            return undefined;
        }

        const oldHead = this.head;
        this.head = this.head.next;
        oldHead.next = null;
        this.length--;

        if (this.length === 0) {
            this.tail = null;
        }

        return oldHead.value;
    }

    get(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return undefined;
        }

        let node = this.head;
        for (let i = 1; i <= idx; i++) {
            node = node.next;
        }

        return node.value;
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

module.exports = {SinglyLinkedList};