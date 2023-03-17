// TIME: O(logn)
// SPACE: O(1)
const search = (nums, target) => {
    let leftIdx = 0;
    let rightIdx = nums.length - 1;
    let middleIdx;
    let startIdx;

    // find a rotating index (aka start of the sorted array)
    while (leftIdx < rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (nums[middleIdx] > nums[rightIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx;
        }
    }

    startIdx = leftIdx;
    leftIdx = 0;
    rightIdx = nums.length - 1;

    // identify what part of the array has the target
    if (target >= nums[startIdx] && target <= nums[rightIdx]) {
        // right side
        leftIdx = startIdx;
    } else {
        // left side
        rightIdx = startIdx;
    }

    // perform binary search on a left or right subarray
    while (leftIdx <= rightIdx) {
        middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (nums[middleIdx] === target) {
            return middleIdx;
        }

        if (nums[middleIdx] < target) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }

    return -1;
}
