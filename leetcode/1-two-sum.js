// TIME: O(n)
// SPACE: O(n)
const twoSum = (nums, target) => {
    let dict = {};
    for (let i = 0; i < nums.length; i++) {
        if (dict[target - nums[i]] !== undefined) {
            return [dict[target - nums[i]], i];
        }
        dict[nums[i]] = i;
    }
    return [];
}
