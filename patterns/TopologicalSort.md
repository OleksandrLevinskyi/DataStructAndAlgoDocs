# Topological Sort
<img src="https://github.com/OleksandrLevinskyi/DataStructAndAlgoDocs/blob/main/patterns/images/topological-sort.png" alt="topological sort" width="300"/>

### Description:
* finds a linear ordering of elements that have dependencies on each other (i.e. if event ‘B’ is dependent on event ‘A’, ‘A’ comes before ‘B’)
* initialization: stores the graph in adjacency lists by using a hash map
* finds all sources: uses a hash map to keep the count of in-degrees (all vertices with 0 in-degrees will be sources and are stored in a queue)
* sorting: for each source, adds it to the sorted list, gets all of its children from the graph, decrements the in-degree of each child by 1 (if a child’s in-degree becomes 0, adds it to the sources queue).
* repeated until the source queue is empty

### To identify:
* graphs with no directed cycles
* update all objects in a sorted order
* a class of objects that follow a particular order

### Common problems:
* task scheduling (medium)
* minimum height of a tree (hard)

### LeetCode:
Problem:
Solution: