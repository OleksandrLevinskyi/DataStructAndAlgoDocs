# Radix Sort
Radix Sort sorts by arranging numbers based on their digits.

### `radixSort (arr: Array<number): Array<number>`*
#### TIME: `O(nk)` | SPACE: `O(n)`
* create an array as a bucket storage
* get maximum digit count
* loop to change the index of digits
    * loop over `arr` to place each number in a bucket according to the digit index
    * concatenate buckets into a single array (put the result into `arr`)
* return modified `arr` with sorted values 

---

### Helper Functions:

### `getDigit (num: number, idx: number): number`
#### TIME: `O(n)` | SPACE: `O(1)`
* return the digit under idx (starting from the end)

### `digitCount (num: number): number`
#### TIME: `O(n)` | SPACE: `O(1)`
* return the number of digits in `num`

### `maxDigitCount (nums: Array<number>): number`
#### TIME: `O(n)` | SPACE: `O(1)`
* return the largest number of digits encountered (with the help of `digitCount`)

---

&ast; n - length of the array; k - max number of digits in a number

&copy; Oleksandr Levinskyi - 2022