/**
 * @param {Array<number>} nums
 * @param {number} target
 * @return {number}
 */
const countValidExpressions = (nums) => {
  let elems = [...nums];
  let arr_from_future_create = [];
  let combination = {};

  for (let sign = 0; sign < signs.length; sign++) {
    for (let elem = 0; elem < elems.length; elem++) {
      let next_idx = elem + 1;

      if (next_idx < elems.length) {
        let arr_for_future = nums.slice(next_idx);
        let arr_from_future = countValidExpressions(arr_for_future);

        combination[JSON.stringify(arr_for_future)] = [...arr_from_future];

        let temp = combination[JSON.stringify(arr_for_future)];
        for (let idx = 0; idx < temp.length; idx++) {
          arr_from_future_create.push([signs[sign], elems[elem], ...temp[idx]]);
        }
      } else {
        arr_from_future_create.push([signs[sign], elems[elem]]);
      }
    }
  }

  return arr_from_future_create;
};

let nums = [2, 3, 4];
let target = 9;
let signs = ["+", "-"];
countValidExpressions(nums);
