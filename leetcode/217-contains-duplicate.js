// TIME: O(n)
// SPACE: O(n)
const containsDuplicate = (nums) => {
    const dict = {};

    for (let num of nums) {
        if (dict[num]) {
            return true;
        }

        dict[num] = true;
    }

    return false;
}
