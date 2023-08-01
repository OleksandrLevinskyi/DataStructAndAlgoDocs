// TIME: O(coins * amount)
// SPACE: O(amount)
// tabulation approach (bottom-up)
const coinChange = (coins, amount) => {
    const table = Array(amount + 1).fill(amount + 1);

    table[0] = 0;

    for (let subAmount = 1; subAmount < amount + 1; subAmount++) {
        for (let coin of coins) {
            if (subAmount - coin >= 0) {
                table[subAmount] = Math.min(table[subAmount], 1 + table[subAmount - coin]);
            }
        }
    }

    return table[amount] !== amount + 1 ? table[amount] : -1;
}

// alternative memoization approach (top-down) -> requires additional space for a call stack
// const coinChange = (coins, amount) => {
//     const cache = Array(amount + 1).fill(Infinity);

//     cache[0] = 0;

//     return dpHelper(coins, amount, cache);
// }

// const dpHelper = (coins, remainder, cache) => {
//     if (remainder < 0) {
//         return -1;
//     }

//     if (cache[remainder] !== Infinity) {
//         return cache[remainder];
//     }

//     for (let coin of coins) {
//         const result = dpHelper(coins, remainder - coin, cache);

//         if (result >= 0) {
//             cache[remainder] = Math.min(cache[remainder], 1 + result);
//         }
//     }

//     if (cache[remainder] === Infinity) {
//         cache[remainder] = -1; // if the remainder does not have valid combinations, mark as -1
//     }

//     return cache[remainder];
// }
