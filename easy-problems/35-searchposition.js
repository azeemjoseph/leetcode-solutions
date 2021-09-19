var searchInsert = function(nums,target) {
    var left_node = 1;
    var right_node = nums.length;
    
    while(left_node<right_node){
      var mid = Math.floor((right_node + left_node)/2);
      console.log('mid :' ,mid);
      if(nums[mid]==target)
        return mid;
      else if(nums[mid]<target)
        left_node = mid + 1;
      else
        right_node = mid - 1;     
    }
    
    console.log('right_node :' ,right_node);
    return left_node;
      
  }
  
  console.log(searchInsert([1,3,5,6],5));