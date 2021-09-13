var search = function(nums, target) {
    var left_node = 0;
  var right_node = nums.length;
    

  while(left_node<=right_node) {
    var mid = Math.floor((left_node + right_node)/2);
    if(nums[mid]==target) 
      return mid;
    else if(nums[mid] < target) 
      left_node = mid + 1;
    else
      right_node = mid - 1;
  }  

  return -1;
};