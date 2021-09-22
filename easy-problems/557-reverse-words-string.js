

var reverseWords = function(s) {
    var s = s.trim();
    var i = this.length;
    while (i>0) {
        s += this.substring(i-1,i);
        i--;
    }
    return s;
};

// var reverseWords = function(s) {    
//    return s.split("").reverse().join("");
// };

console.log(reverseString("Let's take LeetCode contest"));