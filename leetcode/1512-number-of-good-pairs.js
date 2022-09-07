//https://math.stackexchange.com/questions/167313/difference-between-permutation-and-combination
//TIME: O(n) - loop over each element in nums & numberDict
//SPACE: O(n) - to store elements in numberDict
const numIdenticalPairs = (nums) => {
    const numberDict = {};
    let goodPairCount = 0;

    for (let num of nums) {
        if (!numberDict[num]) {
            numberDict[num] = 1;
        } else {
            numberDict[num]++;
        }
    }

    for (let key in numberDict) {
        const count = numberDict[key];
        goodPairCount += count * (count - 1) / 2;
    }

    return goodPairCount;
}