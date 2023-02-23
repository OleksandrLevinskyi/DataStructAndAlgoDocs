// TIME: O(n)
// SPACE: O(n)
const isBalanced = (root) => {
    const result = getHeight(root);

    return result[0];
}

const getHeight = (root) => {
    if (root === null) {
        return [true, 0];
    }

    const left = getHeight(root.left);
    const right = getHeight(root.right);

    const isSubtreeBalanced = Math.abs(left[1] - right[1]) <= 1 && left[0] && right[0];
    const maxSubtreeHeight = Math.max(left[1], right[1]) + 1;

    return [isSubtreeBalanced, maxSubtreeHeight];
}

// a similar solution without using [bool, int] arrays:
// const isBalanced = (root) => {
//     const result = getHeight(root);

//     return result !== -1;
// }

// const getHeight = (root) => {
//     if (root === null) {
//         return 0;
//     }

//     const leftHeight = getHeight(root.left);
//     const rightHeight = getHeight(root.right);

//     const isSubtreeBalanced = Math.abs(leftHeight - rightHeight) <= 1 && 
//                                 leftHeight !== -1 && 
//                                 rightHeight !== -1;
    
//     if (isSubtreeBalanced) {
//         return Math.max(leftHeight, rightHeight) + 1;
//     }

//     return -1;
// }
