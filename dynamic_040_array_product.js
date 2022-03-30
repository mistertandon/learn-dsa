/**
 * Given an array A[] of positive integers,
 * return an array of integers whose k'th element is equal to the
 * product of every integer in A[] except for the k'th element in A[].
 *
 * Example #1:
 *
 * Input: [1, 1, 2, 5]
 * Output: [10, 10, 5, 2]
 *
 * Explanation: The product of the entire array except for
 * the first and second element is 10. The products of the
 * entire array except for the third and fourth elements
 * are 5 and 2, respectively.
 **/

function getArrayProduct(nums) {
  let arr = [...nums];

  let prefix_prod_arr = [...Array(arr.length)].map(() => 1);
  let suffix_prod_arr = [...Array(arr.length)].map(() => 1);
  let prod_arr = [...Array(arr.length)].map(() => 1);

  for (let i = 0; i < arr.length; i++) {
    if (i == 0) continue;

    prefix_prod_arr[i] = arr[i - 1] * prefix_prod_arr[i - 1];
  }

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i == arr.length - 1) continue;

    suffix_prod_arr[i] = arr[i + 1] * suffix_prod_arr[i + 1];
  }

  for (let i = 0; i < arr.length; i++) {
    prod_arr[i] = prefix_prod_arr[i] * suffix_prod_arr[i];
  }

  return prod_arr;
}

let arr_prod_result = getArrayProduct([1, 1, 2, 5]);
console.log("arr_prod_result : ", arr_prod_result);
