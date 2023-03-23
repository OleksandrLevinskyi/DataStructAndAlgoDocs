const dirs = [[0, 1], [0, -1], [1, 0], [-1, 0]];

// TIME: O(n)
// SPACE: O(1)
// dynamic programming approach:
const updateMatrix = (mat) => {
    // calculate cell value based on left and top neighbours
    for (let r = 0; r < mat.length; r++) {
        for (let c = 0; c < mat[r].length; c++) {
            let top = +Infinity;
            let left = +Infinity;

            if (mat[r][c] === 0) {
                continue;
            }

            if (r > 0) {
                top = mat[r - 1][c];
            }

            if (c > 0) {
                left = mat[r][c - 1];
            }

            mat[r][c] = Math.min(top, left) + 1;
        }
    }
    
    // calculate cell value based on right and bottom neighbours
    for (let r = mat.length - 1; r >= 0; r--){
        for (let c = mat[r].length - 1; c >= 0; c--) {
            let bottom = +Infinity;
            let right = +Infinity;

            if (mat[r][c] === 0) {
                continue;
            }

            if (r < mat.length - 1) {
                bottom = mat[r + 1][c];
            }

            if (c < mat[r].length - 1) {
                right = mat[r][c + 1];
            }

            mat[r][c] = Math.min(mat[r][c], Math.min(bottom, right) + 1);
        }
    }

    return mat;
}

// bfs approach:
// TIME: O(n)
// SPACE: O(n)
// const updateMatrix = (mat) => {
//     const queue = [];

//     // enqueue all the nodes with 0 and mark others -1 (not visited)
//     for (let r = 0; r < mat.length; r++) {
//         for (let c = 0; c < mat[r].length; c++) {
//             if (mat[r][c] === 0) {
//                 queue.push([r, c]);
//             } else {
//                 mat[r][c] = -1;
//             }
//         }
//     }
    
//     // process the queue
//     while (queue.length > 0) {
//         const [r, c] = queue.shift();

//         // visit all neighbours
//         for (let [dr, dc] of dirs) {
//             const [nr, nc] = [r + dr, c + dc];

//             if (nr < 0 || nr >= mat.length || nc < 0 || nc >= mat[0].length || mat[nr][nc] !== -1) {
//                 continue;
//             }
//             console.log(nr + ' ' + nc)

//             mat[nr][nc] = mat[r][c] + 1;
//             queue.push([nr, nc]);
//         }
//     }

//     return mat;
// }
