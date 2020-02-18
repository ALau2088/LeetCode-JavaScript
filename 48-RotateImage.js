/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
/*
*IOCE
I: nxn 2d matrix
O: rotated matrix
C: Do not make another matrix
E: 0 elements, 1 elements
*EXAMPLES-on paper
*PSEUDOCODE
FUNC rotate(matrix):
    // edge cases
    IF matrix.length === 0 || matrix.length === 1:
      RETURN matrix

    layers(l) = roundDown(matrix.length/2)
    currentLayer(cl) = 1
    
    FUNC _rotate(cl):
        // Base case 
        IF cl > l:
            RETURN
        // FOR element in top row elements:
          // Remember current top
          // Rotate left to top
              column from matrix.length - n end is + n 
          // Rotate bottom to left
          // Rotate right to bottom
          // Rotate top to left
        END FOR
        _rotate(cl++)
    END FUNC
    _rotate(cl)

    RETURN matrix
END FUNC
*/
var rotate = function(matrix) {
  if (matrix.length === 0 || matrix.length === 1) {
    return matrix;
  }

  var layers = Math.floor(matrix.length / 2);

  var _rotate = function(cl) {
    console.log('line 49', cl);
    if (cl > layers) {
      return;
    }

    for (var i = cl - 1; i < matrix.length - cl; i++) {
      var temp = matrix[cl - 1][i];
      // left to top
      matrix[cl - 1][i] = matrix[matrix.length - 1 - i][cl - 1];
      // bottom to left
      matrix[matrix.length - 1 - i][cl - 1] =
        matrix[matrix.length - cl][matrix.length - 1 - i];
      // right to bottom
      matrix[matrix.length - cl][matrix.length - 1 - i] =
        matrix[i][matrix.length - cl];
      // top to right
      matrix[i][matrix.length - cl] = temp;
    }
    _rotate((cl += 1));
  };

  _rotate(1);
  return matrix;
};
