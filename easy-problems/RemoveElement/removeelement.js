var removeElement = function (nums, val) {
  if (nums === 0) return 0;
  var len = nums.length;
  var i = 0;

  for (var j = 0; j < len; j++) {
    if (nums[j] !== val) {
      nums[i] = nums[j];
      i++;
    }
  }

  return i;
};

console.log(removeElement([3, 2, 2, 3], 2));
