/**
 * @param {Array<number>} inputSet
 * @return {Array<Array<number>>}
 */
const powerset = (inputSet) => {
  let power_set = [];
  let sub_set = inputSet.slice(1);

  for (let i = 0; i < inputSet.length; i++) {
    if (i == 0) {
      inputSet.length === 1
        ? power_set.push([...inputSet], [])
        : power_set.push([...inputSet], [inputSet[i]]);
      continue;
    }
    if (inputSet.length === 2) break;
    power_set.push([inputSet[0], inputSet[i]]);
  }

  if (sub_set.length > 0) {
    let sub_set_from_future = [];
    sub_set_from_future = powerset(sub_set);
    if (sub_set_from_future.length > 0) {
      power_set = power_set.concat(sub_set_from_future);
    }
  }

  return power_set;
};

let input_arr = [1, 2, 3];
let output_arr;
output_arr = powerset(input_arr);
console.log(output_arr);
