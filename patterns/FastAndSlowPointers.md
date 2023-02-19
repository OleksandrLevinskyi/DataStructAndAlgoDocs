# Fast & Slow Pointers (aka Hare & Tortoise algorithm)
<img src="https://github.com/OleksandrLevinskyi/DataStructAndAlgoDocs/blob/main/patterns/images/fast-and-slow-pointers.png" alt="fast and slow pointers" width="300"/>

### Description:
* two pointers which move through the array (or sequence/linked list) at different speeds
* useful when dealing with cyclic linked lists or arrays
* by moving at different speeds (say, in a cyclic linked list), the algorithm proves that the two pointers are bound to meet
* the fast pointer should catch the slow pointer once both the pointers are in a cyclic loop

### To identify:
* loop in a linked list or array
* need to know a position of a certain element or the overall length of the linked list
* determine if a linked list is a palindrome

### Do not use for:
* singly linked list because of inability to move backwards

### Common problems:
* linked list cycle (easy)
* palindrome linked list (medium)
* cycle in a circular array (hard)

### LeetCode:
Problem:
Solution: