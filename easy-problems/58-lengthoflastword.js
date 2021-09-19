var lengthOfLastWOrd = function (s) {
  
    var len = s.length;
    var result = 0;
    
    while(len>0){
      if(s[--len] !== ' '){
        result++;
      } 
      else if(result > 0){
       return result;
      }  
        
    }
    return result;
    
  }
  
  console.log(lengthOfLastWOrd("   fly me   to   the moon  "));



/* second solution
var lengthOfLastWOrd = function (s) {
    s = s.trim();
    s = s.split(' ');
    s = s[s.length-1];
    return s.length;
  }
  
  console.log(lengthOfLastWOrd("   fly me   to   the moon  "));
*/  