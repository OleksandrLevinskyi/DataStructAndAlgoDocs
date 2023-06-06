// TIME: O(n)
// SPACE: O(1)
const productExceptSelf = (nums) => {
    const result = [1];
    let rightSideProduct = 1;

    // calculate the left-side product
    for (let i = 1; i < nums.length; i++) {
        result[i] = result[i - 1] * nums[i - 1];
    }

    // calculate the right-side product and update the result array
    for (let i = nums.length - 2; i >= 0; i--) {
        rightSideProduct *= nums[i + 1];
        result[i] *= rightSideProduct;
    }

    return result;
}
