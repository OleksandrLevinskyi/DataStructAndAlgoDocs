// TIME: O(n)
// SPACE: O(n)
const numIslands = (grid) => {
    let count = 0;

    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === '1') {
                dfs(grid, r, c);
                count++;
            }
        }
    }

    return count;
}

const dfs = (grid, r, c) => {
    if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length || grid[r][c] !== '1') {
        return;
    }

    grid[r][c] = '#';

    dfs(grid, r + 1, c);
    dfs(grid, r - 1, c);
    dfs(grid, r, c + 1);
    dfs(grid, r, c - 1);
}
