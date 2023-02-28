// Kadane's Algorithm:
// TIME: O(n)
// SPACE: O(1)
const maxSubArray = (nums) => {
    let windowSum = 0;
    let maxSum = -Infinity;

    for (let i = 0; i < nums.length; i++) {
        if (windowSum < 0) {
            windowSum = 0;
        }

        windowSum += nums[i];
        maxSum = Math.max(maxSum, windowSum);
    }

    return maxSum;
}
