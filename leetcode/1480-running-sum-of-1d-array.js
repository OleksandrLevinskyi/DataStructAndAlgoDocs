// TIME: O(n) - loop over each element in nums array
// SPACE: O(1)
const runningSum = (nums) => {
    for (let i = 1; i < nums.length; i++) {
        nums[i] += nums[i - 1];
    }

    return nums;
}