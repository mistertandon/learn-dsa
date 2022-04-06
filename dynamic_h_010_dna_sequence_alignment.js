const GAP_COST = 1;
const HYPHEN = "-";
const alignmentCosts = {
  // No cost to match characters that are the same
  AA: 0,
  CC: 0,
  GG: 0,
  TT: 0,

  /*
    Costs arbitrarily chosen. Symmetry shouldn't guarantee same
    alignment cost because character 1 is from s1 and character
    2 is from s2. So "AC" could theoretically cost more(or less)
    to align than "CA".
  */
  AC: 1,
  CA: 1,

  AG: 2,
  GA: 2,

  AT: 4,
  TA: 4,

  CG: 3,
  GC: 3,

  CT: 5,
  TC: 5,

  GT: 1,
  TG: 1,
};

/**
 * @param {string} s1
 * @param {string} s2
 * @return {number}
 */
const minCostAlignment = (s1, s2) => {
  console.log(`S1 - ${s1}`);
  console.log(`S2 - ${s2}`);
  let _s1 = `${HYPHEN}${s1}`;
  let _s2 = `${HYPHEN}${s2}`;

  let rows = _s1.length;
  let cols = _s2.length;

  console.log(`rows - ${rows}`);
  console.log(`cols - ${cols}`);

  let mtx = [...Array(rows)].map(() => 0);

  for (let i = 0; i < rows; i++) {
    mtx[i] = [...Array(cols)].map(() => 0);
    for (let j = 0; j < cols; j++) {
      if (i == 0) {
        mtx[i][j] = j;
        continue;
      }

      if (j == 0) {
        mtx[i][j] = i;
        continue;
      }

      if (_s1[i] == _s2[j]) {
        mtx[i][j] = mtx[i - 1][j - 1];
        continue;
      }

      let prevAlignCost = mtx[i - 1][j - 1];
      let unmatchCost = alignmentCosts[`${_s1[i]}${_s2[j]}`] + prevAlignCost;

      let gap_s1 = 1 + mtx[i - 1][j];
      let gap_s2 = 1 + mtx[i][j - 1];

      let min_cost = Math.min(
        parseInt(unmatchCost),
        parseInt(gap_s1),
        parseInt(gap_s2)
      );
      mtx[i][j] = min_cost;
    }
  }
  console.log(mtx);
};

let s1 = "GACGTTA";
let s2 = "GAACGCTA";

minCostAlignment(s1, s2);
