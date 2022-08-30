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

    pop(){}

    unshift(value){}

    shift(){}

    get(idx){}

    set(idx, value){}

    insert(idx, value){}

    remove(idx){}

    reverse(){}
}

module.exports = {SinglyLinkedList};