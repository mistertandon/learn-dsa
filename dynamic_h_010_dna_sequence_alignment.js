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
  let _s1 = `${HYPHEN}${s1}`;
  let _s2 = `${HYPHEN}${s2}`;

  let rows = _s1.length;
  let cols = _s2.length;

  console.log(`rows - ${rows}`);
  console.log(`cols - ${cols}`);

  let mtx = [...Array(rows)].map(() => "");

  for (let i = 0; i < rows; i++) {
    mtx[i] = [...Array(cols)].map(() => "");
  }
  console.log(mtx);
};

let s1 = "GACGTTA";
let s2 = "GAACGCTA";

minCostAlignment(s1, s2);
