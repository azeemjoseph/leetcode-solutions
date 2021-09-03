/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(nums, target) {
    var len = nums.length;
    var ans = [];
    
    for(var i = 0; i<len; i++) {
      for(var j=0;j<len;j++){
        var temp = nums[i] + nums[j];
        if(temp == target && i !== j) {            
            ans.push(i);
            ans.push(j);
            return ans;
        }
      }  
    }    
};