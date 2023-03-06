// Dutch national flag problem: https://youtu.be/uvB-Ns_TVis
// TIME: O(n)
// SPACE: O(1)
const sortColors = (nums) => {
    let start = 0;
    let end = nums.length - 1;
    let index = 0;

    while (start < end && index < end) {
        if (nums[index] === 0) {
            [nums[index], nums[start]] = [nums[start], nums[index]];
            start++;
            index++;
        } else if (nums[index] === 2) {
            [nums[index], nums[end]] = [nums[end], nums[index]];
            end--;
        } else {
            index++;
        }
    }

    return nums;
}

// edge case (a reason for not incrementing index at 2): [0,1,2,1,0,2]
