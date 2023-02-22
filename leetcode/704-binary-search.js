// TIME: O(logn)
// SPACE: O(1)
const search = (nums, target) => {
    let middleIdx;
    let startIdx = 0;
    let endIdx = nums.length - 1;

    while (endIdx >= startIdx) {
        middleIdx = Math.floor((startIdx + endIdx) / 2);

        if (nums[middleIdx] === target) {
            return middleIdx;
        }

        if (nums[middleIdx] > target) {
            endIdx = middleIdx - 1;
        } else {
            startIdx = middleIdx + 1;
        }
    }

    return -1;
}
