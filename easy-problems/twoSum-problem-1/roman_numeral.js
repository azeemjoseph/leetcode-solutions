var romanToInt = function (s) {
  const Symbols_values = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };
  let ans = 0;
  var len = s.length;
  for (let i = len - 1; ~i; i--) {
    let total_number = Symbols_values[s.charAt(i)];
    if (4 * total_number < ans) ans -= total_number;    
    else ans += total_number;
  }
  return ans;
};
  
console.log(romanToInt("LVIII"));

/* Alternate
const romanToNumber = s => Uint16Array.from(s, n => Symbols_values[n])
    .reverse()
    .reduce((sum,value) => sum + (value * 4 < sum ? -value : value)
    );
*/
