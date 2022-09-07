// TIME: O(n) - visit every tree node
// SPACE: O(n) - for the call stack to store upcoming function calls
const getTargetCopy = (original, cloned, target) => {
    if (original === null || original === target) {
        return cloned;
    }

    // if the target was found in the left subtree, return the cloned tree's node
    const leftSideValue = getTargetCopy(original.left, cloned.left, target);
    if (leftSideValue) {
        return leftSideValue;
    }

    // if the target was NOT found in the left subtree, check the right subtree
    return getTargetCopy(original.right, cloned.right, target);
}

// REFACTORED VERSION:
// const getTargetCopy = (original, cloned, target) => {
//     if (original === null || original === target) {
//         return cloned;
//     }
//
//     return getTargetCopy(original.left, cloned.left, target) ||
//         getTargetCopy(original.right, cloned.right, target);
// }