// 994-rotting-oranges.js
// TIME: O(n)
// SPACE: O(n)
const orangesRotting = (grid) => {
    const directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    const queue = [];
    let minutes = 0;
    let freshOrangeCount = 0;
    let currLevelCount = 0;

    // count fresh oranges and enqueue all rotten oranges
    for (let r = 0; r < grid.length; r++) {
        for (let c = 0; c < grid[r].length; c++) {
            if (grid[r][c] === 1) {
                freshOrangeCount++;
            } else if (grid[r][c] === 2) {
                queue.unshift([r,c]);
            }
        }
    }

    while (queue.length > 0 && freshOrangeCount > 0) {
        currLevelCount = queue.length;
        minutes++;

        // dequeue all rotten oranges on the current level and explore their neighbors
        for (let i = 0; i < currLevelCount; i++) {
            let [a, b] = queue.pop();

            // visit neighboring nodes
            for (let [x, y] of directions) {
                // calculate coords of neighboring nodes
                let r = a + x;
                let c = b + y;

                if (r < 0 || c < 0 || r >= grid.length || c >= grid[r].length) {
                    continue;
                }

                if (grid[r][c] === 1) {
                    grid[r][c] = 2;
                    queue.unshift([r, c]);
                    freshOrangeCount--;
                }
            }
        }
    }

    return freshOrangeCount > 0 ? -1 : minutes;
}
