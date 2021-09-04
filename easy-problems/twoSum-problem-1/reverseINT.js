var reverse = function(x) {
    let Reverse_No = 0;
    x_Int = Math.abs(x);
    
    while(x_Int) {
        Reverse_No = Reverse_No*10 + (x_Int % 10);
        x_Int = Math.floor(x_Int/10);        
    }
    if(Reverse_No > 0x7FFFFFFF) {        
      return 0;
    } else if(x < 0) {
        return -Reverse_No;
    } else {
        return Reverse_No;
    }
};

/* var reverseN = 0;
var sign = n < 0;
n = Math.abs(n);
while (n) {
    reverseN = reverseN*10 + (n % 10);
    n = Math.floor(n/10);
}
return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
*/