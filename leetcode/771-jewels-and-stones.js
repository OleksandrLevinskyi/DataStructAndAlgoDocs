// TIME: O(j + s) - loop over all jewels and stones
// SPACE: O(j) - to create a jewel dictionary
const numJewelsInStones = (jewels, stones) => {
    const jewelDict = {};
    let result = 0;

    for (let jewel of jewels) {
        jewelDict[jewel] = true;
    }

    for (let stone of stones) {
        if (jewelDict[stone]) {
            result++;
        }
    }

    return result;
}