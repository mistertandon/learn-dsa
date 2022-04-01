let mapping = {
  1: "a",
  2: "b",
  3: "c",
  4: "d",
  5: "e",
  6: "f",
  7: "g",
  8: "h",
  9: "i",
  10: "j",
  11: "k",
  12: "l",
  13: "m",
  14: "n",
  15: "o",
  16: "p",
  17: "q",
  18: "r",
  19: "s",
  20: "t",
  21: "u",
  22: "v",
  23: "w",
  24: "x",
  25: "y",
  26: "z",
};

let expr_str = "123";
let decode_ways_obj = {};
let prev_mapping = "";
let result_encoding = {};
for (let i = 0; i < expr_str.length; i++) {
  if (i == 0) {
    let current_mapping = mapping[expr_str[i]] ? mapping[expr_str[i]] : "";

    if (current_mapping) {
      decode_ways_obj[i] = current_mapping;
      prev_mapping = current_mapping;
      result_encoding[i] = [current_mapping];
    } else {
      result_encoding[i] = [];
    }
    continue;
  }

  let current_mapping = mapping[expr_str[i]] ? mapping[expr_str[i]] : "";

  if (current_mapping) {
    result_encoding[i] = result_encoding[i - 1].map(
      (en) => `${en}${current_mapping}`
    );
  }

  let prev_curr_mapping_old = `${expr_str[i - 1]}${expr_str[i]}`;
  let prev_curr_mapping = mapping[prev_curr_mapping_old]
    ? mapping[prev_curr_mapping_old]
    : "";
  if (prev_curr_mapping) {
    if (i - 2 >= 0) {
      let i_2th_decoding = [];
      i_2th_decoding = result_encoding[i - 2].map(
        (en) => `${en}${prev_curr_mapping}`
      );
      result_encoding[i] = [...result_encoding[i], ...i_2th_decoding];
    } else {
      console.log("i = ", i);
      result_encoding[i] = [...result_encoding[i], prev_curr_mapping];
    }
  }
}
console.log("result_encoding", result_encoding);
