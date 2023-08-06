// TIME: O(n)
// SPACE: O(1)
const maxProduct = (nums) => {
    let min = 1;
    let max = 1;
    let result = Math.max(...nums);
    let temp;

    for (let num of nums) {
        if (num === 0) {
            min = 1;
            max = 1;
        }

        temp = min;
        min = Math.min(min * num, max * num, num);
        max = Math.max(temp * num, max * num, num);
        result = Math.max(result, max);
    }

    return result;
}
