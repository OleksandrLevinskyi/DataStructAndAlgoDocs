// TIME: O(1)
// SPACE: O(1)
const checkTree = (root) => {
    return root.left.val + root.right.val === root.val;
}