# Top K elements
<img src="https://github.com/OleksandrLevinskyi/DataStructAndAlgoDocs/blob/main/patterns/images/top-k-elements.png" alt="top k elements" width="300"/>

### Description:
* uses of a heap to solve problems dealing with ‘k’ elements at a time from a set of given elements
* inserts ‘k’ elements into the min-heap or max-heap based on the problem
* iterates through the remaining numbers and if the current one is larger than the one in the heap, then removes that number and inserts the larger one
* no need for a sorting algorithm because the heap will keep track of the elements

### To identify:
* find the top/smallest/frequent ‘K’ elements in a given set
* when asked to sort an array to find an exact element

### Common problems:
* top ‘k’ numbers (easy)
* top ‘k’ frequent numbers (medium)

### LeetCode:
Problem:
Solution: