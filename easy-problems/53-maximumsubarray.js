
const maxContiguousSubarraySum = (nums) => {
  var maxNo = nums[0];
  var maxEnd = nums[0];
  for (var i = 1; i < nums.length; i++) {
    maxEnd = Math.max(maxEnd + nums[i], nums[i]);
    maxNo = Math.max(maxSoFar, maxEnd);  
  }

  return maxSoFar;
}