var isValid = function(s) {
  const parenthesis_stack = [];
  const len =  s.length;
  const parenthesis_map = new Map([
    ['(', ')'],
    ['[', ']'],
    ['{', '}']
  ]);

  for (let i = 0 ; i <len ; i += 1) {
    if (parenthesis_map.has(s[i])) {
        parenthesis_stack.push(parenthesis_map.get(s[i]));
    } else if (s[i] !== parenthesis_stack.pop()) {
      return false;
    } 
  }

  return parenthesis_stack.length === 0;
}

console.log(isValid("[{([])}]"));