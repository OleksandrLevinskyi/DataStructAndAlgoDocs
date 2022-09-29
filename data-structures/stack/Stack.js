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
    }
}

module.exports = {Stack};