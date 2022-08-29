# Singly Linked List
3 properties: `head`, `tail`, `length`

## `push (value): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create new node
* if `length` is 0
    * set `head` and `tail` to be the new node
* else
    * set `tail` to be the new node
* increment `length`
* return `this`

## `pop (): number|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `length` is 0
    * return `underfined`
* store current `tail` in a variable
* use `while` loop to reach the 2nd last node
* set `next` on the 2nd last node to `null`
* set `tail` to the 2nd last node
* decrement `length`
* return `value` of the previously stored `tail`

## `unshift (): this`
#### TIME: `O(1)` | SPACE: `O(1)`
* create new node
* if `length` is 0
  * set `head` and `tail` to be the new node
* else
  * set `next` on the new node to be `head`
  * set `head` to be the new node
* increment `length`
* return `this`

## `shift (): number|underfined`
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

## `get (idx): Node|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length - 1`
  * return `undefined`
* loop though the list to return node under `idx`

## `set (idx, value): bool`
#### TIME: `O(n)` | SPACE: `O(1)`
* use `get` method to find node under `idx`
* if nothing found
  * return `false`
* set found node's `value` to provided one
* return `true`

## `insert (idx, value): bool`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length`
  * return `false`
* if `idx` is 0
  * use `unshift(value)`
* else if `idx` points to last element
  * use `push(value)`
* else
  * create new node
  * use `get(idx - 1)` to get preceding node
  * set `next` of new node to preceding node's `next`
  * set `next` of preceding node to new node
  * increase `length`
* return `true`

## `remove (): number|underfined`
#### TIME: `O(n)` | SPACE: `O(1)`
* if `idx` is less than 0 or more than `length`
  * return `undefined`
* if `idx` is 0
  * return result from `shift()`
* else if `idx` points to last element
  * return result from `pop()`
* use `get(idx - 1)` to get preceding node
* store node to be deleted in a variable
* set `next` of preceding node to deleted node's `next`
* set `next` of deleted node to `null`
* decrease `length`
* return `value` of deleted node

## `reverse (): this`
#### TIME: `O(n)` | SPACE: `O(1)`
* swap `head` and `tail`
* create 3 pointers: `prevNode = null`, `currNode = tail`, `nextNode = null`
* while `currNode` is not `null`
  * set `nextNode` to `currNode.next`
  * set `currNode.next` to `prevNode`
  * set `prevNode` to `currNode`
  * set `currNode` to `nextNode`
  
&copy; Oleksandr Levinskyi - 2022
