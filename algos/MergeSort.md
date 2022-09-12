# Merge Sort
Merge Sort splits an array into halves and merges the sorted parts.

### `mergeSort (arr: Array<number>): Array<number>`
#### TIME: `O(nlogn)` | SPACE: `O(n)`
* find the `middleIdx`
* if `middleIdx` is 0
    * return passed `arr`
* call `merge` helper to merge two sub-arrays split by `middleIdx` (call `mergeSort` recursively)
* return the result returned from `merge` function call

---

### Helper Function:

### `merge (arr1: Array<number>, arr2: Array<number>): Array<number>`
#### TIME: `O(n)` | SPACE: `O(1)`
* create two pointer for each array
* create `arr` to be returned
* use 3 loops to merge two sorted arrays
* return `arr`

---

&copy; Oleksandr Levinskyi - 2022