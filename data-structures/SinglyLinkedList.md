# Singly Linked List
Singly Linked List consists of nodes. Stack node's structure can be found [here](singly-linked-list/Node.js).\
3 properties: `head`, `tail`, `length`

---

### `push (value): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `length` is 0
    * set `head` to be the new node
* else
    * set `tail.next` to be the new node
* set `tail` to be the new node
* increment `length`
* return `this`

### `pop (): number|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `length` is 0
    * return `underfined`
* store current `tail` in a variable
* loop over to reach the 2nd last node 
* set `next` on the 2nd last node to `null`
* set `tail` to the 2nd last node
* decrement `length`
* return `value` of the previously stored `tail`

### `unshift (): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create a new node
* if `length` is 0
  * set `tail` to be the new node
* else
  * set `next` on the new node to be `head`
* set `head` to be the new node
* increment `length`
* return `this`

### `shift (): number|underfined`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `length` is 0
  * return `underfined`
* store current `head` in a variable
* set `head` to the 2nd node
* set `next` on the `head` to `null`
* decrement `length`
* if `length` is 0
  * set `tail` to `null`
* return `value` of the previously stored `head`

### `get (idx): Node|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length - 1`
  * return `undefined`
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
* else if `idx` points to the last element
  * return a result from `pop()`
* use `get(idx - 1)` to get a preceding node
* store a node to delete in a variable
* set preceding node's `next` to deleted node's `next`
* set deleted node's `next` to `null`
* decrease `length`
* return deleted node `value`

### `reverse (): this`
#### TIME: `O(n)` | SPACE: `O(1)`
* swap `head` and `tail`
* create 3 pointers: `prevNode = null`, `currNode = tail`, `nextNode = null`
* while `currNode` is not `null`
  * set `nextNode` to `currNode.next`
  * set `currNode.next` to `prevNode`
  * set `prevNode` to `currNode`
  * set `currNode` to `nextNode`
  
---
  
&copy; Oleksandr Levinskyi - 2022
