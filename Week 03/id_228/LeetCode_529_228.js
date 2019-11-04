/**
 * @param {character[][]} grid
 * @return {number}
 */
let infect = function(grid, i, j) {
  if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length || grid[i][j] !== "1") {
    return;
  }
  grid[i][j] = 2;
  infect(grid, i + 1, j);
  infect(grid, i - 1, j);
  infect(grid, i, j + 1);
  infect(grid, i, j - 1);
};

var numIslands = function(grid) {
  let isLandNum = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === "1") {
        infect(grid, i, j);
        isLandNum++;
      }
    }
  }
  return isLandNum;
};
