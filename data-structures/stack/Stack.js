const {Node} = require("../singly-linked-list/Node");

class Stack {
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value) {
        const node = new Node(value);

        if (this.size === 0) {
            this.last = node;
        } else {
            node.next = this.first;
        }

        this.first = node;
        this.size++;

        return this;
    }

    pop() {
        if (this.size === 0) {
            return undefined;
        }

        const removedNode = this.first;
        this.first = removedNode.next;
        removedNode.next = null;
        this.size--;

        if (this.size === 0) {
            this.last = null;
        }

        return removedNode.value;
    }
}

module.exports = {Stack};