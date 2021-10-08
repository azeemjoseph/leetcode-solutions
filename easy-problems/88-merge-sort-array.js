/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
 var merge = function(nums1, m, nums2, n) {
    
    var num1_len = m-1;
    var num2_len = n-1;
    
    for(var i = m+n-1; i>=0;i--) {
        if(num2_len < 0) break;
        
        if(nums1[num1_len]> nums2[num2_len]){
            nums1[i] = nums1[num1_len];
            num1_len--;
        } else {
            nums1[i] = nums2[num2_len];
            num2_len--;            
        }
    }
    
};