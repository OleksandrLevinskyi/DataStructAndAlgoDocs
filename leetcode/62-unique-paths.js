// bottom-up/tabulation approach:
// TIME: O(m * n)
// SPACE: O(n)
const uniquePaths = (m, n) => {
    const rowStats = [];

    rowStats[n - 1] = 1;

    for (let r = m - 1; r >= 0; r--) {
        for (let c = n - 2; c >= 0; c--) {
            rowStats[c] = rowStats[c + 1] + (rowStats[c] ? rowStats[c] : 0);
        }
    }

    return rowStats[0];
}

// alternative top-down/memoization approach:
// TIME: O(m * n)
// SPACE: O(m * n)
// const uniquePaths = (m, n) => {
//     const keyOfEndNode = `${m - 1}-${n - 1}`;
//     const cache = {};

//     cache[keyOfEndNode] = 1;

//     return helper(0, 0, m, n, cache);
// }

// const helper = (currRow, currCol, totalRows, totalCols, cache) => {
//     const key = `${currRow}-${currCol}`;

//     if (cache[key]) {
//         return cache[key];
//     }

//     cache[key] = 0;

//     if (currRow < totalRows - 1) {
//         cache[key] += helper(currRow + 1, currCol, totalRows, totalCols, cache);
//     }

//     if (currCol < totalCols - 1) {
//         cache[key] += helper(currRow, currCol + 1, totalRows, totalCols, cache);
//     }

//     return cache[key];
// }
