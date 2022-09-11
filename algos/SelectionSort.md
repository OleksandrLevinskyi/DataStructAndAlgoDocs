# Selection Sort
Selection sort finds the minimum values and places them at the beginning one by one.

### `selectionSort (arr: Array<number): Array<number>`*
#### TIME: `O(n^2)` | SPACE: `O(1)`
* create `minValueIdx`
* loop over the array to assign `minValueIdx` to the first element's index in the unsorted part of the array
    * loop over the unsorted portion of the array to find new `minValueIdx`
    * swap the first element in the unsorted array with one under `minValueIdx`
* return modified `arr` with sorted values 

---

&copy; Oleksandr Levinskyi - 2022