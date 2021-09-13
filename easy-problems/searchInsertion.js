var searchInsert = (nums, target) => {
    let left_node = 0, right_node = nums.length - 1;
    while(left_node <= right_node) {
        let mid = Math.floor((left_node + right_node) / 2);
        if(nums[mid] == target) {
            return mid;
        } else if(nums[mid] < target) {
            left_node = mid + 1;
        } else {
            right_node = mid - 1;
        }
    }
    return left_node;
}

console.log(searchInsert([-1,0,3,5,9,12],2));



//  brute force search
// var searchInsert = (nums, target) => {
//     var len = nums.length;
//     for(let i = 0; i < len; i++){
//         if(nums[i] >= target) {
//             return i;
//         }
//     }
  
//     return nums.length;
// }

// console.log(searchInsert([1,3,5,6],7));