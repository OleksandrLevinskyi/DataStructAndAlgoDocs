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
        let parentIdx = 0;
        let leftChildIdx;
        let rightChildIdx;
        let maxValueIdx;
        let deletedValue;
        let arr = this.values;

        if (arr.length === 0) {
            return undefined;
        }

        const temp = arr[arr.length - 1];
        arr[arr.length - 1] = arr[0];
        arr[0] = temp;

        deletedValue = arr.pop();

        while (maxValueIdx !== null) {
            leftChildIdx = parentIdx * 2 + 1;
            rightChildIdx = parentIdx * 2 + 2;
            maxValueIdx = null;

            if (leftChildIdx < arr.length) {
                if (arr[leftChildIdx] > arr[parentIdx]) {
                    maxValueIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < arr.length) {
                if ((maxValueIdx === null && arr[rightChildIdx] > arr[parentIdx]) ||
                    (maxValueIdx !== null && arr[rightChildIdx] > arr[leftChildIdx])) {
                    maxValueIdx = rightChildIdx;
                }
            }

            if (maxValueIdx) {
                const temp = arr[parentIdx];
                arr[parentIdx] = arr[maxValueIdx];
                arr[maxValueIdx] = temp;

                parentIdx = maxValueIdx;
            }
        }

        this.values = arr;

        return deletedValue;
    }
}

module.exports = {BinaryHeap};