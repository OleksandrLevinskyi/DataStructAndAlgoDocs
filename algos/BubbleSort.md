# Bubble Sort
Bubbles up the biggest value to the end.

### `bubbleSort (arr: Array<number): Array<number>`*
#### TIME: `O(n^2)` | SPACE: `O(n)`
* loop backwards to shrink the array size/scope
    * loop over each value in a new subarray scope
        * find new `maxValueIdx`
    * swap the last value in the subarray with one under `maxValueIdx`
* return modified `arr` with sorted values 

---

&copy; Oleksandr Levinskyi - 2022