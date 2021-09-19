const reverse_Nums = (nums,first_index,last_index) => {
    while(first_index < last_index) {
      [nums[first_index], nums[last_index]] = [nums[last_index], nums[first_index]];
      first_index++;
      last_index--;
    }
 }
 
 var rotate = function(nums,k) {
     k %= nums.length;
     
    nums.reverse();
    reverse_Nums(nums,0,k - 1);
    reverse_Nums(nums,k, nums.length - 1);
 };