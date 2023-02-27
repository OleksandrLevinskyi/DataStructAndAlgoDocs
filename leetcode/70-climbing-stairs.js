// TIME: O(n)
// SPACE: O(n)
const climbStairs = (n) => {
    const solutions = [1, 1];
    
    for (let i = 2; i <= n; i++) {
        solutions[i] = solutions[i - 1] + solutions[i - 2];
    }

    return solutions[n];
}
