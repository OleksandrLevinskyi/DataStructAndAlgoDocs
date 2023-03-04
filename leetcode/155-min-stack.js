// TIME: O(1)
// SPACE: O(1)
class MinStack {
    constructor () {
        this.head = null;
    }

    push (value) {
        const newHead = new Node(value);

        if (this.head === null) {
            newHead.min = value;
        } else {
            newHead.min = Math.min(this.head.min, value);
            newHead.next = this.head;
        }
        
        this.head = newHead;
    }

    pop () {
        const oldHead = this.head;
        this.head = oldHead.next;

        return oldHead.value;
    }

    top () {
        return this.head.value;
    }

    getMin () {
        return this.head.min;
    }
}

class Node {
    constructor (value) {
        this.value = value;
        this.min = +Infinity;
        this.next = null;
    }
}
