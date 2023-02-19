## K-way Merge
<img src="https://github.com/OleksandrLevinskyi/DataStructAndAlgoDocs/blob/main/patterns/images/k-way-merge.png" alt="k-way merge" width="300"/>

### Description:
* uses a heap to efficiently perform a sorted traversal of all the elements of all arrays
* inserts the first element of each array in a min heap
* takes out the smallest (top) element from the heap and adds it to the merged list
* afterwards inserts the next element of the same list into the heap.
* repeats the steps until the given set is sorted

### To identify:
* involve a set of sorted arrays, lists, or a matrix
* merge sorted lists
* find the smallest element in a sorted list

### Common problems:
* merge k sorted lists (medium)
* k pairs with largest sums (hard)

### LeetCode:
Problem: [23. Merge k Sorted Lists](https://leetcode.com/problems/merge-k-sorted-lists/)
Solution: [Solution]()