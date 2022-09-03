# Binary Search Tree
Binary Search Tree consists of nodes. The node's structure can be found [here](binary-search-tree/Node.js).\
1 property: `root`

### `insert (root, value): this`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `root` is `null`
    * return a new node
* else if `value` is less than `root.value`
    * assign `root.left` to a result of a recursive `insert` call with `root.left`
* else if `value` is more than `root.value`
    * assign `root.right` to a result of a recursive `insert` call with `root.right`
* return `root`

### `remove (value): number|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `root` is `null`
    * return `undefined`
* else if `value` is less than `root.value`
    * assign `root.left` to a result of a recursive `remove` call with `root.left`
* else if `value` is more than `root.value`
    * assign `root.right` to a result of a recursive `remove` call with `root.right`
* else
    * if `root` has no children
        * assign `root` to `null`
    * else if `root` has right child
        * assign `root` to its right child
    * else if `root` has left child
      * assign `root` to its left child
    * else (meaning `root` has 2 children)
      * find a node with maximum value in the left subtree of the `root`
        * create a recursive helper function for this
      * assign `root.value` to the found node's `value`
      * assign `root.left` to a result of a recursive `remove` call with `root.left` and the found node's `value`
* return `root`

### `find (value): Node|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `root` is `null`
    * return `undefined`
* if `value` is less than `root.value`
    * return a result of a recursive `find` call with `root.left`
* if `value` is greater than `root.value`
    * return a result of a recursive `find` call with `root.right`
* return `root`

---

&copy; Oleksandr Levinskyi - 2022
