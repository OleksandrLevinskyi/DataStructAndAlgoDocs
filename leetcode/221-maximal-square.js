// bottom-up/tabulation approach:
// TIME: O(mn)
// SPACE: O(1)
const maximalSquare = (matrix) => {
    let max = 0;

    for (let r = 0; r < matrix.length; r++) {
        for (let c = 0; c < matrix[0].length; c++) {
            if (matrix[r][c] == '0') {
                continue;
            }

            if (r > 0 && c > 0) {
                matrix[r][c] = 1 + Math.min(
                    matrix[r - 1][c], 
                    matrix[r - 1][c - 1], 
                    matrix[r][c - 1]
                );
            }

            max = Math.max(max, matrix[r][c]);
        }
    }

    return max ** 2;
}

// top-down/memoizaiton approach:
// TIME: O(mn)
// SPACE: O(mn)
// const maximalSquare = (matrix) => {
//     const cache = {'max': 0};

//     helper(0, 0, matrix, cache);

//     return cache['max'] ** 2;
// }

// const helper = (r, c, arr, cache) => {
//     const key = `${r}-${c}`;

//     if (r >= arr.length || c >= arr[0].length) {
//         return 0;
//     }

//     if (cache[key]) {
//         return cache[key];
//     }

//     const bottom = helper(r + 1, c, arr, cache);
//     const diagonal = helper(r + 1, c + 1, arr, cache);
//     const right = helper(r, c + 1, arr, cache);

//     cache[key] = 0;

//     if (arr[r][c] == '1') {
//         cache[key] = 1 + Math.min(bottom, diagonal, right);
//         cache['max'] = Math.max(cache['max'], cache[key]);
//     }

//     return cache[key];
// }
