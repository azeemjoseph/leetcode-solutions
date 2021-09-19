var sortedSquares = function (nums) {
  var len = nums.length;
  var ans = [];
  var left_index = 0;
  var right_index = len - 1;
  var i = len - 1;

  while (i >= 0) {
    if (nums[left_index] * nums[left_index] > nums[right_index] * nums[right_index]) {
        ans[i--] = nums[left_index] * nums[left_index];
        left_index++;
    } else {
        ans[i--] = nums[right_index] * nums[right_index];
        right_index--;
    }
  }

  return ans;
};

console.log(sortedSquares([-4, -1, 0, 3, 10]));

/* brute force solution
var len = nums.length;
  var ans = [];

  for(var i=0; i<len; i++){
    ans.push(Math.pow(nums[i],2));
  }
ans = ans.sort(function(a, b){return a - b});
return ans;
*/
