# Weighted Graph
Weighted Graph stores connections between vertices with attached weight.\
1 property: `adjacencyList`

### `addVertex (vertex): void`*
#### TIME: `O(1)` | SPACE: `O(1)`
* if `vertex` does not exist
    * add a key of `vertex` to `adjacencyList` with a value of `[]`

### `addEdge (vertex1, vertex2, weight): void`
#### TIME: `O(E)` | SPACE: `O(1)`
* if both vertices exist and do not have a connection yet
    * push `{value: vertex1, weight}` into `adjacencyList[vertex2]`
    * push `{value: vertex2, weight}` into `adjacencyList[vertex1]`

### `removeEdge (vertex1, vertex2): void`
#### TIME: `O(1)` | SPACE: `O(1)`
* if both vertices exist and have a connection
    * remove an entry with `value: vertex1` from `adjacencyList[vertex2]`
    * remove an entry with `value: vertex2` from `adjacencyList[vertex1]`

### `removeVertex (vertex: string): void`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `vertex` exists
    * loop through all vertex connections under `adjacencyList[vertex]` (check `value` property of each connection)
        * on each connection call `removeEdge` function
    * remove a key of `vertex` under `adjacencyList`

---

&ast; same implementation in Unweighted Graph

&copy; Oleksandr Levinskyi - 2022
