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
      let elems_mod;

      if (elem == 0) {
        elems_mod = [...elems];
      } else {
        elems_mod = [
          elems[elem],
          ...elems.slice(0, elem),
          ...elems.slice(elem + 1),
        ];
      }

      if (elems_mod.length > 1) {
        let arr_for_future = elems_mod.slice(1);
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
let mine = countValidExpressions(nums);
console.log(mine);
