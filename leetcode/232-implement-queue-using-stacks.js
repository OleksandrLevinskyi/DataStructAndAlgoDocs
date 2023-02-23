class MyQueue {
    constructor () {
        this.stack1 = new MyStack();
        this.stack2 = new MyStack();
    }

    // TIME: O(n)
    // SPACE: O(n)
    push (value) {
        let poppedValue;

        while (!this.stack1.empty()) {
            poppedValue = this.stack1.pop();
            this.stack2.push(poppedValue);
        }

        this.stack1.push(value);

        while (!this.stack2.empty()) {
            poppedValue = this.stack2.pop();
            this.stack1.push(poppedValue);
        }
    }

    pop () {
        return this.stack1.pop();
    }

    peek () {
        return this.stack1.peek();
    }

    empty () {
        return this.stack1.empty();
    }
}

class MyStack {
    constructor () {
        this.values = [];
    }

    push (value) {
        this.values.push(value);
    }

    pop () {
        return this.values.pop();
    }

    peek () {
        return this.values[this.values.length - 1];
    }

    empty () {
        return this.values.length === 0;
    }
}
