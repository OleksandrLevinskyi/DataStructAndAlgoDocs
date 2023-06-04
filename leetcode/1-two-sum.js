// TIME: O(n)
// SPACE: O(n)
const twoSum = (nums, target) => {
    let dict = {};
    let desiredValue;

    for (let i = 0; i < nums.length; i++) {
        desiredValue = target - nums[i];
        
        if (dict[desiredValue] !== undefined) {
            return [dict[desiredValue], i];
        }

        dict[nums[i]] = i;
    }

    return [];
}
