const computePowerset = (inputSet, level) => {
  let power_set = [];
  for (let i = 0; i < inputSet.length - level; i++) {
    let initial_set = [inputSet[i]];
    let remaining_set = [];
    for (let j = i; j < inputSet.length - level; j++) {
      let lower_limit = j + 1;
      let upper_limit = j + 1 + level;

      if (upper_limit > lower_limit) {
        remaining_set.push([
          ...initial_set,
          ...inputSet.slice(lower_limit, upper_limit),
        ]);
      }
    }

    power_set.push([initial_set, ...remaining_set]);
  }
  return power_set;
};

const powerset = (inputSet) => {
  let power_set = [];
  let level = 0;
  let arr_from_future;

  for (let i = 0; i <= inputSet.length; i++) {
    arr_from_future = computePowerset(inputSet, level);
    if (Array.isArray(arr_from_future) && arr_from_future.length > 0) {
      power_set = power_set.concat(arr_from_future);
    }
    level++;
  }

  return power_set;
};

let input_arr = [1, 2, 3];
let output_arr;
output_arr = powerset(input_arr);
console.log(output_arr);
