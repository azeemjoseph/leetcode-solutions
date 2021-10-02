/**
 * @param {number[]} digits
 * @return {number[]}
 */

 var plusOne = function(digits) {
    var len = digits.length;
    for(var i=len-1;i>=0;i--){
        if(digits[i]<9){
            digits[i]++;
            console.log('digits :', digits);            
            return digits;
        } else {            
            digits[i]=0;
        }

        var new_digits = new Array(len++);
        
        var new_digit2 = function() {
            
        }



        new_digits[0] = 1;
        return new_digits;
    }
};


//  var plusOne = function(digits) {
//     const len = digits.length;
//     let carry = 0;
//     for(let i = len - 1; i >= 0; i--) {
//         if(digits[i] === 9) {
//             digits[i] = 0;
//             carry = 1;
//         } else {
//             digits[i] += 1;
//             return digits;
//         }
//     }
//     if(carry === 1)
//     {
//         digits.unshift(carry);
//         return digits;
//     }
// };

// [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
// console.log(plusOne([6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]));
console.log(plusOne([9,9,9]));
// 6145390195186705543