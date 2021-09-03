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