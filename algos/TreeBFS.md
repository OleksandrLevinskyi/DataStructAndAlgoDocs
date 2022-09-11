# Tree Breadth-First Search (BFS)
Breadth-First Search traverses all nodes in a tree from top to bottom.\
The node's structure can be found [here](binary-search-tree/Node.js).

### `bfs (root: Node): Array<number>`
#### TIME: `O(n)` | SPACE: `O(n)`
* create a `queue`
* create `arr` to store visited values
* place `root` in `queue`
* while `queue` is not empty
    * dequeue a node from `queue`
    * push the removed node's value into `arr`
    * if the dequeued node has `left` or `right`
        * enqueue those into `queue`
* return `arr` of retrieved node values

---

&copy; Oleksandr Levinskyi - 2022
