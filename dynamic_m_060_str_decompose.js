/**
 * @param {Array<string>} dictionary
 * @param {string} s
 * @return {boolean}
 */
const canDecompose = (dictionary, s) => {
  let dictionary_obj = {};
  let dictionary_enteries;
  for (let i = 0; i < dictionary.length; i++) {
    dictionary_obj[dictionary[i]] = dictionary[i].length;
  }

  dictionary_enteries = Object.entries(dictionary_obj);

  dictionary_enteries.sort((a, b) => b[1] - a[1]);
  console.log(dictionary_enteries);

  for (let i = 0; i < dictionary_enteries.length; i++) {
    s = s.replace(new RegExp(`${dictionary_enteries[i][0]}`, "g"), "");
  }

  return s == "" ? true : false;
};

let s = "apple";
let dictionary = ["ap", "pl", "ppp", "pple"];

let ans = canDecompose(dictionary, s);

console.log(`ans: ${ans}`);
