# Stack
Stack consists of nodes. The node's structure can be found [here](singly-linked-list/Node.js).\
LIFO = Last In First Out\
3 properties: `first`, `last`, `size`

### `push (value): this`*
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `size` is 0
    * set `first` and `last` to be the new node
* else
    * set the new node's `next` to be `first`
    * set `first` to be the new node
* increment `size`
* return `this`

### `pop (): number|underfined`**
#### TIME: `O(1)` | SPACE: `O(1)`
* if `size` is 0
    * return `underfined`
* store current `first` in a variable
* set `first` to the 2nd node
* set `next` on the 1st node to `null`
* decrement `size`
* return `value` of the previously stored `first`

---

&ast; same as `unshift` in Singly Linked List\
&ast;&ast; same as `shift` in Singly Linked List
  
&copy; Oleksandr Levinskyi - 2022
