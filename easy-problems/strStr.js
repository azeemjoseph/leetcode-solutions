var strStr = function(haystack, needle) {
    var len= haystack.length;
    var needle_length = needle.length;
    if(needle.length === 0 || (needle.length === 1 && len === 1)) return 0;
    
    for(var i= 0;i<len; i++) {
     console.log('haystack.substr(i,needle_length)  : ', haystack.substr(i,needle_length) );
     if(haystack.substr(i,needle_length) === needle) 
     return i;     
    }
    return -1;    
};


console.log(strStr("ujkkkiii","iii"));
console.log(strStr("aaaaa","bba"));

