# Binary Heap
This is Max Binary Heap Implementation. Min Binary Heap follows the same logic, but with reversed conditions.
1 property: `values`

### `insert (value): this`
#### TIME: `O(log n)` | SPACE: `O(1)`
* push given `value` into `values`
* create `currIdx = values.length - 1` to point to the inserted value
* create `parentIdx = Math.floor((currIdx - 1) / 2)` to point to the inserted value's parent
* loop through `values` to bubble up the inserted value
* return `this`

### `extractMax (): number|underfined`
#### TIME: `O(log n)` | SPACE: `O(1)`
* create `parentIdx = 0`, `leftChildIdx`, `rightChildIdx`, `maxValueIdx` pointers
* create `deletedValue`, `arr` variables
* if `arr.length` is 0
    * return `undefined`
* swap first and last elements in `values`
* pop the last element in `arr` (store the removed value in `deletedValue`)
* while `maxValueIdx` is not `null`
    * calculate `leftChildIdx` and `rightChildIdx`
    * assign `maxValueIdx` to `null`
    * if `leftChildIdx < arr.length`
        * if left child is greater than parent
            * `maxValueIdx` is `leftChildIdx`
    * if `rightChildIdx < arr.length`
        * if (`maxValueIdx` is `null` AND right child is greater than parent) OR
          (`maxValueIdx` is not `null` AND right child is greater than left one)
            * `maxValueIdx` is `rightChildIdx`
    * if `maxValueIdx` is not `null`
        * swap elements under `parentIdx` and `maxValueIdx`
    * assign `parentIdx` to `maxIdx`
* assign `values` to `arr`
* return `deletedValue`

---

&copy; Oleksandr Levinskyi - 2022
