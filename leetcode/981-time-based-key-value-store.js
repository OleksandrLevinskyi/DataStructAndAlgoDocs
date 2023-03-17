// SPACE: O(n)
class TimeMap {
    constructor () {
        this.store = {}
    }

    // TIME: O(logn)
    get (key, timestamp) {
        let result = '';
        let arr = this.store[key];
        let leftIdx = 0;
        let rightIdx;
        let middleIdx;

        if (!arr) {
            return '';
        }

        rightIdx = this.store[key].length - 1;

        while (leftIdx <= rightIdx) {
            arr = this.store[key];
            middleIdx = Math.floor((leftIdx + rightIdx) / 2);

            if (arr[middleIdx][1] === timestamp) {
                return arr[middleIdx][0];
            }

            if (arr[middleIdx][1] < timestamp) {
                result = arr[middleIdx][0];
                leftIdx = middleIdx + 1;
            } else {
                rightIdx = middleIdx - 1;
            }
        }

        return result;
    }

    // TIME: O(1)
    set (key, value, timestamp) {
        if (!this.store[key]) {
            this.store[key] = [];
        }

        this.store[key].push([value, timestamp]);
    }
}
