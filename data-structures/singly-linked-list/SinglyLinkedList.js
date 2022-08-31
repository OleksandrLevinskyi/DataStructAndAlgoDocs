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

        return node;
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
            const precedingNode = this.get(idx - 1);

            node.next = precedingNode.next;
            precedingNode.next = node;
            this.length++;
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

        const precedingNode = this.get(idx - 1);
        const deletedNode = precedingNode.next;

        precedingNode.next = deletedNode.next;
        deletedNode.next = null;
        this.length--;

        return deletedNode.value;
    }

    reverse() {
        const oldHead = this.head;
        this.head = this.tail;
        this.tail = oldHead;

        let prevNode = null;
        let currNode = this.tail;
        let nextNode = null;

        while (currNode) {
            nextNode = currNode.next;
            currNode.next = prevNode;
            prevNode = currNode;
            currNode = nextNode;
        }

        return this;
    }
}

module.exports = {SinglyLinkedList};