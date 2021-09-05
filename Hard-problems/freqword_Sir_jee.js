function getFrequentWordCount(words,k) {
  if(k==1) return [1];
  let arr = [];
  let len = words.length;
  for(let length = 1; length <=k; length++) {
    let set = new Set();
     for(let i=0; i < len; i++) {
       let substring = words[i].substring(0,length);
       if(substring.length==length)
        set.add(substring);        
     }
     arr.push(set.size);
  }
  return arr;
}

console.log(getFrequentWordCount(["apple", "app", "apricot", "stone"], 8));