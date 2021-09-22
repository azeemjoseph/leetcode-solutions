var twoSum = function(numbers, target) {
    var low = 0;
    var ans = [];
    var high = numbers.length-1;

    while(low<high) {
        if(numbers[low]+numbers[high] == target) {
            ans.push(low+1);
            ans.push(high+1);   
            return ans;         
        }else if (numbers[low]+numbers[high] < target) {
            low++;
        } else {
            high--;
        }
    }
    return ans;

};

console.log(twoSum([2,7,11,15],18));