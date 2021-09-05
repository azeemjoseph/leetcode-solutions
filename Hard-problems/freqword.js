function wordFreq(string1, k) {
  var FrequentWordCount = [];
  for (let i = 1; i <= k; i++) {
    var freqWords = {};
    var freqWords1 = {};

    string1.map(function (w) {
      var w = w.slice(0, i);
      if (!freqWords[w]) {
        freqWords[w] = 0;
      }
      if (w in freqWords == true && freqWords[w] == 0 && w.length == i) {
        freqWords[w] += 1;
      }
    });
    var frequency = Object.values(freqWords);
    var sum = 0;
    for (var el in frequency) {
      if (frequency.hasOwnProperty(el)) {
        sum += parseFloat(frequency[el]);
      }
    }
    freqWords1 = sum;
    FrequentWordCount.push(freqWords1);
  }
  return FrequentWordCount;
}

console.log(wordFreq(["apple", "app", "apricot", "stonesss"], 8));
