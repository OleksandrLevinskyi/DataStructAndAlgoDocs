// TIME: O(n) - loop over each element of operations array
// SPACE: O(1)
const finalValueAfterOperations = (operations) => {
    let result = 0;

    for (let operation of operations) {
        if (operation[1] === '-') {
            result--;
        } else {
            result++;
        }
    }

    return result;
}