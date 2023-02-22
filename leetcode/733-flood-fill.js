// TIME: O(n)
// SPACE: O(n)
const floodFill = (image, sr, sc, color) => {
    let initColor = image[sr][sc];
    
    if (initColor === color) {
        return image;
    }

    dfs(initColor, image, sr, sc, color);

    return image;
}

const dfs = (initColor, image, sr, sc, color) => {
    if (sr < 0 || sr >= image.length || sc < 0 || sc >= image[0].length || image[sr][sc] !== initColor) {
        return;
    }

    image[sr][sc] = color;

    dfs(initColor, image, sr - 1, sc, color);
    dfs(initColor, image, sr + 1, sc, color);
    dfs(initColor, image, sr, sc - 1, color);
    dfs(initColor, image, sr, sc + 1, color);
}
