let stock_array = [7, 1, 5, 3, 6, 4];
let price_array = [...Array(stock_array.length)].map((x) => 0);
let is_first_item = true;

for (i = 0; i < stock_array.length; i++) {
  console.log(`stock array ${i}th element : ${stock_array[i]}`);

  if (is_first_item) {
    is_first_item = false;
    continue;
  }

  let current_day_selling_profit;
  current_day_selling_profit =
    stock_array[i] - stock_array[i - 1] + price_array[i - 1];
  current_day_selling_profit =
    current_day_selling_profit > 0 ? current_day_selling_profit : 0;

  price_array[i] = current_day_selling_profit;
}

console.log(price_array);
