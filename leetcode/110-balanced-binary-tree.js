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
