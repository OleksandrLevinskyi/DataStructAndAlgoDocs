class BinaryHeap {
    constructor() {
        this.values = [];
    }

    insert(value) {
        this.values.push(value);

        let currIdx = this.values.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);

        while (this.values[currIdx] > this.values[parentIdx]) {
            const temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[currIdx];
            this.values[currIdx] = temp;

            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }

        return this;
    }

    extractMax() {

    }
}

module.exports = {BinaryHeap};