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