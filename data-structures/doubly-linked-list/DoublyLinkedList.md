# Doubly Linked List
Doubly Linked List consists of nodes. The node's structure can be found [here](Node.js).\
Doubly Linked List takes up more memory for an extra pointer.\
3 properties: `head`, `tail`, `length`

---

### `push (value): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `length` is 0
  * set `head` to be the new node
* else
  * set `tail.next` to be the new node
  * set new node's `next` property to be `tail`
* set `tail` to be the new node
* increment `length`
* return `this`

### `pop (): number|underfined`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `length` is 0
  * return `underfined`
* store current `tail` in a variable
* set `tail` to the 2nd last node
* set old tail's `prev` to `null`
* decrement `length`
* if `length` is 0
  * set `head` to `null`
* else
  * set `tail.next` to `null`
* return `value` of the previously stored `tail`

### `unshift (value): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `length` is 0
  * set `tail` to be the new node
* else
  * set new node's `next` to be `head`
  * set `head.prev` to be the new node
* set `head` to be the new node
* increment `length`
* return `this`

### `shift (): number|underfined`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `length` is 0
  * return `underfined`
* store current `head` in a variable
* set `head` to the 2nd node
* set old head's `next` to `null`
* decrement `length`
* if `length` is 0
  * set `tail` to `null`
* else
  * set `head.prev` to `null`
* return `value` of the previously stored `head`

### `get (idx): Node|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length - 1`
  * return `undefined`
* find the middle of the list to determine the iteration direction 
* loop though the list to return a node under `idx`

### `set (idx, value): bool`
#### TIME: `O(n)` | SPACE: `O(1)`
* use `get(idx)` to find a node to change
* if nothing found
  * return `false`
* set found node's `value` to the provided one
* return `true`

### `insert (idx, value): bool`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length`
  * return `false`
* if `idx` is 0
  * use `unshift(value)`
* else if `idx` points to last element
  * use `push(value)`
* else
  * create a new node
  * use `get(idx - 1)` to get a preceding node
  * set `prev` of a node (after the preceding one) to the new node
  * set new node's `prev` to the preceding node
  * set new node's `next` to preceding node's `next`
  * set preceding node's `next` to the new node
  * increase `length`
* return `true`

### `remove (): number|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length - 1`
  * return `undefined`
* if `idx` is 0
  * return a result from `shift()`
* if `idx` points to the last element
  * return a result from `pop()`
* use `get(idx - 1)` to get a preceding node
* store a node to delete in a variable
* set `prev` of the node (after the one to delete) to the preceding node
* set `prev` of the node (to be deleted) to `null`
* set preceding node's `next` to deleted node's `next`
* set deleted node's `next` to `null`
* decrease `length`
* return deleted node's `value`

### `reverse (): this`
#### TIME: `O(n)` | SPACE: `O(1)`
* find `middle`
* swap `head` and `tail`
* create two pointers for start and end
* iterate over the list (up to the middle) to swap nodes' `prev`/`next` properties
* return `this`

---

&copy; Oleksandr Levinskyi - 2022
