// TIME: O(n)
// SPACE: O(1)
const productExceptSelf = (nums) => {
    const result = [1];
    let rightSideProduct = 1;

    // calculate left side product for each element and store it in result array
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // calculate right side product without extra memory
    for (let i = nums.length - 1; i >= 0; i--) {
        result[i] *= rightSideProduct;
        rightSideProduct *= nums[i];
    }

    return result;
}
