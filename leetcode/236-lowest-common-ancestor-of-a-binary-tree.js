// TIME: O(n)
// SPACE: O(n)
const lowestCommonAncestor = (root, p, q) => {
    if (root === null || root === p || root === q) {
        return root;
    }

    const left = lowestCommonAncestor(root.left, p, q);
    const right = lowestCommonAncestor(root.right, p, q);

    if (!left && !right) {
        return null;
    }

    if (left && right) {
        return root;
    }

    return left !== null ? left : right;
}
