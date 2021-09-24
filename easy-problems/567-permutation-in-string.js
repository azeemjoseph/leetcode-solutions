var checkInclusion = function(s1,s2) {
    let k=s1.length;
    let permuted = s1.split('').sort().join('');
    let flag = false;
    for(let i=0;i<s2.length;i++) {
        if(!s2[i+k-1]) break;
        if(isPermuted(s2.slice(i,i+k))) {
            flag = true;
            break;
        }
    }
    function isPermuted(sub) {
       return sub.split('').sort().join('') == permuted;
   }
    return flag;
 }

console.log(checkInclusion("ab", "eidbaooo"));