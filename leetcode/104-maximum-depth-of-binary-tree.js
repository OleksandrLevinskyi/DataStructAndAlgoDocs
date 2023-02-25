// TIME: O(n)
// SPACE: O(n)
const maxDepth = (root) => {
    if (root === null) {
        return null;
    }

    const left = maxDepth(root.left);
    const right = maxDepth(root.right);

    return Math.max(left, right) + 1;
}
