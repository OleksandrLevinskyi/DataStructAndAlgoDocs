// TIME: O(n) - loop over all elements in candies array
// SPACE: O(n) - to store result array
const kidsWithCandies = (candies, extraCandies) => {
    let maxCandyCount = 0;
    const result = [];

    for (let candyCount of candies) {
        if (maxCandyCount < candyCount) {
            maxCandyCount = candyCount;
        }
    }

    for (let candyCount of candies) {
        result.push(candyCount + extraCandies >= maxCandyCount);
    }

    return result;
}

// REFACTORED VERSION (subtracting extraCandies):
// const kidsWithCandies = (candies, extraCandies) => {
//     const minRequiredCandies = Math.max(...candies) - extraCandies;
//
//     for (let i = 0; i < candies.length; i++) {
//         candies[i] = candies[i] >= minRequiredCandies;
//     }
//
//     return candies;
// }