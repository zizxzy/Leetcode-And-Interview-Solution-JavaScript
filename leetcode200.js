/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const height = grid.length;
    const width = grid[0].length;
    let res = 0;
    const dfs = (grid, i, j) => {
        const height = grid.length;
        const width = grid[0].length;
        if (i < 0 || j < 0 || i >= width || j >= height || grid[i][j] === '0' || grid[i][j] === '2') {
            return;
        }
        grid[i][j] = '2';
        dfs(grid, i - 1, j);
        dfs(grid, i + 1, j);
        dfs(grid, i, j - 1);
        dfs(grid, i, j + 1);
    };
    for (let i = 0; i < height; i++) {
        for (let j = 0; j < width; j++) {
            if (grid[i][j] === '1') {
                res++;
                dfs(grid, i, j);
            }
        }
    }
    return res;
};