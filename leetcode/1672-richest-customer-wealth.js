// TIME: O(n*m) - loop over each element in a 2d accounts array (n rows; m cols)
// SPACE: O(1)
const maximumWealth = (accounts) => {
    let maxWealth = 0;

    for (let account of accounts) {
        let customerWealth = 0;

        for (let bankBalance of account) {
            customerWealth += bankBalance;
        }

        if (maxWealth < customerWealth) {
            maxWealth = customerWealth;
        }
    }

    return maxWealth;
}