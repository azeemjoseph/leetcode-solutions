/**
 * @param {number} n - a positive integer
 * @return {number} - a positive integer
 */
 var reverseBits = function(n) {
    var count = 0;
    var index = 31;
    while (n > 0) {
      if (n % 2 !== 0) count += Math.pow(2, index);
      index--;
      n = Math.floor(n / 2);
    }
return count
};


console.log(reverseBits(00000010100101000001111010011100));