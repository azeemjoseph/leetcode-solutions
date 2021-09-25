/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var permute = function(nums) {
    const result = [];
  const swap = (i, j) => {
      const temp = nums[i];
      nums[i] = nums[j];
      nums[j] = temp;
  };
  
  const rec = (idx) => {
      if(idx === nums.length) {
          result.push([...nums]);
      }
      
      for(let i = idx; i < nums.length; i++) {
          swap(i, idx);
          rec(idx+1);
          swap(i, idx);
      }
  };
  
  rec(0);
  return result;
};


// 2 solution
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
/**
 var permute = function(nums) {
    const result = [];
   for(let i=0; i < nums.length; i++){
       const prefix = nums[i];
       const remainingNums = [...nums];
       remainingNums.splice(i,1);
       const suffixes = permute(remainingNums);
       if(suffixes.length){
           for(const v of suffixes){
               v.unshift(prefix);
               result.push(v);
           }
       }
       else {
           result.push([prefix]);
       }
   }
   return result;
};
*/