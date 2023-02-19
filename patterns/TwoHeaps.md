# Two Heaps
<img src="https://github.com/OleksandrLevinskyi/DataStructAndAlgoDocs/blob/main/patterns/images/two-heaps.png" alt="two heaps" width="300"/>

### Description:
* uses two heaps: a min heap to find the smallest element and a max heap to find the biggest
* stores the first half of numbers in a max heap to find the largest number in the first half
* stores the second half of numbers in a min heap to find the smallest number in the second half
* the median of the current list of numbers can be calculated from the top element of the two heaps at any time

### To identify:
* given set of elements can be divided into 2 parts
* interested in knowing the smallest element in one part and the biggest element in the other part
* priority queue or scheduling
* find the smallest/largest/median elements of a set
* sometimes useful with binary trees

### Common problems:
* find the median of a number stream (medium)

### LeetCode:
Problem:
Solution: