// TIME: O(n)
// SPACE O(n)
const diameterOfBinaryTree = (root) => {
    const maxDiameter = [0];
    dfs(root, maxDiameter);

    return maxDiameter[0];
}

const dfs = (root, maxDiameter) => {
    if (root === null) {
        return 0;
    }

    const maxLeftHeight = dfs(root.left, maxDiameter);
    const maxRightHeight = dfs(root.right, maxDiameter);

    maxDiameter[0] = Math.max(maxDiameter[0], Math.max(maxLeftHeight + maxRightHeight));

    return Math.max(maxLeftHeight, maxRightHeight) + 1;
}

// another approach with returning [maxHeight, maxDiameter]:
// const diameterOfBinaryTree = (root) => {
//     return dfs(root)[1];
// }

// const dfs = (root) => {
//     if (root === null) {
//         return [0, 0];
//     }

//     const left = dfs(root.left);
//     const right = dfs(root.right);

//     const maxHeight = Math.max(left[0], right[0]) + 1;
//     const maxDiameter = Math.max(left[0] + right[0], Math.max(left[1], right[1]));

//     return [maxHeight, maxDiameter];
// }
