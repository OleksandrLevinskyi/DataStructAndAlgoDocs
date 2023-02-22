// TIME: O(n)
// SPACE: O(1)
const lowestCommonAncestor = (root, p, q) => {
    const min = Math.min(p.val, q.val);
    const max = Math.max(p.val, q.val);

    while (root !== null) {
        if (root.val > max) {
            root = root.left;
        } else if (root.val < min) {
            root = root.right;
        } else {
            return root;
        }
    }
    
    return null;
}
