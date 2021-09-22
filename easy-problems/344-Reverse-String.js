var reverseString = function (s) {
  var low = 0;
  var high = s.length - 1;

  while (low < high) {
    var temp = s[low];
    s[low] = s[high];
    s[high] = temp;
    low++;
    high--;
  }
  return s;
};
