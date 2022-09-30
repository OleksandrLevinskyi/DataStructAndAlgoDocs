# Unweighted Graph
Unweighted Graph stores connections between vertices without weight.\
1 property: `adjacencyList`

### `addVertex (vertex): void`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `vertex` does not exist
    * add a key of `vertex` to `adjacencyList` with a value of `[]`

### `addEdge (vertex1, vertex2): void`
#### TIME: `O(E)` | SPACE: `O(1)`
* if both vertices exist and do not have a connection yet
    * push `vertex1` into `adjacencyList[vertex2]`
    * push `vertex2` into `adjacencyList[vertex1]`

### `removeEdge (vertex1, vertex2): void`
#### TIME: `O(E)` | SPACE: `O(1)`
* if both vertices exist and have a connection
    * remove `vertex1` from `adjacencyList[vertex2]`
    * remove `vertex2` from `adjacencyList[vertex1]`

### `removeVertex (vertex: string): void`
#### TIME: `O(1)` | SPACE: `O(1)`
* if `vertex` exists
    * loop through all vertex connections under `adjacencyList[vertex]`
        * on each connection call `removeEdge` function
    * remove a key of `vertex` under `adjacencyList`

---

&copy; Oleksandr Levinskyi - 2022
