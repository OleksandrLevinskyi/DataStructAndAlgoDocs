# Priority Queue
Priority Queue consists of nodes. The node's structure can be found [here](priority-queue/Node.js).\
This Priority Queue follows the same logic as Min Binary Heap.
1 property: `values`

### `enqueue (value, priority): this`
#### TIME: `O(log n)` | SPACE: `O(1)`
* create a new node to push into `values`
* create `currIdx = values.length - 1` to point to the inserted value
* create `parentIdx = Math.floor((currIdx - 1) / 2)` to point to the inserted value's parent
* loop through `values` to bubble up the inserted value
* return `this`

### `dequeue (): number|underfined`
#### TIME: `O(log n)` | SPACE: `O(1)`
* create `parentIdx = 0`, `leftChildIdx`, `rightChildIdx`, `minValueIdx` pointers
* create `deletedValue`, `arr` variables
* if `arr.length` is 0
    * return `undefined`
* swap first and last elements in `values`
* pop the last element in `arr` (store the removed node's value in `deletedValue`)
* while `minValueIdx` is not `null`
    * calculate `leftChildIdx` and `rightChildIdx`
    * assign `minValueIdx` to `null`
    * if `leftChildIdx < arr.length`
        * if left child is less than parent
            * `minValueIdx` is `leftChildIdx`
    * if `rightChildIdx < arr.length`
        * if (`minValueIdx` is `null` AND right child is less than parent) OR
          (`minValueIdx` is not `null` AND right child is less than left one)
            * `minValueIdx` is `rightChildIdx`
    * if `minValueIdx` is not `null`
        * swap elements under `parentIdx` and `minValueIdx`
    * assign `parentIdx` to `minValueIdx`
* assign `values` to `arr`
* return `deletedValue`

---

&copy; Oleksandr Levinskyi - 2022
