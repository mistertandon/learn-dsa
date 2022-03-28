let arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
let total = 0;

for (let i = 0; i < arr.length; i++) {
  if (i == 0) {
    total = arr[i];
    continue;
  }

  if (total + arr[i] > arr[i]) {
    total = total + arr[i];
  } else {
    total = arr[i];
  }
}

console.log(total);
