// TIME: O(n)
// SPACE: O(n)
const cloneGraph = (node) => {
    const dict = {};

    if (node === null) {
        return null;
    }
    
    return dfs(node, dict);
}

const dfs = (originalNode, dict) => {
    if (dict[originalNode.val]) {
        return dict[originalNode.val];
    }

    const duplicatedNode = new Node(originalNode.val, []);
    dict[originalNode.val] = duplicatedNode;

    for (let originalNeighbor of originalNode.neighbors) {
        const duplicatedNeighbor = dfs(originalNeighbor, dict);
        duplicatedNode.neighbors.push(duplicatedNeighbor);
    }

    return duplicatedNode;
}
