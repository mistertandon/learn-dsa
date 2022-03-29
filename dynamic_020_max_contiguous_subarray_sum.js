/**
 * @param {Array<number>} nums
 * @return {number}
 */
const maxContiguousSubarraySum = (nums) => {
  var arr = [...nums];
  var max_arr = [...Array(arr.length)].map(() => 0);
  var total = 0;
  var i;

  for (i = 0; i < arr.length; i++) {
    if (i == 0) {
      total = arr[i];
      max_arr[i] = total;
      continue;
    }

    if (total + arr[i] > arr[i]) {
      total = total + arr[i];
    } else {
      total = arr[i];
    }

    max_arr[i] = total;
  }

  var max_sum = max_arr.reduce((a, b) => Math.max(a, b), -Infinity);

  return max_sum;
};
