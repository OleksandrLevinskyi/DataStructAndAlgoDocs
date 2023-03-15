// TIME: O(2^n)
// SPACE: O(n)
const combinationSum = (candidates, target) => {
    const result = [];
    const currCombo = [];

    dfs(candidates, target, currCombo, 0, 0, result);

    return result;
}

const dfs = (candidates, target, currCombo, currComboSum, start, result) => {
    if (currComboSum > target) {
        return;
    } else if (currComboSum === target) {
        result.push([...currCombo]);
        return;
    }

    for (let i = start; i < candidates.length; i++) {
        currCombo.push(candidates[i]);
        dfs(candidates, target, currCombo, currComboSum + candidates[i], i, result);
        currCombo.pop();
    }
}
