# Quick Sort
Quick Sort works by placing pivots in an array until sorted.

### `quickSort (arr: Array<number>, start: number = 0, end: number = arr.length - 1): Array<number>`
#### TIME: `O(n^2)` | SPACE: `O(1)`
* create `start` and `end` pointers
* if `start` is less than `end`
    * call `placePivot` helper
    * recursively call `quickSort` on both sides of the pivot
* return modified `arr` with sorted values 

---

### Helper Function:

### `placePivot (arr: Array<number>, start: number = 0, end: number = arr.length - 1): number`
#### TIME: `O(n)` | SPACE: `O(1)`
* create `pivotIdx = start`
* loop from `start` to `end` inclusively
    * if element's value under `pivotIdx` is greater than the current element
        * increment `pivotIdx` by one
    * swap elements under `start` and `pivotIdx`
* return `pivotIdx`

---

&copy; Oleksandr Levinskyi - 2022