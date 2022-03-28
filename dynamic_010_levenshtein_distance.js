/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const levenshteinDistance = (s1, s2) => {
  let s1_p = `_${s1}`;
  let s2_p = `_${s2}`;

  let mtx = [...Array(s1_p.length)].map((x) => 0);
  let i, j;
  for (i = 0; i < s1_p.length; i++) {
    mtx[i] = [...Array(s2_p.length)].map((x) => 0);
    for (j = 0; j < s2_p.length; j++) {
      if (i === 0) {
        mtx[i][j] = j;
        continue;
      }

      if (j === 0) {
        mtx[i][j] = i;
        continue;
      }

      if (s1_p[i] == s2_p[j]) {
        mtx[i][j] = mtx[i - 1][j - 1];
        continue;
      }

      let a = mtx[i][j - 1] + 1;
      let d = mtx[i - 1][j] + 1;
      let s = mtx[i - 1][j - 1] + 1;
      let min_distance = a < d ? (a < s ? a : s) : d < s ? d : s;
      mtx[i][j] = min_distance;
    }
  }

  return mtx[i - 1][j - 1];
};

let s1 = "intention";
let s2 = "execution";

let min_distance = levenshteinDistance(s1, s2);
console.log("min_distance - ", min_distance);
