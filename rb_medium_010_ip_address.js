const getIpAddressesPermutation = (
  ip_addresses_recieve,
  ip_from_last_level = [],
  level = 0,
  ip_addresses_length,
  ip_addresses_compute
) => {
  let ip_addresses_ref = [...ip_addresses_recieve];
  let current_level = level;
  current_level++;
  /**
   * As IP address is made up of four parts
   * i.e. X.X.X.X
   * therefore, we'll explore combination up to 4 levels only in depth.
   */
  if (current_level > 4) {
    return [];
  }

  let valid_ip_addresses = [];
  for (let idx = 0; idx < 3; idx++) {
    /**
     * There are four parts of an IP address.
     * Here we are getting parts specific number,
     * which could lie between 0 to 255.
     */
    let ip_addresses_current_comb = ip_addresses_ref.slice(0, idx + 1);

    /**
     * We know that if 0 lies somewhere in the IP address then valid
     * IP address can have 0 in one of the format
     * Case A: 0.X.X.X
     * Case B: X.0.X.X
     * Case C: X.X.0.X
     * Case D: X.X.X.0
     */
    if (ip_addresses_ref[0] === 0 && idx > 0) {
      break;
    }

    /**
     * Convert current permutation into equivalent decimal number
     * to make sure individual IP address part is in valid range
     * (0<=) Particular IP address (<=255)
     */
    let num_from_ip_addresses_current_comb = parseInt(
      ip_addresses_current_comb.join("")
    );

    if (1 <= num_from_ip_addresses_current_comb <= 255) {
      let arr_from_future;
      let arr_for_future = ip_addresses_ref.slice(idx + 1);
      let final_ip_combination;
      final_ip_combination = ip_from_last_level.concat(
        ip_addresses_current_comb
      );

      arr_from_future = getIpAddressesPermutation(
        arr_for_future,
        final_ip_combination,
        current_level,
        ip_addresses_length,
        ip_addresses_compute
      );

      if (current_level === 4) {
        if (ip_addresses_length === final_ip_combination.length) {
          ip_addresses_compute.push([...final_ip_combination]);
        }
      }
    }
  }
  return valid_ip_addresses;
};

const restoreIpAddresses = (rawIpString) => {
  let ip_addresses_ref = rawIpString.split("");
  let ip_addresses_length = ip_addresses_ref.length;
  let ip_addresses_compute = [];
  let ips = getIpAddressesPermutation(
    ip_addresses_ref,
    [],
    0,
    ip_addresses_length,
    ip_addresses_compute
  );
  console.log(ips.length);
  console.log(ips);
  console.log(`ip_addresses_compute.length : ${ip_addresses_compute.length}`);
  console.log("ip_addresses_compute ", ip_addresses_compute);
};
let num_ref = "125523213";
// let num_ref = "255255232132";
let valid_ip_addresses;
valid_ip_addresses = restoreIpAddresses(num_ref);
