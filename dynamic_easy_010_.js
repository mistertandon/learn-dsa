let triangle = [[5], [1, 6], [4, 3, 10], [3, 2, 4, 1]];

let rows = triangle.length;

/**
 * Traverse from 2nd last row to 0th row.
 *    Traverse from 0th column of current to last column.
 */
for (let i = rows - 2; i >= 0; i--) {
  let cols = triangle[i].length;
  for (let j = 0; j < cols; j++) {
    let left_sum = triangle[i][j] + triangle[i + 1][j];
    let right_sum = triangle[i][j] + triangle[i + 1][j + 1];

    /**
     *  min_sum: Minimum sub will replace previous value at `[i][j]` index
     */
    let min_sum = left_sum <= right_sum ? left_sum : right_sum;
    triangle[i][j] = min_sum;
  }
}

console.log(triangle);
console.log(triangle[0][0]);
