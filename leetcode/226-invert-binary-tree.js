// TIME: O(n)
// SPACE: O(n) - for stack in memory
const invertTree = (root) => {
    if (root === null) {
        return null;
    }

    [root.left, root.right] = [root.right, root.left];

    root.left = invertTree(root.left);
    root.right = invertTree(root.right);

    return root;
}


// without recursion:
// const invertTree = (root) => {
//     const stack = [];

//     if (root === null) {
//         return null;
//     }

//     stack.push(root);

//     while (stack.length > 0) {
//         const currRoot = stack.pop();

//         [currRoot.left, currRoot.right] = [currRoot.right, currRoot.left];

//         if (currRoot.left) {
//             stack.push(currRoot.left);
//         }
//         if (currRoot.right) {
//             stack.push(currRoot.right);
//         }
//     }

//     return root;
// }
