// dfs approach (with recursion):
// TIME: O(n)
// SPACE: O(n)
const levelOrder = (root) => {
    const result = [];
    dfsPreOrder(root, result, 0);

    return result;
}

const dfsPreOrder = (root, result, height) => {
    if (root) {
        if (result.length <= height) {
            result.push([]);
        }

        result[height].push(root.val);

        dfsPreOrder(root.left, result, height + 1);
        dfsPreOrder(root.right, result, height + 1);
    }
}

// bfs approach (with a queue):
// TIME: O(n)
// SPACE: O(n)
// const levelOrder = (root) => {
//     const result = [];
//     const queue = [];
//     let levelSize = 0;

//     if (root === null) {
//         return result;
//     }

//     queue.unshift(root);

//     while (queue.length > 0) {
//         levelSize = queue.length;
//         const currLevel = [];

//         for (let i = 0; i < levelSize; i++) {
//             const curr = queue.pop();
//             currLevel.push(curr.val);

//             if (curr.left) {
//                 queue.unshift(curr.left);
//             } 
//             if (curr.right) {
//                 queue.unshift(curr.right);
//             }
//         }

//         result.push(currLevel);
//     }

//     return result;
// }
