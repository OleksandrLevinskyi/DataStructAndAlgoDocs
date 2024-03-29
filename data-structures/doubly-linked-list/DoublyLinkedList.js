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
        if (idx < 0 || idx > this.length) {
            return false;
        }

        if (idx === 0) {
            this.unshift(value);
        } else if (idx === this.length) {
            this.push(value);
        } else {
            const node = new Node(value);
            const prevNode = this.get(idx - 1);

            prevNode.next.prev = node;
            node.prev = prevNode;
            node.next = prevNode.next;
            prevNode.next = node;

            this.length++
        }

        return true;
    }

    remove(idx) {
        if (idx < 0 || idx > this.length - 1) {
            return undefined;
        }

        if (idx === 0) {
            return this.shift();
        }

        if (idx === this.length - 1) {
            return this.pop();
        }

        const prevNode = this.get(idx - 1);
        const removedNode = prevNode.next;

        removedNode.next.prev = prevNode;
        removedNode.prev = null;
        prevNode.next = removedNode.next;
        removedNode.next = null;

        this.length--;

        return removedNode.value;
    }

    reverse() {
        const middle = Math.floor(this.length / 2);

        const temp = this.head;
        this.head = this.tail;
        this.tail = temp;

        let start = this.head;
        let end = this.tail;

        for (let i = 0; i < middle; i++) {
            let temp = start.next;
            start.next = start.prev;
            start.prev = temp;

            temp = end.next;
            end.next = end.prev;
            end.prev = temp;

            start = start.next;
            end = end.prev;
        }

        return this;
    }
}

module.exports = {DoublyLinkedList};