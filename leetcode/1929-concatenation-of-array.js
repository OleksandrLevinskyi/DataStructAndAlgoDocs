// TIME: O(n) - loop over each element in nums array
// SPACE: O(n) - space allocated for ans array (2 times bigger than nums)
const getConcatenation = (nums) => {
    const ans = [];

    for (let i = 0; i < nums.length; i++) {
        ans[i] = nums[i];
        ans[i + nums.length] = nums[i];
    }

    return ans;
}

// REFACTORED VERSION:
// const getConcatenation = (nums) => [...nums, ...nums];