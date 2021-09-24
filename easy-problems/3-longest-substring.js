
var lengthOfLongestSubstring = function(s) {
    var slowPointer = 0;
    var fastPointer = 0;
    var max = 0;
    var len = s.length;
    
    var hashSet = new Set();
    while(fastPointer < len) {
      if(!hashSet.has(s.charAt(fastPointer))) {
        hashSet.add(s.charAt(fastPointer));
        fastPointer++;
        max = Math.max(hashSet.size,max);
      }else{
        hashSet.delete(s.charAt(slowPointer));
        slowPointer++;
      }
    }
    return max;
};










// var lengthOfLongestSubstring = function(s) {
//     var max = 0, current_string = "", i, char, pos;

//     for (i = 0; i < s.length; i += 1) {
//         char = s.charAt(i);
//         pos = current_string.indexOf(char);
//         if (pos !== -1) {
//             current_string = current_string.substr(pos + 1);
//         }
//         current_string += char;
//         max = Math.max(max, current_string.length);
//     }
//     return max;
// };