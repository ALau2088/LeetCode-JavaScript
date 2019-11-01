/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {    
  let gridNew = [];
  let increase = 0;
  let tb = [], lr = []
  
  for (let i = 0; i < grid.length; i++){
      lr.push(Math.max(...grid[i]))
      tb.push(maxColumnVal(i, grid))
  }
  
  console.log(lr, tb)
  for (let i = 0; i < lr.length; i++){
      gridNew[i] = []
      for (let j = 0; j < tb.length; j++){
          let minVal = Math.min(lr[i], tb[j])
          gridNew[i].push(minVal)
      }
  }
  
  console.log('line 26',gridNew)
  for (let i = 0; i < gridNew.length; i++){
      for (let j = 0; j < gridNew.length; j++){
          let difference = gridNew[i][j] - grid[i][j]
          increase += difference
      }
  }
  
  return increase
};

// maxColumnVal helper function
const maxColumnVal = function(column, grid){
  let columnValues = []
  for (let i = 0; i < grid.length; i++){
      columnValues.push(grid[i][column])
  }
  return Math.max(...columnValues)
}