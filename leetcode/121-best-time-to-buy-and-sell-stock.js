// TIME: O(n)
// SPACE: O(1)
const maxProfit = (prices) => {
    let b = 0;
    let maxProfit = 0;
    let profit = 0;

    for (let s = 1; s < prices.length; s++) {
        profit = prices[s] - prices[b];

        if (profit <= 0) {
            b = s;
        } else {
            maxProfit = maxProfit < profit ? profit : maxProfit;
        }
    }

    return maxProfit;
}
