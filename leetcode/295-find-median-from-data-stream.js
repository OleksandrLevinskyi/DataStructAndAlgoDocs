// TIP: use max & min heaps; split the array in half
// EXAMPLE: [3, 2, 7, 4, findMedian]
class MedianFinder {
    constructor(){
        this.maxHeap = new MaxHeap(); // max heap for the first half
        this.minHeap = new MaxHeap(); // min heap for the second half
    }

    // TIME: O(logn)
    // SPACE: O(1)
    addNum(num) {
        this.maxHeap.insert(num);

        if (
            this.maxHeap.length() > 0 && this.minHeap.length() > 0 && 
            this.maxHeap.peak() > this.minHeap.peak()
        ) {
            const i = this.maxHeap.extractMax();
            this.minHeap.insert(-i);
        }

        if (this.maxHeap.length() + 1 < this.minHeap.length()) {
            const i = this.minHeap.extractMax();
            this.maxHeap.insert(-i);
        } else if (this.maxHeap.length() > this.minHeap.length() + 1) {
            const i = this.maxHeap.extractMax();
            this.minHeap.insert(-i);
        }
    }

    // TIME: O(1)
    // SPACE: O(1)
    findMedian() {
        if (this.maxHeap.length() > this.minHeap.length()) {
            return this.maxHeap.peak();
        }

        if (this.maxHeap.length() < this.minHeap.length()) {
            return -this.minHeap.peak();
        }

        return (this.maxHeap.peak() + (-this.minHeap.peak())) / 2;
    }
}

class MaxHeap {
    constructor() {
        this.values = [];
    }

    length() {
        return this.values.length;
    }

    peak() {
        return this.values[0];
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

        this.swap(arr, arr.length - 1, 0)

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
                this.swap(arr, parentIdx, maxValueIdx);

                parentIdx = maxValueIdx;
            }
        }

        this.values = arr;

        return deletedValue;
    }

    swap(arr, idx1, idx2) {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
}

class MinHeap {
    constructor() {
        this.values = [];
    }

    length() {
        return this.values.length;
    }

    peak() {
        return this.values[0];
    }

    insert(value) {
        this.values.push(value);

        let currIdx = this.values.length - 1;
        let parentIdx = Math.floor((currIdx - 1) / 2);

        while (this.values[currIdx] < this.values[parentIdx]) {
            const temp = this.values[parentIdx];
            this.values[parentIdx] = this.values[currIdx];
            this.values[currIdx] = temp;

            currIdx = parentIdx;
            parentIdx = Math.floor((currIdx - 1) / 2);
        }

        return this;
    }

    extractMin() {
        let parentIdx = 0;
        let leftChildIdx;
        let rightChildIdx;
        let minValueIdx;
        let deletedValue;
        let arr = this.values;

        if (arr.length === 0) {
            return undefined;
        }

        this.swap(arr, arr.length - 1, 0)

        deletedValue = arr.pop();

        while (minValueIdx !== null) {
            leftChildIdx = parentIdx * 2 + 1;
            rightChildIdx = parentIdx * 2 + 2;
            minValueIdx = null;

            if (leftChildIdx < arr.length) {
                if (arr[leftChildIdx] < arr[parentIdx]) {
                    minValueIdx = leftChildIdx;
                }
            }

            if (rightChildIdx < arr.length) {
                if ((minValueIdx === null && arr[rightChildIdx] < arr[parentIdx]) ||
                    (minValueIdx !== null && arr[rightChildIdx] < arr[leftChildIdx])) {
                    minValueIdx = rightChildIdx;
                }
            }

            if (minValueIdx) {
                this.swap(arr, parentIdx, minValueIdx);

                parentIdx = minValueIdx;
            }
        }

        this.values = arr;

        return deletedValue;
    }

    swap(arr, idx1, idx2) {
        const temp = arr[idx1];
        arr[idx1] = arr[idx2];
        arr[idx2] = temp;
    }
}
