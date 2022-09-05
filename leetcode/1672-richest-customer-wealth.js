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