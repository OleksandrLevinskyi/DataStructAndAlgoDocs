// TIME: O(n)
// SPACE: O(n)
// bfs approach:
const rightSideView = (root) => {
    const result = [];
    const queue = [root];
    let currLevelSize = 0;
    let currNode;

    if (root === null) {
        return result;
    }

    while (queue.length > 0) {
        currLevelSize = queue.length;

        // iterate over each node for the current level
        for (let i = 0; i < currLevelSize; i++) {
            currNode = queue.pop();

            // if it is the last node on a level, add it to result
            if (i === currLevelSize - 1) {
                result.push(currNode.val);
            }

            if (currNode.left) {
                queue.unshift(currNode.left);
            }
            if (currNode.right) {
                queue.unshift(currNode.right);
            }
        }
    }

    return result;
}

// dfs approach:
// const rightSideView = (root) => {
//     const result = [];
//     dfs(root, result, 0);

//     return result;
// }

// const dfs = (root, result, currLevel) => {
//     if (root === null) {
//         return;
//     }

//     if (result.length === currLevel) {
//         result.push(root.val);
//     }

//     dfs(root.right, result, currLevel + 1);
//     dfs(root.left, result, currLevel + 1);
// }
