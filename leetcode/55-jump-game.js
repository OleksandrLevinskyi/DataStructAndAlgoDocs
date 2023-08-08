// TIME: O(n)
// SPACE: O(1)
const canJump = (nums) => {
    let targetIdx = nums.length - 1;

    for (let i = targetIdx - 1; i >=0; i--) {
        if (nums[i] >= targetIdx - i) {
            targetIdx = i;
        }
    }

    return targetIdx === 0;
}
