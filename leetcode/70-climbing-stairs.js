// bottom-up approach:
// TIME: O(n)
// SPACE: O(n)
const climbStairs = (n) => {
    const solutions = [1, 1];
    
    for (let i = 2; i <= n; i++) {
        solutions[i] = solutions[i - 1] + solutions[i - 2];
    }

    return solutions[n];
}

// an alternative top-down approach:
// TIME: O(n)
// SPACE: O(n)
// const climbStairs = (n, solutions = [1, 1]) => {
//     if (solutions[n]) {
//         return solutions[n];
//     }
    
//     solutions[n] = climbStairs(n - 1, solutions) + climbStairs(n - 2, solutions);

//     return solutions[n];
// }
