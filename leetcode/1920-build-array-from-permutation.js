// https://www.cuemath.com/numbers/euclids-division-algorithm/
const buildArray = (nums) => {
    // pre-process the array with euclid's division algorithm
    for (let i = 0; i < nums.length; i++) {
        const oldValue = nums[i];
        const newValue = nums[nums[i]] % nums.length;

        nums[i] = nums.length * newValue + oldValue;
    }

    // extract new values from the pre-processed array
    for (let i = 0; i < nums.length; i++) {
        nums[i] = Math.floor(nums[i] / nums.length);
    }

    return nums;
}