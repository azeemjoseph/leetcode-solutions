/**
 * @param {number[]} nums
 * @return {number}
 */

var removeDuplicate = function(nums) {
    var len = nums.length;
    if(len==0 || len==1) return 0;         //as provided in Constraints
    var firstpointer = 0;
    for(var secondpointer = 1; secondpointer<len; secondpointer++) {
        if(nums[firstpointer]!==nums[secondpointer]){
            // console.log('++firstpointer : ', ++firstpointer);
            // console.log('firstpointer++ : ', firstpointer++);
            nums[++firstpointer]=nums[secondpointer];
        }
    }
    return firstpointer+1;

}


console.log(removeDuplicate([0,0,1,1,1,2,2,3,3,4]));

