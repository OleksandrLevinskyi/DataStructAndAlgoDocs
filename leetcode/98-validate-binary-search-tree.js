// TIME: O(n)
// SPACE: O(n)
// pre-order dfs with recursion:
const isValidBST = (root) => {
    return dfsPreOrder(root, -Infinity, +Infinity);
}

const dfsPreOrder = (root, min, max) => {
    if (root === null) {
        return true;
    }

    if (root.val <= min || root.val >= max) {
        return false;
    }

    return dfsInOrder(root.left, min, root.val) && dfsInOrder(root.right, root.val, max);
}

// in-order dfs with stack:
// const isValidBST = (root) => {
//     const stack = [];
//     let previousRoot = null;

//     while (root !== null || stack.length > 0) {
//         while (root !== null) {
//             stack.push(root);
//             root = root.left;
//         }
        
//         root = stack.pop();

//         if (previousRoot !== null && root.val <= previousRoot.val) {
//             return false;
//         }

//         previousRoot = root;
//         root = root.right;
//     }

//     return true;
// }
