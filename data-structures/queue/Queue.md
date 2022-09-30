# Queue
Queue consists of nodes. The node's structure can be found [here](../singly-linked-list/Node.js).\
FIFO = First In First Out\
3 properties: `first`, `last`, `size`

### `enqueue (value): this`*
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `size` is 0
    * set `first` and `last` to be the new node
* else
    * set the new node's `next` to be `first`
    * set `first` to be the new node
* increment `size`
* return `this`

### `dequeue (): number|underfined`**
#### TIME: `O(1)` | SPACE: `O(1)`
* same as [pop() in Stack](../stack/Stack.md)

---

&ast; same as `push` in Singly Linked List\
&ast;&ast; same as `shift` in Singly Linked List
  
&copy; Oleksandr Levinskyi - 2022
