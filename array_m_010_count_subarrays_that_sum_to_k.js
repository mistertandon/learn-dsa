// let elements = [1, 0, -1, 1];
// let k = 0;
let elements = [3, 7, -4, -2, 1, 5];
let k = 3;
let mtx = [...Array(elements.length)];
let subArrayIndexes = [];

const checkIfSubArraySumEqualToTarget = (
  starting_idx,
  current_idx,
  sum,
  target_sum
) => {
  if (sum == target_sum) {
    subArrayIndexes.push(`${starting_idx}, ${current_idx}`);
  }
  return;
};

for (let i = 0; i < elements.length; i++) {
  mtx[i] = [...Array(elements.length)];
  let init_index = i;
  for (let j = i; j < elements.length; j++) {
    if (i == j) {
      mtx[i][j] = elements[j];
      checkIfSubArraySumEqualToTarget(init_index, j, mtx[i][j], k);
      continue;
    }
    mtx[i][j] = mtx[i][j - 1] + elements[j];
    checkIfSubArraySumEqualToTarget(init_index, j, mtx[i][j], k);
  }
}
console.log(mtx);
console.log(subArrayIndexes);
